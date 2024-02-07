import { Application } from './Application.js';

const port = 3005;
const app = new Application();

// Start the server
app.start(port);

// Properly dispose of the server when the process is terminated
process.on('SIGINT', () => {
  app.dispose();
});
