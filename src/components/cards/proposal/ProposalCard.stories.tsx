import type { Meta, StoryObj } from "@storybook/react"
import ProposalCard, { ProposalCardProps } from "./ProposalCard"
import ProposalSkeleton from "./skeleton/ProposalSkeleton"
import { proposalData } from "./data"

const meta: Meta<ProposalCardProps> = {
  title: "Components/Cards/Proposal/Stories",
  component: ProposalCard,
  argTypes: {},
} as Meta

export default meta

export const NotVotedOn__VotingProposal: StoryObj<ProposalCardProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalCard
          proposal={{
            status: "Voting",
            metaText: "4736 | Community pool spend proposal",
            metaImage: "https://station-assets.terra.dev/img/chains/Terra.svg",
            title: "OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)",
            submittedDate: "3 July 2023, 18:49:03 UTC",
            endsDate: "28 February 2024, 13:52:11 UTC",
          }}
          progressData={[
            { type: "yes", percent: "15%" },
            { type: "abstain", percent: "2%" },
            { type: "no", percent: "5%" },
            { type: "noWithVeto", percent: "0.5%" },
          ]}
          threshold={32}
          progressLabelOverride={"Pass Threshold"}
        />
      </div>
    )
  },
  argTypes: {},
}

export const VotedOn__VotingProposal: StoryObj<ProposalCardProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalCard
          proposal={{
            status: "Voting",
            metaText: "4736 | Community pool spend proposal",
            metaImage: "https://station-assets.terra.dev/img/chains/Terra.svg",
            title: "OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)",
            submittedDate: "3 July 2023, 18:49:03 UTC",
            endsDate: "28 February 2024, 13:52:11 UTC",
            voteValue: "Yes",
          }}
          progressData={[
            { type: "yes", percent: "15%" },
            { type: "abstain", percent: "2%" },
            { type: "no", percent: "5%" },
            { type: "noWithVeto", percent: "0.5%" },
          ]}
          threshold={32}
          progressLabelOverride={"Pass Threshold"}
        />
      </div>
    )
  },
  argTypes: {},
}

export const VotedOn__Passed: StoryObj<ProposalCardProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalCard
          proposal={{
            status: "Passed",
            metaText: "4736 | Community pool spend proposal",
            metaImage: "https://station-assets.terra.dev/img/chains/Terra.svg",
            title: "OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)",
            submittedDate: "3 July 2023, 18:49:03 UTC",
            endsDate: "28 February 2024, 13:52:11 UTC",
            voteValue: "Yes",
          }}
          progressData={[
            { type: "yes", percent: "55%" },
            { type: "abstain", percent: "8%" },
            { type: "no", percent: "12%" },
            { type: "noWithVeto", percent: "0.5%" },
          ]}
          threshold={32}
          progressLabelOverride={"Pass Threshold"}
        />
      </div>
    )
  },
  argTypes: {},
}

export const VotedOn__Rejected: StoryObj<ProposalCardProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalCard
          proposal={{
            status: "Rejected",
            metaText: "4736 | Community pool spend proposal",
            metaImage: "https://station-assets.terra.dev/img/chains/Terra.svg",
            title: "OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)",
            submittedDate: "3 July 2023, 18:49:03 UTC",
            endsDate: "2 February 2024, 13:52:11 UTC",
            voteValue: "Yes",
          }}
          progressData={[
            { type: "yes", percent: "16%" },
            { type: "abstain", percent: "6%" },
            { type: "no", percent: "55%" },
            { type: "noWithVeto", percent: "0.5%" },
          ]}
          threshold={32}
          progressLabelOverride={"Pass Threshold"}
        />
      </div>
    )
  },
  argTypes: {},
}

export const Deposit: StoryObj<ProposalCardProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalCard
          proposal={{
            status: "Deposit",
            metaText: "4740 | Text proposal",
            metaImage: "https://station-assets.terra.dev/img/chains/Terra.svg",
            title: "OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)",
            submittedDate: "28 July 2023, 13:52:11 UTC",
            endsDate: "28 February 2024, 13:52:11 UTC",
            voteValue: "Yes",
          }}
          progressData={[
            { type: "deposit", percent: "65%" },
          ]}
          threshold={65}
          progressLabelOverride={"65%"}
        />
      </div>
    )
  },
  argTypes: {},
}

export const DepositMet: StoryObj<ProposalCardProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalCard
          proposal={{
            status: "Deposit",
            metaText: "4740 | Text proposal",
            metaImage: "https://station-assets.terra.dev/img/chains/Terra.svg",
            title: "OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)",
            submittedDate: "28 July 2023, 13:52:11 UTC",
            endsDate: "28 February 2024, 13:52:11 UTC",
            voteValue: "Yes",
          }}
          progressData={[
            { type: "deposit", percent: "100%" },
          ]}
          threshold={100}
          progressLabelOverride={"100%"}
        />
      </div>
    )
  },
  argTypes: {},
}

export const Example: StoryObj<ProposalCardProps> = {
  render: () => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px"
        }}
      >
        {proposalData.map((data, index) => (
          <ProposalCard
            key={index}
            proposal={data.proposal}
            progressData={data.progressData}
            threshold={data.threshold}
            progressLabelOverride={data.progressLabelOverride}
          />
        ))}
        <ProposalSkeleton />
      </div>
    )
  },
  argTypes: {},
}

export const Skeleton: StoryObj<ProposalCardProps> = {
  render: () => {
    return (
      <div style={{ width: "342px" }}>
        <ProposalSkeleton />
      </div>
    )
  },
  argTypes: {},
}
