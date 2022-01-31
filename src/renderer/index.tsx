import * as ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import TitleBar from './components/TitleBar';

// set theme from config
let theme = window.api.store.get('theme');
document.documentElement.className = theme;

ReactDOM.render(
  <MemoryRouter>
    <div className="overflow-hidden">
      <TitleBar />
      <App />
    </div>
  </MemoryRouter>,
  document.getElementById('root')
);
