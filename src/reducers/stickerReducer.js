const initState = {
    stickers:[
        {
            stickerId: "QAT1",
            name: "Team Photo Qatar",
            image: "",
            country: "Qatar"
        },
        {
            stickerId: "QAT1",
            name: "Team Photo Qatar",
            image: "",
            country: "Qatar"
        },
        {
            stickerId: "QAT1",
            name: "Team Photo Qatar",
            image: "",
            country: "Qatar"
        },
        {
            stickerId: "QAT1",
            name: "Team Photo Qatar",
            image: "",
            country: "Qatar"
        }
    ]
}

const stickerReducer = (state=initState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default stickerReducer
