import { makeEntitiesFromStructures, use } from 'katejs';
import { structures, title, packageName } from './structure';

import ExpenseMixin from './entities/ExpenseMixin';

const AppServer = parent => class Server extends use(parent) {
  static title = title;

  constructor(params) {
    super(params);
    makeEntitiesFromStructures(this.entities, structures);

    this.entities = {
      ...this.entities,
      Expense: ExpenseMixin(this.entities.Expense),
    };
  }
};
AppServer.package = packageName;
export default AppServer;
