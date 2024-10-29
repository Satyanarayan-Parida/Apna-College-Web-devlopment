function showProject(projectNumber) {
    const contentViewer = document.getElementById('contentViewer');

    // Define file paths for each project's HTML and CSS files
    let filePath = '';
    let cssPath = '';

    // Group 1 Projects
    if (projectNumber === 1) {
        filePath = './CSS_Getting_Started/HTML/index.html';
        cssPath = './CSS_Getting_Started/CSS/style.css';
    } else if (projectNumber === 2) {
        filePath = './CSS_Getting_Started/HTML/practice_01.html';
        cssPath = './CSS_Getting_Started/CSS/practice_01.css';
    } else if (projectNumber === 3) {
        filePath = './CSS_Part_2/HTML/PracticeQs.html';
        cssPath = './CSS_Part_2/CSS/PracticeQs.css';
    } else if (projectNumber === 4) {
        filePath = './CSS_Part_3_BoxModel/html/inline_block.html';
        cssPath = './CSS_Part_3_BoxModel/Css/inline_block.css';
    } else if (projectNumber === 5) {
        filePath = './MY_PROJECT/traffic_light.html';
        cssPath = './MY_PROJECT/traffic_light.css';
    }  else if (projectNumber === 6) {
        filePath = './MY_PROJECT/Project_1.html';
        cssPath = './MY_PROJECT/Project_1.css';
    }
    // Load HTML content
    if (filePath) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok.");
                return response.text();
            })
            .then(html => {
                contentViewer.innerHTML = html;

                // Only load CSS if a path is provided
                if (cssPath) {
                    loadCSS(cssPath);
                } else {
                    // Reset any previously loaded CSS styles
                    resetCSS();
                }
            })
            .catch(error => {
                contentViewer.innerHTML = `<h2>Error</h2><p>Could not load the content for Project ${projectNumber}.</p>`;
                console.error("There was a problem with the fetch operation:", error);
            });
    } else {
        // Default inline content if no file path is defined
        contentViewer.innerHTML = `
            <h2>Project ${projectNumber}</h2>
            <p>This is the content for Project ${projectNumber}. You can add any information here.</p>
        `;
    }
}

function loadCSS(cssPath) {
    // Clear any existing dynamically added CSS
    resetCSS();

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    link.id = 'dynamic-css'; // Add an ID for easier reference
    document.head.appendChild(link);
}

function resetCSS() {
    // Remove previously loaded CSS
    const existingLink = document.getElementById('dynamic-css');
    if (existingLink) {
        existingLink.remove();
    }
}

function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

// Close dropdown if clicking outside
window.addEventListener('click', function (e) {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.getElementById('dropdownContent');
    if (!dropdown.contains(e.target)) {
        dropdownContent.style.display = 'none';
    }
});


