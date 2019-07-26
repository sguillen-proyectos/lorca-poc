const {app, BrowserWindow} = require('electron');

let window = null;

function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  window.loadFile('index.html');
  // window.webContents.openDevTools();

  window.on('closed', () => {
    window = null;
  });
}

app.on('ready', createWindow);

app.on('activate', () => {
  if (window == null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  app.quit();
});
