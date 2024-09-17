const apiUrl = 'https://66e803d4b17821a9d9daf73c.mockapi.io/photo/photo';

function fetchArticles() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const articlesContainer = document.getElementById('articlesContainer');
      articlesContainer.innerHTML = ''; 

      if (data && data.length > 0) {
      
        const article = data[0]; 

        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 style="color: #FFFF00;" class="card-title">${article.title}</h5>
              <p style="color: #FFFF00;" class="card-text">${article.content}</p>
              <button class="btn btn-danger" onclick="removeCard(this, ${article.id})">Delete</button>
            </div>
          </div>
        `;
        articlesContainer.appendChild(card);
      } else {
        console.log('No articles found');
      }
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });
}

function removeCard(button, id) {
  const card = button.closest('.col-md-4'); 

  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
  .then(() => {
 
    card.remove();
    console.log('Article deleted successfully');
  })
  .catch(error => {
    console.error('Error deleting article:', error);
  });
}

document.addEventListener('DOMContentLoaded', fetchArticles);
