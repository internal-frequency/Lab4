import React, { Component } from 'react'
import UserList from './UserList'

 export class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: ''
    
    }

    
  }
  handleUsernameChange = (event) =>{
    this.setState({username: event.target.value})
  }
  handlePasswordChange = (event) =>{
    this.setState({password: event.target.value})
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    const userExists = UserList().userList.find((verifyUser)=> verifyUser.username === this.state.username)

      if(userExists) {
        if (userExists.password !== this.state.password) {
          alert('Password is invalid')
        }
          else {
            alert(`${this.state.username} ${this.state.password}`)
          }
        }else {
            alert('This Username does not exist')
          }
      }
    
  render() {
    return (
      
        <div className ='boarder'>
            <form onSubmit={this.handleSubmit}>
                <p>Sign In</p>
                <label>Username</label><br></br>
                <input type='text' value={this.state.username} 
                  onChange={this.handleUsernameChange} required></input><br></br>
                

                <label>Password</label><br></br>
                <input type='text' value={this.state.password} 
                  onChange={this.handlePasswordChange} required></input><br></br>
                
               
                <div className='button'>
                <button type='submit'>Submit</button>
                </div>
            </form>

            
        </div>
      
    )
  }
}

