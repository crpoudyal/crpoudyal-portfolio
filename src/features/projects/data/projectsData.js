export const fallbackProjects = [
  {
    id: 1,
    title: "DynamicEMR - HR",
    subtitle: "Enterprise Mobile HRMS & Hospital Workforce Management",
    category: "Flutter Apps",
    architecture: "Clean Architecture • Flutter BLoC • Dio & FCM",
    description: "An enterprise-grade mobile human resource management system built for healthcare institutions running the DynamicEMR ERP platform. Features live GPS attendance check-in, real-time leave approvals, and shift scheduling.",
    detailed_description: `DynamicEMR HRMS Mobile App is designed and developed exclusively for medical personnel and staff of healthcare organizations powered by Paaila Technologies' DynamicEMR platform.

This mission-critical mobile solution addresses the unique operational demands of 24/7 healthcare institutions: irregular rotational shifts, high-stress on-call assignments, geo-fenced attendance audits, and instant organizational broadcasts.

Key Engineering & Feature Highlights:
• Live Geo-Fenced GPS Attendance: Precision GPS check-in/check-out verifying staff presence within authorized hospital premises, preventing proxy attendance and ensuring transparent work-hour audits.
• End-to-End Leave Workflow: Streamlined leave application submission with instant manager approval workflows, historical balances, and real-time leave entitlement calculations.
• Rotational Shifts & Duty Rosters: Instant mobile visibility into emergency duty schedules, department allocations, night rotations, and on-call timetables.
• Enterprise Security & SSO: Secure pre-configured enterprise authentication integrated with DynamicEMR healthcare ERP infrastructure with zero public signup exposure.
• Real-time Push Notifications: Firebase Cloud Messaging (FCM) integration delivering urgent hospital broadcasts, shift change alerts, and administrative updates.
• Clean Architecture & BLoC: Strict separation into Presentation, Domain (UseCases/Entities), and Data layers (Dio, Interceptors, Repository Pattern) ensuring maximum testability and zero crashes.`,
    tags: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "flutter_bloc",
      "HRMS",
      "GPS Geofencing",
      "Firebase FCM",
      "REST API",
      "Dio",
      "JWT Auth"
    ],
    imageUrl: "/assets/dynamicemr-hr-1.png",
    additional_images: [
      "/assets/dynamicemr-hr-1.png",
      "/assets/dynamicemr-hr-2.png",
      "/assets/dynamicemr-hr-3.png"
    ],
    iconUrl: "/assets/dynamicemr-hr-icon.png",
    githubUrl: null,
    liveUrl: "https://play.google.com/store/apps/details?id=com.paailatechnologies.dynamicemr",
    company: "Paaila Technologies",
    highlights: [
      "GPS-enabled live attendance check-in & geofencing",
      "One-tap leave application & instant approval workflows",
      "Dynamic hospital shift schedules & department roster views",
      "Real-time push alerts via Firebase Cloud Messaging",
      "Direct integration with DynamicEMR Enterprise ERP"
    ],
    metrics: {
      fps: "60 FPS",
      stateManagement: "flutter_bloc",
      architecture: "Clean Architecture",
      platform: "Android (Google Play)"
    }
  },
  {
    id: 2,
    title: "DynamicEMR - Outreach",
    subtitle: "Healthcare Field Operations & Medical Camp Management",
    category: "Flutter Apps",
    architecture: "Offline-First • SQLite • Flutter BLoC",
    description: "A specialized healthcare outreach and field activity management mobile app empowering medical teams to conduct health camps, capture patient screening data in remote areas, and synchronize seamlessly with the central hospital EMR.",
    detailed_description: `DynamicEMR Outreach is engineered specifically for healthcare field workers, community medical officers, and mobile outreach teams conducting medical camps in rural and underserved regions.

Field operations frequently encounter unreliable or non-existent internet connectivity, requiring a robust offline-first architecture that guarantees zero data loss during critical patient evaluations.

Key Engineering & Feature Highlights:
• 100% Offline-First Data Capture: Comprehensive offline storage powered by local SQLite database, allowing field doctors and nurses to register patients, log symptoms, and record vitals without an active internet connection.
• Resilient Two-Way Background Synchronization: As soon as network connectivity is re-established, the app automatically reconciles and syncs local patient records and clinical logs to the central hospital EMR database.
• Field Visit & Medical Camp Management: Complete lifecycle tracking of outreach missions, scheduled camp locations, assigned medical teams, and community outreach initiatives.
• Geo-Tagging & Visit Audit Trails: GPS-verified visit coordinates ensure high accountability for field encounters and accurate geographic mapping of healthcare outreach coverage.
• Inter-Team Coordination & Real-Time Reporting: Aggregated summaries of screened patients, diagnostic test referrals, and triage flags visible to supervisory medical directors.`,
    tags: [
      "Flutter",
      "Dart",
      "Offline-First",
      "SQLite",
      "flutter_bloc",
      "Clean Architecture",
      "Healthcare EMR",
      "Field Operations",
      "REST API",
      "Sync Engine"
    ],
    imageUrl: "/assets/dynamicemr-outreach-1.png",
    additional_images: [
      "/assets/dynamicemr-outreach-1.png",
      "/assets/dynamicemr-outreach-2.png",
      "/assets/dynamicemr-outreach-3.png"
    ],
    iconUrl: "/assets/dynamicemr-outreach-icon.png",
    githubUrl: null,
    liveUrl: "https://play.google.com/store/apps/details?id=com.paailatechnologies.dynamicEMROutreach",
    company: "Paaila Technologies",
    highlights: [
      "100% offline patient registration & clinical screening",
      "Automated two-way cloud sync with central EMR",
      "GPS-tagged field activity logs & audit verification",
      "Comprehensive medical camp reporting & analytics",
      "High reliability in remote & low-connectivity zones"
    ],
    metrics: {
      fps: "60 FPS",
      stateManagement: "flutter_bloc",
      architecture: "Offline-First Clean",
      platform: "Android (Google Play)"
    }
  },
  {
    id: 3,
    title: "Basobas Real Estate",
    subtitle: "Property Discovery & Rental Marketplace",
    category: "Full Stack",
    architecture: "Firebase Realtime • Cloud Firestore",
    description: "A comprehensive property listing, rental discovery, and real estate platform crafted for home buyers, tenants, and realtors across Nepal.",
    detailed_description: `Basobas modernizes how properties are discovered and negotiated in Nepal. The application unites prospective buyers and verified property owners in an intuitive, map-centric interface.

Key Engineering Highlights:
• Cloud Firestore Realtime Sync: Live updates to property availability, price cuts, and listing status.
• Interactive Map Discovery: Integrated Google Maps SDK for Flutter with customized marker clustering and location filtering.
• Direct In-App Contact: Immediate one-tap WhatsApp chat and phone dialer integration to connect buyers with licensed agents.
• Role-Based Features: Distinct workflows for property buyers (saved searches, favorites) and owners (photo uploads, listing verification).`,
    tags: ["Flutter", "Firebase", "Firestore", "Google Maps", "Cloud Messaging", "Full Stack"],
    imageUrl: "/assets/project-3.png",
    additional_images: ["/assets/project-3.png"],
    githubUrl: "https://github.com/crpoudyal/",
    liveUrl: "https://github.com/crpoudyal/",
    highlights: [
      "Interactive property search with map pins",
      "Multi-criteria filtering (price, beds, location)",
      "High-res property image carousel sliders",
      "One-tap agent inquiry via WhatsApp & Call"
    ],
    metrics: {
      fps: "60 FPS",
      stateManagement: "Provider / BLoC",
      architecture: "Cloud Architecture",
      platform: "iOS & Android"
    }
  }
];
