import { Smartphone, Layers, Database, GitBranch } from 'lucide-react';

export const skillCategories = [
  {
    id: 'mobile',
    name: 'Mobile & Flutter Core',
    icon: Smartphone,
    description: 'Specialized in crafting pixel-perfect, 60-120 FPS native and cross-platform apps.',
    skills: [
      { name: 'Flutter 3.x', level: 'Expert', icon: null, highlight: 'Widgets, Animations, CustomPainter' },
      { name: 'Dart', level: 'Expert', icon: null, highlight: 'Async, Streams, Null-safety' },
      { name: 'Android (Java)', level: 'Intermediate', icon: null, highlight: 'Gradle, Native Channels, SDK' },
      { name: 'iOS Setup', level: 'Intermediate', icon: null, highlight: 'Xcode, CocoaPods / Swift Package Manager, TestFlight' },
      { name: 'Material 3 & Cupertino', level: 'Expert', icon: null, highlight: 'Adaptive UI for iOS & Android' },
      { name: 'Responsive Layouts', level: 'Expert', icon: null, highlight: 'Multi-screen, tablets, foldables' },
    ]
  },
  {
    id: 'architecture',
    name: 'Architecture & State',
    icon: Layers,
    description: 'Enterprise-grade patterns ensuring testability, separation of concerns, and clean scalability.',
    skills: [
      { name: 'BLoC / Cubit', level: 'Expert', icon: null, highlight: 'Predictable reactive state flow' },
      { name: 'Clean Architecture', level: 'Expert', icon: null, highlight: 'Presentation, Domain, Data layers' },
      { name: 'Riverpod & Provider', level: 'Advanced', icon: null, highlight: 'Compile-safe dependency injection' },
      { name: 'Repository Pattern', level: 'Expert', icon: null, highlight: 'Abstract data sources & caching' },
      { name: 'Dependency Injection', level: 'Advanced', icon: null, highlight: 'GetIt, Injectable' },
      { name: 'SOLID Principles', level: 'Advanced', icon: null, highlight: 'Clean, decoupled codebases' },
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Cloud',
    icon: Database,
    description: 'Full-stack capabilities connecting client apps to robust, realtime cloud services.',
    skills: [
      { name: 'Firebase Suite', level: 'Advanced', icon: null, highlight: 'Auth, Firestore, FCM, Crashlytics' },
      { name: 'Supabase', level: 'Advanced', icon: null, highlight: 'PostgreSQL, Row Level Security, Realtime' },
      { name: 'RESTful APIs', level: 'Expert', icon: null, highlight: 'Dio, Retrofit, Interceptors, JWT' },
      { name: 'Local Storage', level: 'Expert', icon: null, highlight: 'Hive, SQLite (sqflite), SharedPrefs' },
      { name: 'Node.js', level: 'Intermediate', icon: null, highlight: 'Express APIs, microservices' },
      { name: 'MySQL & MongoDB', level: 'Intermediate', icon: null, highlight: 'Relational & NoSQL modeling' },
    ]
  },
  {
    id: 'devops',
    name: 'DevOps & Tooling',
    icon: GitBranch,
    description: 'Modern developer workflow ensuring fast delivery, automated builds, and store releases.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', icon: null, highlight: 'Branching strategies, code reviews' },
      { name: 'Play Console & App Store', level: 'Advanced', icon: null, highlight: 'Signing, bundles, store guidelines' },
      { name: 'Postman', level: 'Advanced', icon: null, highlight: 'API contract testing & debugging' },
      { name: 'CI/CD Pipelines', level: 'Intermediate', icon: null, highlight: 'GitHub Actions, automated APK builds' },
    ]
  }
];
