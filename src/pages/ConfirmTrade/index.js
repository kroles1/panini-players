import React, {useState} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getUserData } from '../../actions'
import './index.css'

export default function ConfirmTrade() {

    const [formData, setFormData] = useState({})
    const [added, setAdded] = useState(false)
    const [imgGive, setImgGive] = useState('https://i.imgur.com/tdi3NGa.jpg')
    const [imgReceive, setImgReceive] = useState('https://i.imgur.com/tdi3NGa.jpg')
    const [imgClass, setImgClass] = useState('sticker-img-unadded')
    const userId = useSelector(state => state.user.userId)
    const userCards = useSelector(state => state.user.cards)
    const username = useSelector(state => state.user.username)
    const dispatch = useDispatch()

    const handleChange = async (e) => {
        const { name, value } =e.target
        setFormData({...formData, [name]: value});
        setImgClass('sticker-img-unadded')
        if (name == 'stickerIdTraded') {
            setImgGive(`https://i.imgur.com/tdi3NGa.jpg`)
        }
        if (name == 'stickerIdReceived') {
            setImgReceive(`https://i.imgur.com/tdi3NGa.jpg`)
        }
        const input = e.target.value
        if (input.length > 3 && name == 'stickerIdTraded') {
            const { data } = await axios.get(`http://127.0.0.1:5000/stickers/${input}`)
            setImgGive(`http://${data.image}`)
        }
        if (input.length > 3 && name == 'stickerIdReceived') {
            const { data } = await axios.get(`http://127.0.0.1:5000/stickers/${input}`)
            setImgReceive(`http://${data.image}`)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            setImgClass('sticker-img-added')
            const removeSticker = await axios.put(`http://127.0.0.1:5000/stickers/${formData.stickerIdTraded}`,{user: userId})
            console.log(removeSticker.data);
            console.log(userCards);
            if (removeSticker.data !== userCards) {
                const addSticker = await axios.post(`http://127.0.0.1:5000/stickers/${formData.stickerIdReceived}`, {user: userId})
                setAdded(true)
            }
            dispatch(getUserData(username))
        } catch (error) {
            
        }
    }

  return (
    <div>
        <div className='trade-div'>
            <div>
                <img className={imgClass} src={imgGive}/>
                <img className={imgClass} src={imgReceive}/>
            </div>
            <form onSubmit={handleSubmit} className='trade-form'>
                <div className='form-input'>
                    <input type="text" placeholder="Sticker Id traded" name='stickerIdTraded' value={formData.stickerIdTraded} onChange={handleChange}></input>
                    <input type="text" placeholder="Sticker Id received" name='stickerIdReceived' value={formData.stickerIdReceived} onChange={handleChange}></input>
                </div>
                
                <input className='trade-sticker-btn' type="submit" value="Trade Stickers"></input>
            </form>
            {added && <p className='tradeConfirmed'>Trade confirmed</p>}
        </div>
    </div>
  )
}
