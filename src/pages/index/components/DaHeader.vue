<template>
  <div class="myHeader">
    <h2 class="myLogo">h5datian</h2>
    <div class="navBox">
      <div
        @click="insertElementFun(item.type)"
        class="navItem"
        :key="index"
        v-for="(item,index) in nav"
      >
        <img class="navImageItem" :src="item.icon" alt />
        {{item.name}}
      </div>
    </div>
    <el-row>
      <el-button size="small" type="primary">保存</el-button>
      <el-button size="small" type="primary">预览</el-button>
    </el-row>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";

import Element from "../model/Element.js";

export default {
  name: "myheader",
  data: () => {
    return {};
  },
  computed: {
    ...mapState({
      nav: state => state.nav,
      initStyle: state => state.initStyle
    })
  },
  methods: {
    insertElementFun: function(type) {
      console.log(type);
      var that = this;
      this.deleteNull();
      that.insertElement(type);
    },
    ...mapActions({
      insertElement: "insertElement",
      deleteNull: "deleteNull"
    })
  }
};
</script>

<style scoped lang="less">
.myHeader {
  color: #ffffff;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.navBox {
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.myLogo {
  margin: 0;
}
.navItem {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  padding: 0 20px;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
}
.navImageItem {
  width: 12px;
  height: 12px;
  margin-bottom: 5px;
}
</style>

