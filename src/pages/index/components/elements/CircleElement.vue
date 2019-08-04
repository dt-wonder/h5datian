<template>
  <div
    :id="'circle'+currentElement"
    :style="{color:element.color,letterSpacing:element.letterSpacing,'width':element.width,height:element.height,left:element.left,top:element.top,fontSize:element.fontSize,lineHeight:element.lineHeight,border:element.isShowBorder?'1px dashed #000000':'none',background:element.background,transform:'rotate('+element.rotateAng+')',}"
    class="myCircleBox"
  >
    <slot></slot>
    <div v-if="element.isShowCircle">
      <div data-direction="l" class="circleLeft"></div>
      <div data-direction="lt" class="circleLeftTop"></div>
      <div data-direction="t" class="circleTop"></div>
      <div data-direction="rt" class="circleRightTop"></div>
      <div data-direction="r" class="circleRight"></div>
      <div data-direction="rb" class="circleRightBottom"></div>
      <div data-direction="b" class="circleBottom"></div>
      <div data-direction="lb" class="circleLeftBottom"></div>
      <div v-if="element.type!='null'" :data-currentelement="currentElement" data-direction="rotate" class="circleRotate"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mycircleelement",
  props: {
    element: Object,
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
.myCircleBox {
  position: absolute;
  border: 1px dashed #000000;
  &:hover {
    cursor: move;
  }
}
.circleTop {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  left: 50%;
  transform: translateX(-50%);
  top: -6px;
  border-radius: 50%;
  &:hover {
    cursor: s-resize;
  }
}
.circleLeft {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  top: 50%;
  left: -6px;
  transform: translateY(-50%);
  border-radius: 50%;
  &:hover {
    cursor: e-resize;
  }
}
.circleRight {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  top: 50%;
  right: -6px;
  transform: translateY(-50%);
  border-radius: 50%;
  &:hover {
    cursor: e-resize;
  }
}
.circleBottom {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%);
  border-radius: 50%;
  &:hover {
    cursor: s-resize;
  }
}
.circleLeftTop {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  left: -6px;
  top: -6px;
  border-radius: 50%;
  &:hover {
    cursor: nw-resize;
  }
}
.circleRightTop {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  right: -6px;
  top: -6px;
  border-radius: 50%;
  &:hover {
    cursor: ne-resize;
  }
}
.circleRightBottom {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  right: -6px;
  bottom: -6px;
  border-radius: 50%;
  &:hover {
    cursor: se-resize;
  }
}
.circleLeftBottom {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  left: -6px;
  bottom: -6px;
  border-radius: 50%;
  &:hover {
    cursor: sw-resize;
  }
}
.circleRotate {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  left: 50%;
  transform: translateX(-50%);
  top: -40px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
}
</style>


