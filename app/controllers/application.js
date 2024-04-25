import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  ts = (s) => `${s}.`;
  @tracked tasks = [
    {
      id: '001',
      summary: 'Task 1',
      description: 'Description of Task 1.',
      comments: [
        {
          createdAt: '2024-04-20T20:04:10',
          comment: 'Comment of Task 1.',
        },
        {
          createdAt: '2024-04-20T20:04:12',
          comment: 'Another comment of Task 1.',
        },
      ],
    },
    {
      id: '002',
      summary: 'Task 2',
      description: 'Description of Task 2.',
      comments: [
        {
          createdAt: '2024-04-20T20:05:10',
          comment: 'Comment of Task 2.',
        },
      ],
    },
    {
      id: '003',
      summary: 'Task 3',
      description: 'Description of Task 3.',
      comments: [
        {
          createdAt: '2024-04-20T20:05:11',
          comment: 'Comment of Task 3.',
        },
        {
          createdAt: '2024-04-20T20:05:12',
          comment: 'Another comment of Task 3.',
        },
        {
          createdAt: '2024-04-20T20:05:13',
          comment: 'Next comment of Task 3.',
        },
      ],
    },
  ];
}
