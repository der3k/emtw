import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AddCommentComponent extends Component {
  constructor(...args) {
    super(...args);
    this.content = this.args.content;
  }

  @action
  submit() {
    this.args.onSubmit(this.content);
  }

  @action
  close() {
    this.args.onClose();
  }
}
