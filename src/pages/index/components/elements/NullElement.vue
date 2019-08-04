<template>
  <div class="myNullBox">
    <div :data-type="element.type" class="myNullItem" :data-currentelement="currentElement" data-direction="center"></div>
  </div>
</template>
<script>
export default {
  name: "mynullelement",
  props: {
    element: {
      type: Object,
      default: {}
    },
    isCircle: {
      type: Boolean,
      default: false
    },
    currentElement: {
      type: Number,
      default: 0
    }
  },
  data: () => {
    return {};
  }
};
</script>
<style lang="less" scoped>
.myNullBox,
.myNullItem {
  width: 100%;
  height: 100%;
}
</style>


