import * as types from './mutation-type.js';
const actions = {
    // 插入元素的方法
    insertElement({commit},type){
        commit(types.PUSH_ELEMENT,type)
    },
    // 当前编辑的元素发生改变重新设置
    chooseElement({commit},currentElement){
        commit(types.CHOOSE_ELEMENT,currentElement)
    },
    //text文本双向数据绑定的方法
    changeElement({commit},textContent){
        commit(types.CHANGE_TEXT,textContent)
    },
    // 改变元素样式的方法
    changeStyle({commit},style){
        commit(types.CHANGE_STYLE,style);
    },
    // 框选多元素的方法
    selectedNode({commit},selectedNode){
        commit(types.SELECTEDNODE,selectedNode);
    },
    //鼠标抬起清除一些数据
    clearData({commit}){
        commit(types.CLEARDATA);
    },
    // 鼠标移入显示边框的方法
    showBorder({commit},data){
        commit(types.SHOWBORDER,data);
    },
    //鼠标点击显示原点的方法
    showCircle({commit},data){
        commit(types.SHOWCIRCLE,data);
    },
    // 删除类型为null的元素
    deleteNull({commit}){
        commit(types.DELETENULL);
    }
}
export default actions;