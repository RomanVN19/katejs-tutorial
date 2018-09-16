import Fields from 'katejs/dist/fields';

const Task = {
  name: 'task',
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
  tables: [
    {
      name: 'users',
      fields: [
        {
          name: 'title',
          type: Fields.STRING,
        },
      ],
    },
  ],
};

export const title = 'Boilerplate app';
export const packageName = 'boilerplate_app';
export const structures = {
  Task,
};
