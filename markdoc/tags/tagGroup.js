import { TagGroup } from '../../components/TagGroup';

export const tagGroup = {
  render: TagGroup,
  description: 'Display the list of tags that the content includes',
  attributes: {
    items: {
      type: Array,
      description: 'The list of tags',
    }
  },
};