import { makeEntitiesFromStructures, use } from 'katejs';
import { AppDoc } from 'katejs-modules';
import { structures, title, packageName } from './structure';

import ExpenseMixin from './entities/ExpenseMixin';
import IncomeMixin from './entities/IncomeMixin';

const AppServer = parent => class Server extends use(parent, AppDoc) {
  static title = title;

  constructor(params) {
    super(params);
    makeEntitiesFromStructures(this.entities, structures);

    this.entities = {
      ...this.entities,
      Expense: ExpenseMixin(this.entities.Expense),
      Income: IncomeMixin(this.entities.Income),
    };
    this.entities.MoneyRecord.record = true;
  }
};
AppServer.package = packageName;
export default AppServer;
