todos
  - worker d restructuring
  - pouch use cache version for local sync docs
  - sw cache for between tab sync
  - couch sync invalidation race condition
  - falcor call invalidation bug
  - migrate observables and looped async to async iterables, latest with svelte 4 support of iterables
  - ipfs folder listing features
  - esbuild > ipfs > workerd
  - dont log responses
  - return js object from handlers feature
  - check bin download feature for workerd ala esbuild
  - check platform for esbuild paths permissions


import sdk from '@stackblitz/sdk';
// Import stylesheets
import './style.css';

sdk.embedProjectId('embed', 'css-custom-prop-color-values', {
  openFile: ['index.ts,index.html:L2-L6', 'style.css:L8-L20'],
  hideExplorer: true,
  showSidebar: false,
  theme: 'dark', // 'light', //
});
