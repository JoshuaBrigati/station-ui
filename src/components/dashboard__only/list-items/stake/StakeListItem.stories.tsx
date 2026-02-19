/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react"
import StakeListItem, { StakeListItemProps } from "./StakeListItem"
import ListItemWrapperCard from "../wrapper-card/ListItemWrapperCard"
import { FlexColumn, SectionHeader } from "components"

const meta: Meta = {
  title: "Dashboard/List Items/Stake/Stories",
  component: StakeListItem,
} as Meta

export default meta

export const AvailableToStakeWithAlliance: StoryObj<StakeListItemProps> = {
  render: () => {
    return (
      <StakeListItem
        variant="default"
        currencySymbol="$"
        firstColumn={{
          symbol: "LUNA",
          symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
          chainName: "Terra",
          chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
        }}
        secondColumn={{
          tokenAmount: 1492.77,
          tokenSymbol: "Luna",
          currencyAmount: 1492.77 * .55,
        }}
        thirdColumn={{
          isAlliance: true,
        }}
        fourthColumn={{
          variant: "default",
          defaultUnstakeDays: 30,
        }}
        fifthColumn={{
          variant: "default",
          defaultAPR: 21.55,
        }}
        sixthColumn={{
          variant: "default",
          newStakeOnClick: () => console.log("new stake"),
        }}
      />
    )
  },
  argTypes: {},
}

export const AvailableToStake: StoryObj<StakeListItemProps> = {
  render: () => {
    return (
      <StakeListItem
        variant="default"
        currencySymbol="$"
        firstColumn={{
          symbol: "LUNA",
          symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
          chainName: "Terra",
          chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
        }}
        secondColumn={{
          tokenAmount: 1492.77,
          tokenSymbol: "Luna",
          currencyAmount: 1492.77 * .55,
        }}
        thirdColumn={{
          isAlliance: true,
        }}
        fourthColumn={{
          variant: "default",
          defaultUnstakeDays: 30,
        }}
        fifthColumn={{
          variant: "default",
          defaultAPR: 21.55,
        }}
        sixthColumn={{
          variant: "default",
          newStakeOnClick: () => console.log("new stake"),
        }}
      />
    )
  },
  argTypes: {},
}

export const Staked: StoryObj<StakeListItemProps> = {
  render: () => {
    return (
      <StakeListItem
        variant="staked"
        currencySymbol="$"
        firstColumn={{
          symbol: "LUNA",
          symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
          chainName: "Terra",
          chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
        }}
        secondColumn={{
          tokenAmount: 500,
          tokenSymbol: "Luna",
          currencyAmount: 500 * .55,
        }}
        thirdColumn={{
          isAlliance: false,
        }}
        fourthColumn={{
          variant: "staked",
          claimableCurrencyAmount: 38.93,
          onClick: () => console.log("claim"),
        }}
        fifthColumn={{
          variant: "staked",
          stakedDetails: {
            validatorName: "Orbital Command",
            validatorCommission: 5.00,
          },
        }}
        sixthColumn={{
          variant: "staked",
          newStakeOnClick: () => console.log("new stake"),
        }}
      />
    )
  },
  argTypes: {},
}

export const Unstaking: StoryObj<StakeListItemProps> = {
  render: () => {
    return (
      <StakeListItem
        variant="unstaked"
        currencySymbol="$"
        firstColumn={{
          symbol: "LUNA",
          symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
          chainName: "Terra",
          chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
        }}
        secondColumn={{
          tokenAmount: 500,
          tokenSymbol: "Luna",
          currencyAmount: 500 * .55,
        }}
        thirdColumn={{
          isAlliance: false,
        }}
        fourthColumn={{
          variant: "unstaking",
          unstakingTimer: "2 days",
        }}
        fifthColumn={{
          variant: "unstaked",
          unstakedDetails: {
            validatorName: "Orbital Command",
            validatorCommission: 5.00,
          },
        }}
        sixthColumn={{
          variant: "unstaked",
          newStakeOnClick: () => console.log("new stake"),
        }}
      />
    )
  },
  argTypes: {},
}

