const electron = require('electron');

const app = electron.app;
const countdown = require('./countdown')
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

app.on('ready', _ =>{
    console.log('readyyyyyyyy');
    mainWindow = new BrowserWindow({
        height:400,
        width: 400
    });
     mainWindow.loadURL(`file://${__dirname}/countdown.html`);
     mainWindow.on('close', ( ) =>{
         console.log('closing');
         mainWindow = null;
    })

})

ipc.on('countdown-start',_ =>{
  countdown( count=>{
    mainWindow.webContents.send('countdown', count)
  })
})