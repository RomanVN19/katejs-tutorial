import { Elements, Form } from 'katejs/lib/client';

export default class TestForm extends Form {
  constructor(args) {
    super(args);
    this.elements = [
      {
        type: Elements.LABEL,
        title: 'Hello world',
      },
    ];
  }
}
