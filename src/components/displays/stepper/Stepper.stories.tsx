import { StoryObj, type Meta } from '@storybook/react';
import Stepper, { StepperProps } from './Stepper';
import { AddressBookIcon, Button, FlexColumn, SeedPhrase } from 'components';

const meta: Meta = {
  title: 'Components/Displays/Stepper/Stepper',
  component: Stepper,
  argTypes: {
    steps: {
      control: 'number',
      defaultValue: 3,
      description: 'The number of steps to render.',
      table: {
        defaultValue: { summary: 3 },
      }
    },
    currentStep: {
      control: 'number',
      defaultValue: 0,
      description: 'The step to render.',
      table: {
        defaultValue: { summary: 0 },
      }
    }
  },
} as Meta;

export default meta;

export const DefaultStepper: StoryObj<StepperProps> = {
  render: (args: StepperProps) => <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Stepper
      currentStep={args.currentStep}
      steps={args.steps}
      renderIcon={() => {
        return <AddressBookIcon height={48} width={48} fill='var(--token-dark-900)' />
      }}
      renderTitle={(currentStep) => {
        let title = ''

        switch (currentStep) {
          case 0:
            title = 'Get started with Identity'
            break
          case 1:
            title = 'Create new Identity'
            break
          case 2:
            title = 'Link ID with wallet'
            break
        }

        return title
      }}
      renderDescription={(currentStep) => {
        let description = ''

        switch (currentStep) {
          case 0:
            description = 'Set up your decentralized identity and create your web3 profile page'
            break
          case 1:
            description = 'Copy the following seed phrase'
            break
          case 2:
            description = 'This links your digital ID with your currently active wallet. This can be unlinked at any time.'
            break
        }

        return description
      }}
      renderBody={(currentStep, nextStep) => {
        let component

        switch (currentStep) {
          case 0:
            component = <FlexColumn align='stretch' gap={16}>
              <Button variant='secondary'>Connect with Identity App</Button>
              <Button variant='secondary'>Recover Identity</Button>
              <Button variant='primary' onClick={nextStep}>Create new Identity</Button>
            </FlexColumn>
            break
          case 1:
            component = <FlexColumn gap={16} align='stretch'>
              <div style={{ paddingBottom: '24px' }}>
                <SeedPhrase seedphrase={['local', 'all', 'weekend', 'swim', 'spy', 'vague', 'cat', 'cage', 'stone', 'leave', 'benefit', 'mask']} />
              </div>
              <Button variant='secondary'>Copy Seed Phrase</Button>
              <Button variant='primary' onClick={nextStep}>Continue</Button>
            </FlexColumn>
            break
          case 2:
            component = <FlexColumn align='stretch' gap={16}>
              <Button variant='primary'>Sign</Button>
            </FlexColumn>
            break
        }

        return component
      }}
    />
  </div>,
  args: {
    steps: 3,
    currentStep: 0
  }
};
