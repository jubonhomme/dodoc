<template>
  <div class="_metaField">
    <DLabel :str="$t('size')" />
    <div>
      <template v-if="size">
        {{ formatBytes(size) }}
      </template>
      <template v-else> – </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: Number,
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
._metaField {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: calc(var(--spacing) / 16);
}
</style>
