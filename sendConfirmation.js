// Inisyalize EmailJS
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // mete public key ou la
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("confirmationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const code = Math.floor(100000 + Math.random() * 900000); // 6 chif aleatwa

    // Detekte lang navigatè a (en, fr, ht...)
    const lang = navigator.language.startsWith("fr") || navigator.language.startsWith("ht") ? "ht" : "en";

    // Sove kòd la tanporèman pou verify.html ka jwenn li
    sessionStorage.setItem("verification_code", code);

    const templateParams = {
      user_name: document.getElementById("user_name").value,
      user_email: document.getElementById("user_email").value,
      confirmation_code: code,
      title: "Verification Code",
      lang: lang
    };

    emailjs.send("service_4e5oo6m", "template_7uty9kk", templateParams)
      .then(function (response) {
        alert("Verification code sent to your email.");
        console.log("SUCCESS!", response.status, response.text);
        window.location.href = "verify.html"; // Ale sou paj verify
      }, function (error) {
        alert("Failed to send email. Please try again.");
        console.error("FAILED...", error);
      });
  });
});