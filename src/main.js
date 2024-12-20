import './style.css';
import { Header } from '/components/Header/Header';
import { Footer } from '/components/Footer/Footer';
import { Home } from '/pages/Home/Home';
import { About } from '/pages/About/About';
import { Skills } from '/pages/Skills/Skills';
import { Projects } from '/pages/Projects/Projects';
import { Contact } from '/pages/Contact/Contact';

const app = document.querySelector('#app');

app.innerHTML = `
  ${Header()}
  <main></main>
  ${Footer()}
`;

About();
Skills();
Projects();
Contact();
