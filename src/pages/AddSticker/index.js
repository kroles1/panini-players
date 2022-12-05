import React, {useState} from 'react'
import axios from 'axios'

export default function AddSticker() {

    const [formData, setFormData] = useState({})
    const [added, setAdded] = useState(false)

    const handleChange = (e) => {
        const { name, value } =e.target
        setFormData({...formData, [name]: value});
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch("http://127.0.0.1:5000/addSticker", formData)
            .then((res) => {
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
