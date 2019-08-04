<template>
  <div
    data-direction="phone"
    class="myPhoneBox"
    @mousedown="elementDownFun($event)"
    @mousemove.stop="elementMoveFun($event)"
    @mouseup="elementUpFun($event)"
    @mouseover="elementOverFun($event)"
    @mouseout="elementOutFun($event)"
  >
    <div data-direction="phone" ref="phone" class="phoneItem">
      <CircleElement
        :element="item"
        :key="index"
        :is-circle="phoneInfo.pagesInfo.currentElement.indexOf(index)!=-1"
        :current-element="index"
        v-for="(item,index) in phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements"
      >
        <TextElement
          :current-element="index"
          :is-circle="phoneInfo.pagesInfo.currentElement.indexOf(index)!=-1"
          :element="item"
          v-if="item.type=='text'"
        ></TextElement>
        <ImageElement
          :current-element="index"
          :is-circle="phoneInfo.pagesInfo.currentElement.indexOf(index)!=-1"
          :element="item"
          v-if="item.type=='image'"
        ></ImageElement>
        <NullElement
          :current-element="index"
          :is-circle="phoneInfo.pagesInfo.currentElement.indexOf(index)!=-1"
          :element="item"
          v-if="item.type=='null'"
        ></NullElement>
      </CircleElement>
    </div>
  </div>
