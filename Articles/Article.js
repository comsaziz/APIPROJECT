const apiUrl = 'https://66e803d4b17821a9d9daf73c.mockapi.io/photo/photo';

document.getElementById('articleForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  
  const article = {
    title: title,
    content: content
  };

  
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(article)
  })
  .then(response => response.json())
  .then(data => {
    
   console.log(data)
   window.location.assign("../Home/home.html"); 
  })
  .catch(error => {
    console.error('Error:', error);
  });
});