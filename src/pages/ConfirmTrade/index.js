import React, {useState} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getUserData } from '../../actions'

export default function ConfirmTrade() {

    const [formData, setFormData] = useState({})
    const [added, setAdded] = useState(false)
    const userId = useSelector(state => state.user.userId)
    const userCards = useSelector(state => state.user.cards)
    const username = useSelector(state => state.user.username)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } =e.target
        setFormData({...formData, [name]: value});
        }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const removeSticker = await axios.put(`https://panini-players-backend.onrender.com/stickers/${formData.stickerIdTraded}`,{user: userId})
            dispatch(getUserData(username))
            console.log(removeSticker.data);
            console.log(userCards);
            if (removeSticker.data !== userCards) {
                const addSticker = await axios.post(`https://panini-players-backend.onrender.com/stickers/${formData.stickerIdReceived}`, {user: userId})
                setAdded(true)
            }
        } catch (error) {
            
        }
    }

  return (
    <div>
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Sticker Id traded" name='stickerIdTraded' value={formData.stickerIdTraded} onChange={handleChange}></input>
            <input type="text" placeholder="Sticker Id received" name='stickerIdReceived' value={formData.stickerIdReceived} onChange={handleChange}></input>
            <input type="submit" value="Add sticker"></input>
        </form>
        {added && <p>Trade confirmed</p>}
    </div>
    </div>
  )
}
