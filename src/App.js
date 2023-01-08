import './App.css';
import React,{useRef} from 'react';

function App() {
  const userNameRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const fullName = nameRef.current.value;
    const userName = nameRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (phone !== "") {
      var pattern = new RegExp(/^[0-9\b]+$/);
    
      if (!pattern.test(phone) || phone.length !== 10) {
        alert('Phone no is not valid!');
        return;
      }
    }

    if(password !== confirmPassword){
      alert('Passwords do not match!');
      return;
    } 
    
    alert('A form was submitted with UserName: "' + userName + '", Name: "'+ fullName +'" and Phone: "' + phone + '"');
    
  }

  return (
    <div className='formContainer'> 
      <form onSubmit={handleFormSubmit}>
          <div>
            <input 
              placeholder='User Name' 
              type = "text"
              ref={userNameRef}
              required
            />
          </div>
          <div>
            <input 
              placeholder='Full Name' 
              type = "text"
              ref={nameRef}
              required
            />
          </div>
          <div>
            <input placeholder='Phone' 
              type = "text"
              ref={phoneRef}
              required
            />
          </div>
          <div>
            <input placeholder='Password' 
              type = "password"
              ref={passwordRef}
              required
            />
          </div>
          <div>
            <input placeholder='Confirm Password' 
              type = "password"
              ref={confirmPasswordRef}
              required
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
      </form>
    </div>
  );
}

export default App;
