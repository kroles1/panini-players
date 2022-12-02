const initState = {
    userId: 0,
    username: "",
    cards: {

    },
    friends: []
}

const userReducer = (state=initState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default userReducer
