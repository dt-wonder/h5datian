const getters = {
    initNode: state => {
        console.log(state.phoneInfo.pagesInfo.pages[state.phoneInfo.pagesInfo.currentPage].elements,state.phoneInfo.pagesInfo.currentElement)
        return state.phoneInfo.pagesInfo.initNode;

    }
}
export default getters;