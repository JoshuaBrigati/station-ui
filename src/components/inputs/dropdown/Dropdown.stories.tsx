/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import Dropdown, { DropdownProps } from "./Dropdown"
import MultiSelectDropdown from './MultiSelectDropdown'
import { InputWrapper, TokenSingleChainListItem } from "components"
import { tokenPrices, tokensBySymbol, walletBalance } from "../asset-selector/fakedata"

const meta: Meta<DropdownProps> = {
  title: "Components/Inputs/Dropdown/Stories",
  component: Dropdown,
  argTypes: {},
} as Meta

export default meta

export const Default: StoryObj<DropdownProps> = {
  render: () => {
    const options = [
      { value: "terra", label: "Terra", image: "https://station-assets.terra.dev/img/chains/Terra.svg" },
      { value: "axelar", label: "Axelar", image: "https://station-assets.terra.dev/img/chains/Axelar.svg" },
      { value: "carbon", label: "Carbon", image: "https://station-assets.terra.dev/img/chains/Carbon.svg" },
      { value: "cosmos", label: "Cosmos", image: "https://station-assets.terra.dev/img/chains/Cosmos.svg" },
      { value: "crescent", label: "Crescent", image: "https://station-assets.terra.dev/img/chains/Crescent.svg" },
      { value: "juno", label: "Juno", image: "https://station-assets.terra.dev/img/chains/Juno.svg" },
      { value: "mars", label: "Mars", image: "https://station-assets.terra.dev/img/chains/Mars.svg" },
    ]

    const [selectedValue, setSelectedValue] = useState("terra")

    return (
      <Dropdown
        variant="default"
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
    )
  },
  argTypes: {},
}

export const DefaultWidthOverride: StoryObj<DropdownProps> = {
  render: () => {
    const options = [
      { value: "terra", label: "Terra", image: "https://station-assets.terra.dev/img/chains/Terra.svg" },
      { value: "axelar", label: "Axelar", image: "https://station-assets.terra.dev/img/chains/Axelar.svg" },
      { value: "carbon", label: "Carbon", image: "https://station-assets.terra.dev/img/chains/Carbon.svg" },
      { value: "cosmos", label: "Cosmos", image: "https://station-assets.terra.dev/img/chains/Cosmos.svg" },
      { value: "crescent", label: "Crescent", image: "https://station-assets.terra.dev/img/chains/Crescent.svg" },
      { value: "juno", label: "Juno", image: "https://station-assets.terra.dev/img/chains/Juno.svg" },
      { value: "mars", label: "Mars", image: "https://station-assets.terra.dev/img/chains/Mars.svg" },
    ]

    const [selectedValue, setSelectedValue] = useState("terra")

    return (
      <Dropdown
        variant="default"
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
        width={350}
      />
    )
  },
  argTypes: {},
}

export const DefaultOptionsWidthOverride: StoryObj<DropdownProps> = {
  render: () => {
    const options = [
      { value: "terra", label: "Terra", image: "https://station-assets.terra.dev/img/chains/Terra.svg" },
      { value: "axelar", label: "Axelar", image: "https://station-assets.terra.dev/img/chains/Axelar.svg" },
      { value: "carbon", label: "Carbon", image: "https://station-assets.terra.dev/img/chains/Carbon.svg" },
      { value: "cosmos", label: "Cosmos", image: "https://station-assets.terra.dev/img/chains/Cosmos.svg" },
      { value: "crescent", label: "Crescent", image: "https://station-assets.terra.dev/img/chains/Crescent.svg" },
      { value: "juno", label: "Juno", image: "https://station-assets.terra.dev/img/chains/Juno.svg" },
      { value: "mars", label: "Mars", image: "https://station-assets.terra.dev/img/chains/Mars.svg" },
    ]

    const [selectedValue, setSelectedValue] = useState("terra")

    return (
      <Dropdown
        variant="default"
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
        width={250}
        optionsWidth={400}
      />
    )
  },
  argTypes: {},
}

export const Large: StoryObj<DropdownProps> = {
  render: () => {
    const options = [
      { value: "terra", label: "Terra", image: "https://station-assets.terra.dev/img/chains/Terra.svg" },
      { value: "axelar", label: "Axelar", image: "https://station-assets.terra.dev/img/chains/Axelar.svg" },
      { value: "carbon", label: "Carbon", image: "https://station-assets.terra.dev/img/chains/Carbon.svg" },
      { value: "cosmos", label: "Cosmos", image: "https://station-assets.terra.dev/img/chains/Cosmos.svg" },
      { value: "crescent", label: "Crescent", image: "https://station-assets.terra.dev/img/chains/Crescent.svg" },
      { value: "juno", label: "Juno", image: "https://station-assets.terra.dev/img/chains/Juno.svg" },
      { value: "mars", label: "Mars", image: "https://station-assets.terra.dev/img/chains/Mars.svg" },
    ]

    const [selectedValue, setSelectedValue] = useState("terra")

    return (
      <Dropdown
        variant="large"
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
    )
  },
  argTypes: {},
}

