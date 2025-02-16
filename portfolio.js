document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".progress");
    
    skills.forEach(skill => {
        let width = skill.style.width;
        skill.style.width = "0";
        setTimeout(() => {
            skill.style.width = width;
        }, 500);
    });
});

document.querySelectorAll(".tech-card").forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.background = "rgba(255, 255, 255, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "rgba(255, 255, 255, 0.1)";
    });
});



const quotes = [
    "this page is created by sachin rajput.",
    "i naver seen befor any profile like this.",
    "content in this page is very good.",
    "this page is very good for begginers.",
    "this website is very good for learning.",
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let isValid = true;

    let nameInput = document.getElementById("name");
    let nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError.innerText = "Name is required!";
        isValid = false;
    } else {
        nameError.innerText = "";
    }

    
    let emailInput = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        emailError.innerText = "Enter a valid email!";
        isValid = false;
    } else {
        emailError.innerText = "";
    }

  
    if (isValid) {
        alert("Form submitted successfully!");
        nameInput.value = "";
        emailInput.value = "";
    }
});