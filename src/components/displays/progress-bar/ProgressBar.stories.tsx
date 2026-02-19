import type { Meta, StoryObj } from "@storybook/react"
import ProgressBar, { ProgressBarProps } from "./ProgressBar"

const meta: Meta<ProgressBarProps> = {
  title: "Components/Displays/Progress Bar/Stories",
  component: ProgressBar,
  argTypes: {},
} as Meta

export default meta

export const ThresholdNotMet: StoryObj<ProgressBarProps> = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    data: [
      { type: "yes", percent: "5%" },
      { type: "abstain", percent: "10%" },
      { type: "no", percent: "2%" },
      { type: "noWithVeto", percent: "0.5%" },
    ],
    threshold: 50,
  },
}

export const PassThresholdMet: StoryObj<ProgressBarProps> = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    data: [
      {
        type: "yes",
        percent: "54.27%",
        percentStaked: "37.33%",
      },
      {
        type: "no",
        percent: "22.30%",
        percentStaked: "15.34%",
      },
      {
        type: "noWithVeto",
        percent: "0.41%",
        percentStaked: "0.28%",
      },
      {
        type: "abstain",
        percent: "23.02%",
        percentStaked: "15.84%",
      },
    ],
    threshold: 26.47810913562808,
  },
}

export const SinglePassThreshold: StoryObj<ProgressBarProps> = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    data: [
      { type: "yes", percent: "20%" },
      { type: "abstain", percent: "0%" },
      { type: "no", percent: "0%" },
      { type: "noWithVeto", percent: "0%" },
    ],
    threshold: 20,
  },
}

export const OnLeftEdge: StoryObj<ProgressBarProps> = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    data: [
      { type: "yes", percent: "0%" },
      { type: "abstain", percent: "0%" },
      { type: "no", percent: "0%" },
      { type: "noWithVeto", percent: "0%" },
    ],
    threshold: 1,
  },
}

export const OnRightEdge: StoryObj<ProgressBarProps> = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    data: [
      { type: "yes", percent: "0%" },
      { type: "abstain", percent: "0%" },
      { type: "no", percent: "0%" },
      { type: "noWithVeto", percent: "0%" },
    ],
    threshold: 99,
  },
}

export const Deposit: StoryObj<ProgressBarProps> = {
  render: () => {
    return (
      <ProgressBar
        data={[{ type: "deposit", percent: "55%" }]}
        threshold={55}
        labelOverride={"55%"}
      />
    )
  },
  args: {},
}

export const DepositFinished: StoryObj<ProgressBarProps> = {
  render: () => {
    return (
      <ProgressBar
        data={[{ type: "deposit", percent: "100%" }]}
        threshold={100}
        labelOverride={"100%"}
      />
    )
  },
  args: {},
}

export const Small: StoryObj<ProgressBarProps> = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    data: [
      { type: "yes", percent: "5%" },
      { type: "abstain", percent: "10%" },
      { type: "no", percent: "2%" },
      { type: "noWithVeto", percent: "0.5%" },
    ],
    threshold: 50,
    isSmall: true,
    labelOverride: "PT",
  },
}
