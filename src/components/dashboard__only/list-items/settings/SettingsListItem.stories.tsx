/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Button, Flex, FlexColumn, Input } from "components"
import SettingsLineItem, { SettingsListItemProps, SettingsDropdown } from "./SettingsListItem"
import ListItemWrapperCard from "../wrapper-card/ListItemWrapperCard"
import styles from "./SettingsListItem.module.scss"

const meta: Meta = {
  title: "Dashboard/List Items/Settings/Stories",
  component: SettingsLineItem,
} as Meta

export default meta

export const WithWrapperCard: StoryObj<SettingsListItemProps> = {
  render: () => {
    const [selectedLanguageValue, setSelectedLanguageValue] = useState("English")
    const [selectedCurrencyValue, setSelectedCurrencyValue] = useState("USD")

    return (
      <ListItemWrapperCard>
        <FlexColumn gap={24} align="stretch">
          <SettingsLineItem
            title={"Language"}
            subTitle={selectedLanguageValue === "English" ? "English (default)" : selectedLanguageValue}
            extra={
              <SettingsDropdown
                value={selectedLanguageValue}
                options={[
                  { value: "English", label: "English" },
                  { value: "Korean", label: "Korean" },
                  { value: "Chinese", label: "Chinese" },
                  { value: "Japanese", label: "Japanese" },
                ]}
                onChange={(value) => setSelectedLanguageValue(value)}
              />
            }
          />

          <SettingsLineItem
            title={"Currency"}
            subTitle={selectedCurrencyValue === "USD" ? "$ USD (default)" : selectedCurrencyValue}
            extra={
              <SettingsDropdown
                value={selectedCurrencyValue}
                options={[
                  { value: "USD", label: "$ USD" },
                  { value: "KRW", label: "KRW" },
                  { value: "CNY", label: "CNY" },
                  { value: "JPY", label: "JPY" },
                ]}
                onChange={(value) => setSelectedCurrencyValue(value)}
              />
            }
          />
        </FlexColumn>
      </ListItemWrapperCard>
    )
  },
  argTypes: {},
}

export const Language: StoryObj<SettingsListItemProps> = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("English")
    return (
      <SettingsLineItem
        title={"Language"}
        subTitle={selectedValue === "English" ? "English (default)" : selectedValue}
        extra={
          <SettingsDropdown
            value={selectedValue}
            options={[
              { value: "English", label: "English" },
              { value: "Korean", label: "Korean" },
              { value: "Chinese", label: "Chinese" },
              { value: "Japanese", label: "Japanese" },
            ]}
            onChange={(value) => setSelectedValue(value)}
          />
        }
      />
    )
  },
  argTypes: {},
}

export const Currency: StoryObj<SettingsListItemProps> = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("USD")
    return (
      <SettingsLineItem
        title={"Currency"}
        subTitle={selectedValue === "USD" ? "$ USD (default)" : selectedValue}
        extra={
          <SettingsDropdown
            value={selectedValue}
            options={[
              { value: "USD", label: "$ USD" },
              { value: "KRW", label: "KRW" },
              { value: "CNY", label: "CNY" },
              { value: "JPY", label: "JPY" },
            ]}
            onChange={(value) => setSelectedValue(value)}
          />
        }
      />
    )
  },
  argTypes: {},
}

export const DeveloperMode: StoryObj<SettingsListItemProps> = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("Disabled")
    return (
      <SettingsLineItem
        title={"Developer Mode"}
        subTitle={selectedValue === "Disabled" ? "Disabled (default)" : selectedValue}
        extra={
          <SettingsDropdown
            value={selectedValue}
            options={[
              { value: "Disabled", label: "Disabled" },
              { value: "Enabled", label: "Enabled" },
            ]}
            onChange={(value) => setSelectedValue(value)}
          />
        }
      />
    )
  },
  argTypes: {},
}

export const GasAdjustment: StoryObj<SettingsListItemProps> = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("Custom")
    const [customValue, setCustomValue] = useState(1.0)
    return (
      <SettingsLineItem
        title={"Developer Mode"}
        subTitle={selectedValue}
        extra={
          <Flex gap={16} style={{ width: "unset" }}>
            <SettingsDropdown
              value={selectedValue}
              options={[
                { value: "Standard", label: "Standard 1.0" },
                { value: "Low", label: "Low 0.5" },
                { value: "High", label: "High 2.0" },
                { value: "Yolo", label: "Yolo 5.0" },
                { value: "Custom", label: "Custom" },
              ]}
              onChange={(value) => setSelectedValue(value)}
            />

            {selectedValue === "Custom" && (
              <Input
                placeholder={customValue.toString()}
                onChange={(e) => setCustomValue(Number(e.target.value))}
                wrapperClassName={styles.input__wrapper__override}
                className={styles.input__override}
              />
            )}

            <Button
              variant="primary"
              label={"Set"}
              onClick={() => {}}
              className={styles.button__override}
            />
          </Flex>
        }
      />
    )
  },
  argTypes: {},
}
