<template>
  <div
    @click.stop.prevent
    @mousedown.stop.prevent
    @mousewheel.stop.prevent
    @drag.stop.prevent
    @dragstart.stop.prevent
    @dragend.stop.prevent
  >
    <model-stl
      :src="src"
      :rotation="{
        x: Math.PI / 12,
        y: -Math.PI / 12,
        z: 0,
      }"
      :background-color="0xffffff"
    />
  </div>
</template>
<script>
import { ModelStl } from "vue-3d-model";

export default {
  props: {
    src: String,
  },
  components: {
    ModelStl,
  },
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
<style lang="scss" scoped></style>
