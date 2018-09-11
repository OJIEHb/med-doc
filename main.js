const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({ show: false });

  win.setMenu(null);
  win.maximize();

  win.show();
  
  win.loadURL(path.join(__dirname, '/dist/index.html'))

  win.webContents.openDevTools()

  win.on('closed', function () {
    win = null;
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  if (win === null) {
    createWindow();
  }
})