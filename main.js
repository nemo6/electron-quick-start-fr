const { app, BrowserWindow, ipcMain } = require('electron')

let mainWindow

app.on('ready', function(){
 
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
		nodeIntegration: true
		}
	})

	mainWindow.loadFile('index.html')

	mainWindow.webContents.openDevTools()

	mainWindow.on('closed', function(){
		app.quit()
	})

})

/*ipcMain.on('item',function(e,filename){
	
	// mainWindow.webContents.send('re-item',filename+"-test!")

	fs.writeFileSync(filename + ".txt", "test!", 'utf8');
	
})*/
