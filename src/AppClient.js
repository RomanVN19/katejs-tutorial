import { use } from 'katejs/lib/client';

import { structures, title, packageName } from './structure';
import env from './front.env.json';

import IncomeFormMixin from './forms/IncomeItemMixin';
import IncomeReport from './forms/IncomeReport';

const AppClient = parent => class Client extends use(parent) {
  static title = title;

  constructor(params) {
    super(params);
    this.baseUrl = env.apiUrl || '/api';

    this.init({ structures, addToMenu: true });
    this.forms = {
      ...this.forms,
      IncomeItem: IncomeFormMixin(this.forms.IncomeItem),
      IncomeReport,
    };
    this.menu.push({
      form: 'IncomeReport',
      title: 'Income report',
    });
  }
};
AppClient.package = packageName;
export default AppClient;
