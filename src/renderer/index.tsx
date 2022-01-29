import * as ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import TitleBar from './components/TitleBar';

ReactDOM.render(
  <MemoryRouter>
    <div className="overflow-hidden">
      <TitleBar />
      <App />
    </div>
  </MemoryRouter>,
  document.getElementById('root')
);