</template>
<script>
import CircleElement from "./elements/CircleElement.vue";
import TextElement from "./elements/TextElement.vue";
import ImageElement from "./elements/ImageElement.vue";
import NullElement from "./elements/NullElement.vue";
import Element from "../model/Element.js";
import { mapState, mapActions } from "vuex";
import { parse } from "path";
export default {
  name: "myphone",
  data: () => {
    return {
      isMove: false,
      isMoveTop: false,
      isMoveRightTop: false,
      isMoveRight: false,
      isMoveRightBottom: false,
      isMoveBottom: false,
      isMoveLeftBottom: false,
      isMoveLeft: false,
      isProduct: false,
      isRotate: false,
      element: []
    };
  },
  computed: {
    ...mapState({
      phoneInfo: state => state.phoneInfo
    })
  },
  components: {
    CircleElement,
    TextElement,
    ImageElement,
    NullElement
  },
  methods: {
    insertElementFun: function(type) {
      console.log(type);
      var that = this;
      that.insertElement(type);
    },
    chooseElementFun: function(currentElement) {
      var that = this;
      console.log(currentElement);
      that.chooseElement(currentElement);
    },
    //鼠标移出事件
    elementOutFun: function(e) {
      console.log(e, "移除");
      var that = this;
      var target = e.target || e.srcElement;
      var direction = target.dataset.direction || "none";
      var currentElement = target.dataset.currentelement;
      switch (direction) {
        case "center":
          this.showBorder({ index: currentElement, type: "hide" });
          console.log(
            { index: currentElement, type: "hide" },
            "ffffffffffffffffffffffffffffffffffffff"
          );
          break;
      }
    },
    //鼠标移入事件控制
    elementOverFun: function(e) {
      var that = this;
      var target = e.target || e.srcElement;
      var direction = target.dataset.direction || "none";
      console.log(
        direction,
        "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
      );
      var currentElement = target.dataset.currentelement;
      switch (direction) {
        case "center":
          console.log(e, "over", e.target, target.dataset.currentelement);
          this.showBorder({ index: currentElement, type: "show" });
      }
    },
    // 手势控制元素的方法
    elementDownFun: function(e) {
      console.log(e, "dfsdfgfsdgsd");
      var that = this;
      var target = e.target || e.srcElement;
      var currentTarget = e.currentTarget;
      var direction = target.dataset.direction || "none";
      var type = target.dataset.type || "none";
      this.pageSelectedY = this.pageY =
        e.pageY || e.clientX + document.documentElement.scrollLeft;
      this.pageSelectedX = this.pageX =
        e.pageX || e.clientX + document.documentElement.scrollLeft;
      var currentElement = target.dataset.currentelement;
      switch (direction) {
        case "center":
          this.isMove = true;
          if (type != "null") {
            this.deleteNull();
          }
          this.showCircle({
            index: currentElement,
            type: "show"
          });
          this.showBorder({
            index: currentElement,
            type: "show"
          });
          break;
        case "t":
          this.isMoveTop = true;
          break;
        case "rt":
          this.isMoveRightTop = true;
          break;
        case "r":
          this.isMoveRight = true;
          break;
        case "rb":
          this.isMoveRightBottom = true;
          break;
        case "b":
          this.isMoveBottom = true;
          break;
        case "lb":
          this.isMoveLeftBottom = true;
          break;
        case "l":
          this.isMoveLeft = true;
          break;
        case "lt":
          this.isMoveLeftTop = true;
          break;
        case "rotate":
          this.isRotate = true;
          this.nowElement = document.querySelector(
            `#circle${target.dataset.currentelement}`
          );
          console.log(this.nowElement, "nowElement");
          console.log(e.target);
          break;
        case "phone":
          this.isProduct = true;
          this.deleteNull();
          this.showCircle({
            type: "hide"
          });
          this.showBorder({
            type: "hide"
          });
          this.insertElementFun("null");
          break;
      }
    },
    elementMoveFun: function(e) {
      var target = e.target || e.srcElement;
      var pageY = e.pageY || e.clientX + document.documentElement.scrollLeft;
      var pageX = e.pageX || e.clientX + document.documentElement.scrollLeft;
      window.getSelection
        ? window.getSelection().removeAllRanges()
        : document.selection.empty();
      var element = this.phoneInfo.pagesInfo.initNode;
      var elementStyle = [];
      this.phoneInfo.pagesInfo.currentElement.forEach((item, index) => {
        elementStyle.push({
          key: item,
          value: this.phoneInfo.pagesInfo.pages[
            this.phoneInfo.pagesInfo.currentPage
          ].elements[item]
        });
      });
      var style = {};
      // console.log("移动啦啦啦")
      // 整体移动
      if (this.isMove) {
        // console.log("移动")
        elementStyle.forEach((item, index) => {
          console.log(pageY, pageX);
          style = {
            top: pageY - this.pageY + parseInt(item.value.top) + "px",
            left: pageX - this.pageX + parseInt(item.value.left) + "px"
          };
          item.value = Object.assign(item.value, style);
        });
      } else if (this.isMoveTop) {
        elementStyle.forEach((item, index) => {
          style = {
            top: pageY - this.pageY + parseInt(item.value.top) + "px",
            height:
              this.pageY - pageY + parseInt(element[index].value.height) + "px"
          };
          item.value = Object.assign(item.value, style);
        });
      } else if (this.isMoveRightTop) {
        elementStyle.forEach((item, index) => {
          style = {
            top: pageY - this.pageY + parseInt(item.value.top) + "px",
            height:
              this.pageY - pageY + parseInt(element[index].value.height) + "px",
            width:
              pageX - this.pageX + parseInt(element[index].value.width) + "px"
          };
          item.value = Object.assign(item.value, style);
        });
      } else if (this.isMoveRight) {
        console.log(element, elementStyle, "element[index]");
        elementStyle.forEach((item, index) => {
          style = {
            width:
              pageX - this.pageX + parseInt(element[index].value.width) + "px"
          };
          item.value = Object.assign(item.value, style);
        });
      } else if (this.isMoveRightBottom) {
        elementStyle.forEach((item, index) => {
          style = {
            height:
              pageY - this.pageY + parseInt(element[index].value.height) + "px",
            width:
              pageX - this.pageX + parseInt(element[index].value.width) + "px"
          };
          item.value = Object.assign(item.value, style);
        });
      } else if (this.isMoveBottom) {
        elementStyle.forEach((item, index) => {
          style = {
            height:
              pageY - this.pageY + parseInt(element[index].value.height) + "px"
          };
          item.value = Object.assign(item.value, style);
        });
      } else if (this.isMoveLeftBottom) {
        elementStyle.forEach((item, index) => {
          style = {
            left: pageX - this.pageX + parseInt(item.value.left) + "px",
            width:
              this.pageX - pageX + parseInt(element[index].value.width) + "px",
            height:
              pageY - this.pageY + parseInt(element[index].value.height) + "px"
          };
          item.value = Object.assign(item.value, style);
        });
      } else if (this.isMoveLeft) {
        elementStyle.forEach((item, index) => {
          style = {
            left: pageX - this.pageX + parseInt(item.value.left) + "px",
            width:
              this.pageX - pageX + parseInt(element[index].value.width) + "px"
          };
          item.value = Object.assign(item.value, style);
        });
      } else if (this.isMoveLeftTop) {
        elementStyle.forEach((item, index) => {
          style = {
            left: pageX - this.pageX + parseInt(item.value.left) + "px",
            width:
              this.pageX - pageX + parseInt(element[index].value.width) + "px",
            top: pageY - this.pageY + parseInt(item.value.top) + "px",
            height:
              this.pageY - pageY + parseInt(element[index].value.height) + "px"
          };
          item.value = Object.assign(item.value, style);
        });
      } else if (this.isRotate) {
        console.log("旋转");
        console.log(e.target, "hhkk");
        var nowElement = this.nowElement;
        const origin = this.getOrigin();
        elementStyle.forEach((item, index) => {
          // 计算元素的旋转角度
          const lastAngle = Math.atan2(pageY - origin.y, pageX - origin.x);
          const currentAngle = Math.atan2(
            this.pageY - origin.y,
            this.pageX - origin.x
          );
          var rotateAngle = -Math.round(
            ((currentAngle - lastAngle) * 180) / Math.PI
          );
          style = {
            rotateAng: parseInt(item.value.rotateAng) + rotateAngle + "deg"
          };
          console.log(style);
          item.value = Object.assign(item.value, style);
        });
      } else if (this.isProduct) {
        var offsetTop = this.$refs.phone.offsetTop;
        var offsetLeft = this.$refs.phone.offsetLeft;
        // console.log(
        //   this.pageSelectedX,
        //   this.pageSelectedY,
        //   this.pageX,
        //   this.pageY
        // );
        elementStyle.forEach((item, index) => {
          style = {
            left: this.pageSelectedX - offsetLeft + "px",
            top: this.pageSelectedY - offsetTop + "px",
            height: pageY - this.pageSelectedY + "px",
            width: pageX - this.pageSelectedX + "px"
          };
          item.value = Object.assign(item.value, style);
        });
      }
      this.changeStyleFun(elementStyle);
      this.pageY = pageY;
      this.pageX = pageX;
    },
    getOrigin: function() {
      const rect = this.nowElement.getBoundingClientRect();
      return {
        x: (rect.left + rect.right) / 2,
        y: (rect.bottom + rect.top) / 2
      };
    },
    elementUpFun: function(e) {
      var target = e.target || e.srcElement;
      var direction = target.dataset.direction || "none";
      this.isMove = false;
      this.isMoveTop = false;
      this.isMoveRightTop = false;
      this.isMoveRight = false;
      this.isMoveRightBottom = false;
      this.isMoveBottom = false;
      this.isMoveLeftBottom = false;
      this.isMoveLeft = false;
      this.isRotate = false;
      this.isMoveLeftTop = false;
      if (this.isProduct) {
        this.selectedNode({});
      }
      this.isProduct = false;
    },
    // 改变元素样式的方法
    changeStyleFun: function(style) {
      var that = this;
      that.changeStyle(style);
    },
    ...mapActions({
      chooseElement: "chooseElement",
      changeStyle: "changeStyle",
      insertElement: "insertElement",
      selectedNode: "selectedNode",
      clearData: "clearData",
      showBorder: "showBorder",
      showCircle: "showCircle",
      deleteNull: "deleteNull"
    })
  },
  mounted: function() {}
};
</script>
<style scoped>
.myPhoneBox {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  background: #000000;
  height: 100%;
  overflow: hidden;
}
.phoneItem {
  width: 375px;
  height: 667px;
  border: 1px solid #000000;
  position: relative;
  background: #ffffff;
}
</style>


