<template>
  <div>
    <div :key="index" v-for="(item,index) in animateItem">
      <div class="animateName">{{item.animateName}}</div>
      <div class="animateListBox">
        <div
          @mouseout="hideAnimate($event,index,indexChild)"
          @mouseover="showAnimate($event,index,indexChild)"
          class="animateListName"
          :data-animatename="itemChild"
          :key="indexChild"
          v-for="(itemChild,indexChild) in item.animateList"
        >
          <div :class="['animate'+itemChild]">{{itemChild}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myanimatestyle",
  data: () => {
    return {
      animateItem: [
        {
          animateName: "Attention Seekers",
          animateList: [
            "bounce",
            "flash",
            "pulse",
            "rubberBand",
            "shake",
            "tada",
            "wobble"
          ]
        },
        {
          animateName: "Bouncing Entrances",
          animateList: [
            "bounceIn",
            "bounceInDown",
            "bounceInLeft",
            "bounceInRight",
            "bounceInUp"
          ]
        }
      ]
    };
  },
  methods: {
    hideAnimate(e, index, indexChild) {
      var animateName = e.target.dataset.animatename;
      document.querySelector(`.animate${animateName}`).classList.remove(`animated`, animateName);
    //   e.target.classList.remove(`animated`, animateName);
    },
    showAnimate(e, index, indexChild) {
      var animateName = e.target.dataset.animatename;
         document.querySelector(`.animate${animateName}`).classList.add(`animated`, animateName);
    //   e.target.classList.add(`animated`, animateName);
    }
  }
};
</script>
<style lang="less" scoped>
.animateListBox {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.animateListName {
  width: 55px;
  height: 55px;
  background: #ffffff;
  border-radius: 5px;
  margin-left: 15px;
  margin-bottom: 15px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #000000;
  box-shadow: 0 0 10px 0 #f9913d;
  cursor: pointer;
  white-space: normal;
  word-break: break-all;
}
.animateName {
  height: 60px;
  padding-left: 15px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  color: #f9913d;
  font-weight: bold;
}
</style>

