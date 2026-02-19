/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react"
import NftHeaderCard, { NftHeaderCardProps } from "./NftHeaderCard"

const meta: Meta = {
  title: "Components/Cards/NftHeaderCard/Stories",
  component: NftHeaderCard,
} as Meta

export default meta

export const Default: StoryObj<NftHeaderCardProps> = {
  render: () => {
    return (
      <div style={{ width: "630px" }}>
        <NftHeaderCard
          address="terra5dnwe3fc...pazdy5"
          collectionImg="https://raw.githubusercontent.com/terra-money/validator-images/main/images/F87ADDB700C0CC94.jpg"
          collectionName="Department 77: Echo MK1"
        />
      </div>
    )
  },
  argTypes: {},
}
