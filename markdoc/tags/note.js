import { Note } from '../../components/Note';

export const note = {
  render: Note,
  description: 'Display the enclosed content in a note box',
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    type: {
      type: String,
      default: 'note',
      matches: ['caution', 'check', 'note', 'warning'],
      errorLevel: 'critical',
      description:
        'Controls the design of the box. "caution", "check", "note", "warning"'
    },
    title: {
      type: String,
      description: 'The title displayed at the top of the box'
    }
  }
};