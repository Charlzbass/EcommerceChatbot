import './Landing.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
}));

const onSubmit = (e) => {
    this.props.signupUser(this.state)
        .then(() => this.props.history.push('/setupWizard'))
}

function Landing() {
    const classes = useStyles();
    return (
        <div className="Landing">
            <div>
                <h1>
                    Ecommerce Chatbot
                </h1>
            </div>
            <div>
                <TextField
                id="filled-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Username"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                /> 
                <TextField
                    id="filled-full-width"
                    label="Label"
                    style={{ margin: 8 }}
                    placeholder="Email"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    /> 
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    onClick={(e) => onSubmit(e)}
                >
                  Send
                </Button>
            </div>
        </div>
    );
}

export default Landing