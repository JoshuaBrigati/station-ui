import { ProposalCardProps } from "./ProposalCard"

const proposalData = [
  {
    proposal: {
      status: "Passed",
      metaText: "473 | Community pool spend proposal",
      metaImage: "https://station-assets.terra.dev/img/chains/Osmosis.svg",
      title: "$100k KUJI<>MNTA Token Swap with Kujira Community Pool",
      submittedDate: "22 Jan 2024, 18:49:03 UTC",
      endsDate: "22 Jan 2024, 18:49:03 UTC",
      voteValue: "Yes",
    },
    progressData: [
      { type: "yes", percent: "60%" },
      { type: "abstain", percent: "2%" },
      { type: "no", percent: "5%" },
      { type: "noWithVeto", percent: "0.5%" },
    ],
    threshold: 32,
    progressLabelOverride: "Pass Threshold",
  },
  {
    proposal: {
      status: "Rejected",
      metaText: "232 | Community pool spend proposal",
      metaImage: "https://station-assets.terra.dev/img/chains/Akash.svg",
      title: "2023 Q4 Community Support Proposal",
      submittedDate: "22 Jan 2024, 18:49:03 UTC",
      endsDate: "22 Jan 2024, 18:49:03 UTC",
      voteValue: "Yes",
    },
    progressData: [
      { type: "yes", percent: "18%" },
      { type: "abstain", percent: "5%" },
      { type: "no", percent: "45%" },
      { type: "noWithVeto", percent: "0.5%" },
    ],
    threshold: 32,
    progressLabelOverride: "Pass Threshold",
  },
  {
    proposal: {
      status: "Voting",
      metaText: "4775 | Community pool spend proposal",
      metaImage: "https://station-assets.terra.dev/img/chains/Terra.svg",
      title: "Orne.io - Legal audit & Grant Proposal",
      submittedDate: "13 Jan 2024, 18:49:03 UTC",
      endsDate: "18 Mar 2024, 18:49:03 UTC",
    },
    progressData: [
      { type: "yes", percent: "14%" },
      { type: "abstain", percent: "3%" },
      { type: "no", percent: "5%" },
      { type: "noWithVeto", percent: "0.5%" },
    ],
    threshold: 32,
    progressLabelOverride: "Pass Threshold",
  },
  {
    proposal: {
      status: "Voting",
      metaText: "231 | Software upgrade proposal",
      metaImage: "https://station-assets.terra.dev/img/chains/Akash.svg",
      title: "v0.26.0",
      submittedDate: "13 Jan 2024, 18:49:03 UTC",
      endsDate: "18 Mar 2024, 18:49:03 UTC",
    },
    progressData: [
      { type: "yes", percent: "14%" },
      { type: "abstain", percent: "3%" },
      { type: "no", percent: "5%" },
      { type: "noWithVeto", percent: "0.5%" },
    ],
    threshold: 32,
    progressLabelOverride: "Pass Threshold",
  },
  {
    proposal: {
      status: "Deposit",
      metaText: "4736 | Community pool spend proposal",
      metaImage: "https://station-assets.terra.dev/img/chains/Terra.svg",
      title: "OFFICIAL “Revitalizing Terra: A Backbone Labs and Eris Protocol Collaboration” (Not A Grant)",
      submittedDate: "13 Jan 2024, 18:49:03 UTC",
      endsDate: "18 Mar 2024, 18:49:03 UTC",
    },
    progressData: [
      { type: "deposit", percent: "66%" },
    ],
    threshold: 66,
    progressLabelOverride: "66%",
  },
  {
    proposal: {
      status: "Voting",
      metaText: "4736 | Community pool spend proposal",
      metaImage: "https://station-assets.terra.dev/img/chains/Terra.svg",
      title: "More DeFi",
      submittedDate: "13 Jan 2024, 18:49:03 UTC",
      endsDate: "18 Mar 2024, 18:49:03 UTC",
      voteValue: "Yes",
    },
    progressData: [
      { type: "yes", percent: "14%" },
      { type: "abstain", percent: "3%" },
      { type: "no", percent: "5%" },
      { type: "noWithVeto", percent: "0.5%" },
    ],
    threshold: 32,
    progressLabelOverride: "Pass Threshold",
  },
  // {
  //   proposal: {
  //     status: "Passed",
  //     metaText: "4775 | Community pool spend proposal",
  //     metaImage: "https://station-assets.terra.dev/img/chains/Osmosis.svg",
  //     title: "Deploy factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn-KUJI FIN Market",
  //     submittedDate: "22 Jan 2024, 18:49:03 UTC",
  //     endsDate: "22 Jan 2024, 18:49:03 UTC",
  //     voteValue: "Yes",
  //   },
  //   progressData: [
  //     { type: "yes", percent: "60%" },
  //     { type: "abstain", percent: "2%" },
  //     { type: "no", percent: "5%" },
  //     { type: "noWithVeto", percent: "0.5%" },
  //   ],
  //   threshold: 32,
  //   progressLabelOverride: "Pass Threshold",
  // },
] as ProposalCardProps[]

export { proposalData }
