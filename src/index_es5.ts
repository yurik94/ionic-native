import { Plugins } from './index';
import { initAngular1 } from './ng1';

declare var Symbol;

// Window export to use outside of a module loading system
window['IonicNative'] = {};
for (let plugin of Plugins) {
  window['IonicNative'][(plugin as any).pluginName] = plugin;
}

console.log(window['IonicNative']);
initAngular1(window['IonicNative']);
