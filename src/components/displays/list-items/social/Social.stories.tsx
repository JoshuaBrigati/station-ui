import type { Meta, StoryObj } from "@storybook/react";
import Social, { SocialProps } from "./Social";
import { GithubIcon, TelegramIcon } from "assets";

const meta: Meta<SocialProps> = {
  title: "Components/List Items/Social/Stories",
  component: Social,
  argTypes: {},
} as Meta;

export default meta;

export const LinkedSocial: StoryObj<SocialProps> = {
  render: () => {
    return (
      <Social
        title="GitHub"
        icon={<GithubIcon width={28} height={28} fill="var(--token-dark-900)" />}
        username={'@midnyt_simlyn'}
        connected={true}
      />
    )
  },
  argTypes: {},
};

export const UnlinkedSocial: StoryObj<SocialProps> = {
  render: () => {
    return (
      <Social
        title="Telegram"
        icon={<TelegramIcon width={28} height={28} fill="var(--token-dark-900)" />}
        connected={false}
      />
    )
  },
  argTypes: {},
};
