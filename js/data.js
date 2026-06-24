// Edit this file to add your real projects and images.
// To add an image, drop the file in /images and set the `image` field,
// e.g. image: "images/my-project.jpg". Leave it null to show a placeholder.

const PROJECTS = [
  {
    slug: "smartify",
    title: "Smartify",
    tag: "Product | UX/UI",
    description: "An arts & culture app that helps people get more out of every museum visit.",
    year: "2022",
    disciplines: ["Product Design", "Interaction Design", "Mobile Design"],
    image: "images/smartify.png",
    card: {
      bg: "#f4d06b",
      fg: "#000000",
      logo: "images/smartify/logo.svg",
      tagline: "Redesigned the whole mobile app experience from scratch.",
      phone: "images/smartify/phone.png",
      tags: ["Product | UXUI", "Mobile Design"],
    },
    intro:
      "Smartify is an arts and culture mobile app built to help people have richer, " +
      "more meaningful experiences inside museums and galleries.",
    caseStudy: {
      intro: [
        "Smartify makes museums and cultural institutions accessible for a global audience through innovative technology and engaging storytelling — helping to inspire, educate and entertain audiences both inside and outside the gallery walls.",
        "With Smartify, users can listen to onsite tours while walking through the galleries, buy museum tickets, explore artwork and artist stories by searching or scanning any piece, and even share their collections with other users.",
      ],
      hero: {
        src: "images/smartify/CZjpj7M4So9ps53GjuFUeDBQ.png",
        alt: "Smartify app screens — gallery, profile and featured artwork",
      },
      sections: [
        {
          heading: "A broken journey",
          body: [
            "By the end of 2021, Smartify wasn’t doing so well. Even though new user counts kept increasing, the number of people who came back after their first visit kept dropping. Research showed there wasn’t a clear journey for users — the app’s sections felt disconnected, and it wasn’t engaging enough to hook people the way it should.",
            "The team decided to do a complete redesign. They set up a discovery and started talking to both users and non-users, asking one question: how do we improve the app to keep people in?",
          ],
          media: {
            layout: "full",
            images: [
              {
                src: "images/smartify/hsFTnzWovn6e0IddoLrNKFJ8s.png",
                alt: "Smartify Explore screen — art and culture near you",
                narrow: true,
              },
            ],
          },
        },
        {
          heading: "Learning from others",
          body: [
            "Research pointed to a clear opportunity: users wanted to connect with each other. The community of art enthusiasts is narrow, and people want to meet others to share what they know and talk about what they love — art.",
            "On the other side, museums and investors needed to keep revenue flowing, so they also needed a space to showcase what they have and the experiences inside their galleries.",
            "Smartify wanted to become the place to learn more about art, connect with museums, have wonderful experiences inside them or at home — and now, connect with other interesting people.",
          ],
        },
        {
          heading: "The experience",
          body: [
            "By the time I joined, there was enough research and the team already had clear hypotheses and a solid idea of the user journey. My job was to help bring it all together on screen — designing the complete app experience.",
          ],
          media: {
            layout: "full",
            images: [
              {
                src: "images/smartify/JtEvn9Ne7dPjer1Jj872UslWvsE.png",
                alt: "Early Smartify wireframes",
                caption: "Some of our first wireframes of the app",
              },
            ],
          },
        },
        {
          heading: "Bringing it all together",
          body: [
            "To bring users back, we redesigned the whole home page and added a new Explore page, highlighting different content based on preferences, location and recently seen pieces — encouraging people to return on a daily or weekly basis.",
            "The entire app was redesigned with a fresh look that fit the company’s visual identity better. We improved the copy and even redesigned the Smartify logo to give it a more modern feel.",
            "We added collections and favorites to the profile, so users could share their loved artworks and artists with fellow enthusiasts.",
          ],
          media: {
            layout: "stack",
            images: [
              {
                src: "images/smartify/HhQDAZ2x6mRHGndwt8ZMZjzzFaE.png",
                alt: "Redesigned onboarding screens",
              },
              {
                src: "images/smartify/eXlE72wlr7YpG2VlqNTHjbd3530.png",
                alt: "Profile, artwork and collections screens",
              },
              {
                src: "images/smartify/rzISF92Cx7O9FOXrt9LD8405KQ0.png",
                alt: "Venue, map and artist screens",
              },
            ],
          },
        },
        {
          heading: "Final note",
          body: [
            "Smartify is an awesome application that provides a complete experience to art lovers, especially inside museums. There’s a lot more to come — we even designed a bunch of new ideas for future iterations that, unfortunately, I can’t share here.",
          ],
        },
      ],
      role:
        "Working alongside another designer, I played a key role in revamping the app’s interface. Drawing from existing user research, I contributed to crafting the wireframes, establishing consistent visual standards, and building the app’s design system. On this project I reported to the Head of Design.",
      skills: ["Wireframing", "Prototyping", "Visual Design", "User Testing", "Figma"],
    },
  },
  {
    slug: "jusbrasil",
    title: "Jusbrasil",
    tag: "Mobile | UX/UI",
    description: "Making legal information accessible to everyone.",
    year: "2020",
    disciplines: ["UX Research", "Product Design", "Mobile Design"],
    image: "images/jusbrasil.png",
    imageFit: "contain",
    imageBg: "#2680d9",
    imagePosition: "center bottom",
    card: {
      bg: "#6EA5DB",
      fg: "#000000",
      logo: "images/jusbrasil/brand.png",
      title: "Jusbrasil",
      tagline: "Create a new mobile app and increased user base.",
      phone: "images/jusbrasil/phone.png",
      tags: ["Mobile Design", "UX Design"],
    },
    intro: "Jusbrasil makes legal information accessible.",
    caseStudy: {
      intro: [
        "In Brazil, Jusbrasil collects, organizes and shares official public information, helping millions of Brazilians access legal notices. By the end of 2019, Jusbrasil had a product called Escritório Online — a SaaS app focused on helping lawyers manage their clients (a sort of CRM, with extras).",
        "A mobile version of Escritório Online had been built, but it never took off: usage was very low, store ratings were terrible, and most people trying to open the app weren’t even lawyers. That’s when we decided to deep-dive into research.",
      ],
      hero: {
        src: "images/jusbrasil/tRSgYdDYrypiTACyCs5gGqFZOxU.png",
        alt: "Jusbrasil lawsuit timeline screen",
      },
      sections: [
        {
          type: "phases",
          heading: "Plan of attack",
          phases: [
            { title: "Discover", items: ["Call users", "Quantitative research", "Workshop"] },
            { title: "Define & ideate", items: ["Affinity diagram", "Problem statement", "Hypothesis definition", "User flow"] },
            { title: "Design", items: ["Information architecture", "Wireframing", "Visual design", "Interactive prototype"] },
            { title: "Output", items: ["Usability testing", "Review after feedback", "Ship 🚀"] },
          ],
        },
        {
          heading: "Getting to know our users",
          body: [
            "We moved right away to gathering as much information as we could, in three ways.",
            "We called users who’d recently used the app — and users who only tried to log in (a phone number was optional when creating a Jusbrasil profile, so we had plenty of numbers).",
            "We ran a quantitative study: one survey for lawyer-type users who accessed the Escritório Online web version on mobile, and another for non-lawyers who came to Jusbrasil through their phones.",
            "And we held a workshop, inviting a few lawyers and non-lawyers to talk about the mobile experience and how they used their phones day-to-day to access legal information.",
            "After a couple of weeks we had enough data to start sorting and defining behaviors. Our focus: define the job our mobile users needed done. It came down to an affinity diagram.",
          ],
          media: {
            layout: "full",
            images: [
              {
                src: "images/jusbrasil/9SDKKxUmiTvTfC0N1fsETYuVTx0.png",
                alt: "Research workshop with lawyers and non-lawyers",
              },
            ],
          },
        },
        {
          type: "quote",
          heading: "What the real problem was",
          quote:
            "Users need to check their lawsuits on their phones, so they’re always aware of the information they need before going to court or talking with their lawyers.",
          body: [
            "It wasn’t a surprise to discover we weren’t actually helping users at any point. The app had plenty of features, but they were all designed for lawyers — and lawyers mostly used the desktop web version to manage clients. Our non-lawyers, the ones most present on mobile, simply weren’t finding what they needed.",
          ],
        },
        {
          heading: "Building a new app",
          body: [
            "Redesigning the old app would’ve been too much work, so we decided to build a new one — focused on bringing legal information to everyone, lawyers and non-lawyers alike, in a simple and easy way. We rushed to create an MVP as fast as possible so we could test it and validate our hypothesis.",
            "By that point we already had an idea of how it would work, and how we’d generate revenue from it.",
          ],
        },
        {
          heading: "An easier way to check on their lawsuits",
          body: [
            "We went with the simplest solution possible, to keep the team’s effort low. Users could search lawsuits by ID — research showed lawyers use the ID for faster searches — or by a person’s name, since non-lawyers usually don’t know the ID.",
            "The flow brought users to a lawsuit page with all the information. Later iterations would add a “Follow lawsuit” button, where users pay to be notified whenever the lawsuit had new activity. Further down the line, the newest activity would also sit behind a paywall — that’s how Jusbrasil usually monetizes products.",
          ],
          media: {
            layout: "stack",
            images: [
              {
                src: "images/jusbrasil/7y7YM3ce0jH6MGg59hzcyoAkB8.png",
                alt: "User flow — search by name or lawsuit ID, leading to the lawsuit page",
                caption: "The core user flow",
              },
              {
                src: "images/jusbrasil/kNfdsbJDMnYjiWrUkP953lzyw.png",
                alt: "MVP screens — search, results and lawsuit page",
              },
            ],
          },
        },
        {
          type: "stats",
          heading: "Aftermath",
          body: [
            "We analyzed data and user behavior for about a month after launch, looking for iterations and corrections. The app was a huge success for Jusbrasil from the very first moment — the UI was simple and intuitive for non-lawyers, and the user count grew immensely in the first months.",
          ],
          statsNote: "Three months after launch",
          stats: [
            { value: "15k", label: "Users" },
            { value: "5★", label: "App Store rating" },
            { value: "4★", label: "Play Store rating" },
          ],
        },
      ],
      role:
        "On this project I owned the entire design process, guiding it from concept to completion. That involved participating in user interviews, facilitating team activities, and meticulously crafting the final application. As project lead, I also helped the Tech Lead manage a team of 3 developers, making sure everyone understood the project and its impact on the company.",
      roleAvatar: "images/jusbrasil/pzz2qSRQHy4qM8hUecmduPTIzww.png",
      skills: ["User Research", "Prototyping", "User Testing", "Figma"],
    },
  },
  {
    slug: "frete-com",
    title: "Frete.com",
    tag: "Design Systems",
    description: "A digital freight platform that connects shippers and drivers.",
    year: "2021",
    disciplines: ["Design Systems", "Product Design"],
    image: "images/frete.png",
    card: {
      bg: "#d9dde4",
      fg: "#000000",
      logo: "images/frete/logo.svg",
      title: "frete.com",
      tagline: "Lead a team to create the new visual identity.",
      screen: "images/frete/screen.png",
      tags: ["Design Systems", "Web Design"],
    },
    // full / 2-up / full / full — wide boards with the two component sheets paired
    detailPattern: [1, 2, 1, 1],
    detailImages: [
      { src: "images/frete/dashboard.png", natural: true },
      { src: "images/frete/buttons.png", natural: true },
      { src: "images/frete/inputs.png", natural: true },
      { src: "images/frete/foundations.png", natural: true },
      { src: "images/frete/screens.png", natural: true },
    ],
    intro:
      "Frete.com is a digital freight platform that connects shippers and drivers.",
    body:
      "In 2021, frete.com hired me to lead their new Design System, along with the new visual " +
      "identity for FreteBras — one of the company’s brands. I led a team of developers and " +
      "designers and created a totally fresh look and feel, defining the tokens, foundations " +
      "and all the components used in the system.",
  },
  {
    slug: "gameplaywiz",
    title: "GameplayWiz",
    tag: "Product | UX/UI",
    description: "A platform that connects new players with experienced reviewers to level up their gameplay.",
    year: "2026",
    disciplines: ["Product Design", "Interaction Design"],
    image: "images/gameplaywiz.png",
    imagePosition: "left center",
    card: {
      bg: "#c3d0e8",
      fg: "#000000",
      logo: "images/gameplaywiz/logo.svg",
      title: "Gameplay Wiz",
      tagline: "Created the initial web experience.",
      screen: "images/gameplaywiz/screen.png",
      tags: ["Product | UXUI", "Web Design"],
    },
    // full / 2-up / 2-up / full — wide review screens bookend the square UI shots
    detailPattern: [1, 2, 2, 1],
    detailImages: [
      { src: "images/gameplaywiz/review-player.png", natural: true },
      "images/gameplaywiz/profile.png",
      "images/gameplaywiz/match-list.png",
      "images/gameplaywiz/empty-state.png",
      "images/gameplaywiz/gameplay-sent.png",
      "images/gameplaywiz/review-annotation.png",
    ],
    intro:
      "GameplayWiz helps new players connect with more experienced players to get their " +
      "gameplays reviewed and improve.",
    body:
      "I was approached by Felipe, whom I had worked with years before at Jusbrasil, to define " +
      "the visual identity and create the flows for his new project: GameplayWiz. Except for the " +
      "logo, every other aspect was designed by me — the project took about a month and it’s just live.",
  },
];

