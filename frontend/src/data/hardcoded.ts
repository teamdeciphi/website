/**
 * Hardcoded fallback data — mirrors the shape returned by Strapi.
 * Replace field values here to update site content without a CMS.
 */

// ---------------------------------------------------------------------------
// Global (nav + footer)
// ---------------------------------------------------------------------------
export const hardcodedGlobalData = {
  data: {
    topNav: {
      logo: {
        id: "1",
        documentId: "logo",
        url: "/img_frame_39.svg",
        alternativeText: "Deciphi logo",
        name: "logo",
      },
      navItems: [
        {
          id: 1,
          text: "Home",
          href: "#home",
          isExternal: false,
          isPrimary: false,
          subnav: [],
        },
        {
          id: 2,
          text: "About",
          href: "/en/about",
          isExternal: false,
          isPrimary: false,
          subnav: [],
        },
        {
          id: 3,
          text: "Services",
          href: "#services",
          isExternal: false,
          isPrimary: false,
          subnav: [
            {
              id: 1,
              name: "Cybersecurity Consulting",
              desc: "Strategic expert-driven guidance for your security programme",
              href: "/en/consulting",
              icon: "IconConsulting",
            },
            {
              id: 2,
              name: "Security Assessment & Testing",
              desc: "Uncover and remediate security gaps before attackers do",
              href: "/en/assessment",
              icon: "IconAssessment",
            },
            {
              id: 3,
              name: "Cybersecurity Awareness Training",
              desc: "Turn your people into your first line of defence",
              href: "/en/training",
              icon: "IconTraining",
            },
            {
              id: 4,
              name: "System Integration",
              desc: "Seamlessly connect and secure your tools and platforms",
              href: "/en/managed-security",
              icon: "IconIntegration",
            },
            {
              id: 5,
              name: "OT Security",
              desc: "Protect industrial control systems from cyber threats",
              href: "/en/ot-security",
              icon: "IconOT",
            },
            {
              id: 6,
              name: "Cloud Security",
              desc: "Secure your AWS, Azure, and GCP environments",
              href: "/en/cloud-security",
              icon: "IconCloud",
            },
          ],
        },
        {
          id: 4,
          text: "Blog",
          href: "/en/blog",
          isExternal: false,
          isPrimary: false,
          subnav: [],
        },
      ],
      cta: {
        id: 10,
        text: "Contact",
        href: "/en/contact",
        isExternal: false,
        isPrimary: true,
      },
    },
    footer: {
      tagline:
        "Deciphi delivers practical cybersecurity solutions to protect your organisation from evolving threats.",
      mail: "contact@deciphi.com",
      phone: 97441499289,
      logo: {
        id: "2",
        documentId: "footer-logo",
        url: "/img_frame_39.svg",
        alternativeText: "Deciphi logo",
        name: "footer-logo",
      },
      heading: [
        { id: 1, text: "Ready to secure your ", highlight: false },
        { id: 2, text: "network?", highlight: true },
      ],
      cta: {
        id: 20,
        text: "Get in touch",
        href: "/en/contact",
        isExternal: false,
        isPrimary: true,
      },
      Explore: [
        {
          id: "e1",
          text: "Home",
          href: "/en",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "e2",
          text: "About",
          href: "/en/about",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "e3",
          text: "Blog",
          href: "/en/blog",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "e4",
          text: "Contact",
          href: "/en/contact",
          isExternal: false,
          isPrimary: false,
        },
      ],
      Services: [
        {
          id: "s1",
          text: "Consulting",
          href: "/en/consulting",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "s2",
          text: "Assessment",
          href: "/en/assessment",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "s3",
          text: "Training",
          href: "/en/training",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "s4",
          text: "Managed Security",
          href: "/en/managed-security",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "s5",
          text: "Integration",
          href: "/en/integration",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "s6",
          text: "Cloud Security",
          href: "/en/cloud-security",
          isExternal: false,
          isPrimary: false,
        },
      ],
      socialLinks: [],
    },
    seo: {
      metaTitle: "Deciphi — Cybersecurity Experts",
      metaDescription:
        "Deciphi delivers practical cybersecurity solutions to protect your organisation from evolving threats.",
    },
  },
};

