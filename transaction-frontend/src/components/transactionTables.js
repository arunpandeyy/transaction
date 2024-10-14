import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from '../axiosinstance'
const TransactionTable = () =>{
    const navigate  =useNavigate()
    const [transactions,setTransactions] = useState([])
    const getAllData =async () =>{
        try{
         const resp = await axios.get('/transactions')
         setTransactions(resp.data.data)
         
        }catch(err){
            alert("Error")
         
        }
     }
     useEffect(()=>{
        getAllData()
     },[])
    const handleNavigate = ()=>{
        navigate('/addTransaction')
    }
    return(
        <div>
             <div className='d-flex'>
        <h5>Office Transaction</h5>
        <button onClick={handleNavigate}>Add Transaction</button>
        </div>
     
        <table>
          <thead>
          <tr>
            <th>
            Date
            </th>
            <th>
            description
            </th>
            <th>
            Credit
            </th>
            <th>
            Debit
            </th>
            <th>
            Running Balance
            </th>
          </tr>

          </thead>
          <tbody>
          {
                transactions && transactions.length >0 &&
                transactions.map(curr=>(
                    <tr>
                    <td>
                     {curr?.createdAt} 
                    </td>
                    <td>
                    {curr?.discription}  
                    </td>
                    <td>
                    {curr?.tarnsactionType === "credit" && curr?.ammount}  
                    </td>
                    <td>
                    {curr?.tarnsactionType === "debit" && curr?.ammount}  
                    </td>
                    <td>
                    {curr?.run_balance}  
                    </td> 
                  </tr>
                ))
               
                }
          
          </tbody>
        
         
        </table>
        </div>
    )
}

export default TransactionTable