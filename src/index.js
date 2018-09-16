import KatePlatform from 'katejs';
import AppServer from './AppServer';

const platform = new KatePlatform({ AppServer });
platform.compileClient();
// platform.syncDatabase(); // run once when structure changes
platform.startServer();
