document.addEventListener('DOMContentLoaded', function() {
    fetchBlogPosts();
});

function fetchBlogPosts() {
    fetch('blogposts.json')
        .then(response => response.json())
        .then(data => {
            const blogList = document.querySelector('.project-list');
            if (blogList) {
                blogList.innerHTML = ''; // Clear existing content
                data.forEach(post => {
                    const postItem = document.createElement('a');
                    postItem.href = post.link;
                    postItem.className = 'project-item';
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
