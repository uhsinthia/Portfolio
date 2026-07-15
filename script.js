const studentName = "Umme Habiba";

function displayGreeting() {
    const greetingContainer = document.getElementById("dynamic-greeting");
    greetingContainer.textContent = `Hello, I am ${studentName}. Welcome to my portfolio.`;
}
function changeTheme() {
    const pageBody = document.body;
    pageBody.classList.toggle("light-theme");
    
    const logoTitle = document.getElementById("main-title");
    
    if (pageBody.classList.contains("light-theme")) {
        logoTitle.style.color = "#6b21a8";
    } else {
        logoTitle.style.color = "#a855f7";
    }
}
function toggleAboutSection() {
    const aboutSection = document.getElementById("about");
    const operationalButton = document.getElementById("toggle-about-btn");

    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block";
        operationalButton.textContent = "Hide About Me";
    } else {
        aboutSection.style.display = "none";
        operationalButton.textContent = "Show About Me";
    }
}
window.addEventListener("DOMContentLoaded", displayGreeting);

document.getElementById("welcome-btn").addEventListener("click", function() {
    document.getElementById("modal-icon").textContent = "👋";
    document.getElementById("modal-title-text").textContent = "Welcome to My Portfolio Website!";
    document.getElementById("modal-desc-text").textContent = "Thank you for visiting my webpage. Have a great time exploring!";
    document.getElementById("welcome-box-overlay").style.display = "flex";
});
document.getElementById("contact-btn").addEventListener("click", function() {
    document.getElementById("modal-icon").textContent = "✉️";
    document.getElementById("modal-title-text").textContent = "Contact Information";
    document.getElementById("modal-desc-text").textContent = "Thank you for visiting my portfolio. You can reach out to me via email at ummehabiba.mam@gmail.com";
    document.getElementById("welcome-box-overlay").style.display = "flex";
});
document.getElementById("close-msg-btn").addEventListener("click", function() {
    document.getElementById("welcome-box-overlay").style.display = "none";
});
document.getElementById("ok-msg-btn").addEventListener("click", function() {
    document.getElementById("welcome-box-overlay").style.display = "none";
});
document.getElementById("theme-btn").addEventListener("click", changeTheme);
document.getElementById("toggle-about-btn").addEventListener("click", toggleAboutSection);