export const TextDisplay: StoryObj<DropdownProps> = {
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
      <Dropdown
        variant="textDisplay"
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
    )
  },
  argTypes: {},
}

export const Dashboard: StoryObj<DropdownProps> = {
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
      <Dropdown
        variant="dashboard"
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
        defaultValue="all"
      />
    )
  },
  argTypes: {},
}

export const DefaultWithSearch: StoryObj<DropdownProps> = {
  render: () => {
    const options = [
      { value: "terra", label: "Terra" },
      { value: "axelar", label: "Axelar" },
      { value: "carbon", label: "Carbon" },
      { value: "cosmos", label: "Cosmos" },
      { value: "crescent", label: "Crescent" },
      { value: "juno", label: "Juno" },
      { value: "mars", label: "Mars" },
    ]

    const [selectedValue, setSelectedValue] = useState("terra")

    return (
      <Dropdown
        variant="default"
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
        withSearch
      />
    )
  },
  argTypes: {},
}

export const LargeWithSearch: StoryObj<DropdownProps> = {
  render: () => {
    const options = [
      { value: "terra", label: "Terra" },
      { value: "axelar", label: "Axelar" },
      { value: "carbon", label: "Carbon" },
      { value: "cosmos", label: "Cosmos" },
      { value: "crescent", label: "Crescent" },
      { value: "juno", label: "Juno" },
      { value: "mars", label: "Mars" },
    ]

    const [selectedValue, setSelectedValue] = useState("terra")

    return (
      <Dropdown
        variant="large"
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
        withSearch
      />
    )
  },
  argTypes: {},
}

export const DashboardWithSearch: StoryObj<DropdownProps> = {
  render: () => {
    const options = [
      { value: "terra", label: "Terra" },
      { value: "axelar", label: "Axelar" },
      { value: "carbon", label: "Carbon" },
      { value: "cosmos", label: "Cosmos" },
      { value: "crescent", label: "Crescent" },
      { value: "juno", label: "Juno" },
      { value: "mars", label: "Mars" },
    ]

    const [selectedValue, setSelectedValue] = useState("terra")

    return (
      <Dropdown
        variant="dashboard"
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
        withSearch
        defaultValue="terra"
      />
    )
  },
  argTypes: {},
}

export const MultiSelect: StoryObj<DropdownProps> = {
  render: () => {
    const options = [
      { value: "terra", label: "Terra", image: "https://station-assets.terra.dev/img/chains/Terra.svg" },
      { value: "axelar", label: "Axelar", image: "https://station-assets.terra.dev/img/chains/Axelar.svg" },
      { value: "carbon", label: "Carbon", image: "https://station-assets.terra.dev/img/chains/Carbon.svg" },
      { value: "cosmos", label: "Cosmos", image: "https://station-assets.terra.dev/img/chains/Cosmos.svg" },
      { value: "crescent", label: "Crescent", image: "https://station-assets.terra.dev/img/chains/Crescent.svg" },
      { value: "juno", label: "Juno", image: "https://station-assets.terra.dev/img/chains/Juno.svg" },
      { value: "mars", label: "Mars", image: "https://station-assets.terra.dev/img/chains/Mars.svg" },
    ]

    const [selectedValues, setSelectedValues] = useState<string[]>([])

    const onChange = (value: string) => {
      if (selectedValues.includes(value)) {
        setSelectedValues(selectedValues.filter((item) => item !== value))
      } else {
        setSelectedValues([...selectedValues, value])
      }
    }

    return (
      <MultiSelectDropdown
        variant="default"
        options={options}
        onChange={onChange}
        values={selectedValues}
        multipleLabel="Chains"
        withSearch
      />
    )
  },
  argTypes: {},
}

export const DashboardMultiSelect: StoryObj<DropdownProps> = {
  render: () => {
    const options = [
      { value: "terra", label: "Terra", image: "https://station-assets.terra.dev/img/chains/Terra.svg" },
      { value: "axelar", label: "Axelar", image: "https://station-assets.terra.dev/img/chains/Axelar.svg" },
      { value: "carbon", label: "Carbon", image: "https://station-assets.terra.dev/img/chains/Carbon.svg" },
      { value: "cosmos", label: "Cosmos", image: "https://station-assets.terra.dev/img/chains/Cosmos.svg" },
      { value: "crescent", label: "Crescent", image: "https://station-assets.terra.dev/img/chains/Crescent.svg" },
      { value: "juno", label: "Juno", image: "https://station-assets.terra.dev/img/chains/Juno.svg" },
      { value: "mars", label: "Mars", image: "https://station-assets.terra.dev/img/chains/Mars.svg" },
    ]

    const [selectedValues, setSelectedValues] = useState<string[]>(["terra", "axelar"])

    const onChange = (value: string) => {
      if (selectedValues.includes(value)) {
        setSelectedValues(selectedValues.filter((item) => item !== value))
      } else {
        setSelectedValues([...selectedValues, value])
      }
    }

    return (
      <MultiSelectDropdown
        variant="dashboard"
        options={options}
        onChange={onChange}
        values={selectedValues}
        multipleLabel="Chains"
        withSearch
        defaultValues={["terra", "axelar"]}
      />
    )
  },
  argTypes: {},
}

