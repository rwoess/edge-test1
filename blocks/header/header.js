import { loadCSS, loadScript } from '../../scripts/aem.js';
import config from './apiConfig.js';

function createApiScript() {
  const el = document.createElement('script');
  el.id = 'lot-config';
  el.type = 'application/json';
  el.innerText = JSON.stringify(config);
  document.body.append(el);
}

createApiScript();
loadCSS('styles.bc5cd666eb10b3a1.css');
loadScript('runtime.77cb13a6fe93a92e.js', { type: 'module' });
loadScript('polyfills.c0019c5a515f9c73.js', { type: 'module' });
loadScript('main.5c938eaf21554da9.js', { type: 'module' });
