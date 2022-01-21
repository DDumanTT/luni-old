import * as ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import TitleBar from './components/TitleBar';

ReactDOM.render(
  <MemoryRouter>
    <TitleBar />
    <App />
  </MemoryRouter>,
  document.getElementById('root')
);
