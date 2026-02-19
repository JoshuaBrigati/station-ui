/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react"
import GeoBlockCard, { GeoBlockCardProps } from "./GeoBlockCard"

const meta: Meta<GeoBlockCardProps> = {
  title: "Components/Cards/GeoBlock/Stories",
  component: GeoBlockCard,
} as Meta

export default meta

export const LargeDefault: StoryObj<GeoBlockCardProps> = {
  render: () => {
    return (
      <GeoBlockCard
        title={"Restricted Access!"}
        description={"Station is required to comply with sanctions that prevents us from serving users in the US. Your assets are safe, but to view and access them you need to use another provider."}
        includeQuote={true}
      />
    )
  },
  argTypes: {},
}

export const Medium: StoryObj<GeoBlockCardProps> = {
  render: () => {
    return (
      <GeoBlockCard
        variant="medium"
        title={"Restricted Feature"}
        description={"Station is required to comply with sanctions preventing us from serving certain features to users in the US."}
        includeQuote={false}
      />
    )
  },
  argTypes: {},
}

export const Small: StoryObj<GeoBlockCardProps> = {
  render: () => {
    return (
      <GeoBlockCard
        variant="small"
        title={"Restricted Feature"}
        description={"Station is required to comply with sanctions preventing us from serving certain features to users in the US."}
      />
    )
  },
  argTypes: {},
}

export const NoBackground: StoryObj<GeoBlockCardProps> = {
  render: () => {
    return (
      <GeoBlockCard
        variant="no-background"
        title={"Restricted Feature"}
        description={"Station is required to comply with sanctions that prevents us from serving users in the US. Your assets are safe, but to access them you need to export your credentials from Station and import them into another wallet provider."}
        includeQuote
      />
    )
  },
  argTypes: {},
}
