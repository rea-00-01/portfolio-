// ============================================================
// PORTFOLIO CONTENT — edit everything here.
// No component files need to change when your resume updates.
// ============================================================

export const profile = {
  name: "Riya Kanwar",
  role: "Computer Science Undergraduate",
  tagline: "AI/ML & software development",
  email: "riya48379@gmail.com",
  phone: "+91-9641937430",
  links: {
    github: "https://github.com/rea-00-01",
    linkedin: "https://linkedin.com/in/riya-kanwar-501b08305",
    instagram: "https://www.instagram.com/riya_shekhawat_02/",
    // Resume PDF: drop the file at /public/resume.pdf (replace the file directly
    // to update it — filename must stay "resume.pdf", no code changes needed)
    resume: "/resume.pdf",
  },
  // TODO: Riya — the contact form needs a real endpoint to actually send email.
  // Formspree's free tier (50 submissions/month) is the fastest way to do this
  // with no backend code:
  //   1. Go to formspree.io, sign up free, create a new form
  //   2. Copy the endpoint it gives you (looks like https://formspree.io/f/xxxxxxx)
  //   3. Paste it below, replacing the placeholder
  // Until this is set, the form will show an error message on submit instead
  // of silently pretending to work.
  contactFormEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// TODO: Riya — write your own personal bio here whenever ready.
// This is placeholder text adapted from your resume's career objective.
export const aboutMe = {
  bio: `Computer Science undergraduate with a strong foundation in programming
  and a keen interest in AI/ML and software development. I enjoy turning
  complex problems into clean, working solutions — and I'm always looking
  for opportunities to build things that matter.`,
  education: [
    {
      id: "edu-college",
      institution: "The LNM Institute of Information Technology",
      location: "Jaipur, Rajasthan",
      degree: "B.Tech in Computer Science and Engineering",
      years: "2023–2027",
      url: null,
    },
    {
      id: "edu-school",
      institution: "Vidya Bharati Public School",
      location: "Sikar, Rajasthan",
      degree: "CBSE",
      years: null,
      url: "http://vps.ac.in",
    },
  ],
};

// Group skills however you like — groups render as separate clusters
// in the eye-search Skills section.
export const skills = [
  {
    group: "Programming Languages",
    items: ["Python", "Java", "C", "SQL"],
  },
  {
    group: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    group: "Machine Learning",
    items: ["Scikit-learn", "PCA", "Grid Search", "Model Evaluation","Prompt Engineering"],
  },
  {
    group: "Data Processing & Analysis",
    items: ["Pandas", "NumPy", "SciPy", "Seaborn", "Matplotlib"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub"],
  },
];

// Add/remove/edit projects freely — the card grid renders however many
// entries are in this array.
export const projects = [
  {
    id: "deep-learning-channel-estimation",
    title: "Deep Learning based Channel Estimation",
    summary:
      "A deep learning–based wireless channel estimation system modeling OFDM channel responses as 2D images, using SRCNN + DnCNN networks for super-resolution and denoising–based channel reconstruction.",
    tech: ["Python", "PyTorch", "SRCNN", "DnCNN"],
    links: { demo: null, repo: null },
  },
  {
    id: "finxplain",
    title: "FinXplain",
    summary:
      "An explainable financial sentiment analysis pipeline combining FinBERT (109M params, fine-tuned on 4,674 Financial PhraseBank sentences) with GPT-2, achieving 78.4% test accuracy.",
    tech: ["FinBERT", "GPT-2", "Python", "NLP"],
    links: { demo: null, repo: null },
  },
  {
    id: "deepfuse",
    title: "DeepFuse",
    summary:
      "Latent-space fusion and ControlNet-based conditioning to preserve image geometry while enhancing texture, color, and visual consistency through diffusion-guided synthesis.",
    tech: ["PyTorch", "OpenCV", "ControlNet", "Diffusion Models"],
    links: { demo: null, repo: null },
  },
  {
    id: "phishing-url-detection",
    title: "Phishing URL Detection",
    summary:
      "Feature extraction and preprocessing on large-scale URL datasets, using machine learning to detect suspicious patterns associated with phishing attacks and fraudulent domains.",
    tech: ["Python", "Scikit-learn", "Feature Engineering"],
    links: { demo: null, repo: null },
  },
  {
    id: "metro-train-failure-prediction",
    title: "Metro Train Failure Prediction",
    summary:
      "Compared multiple ML models — Logistic Regression, KNN, Naïve Bayes, Random Forest, SVM — improving failure prediction reliability through feature engineering and evaluation.",
    tech: ["Scikit-learn", "Python", "Pandas"],
    links: { demo: null, repo: null },
  },
  {
    id: "plinth-tech-fest-website",
    title: "Plinth Tech Fest Website",
    summary:
      "Interactive wireframes, high-fidelity mockups, and reusable design components — collaborating with developers to ensure seamless design-to-development integration.",
    tech: ["Figma", "HTML", "CSS", "JavaScript"],
    links: { demo: null, repo: null },
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    summary:
      "A responsive e-commerce web application inspired by Amazon, with dynamic product listings, reusable UI components, and seamless user navigation.",
    tech: ["React", "JavaScript", "CSS"],
    links: { demo: null, repo: null },
  },
];

export const experience = [
  {
    id: "crystal-tech",
    role: "Web Development Intern",
    company: "Crystal Tech e-Solutions Pvt. Ltd.",
    dates: "Jun '25 – Jul '25",
    description:
      "Designed and developed responsive web page layouts using HTML, CSS, JavaScript. Improved UI components and optimized website responsiveness for mobile & desktop devices.",
  },
];

export const activities = [
  { org: "GDG Club", role: "Led AI/ML & UI/UX workshops and built websites for campus events." },
  { org: "EFx India", role: "Lead at EFx India 2026, organized at LNMIIT" },
  { org: "ASME Student Chapter", role: "Project head at ASME, LNMIIT" },
  { org: "SANKALP Club", role: "Organized outreach events for village students to promote education." },
  { org: "Plinth Organizing Team", role: "Managed PR and logistics for LNMIIT's tech fest." },
  { org: "ACM Student Chapter", role: "Contributed to tech events and peer learning initiatives." },
];
