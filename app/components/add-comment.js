import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AddCommentComponent extends Component {
  @action
  submit() {
    this.args.onSubmit(this.value);
  }

  @action
  close() {
    this.args.onClose();
  }
}
