export default (state, action) => {
    switch(action.type) {
        case 'ADD_SUBSCRIPTION':
            return {
                ...state,
                subscription: state.subscriptions.filter(subscription => subscription.id === action.payload)
            }
            
        default:
            return state;
    }
}