
export default Entity => class Expense extends Entity {
  beforePut({ savedEntity, body, transaction, ctx }) {
    if (super.beforePut) super.beforePut({ savedEntity, body, transaction, ctx });
    if (body && body.expensesDetails && body.expensesDetails.length) {
      // eslint-disable-next-line no-param-reassign
      body.total = body.expensesDetails.reduce((acc, val) => acc + (+val.sum), 0);
    }
  }
};
