const { contextBridge, ipcRenderer } = require('electron');

const ping = {
  myPing() {
    ipcRenderer.send('ipc-example', 'ping');
  },
  on(channel, func) {
    const validChannels = ['ipc-example'];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
  once(channel, func) {
    const validChannels = ['ipc-example'];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.once(channel, (event, ...args) => func(...args));
    }
  },
};

const store = {
  get: (val) => {
    return ipcRenderer.sendSync('electron-store-get', val);
  },
  set: (property, val) => ipcRenderer.send('electron-store-set', property, val),
};

const windowAction = {
  close: () => ipcRenderer.send('action-close'),
  maximize: () => ipcRenderer.send('action-maximize'),
  minimize: () => ipcRenderer.send('action-minimize'),
};

const game_scanner = {
  games: async (channel) => {
    const validChannels = ['games-steam', 'games-epic'];
    if (validChannels.includes(channel)) {
      console.log('invoke');
      return ipcRenderer.invoke(channel);
    }
  },
};

// eslint-disable-next-line import/prefer-default-export
const API = {
  ping,
  store,
  windowAction,
  game_scanner,
};

contextBridge.exposeInMainWorld('api', API);

module.exports = {
  API,
};
