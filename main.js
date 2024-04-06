import { app, BrowserWindow } from "electron";

const createWindow = (windowWidth, windowHeight, filePath) => {
  const window = new BrowserWindow({
    minWidth: windowWidth,
    minHeight: windowHeight,
    resizable: true,
  });

  window.loadFile(filePath);
};

app.whenReady().then(() => {
  createWindow(1300, 800, "index.html");

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  // quit if OS is not Mac-Os
  if (process.platform !== "darwin") {
    app.quit();
  }
});
