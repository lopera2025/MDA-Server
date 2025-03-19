const {app,BrowserWindow} = require("electron")
const port = require("./port");
function Runner () {
    const Window = new BrowserWindow(
        {
            height:600,
            width:800,
            minWidth:300,
            title:"MDA Server",
        }
    )
    Window.loadURL(`http://localhost:${port}/Login`);
}

app.whenReady().then(()=>{ 
    Runner();
   

})

app.on('activate',()=>{
    
    if(BrowserWindow.getAllWindows().length!== 0){
        Runner();
    }
})