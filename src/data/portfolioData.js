export const portfolioData = {
  personal: {
    name: "NANDAN SAGAR S",
    tagline: "Embedded~IoT~Android~GenAI - A Hybrid Engineer",
    description: "Engineering real-world Products - From code to hardware",
    location: "Bengaluru, India",
    email: "nandansagar13@outlook.com",
    phone: "+91-8073306640",
    phone2: "+91-8748091334",
    github: "https://github.com/NandanSagar-13",
    linkedin: "https://linkedin.com/in/nandansagar1309",
  },

  about: {
    bio: `I'm a hybrid engineer bridging the gap between software and hardware, specializing in Android development, IoT systems, and AI integration. Currently pursuing B.E. in Electronics and Communication Engineering at AMC Engineering College, I've architected real-world solutions that serve 20+ beta(trial) users and achieved technical milestones like 2km LoRa communication range. My journey spans from building intelligent mobile apps with Kotlin and Jetpack Compose to engineering embedded systems with ESP32 and Arduino.`,
    stats: [
      { value: "5+", label: "Projects Completed" },
      { value: "20+", label: "Beta(Trial) Users" },
      { value: "2 KM", label: "LoRa Range Achieved" },
      { value: "17+", label: "Salesforce Badges" },
    ],
    education: {
      degree: "Bachelor of Engineering",
      field: "Electronics and Communication Engineering",
      college: "AMC Engineering College",
      location: "Bengaluru",
      graduation: "Expected Graduation: 2026-27",
    },
    certifications: [
      "Artificial Intelligence & Machine Learning using Python - Giga Skill Technologies (2024)",
      "Salesforce Trailhead - 17+ badges in AI Development, App Builder, Admin Essentials (2025)",
      "Android Development with Kotlin - Google Developers (2025)",
    ],
    achievements: [
      "Selected for SIH 2025, College-level round for microplastics detection sensor research",
      "Featured in college tech showcase with Budget Buddy acquiring 20+ beta users in 1 month",
      "Achieved 2km LoRa range exceeding 1.5km target in real-world urban testing",
      "Led team of 4 in 3D Display project, completed 2 weeks ahead of schedule",
    ],
  },

  experience: [
    {
      id: 1,
      role: "Gen AI & App Development Intern",
      company: "MindMatrixED",
      location: "Bengaluru",
      period: "Sep 2025 – Jan 2026",
      highlights: [
        "Architected Budget Buddy Android app using Kotlin, Jetpack Compose, and Firebase with MVVM architecture, implementing 15+ features including real-time budget tracking and cloud sync, serving 20+ beta(trial) users",
        "Built SMS auto-detection system using BroadcastReceiver achieving 85% accuracy in parsing transaction details from 8+ Indian banks, automatically categorizing expenses and updating budgets",
        "Developed AI chatbots using Salesforce Agentforce and Google Vertex AI, reducing query resolution time by 40% through intelligent context-aware automation",
        "Integrated GenAI tools across SDLC phases, improving team productivity by 25% through automated code review and documentation generation",
        "Earned 17+ Salesforce Trailhead badges in AI Development, App Builder, and Admin Essentials",
      ],
    },
    {
      id: 2,
      role: "Editor & Photographer",
      company: "Sri Devi Digital Studio",
      location: "Sagara",
      period: "Jun 2020 – Oct 2022",
      highlights: [
        "Designed 100+ digital creatives, including posters, wedding albums, and promotional materials for client projects",
        "Utilized Photoshop and CorelDRAW related tools for professional photo editing, retouching, and layout design",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      number: 1,
      title: "Budget Buddy",
      subtitle: "Personal Finance Android App",
      date: "Oct 2025",
      tech: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Figma"],
      highlights: [
        "Engineered full-stack Android app using Kotlin and Jetpack Compose with Firebase Realtime Database for multi-device cloud synchronization",
        "Implemented intelligent processing of 100+ transaction formats, auto-categorizing expenses and generating budget alerts at 80%/100% thresholds, reducing overspending by 35%",
        "Designed Material Design 3 UI in Figma achieving 4.5/5 user satisfaction from 20+ beta testers",
        "Built offline-first architecture with Firebase Authentication for secure multi-user support",
      ],
      github: "https://github.com/NandanSagar-13",
      demo: "",
    },
    {
      id: 2,
      number: 2,
      title: "3D Volumetric Display",
      subtitle: "Embedded Systems Project",
      date: "Jun 2025",
      tech: ["Arduino", "ESP32", "C", "PID Control", "Hall Effect Sensor"],
      highlights: [
        "Engineered POV 3D display using high-speed rotating LED panel system at 1800 RPM with precision for true volumetric visualization",
        "Developed real-time firmware in C for Arduino Uno and ESP32, implementing PID control algorithm maintaining ±0.5% motor speed stability",
        "Designed custom hardware with Hall effect sensor for rotational synchronization, achieving 360° viewing angles",
      ],
      github: "https://github.com/NandanSagar-13",
      demo: "",
    },
    {
      id: 3,
      number: 3,
      title: "Long-Range IoT Monitoring",
      subtitle: "LoRa Communication System",
      date: "Nov 2024",
      tech: ["LoRa", "Arduino", "ESP32", "MQTT", "Sensors"],
      highlights: [
        "Built and deployed an end-to-end LoRa communication network for long-range, low-power data transmission",
        "Successfully transmitted temperature and humidity sensor data over a tested line-of-sight range of 2 kilometres",
        "Programmed LoRa modules using Arduino IDE to demonstrate a practical IoT application for remote environmental monitoring",
      ],
      github: "https://github.com/NandanSagar-13",
      demo: "",
    },
  ],

  skills: {
    "Mobile Development": [
      { name: "Kotlin", level: 60 },
      { name: "Jetpack Compose", level: 65 },
      { name: "Android SDK", level: 68 },
      { name: "MVVM Architecture", level: 85 },
    ],
    "Backend & Cloud": [
      { name: "Firebase", level: 82 },
      { name: "REST APIs", level: 70 },
      { name: "Python", level: 65 },
      { name: "SQL", level: 58 },
    ],
    "Embedded & IoT": [
      { name: "ESP32/Arduino", level: 78 },
      { name: "C Programming", level: 65 },
      { name: "LoRa/MQTT", level: 70 },
      { name: "Sensor Integration", level: 75 },
    ],
    "AI & Tools": [
      { name: "Salesforce Agentforce", level: 65 },
      { name: "Google Vertex AI", level: 70 },
      { name: "Git/GitHub", level: 85 },
      { name: "Figma", level: 90 },
    ],
  },
};
