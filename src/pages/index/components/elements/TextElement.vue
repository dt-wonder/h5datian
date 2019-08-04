<template>
  <div class="myTextBox">
    <div
      :style="{boxShadow:element.boxShadowOffsetX+' '+element.boxShadowOffsetY+' '+element.boxShadowBlur+' '+element.boxShadowSpread+' ' +element.boxShadowColor+' '+element.isInset,}"
      data-direction="center"
      @input="changeElementFun"
      :contenteditable="true"
      placeholder="请输入文字"
      class="myInput"
      :textContent="element.value"
      :data-currentelement="currentElement"
      :data-type="element.type"
    ></div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "mytextelement",
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
  },
  components: {},
  methods: {
    changeElementFun: function(e) {
      var that = this;
      console.log(e.target.textContent);
      that.changeElement(e.target.textContent);
    },

    ...mapActions({
      changeElement: "changeElement"
    })
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
[contenteditable="true"] {
  outline: none;
}
.myTextBox,
.myInput {
  width: 100%;
  height: 100%;
}
.myInput:empty::before {
  color: #999999;
  content: attr(placeholder);
}
</style>

