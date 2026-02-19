/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react"
import AssetListItem, { AssetListItemProps } from "./AssetListItem"
import { ListItemWrapperCard } from ".."
import { FlexColumn } from "components"
import ExpandableAssetListItem from './ExpandableAssetListItem'

const meta: Meta = {
  title: "Dashboard/List Items/Asset/Stories",
  component: AssetListItem,
} as Meta

export default meta

export const AssetPositive: StoryObj<AssetListItemProps> = {
  render: () => {
    return (
      <AssetListItem
        currencySymbol="$"
        firstColumn={{
          symbol: "LUNA",
          symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
          chainName: "Terra",
          chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
        }}
        secondColumn={{
          currentPrice: 0.4655,
          label: "Current Price"
        }}
        thirdColumn={{
          label: "1h Movement",
          percentage: 1.44,
        }}
        fourthColumn={{
          symbol: "LUNA",
          currencyAmount: 256.55 * .46,
          tokenAmount: 256.55,
        }}
      />
    )
  },
  argTypes: {},
}

export const Expandable: StoryObj<AssetListItemProps> = {
  render: () => {
    return (
      <ExpandableAssetListItem
        mainItem={{
          currencySymbol: "$",
          firstColumn: {
            symbol: "LUNA",
            symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
            chainName: "Terra",
            chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
          },
          secondColumn: {
            currentPrice: 0.4655,
            label: "Current Price"
          },
          thirdColumn: {
            label: "1h Movement",
            percentage: 1.44,
          },
          fourthColumn: {
            symbol: "LUNA",
            currencyAmount: 256.55 * .46,
            tokenAmount: 256.55,
          },
        }}
        subItems={[
          {
            currencySymbol: "$",
            firstColumn: {
              symbol: "bLUNA",
              symbolIcon: "https://station-assets.terra.dev/img/coins/bLuna.png",
              chainName: "Migaloo",
              chainIcon: "https://station-assets.terra.dev/img/chains/Migaloo.svg",
            },
            secondColumn: {
              currentPrice: 0.881,
              label: "Current Price"
            },
            thirdColumn: {
              label: "1h Movement",
              percentage: 1.43,
            },
            fourthColumn: {
              symbol: "bLUNA",
              currencyAmount: 137 * .88,
              tokenAmount: 13.97,
            },
          },
          {
            currencySymbol: "$",
            firstColumn: {
              symbol: "axlUSDC",
              symbolIcon: "https://station-assets.terra.dev/img/coins/axlUSDC.svg",
              chainName: "Axelar",
              chainIcon: "https://station-assets.terra.dev/img/chains/Axelar.svg",
            },
            secondColumn: {
              currentPrice: 0.9998,
              label: "Current Price"
            },
            thirdColumn: {
              label: "1h Movement",
              percentage: -0.01,
            },
            fourthColumn: {
              symbol: "axlUSDC",
              currencyAmount: 51.67 * .99,
              tokenAmount: 51.67,
            },
          },
          {
            currencySymbol: "$",
            firstColumn: {
              symbol: "OSMO",
              symbolIcon: "https://station-assets.terra.dev/img/coins/Osmo.svg",
              chainName: "Osmosis",
              chainIcon: "https://station-assets.terra.dev/img/chains/Osmosis.svg",
            },
            secondColumn: {
              currentPrice: 0.3826,
              label: "Current Price"
            },
            thirdColumn: {
              label: "1h Movement",
              percentage: -0.57,
            },
            fourthColumn: {
              symbol: "OSMO",
              currencyAmount: 71 * .38,
              tokenAmount: 71.56,
            },
          },
        ]}
      />
    )
  },
  argTypes: {},
}

export const AssetNegative: StoryObj<AssetListItemProps> = {
  render: () => {
    return (
      <AssetListItem
        currencySymbol="$"
        firstColumn={{
          symbol: "LUNA",
          symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
          chainName: "Terra",
          chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
        }}
        secondColumn={{
          currentPrice: 0.4655,
          label: "Current Price"
        }}
        thirdColumn={{
          label: "1h Movement",
          percentage: -1.44,
        }}
        fourthColumn={{
          symbol: "LUNA",
          currencyAmount: 256.55 * .46,
          tokenAmount: 256.55,
        }}
      />
    )
  },
  argTypes: {},
}

