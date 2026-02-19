import type { Meta, StoryObj } from "@storybook/react"
import ChainLoader, { ChainLoaderProps } from "./ChainLoader"

const meta: Meta<ChainLoaderProps> = {
  title: "Components/Displays/Chain Loader/Stories",
  component: ChainLoader,
  argTypes: {},
} as Meta

export default meta

export const Default: StoryObj<ChainLoaderProps> = {
  render: () => {
    return (
      <ChainLoader
        count={1}
        total={3}
      />
    )
  },
  argTypes: {},
}
