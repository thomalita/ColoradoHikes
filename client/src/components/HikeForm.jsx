import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const HikeForm = () => {
  const navigate = useNavigate()
  const [newHike, setNewHike] = useState({
    city: '',
    image: '',
    miles: '',
    difficulty: '',
    details: '',
  })

    const handleSubmit = async (e) => {
      e.preventDefault()
        const res = await axios.post('http://localhost:3001/hikes', newHike)
        navigate('/hikes')
    }

    const handleChange = (e) => {
      setNewHike({ ...newHike, [e.target.id]: e.target.value})
    }

  return (
    <div>
    <h1>Add New Hike</h1>
    <div className='form'>
    <form onSubmit={ handleSubmit } key={newHike.id}>
      <ul>
        <li><input type="text" value={newHike.city} onChange={handleChange} id={'city'} placeholder={'city'}/></li>
        <li><input type="text" value={newHike.image} onChange={handleChange} id={'image'} placeholder={'imgURL'}/></li>
        <li><input type="text" value={newHike.difficulty} onChange={handleChange} id={'difficulty'} placeholder={'difficulty'}/></li>
        <li><input type="text" value={newHike.miles} onChange={handleChange} id={'miles'} placeholder={'miles'}/></li>
        <li><input type="text-area" value={newHike.details} onChange={handleChange} id={'details'} placeholder={'details'}/></li>
        <button>Submit</button>
        </ul>
    </form>
    </div>
    </div>
  )
}

export default HikeForm
