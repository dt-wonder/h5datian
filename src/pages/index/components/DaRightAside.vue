<template>
  <div class="myLeftAsideBox">
    <div class="rightNavBox">
      <div
        :class="['navItem',item.flag?'navItemActive':'']"
        :key="index"
        v-for="(item,index) in nav"
        @click="changeTab(index)"
      >{{item.name}}</div>
    </div>
    <div :key="index" v-for="(item,index) in nav">
      <ImageStyle v-if="index == 0&&item.flag"></ImageStyle>
      <AnimateStyle v-if="index == 1&&item.flag"></AnimateStyle>
    </div>
  </div>
</template>
<script>
import ImageStyle from "./styles/ImageStyle.vue";
import AnimateStyle from "./styles/AnimateStyle.vue";
export default {
  name: "myrightaside",
  data: () => {
    return {
      activeName: "style",
      nav: [
        {
          name: "图层样式",
          flag: true
        },
        {
          name: "图层动画",
          flag: false
        },
        {
          name: "图层交互",
          flag: false
        }
      ]
    };
  },
  components: {
    ImageStyle,
    AnimateStyle
  },
  methods: {
    changeTab: function(i) {
      var nav = this.nav;
      nav.forEach((item, index) => {
        if (index == i) {
          item.flag = true;
        } else {
          item.flag = false;
        }
      });
      this.nav = nav;
    }
  }
};
</script>
<style scoped lang="less">
.myLeftAsideBox {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.rightNavBox {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  overflow-x: auto;
  height: 50px;
}
.navItem {
  width: 100px;
  background: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0 10px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #000000;
  cursor: pointer;
}
.navItemActive {
  box-shadow: 0 0 10px 0 #b2db71;
}
</style>


