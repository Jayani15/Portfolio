export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  category: "AI/ML" | "Blockchain" | "Web" | "DevOps" | "Education";
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 2,
    title: "AI DevOps Agent",
    subtitle: "Autonomous Code Analysis Engine",
    description:
      "An autonomous AI agent that clones GitHub repositories, runs comprehensive automated analysis — linting, security scans, tests — and generates intelligent AI-powered reports.",
    longDescription:
      "The AI DevOps Agent operates as a fully autonomous pipeline. Given a GitHub repository URL, it clones the codebase, runs language-appropriate linters, executes Bandit and dependency vulnerability scans, runs test suites, and aggregates all results. It then feeds the analysis data into an LLM that generates a human-readable report covering code quality, security posture, test coverage, and actionable recommendations. This dramatically reduces the friction of code review and enables continuous quality monitoring without manual effort.",
    tech: ["Python", "LangChain", "Git API", "Bandit", "AST Analysis", "LLMs"],
    features: [
      "Fully autonomous GitHub repo cloning and analysis",
      "Multi-language linting and static analysis",
      "Security vulnerability scanning with Bandit",
      "Automated test suite execution",
      "LLM-generated intelligent insight reports",
      "Dependency CVE detection",
    ],
    category: "DevOps",
    accentColor: "#f472b6",
    gradientFrom: "#db2777",
    gradientTo: "#a855f7",
    icon: "🤖",
  },
  {
    id: 3,
    title: "BrokeNoMore",
    subtitle: "Smart Expense Tracker",
    description:
      "A clean, intuitive financial tracking web app that helps users record daily expenses, monitor savings goals, and visualize spending patterns over time.",
    longDescription:
      "BrokeNoMore provides a modern, minimalist approach to personal finance management. Users can log expenses by category, set monthly budgets, and track savings goals with progress indicators. The app offers visual analytics — spending heatmaps, category breakdowns, and trend charts — to surface insights that drive better financial habits. The responsive design ensures a seamless experience across devices, and local-first data handling ensures user privacy. The project demonstrates full-stack capabilities with a polished, user-centric design approach.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Tailwind CSS"],
    features: [
      "Daily expense recording with smart categories",
      "Savings goal tracking with progress visualization",
      "Spending pattern analytics and charts",
      "Monthly budget setting and alerts",
      "Responsive mobile-first design",
      "Local-first data privacy",
    ],
    category: "Web",
    accentColor: "#60a5fa",
    gradientFrom: "#2563eb",
    gradientTo: "#7c3aed",
    icon: "💳",
  },
  {
    id: 4,
    title: "FunDaMentals",
    subtitle: "Gamified Java Learning Platform",
    description:
      "An interactive Java learning platform that teaches programming fundamentals through engaging mini-games, quizzes, and challenges with user authentication and progress tracking.",
    longDescription:
      "FunDaMentals transforms Java programming education through gamification. The MVC-architected platform features user authentication, a curriculum of bite-sized programming concepts, interactive coding exercises, and mini-games that challenge users to apply what they've learned. The quest system creates a sense of progression — users earn badges, unlock new modules, and compete on leaderboards. Each concept is taught through a theory → example → practice → quiz loop that maximizes retention. The platform is designed for beginners and intermediate learners wanting to master Java fundamentals in an engaging environment.",
    tech: ["Java", "MVC Architecture", "JavaFX", "JDBC", "MySQL", "Game Design"],
    features: [
      "User authentication and profile management",
      "Structured curriculum with progressive difficulty",
      "Interactive mini-games for concept reinforcement",
      "Quiz system with instant feedback",
      "Badge and achievement system",
      "Progress tracking and leaderboards",
    ],
    category: "Education",
    accentColor: "#a78bfa",
    gradientFrom: "#7c3aed",
    gradientTo: "#ec4899",
    icon: "🎮",
  },
  {
    id: 5,
    title: "Customer Churn Prediction System",
    subtitle: "ML-Powered Retention Analytics",
    description:
      "A machine learning project that predicts whether customers are likely to leave a service, using behavioral data to help businesses take proactive retention action.",
    longDescription:
      "Customer churn is one of the costliest challenges businesses face. This system tackles it head-on by analyzing historical customer behavior — activity patterns, engagement metrics, and usage signals — to train a predictive ML model that outputs churn probability scores. Multiple classification algorithms are benchmarked (Logistic Regression, Random Forest, XGBoost) to identify the best performer. The model integrates with a visualization layer that surfaces at-risk customer segments and highlights key churn drivers, enabling data-backed retention decisions before customers are lost.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib", "Machine Learning"],
    features: [
      "Churn probability prediction per customer",
      "Customer behavior data analysis and feature engineering",
      "Multi-model benchmarking for best accuracy",
      "Data visualization of at-risk segments",
      "Key churn driver identification",
      "Actionable retention insights for businesses",
    ],
    category: "AI/ML",
    accentColor: "#f59e0b",
    gradientFrom: "#d97706",
    gradientTo: "#ef4444",
    icon: "📉",
  },
  {
    id: 6,
    title: "Facemoji",
    subtitle: "Facial Expression Emoji Generator",
    description:
      "A computer vision project that detects facial expressions in real time and maps them to corresponding emojis using deep learning emotion classification.",
    longDescription:
      "Facemoji bridges the gap between human expression and digital communication. Using real-time computer vision, the system captures facial landmarks from a webcam feed, processes them through a deep learning classification model trained on emotion datasets, and instantly generates the matching emoji for each detected expression. The pipeline achieves fast inference suitable for live video applications. Emotions such as happiness, sadness, surprise, anger, and neutral states are classified with high accuracy, making the system both technically impressive and practically engaging — ideal for interactive applications, accessibility tools, and human-computer interaction research.",
    tech: ["Python", "OpenCV", "Deep Learning", "TensorFlow", "Computer Vision", "CNN"],
    features: [
      "Real-time facial expression detection from webcam",
      "Multi-class emotion classification (7 expressions)",
      "Instant emoji mapping per detected emotion",
      "Deep learning CNN model for high accuracy",
      "Live video processing pipeline",
      "Interactive visual output overlay",
    ],
    category: "AI/ML",
    accentColor: "#f472b6",
    gradientFrom: "#db2777",
    gradientTo: "#f97316",
    icon: "😊",
    github: "https://github.com/Jayani15/Acm_sig_AI/tree/master/Facemoji",
  },
  {
    id: 7,
    title: "YOLO Medical Insurance Detection",
    subtitle: "Object Detection for Healthcare",
    description:
      "A deep learning project using YOLO to detect and analyze medical insurance related objects in images, building a robust image-based detection pipeline for healthcare data.",
    longDescription:
      "This project applies cutting-edge YOLO (You Only Look Once) object detection to the healthcare domain. The system is trained on a medical-related dataset to identify and localize insurance documents, medical artifacts, and relevant visual elements in images with high speed and precision. The YOLO architecture enables real-time inference, making it suitable for automated document processing, claims verification, and healthcare data analysis workflows. The project demonstrates solid understanding of object detection pipelines: dataset preparation, anchor configuration, model training, evaluation with mAP metrics, and inference optimization.",
    tech: ["Python", "YOLO", "OpenCV", "Computer Vision", "Deep Learning", "PyTorch"],
    features: [
      "Real-time object detection using YOLO architecture",
      "Medical insurance document and object recognition",
      "Custom dataset training and annotation",
      "High-speed inference pipeline",
      "mAP-based model evaluation",
      "Image-based detection and analysis workflow",
    ],
    category: "AI/ML",
    accentColor: "#34d399",
    gradientFrom: "#059669",
    gradientTo: "#0ea5e9",
    icon: "🏥",
    github: "https://github.com/Jayani15/Acm_sig_AI/tree/master/MedicalInsur",
  },
];
