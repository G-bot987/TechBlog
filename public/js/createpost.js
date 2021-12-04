const postFormHander = async (event) => {
 
    event.preventDefault();
    const title = document.querySelector('#title-post').value.trim();
    const topic = document.querySelector('#topic-post').value.trim();
    const description = document.querySelector('#description-post').value.trim();
  
  
    if (title && topic && description) {
      const response = await fetch('/api/createnewpost', {
        method: 'POST',
        body: JSON.stringify({title, topic, description }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert("Unable to create post");
      }
    }
  };


  document
  .querySelector('#createpost-form')
  .addEventListener('submit', postFormHander);