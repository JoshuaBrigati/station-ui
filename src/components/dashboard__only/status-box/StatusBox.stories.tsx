import type { Meta, StoryObj } from '@storybook/react';
import StatusBox, { StatusBoxProps } from './StatusBox';

const meta: Meta = {
  title: 'Dashboard/StatusBox/Stories',
  component: StatusBox,
} as Meta;

export default meta;

export const Horizontal: StoryObj<StatusBoxProps> = {
  render: () =>
    <StatusBox
      label="Total Assets"
      amount={1539.17}
      variant="assets"
      symbol='$'
    />,
};

export const Vertical: StoryObj<StatusBoxProps> = {
  render: () =>
    <StatusBox
    label="Rewards"
    amount={1539.17}
    variant="claimable"
    symbol='$'
    />,
};