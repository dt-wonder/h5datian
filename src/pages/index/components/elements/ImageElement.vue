<template>
  <div
    class="myImageBox"
    :style="{background:'url('+element.imgSrc+') no-repeat',backgroundSize:'cover',backgroundPosition:'center'}"
  >
    <div
      :style="{boxShadow:element.boxShadowOffsetX+' '+element.boxShadowOffsetY+' '+element.boxShadowBlur+' '+element.boxShadowSpread+' ' +element.boxShadowColor+' '+element.isInset,}"
      class="myImageItem"
      :data-type="element.type"
      :data-currentelement="currentElement"
      data-direction="center"
    ></div>
  </div>
</template>
<script>
export default {
  name: "myimageelement",
  data: () => {
    return {};
  },
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
  }
};
</script>
<style lang="less" scoped>
.myImageBox {
  width: 100%;
  height: 100%;
}
.myImageItem {
  width: 100%;
  height: 100%;
}
</style>


