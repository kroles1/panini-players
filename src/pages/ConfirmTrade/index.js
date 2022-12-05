import React, {useState} from 'react'
import axios from 'axios'

export default function ConfirmTrade() {

    const [formData, setFormData] = useState({})
    const [added, setAdded] = useState(false)

    const handleChange = (e) => {
        const { name, value } =e.target
        setFormData({...formData, [name]: value});
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch("http://127.0.0.1:5000/trade", formData)
            .then((res) => {
                setAdded(true)
            })
            .catch((err) => console.error(err));
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
