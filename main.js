const { app, BrowserWindow, Menu, Tray } = require('electron');

app.setAppUserModelId('com.althdevops.bdn-anotar');
app.setLoginItemSettings({
    openAtLogin: true
});

function createWindow() {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadFile(__dirname + '/src/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    mainWindow.setMenu(null);

    const tray = new Tray(__dirname + 'img/althdevops.jpeg');

}

app.on('ready', createWindow);