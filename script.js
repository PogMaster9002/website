document.addEventListener('DOMContentLoaded', function() {
    fetchBlogPosts();
    fetchProjects();
    fetchGames();
});

function fetchBlogPosts() {
    fetch('blogposts.json')
        .then(response => response.json())
        .then(data => {
            const blogList = document.querySelector('.project-list-blogs');
            if (blogList) {
                blogList.innerHTML = ''; // Clear existing content
                data.forEach(post => {
                    const postItem = document.createElement('a');
                    postItem.href = post.link;
                    postItem.className = 'project-item-blogs';
                    postItem.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.date}</p>
                        <p>${post.description}</p>
                    `;
                    blogList.appendChild(postItem);
                });
            }
        })
        .catch(error => console.error('Error fetching blog posts:', error));
}

function fetchProjects() {
    // Assuming you have a similar JSON structure for projects, 
    // you can implement fetching and displaying projects like this
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectList = document.querySelector('.project-list-projects');
            if (projectList) {
                projectList.innerHTML = ''; // Clear existing content
                data.forEach(project => {
                    const projectItem = document.createElement('a');
                    projectItem.href = project.link;
                    projectItem.className = 'project-item-projects';
                    projectItem.innerHTML = `
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    `;
                    projectList.appendChild(projectItem);
                });
            }
        })
        .catch(error => console.error('Error fetching projects:', error));
}

function fetchGames() {
    // Assuming you have a similar JSON structure for projects, 
    // you can implement fetching and displaying projects like this
    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            const gameList = document.querySelector('.project-list-games');
            if (gameList) {
                gameList.innerHTML = ''; // Clear existing content
                data.forEach(game => {
                    const gameItem = document.createElement('a');
                    gameItem.href = game.link;
                    gameItem.className = 'project-item-games';
                    gameItem.innerHTML = `
                        <h3>${game.title}</h3>
                        <p>${game.description}</p>
                    `;
                    gameList.appendChild(gameItem);
                });
            }
        })
        .catch(error => console.error('Error fetching games:', error));
}

// Smooth scrolling
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting me!');
        // Add form submission logic here
    });
}
