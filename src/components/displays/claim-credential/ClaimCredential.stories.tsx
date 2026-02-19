import type { Meta, StoryObj } from "@storybook/react";
import ClaimCredential, { ClaimCredentialProps } from "./ClaimCredential";

const meta: Meta<ClaimCredentialProps> = {
  title: "Components/Displays/Claim Credential/Stories",
  component: ClaimCredential,
  argTypes: {},
} as Meta;

export default meta;

export const Default: StoryObj<ClaimCredentialProps> = {
  render: () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ClaimCredential
          icon={"https://raw.githubusercontent.com/terra-money/validator-images/main/images/A2879F08F59FB0AF.jpg"}
          type={"ROLE"}
          label={"DAO_ADMIN"}
          issuedBy={"Orbital Command"}
          expirationDate={"29 Nov 2024"}
        />
      </div>
    )
  },
  argTypes: {},
};
