import app from "./index.js"
import Register from "./register.js"
// import khi đến đoạn go to Register

class Login{
    $txtEmail
    $txtPassword
    $formLogin
    $btnSubmit
    $txtGotoRegister
    $container
    $inputEmailContainer
    $inputPasswordContainer
    $buttonContainer
    

    constructor () {
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

    initRender = (container) =>{
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
                        <input type="email" placeholder="Enter your mail...">
                        <input type="password" placeholder="Enter your password...">
                    </div>

                    <div class="buttonMain">
                        <button class="btn">LOGIN</button>
                    </div>

                    <a class="account" id="dangKi">Register your new account</a>
                </div>
            </form>


        </div>`

        let register = document.getElementById("dangKi")
        register.addEventListener("click", this.gotoRegister)

        
        
    }

    //2
    gotoRegister = () => {
        const register = new Register()
        app.changeActiveScreen(register)
    }

    login =(e) => {
        e.preventDefault()
        const email = this.$txtEmail.value
        const password = this.$txtPassword.value
    }
}

export default Login