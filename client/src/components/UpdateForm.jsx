import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const UpdateForm = () => {

    const [hike, setHike] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect (() => {
        const getHikeById = async () => {
            try {
                let res = await axios.get(`/hikes/${id}`)
                setHike(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getHikeById()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/hikes/${id}`, hike)
        navigate('/')
    }

    const handleChange = (e) => {
        setHike({ ...hike, [e.target.id]: e.target.value})
      }


//put

  return (
    <div>
         <h1>Update Hike</h1>
        <div className='form'>
            {hike && 
            (<form onSubmit={ handleSubmit } key={hike.id}>
            <ul>
                <li><input type="text" value={hike.city} onChange={handleChange} id={'city'} placeholder={'city'}/></li>
                <li><input type="text" value={hike.image} onChange={handleChange} id={'image'} placeholder={'imgURL'}/></li>
                <li><input type="text" value={hike.difficulty} onChange={handleChange} id={'difficulty'} placeholder={'difficulty'}/></li>
                <li><input type="text" value={hike.miles} onChange={handleChange} id={'miles'} placeholder={'miles'}/></li>
                <li><input type="text-area" value={hike.details} onChange={handleChange} id={'details'} placeholder={'details'}/></li>
                <button>Submit</button>
            </ul>
            </form>)
    }
        </div>
    </div>
  )
}


export default UpdateForm