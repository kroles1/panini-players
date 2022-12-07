const initState = {
    publicUsers: [
        {
            userId: 1,
            username: "friend1",
            location: "",
            email: "",
            cards: "",
            trade: false
        },
        {
            userId: 2,
            username: "friend2",
            location: "",
            email: "",
            cards: "",
            trade: false
        },
        {
            userId: 3,
            username: "friend3",
            location: "",
            email: "",
            cards: "",
            trade: false
        }
    ],
    loading: false
}

const publicUsersReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING_PUBLIC':
            return { ...state, loading: true }
        case 'LOAD_PUBLIC_RESULT':
            return { ...state, publicUsers: action.payload.publicUsers, loading: false }
        case 'TRADE':
            return { ...state, publicUsers: state.publicUsers.map((el) =>{
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

export default publicUsersReducer
