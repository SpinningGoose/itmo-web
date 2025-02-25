document.addEventListener('DOMContentLoaded', function () {
    const blogContainer = document.getElementById('blog-container');
    const preloader = document.getElementById('preloader');
    const errorMessage = document.getElementById('error-message');

    function getPost() {
        const randomId = Math.floor(Math.random() * 100) + 1;
        return `https://jsonplaceholder.typicode.com/posts?id=${randomId}`;
    }

    function loadPosts() {
        fetch(getPost())
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                preloader.style.display = 'none';
                displayPosts(data);
            })
            .catch(error => {
                preloader.style.display = 'none';
                errorMessage.style.display = 'block';
                console.error('Error:', error);
            });
    }

    function displayPosts(posts) {
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('post');

            const titleElement = document.createElement('h3');
            titleElement.textContent = post.title;

            const bodyElement = document.createElement('p');
            bodyElement.textContent = post.body;

            postElement.appendChild(titleElement);
            postElement.appendChild(bodyElement);

            blogContainer.appendChild(postElement);
        });
    }

    loadPosts();
});