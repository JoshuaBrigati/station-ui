/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ReactComponent as WalletIcon } from "assets/icon/Wallet.svg"
import Input, { InputProps } from "./Input"
import { SearchIcon } from "assets"
import { Dropdown } from ".."

const meta: Meta<InputProps> = {
  title: "Components/Inputs/Base/Stories",
  component: Input,
  argTypes: {
    actionIcon: {
      control: {
        disable: true
      },
      description: "Adds action icon button to the Input.",
      table: {
        defaultValue: { summary: "{ icon: </>, onClick: () => {}}" },
        type: { summary: "object" },
      }
    },
    emoji: {
      control: {
        disable: true
      },
      description: "Adds emoji to the Input.",
      table: {
        defaultValue: { summary: "" },
        type: { summary: "string" },
      }
    },
    placeholder: {
      control: "text",
      defaultValue: "",
      description: "The placeholder of the Input.",
      table: {
        defaultValue: { summary: "" },
        type: { summary: "string" },
      }
    },
  },
} as Meta

export default meta

export const Playground: StoryObj<InputProps> = {
  render: (args) => (
    <Input
      {...args}
    />
  ),
  args: {
    placeholder: "This is a placeholder",
    emoji: "🔥",
  }
}

export const Default: StoryObj<InputProps> = {
  render: () => (
    <Input
      placeholder="Primary input"
    />
  ),
  argTypes: {
    placeholder: {
      control: false,
    },
  },
}

export const SubIcon: StoryObj<InputProps> = {
  render: () => (
    <Input
      actionIcon={{
        icon: <WalletIcon fill="var(--token-dark-900)" />,
        onClick: () => console.log("clicked")
      }}
      placeholder="Primary with sub icon"
    />
  ),
  argTypes: {
    placeholder: {
      control: false,
    },
  }
}

export const Small: StoryObj<InputProps> = {
  render: () => (
    <Input
      actionIcon={{
        icon: <SearchIcon fill="var(--token-dark-900)" />,
        onClick: () => console.log("search")
      }}
      placeholder="Search tokens, chains, contracts, etc"
      small
    />
  ),
  argTypes: {
    placeholder: {
      control: false,
    },
  }
}

export const Emoji: StoryObj<InputProps> = {
  render: () => (
    <Input
      emoji={"🔥"}
      placeholder="Primary with emoji"
    />
  ),
  argTypes: {
    placeholder: {
      control: false,
    },
  }
}

export const ExtraDropdown: StoryObj<InputProps> = {
  render: () => {
    const options = [
      { value: "all", label: "All Chains" },
      { value: "terra", label: "Terra" },
      { value: "axelar", label: "Axelar" },
      { value: "carbon", label: "Carbon" },
      { value: "cosmos", label: "Cosmos" },
      { value: "crescent", label: "Crescent" },
      { value: "juno", label: "Juno" },
      { value: "mars", label: "Mars" },
    ]

    const [selectedValue, setSelectedValue] = useState("all")
    return (
      <Input
        placeholder="Primary with emoji"
        extra={
          <Dropdown
            variant="textDisplay"
            options={options}
            onChange={(value) => setSelectedValue(value)}
            value={selectedValue}
            optionsAlign="right"
          />
        }
      />
    )
  },
  argTypes: {
    placeholder: {
      control: false,
    },
  }
}
