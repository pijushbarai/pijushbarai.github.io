export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  leetcode: string;
  codeforces: string;
  bio: string;
  about: string;
  researchInterests: string[];
  education: Array<{
    degree: string;
    field: string;
    institution: string;
    duration: string;
    cgpa: string;
    selectedCourses?: string[];
  }>;
  skills: {
    programming: string[];
    machineLearningAI: string[];
    softwareDevelopment: string[];
    toolsAndOthers: string[];
  };
  competitiveProgramming: Array<{
    platform: string;
    handle: string;
    achievements: string;
    link: string;
  }>;
  testScores: {
    gre: {
      date: string;
      quant: string;
      verbal: string;
      analyticalWriting: string;
    };
    toefl: {
      date: string;
      totalScore: string;
      reading: string;
      listening: string;
      speaking: string;
      writing: string;
    };
  };
  researchProjects: Array<{
    title: string;
    role: string;
    description: string;
    accuracy: string;
    technologies: string[];
  }>;
}

export const personalInfo: PersonalInfo = {
  name: "Pijush Barai",
  title: "AI & NLP Researcher | Computer Science Graduate",
  location: "Barisal, Bangladesh",
  email: "pijushbarail@gmail.com",
  phone: "+880 1799 702966",
  github: "https://github.com/pijushbarai",
  leetcode: "https://leetcode.com/pi129",
  codeforces: "https://codeforces.com/profile/pi129",
  bio: "I am a computer science graduate with a strong academic background and 1 year of hands-on experience implementing state-of-the-art AI architectures (e.g., CNNs, Transformers) using Python. My research experience includes developing deep learning models for practical applications such as rice disease detection. I am passionate about Machine Learning (ML), Deep Learning (DL), Natural Language Processing (NLP), and Large Language Models (LLMs).",

  about: `I am a Computer Science and Engineering graduate from the University of Rajshahi. My research focuses on Machine Learning, Computer Vision, and Natural Language Processing. My goal is to strengthen my research expertise and become an AI professional with deep specialization in NLP and LLMs research.`,

  researchInterests: [
    "Machine Learning & Deep Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision & Image Processing",
    "Large Language Models (LLMs)",
    "Text Understanding and Generation",
    "Medical Image Analysis & Object Detection",
    "Supervised, Unsupervised and Self-supervised Learning",
  ],

  education: [
    {
      degree: "Bachelor of Science in Engineering",
      field: "Computer Science and Engineering",
      institution: "University of Rajshahi, Rajshahi",
      duration: "January 2018 – September 2023",
      cgpa: "3.44 / 4.00",
      selectedCourses: [
        "Structural Programming Language",
        "Statistics for Engineers",
        "Discrete Mathematics",
        "Linear Algebra",
        "Database Management System",
        "Operating System and System Programming",
        "Parallel Processing and Distributed System",
        "Cryptography and Network Security",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC), Class XII",
      field: "Science",
      institution: "Kabi Nazrul Govt. College, Dhaka",
      duration: "January 2015 – July 2017",
      cgpa: "4.83 / 5.00",
    },
  ],

  skills: {
    programming: [
      "Python",
      "C",
      "C++",
      "Java",
      "PHP (Laravel)",
      "Basic Kotlin",
    ],
    machineLearningAI: [
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "OpenCV",
      "Transformers (Hugging Face, BERT)",
      "Digital Image Processing",
    ],
    softwareDevelopment: [
      "Object Oriented Programming (OOP)",
      "Design Patterns",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    toolsAndOthers: [
      "Linux (Terminal Commands, Bash/Shell)",
      "Git & GitHub",
      "Competitive Programming",
    ],
  },

  competitiveProgramming: [
    {
      platform: "LeetCode",
      handle: "pi129",
      achievements: "Solved 250+ problems",
      link: "https://leetcode.com/pi129",
    },
    {
      platform: "Codeforces",
      handle: "pi129",
      achievements: "Solved over 300+ problems",
      link: "https://codeforces.com/profile/pi129",
    },
  ],

  testScores: {
    gre: {
      date: "October 11, 2025",
      quant: "160",
      verbal: "150", // Added default verbal placeholder
      analyticalWriting: "3.0",
    },
    toefl: {
      date: "November 19, 2025",
      totalScore: "89",
      reading: "26",
      listening: "19",
      speaking: "21",
      writing: "23",
    },
  },

  researchProjects: [
    {
      title: "Crop (Rice) Disease Detection Using Deep Learning",
      role: "Undergraduate Thesis",
      description:
        "Designed and implemented a deep learning-based computer vision system for automated rice disease detection. Constructed custom datasets from multiple public sources covering four classes (Healthy, Tungro, Sheath Blight, and Brown Spot). Performed preprocessing, normalization, and augmentation (rotation, zoom, shear). Achieved 96% test accuracy on unseen data.",
      accuracy: "96% Test Accuracy",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    },
  ],
};
