import { use } from 'katejs/lib/client';

import { structures, title, packageName } from './structure';

const AppClient = parent => class Client extends use(parent) {
  static title = title;
  constructor(params) {
    super(params);
    this.init({ structures });
    // this.allForms == {
    //   TaskList,
    //   TaskItem,
    //   ..
    // }
    // теперь можно модифицировать классы форм
    // через this.allForms[_form_name_]
  }
};
AppClient.package = packageName;
export default AppClient;
