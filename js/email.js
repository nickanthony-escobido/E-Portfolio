function sendEmail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    message: document.getElementById("message").value,
  };

  const serviceId = "service_56jsimg";
  const templateId = "template_p9mxhen";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("number").value = ""),
        (document.getElementById("message").value = ""),
        console.log(res);
      alert("your message has been sent");
    })
    .catch((err) => console.log(err));
}
