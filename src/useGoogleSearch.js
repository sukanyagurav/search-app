import React from 'react'
import {useState,useEffect} from 'react'
import API_KEY from './keys'
const CONTEXT_KEY='a2ab048792a734a53'

const useGoogleSearch = (term) => {
    const [data,setData] = useState(null)
    const apiKey =process.env.REACT_APP_KEY
    useEffect(()=>{
        const fetchData=async()=>{

            
            try{
               const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${CONTEXT_KEY}&q=${term}`)
              console.log(process.env.API_KEY)
               const result =await res.json()
               setData(result)
            }
            catch(error){

            }
        }
        fetchData()
    },[term])
  return {
    data
  }
}

export default useGoogleSearch
