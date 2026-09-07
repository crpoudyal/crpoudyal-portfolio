export const fallbackProjects = [
  {
    id: 1,
    title: "Weather App",
    subtitle: "Real-time Atmospheric Forecasts & Animations",
    category: "Flutter Apps",
    architecture: "BLoC Pattern • Clean Architecture",
    description: "A real-time weather mobile application featuring dynamic atmospheric animations, 7-day extended forecasts, humidity indexes, and geolocation support.",
    detailed_description: `The Weather App is a showcase of high-performance Flutter UI design and resilient asynchronous architecture. It communicates with the OpenWeatherMap API to deliver precise, location-based weather forecasts, hourly projections, and severe weather indicators.

Key Engineering Highlights:
• BLoC State Management: Clean separation of UI events (FetchWeather, RefreshWeather) from emission states (WeatherLoading, WeatherLoaded, WeatherError).
• Clean Architecture: Organized into Presentation (Widgets & Blocs), Domain (Entities & Use Cases), and Data (DTOs, Repositories, & HTTP Data Providers).
• Fluid UI & Micro-animations: Custom weather icons, smooth gradient transitions that adjust depending on local time (day/night/golden hour), and 60 FPS scrolling.
• Offline Resilience: Local caching with Hive ensures the last fetched weather condition is immediately rendered even without active internet connectivity.`,
    tags: ["Flutter", "Dart", "BLoC", "REST API", "Clean Architecture", "Geolocation", "Hive"],
    imageUrl: "/assets/project-1.png",
    githubUrl: "https://github.com/crpoudyal/Weather_App/",
    liveUrl: "https://github.com/crpoudyal/Weather_App/",
    highlights: [
      "Real-time GPS geolocation and city search",
      "Dynamic weather animations (Rain, Clear, Clouds)",
      "Hourly and 7-day weather trend charts",
      "Offline-first caching with zero cold-start delay"
    ],
    metrics: {
      fps: "60 FPS",
      stateManagement: "flutter_bloc",
      architecture: "Clean Architecture",
      platform: "iOS & Android"
    }
  },
  {
    id: 2,
    title: "News App (BLoC)",
    subtitle: "Curated Global News with Offline Reading",
    category: "Flutter Apps",
    architecture: "BLoC / Cubit • Repository Pattern",
    description: "A modern, distraction-free news reader app aggregating headlines from international and local categories with offline reading capabilities.",
    detailed_description: `The News App delivers high-speed news consumption tailored for mobile devices. Built with Flutter and Dart, the app fetches real-time news articles across various categories including Technology, Business, Science, Health, and Entertainment.

Key Engineering Highlights:
• Repository Pattern: Abstracted NewsRepository decoupling data sources (Remote HTTP API vs. Local SQLite database).
• Debounced Search: Responsive search input allowing instant discovery of articles without spamming backend endpoints.
• Bookmark & Local Reading: Save articles for offline reading powered by SQLite (sqflite) with full HTML content parsing.
• Dark & Light Modes: Adaptive theming utilizing Material 3 dynamic color tokens.`,
    tags: ["Flutter", "Dart", "BLoC", "News API", "SQLite", "Repository Pattern"],
    imageUrl: "/assets/project-2.png",
    githubUrl: "https://github.com/crpoudyal/news_app_bloc",
    liveUrl: "https://github.com/crpoudyal/news_app_bloc",
    highlights: [
      "Real-time news ticker and breaking news alerts",
      "Category tabs (Tech, Business, Entertainment)",
      "Offline article bookmarking with SQLite",
      "Social sharing and external browser launch"
    ],
    metrics: {
      fps: "60 FPS",
      stateManagement: "BLoC / Cubit",
      architecture: "Repository Pattern",
      platform: "iOS & Android"
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
