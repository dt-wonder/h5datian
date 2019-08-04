import * as types from './mutation-type.js';
import Element from '../model/Element.js';

const mutations = {
    // 向页面中插入元素
    [types.PUSH_ELEMENT](state, type) {
        console.log(type, "gggggggggggg")
        var phoneInfo = state.phoneInfo;
        var ele = {};
        // phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.forEach((item, index) => {
        //     if (item.type == "null") {
        //         phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.splice(index, 1);
        //         console.log(phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements)
        //     }
        // })
        ele.type = type;
        switch (type) {
            case "null":
                ele.width = "0px";
                ele.height = "0px";
                ele.left = "-900000px";
                ele.top = "-900000px";
                ele.isShowBorder = true;
                ele.zindex = 90000000000;
                ele.background = "rgba(0,0,0,0.1)";
                phoneInfo.pagesInfo.currentElement = [phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.length];
                console.log(phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements, phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements, phoneInfo.pagesInfo.currentElement, "llll")
                break;
            case "text":
                ele.width = "375px";
                ele.height = "40px";
                ele.lineHeight = "40px";
                break;
            case "image":
                ele.width = "100px";
                ele.height = "100px";
                break;
            default:
                alert("功能开发中...")
        }
        phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.push(new Element(ele));
        console.log(phoneInfo, "phoneInfo")
        state.phoneInfo = phoneInfo;
    },
    // 设置当前编辑的元素
    [types.CHOOSE_ELEMENT](state, currentElement) {
        var phoneInfo = state.phoneInfo;
        phoneInfo.pagesInfo.currentElement = currentElement;
        state.phoneInfo = phoneInfo;
        console.log(phoneInfo)
    },
    // 双向绑定text文本
    [types.CHANGE_TEXT](state, textContent) {
        var phoneInfo = state.phoneInfo;
        phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements[phoneInfo.pagesInfo.currentElement].value = textContent;
        state.phoneInfo = phoneInfo;
        console.log(state.phoneInfo, "dsfasdfasdfas")
    },
    // 改变元素样式的方法
    [types.CHANGE_STYLE](state, style = []) {
        var phoneInfo = state.phoneInfo;
        // console.log(style, "样式")
        style.forEach((item, index) => {
            phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements[item.key] = Object.assign(phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements[item.key], item.value)
        })
        state.phoneInfo = phoneInfo;
    },
    // 删除类型为null的元素
    [types.DELETENULL](state) {
        var phoneInfo = state.phoneInfo;
        phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.forEach((item, index) => {
            if (item.type == "null") {
                phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.splice(index, 1);
            }
        });
        state.phoneInfo = phoneInfo;
    },
    // 多选元素的方法
    [types.SELECTEDNODE](state, selectedNode) {
        var phoneInfo = state.phoneInfo;
        var selectedNode = {};
        var selectIndex = "";
        var element = phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.filter((item, index) => {
            return item.type == "null";
        });
        var top = [];
        var left = [];
        var width = [];
        var height = [];
        var currentElement = []
        console.log(phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements, "phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements")
        phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.forEach((item, index) => {
            console.log(item.top, element[0].top, item.left, element[0].left)
            if (parseInt(item.top) >= parseInt(element[0].top) && parseInt(item.left) >= parseInt(element[0].left) && ((parseInt(item.top) + parseInt(item.height)) <= (parseInt(element[0].top) + parseInt(element[0].height))) && ((parseInt(item.left) + parseInt(item.width)) <= (parseInt(element[0].left) + parseInt(element[0].width))) && item.type != "null") {
                top.push(parseInt(item.top));
                left.push(parseInt(item.left));
                height.push(parseInt(item.top) + parseInt(item.height));
                width.push(parseInt(item.left) + parseInt(item.width));
                currentElement.push(index)
            } else if (item.type == "null") {
                selectIndex = index;
            }
        });
        var minTop = Math.min.apply(Math, top) + "px";
        var minLeft = Math.min.apply(Math, left) + "px";
        height.forEach((item, index) => {
            height[index] = item - parseInt(minTop);
        });
        width.forEach((item, index) => {
            width[index] = item - parseInt(minLeft);
        });
        var maxHeight = Math.max.apply(Math, height) + "px";
        var maxWidth = Math.max.apply(Math, width) + "px";
        var elementStyle = {
            top: minTop,
            left: minLeft,
            width: maxWidth,
            height: maxHeight
        }
        phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements[selectIndex] = Object.assign(phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements[selectIndex], elementStyle)
        // 判断是否有选中的元素
        if (currentElement.length == 0) {
            phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.forEach((item, index) => {
                if (item.type == "null") {
                    phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.splice(index, 1);
                }
            });
            phoneInfo.pagesInfo.initNode = [];
            phoneInfo.pagesInfo.currentElement = currentElement;

        } else {
            phoneInfo.pagesInfo.currentElement = phoneInfo.pagesInfo.currentElement.concat(currentElement);
        }
        state.phoneInfo = phoneInfo;
        console.log(element)

    },
    //鼠标没有点在元素上清除一些数据
    [types.CLEARDATA](state) {
        var phoneInfo = state.phoneInfo;
        phoneInfo.pagesInfo.currentElement = [];
        phoneInfo.pagesInfo.initNode = [];
        state.phoneInfo = phoneInfo;
    },
    //显示虚线边框的方法
    [types.SHOWBORDER](state, data) {
        var phoneInfo = state.phoneInfo;
        console.log(data)
        phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.forEach((item, index) => {

            if ((index == data.index && data.type == "show") || (item.isShowCircle && item.isShowBorder) || item.type == "null") {
                item.isShowBorder = true;
            } else {
                item.isShowBorder = false;
            }
        });
        state.phoneInfo = phoneInfo;
    },
    //显示边上原点的方法
    [types.SHOWCIRCLE](state, data) {
        console.log(data, "点击")
        var phoneInfo = state.phoneInfo;
        if (phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements[data.index] && phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements[data.index].type == "null") {

        } else if (data.index != undefined) {
            phoneInfo.pagesInfo.currentElement = [data.index];
        }
        console.log(phoneInfo.pagesInfo.currentElement, "phoneInfo.pagesInfo.currentElement")
        phoneInfo.pagesInfo.pages[phoneInfo.pagesInfo.currentPage].elements.forEach((item, index) => {
            if (index == data.index && data.type == "show") {
                item.isShowCircle = true;
            } else if (index == data.index && data.type == "hide") {
                item.isShowCircle = false;
                item.isShowBorder = false;
            } else {
                item.isShowCircle = false;
            }
        });
        if (phoneInfo.pagesInfo.currentElement.length == 0) {
            return null;
        }
        phoneInfo.pagesInfo.initNode = [];
        phoneInfo.pagesInfo.currentElement.forEach((item, index) => {
            phoneInfo.pagesInfo.initNode.push({
                key: item,
                value: phoneInfo.pagesInfo.pages[
                    phoneInfo.pagesInfo.currentPage
                ].elements[item]
            });
        });
        console.log(phoneInfo.pagesInfo.initNode, "phoneInfo.pagesInfo.initNode.")
        state.phoneInfo = phoneInfo;
    }
}
export default mutations;