import app from "./index.js"
import Register from "./register.js"
// import khi đến đoạn go to Register

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy3dAUhhmpZqwdHWfi7o7c2DQdqI_t5ro",
    authDomain: "lesson5-529f4.firebaseapp.com",
    projectId: "lesson5-529f4",
    storageBucket: "lesson5-529f4.appspot.com",
    messagingSenderId: "739942235147",
    appId: "1:739942235147:web:86a67e399dd2eb59d99b0e"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

class Login {
    $txtEmail
    $txtPassword
    $formLogin
    $btnSubmit
    $txtGotoRegister
    $container
    $inputEmailContainer
    $inputPasswordContainer
    $buttonContainer


    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("container")

        this.$inputEmailContainer = document.createElement("div")
        this.$inputEmailContainer.classList.add("userbox")
        this.$txtEmail = document.createElement("input")
        this.$txtEmail.type = "email"
        this.$txtEmail.placeholder = "Enter your email ... "

        this.$inputPasswordContainer = document.createElement("div")
        this.$inputPasswordContainer.classList.add("userbox")
        this.$txtPassword = document.createElement("input")
        this.$txtPassword.type = "password"
        this.$txtPassword.placeholder = "Enter your password ..."

        this.$buttonContainer = document.createElement("div")
        this.$buttonContainer.classList.add("buttonMain")
        this.$formLogin = document.createElement("form")
        this.$formLogin.classList.add("form-class")
        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.innerHTML = "Login"
        this.$btnSubmit.classList.add("btn")

        this.$txtGotoRegister = document.createElement("a")
        this.$txtGotoRegister.innerHTML = "Register your new account"
        this.$txtGotoRegister.classList.add("account")

        this.$txtGotoRegister.addEventListener("click", this.gotoRegister)

    }

    initRender = (container) => {
        // const flexContainer = document.createElement("div")
        // const title = document.createElement("h2")
        // title.innerHTML ="Login"
        // flexContainer.classList.add("d-flex", "flex-column", "centering")

        // flexContainer.appendChild(title)
        // this.$inputEmailContainer.appendChild(this.$txtEmail)
        // flexContainer.appendChild(this.$inputEmailContainer)
        // this.$inputEmailContainer.appendChild(this.$txtPassword)
        // flexContainer.appendChild(this.$inputPasswordContainer)
        // this.$buttonContainer.appendChild(this.$btnSubmit)
        // flexContainer.appendChild(this.$buttonContainer)
        // flexContainer.appendChild(this.$txtGotoRegister)


        // this.$formLogin.appendChild(flexContainer)
        // this.$formLogin.addEventListener("submit",this.login)
        // this.$container.appendChild(this.$formLogin)
        // container.appendChild(this.$container)
        container.innerHTML =
            `<div class="container">
            <form class="form-class">
                <div class="d-flex flex-column centering">
                    <h2>LOGIN</h2>
                    <div class="userbox">
                        <input type="email" placeholder="Enter your mail..." id="emailInput">
                        <input type="password" placeholder="Enter your password..." id="passwordInput">
                    </div>

                    <div class="buttonMain">
                        <button class="btn" id="dangNhap">LOGIN</button>
                    </div>

                    <a class="account" id="dangKi">Register your new account</a>
                </div>
            </form>


        </div>`

        let register = document.getElementById("dangKi")
        register.addEventListener("click", this.gotoRegister)

        let login = document.getElementById("dangNhap")
        login.addEventListener("click", this.login)



    }

    //2
    gotoRegister = () => {
        const register = new Register()
        app.changeActiveScreen(register)
    }

    login = (e) => {
        e.preventDefault()
        const email = document.getElementById("emailInput").value
        const password = document.getElementById("passwordInput").value

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("Đăng nhập thành công")
                window.location.href = "index.html"
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });

    }
}

export default Login