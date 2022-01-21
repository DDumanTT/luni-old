import { ipcMain } from 'electron';
import Store from 'electron-store';

const schema = {
  // firstStart: {
  //   type: 'boolean',
  //   default: true,
  // },
  theme: {
    type: 'string',
    default: 'dark',
  },
} as const;

const store = new Store({ schema });

// events
ipcMain.on('electron-store-get', async (event, val) => {
  event.returnValue = store.get(val);
});
ipcMain.on('electron-store-set', async (_, key, val) => {
  store.set(key, val);
});
