import React from 'react';
import axios from 'axios';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            age: "",
            marriage: "",
        } 
    } 


    handleSelect = (event) => {
        this.setState({
           [event.target.name]: event.target.value 
        })
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        const url = "http://127.0.0.1:3001/users/";
        
        const {username, password, age, marriage} = this.state; 
        axios({
            url,
            method: "POST",
            headers: {  },
            data: {
                username,
                password,
                marriage,
                age 
                }
            })
            .then(response => {
                alert("Tu usuario ha sido registrado")
                this.props.history.push("/");  
            })
            .catch(error =>{
                alert("No es posible crear el usuario. " + error.response.data.message);
                 this.setState({ 
                    error: error.response.data.message,
                })
             })
    } 

    handleInput = (event) => {
        this.setState({
           [event.target.name]: event.target.value, 
        }) 
    } 

    render(){
        return (
            <section style={{display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={this.handleSubmit} >
                    <input id="username" placeholder="Type your username" name="username" type="text"  value={this.state.username} onChange={this.handleInput} />
                    <br />
                    <input id="password" placeholder="Type your password" name="password" type="password"  value={this.state.password} onChange={this.handleInput} />
                    <br />
                    <input id="age" placeholder="Your age" name="age" type="text" value={this.state.age} onChange={this.handleInput} />
                    <br />
                    <input id="marriage" placeholder="Marriage Status" name="marriage" type="text"  value={this.state.marriage} onChange={this.handleInput} />
                    <br />
                    <input type="submit" onSubmit={this.handleSubmit}  value="Submit" />
                    <br />
                </form>
            </section>
        )
    }
} 

export default SignUp;