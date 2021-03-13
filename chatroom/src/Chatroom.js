import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import './Chatroom.css'

class Chatroom extends Component{

    state = {
        chatrooms: [],
        userName: null,
        email: null
    }

    addChat = (message, sender) => {
        const newChatroom = this.state.chatrooms.push({message, sender, time: new Date().toLocaleString()})
        this.setState({
            chatroom: newChatroom
        })
    }

    render(){
        return(
            <div className='chatview'>
                <div className='messageContainer'>
                    {
                        this.state.chatrooms.map((message, index) => {
                            if (message.sender === 'ai'){
                                return (
                                    <div className='MyRow' key={index}>
                                        <div className='MyMessage'>
                                            {message.message}
                                        </div>
                                    </div>
                                )
                            }else{
                                return (
                                    <div className='userRow' key={index}>
                                        <div className='MyMessage'>
                                            {message.message}
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className='messageInput'>
                    <TextField
                        id="standard-full-width"
                        label="Label"
                        style={{ margin: 8 }}
                        placeholder="Placeholder"
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <button> Send </button>
                </div>
            </div>
        )
    }

}

export default Chatroom