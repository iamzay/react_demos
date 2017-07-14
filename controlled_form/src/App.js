import React from 'react';
import "./App.css";

const style={
  width:"200px",
  margin:"100px auto"
}

const inputStyle={
  border:"1px solid red",
  outline:"none"
}

export default class extends React.Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      toggleError:{
        email:false,
        password:false
      }
    };
    this.handleChange=this.handleChange.bind(this);
    this.displayError=this.displayError.bind(this);
  }

  handleChange(e){
    const {name,value}=e.target;
    this.setState((prevState=>({
      [name]:value,
      toggleError:{
        ...prevState.toggleError,
        [name]:true
      }
    })));
  }

  isValid(str){
    return str.length>0;
  }

  displayError(fieldName){
    return this.state.toggleError[fieldName]&&!this.isValid(this.state[fieldName]);
  }

  render(){
    const disabled=this.state.email.length==0||this.state.password.length==0;
    const {toggleError}=this.state;
    return (
      <form action="" style={style}>
        <input name="email" type="text" value={this.state.email}
          placeholder="enter email" onChange={this.handleChange} style={this.displayError("email")?inputStyle:null}/><br/>
        <input name="password" type="text" value={this.state.password}
          placeholder="enter password" onChange={this.handleChange} style={this.displayError("password")?inputStyle:null}/><br/>
        <button disabled={disabled}>sign up</button>
      </form>
    )
  }
}
