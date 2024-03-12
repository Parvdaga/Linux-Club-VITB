function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "parvdaga29@gmail.com",
        Password: "Patrick@51400",
        To: 'parvdaga05@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}