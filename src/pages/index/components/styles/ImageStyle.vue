<template>
  <div>
    <div :key="index" v-for="(item,index) in initNode">
      <div v-if="initNode.length == 1">
        <div class="styleTitle">大小</div>
        <div class="initWh">
          <div>
            <span>W</span>
            <input
              :data-itemkey="item.key"
              data-attr="width"
              @input="changeStyleFun"
              :value="parseInt(item.value.width)"
              type="number"
            />
          </div>
          <div>
            <span>H</span>
            <input
              :data-itemkey="item.key"
              data-attr="height"
              @input="changeStyleFun"
              :value="parseInt(item.value.height)"
              type="number"
            />
          </div>
        </div>
        <div class="styleTitle">位置</div>
        <div class="initWh">
          <div>
            <span>X</span>
            <input
              :data-itemkey="item.key"
              data-attr="left"
              @input="changeStyleFun"
              :value="parseInt(item.value.left)"
              type="number"
            />
          </div>
          <div>
            <span>Y</span>
            <input
              :data-itemkey="item.key"
              data-attr="top"
              @input="changeStyleFun"
              :value="parseInt(item.value.top)"
              type="number"
            />
          </div>
        </div>
        <div v-if="item.value.type == 'text'" class="styleTitle">字体样式</div>
        <div v-if="item.value.type == 'text'" class="initWh">
          <div>
            <span>字号</span>
            <input
              :data-itemkey="item.key"
              data-attr="fontSize"
              @input="changeStyleFun"
              :value="parseInt(item.value.fontSize)"
              type="number"
            />
          </div>
          <div>
            <span>行距</span>
            <input
              :data-itemkey="item.key"
              data-attr="lineHeight"
              @input="changeStyleFun"
              :value="parseInt(item.value.lineHeight)"
              type="number"
            />
          </div>
        </div>
        <div v-if="item.value.type == 'text'" style="margin-top:10px;" class="initWh">
          <div>
            <span>字距</span>
            <input
              :data-itemkey="item.key"
              data-attr="letterSpacing"
              @input="changeStyleFun"
              :value="parseInt(item.value.letterSpacing)"
              type="number"
            />
          </div>
          <div>
            <span>字体颜色</span>
            <div class="color" ref="color" :data-itemkey="item.key" data-attr="color">
              <el-color-picker
                @change="changeFontColor(item.value.color,item.key)"
                v-model="item.value.color"
                show-alpha
              ></el-color-picker>
            </div>
          </div>
        </div>
        <div class="styleTitle">旋转</div>
        <div class="initWh">
          <div>
            <span>角度</span>
            <input
              :data-itemkey="item.key"
              data-attr="rotateAng"
              @input="changeStyleFun"
              :value="parseInt(item.value.rotateAng)"
              type="number"
            />
          </div>
        </div>
        <div class="styleTitle">阴影</div>
        <div class="initWh">
          <div>
            <span>阴影颜色</span>
            <div
              class="boxShadowColor"
              ref="boxShadow"
              :data-itemkey="item.key"
              data-attr="boxShadowColor"
            >
              <el-color-picker
                @change="changeShadowColor(item.value.boxShadowColor,item.key)"
                v-model="item.value.boxShadowColor"
                show-alpha
              ></el-color-picker>
            </div>
          </div>
          <div>
            <span :data-itemkey="item.key" class="boxShadowInset"></span>
            <el-switch
              @change="changeShadowInset"
              active-text="外阴影"
              inactive-text="内阴影"
              v-model="value2"
            ></el-switch>
          </div>
        </div>
        <div class="styleTitle">偏移距离</div>
        <div class="initWh">
          <div>
            <span>X</span>
            <input
              :data-itemkey="item.key"
              data-attr="boxShadowOffsetX"
              @input="changeStyleFun"
              :value="parseInt(item.value.boxShadowOffsetX)"
              type="number"
            />
          </div>
          <div>
            <span>Y</span>
            <input
              :data-itemkey="item.key"
              data-attr="boxShadowOffsetY"
              @input="changeStyleFun"
              :value="parseInt(item.value.boxShadowOffsetY)"
              type="number"
            />
          </div>
        </div>
        <div class="styleTitle">模糊范围</div>
        <div class="initWh">
          <div>
            <span>模糊</span>
            <input
              :data-itemkey="item.key"
              data-attr="boxShadowBlur"
              @input="changeStyleFun"
              :value="parseInt(item.value.boxShadowBlur)"
              type="number"
            />
          </div>
          <div>
            <span>范围</span>
            <input
              :data-itemkey="item.key"
              data-attr="boxShadowSpread"
              @input="changeStyleFun"
              :value="parseInt(item.value.boxShadowSpread)"
              type="number"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "myimagestyle",
  data: () => {
    return {
      value1: true,
      value2: true,
      value8: 20
    };
  },
  computed: {
    ...mapGetters(["initNode"])
  },
  methods: {
    changeShadowInset: function(value) {
      console.log(value);
      var itemkey = document.querySelector(".boxShadowInset").dataset.itemkey;
      var elementStyle = this.initNode;
      var style = {};
      elementStyle.forEach((item, index) => {
        style = {
          isInset: value ? "" : "inset"
        };
        if (item.key == itemkey) {
          item.value = Object.assign(item.value, style);
        }
      });
      console.log(elementStyle);
      this.changeStyle(elementStyle);
    },
    changeShadowColor: function(value, itemkey) {
      console.log(itemkey, "ddddddddddddddddfffffffffffffffffff");
      var itemkey = document.querySelector(".boxShadowColor").dataset.itemkey;
      console.log(itemkey);
      var elementStyle = this.initNode;
      var style = {};
      elementStyle.forEach((item, index) => {
        style = {
          boxShadowColor: value
        };
        if (item.key == itemkey) {
          item.value = Object.assign(item.value, style);
        }
      });
      this.changeStyle(elementStyle);
    },
    changeFontColor: function(value) {
      var itemkey = document.querySelector(".color").dataset.itemkey;
      console.log(itemkey);
      var elementStyle = this.initNode;
      var style = {};
      elementStyle.forEach((item, index) => {
        style = {
          color: value
        };
        if (item.key == itemkey) {
          item.value = Object.assign(item.value, style);
        }
      });
      this.changeStyle(elementStyle);
    },
    changeStyleFun: function(e) {
      console.log(e);
      var target = e.target || e.srcElement;
      var itemkey = target.dataset.itemkey;
      var attr = target.dataset.attr;
      var elementStyle = this.initNode;
      console.log(elementStyle, "imageStyle", itemkey, attr);
      var style = {};
      if (
        attr == "width" ||
        attr == "height" ||
        attr == "top" ||
        attr == "left" ||
        attr == "boxShadowOffsetX" ||
        attr == "boxShadowOffsetY" ||
        attr == "boxShadowSpread" ||
        attr == "boxShadowBlur" ||
        attr == "rotateAng" ||
        attr == "lineHeight" ||
        attr == "fontSize" ||
        attr == "letterSpacing"
      ) {
        elementStyle.forEach((item, index) => {
          style = {
            [`${attr}`]:
              attr == "rotateAng" ? target.value + "deg" : target.value + "px"
          };
          if (item.key == itemkey) {
            item.value = Object.assign(item.value, style);
          }
        });
        console.log(elementStyle, "f");
      }
      this.changeStyle(elementStyle);
    },
    ...mapActions({
      changeStyle: "changeStyle"
    })
  },
  updated: function() {},
  mounted: function() {}
};
</script>
<style lang="less" scoped>
.initWh {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  width: 100%;
  > div {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    margin: 0 5px;
    span {
      padding: 0 10px;
      color: #ffffff;
      display: block;
      width: 20px;
      font-size: 12px;
    }
    input {
      border: none;
      outline: none;
      height: 30px;
      width: 100px;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      padding-left: 10px;
    }
  }
}
.styleTitle {
  font-size: 14px;
  color: #ffffff;
  padding-left: 15px;
  height: 50px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
}
</style>


