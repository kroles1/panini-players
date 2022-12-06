const initState = {
    userId: 0,
    username: "",
    cards: "",
    friends: "",
    location: "",
    loading: false
}

const userReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING_USER':
            return { ...state, loading: true };
        case 'LOAD_USER_RESULT':
            return { ...state,  userId: action.payload.userId, username: action.payload.username, cards: action.payload.cards, friends: action.payload.friends, location: action.payload.location, loading: false }
        default:
            return state;
    }
}

export default userReducer
