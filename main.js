var { app, BrowserWindow, Tray, Menu } = require("electron")
var path = require("path")
var url = require("url")

function createWindow() {
	
	mainWindow = new BrowserWindow({
	  width: 800,
	  height: 600,
	  webPreferences: {
	  	nodeIntegration: true,
		contextIsolation: false
	  }
	})

	mainWindow.loadURL(url.format({
		pathname: path.join( __dirname, "index.html"),
	}))

}

app.on("ready", createWindow)