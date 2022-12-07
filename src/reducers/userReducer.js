const initState = {
    userId: 'fwfdsfewf',
    username: "jon",
    cards: "fjsldk-0 fnioiw-0 kvoiwe-0 viwoems-2",
    friends: "nfeupsf vinaaoife vmiwepf mviapfeoif iweapfo",
    location: "Birmingham",
    loading: false
}

const userReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING_USER':
            return { ...state, loading: true };
        case 'LOAD_USER_RESULT':
            return { ...state,  userId: action.payload.userId, username: action.payload.username, cards: action.payload.cards, friends: action.payload.friends, location: action.payload.location, loading: false }
        case 'LOCATION':
            return {...state, location: action.payload}
        default:
            return state;
    }
}

export default userReducer
