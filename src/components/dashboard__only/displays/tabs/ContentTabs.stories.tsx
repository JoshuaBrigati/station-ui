import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import ContentTabs, { ContentTabsProps } from "./ContentTabs"

const meta: Meta<ContentTabsProps> = {
  title: "Dashboard/Displays/ContentTabs/Stories",
  component: ContentTabs,
  argTypes: {},
} as Meta

export default meta

const TabsComponent = () => {
  const [activeTabKey, setActiveTabKey] = useState("tab1");

  return (
    <ContentTabs
      activeTabKey={activeTabKey}
      tabs={[
        {
          key: "tab1",
          label: "Available Staking",
          onClick: () => setActiveTabKey("tab1"),
        },
        {
          key: "tab2",
          label: "My Staked Assets",
          onClick: () => setActiveTabKey("tab2"),
          notifications: 4,
        },
      ]}
    />
  )
}

export const Default: StoryObj<ContentTabsProps> = {
  render: () => (
    <TabsComponent />
  )
}
