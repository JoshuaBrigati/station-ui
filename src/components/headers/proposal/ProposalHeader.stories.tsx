import type { Meta, StoryObj } from "@storybook/react"
import ProposalHeader, { ProposalHeaderProps } from "./ProposalHeader"

const meta: Meta<ProposalHeaderProps> = {
  title: "Components/Headers/Proposal/Stories",
  component: ProposalHeader,
  argTypes: {},
} as Meta

export default meta

export const PassedAndVoted: StoryObj<ProposalHeaderProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalHeader
          status="Passed"
          metaText={"4736 | Community pool spend proposal"}
          metaImage={"https://station-assets.terra.dev/img/chains/Terra.svg"}
          title={"OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)"}
          submittedDate={"3 July 2023, 18:49:03 UTC"}
          endsDate={"28 February 2024, 13:52:11 UTC"}
          voteValue="Yes"
        />
      </div>
    )
  },
}

export const RejectedAndNonVoted: StoryObj<ProposalHeaderProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalHeader
          status="Rejected"
          metaText={"4736 | Community pool spend proposal"}
          metaImage={"https://station-assets.terra.dev/img/chains/Terra.svg"}
          title={"OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)"}
          submittedDate={"3 July 2023, 18:49:03 UTC"}
          endsDate={"28 February 2024, 13:52:11 UTC"}
        />
      </div>
    )
  },
}

export const VotingNonVoted: StoryObj<ProposalHeaderProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalHeader
          status="Voting"
          metaText={"4736 | Community pool spend proposal"}
          metaImage={"https://station-assets.terra.dev/img/chains/Terra.svg"}
          title={"OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)"}
          submittedDate={"3 July 2023, 18:49:03 UTC"}
          endsDate={"28 February 2024, 13:52:11 UTC"}
        />
      </div>
    )
  },
}

export const DepositNonVoted: StoryObj<ProposalHeaderProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalHeader
          status="Deposit"
          metaText={"4736 | Community pool spend proposal"}
          metaImage={"https://station-assets.terra.dev/img/chains/Terra.svg"}
          title={"OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)"}
          submittedDate={"3 July 2023, 18:49:03 UTC"}
          endsDate={"28 February 2024, 13:52:11 UTC"}
        />
      </div>
    )
  },
}

export const NoMetaImg: StoryObj<ProposalHeaderProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalHeader
          status="Passed"
          metaText={"4736 | Community pool spend proposal"}
          metaImage={"https://station-assets.terra.dev/img/chains/T.svg"}
          title={"OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)"}
          submittedDate={"3 July 2023, 18:49:03 UTC"}
          endsDate={"28 February 2024, 13:52:11 UTC"}
        />
      </div>
    )
  },
}

export const ProposalPage: StoryObj<ProposalHeaderProps> = {
  render: () => {
    return (
      <ProposalHeader
        status="Passed"
        metaText={"4736 | Community pool spend proposal"}
        metaImage={"https://station-assets.terra.dev/img/chains/Terra.svg"}
        title={"OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)"}
        submittedDate={"3 July 2023, 18:49:03 UTC"}
        isProposalPage
      />
    )
  },
}
