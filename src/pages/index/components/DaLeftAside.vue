<template>
  <div class="myLeftAsideBox">
    <div class="leftNavBox">
      <div
        @click="tabChange(index)"
        :style="{color:item.flag?item.fontColorActive:item.fontColor}"
        :key="index"
        v-for="(item,index) in nav"
      >{{item.name}}</div>
    </div>
    <div>
      <div :key="index" v-for="(item,index) in phoneInfo.pagesInfo.pages" class="pageBox">
        <div class="pageItem">
          <div class="pageList">
            <div :key="elementIndex" v-for="(element,elementIndex) in item.elements">
              <img :style="{transform:'rotate('+element.rotateAng+')',color:element.color,letterSpacing:element.letterSpacing,boxShadow:element.boxShadowOffsetX+' '+element.boxShadowOffsetY+' '+element.boxShadowBlur+' '+element.boxShadowSpread+' ' +element.boxShadowColor+' '+element.isInset,position:element.position,width:element.width,height:element.height,left:element.left,top:element.top,fontSize:element.fontSize,lineHeight:element.lineHeight,background:element.background}" v-if="element.type=='image'" :src="element.imgSrc" alt />
              <div :style="{transform:'rotate('+element.rotateAng+')',color:element.color,letterSpacing:element.letterSpacing,boxShadow:element.boxShadowOffsetX+' '+element.boxShadowOffsetY+' '+element.boxShadowBlur+' '+element.boxShadowSpread+' ' +element.boxShadowColor+' '+element.isInset,position:element.position,width:element.width,height:element.height,left:element.left,top:element.top,fontSize:element.fontSize,lineHeight:element.lineHeight,background:element.background}" v-if="element.type=='text'">
                {{element.value}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "myleftaside",
  data: () => {
    return {
      activeName: "page",
      nav: [
        {
          name: "页面",
          flag: true,
          fontColor: "#334f5b",
          fontColorActive: "#ffffff"
        },
        {
          name: "图层",
          flag: false,
          fontColor: "#334f5b",
          fontColorActive: "#ffffff"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      phoneInfo: state => state.phoneInfo
    })
  },
  methods: {
    tabChange: function(i) {
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
.leftNavBox {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ffffff;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  > div {
    flex-grow: 1;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
.pageItem {
  position: relative;
  height: 667/10 * 3px;
  width: 375/10 * 3px;
}
.pageList {
  width: 375px;
  height: 667px;
  transform: scale(0.3);
  background: #ffffff;
  transform-origin: 0 0;
  position: relative;
}
</style>


