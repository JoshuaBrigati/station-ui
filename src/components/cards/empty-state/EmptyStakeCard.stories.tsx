import type { Meta, StoryObj } from "@storybook/react"
import EmptyStateCard, { EmptyStateCardProps } from "./EmptyStateCard"

const meta: Meta<EmptyStateCardProps> = {
  title: "Components/Cards/Empty/Stories",
  component: EmptyStateCard,
  argTypes: {},
} as Meta

export default meta

export const WarningEmpty: StoryObj<EmptyStateCardProps> = {
  render: () => {
    return (
      <EmptyStateCard
        message={"You don’t have any staked assets yet. Please visit the `Available Staking` tab to start staking your assets!"}
        status={"warning"}
      />
    )
  },
}
