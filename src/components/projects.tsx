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
  skills?: { label: string; value: string }[];
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
    title: "Technical Skills",
    category: "Core Competencies",
    tools: "",
    image: "/images/tech_skills.png",
    skills: [
      {
        label: "SAP",
        value:
          "SAP Datasphere, SAP Business Data Cloud (end-to-end implementation, integration, security, architecture)",
      },
      {
        label: "Azure",
        value:
          "IIS, VM, VPN (S2S), SQL Database, Blob Storage, Web Hosting (1.5+ yrs exp, 3+ yrs hands-on)",
      },
      {
        label: "AWS",
        value:
          "EC2, Lambda, VPC, DynamoDB, S3, CloudWatch (incl. Spot Instances)",
      },
      {
        label: "Databases",
        value: "SAP HANA, SQL (MySQL), MongoDB",
      },
      {
        label: "OS",
        value: "Windows, Linux (Ubuntu, RedHat)",
      },
      {
        label: "Networking",
        value: "TCP/IP, OSI, routers/switches, Cisco Packet Tracer",
      },
      {
        label: "System Admin",
        value:
          "Windows Server, AD, Exchange, O365, Linux setup & configuration",
      },
    ],
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

