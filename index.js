const electron = require('electron');
const {app, BrowserWindow} = electron;
const testFolder = 'C:/';
const fs = require('fs');

app.on('ready', ()=> {
    let win = new BrowserWindow({width:800, height:600, frame: false});
    win.loadURL(`file://${__dirname}/site/index.html`)
});

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
});