import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EditTaskComponent extends Component {
  @tracked
  show = {
    addComment: false,
    editDescription: false,
  };

  @action
  addComment(comment) {
    console.log('Adding comment', this.args.task.id, comment);
    this.show = { ...this.show, addComment: false };
  }

  @action
  updateDescription(description) {
    console.log('Updading description', this.args.task.id, description);
    this.show = { ...this.show, editDescription: false };
  }
}
