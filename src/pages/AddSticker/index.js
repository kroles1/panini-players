import React, {useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../actions'

export default function AddSticker() {

    const [formData, setFormData] = useState({})
    const [added, setAdded] = useState(false)
    const userId = useSelector(state => state.user.userId)
    const username = useSelector(state => state.user.username)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } =e.target
        setFormData({...formData, [name]: value});
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`https://panini-players-backend.onrender.com/stickers/${formData.stickerId}`, {user: userId})
            .then((res) => {
                dispatch(getUserData(username))
                setAdded(true)
            })
            .catch((err) => console.error(err));
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Sticker Id" name='stickerId' value={formData.stickerId} onChange={handleChange}></input>
            <input type="submit" value="Add sticker"></input>
        </form>
        {added && <p>Sticker Added</p>}
    </div>
  )
}
