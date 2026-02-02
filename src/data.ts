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
      "A feature-rich mobile app built with Flutter, focusing on MVVM architecture and high performance for real-time customer and vendor chat.",
    tech: ["Flutter", "Dart", "MVVM Architecture", "Socket.IO"],
    highlights: [
      "Implemented responsive UI for both Android and iOS",
      "Integrated REST APIs with robust error handling",
      "Real-time communication using Socket.IO"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/chat_application_frontend.git"
  },
  {
    id: "flutter-2",
    title: "Chat Application Backend",
    type: "Backend",
    description:
    "Backend for a chat application, built with Node.js, Express, and MongoDB. Implements authentication and real-time message delivery using WebSockets.",
  tech: ["Node.js", "Express", "MongoDB", "Socket.IO"],
  highlights: [
    "Implemented JWT-based authentication",
    "Real-time messaging with WebSocket and Socket.IO",
    "REST API for user and message management"
  ],
    githubUrl: "https://github.com/FlutterDevAaryan/chat_application_backend.git"
  },
  {
    id: "flutter-3",
    title: "Lama Trend",
    type: "Flutter App",
    description:
    "A scalable mobile app for a garment manufacturing company, providing features for managing stock, people, and sales, built with Flutter.",
  tech: ["Flutter", "Dart", "Firebase"],
  highlights: [
    "Built reusable widget library to speed up development",
    "Integrated Firebase for authentication and real-time data syncing",
    "Optimized for fast startup and smooth performance"
  ],
    githubUrl: "https://github.com/FlutterDevAaryan/lama_trend.git"
  },
  {
    id: "flutter-4",
    title: "Raj Krupa",
    type: "Flutter App",
    description:
    "A production-ready Flutter application for managing a garment manufacturing business with features for employee management, sales, and inventory.",
  tech: ["Flutter", "Dart", "Firebase"],
  highlights: [
    "Implemented secure authentication flows with Firebase",
    "Real-time data sync using Firebase Cloud Firestore",
    "Task and inventory management features"
  ],
    githubUrl: "https://github.com/FlutterDevAaryan/raj_krupa.git"
  },
  {
    id: "flutter-5",
    title: "Chat App",
    type: "Flutter App",
    description:
      "A beautifully designed chat app focusing on UX, accessibility, and real-time communication, built with Flutter and Dart.",
    tech: ["Flutter", "Dart"],
    highlights: [
      "Followed Material Design and accessibility best practices",
      "Real-time messaging with smooth user interactions",
      "Integrated animations to guide user attention"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/chat_app.git"
  },
  {
    id: "flutter-6",
    title: "Tasky",
    type: "Flutter App",
    description:
      "A task management app with data visualization, providing charts and dashboards to monitor tasks and progress, built with Flutter and Dart.",
    tech: ["Flutter", "Dart", "Charts"],
    highlights: [
      "Visualized complex data with custom charts",
      "Implemented offline-first behavior for task tracking",
      "User-friendly UI for task management and reporting"
    ],
    githubUrl: "https://github.com/FlutterDevAaryan/tasky.git"
  },
  {
    id: "flutter-7",
    title: "Handy Flutter Wids",
    type: "Flutter App",
    description:
    "A practical Flutter app with a collection of reusable widgets for everyday use, featuring deep linking and push notifications.",
  tech: ["Flutter", "Dart", "Firebase"],
  highlights: [
    "Handled push notifications and deep links",
    "Ensured smooth navigation across complex user flows",
    "Built reusable widgets for easy app development"
  ],
    githubUrl: "https://github.com/FlutterDevAaryan/handy_flutter_wids.git"
  },
  {
    id: "flutter-8",
    title: "Learn Flutter Getx State Management",
    type: "Flutter App",
    description:
    "An end-to-end Flutter app demonstrating automated testing and Getx for state management.",
  tech: ["Flutter", "Dart", "Getx",],
  highlights: [
    "Used Getx for state management and simplified business logic",
    "Implemented unit and widget tests for key features",
  ],
    githubUrl: "https://github.com/FlutterDevAaryan/learn_flutter_getx_state_management.git"
  },
  {
    id: "chat-backend",
    title: "Learn Flutter MVVM",
    type: "Flutter App",
    description:
    "A Flutter app demonstrating the MVVM architecture pattern with clean code and separation of concerns, built with Flutter and Dart.",
  tech: ["Flutter", "Dart", "MVVM Architecture"],
  highlights: [
    "Followed MVVM architecture principles for clean code separation",
    "User-friendly UI"
  ],
    githubUrl: "https://github.com/FlutterDevAaryan/learn_flutter_mvvm.git"
  }
];


export const personalInfo = {
  name: "Aryan Jain",
  role: "Flutter & Backend Developer",
  location: "Ahmedabad, India",
  email: "jainaryan24111@gmail.com",
  github: "https://github.com/FlutterDevAaryan",
  linkedin: "https://www.linkedin.com/in/aaryan-jain-dev/",
  resumeUrl: "resume.pdf" // relative so it works on GitHub Pages (/portfolio/) and locally
};
