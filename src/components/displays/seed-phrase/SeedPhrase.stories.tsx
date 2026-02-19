import type { Meta, StoryObj } from '@storybook/react';
import SeedPhrase, { SeedPhraseProps } from './SeedPhrase';

const meta: Meta<SeedPhraseProps> = {
  title: 'Components/Displays/Seed Phrase/Stories',
  component: SeedPhrase,
  argTypes: {
    seedphrase: {
      control: 'array',
      defaultValue: ['local', 'all', 'weekend', 'swim', 'spy', 'vague', 'cat', 'cage', 'stone', 'leave', 'benefit', 'mask'],
      description: 'The seedphrase to render.',
      table: {
        defaultValue: { summary: ['local', 'all', 'weekend', 'swim', 'spy', 'vague', 'cat', 'cage', 'stone', 'leave', 'benefit', 'mask'] },
      }
    }
  },
} as Meta;

export default meta;

export const DefaultSeedPhrase: StoryObj<SeedPhraseProps> = {
  render: () => {
    const seedphrase = ['local', 'all', 'weekend', 'swim', 'spy', 'vague', 'cat', 'cage', 'stone', 'leave', 'benefit', 'mask'];

    return (
      <div style={{ width: '368px' }}>
        <SeedPhrase seedphrase={seedphrase} />
      </div>
    )
  },
  argTypes: {},
};
