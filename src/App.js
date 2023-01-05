import './App.css';
import React from 'react';

function App() {
  const initialFormData = {
    userName : "",
    password : "",
    fullName : "",
    phone : "",
    confirmPassword : ""
  }

  const [formData,setFormData] = React.useState(initialFormData);
  const [isSame,setIsSame] = React.useState(false);
  const [isPhoneValid,setPhoneValid] = React.useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      setIsSame(true);
      return;
    }
    if (formData.phone !== "") {
      var pattern = new RegExp(/^[0-9\b]+$/);
    
      if (!pattern.test(formData.phone) || formData.phone.length !== 10) {
        setPhoneValid(false); 
        return;
      }
    }
    setPhoneValid(true);
    setIsSame(false);
    console.log(JSON.stringify(formData));
  }

  return (
    <div className="App">
      <div className='formContainer' onSubmit={handleFormSubmit}> 
        <form>
          <div>
            <input placeholder='User Name' 
              onChange={handleChange} 
              value={formData.userName}
              name = "userName"
            />
          </div>
          <div>
            <input placeholder='Full Name' 
              onChange={handleChange} 
              value={formData.fullName}
              name = "fullName"
            />
          </div>
          <div>
            <input placeholder='phone' 
              onChange={handleChange} 
              value={formData.phone}
              name = "phone"
            />
            {!isPhoneValid && <p>Phone Number is not valid.</p>}
          </div>
          <div>
            <input placeholder='password' 
              onChange={handleChange} 
              value={formData.password}
              name="password"
              type="password"
            />
          </div>
          <div>
            <input placeholder='Confirm Password' 
              onChange={handleChange} 
              value={formData.confirmPassword}
              name="confirmPassword"
              type="password"
            />
            {isSame && <p>Passwords do not match</p>}
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
