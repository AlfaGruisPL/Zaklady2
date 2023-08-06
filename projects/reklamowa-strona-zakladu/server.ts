import 'zone.js/node';

import {APP_BASE_HREF} from '@angular/common';
import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';
import {existsSync} from 'fs';
import {join} from 'path';

import {AppServerModule} from './src/main.server';
import {HOST_ID} from "./src/app/host";

(global as any).window = global; // Przypisz obiekt "window" do zakresu globalnego
(global as any).document = global.document; // Przypisz obiekt "document" do zakresu globalnego
(global as any).Event = global.Event; // Przypisz obiekt "Event" do zakresu globalnego
(global as any).KeyboardEvent = global.KeyboardEvent; // Przypisz obiekt "KeyboardEvent" do zakresu globalnego

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  // const distFolder = join(process.cwd(), 'dist/reklamowaStronaZakladu/browser');
  const distFolder = join(process.cwd(), '../browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);


  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));


  // All regular routes use the Universal engine
  server.get('*', (req, res) => {

    const startTime = performance.now();
    res.render(indexHtml, {
      req, providers: [

        {provide: APP_BASE_HREF, useValue: req.baseUrl}, {provide: HOST_ID, useValue: req.header('x-forwarded-host')}]
    });

    const endTime = performance.now();

    // Czas renderowania strony przez serwer w milisekundach
    const renderTime = endTime - startTime;
    console.log(`Czas renderowania strony przez serwer: ${renderTime} ms`);

  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
