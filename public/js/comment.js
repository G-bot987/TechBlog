const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const commentText = document.querySelector('#commentText').value.trim();
    

    const id = document.querySelector('#commentForm').getAttribute('data-id');

    if (commentText) {
      const response = await fetch(`/api/post/${id}`, {
        method: 'POST',
        body: JSON.stringify({ text: commentText}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        document.location.replace(`/post/${id}`);
      } else {
        alert('Failed to post comment');
      }
    }
  };