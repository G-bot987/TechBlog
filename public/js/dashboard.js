const logout = async (event) => {
  event.preventDefault();
console.log('logoutclick')
  const response = await fetch('/api/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    document.location.replace('/login');
    console.log('logoutreached')
  } else {
    alert('Failed to log out');
  }
};


document
.querySelector('#btnId')
.addEventListener('click', logout );

 