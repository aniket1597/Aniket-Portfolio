export type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  description?: {
    intro: string;
    bullets: string[];
    outro: string;
  };
};

export const projects: Project[] = [
  {
    title: "SAP Datasphere Implementation",
    category: "Data Integration & Modeling",
    tools: "SAP Datasphere, SAP Business Data Cloud, SAP BW4/HANA, SAC",
    image: "/images/bdc.png",
    description: {
      intro:
        "Executed multiple end-to-end SAP Datasphere implementations across industries, driving modern data platform transformation.",
      bullets: [
        "Cross-system data integration (SAP & non-SAP sources)",
        "Enterprise-grade data modeling and performance optimization",
        "Security architecture design, including role-based and hierarchical access controls",
        "Definition of target (to-be) architecture aligned with scalability and governance standards",
      ],
      outro:
        "Focused on delivering robust, future-proof data solutions that empower advanced analytics and business intelligence.",
    },
  },
  {
    title: "Oracle Cloud Migration",
    category: "Cloud Migration",
    tools: "Oracle Cloud, MySQL, OKA",
    image: "/images/radix.png",
  },
  {
    title: "Social Cloud – Sharing Compute Resources via Social Networks",
    category: "Cloud Architecture",
    tools: "Microsoft Azure, OSSN, Distributed Computing, Friend Trust Algorithm",
    image: "/images/bond.png",
    description: {
      intro:
        "Designed and developed a distributed computing platform leveraging social networks to enable efficient sharing of underutilized computing resources.",
      bullets: [
        "Architected the complete solution, including workflow design and system architecture",
        "Built a social platform (OSSN-based) to facilitate peer-to-peer resource sharing",
        "Introduced a pay-as-you-go model to incentivize resource providers",
        "Improved compute utilization by dynamically distributing workloads across connected users",
        "Deployed the solution on Microsoft Azure with scalable backend infrastructure",
      ],
      outro: "",
    },
  },
];

