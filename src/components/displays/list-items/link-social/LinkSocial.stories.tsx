import type { Meta, StoryObj } from "@storybook/react";
import LinkSocial, { LinkSocialProps } from "./LinkSocial";
import { GithubIcon, TelegramIcon } from "assets";

const meta: Meta<LinkSocialProps> = {
  title: "Components/List Items/Link Social/Stories",
  component: LinkSocial,
  argTypes: {},
} as Meta;

export default meta;

export const LinkedSocial: StoryObj<LinkSocialProps> = {
  render: () => {
    return (
      <LinkSocial
        title="GitHub"
        icon={<GithubIcon width={32} height={32} fill="var(--token-dark-900)" />}
        username={'@midnyt_simlyn'}
        connected={true}
        onVerifyClick={() => alert('Verified')}
      />
    )
  },
  argTypes: {},
};

export const UnlinkedSocial: StoryObj<LinkSocialProps> = {
  render: () => {
    return (
      <LinkSocial
        title="Telegram"
        icon={<TelegramIcon width={28} height={28} fill="var(--token-dark-900)" />}
        connected={false}
      />
    )
  },
  argTypes: {},
};