export const ListAssetWrapperExample: StoryObj<AssetListItemProps> = {
  render: () => {
    return (
      <ListItemWrapperCard>
        <FlexColumn gap={24} align="stretch">
          <AssetListItem
            currencySymbol="$"
            firstColumn={{
              symbol: "LUNA",
              symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
              chainName: "Terra",
              chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
            }}
            secondColumn={{
              currentPrice: 0.4655,
              label: "Current Price"
            }}
            thirdColumn={{
              percentage: 1.44,
              label: "1h Movement"
            }}
            fourthColumn={{
              symbol: "LUNA",
              currencyAmount: 256.55 * .46,
              tokenAmount: 256.55,
            }}
          />

          <ExpandableAssetListItem
            mainItem={{
              currencySymbol: "$",
              firstColumn: {
                symbol: "LUNA",
                symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
                chainAmount: "3",
                unsupported: true
              },
              secondColumn: {
                currentPrice: 0.4655,
                label: "Current Price"
              },
              thirdColumn: {
                label: "1h Movement",
                percentage: 1.44,
              },
              fourthColumn: {
                symbol: "LUNA",
                currencyAmount: 2560000.55 * .46,
                tokenAmount: 2560000.55,
              },
            }}
            subItems={[
              {
                currencySymbol: "$",
                firstColumn: {
                  symbol: "bLUNA",
                  symbolIcon: "https://station-assets.terra.dev/img/coins/bLuna.png",
                  chainName: "Migaloo",
                  chainIcon: "https://station-assets.terra.dev/img/chains/Migaloo.svg",
                },
                secondColumn: {
                  currentPrice: 0.881,
                  label: "Current Price"
                },
                thirdColumn: {
                  label: "1h Movement",
                  percentage: 1.43,
                },
                fourthColumn: {
                  symbol: "bLUNA",
                  currencyAmount: 137 * .88,
                  tokenAmount: 13.97,
                },
              },
              {
                currencySymbol: "$",
                firstColumn: {
                  symbol: "axlUSDC",
                  symbolIcon: "https://station-assets.terra.dev/img/coins/axlUSDC.svg",
                  chainName: "Axelar",
                  chainIcon: "https://station-assets.terra.dev/img/chains/Axelar.svg",
                },
                secondColumn: {
                  currentPrice: 0.9998,
                  label: "Current Price"
                },
                thirdColumn: {
                  label: "1h Movement",
                  percentage: -0.01,
                },
                fourthColumn: {
                  symbol: "axlUSDC",
                  currencyAmount: 51.67 * .99,
                  tokenAmount: 51.67,
                },
              },
              {
                currencySymbol: "$",
                firstColumn: {
                  symbol: "OSMO",
                  symbolIcon: "https://station-assets.terra.dev/img/coins/Osmo.svg",
                  chainName: "Osmosis",
                  chainIcon: "https://station-assets.terra.dev/img/chains/Osmosis.svg",
                },
                secondColumn: {
                  currentPrice: 0.3826,
                  label: "Current Price"
                },
                thirdColumn: {
                  label: "1h Movement",
                  percentage: -0.57,
                },
                fourthColumn: {
                  symbol: "OSMO",
                  currencyAmount: 71 * .38,
                  tokenAmount: 71.56,
                },
              },
            ]}
          />

          <AssetListItem
            currencySymbol="$"
            firstColumn={{
              symbol: "bLUNA",
              symbolIcon: "https://station-assets.terra.dev/img/coins/bLuna.png",
              chainName: "Migaloo",
              chainIcon: "https://station-assets.terra.dev/img/chains/Migaloo.svg",
            }}
            secondColumn={{
              currentPrice: 0.881,
              label: "Current Price"
            }}
            thirdColumn={{
              label: "1h Movement",
              percentage: 1.43,
            }}
            fourthColumn={{
              symbol: "bLUNA",
              currencyAmount: 13 * .88,
              tokenAmount: 13.97,
            }}
          />

          <AssetListItem
            currencySymbol="$"
            firstColumn={{
              symbol: "axlUSDC",
              symbolIcon: "https://station-assets.terra.dev/img/coins/axlUSDC.svg",
              chainName: "Axelar",
              chainIcon: "https://station-assets.terra.dev/img/chains/Axelar.svg",
            }}
            secondColumn={{
              currentPrice: 0.9998,
              label: "Current Price"
            }}
            thirdColumn={{
              label: "1h Movement",
              percentage: -0.01,
            }}
            fourthColumn={{
              symbol: "axlUSDC",
              currencyAmount: 51.67 * .99,
              tokenAmount: 51.67,
            }}
          />

          <AssetListItem
            currencySymbol="$"
            firstColumn={{
              symbol: "OSMO",
              symbolIcon: "https://station-assets.terra.dev/img/coins/Osmo.svg",
              chainName: "Osmosis",
              chainIcon: "https://station-assets.terra.dev/img/chains/Osmosis.svg",
            }}
            secondColumn={{
              currentPrice: 0.3826,
              label: "Current Price"
            }}
            thirdColumn={{
              label: "1h Movement",
              percentage: -0.57,
            }}
            fourthColumn={{
              symbol: "OSMO",
              currencyAmount: 71 * .38,
              tokenAmount: 71.56,
            }}
          />

          <ExpandableAssetListItem
            mainItem={{
              currencySymbol: "$",
              firstColumn: {
                symbol: "LUNA",
                symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
                chainAmount: "3",
                positionAmount: "5",
              },
              secondColumn: {
                currentPrice: 0.4655,
                label: "Current Price"
              },
              thirdColumn: {
                label: "1h Movement",
                percentage: 1.44,
              },
              fourthColumn: {
                symbol: "LUNA",
                currencyAmount: 256.55 * .46,
                tokenAmount: 256.55,
              },
            }}
            subItems={[
              {
                currencySymbol: "$",
                firstColumn: {
                  symbol: "bLUNA",
                  symbolIcon: "https://station-assets.terra.dev/img/coins/bLuna.png",
                  chainName: "Migaloo",
                  chainIcon: "https://station-assets.terra.dev/img/chains/Migaloo.svg",
                },
                secondColumn: {
                  currentPrice: 0.881,
                  label: "Current Price"
                },
                thirdColumn: {
                  label: "1h Movement",
                  percentage: 1.43,
                },
                fourthColumn: {
                  symbol: "bLUNA",
                  currencyAmount: 137 * .88,
                  tokenAmount: 13.97,
                },
              },
              {
                currencySymbol: "$",
                firstColumn: {
                  symbol: "axlUSDC",
                  symbolIcon: "https://station-assets.terra.dev/img/coins/axlUSDC.svg",
                  chainName: "Axelar",
                  chainIcon: "https://station-assets.terra.dev/img/chains/Axelar.svg",
                },
                secondColumn: {
                  currentPrice: 0.9998,
                  label: "Current Price"
                },
                thirdColumn: {
                  label: "1h Movement",
                  percentage: -0.01,
                },
                fourthColumn: {
                  symbol: "axlUSDC",
                  currencyAmount: 51.67 * .99,
                  tokenAmount: 51.67,
                },
              },
              {
                currencySymbol: "$",
                firstColumn: {
                  symbol: "OSMO",
                  symbolIcon: "https://station-assets.terra.dev/img/coins/Osmo.svg",
                  chainName: "Osmosis",
                  chainIcon: "https://station-assets.terra.dev/img/chains/Osmosis.svg",
                },
                secondColumn: {
                  currentPrice: 0.3826,
                  label: "Current Price"
                },
                thirdColumn: {
                  label: "1h Movement",
                  percentage: -0.57,
                },
                fourthColumn: {
                  symbol: "OSMO",
                  currencyAmount: 71 * .38,
                  tokenAmount: 71.56,
                },
              },
            ]}
          />
        </FlexColumn>
      </ListItemWrapperCard>
    )
  },
  argTypes: {},
}
