const {app, BrowserWindow} = require("electron");
const url = require("url");
const path = require("path");

let win;

function createWindow() {

    const screen = require("electron").screen;
    const display = screen.getPrimaryDisplay();

    const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(__dirname + '/samplecalc.ico'); 

    image.setTemplateImage(true);

    win = new BrowserWindow({
        width: Math.floor(display.workArea["width"] * 0.85),
        height: Math.floor(display.workArea["height"] * 0.85),
        icon: image
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, "src/index.html"),
        protocol: 'file:',
        slashes: true,
    }));

    win.setMenu(null);
    win.setResizable(false);
    // win.openDevTools();

    console.log(__dirname + "/samplecalc.ico");
}

app.on("ready", createWindow);