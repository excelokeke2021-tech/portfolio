emailjs.init("TPANEzOpBb1SJE1ha");

const form = document.getElementById("contact-form");
const statusText = document.getElementById("status");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    statusText.textContent = "Sending...";

    emailjs.sendForm(
        "service_7zmjd61",
        "template_5ce6wzv",
        this
    )
        .then(() => {
            statusText.textContent = "Message sent successfully ✅";
            form.reset();
        })
        .catch((error) => {
            console.log(error);
            statusText.textContent = "Failed to send ❌";
        });
});