// ---------------------------------------------------------------------------
// Landing page blocks
// ---------------------------------------------------------------------------
export const hardcodedLandingPage = {
  data: {
    seo: {
      metaTitle: "Penetration Testing & Cybersecurity in Qatar — Deciphi",
      metaDescription:
        "Doha-based cybersecurity consultancy. Vulnerability assessment and penetration testing, SIEM and security implementation for businesses in Qatar.",
      structuredData: null,
    },
    blocks: [
      // ── Hero ────────────────────────────────────────────────────────────
      {
        __component: "layout.hero",
        id: "hero-1",
        createdAt: "",
        updatedAt: "",
        heading: "Securing Your Network, With Cybersecurity Expertise.",
        text: "At Deciphi, we help organisations stay ahead of evolving cyber risks. our expert-led services empover you to act with confidence and secure your future.",
        locale: "en",
        image: {
          id: "h1",
          documentId: "hero-img",
          url: "https://deciphi-pull-zone.b-cdn.net/images.jpeg",
          alternativeText: "Cybersecurity hero image",
          name: "hero-image",
        },
        video: {
          id: "v1",
          documentId: "hero-video",
          url: "/herovideo.mp4",
          alternativeText: "Hero background video",
          name: "hero-video",
        },
        buttonLink: [],
      },

      // ── About / Content with Image ───────────────────────────────────────
      {
        __component: "layout.content-with-image",
        id: "about-1",
        createdAt: "",
        updatedAt: "",
        label: "About Us",
        description:
          "We connect the dots, so you do not have to. At Deciphi, we simplify cybersecurity by transforming complex challenges into clear, effective strategies-protecting your operations today while preparing you for tomorrow's threats.",
        indicatorlabel: "Doha-Based Team",
        heading: [
          { id: 1, text: "Smarter. Safer.  ", highlight: false },
          { id: 2, text: "Deciphi", highlight: true },
        ],
        cta: { text: "Learn More", href: "#services", isExternal: false },
        text: "",
        cardtext: [
          {
            id: 1,
            value: "DOHA-BASED",
            label: "Local team, on site when it matters.",
          },
          {
            id: 2,
            value: "VAPT DELIVERED",
            label:
              "Multiple vulnerability assessment and penetration testing engagements completed.",
          },
          {
            id: 3,
            value: "FIXED SCOPE",
            label: "Fixed Price. You know the cost before we start.",
          },
        ],
        feature: [
          { id: "f1", text: "Expert Solutions ", icon: "Sun" },
          { id: "f2", text: "Advanced Defense", icon: "Lock" },
          { id: "f3", text: "Strategic Consulting", icon: "FileText" },
          { id: "f4", text: "Seamless Integration", icon: "Cloud" },
        ],
        cardImage: {
          id: "a1",
          documentId: "about-img",
          url: "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alternativeText: "Cybersecurity monitoring dashboard",
          name: "about-image",
        },
      },

      // ── Services / Price Grid ────────────────────────────────────────────
      {
        __component: "layout.price-grid",
        id: "services-1",
        createdAt: "",
        updatedAt: "",
        label: "Our Services",
        description:
          "We connect the dots, so you do not have to. At Deciphi, we simplify cybersecurity by transforming complex challenges into clear, effective strategies-protecting your operations today while preparing you for tomorrow's threats.",
        heading: [
          { id: 1, text: "Security  ", highlight: true },
          { id: 2, text: " That Fits", highlight: false },
        ],

        //        ,
        // IconCloud,
        // ,IconTraining
        // ,
        // IconOT,
        // ,
        servicecard: [
          {
            id: "sc1",
            heading: "Cybersecurity Consulting",
            description:
              "Get strategic, expert-driven guidance to build and scale a resilient security program that fits your goals.",
            icon: "IconConsulting",
            href: "/en/consulting",
            images: [
              {
                id: "sc1i1",
                documentId: "sc1-img",
                url: "https://c.ndtvimg.com/2024-03/7q0b626g_women-at-work-generic_625x300_05_March_24.jpeg?downsize=773:435",
                alternativeText: "Consulting",
                name: "consulting-img",
              },
            ],
          },
          {
            id: "sc2",
            heading: "Security Assessment & Testing",
            description:
              "Thorough evaluation of your infrastructure to uncover and remediate security gaps before attackers exploit them.",
            icon: "IconAssessment",
            href: "/en/assessment",
            images: [
              {
                id: "sc2i1",
                documentId: "sc2-img1",

                url: "https://deciphi-pull-zone.b-cdn.net/3099de0aa477b5af3188bed9d56541638939a9ae_6870eb3ff1.avif",
                alternativeText: "Assessment",
                name: "assessment-img1",
              },
              {
                id: "sc2i2",
                documentId: "sc2-img2",
                url: "https://deciphi-pull-zone.b-cdn.net/pexels_thisisengineering_3862383_scaled_e1756632630839_04150bba09.avif",
                alternativeText: "Assessment 2",
                name: "assessment-img2",
              },
            ],
          },
          {
            id: "sc3",
            heading: "Cybersecurity Awareness Training ",
            description:
              "Empower your team with practical training that turns your people into your first line of defense.",
            icon: "IconAssessment",
            href: "/en/training",
            images: [
              {
                id: "sc3i1",
                documentId: "sc3-img",
                url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80",
                alternativeText: "Training",
                name: "training-img",
              },
            ],
          },
          {
            id: "sc4",
            heading: "System     Integration ",
            description:
              "Seamlessly connect and secure your tools, platforms, and infrastructure—without compromising performance.",
            icon: "IconTraining",
            href: "/en/managed-security",
            images: [
              {
                id: "sc4i1",
                documentId: "sc4-img",
                url: "https://deciphi-pull-zone.b-cdn.net/65e163ee818a060ecccc5290_breachsight-scanlines%25401.5x.png.png",
                alternativeText: "Managed Security",
                name: "managed-security-img",
              },
            ],
          },
          {
            id: "sc5",
            heading: "OT Security",
            description:
              "Protecting operational technology environments from cyber threats that target industrial control systems.",
            icon: "Cpu",
            href: "/en/ot-security",
            images: [
              {
                id: "sc5i1",
                documentId: "sc5-img",
                url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
                alternativeText: "OT Security",
                name: "ot-security-img",
              },
            ],
          },
          {
            id: "sc6",
            heading: "Cloud Security",
            description:
              "Securing your cloud workloads, identities, and data across AWS, Azure, and GCP environments.",
            icon: "IconCloud",
            href: "/en/cloud-security",
            images: [
              {
                id: "sc6i1",
                documentId: "sc6-img",
                url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
                alternativeText: "Cloud Security",
                name: "cloud-security-img",
              },
            ],
          },
        ],
      },

      // ── Solutions / Card Grid ────────────────────────────────────────────
      {
        __component: "layout.card-grid",
        id: "solutions-1",
        createdAt: "",
        updatedAt: "",
        label: "Solutions",
        description:
          "We design cybersecurity solutions around your unique needs—no templates, no fluff. Just smart, effective protection that fits your business.",
        heading: [
          { id: 1, text: "Built ", highlight: false },
          { id: 2, text: "for You ", highlight: true },
        ],
        accordian: [
          {
            id: "item-0",
            icon: "IdCard",
            heading: "Identity and Access Management (IAM)",
            description:
              "At Deciphi, we offer more than just cybersecurity—we provide peace of mind.Backed by real-world experience and deep technical expertise, we tailor solutions that protect your people, systems, and data.",
            points: [
              { id: "p1", point: "Identity-centric access control" },
              { id: "p2", point: "Micro-segmentation" },
              { id: "p3", point: "Continuous verification" },
            ],
            image: {
              id: "acc1",
              documentId: "acc1-img",
              url: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&q=80",
              alternativeText: "Zero-Trust Architecture",
              name: "zt-img",
            },
          },
          {
            id: "item-1",
            icon: "Globe",
            heading: "Network Security",
            description:
              "Advanced SIEM and SOAR integration that detects, correlates, and responds to threats in real time.",
            points: [
              { id: "p4", point: "Real-time threat intelligence" },
              { id: "p5", point: "Automated incident playbooks" },
              { id: "p6", point: "Network anomaly detection" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://deciphi-pull-zone.b-cdn.net/albert-stoynov-dyUp7WPu5q4-unsplash.jpg",
              alternativeText: "Threat Detection",
              name: "tdr-img",
            },
          },
          {
            id: "item-2",
            icon: "Database",
            heading: "Data Security",
            description:
              "Safeguard sensitive data wherever it lives—at rest, in transit, or in use-through encryption, DLP policies, and rigorous classification frameworks.",
            points: [
              { id: "p7", point: "Gap analysis & roadmap" },
              { id: "p8", point: "Policy & procedure development" },
              { id: "p9", point: "Audit readiness support" },
            ],
            image: {
              id: "acc3",
              documentId: "acc3-img",
              url: "https://deciphi-pull-zone.b-cdn.net/lewis-kang-ethe-ngugi-f5pTwLHCsAg-unsplash.jpg",
              alternativeText: "Compliance",
              name: "compliance-img",
            },
          },
          {
            id: "item-5",
            icon: "Shield",
            heading: "Endpoint Security",
            description:
              "Advanced SIEM and SOAR integration that detects, correlates, and responds to threats in real time.",
            points: [
              { id: "p4", point: "Real-time threat intelligence" },
              { id: "p5", point: "Automated incident playbooks" },
              { id: "p6", point: "Continuous endpoint monitoring" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://deciphi-pull-zone.b-cdn.net/tai-bui-0FNgdyStfFw-unsplash.jpg",
              alternativeText: "Threat Detection",
              name: "tdr-img",
            },
          },
          {
            id: "item-3",
            icon: "Cloud",
            heading: "Cloud Security",
            description:
              "End-to-end cloud security from configuration reviews to runtime protection, ensuring your cloud environments stay compliant and secure at every layer.",
            points: [
              { id: "p4", point: "Real-time threat intelligence" },
              { id: "p5", point: "Automated incident playbooks" },
              { id: "p6", point: "Continuous posture management" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://deciphi-pull-zone.b-cdn.net/hazel-z-FocSgUZ10JM-unsplash.jpg",
              alternativeText: "Threat Detection",
              name: "tdr-img",
            },
          },
          {
            id: "item-4",
            icon: "Code2",
            heading: "Application Security",
            description:
              "Advanced SIEM and SOAR integration that detects, correlates, and responds to threats in real time.",
            points: [
              { id: "p4", point: "Real-time threat intelligence" },
              { id: "p5", point: "Automated incident playbooks" },
              { id: "p6", point: "Secure code review and testing" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://deciphi-pull-zone.b-cdn.net/petter-lagson-z-upQITw4fY-unsplash.jpg",
              alternativeText: "Threat Detection",
              name: "tdr-img",
            },
          },
        ],
      },

      // ── Why Choose Us ────────────────────────────────────────────────────
      {
        __component: "layout.choose-us-section",
        id: "why-1",
        createdAt: "",
        updatedAt: "",
        label: "Why Deciphi",
        description:
          "We combine deep technical expertise with a client-first approach to deliver measurable security outcomes.",
        heading: [
          { id: 1, text: "Why Choose ", highlight: false },
          { id: 2, text: "Deciphi", highlight: true },
        ],
        cta: { text: "Get Started", href: "/en/contact", isExternal: false },
        image: {
          id: "w1",
          documentId: "why-img",
          url: "https://deciphi-pull-zone.b-cdn.net/question-mark-icon-solving-problem-solution-concept.jpg",
          alternativeText: "Security experts at work",
          name: "why-img",
        },
        points: [
          { id: "wp1", point: "Certified security professionals" },
          { id: "wp2", point: "Proven track record across industries" },
          { id: "wp3", point: "Fixed scope, fixed price engagements" },
        ],
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Blog Categories
// ---------------------------------------------------------------------------
export const hardcodedCategories = {
  data: [
    { id: 1, documentId: "cat-1", text: "Cybersecurity" },
    { id: 2, documentId: "cat-2", text: "Cloud Security" },
    { id: 3, documentId: "cat-3", text: "OT Security" },
    { id: 4, documentId: "cat-4", text: "Threat Intelligence" },
    { id: 5, documentId: "cat-5", text: "Compliance" },
  ],
};

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------
export const hardcodedBlogPosts = [
  {
    id: 1,
    documentId: "post-1",
    title: "Understanding Zero Trust Architecture in 2025",
    slug: "understanding-zero-trust-architecture-2025",
    description:
      "Zero Trust has moved from buzzword to business necessity. Learn how to implement a Zero Trust model that actually protects your organisation.",
    content: `## What is Zero Trust?

Zero Trust is a security framework that requires all users—whether inside or outside the organisation's network—to be authenticated, authorised, and continuously validated before being granted access to applications and data.

## Core Principles

**Never trust, always verify** — Every access request must be authenticated regardless of where it originates.

**Least privilege access** — Users and systems receive only the minimum access they need to perform their tasks.

**Assume breach** — Design systems assuming a breach has already occurred to limit blast radius.

## How to Get Started

1. **Map your attack surface** — Identify your most sensitive data and systems
2. **Verify all users and devices** — Implement MFA and device health checks
3. **Micro-segment your network** — Prevent lateral movement with fine-grained network controls
4. **Monitor continuously** — Log all traffic and set up anomaly detection

Zero Trust is a journey, not a destination. Start with your most critical assets and expand from there.`,
    publishedAt: "2025-03-15T10:00:00.000Z",
    createdAt: "2025-03-14T09:00:00.000Z",
    updatedAt: "2025-03-15T10:00:00.000Z",
    image: {
      id: 1,
      documentId: "img-post-1",
      url: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
      alternativeText: "Zero Trust Architecture",
      name: "zero-trust.jpg",
    },
    category: { id: 1, documentId: "cat-1", text: "Cybersecurity" },
  },
  {
    id: 2,
    documentId: "post-2",
    title: "Top 5 Cloud Security Mistakes Organisations Make",
    slug: "top-5-cloud-security-mistakes",
    description:
      "Moving to the cloud introduces new attack vectors. Here are the five most common security mistakes and how to avoid them.",
    content: `## Cloud Security: What's Going Wrong?

Cloud adoption has accelerated dramatically, but security practices haven't always kept pace. These are the five most common mistakes we see.

## Mistake 1: Misconfigured Storage Buckets

Public S3 buckets and Azure Blob containers have exposed sensitive data for countless organisations. Always audit storage permissions and enable versioning.

## Mistake 2: Over-privileged IAM Roles

Granting admin access broadly is convenient but dangerous. Apply least-privilege to every IAM role and review permissions quarterly.

## Mistake 3: No Multi-Factor Authentication

MFA dramatically reduces the risk of credential compromise. Enable it for all accounts, especially those with elevated privileges.

## Mistake 4: Ignoring Cloud-Native Logging

CloudTrail, Azure Monitor, and GCP Cloud Logging give you full visibility into your environment. Without them, you're flying blind.

## Mistake 5: Skipping Security Assessments

Regular cloud security posture assessments (CSPAs) catch drift from your security baseline before it becomes an incident.`,
    publishedAt: "2025-04-20T08:00:00.000Z",
    createdAt: "2025-04-19T08:00:00.000Z",
    updatedAt: "2025-04-20T08:00:00.000Z",
    image: {
      id: 2,
      documentId: "img-post-2",
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      alternativeText: "Cloud Security",
      name: "cloud-security.jpg",
    },
    category: { id: 2, documentId: "cat-2", text: "Cloud Security" },
  },
  {
    id: 3,
    documentId: "post-3",
    title: "OT Security: Protecting Industrial Control Systems",
    slug: "ot-security-protecting-industrial-control-systems",
    description:
      "Operational technology environments face unique and growing cyber threats. Discover how to build a resilient OT security programme.",
    content: `## The OT Threat Landscape

Operational technology (OT) and industrial control systems (ICS) were once considered safe from cyber threats due to air gaps. That assumption is now obsolete.

## Why OT is Different

OT systems often run legacy software that cannot be easily patched. Downtime for updates can cost millions, and many protocols were designed for reliability—not security.

## Key OT Security Controls

**Network segmentation** — Separate OT networks from corporate IT networks using industrial DMZs and firewalls purpose-built for OT protocols.

**Asset inventory** — You cannot protect what you cannot see. Maintain a real-time inventory of every device on your OT network.

**Vulnerability management** — Prioritise patching based on risk to physical processes, not just CVSS scores.

**Incident response planning** — Develop OT-specific playbooks that account for the physical consequences of cyber incidents.

## The Purdue Model in 2025

While the Purdue Reference Model remains useful, modern OT environments require layered security that goes beyond network zones.`,
    publishedAt: "2025-05-10T12:00:00.000Z",
    createdAt: "2025-05-09T12:00:00.000Z",
    updatedAt: "2025-05-10T12:00:00.000Z",
    image: {
      id: 3,
      documentId: "img-post-3",
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      alternativeText: "Industrial Control Systems",
      name: "ot-security.jpg",
    },
    category: { id: 3, documentId: "cat-3", text: "OT Security" },
  },
  {
    id: 4,
    documentId: "post-4",
    title: "How to Build a Cyber Threat Intelligence Programme",
    slug: "build-cyber-threat-intelligence-programme",
    description:
      "Threat intelligence turns raw data into actionable insights. Here's a practical guide to building a CTI programme from the ground up.",
    content: `## What is Cyber Threat Intelligence?

Cyber Threat Intelligence (CTI) is the collection and analysis of information about threats to help organisations make informed security decisions.

## Intelligence Types

- **Strategic** — High-level trends for executive decision-making
- **Operational** — Information about specific threat actors and their campaigns
- **Tactical** — Indicators of compromise (IOCs) like IPs, hashes, and domains
- **Technical** — Deep technical details about malware and exploitation techniques

## Building Your CTI Programme

### Step 1: Define Requirements
Identify what your organisation needs to know to reduce risk. Engage stakeholders across IT, legal, and executive teams.

### Step 2: Collect Data
Use a combination of open-source intelligence (OSINT), commercial feeds, and information sharing communities like ISACs.

### Step 3: Analyse and Contextualise
Raw indicators are not intelligence. Add context about threat actors, their motivations, and relevance to your specific environment.

### Step 4: Disseminate and Act
Deliver intelligence in the right format to the right audience—whether that's automated IOC blocking or a board-level threat briefing.`,
    publishedAt: "2025-06-05T09:00:00.000Z",
    createdAt: "2025-06-04T09:00:00.000Z",
    updatedAt: "2025-06-05T09:00:00.000Z",
    image: {
      id: 4,
      documentId: "img-post-4",
      url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      alternativeText: "Threat Intelligence",
      name: "threat-intel.jpg",
    },
    category: { id: 4, documentId: "cat-4", text: "Threat Intelligence" },
  },
  {
    id: 5,
    documentId: "post-5",
    title: "NCA ECC Compliance: A Practical Guide for Qatari Organisations",
    slug: "nca-ecc-compliance-guide-qatar",
    description:
      "The NCA Essential Cybersecurity Controls set the baseline for cybersecurity in the region. Here's how to achieve and maintain compliance.",
    content: `## Understanding NCA ECC

The National Cybersecurity Authority's Essential Cybersecurity Controls (ECC) provide a comprehensive framework for organisations operating in the region.

## Key Control Domains

### 1. Cybersecurity Governance
Establish a cybersecurity policy, assign clear ownership, and ensure executive accountability for security outcomes.

### 2. Cybersecurity Defence
Implement technical controls including endpoint protection, vulnerability management, and network security monitoring.

### 3. Third-Party Cybersecurity
Assess and manage the cybersecurity risks introduced by vendors, suppliers, and partners.

### 4. Cybersecurity Resilience
Develop and test incident response and business continuity plans to ensure you can recover from a cyber incident.

## Compliance Roadmap

1. Conduct a gap assessment against the ECC controls
2. Prioritise remediation based on risk
3. Implement controls and document evidence
4. Conduct internal and external audits
5. Establish continuous monitoring and annual reviews

Compliance is not a one-time exercise. Build it into your security programme as an ongoing activity.`,
    publishedAt: "2025-07-18T11:00:00.000Z",
    createdAt: "2025-07-17T11:00:00.000Z",
    updatedAt: "2025-07-18T11:00:00.000Z",
    image: {
      id: 5,
      documentId: "img-post-5",
      url: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
      alternativeText: "Compliance Framework",
      name: "compliance.jpg",
    },
    category: { id: 5, documentId: "cat-5", text: "Compliance" },
  },
  {
    id: 6,
    documentId: "post-6",
    title: "Ransomware Response: What to Do in the First 24 Hours",
    slug: "ransomware-response-first-24-hours",
    description:
      "When ransomware strikes, every minute counts. This step-by-step guide walks you through the critical first 24 hours of incident response.",
    content: `## The Clock Starts Now

When you detect ransomware, the decisions you make in the first 24 hours will determine how well you recover. Here's what to do.

## Hour 0–2: Contain the Incident

**Isolate affected systems immediately** — Disconnect from the network but do not shut down (memory forensics may be needed).

**Alert your incident response team** — Activate your IR plan and engage external support if needed.

**Preserve evidence** — Take snapshots of affected systems before any remediation.

## Hour 2–6: Assess the Damage

- Identify the ransomware variant (check ID Ransomware)
- Determine the blast radius — which systems are encrypted?
- Check if data exfiltration occurred before encryption
- Identify the initial access vector

## Hour 6–12: Notify Stakeholders

- Brief executive leadership and legal counsel
- Assess regulatory notification obligations (GDPR, NCA, etc.)
- Engage cyber insurance if applicable
- Do NOT pay the ransom without legal advice

## Hour 12–24: Begin Recovery

- Start restoring from clean backups
- Rebuild affected systems from known-good images
- Patch the vulnerability that allowed initial access
- Monitor for persistence mechanisms

## Prevention is Better than Response

The best ransomware response is one you never need. Invest in offline backups, endpoint detection, and employee awareness training.`,
    publishedAt: "2025-08-22T07:00:00.000Z",
    createdAt: "2025-08-21T07:00:00.000Z",
    updatedAt: "2025-08-22T07:00:00.000Z",
    image: {
      id: 6,
      documentId: "img-post-6",
      url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      alternativeText: "Ransomware Response",
      name: "ransomware.jpg",
    },
    category: { id: 1, documentId: "cat-1", text: "Cybersecurity" },
  },
  {
    id: 7,
    documentId: "post-7",
    title: "Security Awareness Training That Actually Works",
    slug: "security-awareness-training-that-works",
    description:
      "Most security awareness programmes fail to change behaviour. Learn how to design training that sticks and measurably reduces risk.",
    content: `## Why Traditional Training Fails

Annual click-through compliance training has a negligible impact on security behaviour. People forget what they learned within days, and the format doesn't engage them.

## Principles of Effective Training

### Make it Relevant
Generic content about phishing doesn't land. Show employees real examples targeted at your industry, your company, and their specific role.

### Make it Frequent
Short, regular touchpoints (monthly micro-learnings) are far more effective than one long annual session.

### Make it Practical
Simulated phishing campaigns, tabletop exercises, and hands-on labs build muscle memory that theory alone cannot.

### Measure What Matters
Track click rates on phishing simulations, report rates, and time-to-report. These are leading indicators of security culture.

## Building Your Programme

1. **Baseline assessment** — Run a phishing simulation to measure your starting point
2. **Targeted curriculum** — Focus on your highest-risk employee groups first
3. **Gamification** — Use leaderboards, badges, and friendly competition
4. **Leadership buy-in** — When executives participate, employees follow
5. **Continuous improvement** — Review metrics quarterly and update content regularly

Security awareness is a cultural initiative, not just a training programme.`,
    publishedAt: "2025-09-01T10:00:00.000Z",
    createdAt: "2025-08-31T10:00:00.000Z",
    updatedAt: "2025-09-01T10:00:00.000Z",
    image: {
      id: 7,
      documentId: "img-post-7",
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      alternativeText: "Security Training",
      name: "security-training.jpg",
    },
    category: { id: 1, documentId: "cat-1", text: "Cybersecurity" },
  },
  {
    id: 8,
    documentId: "post-8",
    title:
      "Penetration Testing vs Vulnerability Assessment: What's the Difference?",
    slug: "penetration-testing-vs-vulnerability-assessment",
    description:
      "These two terms are often confused but serve very different purposes. Understand when to use each and what to expect from the engagement.",
    content: `## Two Different Tools for Different Goals

Vulnerability assessments and penetration tests are complementary but distinct. Choosing the wrong one for your situation means wasted budget and false confidence.

## Vulnerability Assessment

A vulnerability assessment uses automated tools to identify known weaknesses in your systems. It's broad, fast, and produces a prioritised list of issues to remediate.

**Best for:** Regular scanning, compliance requirements, understanding your baseline exposure.

**Limitations:** It won't tell you if vulnerabilities are actually exploitable in your specific environment.

## Penetration Testing

A penetration test is a simulated attack by skilled security professionals. Testers actively attempt to exploit vulnerabilities to demonstrate real-world impact.

**Best for:** Testing specific systems, validating controls, demonstrating risk to executives.

**Limitations:** More expensive, point-in-time snapshot, requires careful scoping.

## Which One Do You Need?

| Factor | Vulnerability Assessment | Penetration Test |
|--------|------------------------|-----------------|
| Frequency | Monthly/Quarterly | Annually/After major changes |
| Coverage | Broad | Targeted |
| Depth | Shallow | Deep |
| Cost | Low | High |
| Output | List of vulnerabilities | Exploitation chain + impact |

## The Answer: Both

A mature security programme uses vulnerability assessments continuously and penetration tests periodically. They work together to give you comprehensive coverage.`,
    publishedAt: "2025-09-05T08:00:00.000Z",
    createdAt: "2025-09-04T08:00:00.000Z",
    updatedAt: "2025-09-05T08:00:00.000Z",
    image: {
      id: 8,
      documentId: "img-post-8",
      url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      alternativeText: "Penetration Testing",
      name: "pentest.jpg",
    },
    category: { id: 1, documentId: "cat-1", text: "Cybersecurity" },
  },
];

// ---------------------------------------------------------------------------
// Service Pages  (used by [...slug] catch-all route)
// ---------------------------------------------------------------------------
export const hardcodedServicePages: Record<
  string,
  { seo?: { metaTitle: string; metaDescription: string }; blocks: object[] }
> = {
  consulting: {
    seo: {
      metaTitle: "Cybersecurity Consulting in Doha, Qatar — Deciphi",
      metaDescription:
        "Practical security guidance for businesses in Qatar — what applies to you, what to fix first, and what you can safely ignore for now.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "consulting-1",
        createdAt: "",
        updatedAt: "",
        label: "Our Services",
        heading: [
          { id: 1, text: "Cybersecurity ", highlight: false },
          { id: 2, text: "Consulting", highlight: true },
        ],
        description:
          "Practical, expert-driven guidance to build and scale a resilient security programme that fits your organisation's goals — delivered from our base in Doha, Qatar.",
        quote:
          "We don't just identify the gaps — we help you close them with confidence.",
        boldtext: [
          { id: 1, text: "Strategy that ", highlight: false },
          { id: 2, text: "drives.   ", highlight: false },
          { id: 2, text: "results.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "What we ", highlight: false },
          { id: 2, text: "deliver", highlight: true },
        ],
        points: [
          { id: "p1", point: "Comprehensive security programme design" },
          { id: "p2", point: "Risk appetite and tolerance definition" },
          { id: "p3", point: "Security governance framework development" },
          { id: "p4", point: "Board-level security reporting and metrics" },
          { id: "p5", point: "Roadmap prioritisation and budget planning" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "Our consultants bring real-world experience from engagements across critical infrastructure, financial services, and government sectors in Qatar and the wider region. We cut through complexity to give you a clear, actionable security strategy.",
          },
          {
            id: "par2",
            point:
              "We align your security investments with business outcomes and, where relevant, with Qatar's regulatory landscape — including NIA guidelines and PDPPL obligations — ensuring every control you implement reduces measurable risk while supporting your operational goals.",
          },
        ],
        largeImage: {
          id: "li1",
          documentId: "consulting-large",
          url: "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=2940&auto=format&fit=crop",
          alternativeText: "Cybersecurity consulting team",
          name: "consulting-large.jpg",
        },
        cardImage: {
          id: "ci1",
          documentId: "consulting-card",
          url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
          alternativeText: "Security consultant",
          name: "consulting-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "Security Programme Design",
            desc: "End-to-end design of a security programme tailored to your organisation's risk profile.",
            icon: "Wallpaper",
          },
          {
            id: "sc2",
            name: "Risk Assessment",
            desc: "Identify, quantify, and prioritise risks across your entire attack surface.",
            icon: "NotebookPen",
          },
          {
            id: "sc3",
            name: "Governance Framework",
            desc: "Policies, procedures, and controls aligned to ISO 27001, NIST, and NCA ECC.",
            icon: "Landmark",
          },
          {
            id: "sc4",
            name: "Executive Advisory",
            desc: "Board-ready reporting and CISO advisory services for leadership teams.",
            icon: "Info",
          },
        ],
      },
    ],
  },

  assessment: {
    seo: {
      metaTitle: "Penetration Testing & VAPT in Qatar — Deciphi",
      metaDescription:
        "Vulnerability assessment and penetration testing for organisations in Qatar. Fixed scope, fixed price, and a report your management can read.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "assessment-1",
        createdAt: "",
        updatedAt: "",
        label: "Our Services",
        heading: [
          {
            id: 1,
            text: "Penetration Testing & Vulnerability   ",
            highlight: false,
          },
          { id: 2, text: "    Assessment", highlight: true },
        ],
        description:
          "Thorough evaluation of your infrastructure to uncover and remediate security gaps before attackers exploit them — delivered to organisations across Qatar.",
        quote: "Know your vulnerabilities before your adversaries do.",
        boldtext: [
          { id: 1, text: "Find gaps. ", highlight: false },
          { id: 2, text: " Fix them fast.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "Testing ", highlight: false },
          { id: 2, text: "capabilities", highlight: true },
        ],
        points: [
          { id: "p1", point: "Network and infrastructure penetration testing" },
          { id: "p2", point: "Web and mobile application security testing" },
          { id: "p3", point: "Red team and adversary simulation" },
          { id: "p4", point: "Social engineering and phishing assessments" },
          { id: "p5", point: "Cloud security posture assessment" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "Our certified testers simulate real-world attack scenarios to expose weaknesses in your defences. Every engagement in Qatar is scoped carefully and delivers actionable remediation guidance — not just a list of CVEs.",
          },
          {
            id: "par2",
            point:
              "We provide detailed technical reports for your security team and executive summaries for leadership, giving every stakeholder the clarity they need to act. Engagements are fixed scope and fixed price — you know what you're getting before we start.",
          },
        ],
        largeImage: {
          id: "li2",
          documentId: "assessment-large",
          url: "https://deciphi-pull-zone.b-cdn.net/pexels-yankrukov-7691720.jpg",
          alternativeText: "Security assessment",
          name: "assessment-large.jpg",
        },
        cardImage: {
          id: "ci2",
          documentId: "assessment-card",
          url: "https://deciphi-pull-zone.b-cdn.net/pexels_thisisengineering_3862383_scaled_e1756632630839_04150bba09.avif",
          alternativeText: "Security testing",
          name: "assessment-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "Penetration Testing",
            desc: "Manual exploitation by certified testers to validate real-world impact.",
            icon: "BugPlay",
          },
          {
            id: "sc2",
            name: "Vulnerability Assessment",
            desc: "Automated and manual scanning to identify known weaknesses across your estate.",
            icon: "NotebookPenIcon",
          },
          {
            id: "sc3",
            name: "Red Team Operations",
            desc: "Full-scope adversary simulation targeting people, processes, and technology.",
            icon: "ShieldHalf",
          },
          {
            id: "sc4",
            name: "Cloud Security Review",
            desc: "Configuration and architecture review of your AWS, Azure, or GCP environments.",
            icon: "Cloud",
          },
        ],
      },
    ],
  },

  training: {
    seo: {
      metaTitle: "Security Awareness Training in Qatar — Deciphi",
      metaDescription:
        "Security awareness training for teams in Qatar, delivered in plain language and built around how your people actually work.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "training-1",
        createdAt: "",
        updatedAt: "",
        label: "Our Services",
        heading: [
          { id: 1, text: "Cybersecurity Awareness ", highlight: false },
          { id: 2, text: "Training", highlight: true },
        ],
        description:
          "Empower your team with practical training that turns your people into your first line of defence — built for organisations in Qatar.",
        quote:
          "Your people are either your greatest vulnerability or your strongest defence. We make them the latter.",
        boldtext: [
          { id: 1, text: "Build a security ", highlight: false },
          { id: 2, text: " culture.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "Training ", highlight: false },
          { id: 2, text: "programmes", highlight: true },
        ],
        points: [
          { id: "p1", point: "Phishing simulation campaigns" },
          { id: "p2", point: "Role-based security awareness modules" },
          {
            id: "p3",
            point: "Executive and board-level cybersecurity briefings",
          },
          { id: "p4", point: "Incident response tabletop exercises" },
          { id: "p5", point: "Compliance and regulatory training" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "We design training programmes for organisations in Doha and across Qatar that go beyond annual click-through compliance modules. Our content is relevant, engaging, and tailored to the specific threats your organisation faces.",
          },
          {
            id: "par2",
            point:
              "Using simulated phishing, gamified learning, and real-world case studies, we drive lasting behavioural change that measurably reduces your human risk exposure.",
          },
        ],
        largeImage: {
          id: "li3",
          documentId: "training-large",
          url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
          alternativeText: "Security training",
          name: "training-large.jpg",
        },
        cardImage: {
          id: "ci3",
          documentId: "training-card",
          url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
          alternativeText: "Training workshop",
          name: "training-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "Phishing Simulations",
            desc: "Realistic phishing campaigns to measure and improve employee resilience.",
            icon: "Bug",
          },
          {
            id: "sc2",
            name: "Awareness Modules",
            desc: "Short, engaging modules covering password hygiene, social engineering, and more.",
            icon: "Megaphone",
          },
          {
            id: "sc3",
            name: "Tabletop Exercises",
            desc: "Facilitated incident response exercises to test your team under pressure.",
            icon: "MonitorCog",
          },
          {
            id: "sc4",
            name: "Executive Briefings",
            desc: "Board-ready cyber risk briefings tailored for non-technical leadership.",
            icon: "HeartHandshake",
          },
        ],
      },
    ],
  },

  "managed-security": {
    seo: {
      metaTitle: "SIEM & Security Integration in Qatar — Deciphi",
      metaDescription:
        "We design, deploy and integrate security monitoring platforms for organisations in Qatar, and hand them over working.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "managed-1",
        createdAt: "",
        updatedAt: "",
        label: "Our Services",
        heading: [
          { id: 1, text: "System ", highlight: false },
          { id: 2, text: "Integration", highlight: true },
        ],
        description:
          "Seamlessly connect and secure your tools, platforms, and infrastructure — without compromising performance. Serving organisations in Doha and across Qatar.",
        quote: "Security that works with your systems, not against them.",
        boldtext: [
          { id: 1, text: "Unified. Secure. ", highlight: false },
          { id: 2, text: "Seamless.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "Integration ", highlight: false },
          { id: 2, text: "services", highlight: true },
        ],
        points: [
          { id: "p1", point: "SIEM and SOAR platform deployment" },
          { id: "p2", point: "Security tool consolidation and optimisation" },
          { id: "p3", point: "API-level security integration" },
          { id: "p4", point: "Identity and access management integration" },
          { id: "p5", point: "Threat intelligence platform integration" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "We design and implement security architectures for organisations in Qatar that bring your tools and data together — giving your team complete visibility and control across your entire environment.",
          },
          {
            id: "par2",
            point:
              "From SIEM deployment to zero-trust network architecture, we ensure your security stack operates as a cohesive, high-performance system — and we hand it over working, not as a project that requires ongoing vendor support to function.",
          },
        ],
        largeImage: {
          id: "li4",
          documentId: "integration-large",
          url: "https://deciphi-pull-zone.b-cdn.net/systemintegration.jpg",
          alternativeText: "System integration",
          name: "integration-large.jpg",
        },
        cardImage: {
          id: "ci4",
          documentId: "integration-card",
          url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
          alternativeText: "Integration services",
          name: "integration-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "SIEM Deployment",
            desc: "End-to-end deployment and tuning of SIEM platforms for real-time threat detection.",
            icon: "Monitor",
          },
          {
            id: "sc2",
            name: "SOAR Automation",
            desc: "Automated incident response playbooks to reduce mean time to respond.",
            icon: "Bolt",
          },
          {
            id: "sc3",
            name: "IAM Integration",
            desc: "Seamless integration of identity and access management across your environment.",
            icon: "IdCard",
          },
          {
            id: "sc4",
            name: "Tool Consolidation",
            desc: "Rationalise your security tooling to reduce cost and complexity.",
            icon: "Wrench",
          },
        ],
      },
    ],
  },

  "ot-security": {
    seo: {
      metaTitle: "OT & ICS Security in Qatar — Deciphi",
      metaDescription:
        "Securing industrial control systems and operational networks in Qatar, without taking production offline.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "ot-1",
        createdAt: "",
        updatedAt: "",
        label: "Our Services",
        heading: [
          { id: 1, text: "OT ", highlight: false },
          { id: 2, text: "Security", highlight: true },
        ],
        description:
          "Protecting operational technology environments from cyber threats that target industrial control systems — for organisations in Qatar and the wider Gulf.",
        quote:
          "Industrial systems require industrial-grade security — purpose-built for OT.",
        boldtext: [
          { id: 1, text: "Secure your ", highlight: false },
          { id: 2, text: "operations.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "OT security ", highlight: false },
          { id: 2, text: "capabilities", highlight: true },
        ],
        points: [
          { id: "p1", point: "OT/ICS network visibility and asset inventory" },
          { id: "p2", point: "Industrial network segmentation and DMZ design" },
          { id: "p3", point: "OT vulnerability assessment and risk analysis" },
          { id: "p4", point: "ICS/SCADA security monitoring and alerting" },
          { id: "p5", point: "OT incident response planning and exercises" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "Operational technology environments in Qatar present unique security challenges — legacy systems, proprietary protocols, and zero-tolerance for downtime. Our OT security specialists understand these constraints and work within them.",
          },
          {
            id: "par2",
            point:
              "We help you gain full visibility into your OT environment, segment your networks effectively, and build detection and response capabilities aligned to IEC 62443 that don't interfere with operations.",
          },
        ],
        largeImage: {
          id: "li5",
          documentId: "ot-large",
          url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
          alternativeText: "OT security",
          name: "ot-large.jpg",
        },
        cardImage: {
          id: "ci5",
          documentId: "ot-card",
          url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&q=80",
          alternativeText: "Industrial control systems",
          name: "ot-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "Asset Discovery",
            desc: "Passive discovery and inventory of all OT assets without disrupting operations.",
            icon: "HandCoins",
          },
          {
            id: "sc2",
            name: "Network Segmentation",
            desc: "Industrial DMZ design and implementation to isolate OT from corporate IT.",
            icon: "Globe",
          },
          {
            id: "sc3",
            name: "OT Risk Assessment",
            desc: "Comprehensive risk assessment aligned to the IEC 62443 framework.",
            icon: "CircleAlert",
          },
          {
            id: "sc4",
            name: "Continuous Monitoring",
            desc: "Monitoring of OT networks with anomaly detection tuned for ICS protocols.",
            icon: "MonitorCog",
          },
        ],
      },
    ],
  },

  "cloud-security": {
    seo: {
      metaTitle: "Cloud Security Services in Qatar — Deciphi",
      metaDescription:
        "Cloud configuration review and security hardening for businesses in Qatar running Microsoft 365, Azure or AWS.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "cloud-1",
        createdAt: "",
        updatedAt: "",
        label: "Our Services",
        heading: [
          { id: 1, text: "Cloud ", highlight: false },
          { id: 2, text: "Security", highlight: true },
        ],
        description:
          "Securing your cloud workloads, identities, and data across AWS, Azure, and Microsoft 365 environments — for businesses in Qatar.",
        quote: "The cloud moves fast. Your security needs to move faster.",
        boldtext: [
          { id: 1, text: "Secure", highlight: false },
          { id: 1, text: "cloud ", highlight: true },
          { id: 2, text: "every layer.", highlight: false },
        ],
        heading2: [
          { id: 1, text: "Cloud security ", highlight: false },
          { id: 2, text: "services", highlight: true },
        ],
        points: [
          { id: "p1", point: "Cloud security posture management (CSPM)" },
          { id: "p2", point: "Identity and access management review" },
          { id: "p3", point: "Container and Kubernetes security" },
          { id: "p4", point: "DevSecOps pipeline integration" },
          { id: "p5", point: "Cloud compliance and regulatory alignment" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "Cloud environments introduce new attack vectors — misconfigurations, over-privileged identities, and exposed storage are among the most common causes of cloud breaches for organisations in Qatar. We help you find and fix these before attackers do.",
          },
          {
            id: "par2",
            point:
              "Our cloud security specialists cover AWS, Azure, and Microsoft 365, delivering assessments, architecture reviews, and continuous posture management to keep your cloud environments secure and compliant with Qatar's data protection requirements.",
          },
        ],
        largeImage: {
          id: "li6",
          documentId: "cloud-large",
          url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
          alternativeText: "Cloud security",
          name: "cloud-large.jpg",
        },
        cardImage: {
          id: "ci6",
          documentId: "cloud-card",
          url: "https://deciphi-pull-zone.b-cdn.net/cloud.avif",
          alternativeText: "Cloud infrastructure",
          name: "cloud-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "CSPM",
            desc: "Continuous monitoring of cloud configurations to detect and remediate misconfigurations.",
            icon: "Monitor",
          },
          {
            id: "sc2",
            name: "IAM Security",
            desc: "Least-privilege access review and enforcement across all cloud identities.",
            icon: "IdCard",
          },
          {
            id: "sc3",
            name: "Container Security",
            desc: "Security scanning and runtime protection for containerised workloads.",
            icon: "Container",
          },
          {
            id: "sc4",
            name: "DevSecOps",
            desc: "Shift-left security integrated directly into your CI/CD pipelines.",
            icon: "Code2",
          },
        ],
      },
    ],
  },
};

// ===========================================================================
// ARABIC (ar) VERSIONS
// ===========================================================================

// ---------------------------------------------------------------------------
// Global (nav + footer) — Arabic
// ---------------------------------------------------------------------------
export const hardcodedGlobalDataAr = {
  data: {
    topNav: {
      logo: {
        id: "1",
        documentId: "logo",
        url: "/img_frame_39.svg",
        alternativeText: "شعار ديسيفي",
        name: "logo",
      },
      navItems: [
        {
          id: 1,
          text: "الرئيسية",
          href: "#home",
          isExternal: false,
          isPrimary: false,
          subnav: [],
        },
        {
          id: 2,
          text: "عن الشركة",
          href: "/ar/about",
          isExternal: false,
          isPrimary: false,
          subnav: [],
        },
        {
          id: 3,
          text: "الخدمات",
          href: "#services",
          isExternal: false,
          isPrimary: false,
          subnav: [
            {
              id: 1,
              name: "استشارات الأمن السيبراني",
              desc: "توجيه استراتيجي متخصص لبرنامج الأمان الخاص بك",
              href: "/ar/consulting",
              icon: "IconConsulting",
            },
            {
              id: 2,
              name: "تقييم واختبار الأمن",
              desc: "اكتشف ثغرات الأمن وعالجها قبل أن يستغلها المهاجمون",
              href: "/ar/assessment",
              icon: "IconAssessment",
            },
            {
              id: 3,
              name: "تدريب التوعية الأمنية",
              desc: "حوّل موظفيك إلى خط الدفاع الأول",
              href: "/ar/training",
              icon: "IconTraining",
            },
            {
              id: 4,
              name: "تكامل الأنظمة",
              desc: "ربط وتأمين أدواتك ومنصاتك بسلاسة",
              href: "/ar/managed-security",
              icon: "IconIntegration",
            },
            {
              id: 5,
              name: "أمن التقنيات التشغيلية",
              desc: "حماية أنظمة التحكم الصناعي من التهديدات السيبرانية",
              href: "/ar/ot-security",
              icon: "IconOT",
            },
            {
              id: 6,
              name: "أمن السحابة",
              desc: "تأمين بيئات AWS وAzure وGCP الخاصة بك",
              href: "/ar/cloud-security",
              icon: "IconCloud",
            },
          ],
        },
        {
          id: 4,
          text: "المدونة",
          href: "/ar/blog",
          isExternal: false,
          isPrimary: false,
          subnav: [],
        },
      ],
      cta: {
        id: 10,
        text: "تواصل معنا",
        href: "/ar/contact",
        isExternal: false,
        isPrimary: true,
      },
    },
    footer: {
      tagline:
        "ديسيفي تقدم حلول أمن سيبراني عملية لحماية مؤسستك من التهديدات المتطورة.",
      mail: "contact@deciphi.com",
      phone: 97441499289,
      logo: {
        id: "2",
        documentId: "footer-logo",
        url: "/img_frame_39.svg",
        alternativeText: "شعار ديسيفي",
        name: "footer-logo",
      },
      heading: [
        { id: 1, text: "هل أنت مستعد لتأمين ", highlight: false },
        { id: 2, text: "شبكتك؟", highlight: true },
      ],
      cta: {
        id: 20,
        text: "تواصل معنا",
        href: "/ar/contact",
        isExternal: false,
        isPrimary: true,
      },
      Explore: [
        {
          id: "e1",
          text: "الرئيسية",
          href: "/ar",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "e2",
          text: "عن الشركة",
          href: "/ar/about",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "e3",
          text: "المدونة",
          href: "/ar/blog",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "e4",
          text: "تواصل معنا",
          href: "/ar/contact",
          isExternal: false,
          isPrimary: false,
        },
      ],
      Services: [
        {
          id: "s1",
          text: "الاستشارات",
          href: "/ar/consulting",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "s2",
          text: "التقييم",
          href: "/ar/assessment",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "s3",
          text: "التدريب",
          href: "/ar/training",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "s4",
          text: "الأمن المُدار",
          href: "/ar/managed-security",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "s5",
          text: "التكامل",
          href: "/ar/integration",
          isExternal: false,
          isPrimary: false,
        },
        {
          id: "s6",
          text: "أمن السحابة",
          href: "/ar/cloud-security",
          isExternal: false,
          isPrimary: false,
        },
      ],
      socialLinks: [],
    },
    seo: {
      metaTitle: "ديسيفي — خبراء الأمن السيبراني",
      metaDescription:
        "ديسيفي تقدم حلول أمن سيبراني عملية لحماية مؤسستك من التهديدات المتطورة.",
    },
  },
};

// ---------------------------------------------------------------------------
// Landing page blocks — Arabic
// ---------------------------------------------------------------------------
export const hardcodedLandingPageAr = {
  data: {
    seo: {
      metaTitle: "اختبار الاختراق والأمن السيبراني في قطر — ديسيفي",
      metaDescription:
        "شركة استشارات الأمن السيبراني في الدوحة. تقييم الثغرات واختبار الاختراق وتطبيق SIEM للشركات في قطر.",
      structuredData: null,
    },
    blocks: [
      // ── Hero ────────────────────────────────────────────────────────────
      {
        __component: "layout.hero",
        id: "hero-1",
        createdAt: "",
        updatedAt: "",
        heading: "تأمين شبكتك بخبرة متخصصة في الأمن السيبراني.",
        text: "في ديسيفي، نساعد المؤسسات على مواكبة المخاطر السيبرانية المتطورة. خدماتنا المدارة من خبراء متخصصين تمكّنك من التصرف بثقة وتأمين مستقبلك.",
        locale: "ar",
        image: {
          id: "h1",
          documentId: "hero-img",
          url: "https://deciphi-pull-zone.b-cdn.net/images.jpeg",
          alternativeText: "صورة بطل الأمن السيبراني",
          name: "hero-image",
        },
        video: {
          id: "v1",
          documentId: "hero-video",
          url: "/herovideo.mp4",
          alternativeText: "فيديو خلفية البطل",
          name: "hero-video",
        },
        buttonLink: [],
      },

      // ── About / Content with Image ───────────────────────────────────────
      {
        __component: "layout.content-with-image",
        id: "about-1",
        createdAt: "",
        updatedAt: "",
        label: "عن الشركة",
        description:
          "نربط النقاط حتى لا تضطر أنت إلى ذلك. في ديسيفي، نبسّط الأمن السيبراني بتحويل التحديات المعقدة إلى استراتيجيات واضحة وفعّالة — نحمي عملياتك اليوم ونهيّئك لمواجهة تهديدات الغد.",
        indicatorlabel: "فريق مقيم في الدوحة",
        heading: [
          { id: 1, text: "أذكى. أكثر أماناً.  ", highlight: false },
          { id: 2, text: "ديسيفي", highlight: true },
        ],
        cta: { text: "اعرف المزيد", href: "#services", isExternal: false },
        text: "",
        cardtext: [
          {
            id: 1,
            value: "مقيمون في الدوحة",
            label: "فريق محلي، في الموقع عند الحاجة.",
          },
          {
            id: 2,
            value: "VAPT مُنجز",
            label: "مشاريع متعددة لتقييم الثغرات واختبار الاختراق مكتملة.",
          },
          {
            id: 3,
            value: "نطاق محدد",
            label: "سعر ثابت. تعرف التكلفة قبل أن نبدأ.",
          },
        ],
        feature: [
          { id: "f1", text: "حلول متخصصة", icon: "Sun" },
          { id: "f2", text: "دفاع متقدم", icon: "Lock" },
          { id: "f3", text: "استشارات استراتيجية", icon: "FileText" },
          { id: "f4", text: "تكامل سلس", icon: "Cloud" },
        ],
        cardImage: {
          id: "a1",
          documentId: "about-img",
          url: "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alternativeText: "لوحة مراقبة الأمن السيبراني",
          name: "about-image",
        },
      },

      // ── Services / Price Grid ────────────────────────────────────────────
      {
        __component: "layout.price-grid",
        id: "services-1",
        createdAt: "",
        updatedAt: "",
        label: "خدماتنا",
        description:
          "نربط النقاط حتى لا تضطر أنت إلى ذلك. في ديسيفي، نبسّط الأمن السيبراني بتحويل التحديات المعقدة إلى استراتيجيات واضحة وفعّالة.",
        heading: [
          { id: 1, text: "أمان  ", highlight: true },
          { id: 2, text: " يناسبك", highlight: false },
        ],
        servicecard: [
          {
            id: "sc1",
            heading: "استشارات الأمن السيبراني",
            description:
              "احصل على توجيه استراتيجي متخصص لبناء برنامج أمن متين وقابل للتوسع يتوافق مع أهدافك.",
            icon: "IconConsulting",
            href: "/ar/consulting",
            images: [
              {
                id: "sc1i1",
                documentId: "sc1-img",
                url: "https://c.ndtvimg.com/2024-03/7q0b626g_women-at-work-generic_625x300_05_March_24.jpeg?downsize=773:435",
                alternativeText: "استشارات",
                name: "consulting-img",
              },
            ],
          },
          {
            id: "sc2",
            heading: "تقييم واختبار الأمن",
            description:
              "تقييم شامل لبنيتك التحتية لاكتشاف ثغرات الأمن ومعالجتها قبل أن يستغلها المهاجمون.",
            icon: "IconAssessment",
            href: "/ar/assessment",
            images: [
              {
                id: "sc2i1",
                documentId: "sc2-img1",
                url: "https://deciphi-pull-zone.b-cdn.net/3099de0aa477b5af3188bed9d56541638939a9ae_6870eb3ff1.avif",
                alternativeText: "التقييم",
                name: "assessment-img1",
              },
              {
                id: "sc2i2",
                documentId: "sc2-img2",
                url: "https://deciphi-pull-zone.b-cdn.net/pexels_thisisengineering_3862383_scaled_e1756632630839_04150bba09.avif",
                alternativeText: "التقييم 2",
                name: "assessment-img2",
              },
            ],
          },
          {
            id: "sc3",
            heading: "تدريب التوعية الأمنية",
            description:
              "مكّن فريقك بتدريب عملي يحوّل موظفيك إلى خط الدفاع الأول.",
            icon: "IconAssessment",
            href: "/ar/training",
            images: [
              {
                id: "sc3i1",
                documentId: "sc3-img",
                url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80",
                alternativeText: "التدريب",
                name: "training-img",
              },
            ],
          },
          {
            id: "sc4",
            heading: "تكامل الأنظمة",
            description:
              "ربط وتأمين أدواتك ومنصاتك وبنيتك التحتية بسلاسة دون المساس بالأداء.",
            icon: "IconTraining",
            href: "/ar/managed-security",
            images: [
              {
                id: "sc4i1",
                documentId: "sc4-img",
                url: "https://deciphi-pull-zone.b-cdn.net/65e163ee818a060ecccc5290_breachsight-scanlines%25401.5x.png.png",
                alternativeText: "الأمن المُدار",
                name: "managed-security-img",
              },
            ],
          },
          {
            id: "sc5",
            heading: "أمن التقنيات التشغيلية",
            description:
              "حماية بيئات التقنيات التشغيلية من التهديدات السيبرانية التي تستهدف أنظمة التحكم الصناعي.",
            icon: "Cpu",
            href: "/ar/ot-security",
            images: [
              {
                id: "sc5i1",
                documentId: "sc5-img",
                url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
                alternativeText: "أمن OT",
                name: "ot-security-img",
              },
            ],
          },
          {
            id: "sc6",
            heading: "أمن السحابة",
            description:
              "تأمين أحمال العمل السحابية والهويات والبيانات عبر بيئات AWS وAzure وGCP.",
            icon: "IconCloud",
            href: "/ar/cloud-security",
            images: [
              {
                id: "sc6i1",
                documentId: "sc6-img",
                url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
                alternativeText: "أمن السحابة",
                name: "cloud-security-img",
              },
            ],
          },
        ],
      },

      // ── Solutions / Card Grid ────────────────────────────────────────────
      {
        __component: "layout.card-grid",
        id: "solutions-1",
        createdAt: "",
        updatedAt: "",
        label: "الحلول",
        description:
          "نصمم حلول الأمن السيبراني بناءً على احتياجاتك الفريدة — لا قوالب جاهزة، لا حشو. فقط حماية ذكية وفعّالة تناسب عملك.",
        heading: [
          { id: 1, text: "مبنيّ ", highlight: false },
          { id: 2, text: "لأجلك", highlight: true },
        ],
        accordian: [
          {
            id: "item-0",
            icon: "IdCard",
            heading: "إدارة الهوية والوصول (IAM)",
            description:
              "في ديسيفي، نقدم أكثر من مجرد أمن سيبراني — نقدم راحة البال. مدعومون بخبرة حقيقية وكفاءة تقنية عميقة، نصمم حلولاً تحمي موظفيك وأنظمتك وبياناتك.",
            points: [
              { id: "p1", point: "التحكم في الوصول المحوري للهوية" },
              { id: "p2", point: "التجزئة الدقيقة للشبكة" },
              { id: "p3", point: "التحقق المستمر" },
            ],
            image: {
              id: "acc1",
              documentId: "acc1-img",
              url: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&q=80",
              alternativeText: "هندسة الثقة الصفرية",
              name: "zt-img",
            },
          },
          {
            id: "item-1",
            icon: "Globe",
            heading: "أمن الشبكات",
            description:
              "تكامل SIEM وSOAR المتقدم الذي يكتشف التهديدات ويرتبها ويستجيب لها في الوقت الفعلي.",
            points: [
              { id: "p4", point: "استخبارات التهديدات في الوقت الفعلي" },
              { id: "p5", point: "كتيبات الاستجابة للحوادث الآلية" },
              { id: "p6", point: "اكتشاف الشذوذ في الشبكة" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://deciphi-pull-zone.b-cdn.net/albert-stoynov-dyUp7WPu5q4-unsplash.jpg",
              alternativeText: "اكتشاف التهديدات",
              name: "tdr-img",
            },
          },
          {
            id: "item-2",
            icon: "Database",
            heading: "أمن البيانات",
            description:
              "حماية البيانات الحساسة أينما كانت — في حالة الراحة أو النقل أو الاستخدام — من خلال التشفير وسياسات DLP وأطر التصنيف الصارمة.",
            points: [
              { id: "p7", point: "تحليل الفجوات ووضع خارطة الطريق" },
              { id: "p8", point: "تطوير السياسات والإجراءات" },
              { id: "p9", point: "دعم الاستعداد للتدقيق" },
            ],
            image: {
              id: "acc3",
              documentId: "acc3-img",
              url: "https://deciphi-pull-zone.b-cdn.net/lewis-kang-ethe-ngugi-f5pTwLHCsAg-unsplash.jpg",
              alternativeText: "الامتثال",
              name: "compliance-img",
            },
          },
          {
            id: "item-5",
            icon: "Shield",
            heading: "أمن نقاط النهاية",
            description:
              "تكامل SIEM وSOAR المتقدم الذي يكتشف التهديدات ويرتبها ويستجيب لها في الوقت الفعلي.",
            points: [
              { id: "p4", point: "استخبارات التهديدات في الوقت الفعلي" },
              { id: "p5", point: "كتيبات الاستجابة للحوادث الآلية" },
              { id: "p6", point: "مراقبة مستمرة لنقاط النهاية" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://deciphi-pull-zone.b-cdn.net/tai-bui-0FNgdyStfFw-unsplash.jpg",
              alternativeText: "اكتشاف التهديدات",
              name: "tdr-img",
            },
          },
          {
            id: "item-3",
            icon: "Cloud",
            heading: "أمن السحابة",
            description:
              "أمن سحابي شامل من مراجعات الإعدادات إلى الحماية في وقت التشغيل، لضمان بقاء بيئاتك السحابية متوافقة وآمنة في كل طبقة.",
            points: [
              { id: "p4", point: "استخبارات التهديدات في الوقت الفعلي" },
              { id: "p5", point: "كتيبات الاستجابة للحوادث الآلية" },
              { id: "p6", point: "إدارة مستمرة للوضع الأمني" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://deciphi-pull-zone.b-cdn.net/hazel-z-FocSgUZ10JM-unsplash.jpg",
              alternativeText: "اكتشاف التهديدات",
              name: "tdr-img",
            },
          },
          {
            id: "item-4",
            icon: "Code2",
            heading: "أمن التطبيقات",
            description:
              "تكامل SIEM وSOAR المتقدم الذي يكتشف التهديدات ويرتبها ويستجيب لها في الوقت الفعلي.",
            points: [
              { id: "p4", point: "استخبارات التهديدات في الوقت الفعلي" },
              { id: "p5", point: "كتيبات الاستجابة للحوادث الآلية" },
              { id: "p6", point: "مراجعة الكود الآمن واختباره" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://deciphi-pull-zone.b-cdn.net/petter-lagson-z-upQITw4fY-unsplash.jpg",
              alternativeText: "اكتشاف التهديدات",
              name: "tdr-img",
            },
          },
        ],
      },

      // ── Why Choose Us ────────────────────────────────────────────────────
      {
        __component: "layout.choose-us-section",
        id: "why-1",
        createdAt: "",
        updatedAt: "",
        label: "لماذا ديسيفي",
        description:
          "نجمع بين الخبرة التقنية العميقة والنهج الذي يضع العميل أولاً لتحقيق نتائج أمنية قابلة للقياس.",
        heading: [
          { id: 1, text: "لماذا تختار ", highlight: false },
          { id: 2, text: "ديسيفي", highlight: true },
        ],
        cta: { text: "ابدأ الآن", href: "/ar/contact", isExternal: false },
        image: {
          id: "w1",
          documentId: "why-img",
          url: "https://deciphi-pull-zone.b-cdn.net/question-mark-icon-solving-problem-solution-concept.jpg",
          alternativeText: "خبراء الأمن في العمل",
          name: "why-img",
        },
        points: [
          { id: "wp1", point: "متخصصون أمنيون معتمدون" },
          { id: "wp2", point: "سجل حافل عبر القطاعات" },
          { id: "wp3", point: "نطاق ثابت وسعر ثابت" },
        ],
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Blog Categories — Arabic
// ---------------------------------------------------------------------------
export const hardcodedCategoriesAr = {
  data: [
    { id: 1, documentId: "cat-1", text: "الأمن السيبراني" },
    { id: 2, documentId: "cat-2", text: "أمن السحابة" },
    { id: 3, documentId: "cat-3", text: "أمن التقنيات التشغيلية" },
    { id: 4, documentId: "cat-4", text: "استخبارات التهديدات" },
    { id: 5, documentId: "cat-5", text: "الامتثال" },
  ],
};

// ---------------------------------------------------------------------------
// Blog Posts — Arabic
// ---------------------------------------------------------------------------
export const hardcodedBlogPostsAr = [
  {
    id: 1,
    documentId: "post-1",
    title: "فهم هندسة الثقة الصفرية في عام 2025",
    slug: "understanding-zero-trust-architecture-2025",
    description:
      "انتقلت الثقة الصفرية من مجرد مصطلح رنّان إلى ضرورة تجارية. تعلّم كيف تطبّق نموذج الثقة الصفرية الذي يحمي مؤسستك فعلياً.",
    content: `## ما هي الثقة الصفرية؟

الثقة الصفرية هي إطار أمني يشترط مصادقة جميع المستخدمين — سواء داخل الشبكة أو خارجها — والتحقق منهم بشكل مستمر قبل منح الوصول إلى التطبيقات والبيانات.

## المبادئ الأساسية

**لا تثق أبداً، تحقق دائماً** — يجب مصادقة كل طلب وصول بغض النظر عن مصدره.

**الحد الأدنى من الصلاحيات** — يحصل المستخدمون والأنظمة على الحد الأدنى من الوصول اللازم لأداء مهامهم فحسب.

**افترض الاختراق** — صمّم الأنظمة على افتراض أن الاختراق قد حدث لتقليل الأضرار.

## كيف تبدأ

1. **حدّد سطح الهجوم** — تعرّف على بياناتك وأنظمتك الأكثر حساسية
2. **تحقق من جميع المستخدمين والأجهزة** — طبّق MFA وفحوصات صحة الأجهزة
3. **جزّئ شبكتك** — امنع الحركة الجانبية بضوابط شبكية دقيقة
4. **راقب باستمرار** — سجّل جميع حركة المرور وأعدّ كشف الشذوذ

الثقة الصفرية رحلة لا وجهة. ابدأ بأصولك الأكثر أهمية وتوسّع منها.`,
    publishedAt: "2025-03-15T10:00:00.000Z",
    createdAt: "2025-03-14T09:00:00.000Z",
    updatedAt: "2025-03-15T10:00:00.000Z",
    image: {
      id: 1,
      documentId: "img-post-1",
      url: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
      alternativeText: "هندسة الثقة الصفرية",
      name: "zero-trust.jpg",
    },
    category: { id: 1, documentId: "cat-1", text: "الأمن السيبراني" },
  },
  {
    id: 2,
    documentId: "post-2",
    title: "أبرز 5 أخطاء في أمن السحابة تقع فيها المؤسسات",
    slug: "top-5-cloud-security-mistakes",
    description:
      "يُدخل الانتقال إلى السحابة متجهات هجوم جديدة. إليك أكثر خمسة أخطاء أمنية شيوعاً وكيفية تجنّبها.",
    content: `## أمن السحابة: ما الذي يسير بشكل خاطئ؟

تسارعت وتيرة تبنّي السحابة بشكل ملحوظ، لكن ممارسات الأمان لم تواكب ذلك دائماً. فيما يلي أكثر خمسة أخطاء شيوعاً نلاحظها.

## الخطأ الأول: مستودعات تخزين غير مضبوطة بشكل صحيح

كشفت دلاء S3 العامة وحاويات Azure Blob عن بيانات حساسة لعدد لا يحصى من المؤسسات. راجع دائماً أذونات التخزين وفعّل الإصدار.

## الخطأ الثاني: أدوار IAM ذات صلاحيات مفرطة

منح وصول المسؤول بشكل واسع مريح لكنه خطير. طبّق مبدأ الحد الأدنى من الصلاحيات على كل دور IAM وراجع الأذونات ربع سنوياً.

## الخطأ الثالث: غياب المصادقة متعددة العوامل

تقلل MFA بشكل كبير من خطر اختراق بيانات الاعتماد. فعّلها لجميع الحسابات، خاصة تلك ذات الصلاحيات المرتفعة.

## الخطأ الرابع: تجاهل سجلات السحابة الأصلية

تمنحك CloudTrail وAzure Monitor وGCP Cloud Logging رؤية كاملة لبيئتك. بدونها، أنت تطير في الظلام.

## الخطأ الخامس: تخطّي تقييمات الأمن

تكتشف تقييمات الوضع الأمني السحابي (CSPA) المنتظمة الانحراف عن خط الأساس الأمني قبل أن يتحول إلى حادثة.`,
    publishedAt: "2025-04-20T08:00:00.000Z",
    createdAt: "2025-04-19T08:00:00.000Z",
    updatedAt: "2025-04-20T08:00:00.000Z",
    image: {
      id: 2,
      documentId: "img-post-2",
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      alternativeText: "أمن السحابة",
      name: "cloud-security.jpg",
    },
    category: { id: 2, documentId: "cat-2", text: "أمن السحابة" },
  },
  {
    id: 3,
    documentId: "post-3",
    title: "أمن OT: حماية أنظمة التحكم الصناعي",
    slug: "ot-security-protecting-industrial-control-systems",
    description:
      "تواجه بيئات التقنيات التشغيلية تهديدات سيبرانية فريدة ومتنامية. اكتشف كيف تبني برنامج أمن OT متيناً.",
    content: `## مشهد تهديدات OT

كانت أنظمة التقنيات التشغيلية (OT) وأنظمة التحكم الصناعي (ICS) تُعدّ آمنة من التهديدات السيبرانية بسبب العزل الهوائي. هذا الافتراض بات الآن من الماضي.

## لماذا OT مختلف

غالباً ما تعمل أنظمة OT ببرامج قديمة لا يمكن ترقيتها بسهولة. يمكن أن يكلّف التوقف عن التحديثات ملايين الدولارات، وكثير من البروتوكولات صُمِّمت للموثوقية لا للأمن.

## ضوابط أمن OT الرئيسية

**تجزئة الشبكة** — افصل شبكات OT عن شبكات تقنية المعلومات باستخدام مناطق DMZ صناعية وجدران حماية مصممة لبروتوكولات OT.

**جرد الأصول** — لا يمكنك حماية ما لا تراه. احتفظ بجرد فوري لكل جهاز على شبكة OT.

**إدارة الثغرات** — أولوية الترقيع بناءً على المخاطر على العمليات الفيزيائية، لا على درجات CVSS فحسب.

**تخطيط الاستجابة للحوادث** — طوّر كتيبات إجراءات خاصة بـ OT تأخذ في الاعتبار العواقب الفيزيائية للحوادث السيبرانية.`,
    publishedAt: "2025-05-10T12:00:00.000Z",
    createdAt: "2025-05-09T12:00:00.000Z",
    updatedAt: "2025-05-10T12:00:00.000Z",
    image: {
      id: 3,
      documentId: "img-post-3",
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      alternativeText: "أنظمة التحكم الصناعي",
      name: "ot-security.jpg",
    },
    category: { id: 3, documentId: "cat-3", text: "أمن التقنيات التشغيلية" },
  },
  {
    id: 4,
    documentId: "post-4",
    title: "كيف تبني برنامج استخبارات التهديدات السيبرانية",
    slug: "build-cyber-threat-intelligence-programme",
    description:
      "تحوّل استخبارات التهديدات البيانات الخام إلى رؤى قابلة للتنفيذ. إليك دليل عملي لبناء برنامج CTI من الصفر.",
    content: `## ما هي استخبارات التهديدات السيبرانية؟

استخبارات التهديدات السيبرانية (CTI) هي جمع وتحليل المعلومات حول التهديدات لمساعدة المؤسسات على اتخاذ قرارات أمنية مستنيرة.

## أنواع الاستخبارات

- **الاستراتيجية** — اتجاهات عالية المستوى لصنع القرار التنفيذي
- **التشغيلية** — معلومات حول جهات التهديد وحملاتها المحددة
- **التكتيكية** — مؤشرات الاختراق (IOCs) كعناوين IP والهاشات والنطاقات
- **التقنية** — تفاصيل تقنية متعمقة حول البرمجيات الخبيثة وتقنيات الاستغلال

## بناء برنامج CTI

### الخطوة الأولى: حدّد المتطلبات
حدّد ما تحتاج مؤسستك معرفته لتقليل المخاطر. أشرك أصحاب المصلحة عبر تقنية المعلومات والقانون والفرق التنفيذية.

### الخطوة الثانية: اجمع البيانات
استخدم مزيجاً من استخبارات المصادر المفتوحة (OSINT) والتغذيات التجارية ومجتمعات تبادل المعلومات.

### الخطوة الثالثة: حلّل وضع في السياق
المؤشرات الخام ليست استخبارات. أضف سياقاً حول جهات التهديد ودوافعها وصلتها ببيئتك المحددة.

### الخطوة الرابعة: وزّع وتصرّف
سلّم الاستخبارات بالتنسيق المناسب للجمهور المناسب — سواء كان حظراً آلياً لـ IOC أو إحاطة بمستوى مجلس الإدارة.`,
    publishedAt: "2025-06-05T09:00:00.000Z",
    createdAt: "2025-06-04T09:00:00.000Z",
    updatedAt: "2025-06-05T09:00:00.000Z",
    image: {
      id: 4,
      documentId: "img-post-4",
      url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      alternativeText: "استخبارات التهديدات",
      name: "threat-intel.jpg",
    },
    category: { id: 4, documentId: "cat-4", text: "استخبارات التهديدات" },
  },
  {
    id: 5,
    documentId: "post-5",
    title: "الامتثال لـ NCA ECC: دليل عملي للمؤسسات في قطر",
    slug: "nca-ecc-compliance-guide-qatar",
    description:
      "تحدد ضوابط الأمن السيبراني الأساسية لـ NCA الحد الأدنى للأمن السيبراني في المنطقة. إليك كيفية تحقيق الامتثال والحفاظ عليه.",
    content: `## فهم NCA ECC

توفر الضوابط الأساسية للأمن السيبراني الصادرة عن الهيئة الوطنية للأمن السيبراني (ECC) إطاراً شاملاً للمؤسسات العاملة في المنطقة.

## مجالات التحكم الرئيسية

### 1. حوكمة الأمن السيبراني
أسّس سياسة للأمن السيبراني وحدّد المسؤوليات بوضوح وضمن مساءلة تنفيذية على نتائج الأمن.

### 2. دفاع الأمن السيبراني
طبّق ضوابط تقنية تشمل حماية نقاط النهاية وإدارة الثغرات ومراقبة أمن الشبكة.

### 3. الأمن السيبراني للأطراف الثالثة
قيّم وأدر مخاطر الأمن السيبراني التي يُدخلها الموردون والمورّدون والشركاء.

### 4. مرونة الأمن السيبراني
طوّر واختبر خطط الاستجابة للحوادث واستمرارية الأعمال لضمان قدرتك على التعافي من حادثة سيبرانية.

## خارطة طريق الامتثال

1. أجرِ تقييم الفجوات مقابل ضوابط ECC
2. أولوية العلاج بناءً على المخاطر
3. طبّق الضوابط ووثّق الأدلة
4. أجرِ تدقيقاً داخلياً وخارجياً
5. أسّس مراقبة مستمرة ومراجعات سنوية

الامتثال ليس تمريناً لمرة واحدة. ادمجه في برنامج الأمن لديك كنشاط مستمر.`,
    publishedAt: "2025-07-18T11:00:00.000Z",
    createdAt: "2025-07-17T11:00:00.000Z",
    updatedAt: "2025-07-18T11:00:00.000Z",
    image: {
      id: 5,
      documentId: "img-post-5",
      url: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
      alternativeText: "إطار الامتثال",
      name: "compliance.jpg",
    },
    category: { id: 5, documentId: "cat-5", text: "الامتثال" },
  },
  {
    id: 6,
    documentId: "post-6",
    title: "الاستجابة لبرامج الفدية: ماذا تفعل في أول 24 ساعة",
    slug: "ransomware-response-first-24-hours",
    description:
      "عندما تضرب برامج الفدية، كل دقيقة تحسب. يرشدك هذا الدليل خطوة بخطوة عبر 24 ساعة الحرجة الأولى في الاستجابة للحوادث.",
    content: `## الساعة تبدأ الآن

عند اكتشاف برنامج فدية، القرارات التي تتخذها في أول 24 ساعة ستحدد مدى جودة تعافيك. إليك ما يجب فعله.

## ساعة 0–2: احتواء الحادثة

**عزل الأنظمة المتأثرة فوراً** — افصل عن الشبكة لكن لا تغلق (قد يلزم التحليل الجنائي للذاكرة).

**أخطر فريق الاستجابة للحوادث** — فعّل خطة IR وانخرط في دعم خارجي إذا لزم.

**احفظ الأدلة** — التقط لقطات للأنظمة المتأثرة قبل أي معالجة.

## ساعة 2–6: قيّم الضرر

- حدّد نوع برنامج الفدية (تحقق من ID Ransomware)
- حدّد نطاق الانتشار — أي الأنظمة مشفّرة؟
- تحقق مما إذا حدث تسريب بيانات قبل التشفير
- حدّد متجه الوصول الأولي

## ساعة 6–12: أخطر أصحاب المصلحة

- أحطِ القيادة التنفيذية والمستشار القانوني علماً
- قيّم التزامات الإخطار التنظيمي (GDPR، NCA، إلخ)
- تواصل مع التأمين السيبراني إذا انطبق
- لا تدفع الفدية دون استشارة قانونية

## ساعة 12–24: ابدأ التعافي

- ابدأ الاستعادة من نسخ احتياطية نظيفة
- أعد بناء الأنظمة المتأثرة من صور معروفة
- رقّع الثغرة التي سمحت بالوصول الأولي
- راقب آليات الاستمرار

## الوقاية خير من العلاج

أفضل استجابة لبرامج الفدية هي التي لا تحتاجها أبداً. استثمر في نسخ احتياطية غير متصلة بالشبكة وكشف نقاط النهاية وتدريب توعية الموظفين.`,
    publishedAt: "2025-08-22T07:00:00.000Z",
    createdAt: "2025-08-21T07:00:00.000Z",
    updatedAt: "2025-08-22T07:00:00.000Z",
    image: {
      id: 6,
      documentId: "img-post-6",
      url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      alternativeText: "الاستجابة لبرامج الفدية",
      name: "ransomware.jpg",
    },
    category: { id: 1, documentId: "cat-1", text: "الأمن السيبراني" },
  },
  {
    id: 7,
    documentId: "post-7",
    title: "تدريب التوعية الأمنية الذي يُحدث فرقاً فعلياً",
    slug: "security-awareness-training-that-works",
    description:
      "معظم برامج التوعية الأمنية تفشل في تغيير السلوك. تعلّم كيف تصمم تدريباً يترسّخ ويقلل المخاطر بشكل قابل للقياس.",
    content: `## لماذا يفشل التدريب التقليدي

التدريب السنوي القائم على النقر له تأثير ضئيل على السلوك الأمني. الناس ينسون ما تعلموه في غضون أيام، والتنسيق لا يشركهم.

## مبادئ التدريب الفعّال

### اجعله ذا صلة
المحتوى العام حول التصيد الاحتيالي لا يُحدث أثراً. أرِ الموظفين أمثلة حقيقية تستهدف قطاعك وشركتك ودورهم المحدد.

### اجعله متكرراً
نقاط الاتصال القصيرة والمنتظمة (تعلّم شهري مصغّر) أكثر فاعلية بكثير من جلسة سنوية واحدة طويلة.

### اجعله عملياً
حملات التصيد المحاكاة والتمارين العملية ومختبرات التطبيق تبني ذاكرة عضلية لا تستطيع النظرية وحدها بناءها.

### قِس ما يهم
تتبّع معدلات النقر في محاكاة التصيد ومعدلات الإبلاغ والوقت حتى الإبلاغ. هذه مؤشرات رائدة لثقافة الأمن.

## بناء برنامجك

1. **تقييم الخط الأساسي** — شغّل محاكاة تصيد لقياس نقطة بدايتك
2. **منهج مُستهدف** — ركّز أولاً على مجموعات الموظفين الأعلى مخاطرة
3. **التلعيب** — استخدم لوحات المتصدرين والشارات والمنافسة الودية
4. **دعم القيادة** — عندما يشارك المديرون التنفيذيون، يتبعهم الموظفون
5. **التحسين المستمر** — راجع المقاييس ربع سنوياً وحدّث المحتوى بانتظام

التوعية الأمنية مبادرة ثقافية، لا مجرد برنامج تدريبي.`,
    publishedAt: "2025-09-01T10:00:00.000Z",
    createdAt: "2025-08-31T10:00:00.000Z",
    updatedAt: "2025-09-01T10:00:00.000Z",
    image: {
      id: 7,
      documentId: "img-post-7",
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      alternativeText: "تدريب أمني",
      name: "security-training.jpg",
    },
    category: { id: 1, documentId: "cat-1", text: "الأمن السيبراني" },
  },
  {
    id: 8,
    documentId: "post-8",
    title: "اختبار الاختراق مقابل تقييم الثغرات: ما الفرق؟",
    slug: "penetration-testing-vs-vulnerability-assessment",
    description:
      "كثيراً ما يُخلط بين هذين المصطلحين لكنهما يخدمان أغراضاً مختلفة جداً. افهم متى تستخدم كلاً منهما وما الذي تتوقعه من كل تعامل.",
    content: `## أداتان مختلفتان لأهداف مختلفة

تقييمات الثغرات واختبارات الاختراق متكاملتان لكن مختلفتان. اختيار الخاطئة لحالتك يعني ميزانية مهدرة وثقة زائفة.

## تقييم الثغرات

يستخدم تقييم الثغرات أدوات آلية لتحديد نقاط الضعف المعروفة في أنظمتك. إنه واسع وسريع وينتج قائمة بالمشكلات المرتّبة حسب الأولوية للمعالجة.

**الأنسب لـ:** الفحص المنتظم ومتطلبات الامتثال وفهم مستوى تعرضك الأساسي.

**القيود:** لن يخبرك إذا كانت الثغرات قابلة للاستغلال فعلياً في بيئتك المحددة.

## اختبار الاختراق

اختبار الاختراق هجوم محاكى من متخصصي أمن ماهرين. يحاول المختبرون استغلال الثغرات بنشاط لإثبات التأثير الحقيقي.

**الأنسب لـ:** اختبار أنظمة محددة والتحقق من الضوابط وإثبات المخاطر للمديرين التنفيذيين.

**القيود:** أكثر تكلفة، لقطة لحظة محددة، يتطلب تحديد نطاق دقيق.

## أيهما تحتاج؟

| العامل | تقييم الثغرات | اختبار الاختراق |
|--------|---------------|-----------------|
| التكرار | شهري/ربع سنوي | سنوي/بعد تغييرات كبرى |
| التغطية | واسعة | مستهدفة |
| العمق | سطحي | عميق |
| التكلفة | منخفضة | مرتفعة |
| المخرج | قائمة ثغرات | سلسلة استغلال + تأثير |

## الجواب: كلاهما

يستخدم برنامج الأمن الناضج تقييمات الثغرات باستمرار واختبارات الاختراق دورياً. يعملان معاً لمنحك تغطية شاملة.`,
    publishedAt: "2025-09-05T08:00:00.000Z",
    createdAt: "2025-09-04T08:00:00.000Z",
    updatedAt: "2025-09-05T08:00:00.000Z",
    image: {
      id: 8,
      documentId: "img-post-8",
      url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      alternativeText: "اختبار الاختراق",
      name: "pentest.jpg",
    },
    category: { id: 1, documentId: "cat-1", text: "الأمن السيبراني" },
  },
];

// ---------------------------------------------------------------------------
// Service Pages — Arabic
// ---------------------------------------------------------------------------
export const hardcodedServicePagesAr: Record<
  string,
  { seo?: { metaTitle: string; metaDescription: string }; blocks: object[] }
> = {
  consulting: {
    seo: {
      metaTitle: "استشارات الأمن السيبراني في الدوحة، قطر — ديسيفي",
      metaDescription:
        "توجيه أمني عملي للشركات في قطر — ما ينطبق عليك، وما تصلحه أولاً، وما يمكنك تجاهله بأمان الآن.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "consulting-1",
        createdAt: "",
        updatedAt: "",
        label: "خدماتنا",
        heading: [
          { id: 1, text: "استشارات ", highlight: false },
          { id: 2, text: "الأمن السيبراني", highlight: true },
        ],
        description:
          "توجيه عملي ومتخصص لبناء برنامج أمن متين وقابل للتوسع يناسب أهداف مؤسستك — من قاعدتنا في الدوحة، قطر.",
        quote: "لا نكتفي بتحديد الثغرات — نساعدك على سدّها بثقة.",
        boldtext: [
          { id: 1, text: "استراتيجية ", highlight: false },
          { id: 2, text: "تُحقق النتائج.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "ما ", highlight: false },
          { id: 2, text: "نقدمه", highlight: true },
        ],
        points: [
          { id: "p1", point: "تصميم شامل لبرنامج الأمن" },
          { id: "p2", point: "تحديد شهية المخاطر وتسامحها" },
          { id: "p3", point: "تطوير إطار حوكمة الأمن" },
          {
            id: "p4",
            point: "التقارير والمقاييس الأمنية على مستوى مجلس الإدارة",
          },
          { id: "p5", point: "ترتيب أولويات خارطة الطريق وتخطيط الميزانية" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "يحمل مستشارونا خبرة حقيقية من مشاريع في البنية التحتية الحيوية والخدمات المالية والقطاع الحكومي في قطر والمنطقة. نخترق التعقيد لمنحك استراتيجية أمن واضحة وقابلة للتنفيذ.",
          },
          {
            id: "par2",
            point:
              "نواءم استثماراتك الأمنية مع نتائج الأعمال وحيثما ينطبق مع البيئة التنظيمية في قطر — بما في ذلك إرشادات NIA والتزامات PDPPL — لضمان أن كل ضابط تطبّقه يقلل من المخاطر القابلة للقياس ويدعم أهدافك التشغيلية.",
          },
        ],
        largeImage: {
          id: "li1",
          documentId: "consulting-large",
          url: "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=2940&auto=format&fit=crop",
          alternativeText: "فريق استشارات الأمن السيبراني",
          name: "consulting-large.jpg",
        },
        cardImage: {
          id: "ci1",
          documentId: "consulting-card",
          url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
          alternativeText: "مستشار الأمن",
          name: "consulting-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "تصميم برنامج الأمن",
            desc: "تصميم شامل لبرنامج أمن مصمم لملف مخاطر مؤسستك.",
            icon: "Wallpaper",
          },
          {
            id: "sc2",
            name: "تقييم المخاطر",
            desc: "تحديد المخاطر وتقييمها وترتيب أولويتها عبر كامل سطح الهجوم.",
            icon: "NotebookPen",
          },
          {
            id: "sc3",
            name: "إطار الحوكمة",
            desc: "سياسات وإجراءات وضوابط متوافقة مع ISO 27001 وNIST وNCA ECC.",
            icon: "Landmark",
          },
          {
            id: "sc4",
            name: "الاستشارة التنفيذية",
            desc: "تقارير جاهزة لمجلس الإدارة وخدمات استشارة CISO للفرق القيادية.",
            icon: "Info",
          },
        ],
      },
    ],
  },

  assessment: {
    seo: {
      metaTitle: "اختبار الاختراق و VAPT في قطر — ديسيفي",
      metaDescription:
        "تقييم الثغرات واختبار الاختراق للمؤسسات في قطر. نطاق ثابت وسعر ثابت وتقرير يمكن لإدارتك قراءته.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "assessment-1",
        createdAt: "",
        updatedAt: "",
        label: "خدماتنا",
        heading: [
          { id: 1, text: "اختبار الاختراق ", highlight: false },
          { id: 2, text: "وتقييم الثغرات", highlight: true },
        ],
        description:
          "تقييم شامل لبنيتك التحتية لاكتشاف ثغرات الأمن ومعالجتها قبل أن يستغلها المهاجمون — للمؤسسات في قطر.",
        quote: "اعرف ثغراتك قبل أن يعرفها خصومك.",
        boldtext: [
          { id: 1, text: "اكتشف الثغرات. ", highlight: false },
          { id: 2, text: "أصلحها بسرعة.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "قدرات ", highlight: false },
          { id: 2, text: "الاختبار", highlight: true },
        ],
        points: [
          { id: "p1", point: "اختبار اختراق الشبكة والبنية التحتية" },
          { id: "p2", point: "اختبار أمن تطبيقات الويب والهاتف المحمول" },
          { id: "p3", point: "عمليات الفريق الأحمر ومحاكاة الخصم" },
          { id: "p4", point: "تقييمات الهندسة الاجتماعية والتصيد الاحتيالي" },
          { id: "p5", point: "تقييم الوضع الأمني السحابي" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "يحاكي مختبرونا المعتمدون سيناريوهات هجوم واقعية لكشف نقاط الضعف في دفاعاتك. كل مشروع في قطر يُحدَّد نطاقه بعناية ويقدم توجيه معالجة قابل للتنفيذ — لا مجرد قائمة بـ CVEs.",
          },
          {
            id: "par2",
            point:
              "نوفر تقارير تقنية مفصلة لفريق الأمن ولخصات تنفيذية للقيادة، مما يمنح كل صاحب مصلحة الوضوح الذي يحتاجه للتصرف. المشاريع بنطاق ثابت وسعر ثابت — تعرف ما ستحصل عليه قبل أن نبدأ.",
          },
        ],
        largeImage: {
          id: "li2",
          documentId: "assessment-large",
          url: "https://deciphi-pull-zone.b-cdn.net/pexels-yankrukov-7691720.jpg",
          alternativeText: "تقييم الأمن",
          name: "assessment-large.jpg",
        },
        cardImage: {
          id: "ci2",
          documentId: "assessment-card",
          url: "https://deciphi-pull-zone.b-cdn.net/pexels_thisisengineering_3862383_scaled_e1756632630839_04150bba09.avif",
          alternativeText: "اختبار الأمن",
          name: "assessment-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "اختبار الاختراق",
            desc: "استغلال يدوي من قبل مختبرين معتمدين للتحقق من التأثير الحقيقي.",
            icon: "BugPlay",
          },
          {
            id: "sc2",
            name: "تقييم الثغرات",
            desc: "فحص آلي ويدوي لتحديد نقاط الضعف المعروفة عبر بيئتك.",
            icon: "NotebookPenIcon",
          },
          {
            id: "sc3",
            name: "عمليات الفريق الأحمر",
            desc: "محاكاة خصم كامل النطاق تستهدف الأشخاص والعمليات والتكنولوجيا.",
            icon: "ShieldHalf",
          },
          {
            id: "sc4",
            name: "مراجعة أمن السحابة",
            desc: "مراجعة الإعدادات والهندسة المعمارية لبيئات AWS أو Azure أو GCP.",
            icon: "Cloud",
          },
        ],
      },
    ],
  },

  training: {
    seo: {
      metaTitle: "تدريب التوعية الأمنية في قطر — ديسيفي",
      metaDescription:
        "تدريب التوعية الأمنية للفرق في قطر، بلغة واضحة ومبني حول طريقة عمل موظفيك فعلياً.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "training-1",
        createdAt: "",
        updatedAt: "",
        label: "خدماتنا",
        heading: [
          { id: 1, text: "تدريب التوعية ", highlight: false },
          { id: 2, text: "الأمنية", highlight: true },
        ],
        description:
          "مكّن فريقك بتدريب عملي يحوّل موظفيك إلى خط الدفاع الأول — مبني للمؤسسات في قطر.",
        quote: "موظفوك إما أكبر ثغراتك أو أقوى دفاعاتك. نجعلهم الأخير.",
        boldtext: [
          { id: 1, text: "بنيان ", highlight: false },
          { id: 2, text: "ثقافة أمنية.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "برامج ", highlight: false },
          { id: 2, text: "التدريب", highlight: true },
        ],
        points: [
          { id: "p1", point: "حملات محاكاة التصيد الاحتيالي" },
          { id: "p2", point: "وحدات التوعية الأمنية حسب الدور" },
          {
            id: "p3",
            point: "إحاطات الأمن السيبراني للتنفيذيين ومجلس الإدارة",
          },
          { id: "p4", point: "تمارين محاكاة الاستجابة للحوادث" },
          { id: "p5", point: "تدريب الامتثال والتنظيم" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "نصمم برامج تدريب للمؤسسات في الدوحة وعبر قطر تتجاوز وحدات الامتثال السنوية القائمة على النقر. محتوانا ذو صلة وجذاب ومصمم للتهديدات المحددة التي تواجهها مؤسستك.",
          },
          {
            id: "par2",
            point:
              "باستخدام التصيد المحاكى والتعلم المُلعَّب ودراسات الحالة الواقعية، ندفع نحو تغيير سلوكي دائم يقلل بشكل قابل للقياس من مستوى المخاطر البشرية لديك.",
          },
        ],
        largeImage: {
          id: "li3",
          documentId: "training-large",
          url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
          alternativeText: "تدريب أمني",
          name: "training-large.jpg",
        },
        cardImage: {
          id: "ci3",
          documentId: "training-card",
          url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
          alternativeText: "ورشة تدريبية",
          name: "training-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "محاكاة التصيد الاحتيالي",
            desc: "حملات تصيد واقعية لقياس مرونة الموظفين وتحسينها.",
            icon: "Bug",
          },
          {
            id: "sc2",
            name: "وحدات التوعية",
            desc: "وحدات قصيرة وجذابة تغطي نظافة كلمات المرور والهندسة الاجتماعية والمزيد.",
            icon: "Megaphone",
          },
          {
            id: "sc3",
            name: "تمارين المحاكاة",
            desc: "تمارين استجابة للحوادث بإشراف لاختبار فريقك تحت الضغط.",
            icon: "MonitorCog",
          },
          {
            id: "sc4",
            name: "إحاطات تنفيذية",
            desc: "إحاطات مخاطر سيبرانية جاهزة لمجلس الإدارة مصممة للقيادات غير التقنية.",
            icon: "HeartHandshake",
          },
        ],
      },
    ],
  },

  "managed-security": {
    seo: {
      metaTitle: "SIEM وتكامل الأمن في قطر — ديسيفي",
      metaDescription:
        "نصمم ونطرح ونكامل منصات مراقبة الأمن للمؤسسات في قطر، ونسلّمها وهي تعمل.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "managed-1",
        createdAt: "",
        updatedAt: "",
        label: "خدماتنا",
        heading: [
          { id: 1, text: "تكامل ", highlight: false },
          { id: 2, text: "الأنظمة", highlight: true },
        ],
        description:
          "ربط وتأمين أدواتك ومنصاتك وبنيتك التحتية بسلاسة دون المساس بالأداء. نخدم المؤسسات في الدوحة وعبر قطر.",
        quote: "أمن يعمل مع أنظمتك، لا ضدها.",
        boldtext: [
          { id: 1, text: "موحّد. آمن. ", highlight: false },
          { id: 2, text: "سلس.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "خدمات ", highlight: false },
          { id: 2, text: "التكامل", highlight: true },
        ],
        points: [
          { id: "p1", point: "نشر منصات SIEM وSOAR" },
          { id: "p2", point: "توحيد وتحسين أدوات الأمن" },
          { id: "p3", point: "تكامل الأمن على مستوى API" },
          { id: "p4", point: "تكامل إدارة الهوية والوصول" },
          { id: "p5", point: "تكامل منصة استخبارات التهديدات" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "نصمم وننفّذ هندسات أمنية للمؤسسات في قطر تجمع أدواتك وبياناتك معاً — مما يمنح فريقك رؤية كاملة وتحكماً عبر بيئتك بأكملها.",
          },
          {
            id: "par2",
            point:
              "من نشر SIEM إلى هندسة شبكة الثقة الصفرية، نضمن أن مجموعة أدوات الأمان تعمل كنظام متماسك وعالي الأداء — ونسلّمها وهي تعمل، لا كمشروع يتطلب دعم الموردين المستمر للعمل.",
          },
        ],
        largeImage: {
          id: "li4",
          documentId: "integration-large",
          url: "https://deciphi-pull-zone.b-cdn.net/systemintegration.jpg",
          alternativeText: "تكامل الأنظمة",
          name: "integration-large.jpg",
        },
        cardImage: {
          id: "ci4",
          documentId: "integration-card",
          url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
          alternativeText: "خدمات التكامل",
          name: "integration-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "نشر SIEM",
            desc: "نشر وضبط كامل لمنصات SIEM للكشف عن التهديدات في الوقت الفعلي.",
            icon: "Monitor",
          },
          {
            id: "sc2",
            name: "أتمتة SOAR",
            desc: "كتيبات استجابة للحوادث آلية لتقليل متوسط وقت الاستجابة.",
            icon: "Bolt",
          },
          {
            id: "sc3",
            name: "تكامل IAM",
            desc: "تكامل سلس لإدارة الهوية والوصول عبر بيئتك.",
            icon: "IdCard",
          },
          {
            id: "sc4",
            name: "توحيد الأدوات",
            desc: "ترشيد أدوات الأمن لتقليل التكلفة والتعقيد.",
            icon: "Wrench",
          },
        ],
      },
    ],
  },

  "ot-security": {
    seo: {
      metaTitle: "أمن OT وICS في قطر — ديسيفي",
      metaDescription:
        "تأمين أنظمة التحكم الصناعي والشبكات التشغيلية في قطر دون إيقاف الإنتاج.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "ot-1",
        createdAt: "",
        updatedAt: "",
        label: "خدماتنا",
        heading: [
          { id: 1, text: "أمن ", highlight: false },
          { id: 2, text: "التقنيات التشغيلية", highlight: true },
        ],
        description:
          "حماية بيئات التقنيات التشغيلية من التهديدات السيبرانية التي تستهدف أنظمة التحكم الصناعي — للمؤسسات في قطر والخليج.",
        quote: "الأنظمة الصناعية تتطلب أماناً صناعياً — مصمماً خصيصاً لـ OT.",
        boldtext: [
          { id: 1, text: "أمّن ", highlight: false },
          { id: 2, text: "عملياتك.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "قدرات أمن ", highlight: false },
          { id: 2, text: "OT", highlight: true },
        ],
        points: [
          { id: "p1", point: "رؤية شبكة OT/ICS وجرد الأصول" },
          { id: "p2", point: "تجزئة الشبكة الصناعية وتصميم DMZ" },
          { id: "p3", point: "تقييم ثغرات OT وتحليل المخاطر" },
          { id: "p4", point: "مراقبة وتنبيه أمن ICS/SCADA" },
          { id: "p5", point: "تخطيط الاستجابة لحوادث OT وتمارينها" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "بيئات التقنيات التشغيلية في قطر تطرح تحديات أمنية فريدة — أنظمة قديمة وبروتوكولات خاصة وعدم تسامح مع التوقف. متخصصو أمن OT لدينا يفهمون هذه القيود ويعملون ضمنها.",
          },
          {
            id: "par2",
            point:
              "نساعدك على اكتساب رؤية كاملة لبيئة OT وتجزئة شبكاتك بفاعلية وبناء قدرات الكشف والاستجابة المتوافقة مع IEC 62443 التي لا تتدخل في العمليات.",
          },
        ],
        largeImage: {
          id: "li5",
          documentId: "ot-large",
          url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
          alternativeText: "أمن OT",
          name: "ot-large.jpg",
        },
        cardImage: {
          id: "ci5",
          documentId: "ot-card",
          url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&q=80",
          alternativeText: "أنظمة التحكم الصناعي",
          name: "ot-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "اكتشاف الأصول",
            desc: "اكتشاف سلبي وجرد لجميع أصول OT دون تعطيل العمليات.",
            icon: "HandCoins",
          },
          {
            id: "sc2",
            name: "تجزئة الشبكة",
            desc: "تصميم وتنفيذ DMZ الصناعي لعزل OT عن تقنية المعلومات الشركة.",
            icon: "Globe",
          },
          {
            id: "sc3",
            name: "تقييم مخاطر OT",
            desc: "تقييم مخاطر شامل متوافق مع إطار IEC 62443.",
            icon: "CircleAlert",
          },
          {
            id: "sc4",
            name: "المراقبة المستمرة",
            desc: "مراقبة شبكات OT مع كشف الشذوذ المضبوط لبروتوكولات ICS.",
            icon: "MonitorCog",
          },
        ],
      },
    ],
  },

  "cloud-security": {
    seo: {
      metaTitle: "خدمات أمن السحابة في قطر — ديسيفي",
      metaDescription:
        "مراجعة إعدادات السحابة وتقوية الأمن للشركات في قطر التي تشغّل Microsoft 365 أو Azure أو AWS.",
    },
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "cloud-1",
        createdAt: "",
        updatedAt: "",
        label: "خدماتنا",
        heading: [
          { id: 1, text: "أمن ", highlight: false },
          { id: 2, text: "السحابة", highlight: true },
        ],
        description:
          "تأمين أحمال العمل السحابية والهويات والبيانات عبر بيئات AWS وAzure وMicrosoft 365 — للشركات في قطر.",
        quote: "السحابة تتحرك بسرعة. أمنك يحتاج أن يتحرك أسرع.",
        boldtext: [
          { id: 1, text: "سحابة آمنة، ", highlight: false },
          { id: 2, text: "في كل طبقة.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "خدمات أمن ", highlight: false },
          { id: 2, text: "السحابة", highlight: true },
        ],
        points: [
          { id: "p1", point: "إدارة الوضع الأمني السحابي (CSPM)" },
          { id: "p2", point: "مراجعة إدارة الهوية والوصول" },
          { id: "p3", point: "أمن الحاويات وKubernetes" },
          { id: "p4", point: "تكامل خط DevSecOps" },
          { id: "p5", point: "توافق السحابة مع المتطلبات التنظيمية" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "بيئات السحابة تطرح متجهات هجوم جديدة — الإعدادات الخاطئة والهويات ذات الصلاحيات المفرطة والتخزين المكشوف من بين الأسباب الأكثر شيوعاً لاختراقات السحابة للمؤسسات في قطر. نساعدك على إيجادها وإصلاحها قبل أن يفعل المهاجمون.",
          },
          {
            id: "par2",
            point:
              "متخصصو أمن السحابة لدينا يغطون AWS وAzure وMicrosoft 365، يقدمون التقييمات ومراجعات الهندسة المعمارية وإدارة الوضع المستمرة للحفاظ على بيئاتك السحابية آمنة ومتوافقة مع متطلبات حماية البيانات في قطر.",
          },
        ],
        largeImage: {
          id: "li6",
          documentId: "cloud-large",
          url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
          alternativeText: "أمن السحابة",
          name: "cloud-large.jpg",
        },
        cardImage: {
          id: "ci6",
          documentId: "cloud-card",
          url: "https://deciphi-pull-zone.b-cdn.net/cloud.avif",
          alternativeText: "البنية التحتية السحابية",
          name: "cloud-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "CSPM",
            desc: "مراقبة مستمرة لإعدادات السحابة للكشف عن الإعدادات الخاطئة ومعالجتها.",
            icon: "Monitor",
          },
          {
            id: "sc2",
            name: "أمن IAM",
            desc: "مراجعة وتطبيق الحد الأدنى من الصلاحيات عبر جميع هويات السحابة.",
            icon: "IdCard",
          },
          {
            id: "sc3",
            name: "أمن الحاويات",
            desc: "فحص الأمن وحماية وقت التشغيل لأحمال العمل المحتواة.",
            icon: "Container",
          },
          {
            id: "sc4",
            name: "DevSecOps",
            desc: "أمن منزاح للأمام مدمج مباشرة في خطوط CI/CD الخاصة بك.",
            icon: "Code2",
          },
        ],
      },
    ],
  },
};
