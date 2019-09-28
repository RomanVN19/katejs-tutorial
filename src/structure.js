import Fields from 'katejs/lib/fields';

const Wallet = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
};

const IncomeArticle = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
};
const ExpenseArticle = {
  fields: [
    {
      name: 'title',
      type: Fields.STRING,
    },
  ],
};

const Income = {
  fields: [
    {
      name: 'date',
      type: Fields.DATE,
    },
    {
      name: 'wallet',
      type: Fields.REFERENCE,
      entity: 'Wallet',
    },
    {
      name: 'article',
      type: Fields.REFERENCE,
      entity: 'IncomeArticle',
    },
    {
      name: 'sum',
      type: Fields.DECIMAL,
    },
  ],
};

export const title = 'Tutorial app';
export const packageName = 'tutorial_app';
export const structures = {
  IncomeArticle,
  ExpenseArticle,
  Wallet,
  Income,
};
