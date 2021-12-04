const deleteprocess = async (event) => {
    event.preventDefault();
  console.log('delete process')
    console.log(event.target.hasAttribute('data-id'))
  };
  
  
  
  // const delButtonHandler = async (event) => {
  
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/restaurant/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/dashboard');
  //     } else {
  //       alert('Failed to delete post');
  //     }
  //   }
  // };
  
  
  
  document
  .querySelector('#post-delete')
  .addEventListener('click', deleteprocess );