import { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

import { SearchIcon } from "assets";

import React from 'react'

const ChannelSearch = ()=> {
    const [query,setquery]=useState('');
    const [loading, setloading]=useState(false);

    const getChannels= async(text)=>{
        try {
            //FEtCH channels from the API
        } catch (error) {
            setquery("");
        }
    }

    const onSearch=(event)=>{
        event.preventDefault();
        setloading(true);
        setquery(event.target.value);
        getChannels(event.target.value);
    }

  return (
    <div className="channel-search__container">
        <div className="channel-search__input__wrapper">
            <div className="channel-search__input__icon">
                <SearchIcon/>
            </div>
            <input 
                type="text" 
                className="channel-search__input__text" 
                placeholder="Search" 
                value={query} 
                onChange={onSearch} />
        </div>
      
    </div>
  )
}

export default ChannelSearch;
