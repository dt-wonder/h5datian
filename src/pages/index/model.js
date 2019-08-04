const model = {
    text: {
        id: 0,
        type: "text",
        value: "请输入文本内容",
        elementStyle: {
            left: "0px",
            top: "0px",
            color: "#000000",
            fontSize: "14px",
            width: "375px",
            height: "auto",
            lineHeight: "40px",
            backgroundColor: "#ffffff",
            rotateValue: 0,
        },
        animateStyle: {
            animationName: "default",
            animationDuration: "1s",
            animationTimingFunction: "ease"
        }
    },
    image: {
        id: 2,
        type: "image",
        value: "",
        elementStyle: {
            width: "100px",
            height: "100px",
            left: 0,
            top: 0,
            rotateValue: 0
        },
        animateStyle: {
            animationName: "default",
            animationDuration: "1s",
            animationTimingFunction: "ease"
        }
    }
}
export default model;