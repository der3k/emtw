import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EditTaskComponent extends Component {
  @tracked
  showAddComment = false;

  @action
  addComment(comment) {
    console.log('Adding comment', this.args.task.id, comment);
    this.showAddComment = false;
  }
}
