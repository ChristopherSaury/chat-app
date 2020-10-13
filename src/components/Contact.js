import React from 'react';
import './Contact.css';

const isOnline = true;
function Contact (){
    return(
        <div className='Contact status status-text status-online status-offline'>

                <img className='avatar' src='https://randomuser.me/api/portraits/men/82.jpg' alt='avatar'/>
                    <div className='name status'>Angel Gonzalez  
                        
                            
                            <div className='status-text'>{isOnline ? 'online' : 'offline'}</div>
                            <div className = {isOnline ? 'status-online' : 'status-offline'}></div>
                        </div>

        </div>
        
        
    );
}

export default Contact;