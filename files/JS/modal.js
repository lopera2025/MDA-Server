const ConfirmMsge = document.querySelector("dialog");
const Auth = document.querySelector(".ngrokInput")
const ModalBody = document.querySelector(".form-container");
const Serveo = document.querySelector(".Serveo-Button");
const SSHI = document.querySelector(".ssh-input")

const link = document.querySelector(".link").innerText;
const Array = link.split(":");


Serveo.addEventListener('click',()=>{
    if (SSHI.value === "") {
        alert("Please your Site Name")
    }
    else {
        const sitename = SSHI.value;
        ModalBody.innerHTML = `
        <form action="/DashBoard/Setup/Serveo" method="post">
                        <input autocomplete="username" type="text" readonly name="SiteName" value="${sitename}" class="formToken">  
                        <input type="Email" name="email" autocomplete="email" placeholder="Email" required>
                        <input required type="password" name="pass" autocomplete="current-password" placeholder="Password">
                        <button>Confirm</button>
        </form>
        `
       ConfirmMsge.showModal();
    }

})




if (Array[0] === 'https') {
    document.querySelector(".launch-close-div").innerHTML = `
    <button class="ngrok-button-stop">Stop Ngrok</button>
    `
    const confirmMsge = document.querySelector("dialog");
    const ButtonStop = document.querySelector(".ngrok-button-stop");
    ButtonStop.addEventListener('click',()=>{
        
        ModalBody.innerHTML = `
    <form action="/DashBoard/Stop/Ngrok" method="post">
                    <input type="text" readonly name="auth" value="Are you sure ?" class="formToken">  
                    <input type="Email" name="email" autocomplete="email" placeholder="Email" required>
                    <input required type="password" name="pass" autocomplete="current-password" placeholder="Password">
                    <button>Confirm</button>
    </form>
    `
    confirmMsge.showModal();
    })

}
else {
    document.querySelector(".launch-close-div").innerHTML = `
    <button class="ngrok-button">launch Ngrok</button>
    `
    const Button = document.querySelector(".ngrok-button");
Button.addEventListener('click',()=>{
    const Token = Auth.value;
    if (Token === "" || Token === null || Token === undefined) {
        alert("Please Provide a Token Bruh!")
    }
    else{

    
    ModalBody.innerHTML = `
    <form action="/DashBoard/Setup/Ngrok" method="post">
                    <input type="text" readonly name="auth" value="${Token}" class="formToken">  
                    <input required type="Email" name="email" autocomplete="email" placeholder="Email">
                    <input required type="password" name="pass" autocomplete="current-password" placeholder="Password">
                    <button>Confirm</button>
    </form>
    `
    ConfirmMsge.showModal();
}
})
}


