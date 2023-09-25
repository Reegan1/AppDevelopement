import * as React from 'react'

const Login = () => {

const [formdata, SetFormData]=React.useState({
            
    username:"",
    password:""

})

const handleonChange = (e) =>{
    const [name, value] =[e.target.name, e.target.value];
    SetFormData({
       ...formdata,
       [name]: value
    })  
    
}

const SubmitForm = (e) =>{
    e.preventDefault();
    console.log(formdata);
}

  return (
    <div class="center">
        <h1>LOGIN</h1>
        <form method='post' action='' onSubmit={SubmitForm} >
            <div class="txt_field">
             <input type='text' id='username'  onChange={handleonChange}></input>
             <span></span>
             <label>Email</label>    
            </div>
            <div class="txt_field">
             <input type='password' id='password'  onChange={handleonChange}></input>
             <span></span>
             <label>Password</label>
            </div>
            <div class="pass">Forgot Password?</div><br/>
             <input type='submit' value="Login"></input>
             <div class="sign_up">
                Not a user? <a href="#">Signup</a>
             </div>
        </form>
    </div>
        
  )
}

export default Login
