<template>
  <DetailsPane
    :header="$t('informations')"
    :icon="'info-square'"
    :is_open_initially="$root.is_mobile_view ? false : true"
  >
    <div class="u-spacingBottom">
      <AdminsAndContributorsField
        :folder="project"
        :can_edit="can_edit"
        :admin_label="$t('referent')"
        :admin_instructions="$t('project_admin_instructions')"
        :contrib_instructions="$t('project_contrib_instructions')"
      />
    </div>

    <EventField
      class="u-spacingBottom"
      v-if="$root.app_infos.instance_meta.enable_events"
      :project="project"
      :can_edit="can_edit"
    />

    <RemixField
      class="u-spacingBottom"
      :project="project"
      :can_edit="can_edit"
    />

    <div class="u-spacingBottom">
      <DateDisplay :title="$t('date_created')" :date="project.$date_created" />
      <DateDisplay
        :title="$t('date_modified')"
        :date="project.$date_modified"
      />
    </div>

    <div class="u-mediaOptions" v-if="can_edit">
      <DownloadFolder :path="project.$path" />
      <div class="">
        <button
          type="button"
          class="u-buttonLink"
          @click="show_dup_modal = true"
        >
          <sl-icon name="file-plus" />
          {{ $t("duplicate_or_move_project") }}
        </button>
      </div>
      <DuplicateOrRemixProject
        v-if="show_dup_modal"
        :path="project.$path"
        :proposed_title="`${$t('copy_of')} ${project.title}`"
        @close="show_dup_modal = false"
      />
      <RemoveMenu :remove_text="$t('remove_project')" @remove="removeProject" />
    </div>

    <div class="" v-if="$root.app_infos.is_electron && is_instance_admin">
      <div class="u-spacingBottom" />
      <DLabel :str="$t('open_in_finder')" />
      <button
        type="button"
        class="u-button u-button_bleumarine u-button_small"
        @click="openInFinder(project.$path)"
        v-html="project_path_wrappable"
      />
    </div>
  </DetailsPane>
</template>
<script>
import DuplicateOrRemixProject from "@/components/project/DuplicateOrRemixProject.vue";
import EventField from "@/components/project/EventField.vue";
import RemixField from "@/components/project/RemixField.vue";

export default {
  props: {
    project: Object,
    can_edit: Boolean,
  },
  components: {
    EventField,
    RemixField,
    DuplicateOrRemixProject,
  },
  data() {
    return {
      show_dup_modal: false,
    };
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  watch: {},
  computed: {
    project_path_wrappable() {
      return this.project.$path.replaceAll("/", "/<wbr>");
    },
  },
  methods: {
    async removeProject() {
      this.fetch_status = "pending";
      this.fetch_error = null;

      try {
        const response = await this.$api.deleteItem({
          path: this.project.$path,
        });
        this.response = response.data;
        this.fetch_status = "success";
        // this.$router.push("/projects");
      } catch (e) {
        this.fetch_status = "error";
        this.fetch_error = e.response.data;
      }
    },
    openInFinder(path) {
      window.electronAPI.send("toMain", {
        type: "open_path",
        path,
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