// "Other works" grid — rendered in the design's pattern:
// full-width, two halves, three thirds, full-width (7 slots).
// Add `image` paths when ready; add a `slug` matching a PROJECTS
// entry to make a tile clickable.
// Ordered to suit the gallery pattern (full / 2-up / 3-up / full / full /
// 2-up / final): wide screenshots land in full-width rows, the square logo
// in a 3-up cell, the portrait page in a half cell.
const OTHER_WORKS = [
  {
    title: "BuzzFeed campaign builder",
    image: "images/other/buzzfeed-campaign.png",
    imageFit: "contain",
    imagePosition: "center top",
    imageBg: "#f2f5f9",
  },
  { title: "Walmart Marketplace — Pro Seller", image: "images/other/walmart-proseller.png" },
  { title: "Pugs rewards dashboard", image: "images/other/pugs-rewards.png" },
  { title: "FC Bagres crest", image: "images/other/fc-bagres.png" },
  { title: "Nike Air Force app", image: "images/other/nike-airforce.png" },
  { title: "Tribe onboarding", image: "images/other/tribe-onboarding.png" },
  {
    title: "Mentorsclub app",
    image: "images/other/mentorsclub.png",
    imageFit: "contain",
    imageBg: "#131313",
  },
  {
    title: "BuzzFeed quiz experience",
    image: "images/other/buzzfeed-quiz.png",
    natural: true,
  },
  { title: "Music app", image: "images/other/music-app.png" },
  { title: "ChildFund donations", image: "images/other/childfund.png" },
];

