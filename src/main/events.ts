import { ipcMain, BrowserWindow } from 'electron';

// test event
ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  // eslint-disable-next-line no-console
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

// window actions
ipcMain.on('action-close', async () => {
  BrowserWindow.getFocusedWindow()?.close();
});

ipcMain.on('action-maximize', async () => {
  const win = BrowserWindow.getFocusedWindow();
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  win?.isMaximized() ? win?.unmaximize() : win?.maximize();
});

ipcMain.on('action-minimize', async () => {
  const win = BrowserWindow.getFocusedWindow();
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  win?.isMinimized() ? win?.restore() : win?.minimize();
});
