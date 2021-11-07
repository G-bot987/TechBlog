const logout = async () => {
  logout.stopPropagation()
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to log out');
    }
  };
  
 addEventListener('click', logout);