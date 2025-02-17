<template>
  <BaseModal2 :title="title" :size="'large'" @close="$emit('close')">
    <div class="_pickMediaFromProject">
      <sl-spinner style="--indicator-color: currentColor" v-if="is_loading" />
      <template v-else>
        <DLabel
          :str="$t('source_project')"
          :instructions="$t('media_pickers_instr')"
        />

        <div
          v-if="
            sorted_projects &&
            Array.isArray(sorted_projects) &&
            sorted_projects.length === 0
          "
          class="u-instructions"
          :key="'noprojects'"
        >
          {{ $t("no_projects") }}
        </div>

        <select v-else v-model="source_project_path" class="u-spacingBottom">
          <option
            v-for="project in sorted_projects"
            :key="project.$path"
            :value="project.$path"
            v-text="project.title"
          />
        </select>

        <ToggleInput
          v-if="meta_filenames_already_present"
          class="u-spacingBottom"
          :content.sync="hide_already_present_medias"
          :label="$t('hide_already_present_medias')"
        />

        <div v-if="source_project_path" class="_projectLib">
          <DLabel :str="$t('medias')" />

          <transition name="fade_fast">
            <LoaderSpinner
              class="_loader"
              v-if="is_loading_project"
              key="spinner"
            />
            <MediaLibrary
              v-else
              key="medialib"
              class="_mediaLib"
              :project="source_project"
              :media_focused="media_focused"
              :select_mode="select_mode"
              :hide_already_present_medias="hide_already_present_medias"
              :meta_filenames_already_present="meta_filenames_already_present"
              :show_only_media_type="pick_from_type"
              @update:media_focused="media_focused = $event"
              @addMedias="addMedias"
            />
          </transition>
        </div>
      </template>
    </div>
  </BaseModal2>
</template>
<script>
import MediaLibrary from "@/components/panes/MediaLibrary.vue";

export default {
  props: {
    title: String,
    path: String,
    select_mode: {
      type: String,
      required: true,
    },
    pick_from_type: {
      type: String,
      default: "all",
    },
  },
  components: {
    MediaLibrary,
  },
  inject: {
    $getMetaFilenamesAlreadyPresent: {
      default: false,
    },
  },
  data() {
    return {
      is_loading: false,
      projects: undefined,
      source_project_path: "",
      is_loading_project: false,
      source_project: undefined,
      media_focused: undefined,
      hide_already_present_medias: true,
    };
  },
  created() {},
  async mounted() {
    this.is_loading = true;
    await this.loadProjects();
    this.is_loading = false;
  },
  beforeDestroy() {},
  watch: {
    source_project_path() {
      if (this.source_project_path) this.fetchSelectedProject();
      else this.source_project = undefined;
    },
  },
  computed: {
    meta_filenames_already_present() {
      if (this.$getMetaFilenamesAlreadyPresent)
        return this.$getMetaFilenamesAlreadyPresent();
      return false;
    },
    sorted_projects() {
      if (!this.projects) return [];
      return this.projects
        .slice()
        .filter((p) =>
          this.canLoggedinSeeFolder({
            folder: p,
          })
        )
        .sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
    },
  },
  methods: {
    addMedias(path_to_source_media_metas) {
      // TODO if path matches a media that is not in this project,
      // we need to copy this media to this project first then link that media instead
      this.$emit("addMedias", {
        path_to_source_media_metas,
      });
      this.$emit("close");
    },
    async loadProjects() {
      let { space_slug, project_slug } = this.decomposePath(this.path);

      if (!space_slug) return false;

      this.projects = await this.$api.getFolders({
        path:
          this.createPath({
            space_slug,
          }) + "/projects",
      });

      if (project_slug) {
        this.source_project_path = this.createPath({
          space_slug,
          project_slug,
        });
      } else if (this.sorted_projects.length > 0) {
        this.source_project_path = this.sorted_projects[0].$path;
      }
    },
    async fetchSelectedProject() {
      this.is_loading_project = true;
      this.source_project = await this.$api.getFolder({
        path: this.source_project_path,
      });
      this.is_loading_project = false;
    },
  },
};
</script>
<style lang="scss" scoped>
._pickMediaFromProject {
  position: relative;
  display: block;
  // max-width: 480px;
  width: 100%;

  // max-height: 50vh;
  // margin: calc(var(--spacing) / 4) 0;
  // padding: calc(var(--spacing) / 4);
  overflow: auto;
  // border-radius: 4px;
  background: white;

  // display: flex;
  // flex-flow: column nowrap;

  // border: 2px dashed var(--c-gris_fonce);
  // padding: calc(var(--spacing) / 2);

  ._mediaLib {
    height: 60vh;
  }
}

._projectLib {
  position: relative;
}
</style>
