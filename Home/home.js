const apiUrl = 'https://66e803d4b17821a9d9daf73c.mockapi.io/photo/photo';


function fetchArticles() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const articlesContainer = document.getElementById('articlesContainer');
      articlesContainer.innerHTML = ''; 

     
      data.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.content}</p>
              <button class="btn btn-danger" onclick="deleteArticle(${article.id})">Delete</button>
            </div>
          </div>
        `;
        articlesContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });
}

function deleteArticle(id) {
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      fetchArticles(); 
    })
    .catch(error => {
      console.error('Error deleting article:', error);
    });
}


document.addEventListener('DOMContentLoaded', fetchArticles);
