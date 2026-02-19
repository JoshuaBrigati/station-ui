import type { Meta, StoryObj } from "@storybook/react";
import Credential, { CredentialProps } from "./Credential";
import { Pill } from "components";

const meta: Meta<CredentialProps> = {
  title: "Components/List Items/Credential/Stories",
  component: Credential,
  argTypes: {},
} as Meta;

export default meta;

export const ClaimedCredential: StoryObj<CredentialProps> = {
  render: () => {
    return (
      <Credential
        claimed={true}
        chain={{ icon: "https://station-assets.terra.dev/img/chains/Terra.svg", label: "Terra" }}
        title="Product Designer @ Terraform Labs"
        description={"Issued by Orbital Command on 18 Oct 2023 at 15:55 UTC"}
        type={"CUSTOM"}
        secondaryPill={
          <Pill
            variant={"primary"}
            text={'Work Experience'}
          />
        }
      />
    )
  },
  argTypes: {},
};

export const UnclaimedCredential: StoryObj<CredentialProps> = {
  render: () => {
    return (
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
  },
  argTypes: {},
};

export const PublicCredential: StoryObj<CredentialProps> = {
  render: () => {
    return (
      <Credential
        chain={{ icon: "https://raw.githubusercontent.com/terra-money/validator-images/main/images/A2879F08F59FB0AF.jpg", label: "Terra" }}
        title="DAO Admin @ Orbital Command"
        readOnly={true}
        additionalDescription="Designing the new Station v3 wallet experience across both mobile and web. Also designed
        the AllianceDAO site and a few other TFL projects."
        description={"Issued by Orbital Command on 18 Oct 2023 at 15:55 UTC"}
        type={"DAO_ADMIN"}
        claimed={true}
      />
    )
  },
  argTypes: {},
};
