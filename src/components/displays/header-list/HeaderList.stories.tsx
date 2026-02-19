import type { Meta, StoryObj } from "@storybook/react";
import HeaderList, { HeaderListProps } from "./HeaderList";
import { Credential } from "..";

const meta: Meta<HeaderListProps> = {
  title: "Components/Displays/Header List/Stories",
  component: HeaderList,
  argTypes: {},
} as Meta;

export default meta;

export const WithColoredCircle: StoryObj<HeaderListProps> = {
  render: () => {
    const arr: Array<React.ReactNode> = []
    for (let i = 0; i < 3; i++) {
      arr.push(
        <Credential
          chain={{ icon: "https://raw.githubusercontent.com/terra-money/validator-images/main/images/A2879F08F59FB0AF.jpg", label: "Terra" }}
          title="DAO Admin @ Orbital Command"
          description={"Issued by Orbital Command on 18 Oct 2023 at 15:55 UTC"}
          type={"DAO_ADMIN"}
          claimed={false}
          onClaimClick={() => alert('claimed')}
          onRejectClick={() => alert('rejected')}
        />
      )
    }

    return (
      <HeaderList
        title="Unclaimed Credentials"
        color="var(--token-warning-500)"
        renderList={arr}
      />
    )
  },
  argTypes: {},
};

export const WithoutColoredCircle: StoryObj<HeaderListProps> = {
  render: () => {
    const arr: Array<React.ReactNode> = []
    for (let i = 0; i < 3; i++) {
      arr.push(
        <Credential
          chain={{ icon: "https://raw.githubusercontent.com/terra-money/validator-images/main/images/A2879F08F59FB0AF.jpg", label: "Terra" }}
          title="DAO Admin @ Orbital Command"
          description={"Issued by Orbital Command on 18 Oct 2023 at 15:55 UTC"}
          type={"DAO_ADMIN"}
          claimed={true}
        />
      )
    }

    return (
      <HeaderList
        title="Claimed Credentials"
        renderList={arr}
      />
    )
  },
  argTypes: {},
};
