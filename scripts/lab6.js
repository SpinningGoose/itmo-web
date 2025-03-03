document.addEventListener('DOMContentLoaded', function () {
    const blogContainer = document.getElementById('blog-container');
    const preloader = document.getElementById('preloader');
    const errorMessage = document.getElementById('error-message');

    function getPost() {
        const randomId = Math.floor(Math.random() * 100) + 1;
        return `https://jsonplaceholder.typicode.com/posts?id=${randomId}`;
    }

    function loadPosts() {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        for (let index = 0; index < randomNumber; index++) {
            loadPost();
            
        }
    }

    function loadPost() {
        fetch(getPost())
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                preloader.style.display = 'none';
                displayPost(data);
            })
            .catch(error => {
                preloader.style.display = 'none';
                errorMessage.style.display = 'block';
                console.error('Error:', error);
            });
    }

    function displayPost(posts) {
        posts.forEach(post => {
            const postTemplate = document.getElementById('post-template');
            const postElement = postTemplate.content.cloneNode(true);

            postElement.querySelector('.post-title').textContent = post.title;

            postElement.querySelector('.post-text').textContent = post.body;
        
            blogContainer.appendChild(postElement);
        });
     
    }

    loadPosts();
});