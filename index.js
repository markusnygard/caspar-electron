const { app, BrowserWindow } = require('electron')
const { spawn,exec } = require('child_process')
function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 450,
    skipTaskbar: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

//TODO: Make this path configurable
//TODO: check for casparcg instrances
const scanner = exec('d:/caspar-server/220/casparcg_auto_restart.bat', { shell:'cmd.exe', cwd:'d:/caspar-server/220/' }, (err, stdout, stderr) => {
  console.log('s: '+err)
  console.log('s: '+stderr)
  console.log('s: '+stdout)
});

// const caspar = exec('d:/caspar-server/220/casparcg.exe', { shell:'cmd.exe', cwd:'d:/caspar-server/220/' }, (err, stdout, stderr) => {
//   console.log('c: '+err)
//   console.log('c: '+stderr)
//   console.log('c: '+stdout)
// });

scanner.stdout.on('data', (data) => {
  console.log(data)
})

app.on('ready', () => {
  // const scanner = exec('d:/caspar-server/220/scanner.exe', { shell:'cmd.exe', cwd:'d:/caspar-server/220/' }, (err, stdout, stderr) => {
  //   console.log('s: '+err)
  //   console.log('s: '+stderr)
  //   console.log('s: '+stdout)
  // });
  
  // const caspar = exec('d:/caspar-server/220/casparcg.exe', { shell:'cmd.exe', cwd:'d:/caspar-server/220/' }, (err, stdout, stderr) => {
  //   console.log('c: '+err)
  //   console.log('c: '+stderr)
  //   console.log('c: '+stdout)
  // });
  createWindow()
  
})


app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    // const killScanner = exec("taskkill /pid" + scanner.pid + "/f /t");
    // const killCaspar = exec("taskkill /pid" + caspar.pid + "/f /t", () => {
      
    // })
    app.quit()
  }
})

