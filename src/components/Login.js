import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            result: "",
        } 
    } 

    componentDidMount() {
        localStorage.removeItem("token");
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //const url = process.env.REACT_APP_SERVER_URL+"/users/signin";
        const url = "http://127.0.0.1:3001/users/signin";
        axios({
            url,
            method: "POST",
            data: {
                username: this.state.username,
                password: this.state.password
            }
            })
            .then(response => {
                console.log("Respuesta positiva!")
                localStorage.setItem("token",response.data);
                //this.props.onUpdate(response.data);
                this.props.history.push("/"); 
                
            })
            .catch(error =>{
                 this.setState({ 
                    error: error,
                    password: "",
                })
             })
    } 

    handleInput = (event) => {
        let value = event.target.value;
        this.setState({
           [event.target.name]: value, 
        })    
    } 

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={this.handleSubmit} >

                    <input type="text" placeholder="username" value={this.state.username} onChange={this.handleInput} name="username" />
                    <br />
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput} name="password" />
                    <br />
                    <input type="submit" onSubmit={this.handleSubmit} value="Submit" />
                    <button><Link to="/signup">Sign up</Link></button>
                </form>
            </div>
        )
    }
} 

export default Login;