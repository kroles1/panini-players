import React, {useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../actions'
import './index.css'

export default function AddSticker() {

    const [formData, setFormData] = useState({})
    const [added, setAdded] = useState(false)
    const [imgUrl, setImgUrl] = useState('https://i.imgur.com/tdi3NGa.jpg')
    const [imgClass, setImgClass] = useState('add-sticker-img-unadded')
    const userId = useSelector(state => state.user.userId)
    const username = useSelector(state => state.user.username)
    const dispatch = useDispatch()

    const handleChange = async (e) => {
        const { name, value } =e.target
        setFormData({...formData, [name]: value});
        setImgUrl('https://i.imgur.com/tdi3NGa.jpg')
        setImgClass('add-sticker-img-unadded')
        const input = e.target.value
        if (input.length > 3) {
            const { data } = await axios.get(`http://127.0.0.1:5000/stickers/${input}`)
            setImgUrl(`http://${data.image}`)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
<<<<<<< HEAD
=======
        setImgClass('add-sticker-img-added')
>>>>>>> b268eeced96267088f3a5b8b1ea346e88f542674
        axios.post(`http://127.0.0.1:5000/stickers/${formData.stickerId}`, {user: userId})
            .then((res) => {
                dispatch(getUserData(username))
                setAdded(true)
            })
            .catch((err) => console.error(err));
    }

  return (
    <div className='add-sticker'>
        <img className={imgClass} src={imgUrl}/>
        <form onSubmit={handleSubmit} className="add-sticker-form">
            <input className='text-input' type="text" placeholder="Sticker Code" name='stickerId' value={formData.stickerId} onChange={handleChange}></input>
            <input type="submit" value="Add" className='add-sticker-btn'></input>
        </form>
        {added && <p>Sticker Added</p>}
    </div>
  )
}
