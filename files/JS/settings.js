const Modal = document.querySelector("dialog");
const Pass = document.querySelector(".Password")
const Email = document.querySelector(".Email");
const Name = document.querySelector(".Name");
const Username = document.querySelector(".Username")
const Path = document.querySelector(".Path")
const BodyModal = document.querySelector(".form-container");
const button = document.querySelectorAll(".change")

button.forEach(value=>{
    value.addEventListener('click',()=>{
        const Value = value.dataset.id ;
        Checker(Value) ;
    })

})

function Checker(Value) {
    if (Value === 'pass') {
        if (Pass.value === "") {
            alert("Please provide a pass!")
            return;
        }
        else {
            BodyModal.innerHTML= `
            <form action="/DashBoard/Change/pass" method="post">
            <input value="${Pass.value}" autocomplete="username" type="text" readonly name="SiteName"  class="formToken">  
            <input type="Email" name="email" autocomplete="email" placeholder="Email" required>
            <input required type="password" name="pass" autocomplete="current-password" placeholder="Password">
            <button>Confirm</button>
            </form>

            `
            Modal.showModal();
        }
    }
    else if (Value === 'email') {
        if (Email.value === "") {
            alert("Please provide a Email!")
            return;
        }
        else {
            BodyModal.innerHTML= `
            <form action="/DashBoard/Change/email" method="post">
            <input value="${Email.value}" autocomplete="username" type="text" readonly name="SiteName"  class="formToken">  
            <input type="Email" name="email" autocomplete="email" placeholder="Email" required>
            <input required type="password" name="pass" autocomplete="current-password" placeholder="Password">
            <button>Confirm</button>
            </form>

            `
            Modal.showModal();
        }
    }
    else if (Value === 'name') {
        if (Name.value === "") {
            alert("Please provide a Name")
            return;
        }
        else {
            BodyModal.innerHTML= `
            <form action="/DashBoard/Change/name" method="post">
            <input value="${Name.value}" autocomplete="username" type="text" readonly name="SiteName"  class="formToken">  
            <input type="Email" name="email" autocomplete="email" placeholder="Email" required>
            <input required type="password" name="pass" autocomplete="current-password" placeholder="Password">
            <button>Confirm</button>
            </form>

            `
            Modal.showModal();
        }
    }
    else if (Value === 'username') {
        if (Username.value === "") {
            alert("Please provide a Username!")
            return;
        }
        else {
            BodyModal.innerHTML= `
            <form action="/DashBoard/Change/username" method="post">
            <input value="${Username.value}" autocomplete="username" type="text" readonly name="SiteName"  class="formToken">  
            <input type="Email" name="email" autocomplete="email" placeholder="Email" required>
            <input required type="password" name="pass" autocomplete="current-password" placeholder="Password">
            <button>Confirm</button>
            </form>

            `
            Modal.showModal();
        }
    }
    else if (Value === 'path') {
        const patH = Path.value;
        const array = patH.split("/");
     

       
        if (Path.value === "") {
            alert("Please provide a Path!")
            return;
        }
    
        else {
            BodyModal.innerHTML= `
            <form action="/DashBoard/Change/path" method="post">
            <input value="${Path.value}" autocomplete="username" type="text" readonly name="SiteName"  class="formToken">  
            <input type="Email" name="email" autocomplete="email" placeholder="Email" required>
            <input required type="password" name="pass" autocomplete="current-password" placeholder="Password">
            <button>Confirm</button>
            </form>

            `
            Modal.showModal();
        }
  
}
}