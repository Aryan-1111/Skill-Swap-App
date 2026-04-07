function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const storedEmail = "test@gmail.com";
  const storedPassword = "1234567";

  // Clear previous message
  message.innerText = "";

  // Validation
  if (email === "" || password === "") {
    message.innerText = "Please fill all fields ⚠️";
    message.style.color = "orange";
    return;
  }

  // Login check
  if (email === storedEmail && password === storedPassword) {
    message.innerText = "Login Successful ✅";
    message.style.color = "green";

    // Save login state
    localStorage.setItem("user", email);

    // Redirect after 1 sec
    setTimeout(() => {
      window.location.href = "index3.html";
    }, 1000);

  } else {
    message.innerText = "Invalid Email or Password ❌";
    message.style.color = "red";
  }
}

gsap.from(".log2", {
  opacity: 0,
  y: -80,
  duration: 2
});

gasp.from("#box.input",{
    opacity:0,
    x: -100,
    duration:3,
    delay:0.6
});


const btn = document.querySelector("#btn1");

btn1.addEventListener("mouseenter", () => {
  gsap.to("#btn1", {
    scale: 1.2,
    duration: 0.3
  });
});

btn1.addEventListener("mouseleave", () => {
  gsap.to("#btn1", {
    scale: 1,
    duration: 0.3
  });
});

btn1.addEventListener("click", () => {
  gsap.to("#btn1", {
    rotation: 360,
    duration: 0.6
  });
});

gsap.to("#btn1", {
  boxShadow: "0px 0px 20px #070505",
  repeat: -1,
  yoyo: true,
  duration: 1
});

gsap.to("p",{
  x:-500,
  opacity:0,
  duration:2,
  stagger:0.3,
});

document.querySelector