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
          href: "#about",
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
        "Deciphi delivers cutting-edge cybersecurity solutions to protect your organisation from evolving threats.",
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
          href: "#about",
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
        "Deciphi delivers cutting-edge cybersecurity solutions to protect your organisation from evolving threats.",
    },
  },
};

// ---------------------------------------------------------------------------
// Landing page blocks
// ---------------------------------------------------------------------------
export const hardcodedLandingPage = {
  data: {
    seo: {
      metaTitle: "Deciphi — Securing Your Network",
      metaDescription:
        "Expert cybersecurity services including consulting, assessment, training, and managed security.",
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
          url: "/globe.svg",
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
        indicatorlabel: "Active Protection 24/7",
        heading: [
          { id: 1, text: "Smarter. Safer.  ", highlight: false },
          { id: 2, text: "Deciphi", highlight: true },
        ],
        cta: { text: "Learn More", href: "#services", isExternal: false },
        text: "",
        cardtext: [
          { id: 1, value: "20+", label: "Clients Protected" },
          { id: 2, value: "24/7", label: "SOC Monitoring" },
          // { id: 2, value: "99.9%", label: "Uptime SLA" },
          // { id: 3, value: "", label: "Years Experience" },
          // { id: 4, value: "24/7", label: "SOC Monitoring" },
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
              { id: "p6", point: "Mean time to detect < 10 min" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=700&q=80",
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
              url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80",
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
              { id: "p6", point: "Mean time to detect < 10 min" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=700&q=80",
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
              { id: "p6", point: "Mean time to detect < 10 min" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=700&q=80",
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
              { id: "p6", point: "Mean time to detect < 10 min" },
            ],
            image: {
              id: "acc2",
              documentId: "acc2-img",
              url: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=700&q=80",
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
          url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
          alternativeText: "Security experts at work",
          name: "why-img",
        },
        points: [
          { id: "wp1", point: "Certified security professionals" },
          { id: "wp2", point: "Proven track record across industries" },
          { id: "wp3", point: "24/7 dedicated support" },
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
    title: "Penetration Testing vs Vulnerability Assessment: What's the Difference?",
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
export const hardcodedServicePages: Record<string, { blocks: object[] }> = {
  consulting: {
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
          "Get strategic, expert-driven guidance to build and scale a resilient security programme that fits your goals.",
        quote:
          "We don't just identify the gaps — we help you close them with confidence.",
        boldtext: [
          { id: 1, text: "Strategy that ", highlight: false },
          { id: 2, text: "drives results.", highlight: true },
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
              "Our consultants bring real-world experience from hundreds of engagements across critical infrastructure, financial services, and government sectors. We cut through complexity to give you a clear, actionable security strategy.",
          },
          {
            id: "par2",
            point:
              "We align your security investments with business outcomes — ensuring every control you implement reduces measurable risk while supporting your operational goals.",
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
            icon: "IconConsulting",
          },
          {
            id: "sc2",
            name: "Risk Assessment",
            desc: "Identify, quantify, and prioritise risks across your entire attack surface.",
            icon: "IconAssessment",
          },
          {
            id: "sc3",
            name: "Governance Framework",
            desc: "Policies, procedures, and controls aligned to ISO 27001, NIST, and NCA ECC.",
            icon: "Shield",
          },
          {
            id: "sc4",
            name: "Executive Advisory",
            desc: "Board-ready reporting and CISO advisory services for leadership teams.",
            icon: "FileText",
          },
        ],
      },
    ],
  },

  assessment: {
    blocks: [
      {
        __component: "layout.service-detail-section",
        id: "assessment-1",
        createdAt: "",
        updatedAt: "",
        label: "Our Services",
        heading: [
          { id: 1, text: "Security Assessment ", highlight: false },
          { id: 2, text: "& Testing", highlight: true },
        ],
        description:
          "Thorough evaluation of your infrastructure to uncover and remediate security gaps before attackers exploit them.",
        quote:
          "Know your vulnerabilities before your adversaries do.",
        boldtext: [
          { id: 1, text: "Find gaps. ", highlight: false },
          { id: 2, text: "Fix them fast.", highlight: true },
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
              "Our certified testers simulate real-world attack scenarios to expose weaknesses in your defences. Every engagement is scoped carefully and delivers actionable remediation guidance — not just a list of CVEs.",
          },
          {
            id: "par2",
            point:
              "We provide detailed technical reports for your security team and executive summaries for leadership, giving every stakeholder the clarity they need to act.",
          },
        ],
        largeImage: {
          id: "li2",
          documentId: "assessment-large",
          url: "https://deciphi-pull-zone.b-cdn.net/3099de0aa477b5af3188bed9d56541638939a9ae_6870eb3ff1.avif",
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
            icon: "IconAssessment",
          },
          {
            id: "sc2",
            name: "Vulnerability Assessment",
            desc: "Automated and manual scanning to identify known weaknesses across your estate.",
            icon: "Bug",
          },
          {
            id: "sc3",
            name: "Red Team Operations",
            desc: "Full-scope adversary simulation targeting people, processes, and technology.",
            icon: "ShieldAlert",
          },
          {
            id: "sc4",
            name: "Cloud Security Review",
            desc: "Configuration and architecture review of your AWS, Azure, or GCP environments.",
            icon: "IconCloud",
          },
        ],
      },
    ],
  },

  training: {
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
          "Empower your team with practical training that turns your people into your first line of defence.",
        quote:
          "Your people are either your greatest vulnerability or your strongest defence. We make them the latter.",
        boldtext: [
          { id: 1, text: "Build a ", highlight: false },
          { id: 2, text: "security culture.", highlight: true },
        ],
        heading2: [
          { id: 1, text: "Training ", highlight: false },
          { id: 2, text: "programmes", highlight: true },
        ],
        points: [
          { id: "p1", point: "Phishing simulation campaigns" },
          { id: "p2", point: "Role-based security awareness modules" },
          { id: "p3", point: "Executive and board-level cybersecurity briefings" },
          { id: "p4", point: "Incident response tabletop exercises" },
          { id: "p5", point: "Compliance and regulatory training" },
        ],
        paragraphs: [
          {
            id: "par1",
            point:
              "We design training programmes that go beyond annual click-through compliance modules. Our content is relevant, engaging, and tailored to the specific threats your organisation faces.",
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
            icon: "Mail",
          },
          {
            id: "sc2",
            name: "Awareness Modules",
            desc: "Short, engaging modules covering password hygiene, social engineering, and more.",
            icon: "IconTraining",
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
          "Seamlessly connect and secure your tools, platforms, and infrastructure — without compromising performance.",
        quote:
          "Security that works with your systems, not against them.",
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
              "We design and implement security architectures that bring your tools and data together — giving your team complete visibility and control across your entire environment.",
          },
          {
            id: "par2",
            point:
              "From SIEM deployment to zero-trust network architecture, we ensure your security stack operates as a cohesive, high-performance system.",
          },
        ],
        largeImage: {
          id: "li4",
          documentId: "integration-large",
          url: "https://deciphi-pull-zone.b-cdn.net/65e163ee818a060ecccc5290_breachsight-scanlines%25401.5x.png.png",
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
          "Protecting operational technology environments from cyber threats that target industrial control systems.",
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
              "Operational technology environments present unique security challenges — legacy systems, proprietary protocols, and zero-tolerance for downtime. Our OT security specialists understand these constraints and work within them.",
          },
          {
            id: "par2",
            point:
              "We help you gain full visibility into your OT environment, segment your networks effectively, and build detection and response capabilities that don't interfere with operations.",
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
            icon: "IconOT",
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
            desc: "Comprehensive risk assessment aligned to IEC 62443 and NERC CIP frameworks.",
            icon: "CircleAlert",
          },
          {
            id: "sc4",
            name: "Continuous Monitoring",
            desc: "24/7 monitoring of OT networks with anomaly detection tuned for ICS protocols.",
            icon: "MonitorCog",
          },
        ],
      },
    ],
  },

  "cloud-security": {
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
          "Securing your cloud workloads, identities, and data across AWS, Azure, and GCP environments.",
        quote:
          "The cloud moves fast. Your security needs to move faster.",
        boldtext: [
          { id: 1, text: "Secure cloud, ", highlight: false },
          { id: 2, text: "every layer.", highlight: true },
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
              "Cloud environments introduce new attack vectors — misconfigurations, over-privileged identities, and exposed storage are among the most common causes of cloud breaches. We help you find and fix these before attackers do.",
          },
          {
            id: "par2",
            point:
              "Our cloud security specialists cover AWS, Azure, and GCP, delivering assessments, architecture reviews, and continuous posture management to keep your cloud environments secure and compliant.",
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
          url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
          alternativeText: "Cloud infrastructure",
          name: "cloud-card.jpg",
        },
        serviceCard: [
          {
            id: "sc1",
            name: "CSPM",
            desc: "Continuous monitoring of cloud configurations to detect and remediate misconfigurations.",
            icon: "IconCloud",
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
            icon: "Database",
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