export const DefaultOptionsTextOnly: StoryObj<DropdownProps> = {
  render: () => {
    const options = [
      { value: "terra", label: "Terra" },
      { value: "axelar", label: "Axelar" },
      { value: "carbon", label: "Carbon" },
      { value: "cosmos", label: "Cosmos" },
      { value: "crescent", label: "Crescent" },
      { value: "juno", label: "Juno" },
      { value: "mars", label: "Mars" },
    ]

    const [selectedValue, setSelectedValue]= useState("terra")

    return (
      <Dropdown
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
    )
  },
  argTypes: {},
}

export const DefaultWithLabel: StoryObj<DropdownProps> = {
  render: () => {
    const options = [
      { value: "terra", label: "Terra" },
      { value: "axelar", label: "Axelar" },
      { value: "carbon", label: "Carbon" },
      { value: "cosmos", label: "Cosmos" },
      { value: "crescent", label: "Crescent" },
      { value: "juno", label: "Juno" },
      { value: "mars", label: "Mars" },
    ]

    const [selectedValue, setSelectedValue] = useState("terra")

    return (
      <InputWrapper label="Chains">
        <Dropdown
          options={options}
          onChange={(value) => setSelectedValue(value)}
          value={selectedValue}
        />
      </InputWrapper>
    )
  },
  argTypes: {},
}

export const ChildrenOverride: StoryObj<DropdownProps> = {
  render: () => {
    const options: { value: string; label: string; image?: string }[] =
      Object.values(tokensBySymbol).map(item => ({
        value: item.symbol,
        label: item.symbol,
        image: item.tokenIcon,
      }))

    const [selectedValue, setSelectedValue] = useState("LUNA")

    return (
      <Dropdown
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      >
        {Object.keys(tokensBySymbol).map((token, index) => (
          <TokenSingleChainListItem
            key={index}
            priceNode={<span>$ {tokenPrices[token] * Number(walletBalance[token]) ?? 0}</span>}
            tokenImg={tokensBySymbol[token].tokenIcon}
            symbol={tokensBySymbol[token].symbol}
            amountNode={<span>{walletBalance[token] ?? 0}</span>}
            chain={{ icon: tokensBySymbol[token].chainIcon, label: tokensBySymbol[token].chainName }}
            onClick={() => setSelectedValue(token)}
          />
        ))}
      </Dropdown>
    )
  },
  argTypes: {},
}

export const DashboardChildrenOverride: StoryObj<DropdownProps> = {
  render: () => {
    const options: { value: string; label: string; image?: string }[] =
      Object.values(tokensBySymbol).map(item => ({
        value: item.symbol,
        label: item.symbol,
        image: item.tokenIcon,
      }))

    const [selectedValue, setSelectedValue] = useState("LUNA")

    return (
      <Dropdown
        variant="dashboard"
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      >
        {Object.keys(tokensBySymbol).map((token, index) => (
          <TokenSingleChainListItem
            key={index}
            priceNode={<span>$ {tokenPrices[token] * Number(walletBalance[token]) || 0}</span>}
            tokenImg={tokensBySymbol[token].tokenIcon}
            symbol={tokensBySymbol[token].symbol}
            amountNode={<span>{walletBalance[token] || 0}</span>}
            chain={{ icon: tokensBySymbol[token].chainIcon, label: tokensBySymbol[token].chainName }}
            onClick={() => setSelectedValue(token)}
          />
        ))}
      </Dropdown>
    )
  },
  argTypes: {},
}

export const ChildrenOverrideWithSearch: StoryObj<DropdownProps> = {
  render: () => {
    const options: { value: string; label: string; image?: string }[] =
      Object.values(tokensBySymbol).map(item => ({
        value: item.symbol,
        label: item.symbol,
        image: item.tokenIcon,
      }))

    const [selectedValue, setSelectedValue] = useState("LUNA")
    const [searchValue, setSearchValue] = useState("")

    const filteredOptions = options.filter(token =>
      token.value.toLowerCase().includes(searchValue.toLowerCase()) ||
      token.label.toLowerCase().includes(searchValue.toLowerCase())
    )
      .map(token => token.label)

    return (
      <Dropdown
        options={options}
        onChange={(value) => setSelectedValue(value)}
        value={selectedValue}
        withSearch
        setSearchValue={setSearchValue}
      >
        {Object.keys(tokensBySymbol).map((token, index) => {
          if (!filteredOptions.includes(token)) return null

          return (
            <TokenSingleChainListItem
              key={index}
              priceNode={<span>$ {tokenPrices[token] * Number(walletBalance[token]) || 0}</span>}
              tokenImg={tokensBySymbol[token].tokenIcon}
              symbol={tokensBySymbol[token].symbol}
              amountNode={<span>{walletBalance[token] || 0}</span>}
              chain={{ icon: tokensBySymbol[token].chainIcon, label: tokensBySymbol[token].chainName }}
              onClick={() => setSelectedValue(token)}
            />
          )
        })}
      </Dropdown>
    )
  },
  argTypes: {},
}
