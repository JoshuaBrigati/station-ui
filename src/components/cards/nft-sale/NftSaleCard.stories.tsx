/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react"
import NftSaleCard, { NftSaleCardProps } from "./NftSaleCard"

const meta: Meta = {
  title: "Components/Cards/NftSaleCard/Stories",
  component: NftSaleCard,
} as Meta

export default meta

export const Default: StoryObj<NftSaleCardProps> = {
  render: () => {
    const date = new Date()
    date.setSeconds(date.getSeconds() + 90)
    return (
      <div style={{ width: "630px" }}>
        <NftSaleCard
          collectionPrice={235.62}
          currentPrice={310.28}
          saleEndDate={date}
          tokenImg="https://station-assets.terra.dev/img/coins/Luna.svg"
          tokenName="LUNA"
          onBuyNowClick={() => alert('buy')}
          onMakeOfferClick={() => alert('offer')}
          onSaleFinished={() => console.log('sale finished')}
        />
      </div>
    )
  },
  argTypes: {},
}

export const DefaultWithSymbol: StoryObj<NftSaleCardProps> = {
  render: () => {
    const date = new Date()
    date.setSeconds(date.getSeconds() + 90)
    return (
      <div style={{ width: "630px" }}>
        <NftSaleCard
          collectionPrice={235.62}
          currentPrice={310.28}
          saleEndDate={date}
          tokenImg="https://station-assets.terra.dev/img/coins/axlUSDC.svg"
          currencySymbol="$"
          tokenName="axlUSDC"
          onBuyNowClick={() => alert('buy')}
          onMakeOfferClick={() => alert('offer')}
          onSaleFinished={() => console.log('sale finished')}
        />
      </div>
    )
  },
  argTypes: {},
}
