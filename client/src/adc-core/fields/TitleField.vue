<template>
  <span class="_titleField">
    <DLabel
      v-if="label"
      class="_label"
      :str="label"
      :instructions="can_edit ? instructions : ''"
    />

    <component :is="tag" class="_container">
      <template v-if="!can_edit || (can_edit && !edit_mode)">
        <template v-if="content && content !== ' '">
          <div class="_content">
            <MarkdownField
              v-if="input_type === 'markdown'"
              :text="content"
            /><span v-else v-text="content" />
          </div>
        </template>
      </template>
      <TextInput
        v-else
        ref="TextInput"
        :content.sync="new_content"
        :required="required"
        :input_type="input_type"
        :autocomplete="input_type === 'email' ? 'email' : undefined"
        :minlength="minlength"
        :maxlength="maxlength"
        :key="edit_mode + content"
        @toggleValidity="($event) => (allow_save = $event)"
      />
      <EditBtn v-if="can_edit && !edit_mode" @click="enableEditMode" />
    </component>

    <template v-if="can_edit">
      <div class="_footer" v-if="edit_mode">
        <SaveCancelButtons
          class="_scb"
          :is_saving="is_saving"
          :allow_save="allow_save"
          @save="updateText"
          @cancel="cancel"
        />
      </div>
    </template>
  </span>
</template>
<script>
export default {
  props: {
    field_name: String,
    label: {
      type: String,
      default: "",
    },
    instructions: {
      type: String,
      default: "",
    },
    input_type: {
      type: String,
      default: "text",
    },
    content: {
      type: String,
      default: "",
    },
    path: String,
    tag: {
      type: String,
      default: "div",
    },
    required: {
      type: Boolean,
      default: false,
    },
    minlength: {
      type: [Boolean, Number],
      default: false,
    },
    maxlength: {
      type: [Boolean, Number],
      default: false,
    },
    can_edit: {
      type: Boolean,
    },
  },
  components: {},
  data() {
    return {
      edit_mode: false,
      is_saving: false,
      new_content: this.content,

      current_character_count: undefined,
      allow_save: false,
    };
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  watch: {
    content() {
      // content was changed somewhere else, let's reload component
      // todo: do not override content, ask in a modal what to do?
      this.new_content = this.content;
    },
  },
  computed: {},
  methods: {
    enableEditMode() {
      this.edit_mode = true;
    },
    cancel() {
      this.edit_mode = false;
      this.is_saving = false;
      this.new_content = this.content;

      this.$nextTick(() => {
        // this.content = "";
        // this.$nextTick(() => {
        // this.content = this.new_content;
        // });
      });

      // todo interrupt updateMeta
    },
    async updateText() {
      this.is_saving = true;
      await new Promise((r) => setTimeout(r, 50));

      try {
        const new_meta = {
          [this.field_name]: this.new_content,
        };

        await this.$api.updateMeta({
          path: this.path,
          new_meta,
        });

        this.edit_mode = false;
        this.is_saving = false;
      } catch (err) {
        this.is_saving = false;
        if (err === "unique_field_taken") {
          this.$alertify.delay(4000).error(this.$t("notifications.name_taken"));
          this.$refs.TextInput.$refs.field.select();
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
._titleField {
  // width: 100%;

  ._content {
    display: inline-block;
    margin-right: calc(var(--spacing) / 2);

    span {
      white-space: break-spaces;
    }
  }

  &:hover > ._label {
    color: var(--c-bleuvert);
  }
}

._footer {
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: calc(var(--spacing) / 4) 0;
  gap: calc(var(--spacing) / 4);
}

._container {
  margin: 0;
  width: 100%;
  // display: flex;
  // flex-flow: row wrap;
  // align-items: baseline;
}

._cont {
  display: inline-grid;
  align-items: stretch;

  &::after,
  textarea {
    grid-area: 2/1;

    width: auto;
    min-width: 1em;
    font: inherit;
    margin: 0;
    resize: none;
    padding: 0.25em;
  }

  &::after {
    content: attr(data-value) " ";
    visibility: hidden;
    white-space: break-spaces;
  }
}
</style>
