<template>
  <div class="_publicationOpen">
    <sl-spinner style="--indicator-color: currentColor" v-if="!publication" />
    <div v-else-if="fetch_publication_error">
      {{ fetch_publication_error }}
    </div>
    <template v-else-if="publication">
      <PublicationTopbar
        class="_publicationOpen--topbar"
        :publication="publication"
        :can_edit="can_edit"
        @close="$emit('close')"
      />
      <StoryTemplate
        v-if="publication.template === 'story'"
        class="_publicationOpen--content"
        :publication="publication"
        :can_edit="can_edit"
      />
      <StorySectionTemplate
        v-else-if="publication.template === 'story_with_sections'"
        class="_publicationOpen--content"
        :publication="publication"
        :opened_section_meta_filename="page_opened_id"
        :can_edit="can_edit"
        @toggleSection="$emit('togglePage', $event)"
      />
      <PageTemplate
        v-else-if="publication.template === 'page_by_page'"
        class="_publicationOpen--content"
        :publication="publication"
        :can_edit="can_edit"
        :page_opened_id="page_opened_id"
        @togglePage="$emit('togglePage', $event)"
      />
      <MapTemplate
        v-else-if="publication.template === 'cartography'"
        class="_publicationOpen--content"
        :publication="publication"
        :opened_view_meta_filename="page_opened_id"
        :can_edit="can_edit"
        @toggleView="$emit('togglePage', $event)"
      />
    </template>
  </div>
</template>
<script>
import PublicationTopbar from "@/components/publications/PublicationTopbar.vue";

export default {
  props: {
    project_path: String,
    publication_slug: String,
    page_opened_id: String,
    can_edit: Boolean,
  },
  components: {
    PublicationTopbar,
    StoryTemplate: () =>
      import("@/components/publications/templates/StoryTemplate.vue"),
    StorySectionTemplate: () =>
      import("@/components/publications/templates/StorySectionTemplate.vue"),
    PageTemplate: () =>
      import("@/components/publications/templates/PageTemplate.vue"),
    MapTemplate: () =>
      import("@/components/publications/templates/MapTemplate.vue"),
  },
  data() {
    return {
      publication: null,
      fetch_publication_error: null,
    };
  },
  created() {},
  async mounted() {
    await this.listPublication();
    this.$eventHub.$on("folder.removed", this.closeOnRemove);
    this.$api.join({ room: this.publication.$path });
  },
  beforeDestroy() {
    this.$eventHub.$off("folder.removed", this.closeOnRemove);
    this.$api.leave({ room: this.publication.$path });
  },
  watch: {},
  computed: {},
  methods: {
    async listPublication() {
      const publication = await this.$api
        .getFolder({
          path: `${this.project_path}/publications/${this.publication_slug}`,
        })
        .catch((err) => {
          this.fetch_publication_error = err.response;
        });
      this.publication = publication;
    },
    closeOnRemove({ path }) {
      if (path === this.publication.$path) {
        this.$alertify
          .closeLogOnClick(true)
          .delay(4000)
          .log(this.$t("notifications.publication_was_removed"));
        this.$emit("close");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
._publicationOpen {
  position: relative;
  min-height: calc(100vh - 44px);
  display: flex;
  flex-flow: column nowrap;

  background-color: var(--c-bodybg);
  background-color: white;
}
._publicationOpen--topbar {
  flex: 0 0 auto;
}

._publicationOpen--content {
  flex: 1 1 auto;
}
</style>
