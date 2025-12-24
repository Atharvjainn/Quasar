export interface ProblemSection {
  title: string;
  content: string[];
}

export interface ProblemStatement {
  id: string;
  title: string;
  short: string;
  sections: ProblemSection[];
}

const problems: ProblemStatement[] = [
  {
    id: "1",
    title: "Self-Healing Web Application",
    short:
      "Build a web app that detects user & technical issues, classifies them and applies automated fixes with safety controls.",
    sections: [
      {
        title: "Background",
        content: [
          "Imagine a website that watches users struggle and fixes itself automatically. The app learns from problems and resolves them using intelligent automation and generative AI."
        ]
      },
      {
        title: "Challenge Overview",
        content: [
          "Track user struggles (clicks, errors, slow pages), classify problems, automatically generate and apply fixes using GenAI + file operations, validate changes, and learn from history to avoid repeats."
        ]
      },
      {
        title: "Part 1: User Behavior Tracking",
        content: [
          "Capture signals like: rage clicks, dead clicks, quick back, repeated form submissions, JS errors, slow API responses, slow page loads, page sequences, scroll depth, time spent.",
          "Deliverable: A simple dashboard showing real-time events and recent history."
        ]
      },
      {
        title: "Part 2: Problem Classification",
        content: [
          "Implement simple rule-based classification with categories such as UI Issues, Performance, and Functionality Bugs.",
          "Optional: apply basic clustering (e.g., K-Means) for anomaly detection."
        ]
      },
      {
        title: "Part 3: Auto-Code Modification",
        content: [
          "Automatically identify problematic files, generate fixes using a GenAI model (e.g., GPT-4), replace code, run tests, validate, and deploy or rollback if necessary.",
          "Safety rules: backup files before edits, limit changes per file, and never modify critical modules (auth, payment)."
        ]
      },
      {
        title: "Part 4: Web Application Demo",
        content: [
          "Create a small Task Management app with intentional problems: slow-loading task list, confusing buttons, form validation issues, slow APIs, and missing error handling.",
          "Dashboard should show: real-time problems, detected categories, fix status (success/failure), and history of changes."
        ]
      },
      {
        title: "Deliverables",
        content: [
          "1) Live Demo: Task app + self-healing system + dashboard.",
          "2) Code Repository with instructions.",
          "3) Technical Document covering architecture, approach and results.",
          "4) Demo Video showcasing detection and automatic fixes."
        ]
      },
      {
        title: "Evaluation Criteria",
        content: [
          "Automation quality: how well issues are detected and fixed.",
          "System intelligence: classification accuracy and fix success rate.",
          "Full-stack implementation and UX innovation."
        ]
      }
    ]
  },

  {
    id: "2",
    title: "AI-Powered News Intelligence Platform",
    short:
      "Build a system that detects fake news, analyzes sentiment & emotions, extracts and verifies claims, and generates trustworthy summaries with citations.",
    sections: [
      {
        title: "Problem",
        content: [
          "Automate news credibility assessment by detecting misleading content, analyzing sentiment and emotions, extracting/verifying claims, and generating summaries with citations and a trust score."
        ]
      },
      {
        title: "Pipeline",
        content: [
          "News Aggregation → Fake News Detection → Sentiment & Emotion Analysis → Claim Extraction & Fact-Checking → Summarization → Trust Score Assignment."
        ]
      },
      {
        title: "Part 1: Fake News Detection",
        content: [
          "Objective: classify news as Real or Fake using features such as text patterns, punctuation, ALL CAPS ratio, sentiment, and entities.",
          "Models: TF-IDF + Logistic Regression / Random Forest for baseline; BERT/DistilBERT for advanced approaches.",
          "Output format example: { label: \"Real\"|\"Fake\", confidence: 0.91, source_credibility: 82 }"
        ]
      },
      {
        title: "Part 2: Sentiment & Emotion Analysis",
        content: [
          "Objective: multi-label emotion detection and entity-level sentiment (Joy, Sadness, Anger, Fear, Surprise, Disgust, Trust).",
          "Models: word embeddings + BiLSTM/CNN or transformer-based models; datasets: GoEmotions, Sentiment140."
        ]
      },
      {
        title: "Part 3: Fact-Checking",
        content: [
          "Steps: claim extraction, evidence retrieval (TF-IDF or embeddings), and verification using NLI (SUPPORTED/REFUTED/NOT_ENOUGH_INFO).",
          "Datasets: FEVER, LIAR. Metrics: claim F1, verification accuracy."
        ]
      },
      {
        title: "Part 4: Content Generation & Trust Scoring",
        content: [
          "Generate verified summaries (extractive/abstractive) and assign a trust score combining fake news detection, evidence verification and source credibility.",
          "Implementation roadmap suggested across 6 weeks: baseline models → advanced models → fact-checking → integration & dashboard."
        ]
      },
      {
        title: "Evaluation & Metrics",
        content: [
          "Fake News: Accuracy, F1, ROC-AUC. Sentiment: Multi-label F1. Fact-checking: claim F1 and evidence recall. Content generation: ROUGE and factuality checks."
        ]
      }
    ]
  },

  {
    id: "3",
    title: "Adaptive Ransomware Detection System",
    short:
      "Design an AI system that detects ransomware attacks by combining signals from URLs, files, and network behavior and correlating them into attack sequences.",
    sections: [
      {
        title: "Challenge Overview",
        content: [
          "Detect ransomware attacks in a network by focusing on malicious URLs, malware files, and unusual network activity and combining these signals to detect full attack chains."
        ]
      },
      {
        title: "Ransomware Kill Chain",
        content: [
          "Stages: 1) Initial Access (malicious URL clicked, malware downloaded), 2) Persistence & Lateral Movement, 3) Execution (ransomware encrypts files)."
        ]
      },
      {
        title: "Part A: Malicious URL Detection",
        content: [
          "Build a classifier using URL-based features (length, special chars, keywords). Evaluate using accuracy, precision, recall.",
          "Dataset suggestions provided."
        ]
      },
      {
        title: "Part B: Malware File Classification",
        content: [
          "Use static file features (PE header, imports, size, entropy) to classify ransomware files. Suggested models: Random Forest, XGBoost."
        ]
      },
      {
        title: "Part C: Network Anomaly Detection",
        content: [
          "Detect lateral movement or suspicious logins using flow features and anomaly detection (Isolation Forest, One-Class SVM)."
        ]
      },
      {
        title: "Part D: Attack Sequence Correlation",
        content: [
          "Combine alerts from Parts A,B,C to predict if a ransomware attack is ongoing; either rule-based correlation or a small sequence model can be used."
        ]
      },
      {
        title: "Deliverables",
        content: [
          "Code (notebooks/scripts), a report, and a demo showing detection on test examples and alert correlation."
        ]
      }
    ]
  },

  {
    id: "4",
    title: "Autonomous AI Legal Advisor & Courtroom Argumentation System",
    short:
      "Build a legal AI assistant that ingests documents and generates courtroom-ready arguments (Indian context preferred) using knowledge graphs and hybrid search.",
    sections: [
      {
        title: "Problem Statement",
        content: [
          "Create an AI Legal Advisor that analyzes disputes and generates courtroom-ready legal arguments using a knowledge graph plus hybrid semantic search."
        ]
      },
      {
        title: "Core Capabilities",
        content: [
          "Multimodal input (text/audio/document OCR), knowledge graph architecture (statutes, precedents), hybrid search tiers, document intelligence, courtroom argument generation with statute citations, multilingual support, and explainability."
        ]
      },
      {
        title: "Implementation Hints",
        content: [
          "Use libraries such as Whisper, pdfplumber, Tesseract for ingestion; Neo4j for graph storage; FAISS/Qdrant for vector search; LangChain/llama-index for retrieval & generation."
        ]
      },
      {
        title: "Ethical Disclaimer",
        content: [
          "This system provides AI-assisted legal reasoning and drafts, but final legal advocacy must be performed by qualified lawyers; not a substitute for legal counsel."
        ]
      }
    ]
  }
];

export default problems;
