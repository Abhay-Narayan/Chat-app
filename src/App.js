import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie';
import './App.css';
import ChannelListContainer from 'components/ChannelListContainer';
import ChannelContainer from 'components/ChannelContainer';
import Auth from 'components/Auth';


const apiKey = 'your_api_key'; //Get your api key from stream chat website
const authToken=false;
const client = StreamChat.getInstance(apiKey);
const App = ()=> {
  if(!authToken){
    return <Auth/>
  }
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="light">
      <ChannelListContainer/>
      <ChannelContainer/>
      </Chat>
    </div>
  );
}

export default App;
