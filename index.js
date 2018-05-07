const electron = require('electron');
const {app, BrowserWindow} = electron;
var electronVibrancy = require('electron-vibrancy');
const testFolder = 'C:/';
const fs = require('fs');

app.on('ready', ()=> {
    let win = new BrowserWindow({
        width:800,
        height:600,
        frame: false,
        transparent: true
    });
    electronVibrancy.SetVibrancy(win, 0);
    win.loadURL(`file://${__dirname}/site/index.html`)
});

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
});