const CAREER = [
  {
    company: "Buzzfeed",
    role: "Product Designer",
    location: "Remote (US)",
    period: "2024 - Present",
    logo: "images/logos/buzzfeed.png",
    logoClass: "logo--buzzfeed",
  },
  {
    company: "Walmart Marketplace",
    role: "Product Designer",
    location: "Remote (US)",
    period: "2024 - 2025",
    logo: "images/logos/walmart.svg",
    logoClass: "logo--mask logo--walmart",
  },
  {
    company: "MillionPugs",
    role: "Product Designer",
    location: "Remote (PL)",
    period: "2023 - 2024",
    logo: "images/logos/millionpugs.svg",
    logoClass: "logo--mask logo--millionpugs",
  },
  {
    company: "Tribe",
    role: "Product Designer",
    location: "Remote (US)",
    period: "2022 - 2023",
    logo: "images/logos/tribe.png",
  },
  {
    company: "Smartify",
    role: "Product Designer (Contract)",
    location: "Remote (UK)",
    period: "2022",
    logo: "images/logos/smartify.svg",
    logoClass: "logo--mask logo--smartify",
  },
  {
    company: "frete.com",
    role: "Design System Manager",
    location: "Remote (BR)",
    period: "2021 - 2022",
    logo: "images/logos/frete.png",
    logoClass: "logo--full",
  },
  {
    company: "Loadsmart",
    role: "Product Designer",
    location: "Remote (US)",
    period: "2021",
    logo: "images/logos/loadsmart.png",
    logoClass: "logo--sm",
  },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/bruno-paradas/" },
  { label: "Resume", url: "resume.pdf" },
  { label: "Behance", url: "https://www.behance.net/brunoparadas" },
  { label: "Email", url: "mailto:bruno.paradas1@gmail.com" },
];

const CONTACT_EMAIL = "bruno.paradas1@gmail.com";
