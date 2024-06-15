
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
      nodeIntegration: true  // Habilitar integración con Node.js en el contexto de la ventana
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

// para cerrar ventana
app.whenReady().then(createWindow);

// Maneja el cierre
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Manejar la activacion
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// cuando 'clienteRegistrado' 
ipcMain.on('clienteRegistrado', (event, data) => {
    console.log('Respuesta del renderer:', data);
    if (data.success) {
      // Mostrar un mensaje de exito
      console.log('Cliente registrado exitosamente'); 
    } else if (data.error) {
      // Mostrar un mensaje de error
      console.error('Error al registrar el cliente:', data.error);
    }
  });