export const personalInfo = {
  name: "Anduamlak Melsew",
  title: "Cybersecurity Analyst (SOC Focus) | Full-Stack Developer",
  introduction: "Specialized in Security Operations Center (SOC) analysis, threat detection, and defensive cybersecurity. Combining deep security expertise with full-stack development skills to build secure, robust applications.",
  email: "anduamlakmelsew@example.com",
  phone: "0931996468",
  telegram: "anduamlakmelsew",
  github: "https://github.com/anduamlakmelsew",
  linkedin: "https://linkedin.com/in/anduamlakmelsew",
  education: {
    degree: "Cybersecurity",
    university: "Bahir Dar University",
    specialization: "SOC Analyst (Security Operations Center)"
  },
  profileImage: null, // Will be loaded from localStorage or you can set a default URL here
};

export const projects = [
  {
    id: 1,
    title: "AI-Based Baseline Assessment and Scanner",
    description: "A comprehensive security scanning system that analyzes web, network, and system vulnerabilities. Integrates artificial intelligence for intelligent threat analysis, pattern recognition, and automated security assessments.",
    technologies: ["Python", "AI/ML", "Network Security", "Vulnerability Assessment", "Threat Intelligence"],
    github: "https://github.com/anduamlakmelsew/ai-scanner",
    demo: "",
    featured: true,
    category: "Security"
  },
  {
    id: 2,
    title: "Blue Team Project (Bueteam)",
    description: "A defensive cybersecurity project focused on SOC operations, including real-time monitoring, threat detection, incident response, and security event analysis. Implements blue team strategies for proactive defense.",
    technologies: ["SOC Tools", "SIEM", "Incident Response", "Threat Hunting", "Log Analysis"],
    github: "https://github.com/anduamlakmelsew/bueteam",
    demo: "",
    featured: true,
    category: "Security"
  },
  {
    id: 3,
    title: "Defense System (Upcoming)",
    description: "An advanced proactive threat detection and system protection platform. Designed to identify and neutralize threats before they compromise system integrity. Currently in development phase.",
    technologies: ["Threat Detection", "System Security", "Real-time Monitoring", "Automated Response"],
    github: "https://github.com/anduamlakmelsew/defense-system",
    demo: "",
    featured: true,
    category: "Security",
    status: "In Development"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, secure portfolio website built with React and Node.js, featuring contact form, profile management, and project showcase with security best practices.",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "Security"],
    github: "https://github.com/anduamlakmelsew/portfolio",
    demo: "",
    featured: false,
    category: "Development"
  },
];

export const technicalSkills = [
  { 
    category: "SOC & Security Operations", 
    skills: ["SOC Analysis", "Threat Detection", "Incident Response", "SIEM Tools", "Log Analysis", "Threat Hunting", "Security Monitoring"] 
  },
  { 
    category: "Cybersecurity", 
    skills: ["Vulnerability Assessment", "Network Security", "System Security", "XSS Prevention", "SQL Injection Defense", "CSRF Protection", "Blue Team Operations"] 
  },
  { 
    category: "Development", 
    skills: ["React", "Node.js", "JavaScript", "Full-Stack Development", "RESTful APIs", "Secure Coding"] 
  },
  { 
    category: "Tools & Technologies", 
    skills: ["Network Scanners", "Security Tools", "Git", "Linux", "Docker", "Wireshark", "Burp Suite"] 
  },
];

export const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Communication",
  "Critical Analysis",
  "Attention to Detail",
  "Team Collaboration",
  "Incident Management",
  "Quick Decision Making",
];

export const vulnerabilities = [
  {
    name: "Cross-Site Scripting (XSS)",
    description: "Deep understanding of reflected, stored, and DOM-based XSS attacks. Expertise in detection, exploitation analysis, and implementing robust mitigation techniques.",
  },
  {
    name: "SQL Injection",
    description: "Comprehensive knowledge of SQL injection techniques, detection methods, and prevention strategies. Experience in identifying and remediating database vulnerabilities.",
  },
  {
    name: "Cross-Site Request Forgery (CSRF)",
    description: "Understanding CSRF attack vectors and implementing token-based protection mechanisms. Experience in securing state-changing operations.",
  },
  {
    name: "Network Vulnerabilities",
    description: "Expertise in identifying network-level vulnerabilities, analyzing network traffic, and implementing network security controls.",
  },
  {
    name: "System Security Weaknesses",
    description: "Experience in system-level vulnerability assessment, configuration hardening, and implementing defense-in-depth strategies.",
  },
  {
    name: "Authentication & Authorization Flaws",
    description: "Identifying broken authentication, session management issues, and implementing secure access control mechanisms.",
  },
];

export const securityTools = [
  "SIEM Tools (Security Information and Event Management)",
  "Network Scanners & Analyzers",
  "Vulnerability Assessment Tools",
  "Wireshark (Network Protocol Analyzer)",
  "Burp Suite (Web Security Testing)",
  "Nmap (Network Discovery)",
  "IDS/IPS Systems",
  "Log Analysis Tools",
  "Threat Intelligence Platforms",
  "Incident Response Tools",
];
