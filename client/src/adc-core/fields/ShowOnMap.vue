<template>
  <DetailsPane :header="title" :icon="'map'">
    <DisplayOnMap :pins="pins" :is_small="true" :show_scale="false" />
  </DetailsPane>
  <!-- <div class="_metaField">
    <DLabel :str="title" />
    <div>
    </div>
  </div> -->
</template>
<script>
export default {
  props: {
    title: String,
    gps: Object,
  },
  components: {
    DisplayOnMap: () => import("@/adc-core/fields/DisplayOnMap.vue"),
  },
  data() {
    return {};
  },

  created() {},
  mounted() {},
  beforeDestroy() {},
  watch: {},
  computed: {
    pins() {
      return [this.gps];
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
