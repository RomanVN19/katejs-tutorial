import { use } from 'katejs/dist/client';

import { structures, title, packageName } from './structure';

const AppClient = parent => class Client extends use(parent) {
  static title = title;
  constructor(params) {
    super(params);
    this.init({ structures });
  }
};
AppClient.package = packageName;
export default AppClient;