export const ListItemWrapperExample: StoryObj<StakeListItemProps> = {
  render: () => {
    return (
      <ListItemWrapperCard>
        <FlexColumn gap={24}>
          <StakeListItem
            variant="default"
            currencySymbol="$"
            firstColumn={{
              symbol: "LUNA",
              symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
              chainName: "Terra",
              chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
            }}
            secondColumn={{
              tokenAmount: 1492.77,
              tokenSymbol: "Luna",
              currencyAmount: 1492.77 * .55,
            }}
            thirdColumn={{
              isAlliance: true,
            }}
            fourthColumn={{
              variant: "default",
              defaultUnstakeDays: 30,
            }}
            fifthColumn={{
              variant: "default",
              defaultAPR: 21.55,
            }}
            sixthColumn={{
              variant: "default",
              newStakeOnClick: () => console.log("new stake"),
            }}
          />

          <StakeListItem
            variant="staked"
            currencySymbol="$"
            firstColumn={{
              symbol: "LUNA",
              symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
              chainName: "Terra",
              chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
            }}
            secondColumn={{
              tokenAmount: 500,
              tokenSymbol: "Luna",
              currencyAmount: 500 * .55,
            }}
            thirdColumn={{
              isAlliance: false,
            }}
            fourthColumn={{
              variant: "staked",
              claimableCurrencyAmount: 38.93,
            }}
            fifthColumn={{
              variant: "staked",
              stakedDetails: {
                validatorName: "Orbital Command",
                validatorCommission: 5.00,
              },
            }}
            sixthColumn={{
              variant: "staked",
              newStakeOnClick: () => console.log("new stake"),
            }}
          />

          <StakeListItem
            variant="unstaked"
            currencySymbol="$"
            firstColumn={{
              symbol: "LUNA",
              symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
              chainName: "Terra",
              chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
            }}
            secondColumn={{
              tokenAmount: 500,
              tokenSymbol: "Luna",
              currencyAmount: 500 * .55,
            }}
            thirdColumn={{
              isAlliance: false,
            }}
            fourthColumn={{
              variant: "unstaking",
              unstakingTimer: "2 days",
            }}
            fifthColumn={{
              variant: "unstaked",
              unstakedDetails: {
                validatorName: "Orbital Commandddddddd",
                validatorCommission: 5.00,
              },
            }}
            sixthColumn={{
              variant: "unstaked",
              newStakeOnClick: () => console.log("new stake"),
            }}
          />
        </FlexColumn>
      </ListItemWrapperCard>
    )
  },
  argTypes: {},
}


