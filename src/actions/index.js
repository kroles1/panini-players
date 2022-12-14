import axios from "axios";

//  For User Reducer


const loadingUser = () => ({ type: 'LOADING_USER'});

const loadUserResult = (userData) => ({
    type: 'LOAD_USER_RESULT',
    payload: {
        userId: userData.userId,
        username: userData.username,
        cards: userData.cards,
        friends: userData.friends,
        location: userData.location
        }
});


export const getUserData = (username) => {
    return async dispatch => {
        dispatch(loadingUser())
        try{
            const data = await fetchUserData(username)
            dispatch(loadUserResult(data))
        } catch (err) {
            console.warn(err.message)
            dispatch({ type: 'SET_ERROR' })
        }
    }
}

const fetchUserData = async username => {
    try {
        const userData = await axios.get(`http://127.0.0.1:5000/users/${username}`)
        console.log(userData.data[0]);
        return { userId: userData.data[0].id, username: userData.data[0].username, cards: userData.data[0].cards, friends: userData.data[0].friends, location: userData.data[0].location} ;
        // return { userId: 12, username: "test", cards: "test", friends: ["test"], location: "test"} ;
    } catch (err) {
        if (username.status === 404) { throw Error('That\'s not a valid username!') }
        throw new Error(err.message)
    }
}


// For Sticker reducer

const loadingStickers = () => ({ type: 'LOADING_STICKERS'});

const loadStickersResult = ({stickers}) => ({
    type: 'LOAD_STICKERS_RESULT',
    payload: {
        stickers: stickers.map(data => {
            return {
                stickerId: data.code,
                name: data.name,
                image: `https://${data.image}`,
                rarity: data.rarity
            }
        })
        }
    });

export const getStickerData = (country) => {
    return async dispatch => {
        dispatch(loadingStickers())
        try{
            const data = await fetchStickerData(country)
            dispatch(loadStickersResult(data))
        } catch (err) {
            console.warn(err.message)
            dispatch({ type: 'SET_ERROR' })
        }
    }
}

const fetchStickerData = async country => {
    try {
        const stickerData = await axios.get(`http://127.0.0.1:5000/country/${country}`)
        return { stickers: stickerData.data } ;
        // if (country === "QAT") {
        //     return { stickers: [{stickerId: "QAT1", name: "Qatar Team Photo", image: "https://cdn.shopify.com/s/files/1/0561/4639/5336/products/IMG_1790@2x.jpg",}, {stickerId: "QAT2", name: "Qatar Logo", image: "https://cdn.shopify.com/s/files/1/0561/4639/5336/products/IMG_2401_1789cccd-5ed2-4721-9930-ba05327f79a8@2x.jpg",}]} ;
        // } else if (country === "ENG") {
        //     return { stickers: [{stickerId: "ENG1", name: "England Team Photo", image: "https://cdn.shopify.com/s/files/1/0561/4639/5336/products/IMG_1790@2x.jpg",}, {stickerId: "ENG2", name: "England Logo", image: "https://cdn.shopify.com/s/files/1/0561/4639/5336/products/IMG_2401_1789cccd-5ed2-4721-9930-ba05327f79a8@2x.jpg",}]} ;
        // }
        
    } catch (err) {
        if (country.status === 404) { throw Error('That\'s not a valid username!') }
        throw new Error(err.message)
    }
}


// For friend reducer

const loadingFriends = () => ({ type: 'LOADING_FRIENDS'});

const loadFriendsResult = ({friends}) => ({
    type: 'LOAD_FRIENDS_RESULT',
    payload: {
        friends: friends.map(data => {
            return {
                userId: data.id,
                path: `/dashboard/friends/${data.id}`,
                username: data.username,
                location: data.location,
                email: data.email,
                cards: data.cards,
                trade: false
            }
        })
        }
    });

export const getFriendsData = (userId) => {
    return async dispatch => {
        dispatch(loadingFriends())
        try{
            const data = await fetchFriendsData(userId)
            dispatch(loadFriendsResult(data))
        } catch (err) {
            console.warn(err.message)
            dispatch({ type: 'SET_ERROR' })
        }
    }
}

const fetchFriendsData = async userId => {
    try {
        let friendsList = await axios.get(`http://127.0.0.1:5000/users/${userId}/friends_list`)
        console.log(friendsList.data.length);
        let friendsArray = []
        for(let i = 1; i < friendsList.data.length; i ++) {
            console.log("loop");
            let friendsData = await axios.get(`http://127.0.0.1:5000/friends/${friendsList.data[i]}`)
            console.log(friendsData);
            friendsArray.push(friendsData.data)
        }
        console.log(friendsArray);
        return { friends: friendsArray } ;
        // return { friends: [{
        //     userId: 123,
        //     path: `/dashboard/friends/123`,
        //     username: "Kornelia",
        //     location: "Sheffield",
        //     email: "K@k.com",
        //     cards: ["QAT1"]}]} ;
    } catch (err) {
        if (userId.status === 404) { throw Error('That\'s not a valid username!') }
        throw new Error(err.message)
    }
}

// Trade Available

export const tradeAvailable = (userId) => ({
    type: 'TRADE',
    payload: userId
})

// For public reducer 
const loadingPublic = () => ({ type: 'LOADING_PUBLIC'});

const loadPublicResult = ({publicUsers}) => ({
    type: 'LOAD_PUBLIC_RESULT',
    payload: {
        publicUsers: publicUsers.map(data => {
            return {
                userId: data.id,
                path: `/dashboard/publictrade/${data.id}`,
                username: data.username,
                location: data.location,
                email: data.email,
                cards: data.cards,
                trade: false
            }
        })
        }
    });

export const getPublicData = (location) => {
    return async dispatch => {
        dispatch(loadingPublic())
        try{
            const data = await fetchPublicData(location)
            dispatch(loadPublicResult(data))
        } catch (err) {
            console.warn(err.message)
            dispatch({ type: 'SET_ERROR' })
        }
    }
}

const fetchPublicData = async location => {
    try {
        let publicData = await axios.get(`http://127.0.0.1:5000/users/location/${location}`)
        // console.log(publicData.data);
        let publicArray = []
        // for(let i = 1; i < publicList.data.length; i ++) {
        //     console.log("public");
        //     let publicData = await axios.get(`http://127.0.0.1:5000/friends/${friendsList.data[i]}`)
        //     console.log(friendsData);
            publicArray.push(publicData.data)
        // }
        // console.log(friendsArray);
        return { publicUsers: publicData.data } ;
    } catch (err) {
        if (location.status === 404) { throw Error('That\'s not a valid location!') }
        throw new Error(err.message)
    }
}
