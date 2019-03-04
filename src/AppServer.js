import { makeEntitiesFromStructures, use } from 'katejs';
import { structures, title, packageName } from './structure';

const AppServer = parent => class Server extends use(parent) {
  static title = title;

  constructor(params) {
    super(params);
    makeEntitiesFromStructures(this.entities, structures);

    // this.entites == {
    //   Task, // class
    //   ...
    // }
    // Can be changeg by name  this.entities[_entity_name_]
  }
};
AppServer.package = packageName;
export default AppServer;
