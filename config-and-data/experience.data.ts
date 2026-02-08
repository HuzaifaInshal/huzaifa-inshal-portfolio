export const experienceData = [
  {
    company: "Starling Bank",
    title: "Software Engineer",
    period: "2023 — 2025",
    short: "Award winning digital bank",
    location: "London, United Kingdom",
    industry: "Banking",
    website: "https://www.starlingbank.com",
    details: [
      "As a member of the Frontend Foundations team working on the Online Bank, I develop customer-facing features and integrate the design system to ensure a seamless and accessible user experience.",
      "Starling Bank is an award-winning, digital challenger bank disrupting the financial services industry with its transparent and customer-focused approach to banking."
    ]
  },
  {
    company: "Crowdhäus",
    title: "Software Engineer",
    period: "2021 — 2022",
    short: "Property discovery application",
    location: "London, United Kingdom",
    industry: "Real Estate",
    website: "https://www.crowdhaus.example",
    details: [
      "I have worked on and helped design key application features, including authentication, in-app messaging, property details, and a supporting web application.",
      "Crowdhäus was a property discovery application with 25,000+ downloads and 400+ five-star reviews, which allowed users across the United Kingdom to discover homes to buy and rent."
    ]
  }
];

export type ExperienceItem = (typeof experienceData)[number];
