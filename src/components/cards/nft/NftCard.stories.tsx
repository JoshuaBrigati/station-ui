/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react"
import NftCard, { NftCardProps } from "./NftCard"
import NftSkeleton from "./skeleton/NftSkeleton"

const meta: Meta = {
  title: "Components/Cards/Nft/Stories",
  component: NftCard,
} as Meta

export default meta

export const Default: StoryObj<NftCardProps> = {
  render: () => {
    return (
      <NftCard
        chainImg="https://station-assets.terra.dev/img/chains/Terra.svg"
        chainName="Terra"
        nftImage="https://raw.githubusercontent.com/terra-money/validator-images/main/images/F87ADDB700C0CC94.jpg"
        nftImageLabel="NFT Num 1"
        nftName="EVOL #3332"
        tokenImg="https://station-assets.terra.dev/img/coins/Luna.svg"
        tokenName="LUNA"
        tokenValue={355.62}
      />
    )
  },
  argTypes: {},
}

export const DefaultWithSymbol: StoryObj<NftCardProps> = {
  render: () => {
    return (
      <NftCard
        chainImg="https://station-assets.terra.dev/img/chains/Osmosis.svg"
        chainName="Osmosis"
        nftImage="https://raw.githubusercontent.com/terra-money/validator-images/main/images/F87ADDB700C0CC94.jpg"
        nftImageLabel="NFT Num 1"
        nftName="EVOL #3332"
        tokenImg="https://station-assets.terra.dev/img/coins/axlUSDC.svg"
        tokenName="axlUSDC"
        currencySymbol="$"
        tokenValue={177.54}
      />
    )
  },
  argTypes: {},
}

export const Skeleton: StoryObj<NftCardProps> = {
  render: () => {
    return (
      <NftSkeleton />
    )
  },
  argTypes: {},
}
