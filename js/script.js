

function updateClock() {
    const clock = document.getElementById("clock");

    if (clock) {
        const now = new Date();

        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        clock.textContent = date + " | " + time;
    }
}

setInterval(updateClock, 1000);

updateClock();



function toggleInfo() {
    const extraInfo = document.getElementById("extraInfo");

    if (extraInfo) {

        if (extraInfo.classList.contains("hidden")) {
            extraInfo.classList.remove("hidden");
        } else {
            extraInfo.classList.add("hidden");
        }

    }
}



const images = [
    "images/hospital.jpg",
    "images/doctor.jpg",
    "images/nurses.jpg",
    "images/reception.jpg"
];

let currentSlide = 0;



function nextSlide() {

    const slideImage = document.getElementById("slideImage");

    if (slideImage) {

        currentSlide++;

        if (currentSlide >= images.length) {
            currentSlide = 0;
        }

        slideImage.src = images[currentSlide];
    }
}



function previousSlide() {

    const slideImage = document.getElementById("slideImage");

    if (slideImage) {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = images.length - 1;
        }

        slideImage.src = images[currentSlide];
    }
}



const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const department = document.getElementById("department").value;
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        
        if (name === "") {
            formMessage.textContent = "Please enter your full name.";
            return;
        }


        
        if (email === "") {
            formMessage.textContent = "Please enter your email address.";
            return;
        }


        
        if (phone === "") {
            formMessage.textContent = "Please enter your phone number.";
            return;
        }


        
        if (department === "") {
            formMessage.textContent = "Please select a department.";
            return;
        }


        
        if (message === "") {
            formMessage.textContent = "Please enter your message.";
            return;
        }

        
        formMessage.textContent =
            "Thank you, " + name +
            ". Your message has been received.";

        contactForm.reset();

    });

}