export const StakePageExample: StoryObj<StakeListItemProps> = {
  render: () => {
    return (
      <FlexColumn gap={32} align="stretch">
        <FlexColumn gap={16} align="stretch">
          <SectionHeader
            title="Assets Being Unstaked"
            icon={<span style={{ height: "8px", width: "8px", background: "var(--token-warning-500)", borderRadius: "50%" }} />}
            extraSmallText
          />
          <ListItemWrapperCard>
            <FlexColumn gap={24}>
              <StakeListItem
                variant="unstaked"
                currencySymbol="$"
                firstColumn={{
                  symbol: "LUNA",
                  symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
                  chainName: "Terra",
                  chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
                }}
                secondColumn={{
                  tokenAmount: 500,
                  tokenSymbol: "Luna",
                  currencyAmount: 500 * .55,
                }}
                thirdColumn={{
                  isAlliance: false,
                }}
                fourthColumn={{
                  variant: "unstaking",
                  unstakingTimer: "2 days",
                }}
                fifthColumn={{
                  variant: "unstaked",
                  unstakedDetails: {
                    validatorName: "Orbital Commandddddddd",
                    validatorCommission: 5.00,
                  },
                }}
                sixthColumn={{
                  variant: "unstaked",
                  newStakeOnClick: () => console.log("new stake"),
                }}
              />
            </FlexColumn>
          </ListItemWrapperCard>
        </FlexColumn>
        <FlexColumn gap={16} align="stretch">
          <SectionHeader
            title="Staked Assets"
            extraSmallText
          />
          <ListItemWrapperCard>
            <FlexColumn gap={24}>
              <StakeListItem
                variant="staked"
                currencySymbol="$"
                firstColumn={{
                  symbol: "LUNA",
                  symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
                  chainName: "Terra",
                  chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
                }}
                secondColumn={{
                  tokenAmount: 500,
                  tokenSymbol: "Luna",
                  currencyAmount: 500 * .55,
                }}
                thirdColumn={{
                  isAlliance: true,
                }}
                fourthColumn={{
                  variant: "staked",
                  claimableCurrencyAmount: 0.5,
                  onClick: () => console.log("claim"),
                }}
                fifthColumn={{
                  variant: "staked",
                  stakedDetails: {
                    validatorName: "Interstake One (prev. BTC.Secure)",
                    validatorCommission: 4.50,
                  },
                }}
                sixthColumn={{
                  variant: "staked",
                  newStakeOnClick: () => console.log("new stake"),
                }}
              />

              <StakeListItem
                variant="staked"
                currencySymbol="$"
                firstColumn={{
                  symbol: "LUNA",
                  symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
                  chainName: "Terra",
                  chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
                }}
                secondColumn={{
                  tokenAmount: 500,
                  tokenSymbol: "Luna",
                  currencyAmount: 500 * .55,
                }}
                thirdColumn={{
                  isAlliance: false,
                }}
                fourthColumn={{
                  variant: "staked",
                  claimableCurrencyAmount: 38.93,
                }}
                fifthColumn={{
                  variant: "staked",
                  stakedDetails: {
                    validatorName: "Orbital Command",
                    validatorCommission: 5.00,
                  },
                }}
                sixthColumn={{
                  variant: "staked",
                  newStakeOnClick: () => console.log("new stake"),
                }}
              />
            </FlexColumn>
          </ListItemWrapperCard>
        </FlexColumn>
        <FlexColumn gap={16} align="stretch">
          <SectionHeader
            title="Available To Be Staked"
            extraSmallText
          />
          <ListItemWrapperCard>
            <FlexColumn gap={24}>
              <FlexColumn gap={16}>
                <SectionHeader
                  title="My Assets"
                  withLine
                  extraSmallText
                />
                <FlexColumn gap={24}>
                  <StakeListItem
                    variant="default"
                    currencySymbol="$"
                    firstColumn={{
                      symbol: "LUNA",
                      symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
                      chainName: "Terra",
                      chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
                    }}
                    secondColumn={{
                      tokenAmount: 500,
                      tokenSymbol: "Luna",
                      currencyAmount: 500 * .55,
                    }}
                    thirdColumn={{
                      isAlliance: true,
                    }}
                    fourthColumn={{
                      variant: "default",
                      defaultUnstakeDays: 30,
                    }}
                    fifthColumn={{
                      variant: "default",
                      defaultAPR: 21.55,
                    }}
                    sixthColumn={{
                      variant: "default",
                      newStakeOnClick: () => console.log("new stake"),
                    }}
                  />

                  <StakeListItem
                    variant="default"
                    currencySymbol="$"
                    firstColumn={{
                      symbol: "LUNA",
                      symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
                      chainName: "Terra",
                      chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
                    }}
                    secondColumn={{
                      tokenAmount: 500,
                      tokenSymbol: "Luna",
                      currencyAmount: 500 * .55,
                    }}
                    thirdColumn={{
                      isAlliance: false,
                    }}
                    fourthColumn={{
                      variant: "default",
                      defaultUnstakeDays: 7,
                    }}
                    fifthColumn={{
                      variant: "default",
                      defaultAPR: 9.88
                    }}
                    sixthColumn={{
                      variant: "default",
                      newStakeOnClick: () => console.log("new stake"),
                    }}
                  />
                </FlexColumn>
              </FlexColumn>

              <FlexColumn gap={16}>
                <SectionHeader
                  title="All Staking Assets"
                  withLine
                  extraSmallText
                />
                <FlexColumn gap={24}>
                  <StakeListItem
                    variant="default"
                    currencySymbol="$"
                    firstColumn={{
                      symbol: "LUNA",
                      symbolIcon: "https://station-assets.terra.dev/img/coins/Luna.svg",
                      chainName: "Terra",
                      chainIcon: "https://station-assets.terra.dev/img/chains/Terra.svg",
                    }}
                    secondColumn={{
                      tokenAmount: 0,
                      tokenSymbol: "Luna",
                      currencyAmount: 0,
                    }}
                    thirdColumn={{
                      isAlliance: true,
                    }}
                    fourthColumn={{
                      variant: "default",
                      defaultUnstakeDays: 30,
                    }}
                    fifthColumn={{
                      variant: "default",
                      defaultAPR: 21.55,
                    }}
                    sixthColumn={{
                      variant: "default",
                      newStakeOnClick: () => console.log("new stake"),
                      buttonDisabled: true,
                    }}
                  />
                </FlexColumn>
              </FlexColumn>
            </FlexColumn>
          </ListItemWrapperCard>
        </FlexColumn>
      </FlexColumn>
    )
  },
  argTypes: {},
}
