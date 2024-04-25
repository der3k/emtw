import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AddCommentComponent extends Component {
  @tracked value = '';

  @action
  submit() {
    this.args.onSubmit(this.value);
  }
}
