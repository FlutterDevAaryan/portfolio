export type Project = {
  id: string;
  title: string;
  type: "Flutter App" | "Backend" | "Other";
  description: string;
  tech: string[];
  highlights: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "flutter-1",
    title: "Chat Application Frontend",
    type: "Flutter App",
    description:
      "Feature-rich mobile app built with Flutter, focused on clean architecture and high performance.",
    tech: ["Flutter", "Dart", "Clean Architecture"],
    highlights: [
      "Implemented responsive UI for both Android and iOS",
      "Integrated REST APIs with robust error handling"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/chat_application_frontend.git"
  },
  {
    id: "flutter-2",
    title: "Chat Application Backend",
    type: "Backend",
    description:
      "Modern Flutter application with state management and smooth animations.",
    tech: ["Flutter", "Dart", "Riverpod"],
    highlights: [
      "Used advanced state management for predictable behavior",
      "Created custom animations for delightful UX"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/chat_application_backend.git"
  },
  {
    id: "flutter-3",
    title: "Lama Trend",
    type: "Flutter App",
    description:
      "Scalable mobile app showcasing clean UI components and reusable widgets.",
    tech: ["Flutter", "Dart"],
    highlights: [
      "Built reusable widget library to speed up development",
      "Optimized for fast startup and smooth scrolling"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/lama_trend.git"
  },
  {
    id: "flutter-4",
    title: "Raj Krupa",
    type: "Flutter App",
    description:
      "Production-ready Flutter application with authentication and data persistence.",
    tech: ["Flutter", "Dart", "Firebase"],
    highlights: [
      "Implemented secure authentication flows",
      "Used cloud backend for real-time data sync"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/raj_krupa.git"
  },
  {
    id: "flutter-5",
    title: "Chat App",
    type: "Flutter App",
    description:
      "An app focused on UX, accessibility, and smooth interaction patterns.",
    tech: ["Flutter", "Dart"],
    highlights: [
      "Followed Material Design and accessibility best practices",
      "Used animations to guide user attention"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/chat_app.git"
  },
  {
    id: "flutter-6",
    title: "Tasky",
    type: "Flutter App",
    description:
      "A data-driven Flutter application with charts and dashboards.",
    tech: ["Flutter", "Dart", "Charts"],
    highlights: [
      "Visualized complex data with custom charts",
      "Implemented offline-first behavior"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/tasky.git"
  },
  {
    id: "flutter-7",
    title: "Handy Flutter Wids",
    type: "Flutter App",
    description:
      "Real-world Flutter app with push notifications and deep linking.",
    tech: ["Flutter", "Dart", "Firebase"],
    highlights: [
      "Handled push notifications and deep links",
      "Ensured smooth navigation across complex flows"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/handy_flutter_wids.git"
  },
  {
    id: "flutter-8",
    title: "Learn Flutter Getx State Management",
    type: "Flutter App",
    description:
      "End-to-end Flutter solution demonstrating automated testing and CI.",
    tech: ["Flutter", "Dart", "CI/CD"],
    highlights: [
      "Wrote unit and widget tests for key features",
      "Integrated CI pipeline for automated builds"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/learn_flutter_getx_state_management.git"
  },
  {
    id: "chat-backend",
    title: "Learn Flutter MVVM",
    type: "Backend",
    description:
      "Scalable backend for real-time chat with proper authentication and message delivery guarantees.",
    tech: ["Node.js", "Express", "WebSocket", "MongoDB"],
    highlights: [
      "Designed REST and WebSocket APIs for messaging",
      "Implemented JWT-based authentication and authorization"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/learn_flutter_mvvm.git"
  }
];


export const personalInfo = {
  name: "Aaryan Jain",
  role: "Flutter & Backend Developer",
  location: "Ahmedabad, India",
  email: "jainaryan24111@gmail.com",
  github: "https://github.com/FlutterDevAaryan",
  linkedin: "https://www.linkedin.com/in/aaryan-jain-dev/",
  resumeUrl: "resume.pdf" // relative so it works on GitHub Pages (/portfolio/) and locally
};
