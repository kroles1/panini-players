const initState = {
    friends: [
        {
            userId: 1,
            path: `/dashboard/friends/1`,
            username: "friend1",
            location: "",
            email: "",
            cards: "",
            trade: false
        },
        {
            userId: 2,
            path: `/dashboard/friends/2`,
            username: "friend2",
            location: "",
            email: "",
            cards: "",
            trade: false
        },
        {
            userId: 3,
            path: `/dashboard/friends/3`,
            username: "friend3",
            location: "",
            email: "",
            cards: "",
            trade: false
        }
    ],
    loading: false
}

const friendsReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING_FRIENDS':
            return { ...state, loading: true }
        case 'LOAD_FRIENDS_RESULT':
            return { ...state, friends: action.payload.friends, loading: false }
        case 'TRADE':
            return { ...state, friends: state.friends.map((el) =>{
                if(action.payload == el.userId){
                    return {
                        ...el,
                        trade: true
                    }
                }
                return el
            })}
        default:
            return state;
    }
}

export default friendsReducer
