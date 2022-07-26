import React, { Component } from 'react'

 class Signup extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      email: '',
      confirmPassword: '',
    
    }

    
  }
  handleUsernameChange = (event) =>{
    this.setState({username: event.target.value})
  }
  handlePasswordChange = (event) =>{
    this.setState({password: event.target.value})
  }

  handleConfirmPasswordChange = (event) =>{
    this.setState({confirmPassword: event.target.value})
  }

  handleEmailChange = (event) =>{
    this.setState({email: event.target.value})
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    const signUp = this.state 

      if(signUp) {
        if (signUp.password !== signUp.confirmPassword) {
          alert('Passwords do not match')
        }
          else {
            alert(`${signUp.username} ${signUp.email} ${signUp.password} ${signUp.confirmPassword}`)
          }
      }
      }
  
  
  render() {
    return (
      <div className='boarder'>
            <form onSubmit={this.handleSubmit}>
                <p>Sign Up</p>
                <label>Username</label><br></br>
                <input type='text' value={this.state.username} 
                  onChange={this.handleUsernameChange} required></input><br></br>

                <label>Email</label><br></br>
                <input type='text' value={this.state.email} 
                  onChange={this.handleEmailChange} required></input><br></br>
                

                <label>Password</label><br></br>
                <input type='text' value={this.state.password} 
                  onChange={this.handlePasswordChange} required></input><br></br>

                <label>Confirm Password</label><br></br>
                <input type='text' value={this.state.confirmPassword} 
                  onChange={this.handleConfirmPasswordChange} required></input><br></br>
                
                
                <div className='button'>
                <button type='submit' value={'Submit'}>Submit</button>
                </div><br></br>

                <div>Already have an account? <br></br> Log in here</div>
            </form>

            
        </div>
    )  
}
}

export default Signup