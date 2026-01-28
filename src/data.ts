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
    title: "Flutter App 1",
    type: "Flutter App",
    description:
      "Feature-rich mobile app built with Flutter, focused on clean architecture and high performance.",
    tech: ["Flutter", "Dart", "Clean Architecture"],
    highlights: [
      "Implemented responsive UI for both Android and iOS",
      "Integrated REST APIs with robust error handling"
    ],
    githubUrl: "https://github.com/your-username/flutter-app-1"
  },
  {
    id: "flutter-2",
    title: "Flutter App 2",
    type: "Flutter App",
    description:
      "Modern Flutter application with state management and smooth animations.",
    tech: ["Flutter", "Dart", "Riverpod"],
    highlights: [
      "Used advanced state management for predictable behavior",
      "Created custom animations for delightful UX"
    ],
    githubUrl: "https://github.com/your-username/flutter-app-2"
  },
  {
    id: "flutter-3",
    title: "Flutter App 3",
    type: "Flutter App",
    description:
      "Scalable mobile app showcasing clean UI components and reusable widgets.",
    tech: ["Flutter", "Dart"],
    highlights: [
      "Built reusable widget library to speed up development",
      "Optimized for fast startup and smooth scrolling"
    ],
    githubUrl: "https://github.com/your-username/flutter-app-3"
  },
  {
    id: "flutter-4",
    title: "Flutter App 4",
    type: "Flutter App",
    description:
      "Production-ready Flutter application with authentication and data persistence.",
    tech: ["Flutter", "Dart", "Firebase"],
    highlights: [
      "Implemented secure authentication flows",
      "Used cloud backend for real-time data sync"
    ],
    githubUrl: "https://github.com/your-username/flutter-app-4"
  },
  {
    id: "flutter-5",
    title: "Flutter App 5",
    type: "Flutter App",
    description:
      "An app focused on UX, accessibility, and smooth interaction patterns.",
    tech: ["Flutter", "Dart"],
    highlights: [
      "Followed Material Design and accessibility best practices",
      "Used animations to guide user attention"
    ],
    githubUrl: "https://github.com/your-username/flutter-app-5"
  },
  {
    id: "flutter-6",
    title: "Flutter App 6",
    type: "Flutter App",
    description:
      "A data-driven Flutter application with charts and dashboards.",
    tech: ["Flutter", "Dart", "Charts"],
    highlights: [
      "Visualized complex data with custom charts",
      "Implemented offline-first behavior"
    ],
    githubUrl: "https://github.com/your-username/flutter-app-6"
  },
  {
    id: "flutter-7",
    title: "Flutter App 7",
    type: "Flutter App",
    description:
      "Real-world Flutter app with push notifications and deep linking.",
    tech: ["Flutter", "Dart", "Firebase"],
    highlights: [
      "Handled push notifications and deep links",
      "Ensured smooth navigation across complex flows"
    ],
    githubUrl: "https://github.com/your-username/flutter-app-7"
  },
  {
    id: "flutter-8",
    title: "Flutter App 8",
    type: "Flutter App",
    description:
      "End-to-end Flutter solution demonstrating automated testing and CI.",
    tech: ["Flutter", "Dart", "CI/CD"],
    highlights: [
      "Wrote unit and widget tests for key features",
      "Integrated CI pipeline for automated builds"
    ],
    githubUrl: "https://github.com/your-username/flutter-app-8"
  },
  {
    id: "chat-backend",
    title: "Real-time Chat Backend",
    type: "Backend",
    description:
      "Scalable backend for real-time chat with proper authentication and message delivery guarantees.",
    tech: ["Node.js", "Express", "WebSocket", "MongoDB"],
    highlights: [
      "Designed REST and WebSocket APIs for messaging",
      "Implemented JWT-based authentication and authorization"
    ],
    githubUrl: "https://github.com/your-username/chat-backend"
  },
  {
    id: "other-1",
    title: "Utility / Tools Repository",
    type: "Other",
    description:
      "Collection of reusable utilities, scripts, or experiments that support the main projects.",
    tech: ["TypeScript", "Node.js"],
    highlights: [
      "Created reusable utilities that speed up development",
      "Documented patterns and best practices across projects"
    ],
    githubUrl: "https://github.com/your-username/utility-repo"
  }
];

export const personalInfo = {
  name: "Your Name",
  role: "Flutter & Backend Developer",
  location: "Your City, Country",
  email: "you@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-linkedin-id",
  resumeUrl: "resume.pdf" // relative so it works on GitHub Pages (/portfolio/) and locally
};

