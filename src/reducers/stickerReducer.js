const initState = {
    stickers:[
        {
            stickerId: "QAT1",
            name: "Team Photo Qatar",
            image: "https://cdn.shopify.com/s/files/1/0561/4639/5336/products/IMG_1790@2x.jpg",
            country: "Qatar"
        },
        {
            stickerId: "QAT1",
            name: "Team Photo Qatar",
            image: "cdn.shopify.com/s/files/1/0561/4639/5336/products/IMG_2401_1789cccd-5ed2-4721-9930-ba05327f79a8@2x.jpg",
            country: "Qatar"
        },
        {
            stickerId: "QAT1",
            name: "Team Photo Qatar",
            image: "cdn.shopify.com/s/files/1/0561/4639/5336/products/IMG_1791@2x.jpg",
            country: "Qatar"
        },
        {
            stickerId: "QAT1",
            name: "Team Photo Qatar",
            image: "cdn.shopify.com/s/files/1/0561/4639/5336/products/IMG_1792@2x.jpg",
            country: "Qatar"
        }
    ],
    loading: false
}

const stickerReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING_STICKERS':
            return { ...state, loading: true}
        case 'LOAD_STICKERS_RESULT':
            return { ...state, stickers: action.payload.stickers, loading: false}
        default:
            return state;
    }
}

export default stickerReducer
