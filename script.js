const box = document.querySelector(".box");
const box1heading = document.querySelector(".box1-heading");
const box2heading = document.querySelector(".box2-heading");
const box1paragraph = document.querySelector(".box1-paragraph");
const box2paragraph = document.querySelector(".box2-paragraph");
const box2paragraph2 = document.querySelector(".box2-paragraph2");
const signinbutton = document.querySelector(".signin-button")
const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const form = document.querySelector("form");
let num = 0;
signinbutton.addEventListener("click", function (e) {
    if (num == 0) {
        box1.style.left = "100%";
        box2.style.right = "100%";
        box1heading.textContent = "Hello, friend!";
        box1paragraph.textContent = "Enter your personal details and start journey with us";
        e.target.textContent = "SIGN UP";
        box2heading.textContent = "Sign in";
        box2paragraph.textContent = "or use your Account";
        form.innerHTML = '<input type="email" placeholder="Enter the Email"><input type="password" placeholder="Enter the Password"><p class="box2-paragraph2">Forget your Password ?</p><button class="signup-button">SIGN UP</button>'
        num = 1;
    }
    else if (num == 1) {
        box1.style.left = "0";
        box2.style.right = "0";
        box1heading.textContent = "Welcome Back!";
        box1paragraph.textContent = "To keep Connected with us please login with your personal info";
        e.target.textContent = "SIGN IN";
        box2heading.textContent = "Create Account";
        box2paragraph.textContent = "or use your email for registation";
        form.innerHTML = '<input type="text" placeholder="Enter the Name"><input type="email" placeholder="Enter the Email"><input type="password" placeholder="Enter the Password"><button class="signup-button">SIGN UP</button>'


        num = 0;
    }
})