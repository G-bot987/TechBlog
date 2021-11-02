// log in

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  console.log('email & pword', email, password)
    if (email && password) {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        body: JSON.stringify({email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert("Unable to login. Please check your credentials.");
      }
    }
  };

  document
  .querySelector('#login-form')
  // .addEventListener('#submit', loginFormHandler);