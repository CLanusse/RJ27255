

const init = {
    loading: false
}

export const uiReducer = (state = init, action) => {

    switch(action.type) {
        case 'START_LOADING':
            return {
                loading: true
            }
        case 'FINISH_LOADING':
            return {
                loading: false
            }
        default:
            return state
    }
}