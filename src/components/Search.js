import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';
const Search = ({hideButton=false}) => {
    const [input,setInput] = useState('')
    const [{},dispatch] = useStateValue()
    const navigate = useNavigate()
    function search(e){
        e.preventDefault()
        console.log('uo dclose')
        navigate('/search')
        dispatch({
            term:input,
            type:actionType.SET_SEARCH_TERM  //  we can do this also 'SET_SEARCH_TERM'
        })
    }
  return (
    <form className="search">
        <div className="search__input">
            <SearchIcon className='search__InputIcon'/>
            <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        
        </div>
        {!hideButton ? (
        <div className="search__buttons">
            <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm feeling Lucky</Button>
        </div>

        ):(
        <div className="search__buttons ">
            <Button className='search__buttonHidden' type='submit' onClick={search} variant="outlined">Google Search</Button>
            <Button className='search__buttonHidden' variant="outlined">I'm feeling Lucky</Button>
        </div>
        )}
    </form>
  )
}

export default Search
