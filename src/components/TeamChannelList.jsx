import React, { Children } from 'react'

const TeamChannelList=({children,error=false,loading,type})=> {
    if(error){
        return type==='team'?(
            <div className="team-channel-list">
            <p className="team-channel-list__message">
                Connection Error! Please Wait a Moment and try again 
            </p>
            </div>
        ):null;
    }

    if(loading){
        <div className="team-channel-list">
            <p className="team-channel-list loading">
                {type==='team'? 'Channels':'Messages'} loading... 
            </p>
            </div>
    }
  return (
    <div className='team-channel-list'>
        <div className="team-channel-list__header">
            <p className="team-channel-list__header__title">
            {type==='team'? 'Channels':'Direct Messages'}  
            </p>
            {/* ADD channel Button */}
        </div>
      {children}
    </div>
  )
}
export default TeamChannelList;
