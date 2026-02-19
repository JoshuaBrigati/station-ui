import type { Meta, StoryObj } from "@storybook/react";
import Profile, { ProfileProps } from "./Profile";
import { DiscordIcon, Flex, GithubIcon, Social, TelegramIcon } from "components";

const meta: Meta<ProfileProps> = {
  title: "Components/Displays/Profile/Stories",
  component: Profile,
  argTypes: {},
} as Meta;

export default meta;

export const DefaultProfile: StoryObj<ProfileProps> = {
  render: () => {
    return (
      <Profile
        profileImg={"https://raw.githubusercontent.com/terra-money/validator-images/main/images/F87ADDB700C0CC94.jpg"}
        name="Ib Warnerbring"
        description="Product Designer"
        profileLabel={"Profile Image"}
        profileCoverImg={"https://raw.githubusercontent.com/terra-money/validator-images/main/images/F87ADDB700C0CC94.jpg"}
        onClickEdit={() => alert('Edit')}
        onClickView={() => alert('View')}
        socials={
          <Flex gap={24}>
            <Social
              title="GitHub"
              icon={<GithubIcon width={28} height={28} fill="var(--token-dark-900)" />}
              username={'@midnyt_simlyn'}
              connected={true}
            />
            <Social
              title="Discord"
              icon={<DiscordIcon width={28} height={28} fill="var(--token-dark-900)" />}
              username={'STRAYLIGHT#3670'}
              connected={true}
            />
            <Social
              title="Telegram"
              icon={<TelegramIcon width={28} height={28} fill="var(--token-dark-900)" />}
              connected={false}
            />
          </Flex>
        }
      />
    )
  },
  argTypes: {},
};
