import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './Chatroom.css'

const styles = (theme) => ({
    button: {
      margin: theme.spacing(1),
    },
});

class Chatroom extends Component{

    state = {
        chatrooms: [],
        username: null,
        email: null,
        signup: false,
        message: ''
    }

    handleChange = (e) => {
        console.log(this.state)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    addChat = (message, sender) => {
        if (message){
            const newChatroom = this.state.chatrooms.push({message, sender, time: new Date().toLocaleString()})
            this.setState({
                chatroom: newChatroom
            })
        }
    }

    onSubmit = (e) => {
        if (!this.state.username || !this.state.email){
            alert('Username or Email not filled')
        }else{
            this.setState({
                signup: true
            })
        }
    }

    render(){
        const { classes } = this.props;
        if (this.state.signup === false){
            return(
            <div className="Landing">
                <div>
                    <h1>
                        Ecommerce Chatbot
                    </h1>
                </div>
                <div>
                    <TextField
                    id="username"
                    label="username"
                    style={{ margin: 8 }}
                    placeholder="Username"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    onChange={(e) => this.handleChange(e)}
                    /> 
                    <TextField
                        id="email"
                        label="email"
                        style={{ margin: 8 }}
                        placeholder="Email"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        onChange={(e) => this.handleChange(e)}
                        /> 
                </div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        onClick={(e) => this.onSubmit(e)}
                    >
                    Send
                    </Button>
                </div>
            </div>
            )
        }else{
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
                        id="message"
                        label="Label"
                        style={{ margin: 8 }}
                        placeholder="Placeholder"
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        onChange={(e) => this.handleChange(e)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <button onClick={this.addChat(this.state.message,this.state.username)}> Send </button>
                </div>
            </div>
        )}
    }

}

export default withStyles(styles)(Chatroom)