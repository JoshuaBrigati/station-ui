import type { Meta, StoryObj } from "@storybook/react"
import ValidatorPageHeader, { ValidatorPageHeaderProps } from "./ValidatorPageHeader"

const meta: Meta = {
  title: 'Dashboard/Headers/ValidatorPageHeader/Stories',
  component: ValidatorPageHeader,
} as Meta;

export default meta;

export const Horizontal: StoryObj<ValidatorPageHeaderProps> = {
  render: () =>
    <ValidatorPageHeader
      validatorIcon={"https://raw.githubusercontent.com/terra-money/validator-images/main/images/A2879F08F59FB0AF.jpg"}
      validatorName={"Orbital Command"}
      validatorURL={"https://orbitalcommand.io"}
      validatorDescription={"Secure, enterprise-grade validator. Committed to investing heavily into educating, promoting, and expanding the Terra community and ecosystem. Delegate to OC to eliminate slashing risk, earn more $LUNA, and support $LUNA price appreciation through community growth."}
      shareOnClick={() => console.log("share")}
      stakeOnClick={() => console.log("stake")}
      isVerified={true}
    />,
};