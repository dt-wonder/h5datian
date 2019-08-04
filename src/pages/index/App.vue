<template>
  <div id="app">
    <el-container :style="{'height':windowHeight+'px'}" class="myContent">
      <el-header>
        <DaHeader></DaHeader>
      </el-header>
      <el-container class="myAsideMain">
        <el-aside width="160px">
          <DaLeftAside></DaLeftAside>
        </el-aside>
        <el-main>
          <DaPhone></DaPhone>
        </el-main>
        <el-aside>
          <DaRightAside></DaRightAside>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import DaHeader from "./components/DaHeader.vue";
import DaPhone from "./components/DaPhone.vue";
import DaLeftAside from "./components/DaLeftAside.vue";
import DaRightAside from "./components/DaRightAside.vue";

export default {
  name: "app",
  data: () => {
    return {
      windowHeight:
        document.body.clientHeight || document.documentElement.clientHeight
    };
  },
  components: {
    DaHeader,
    DaPhone,
    DaLeftAside,
     DaRightAside
  },
  mounted: function() {
    console.log(this.windowHeight);
  }
};
</script>

<style scoped lang="less">
.myContent {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  height: 100%;
}
.el-header {
  background: #0c0d10;
}
.el-aside {
  background: #222d33;
  overflow: hidden;
  height: 100%;
}
.myAsideMain {
  flex-grow: 1;
}
.el-main{
  padding: 0;
}
</style>
