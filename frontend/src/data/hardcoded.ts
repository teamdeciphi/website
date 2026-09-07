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
              name: "Consulting",
              desc: "Strategic cybersecurity consulting",
              href: "/en/consulting",
              icon: "ShieldCheck",
            },
            {
              id: 2,
              name: "Assessment",
              desc: "Vulnerability & risk assessment",
              href: "/en/assessment",
              icon: "Search",
            },
            {
              id: 3,
              name: "Training",
              desc: "Security awareness training",
              href: "/en/training",
              icon: "BookOpen",
            },
            {
              id: 4,
              name: "Managed Security",
              desc: "24/7 managed security services",
              href: "/en/managed-security",
              icon: "Monitor",
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
          "We connect the dots — so you don’t have to. Partnering with industry leaders, we design and implement solutions tailored to your business, ensuring resilience and seamless operations without missing a beat.",
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
          { id: "f1", text: "Expert Solutions ", icon: "ShieldCheck" },
          { id: "f2", text: "Advanced Defense", icon: "Zap" },
          { id: "f3", text: "Strategic Consulting", icon: "FileText" },
          { id: "f4", text: "Seamless Integration", icon: "Cloud" },
        ],
        cardImage: {
          id: "a1",
          documentId: "about-img",
          url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
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
          "Comprehensive cybersecurity services tailored to your organisation's needs.",
        heading: [
          { id: 1, text: "Security  ", highlight: true },
          { id: 2, text: " That Fits", highlight: false },
        ],
        servicecard: [
          {
            id: "sc1",
            heading: "Cybersecurity Consulting",
            description:
              "Get strategic, expert-driven guidance to build and scale a resilient security program that fits your goals.",
            icon: "ShieldCheck",
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
            icon: "Search",
            href: "/en/assessment",
            images: [
              {
                id: "sc2i1",
                documentId: "sc2-img1",
                url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
                alternativeText: "Assessment",
                name: "assessment-img1",
              },
              {
                id: "sc2i2",
                documentId: "sc2-img2",
                url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80",
                alternativeText: "Assessment 2",
                name: "assessment-img2",
              },
            ],
          },
          {
            id: "sc3",
            heading: "Security Training",
            description:
              "Empower your workforce with up-to-date security awareness programmes and hands-on technical training.",
            icon: "BookOpen",
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
            heading: "Managed Security",
            description:
              "Round-the-clock monitoring and response through our dedicated Security Operations Centre.",
            icon: "Monitor",
            href: "/en/managed-security",
            images: [
              {
                id: "sc4i1",
                documentId: "sc4-img",
                url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80",
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
            icon: "Cloud",
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
          "End-to-end security solutions designed for modern threats.",
        heading: [
          { id: 1, text: "Our ", highlight: false },
          { id: 2, text: "Security Solutions", highlight: true },
        ],
        accordian: [
          {
            id: "item-0",
            icon: "ShieldCheck",
            heading: "Zero-Trust Architecture",
            description:
              "Implement a never-trust, always-verify approach to limit lateral movement and reduce your attack surface.",
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
            icon: "Eye",
            heading: "Threat Detection & Response",
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
            icon: "FileText",
            heading: "Compliance & Governance",
            description:
              "Navigate complex regulatory landscapes with our compliance frameworks covering ISO 27001, NCA, NIST, and more.",
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
