import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutation.js";
import actions from "./actions.js";
import getters from "./getters.js";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav: [
      {
        id: 0,
        name: "文字",
        type: "text",
        icon: require("../../../assets/text.png")
      },
      {
        id: 1,
        name: "图片",
        type: "image",
        icon: require("../../../assets/text.png")
      },
      {
        id: 2,
        name: "音频",
        type: "audio",
        icon: require("../../../assets/text.png")
      },
      {
        id: 3,
        name: "视频",
        type: "video",
        icon: require("../../../assets/text.png")
      }
    ],
    phoneInfo: {
      pagesInfo: {
        // 当前选中的元素
        currentElement: [],
        currentPage: 0,
        currentNode:[],//当前选中元素集合
        initNode:[],
        pages: [
          {
            id: 0,
            pageStyle: {
              backgroundColor: "#ffffff"
            },
            elements: [

            ]
          }
        ]
      }
    }
  },
  getters,
  mutations: mutations,
  actions: actions
})
