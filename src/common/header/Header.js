import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding : 0, textAlign:"center" }}>
        {props.children}
        </Typography>
    );
}

TabContainer.prototype ={
     children: PropTypes.node.isRequired
}


class Header extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            username: "",
            usernameRequired: "dispNone",
            loginPassward: "",
            loginpasswardRequired:"dispNone",
            firstname:"",
            firstnameRequired:"dispNone",
            lastname:"",
            lastnameRequired:"dispNone",
            eamil:"",
            eamilRequired:"dispNone",
            registerpassward:"",
            registerPasswardRequired:"dispNone",
            contact:"",
            ContactRequired:"dispNone"

        };

    }

    openModalHandler = () => {
        this.setState({ modalIsOpen: true,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            loginpasswardRequired:"dispNone",
            loginPassward: "",
            firstnameRequired:"dispNone",
            firstname:"",
            lastnameRequired:"dispNone",
            lastname:"",
            eamilRequired:"dispNone",
            eamil:"",
            registerPasswardRequired:"dispNone",
            registerpassward:"",
            ContactRequired:"dispNone",
            contact:"" });
    }

    closeModalHandler = () => {
        this.setState({modalIsOpen: false });
    }

    tabChangesHandler = (event, value) => {
        this.setState({ value });
    }

    loginClickHandler = ()=>{
        this.state.username === "" ? this.setState({usernameRequired:"dispBlock"}) : this.setState({usernameRequired:"dispNone"});
        this.state.loginPassward === "" ? this.setState({loginpasswardRequired:"dispBlock"}) : this.setState({loginpasswardRequired: "dispNone"});
    }


    registerClickHandler =() =>{
        this.state.firstname === "" ? this.setState({firstnameRequired:"dispBlock"}) : this.setState({firstnameRequired:"dispNone"});
        this.state.lastname === "" ? this.setState({lastnameRequired:"dispBlock"}) : this.setState({lastnameRequired: "dispNone"});
        this.state.eamil === "" ? this.setState({eamilRequired:"dispBlock"}) : this.setState({eamilRequired:"dispNone"});
        this.state.registerpassward === "" ? this.setState({registerPasswardRequired:"dispBlock"}) : this.setState({registerPasswardRequired: "dispNone"});
        this.state.contact === "" ? this.setState({ContactRequired:"dispBlock"}) : this.setState({ContactRequired:"dispNone"});
    }

    inputUsernameChangeHandler =(e) =>{
        this.setState({username: e.target.value});
       
    }

    inputLoginPasswardChangeHandler =(e) =>{
        this.setState({loginPassward: e.target.value});
    }
    
    inputFirstnameChangeHandler =(e) =>{
        this.setState({firstname: e.target.value});
    }

    inputLastnameChangeHandler =(e) =>{
        this.setState({lastname: e.target.value});
    }

    inputEmailChangeHandler = (e) =>{
        this.setState({eamil: e.target.value});
    }

    inputRegisterPasswardChangeHandler = (e) =>{
        this.setState({registerpassward: e.target.value});
    }

    inputContactChangeHandler =(e) =>{
        this.setState({contact: e.target.value});
    }

    render() {
        return (
            <div>
                <header className='app-header'>
                    <img src={logo} className="app-logo" alt="Movie App logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangesHandler}>
                        <Tab label="Login"/>
                        <Tab label="Register"/>
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer >
                            <FormControl required>
                                <InputLabel htmlFor="username" > Username </InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="loginpassward" > Passward </InputLabel>
                                <Input id="loginpassward" type="passward" passward={this.state.loginPassward} onChange={this.inputLoginPasswardChangeHandler} />
                                <FormHelperText className={this.state.loginpasswardRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>}
                    {this.state.value === 1 &&
                    <TabContainer >
                            <FormControl required>
                                <InputLabel htmlFor="firstname" > Firstname </InputLabel>
                                <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler} />
                                <FormHelperText className={this.state.firstnameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="lastname" > Lastname </InputLabel>
                                <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler} />
                                <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="email" > Email </InputLabel>
                                <Input id="email" type="text" eamil={this.state.eamil} onChange={this.inputEmailChangeHandler} />
                                <FormHelperText className={this.state.eamilRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="registerpassward" > Passward </InputLabel>
                                <Input id="registerpassward" type="passward" registerpassward={this.state.registerpassward} onChange={this.inputRegisterPasswardChangeHandler} />
                                <FormHelperText className={this.state.registerPasswardRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="contact" > Contact </InputLabel>
                                <Input id="contact" type="text" contact={this.state.contact} onChange={this.inputContactChangeHandler} />
                                <FormHelperText className={this.state.ContactRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                    </TabContainer>}
                </Modal>

            </div>
        )
    }
}

export default Header;