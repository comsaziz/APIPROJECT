document.addEventListener('DOMContentLoaded', function() {
   
    const apiUrl = "https://66e803d4b17821a9d9daf73c.mockapi.io/photo/SignUp";
    
   
    function loadProfile() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              
                const user = data[0]; 
                
                if (user) {
                    document.getElementById('profile_name').textContent = user.Name || 'Not Available';
                    document.getElementById('profile_email').textContent = user.Email || 'Not Available';
                    document.getElementById('profile_location').textContent = user.Location || 'Not Available';
                } else {
                    document.getElementById('profile_info').innerHTML = '<p>No user data available.</p>';
                }
            })
    }

  
    loadProfile();
});
