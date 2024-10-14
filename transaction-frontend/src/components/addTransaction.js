import { useState } from 'react'
import axios from '../axiosinstance'
import { useNavigate } from 'react-router-dom'
const AddTransaction = () =>{
    const navigate  = useNavigate()
    const [formData,setFormData] = useState({
        ammount:'',
        discription:'',
        tarnsactionType:''
    })
    const handleSubmit =async () =>{
       try{
        const resp = await axios.post('/createTransaction',formData)
        navigate('/')
        
       }catch(err){
         alert(err.response.data.message)
        
       }
    }

    const handleChange = (e) =>{
        const value  = e.target.value
        const name = e.target.name
        console.log(name,value);
        
        setFormData({...formData,[name]:value})
    }

    return(
        <div>
        <h4>
            New Transaction
        </h4>
        <div className="d-flex">
            <label>Transaction Type</label>
            <select name='tarnsactionType' onChange={handleChange}>
                <option value={'credit'}>Credit</option>
                <option value={'debit'}> Debit</option>
            </select>
        </div>
        <div className="d-flex">
            <label>Ammount</label>
            <input name='ammount' onChange={handleChange} />
        </div>
        <div className="d-flex">
            <label>Description</label>
            <input name='discription' onChange={handleChange} placeholder='Enter description' />
        </div>

        <button onClick={handleSubmit}>Save</button>
        <button onClick={()=>(  navigate('/'))}>Cancel</button>
        </div>
        
    )
}

export default AddTransaction