<style scoped>
img {
  width: calc(v-bind(dimension) * 1px);
  height: calc(v-bind(dimension) * 1px);
}
</style>

<template>
  <img :src="require('../assets/' + icon + '.png')" alt="" />
</template>
<script>
export default {
  name: "Icon",
  props: {
    icon: String,
    size: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      dimension: this.size ?? 20,
    };
  },
};
</script>