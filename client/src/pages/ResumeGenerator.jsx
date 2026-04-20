import { useState, useEffect } from 'react';
import { Download, RefreshCw, Eye, Edit, Save } from 'lucide-react';
import { personalInfo, projects, technicalSkills } from '../data/portfolioData';

const ResumeGenerator = () => {
  const [viewMode, setViewMode] = useState('split'); // 'split', 'edit', 'preview'
  const [isExporting, setIsExporting] = useState(false);

  // Initialize resume data from localStorage or default
  const getInitialData = () => {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      fullName: personalInfo.name,
      title: personalInfo.title,
      email: personalInfo.email,
      phone: personalInfo.phone,
      telegram: personalInfo.telegram,
      github: personalInfo.github,
      summary: "Dedicated Cybersecurity Analyst specializing in Security Operations Center (SOC) analysis, threat detection, and defensive security operations. Expertise in real-time threat monitoring, incident response, vulnerability assessment, and proactive threat hunting. Combining deep security knowledge with full-stack development skills to build secure, robust applications and implement comprehensive security solutions.",
      education: {
        university: personalInfo.education.university,
        degree: personalInfo.education.degree,
        specialization: personalInfo.education.specialization
      },
      skills: [
        "SOC Analysis & Operations",
        "Threat Detection & Hunting",
        "Incident Response & Management",
        "Vulnerability Assessment",
        "Network Security Analysis",
        "SIEM Tools & Log Analysis",
        "Security Event Monitoring",
        "Web Application Security (XSS, SQL Injection, CSRF)",
        "Blue Team Operations",
        "Threat Intelligence",
        "Network Scanning & Reconnaissance",
        "Security Information Management"
      ],
      tools: "Nmap, Burp Suite, Wireshark, Network Scanners, Vulnerability Assessment Tools, IDS/IPS Systems, Threat Intelligence Platforms",
      development: "React, Node.js, JavaScript, Express, RESTful APIs, Full-Stack Development, Secure Coding Practices",
      technologies: "Linux, Git, Docker, MongoDB, Network Protocols, Security Frameworks",
      projects: projects.filter(p => p.featured).map(p => ({
        title: p.title,
        description: p.description,
        technologies: p.technologies.join(', '),
        status: p.status || ''
      }))
    };
  };

  const [resumeData, setResumeData] = useState(getInitialData);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const handleInputChange = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedChange = (parent, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...resumeData.skills];
    newSkills[index] = value;
    setResumeData(prev => ({ ...prev, skills: newSkills }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const removeSkill = (index) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...resumeData.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setResumeData(prev => ({ ...prev, projects: newProjects }));
  };

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, { title: '', description: '', technologies: '', status: '' }]
    }));
  };

  const removeProject = (index) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const resetToDefault = () => {
    if (confirm('Are you sure you want to reset to default template? This will erase all your changes.')) {
      localStorage.removeItem('resumeData');
      setResumeData(getInitialData());
    }
  };

  const exportToPDF = async () => {
    setIsExporting(true);
    try {
      // Send data to backend to generate PDF
      const response = await fetch('http://localhost:5000/api/generate-cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resumeData)
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Anduamlak_Melsew_CV.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        alert('✅ CV exported successfully!');
      } else {
        throw new Error('Export failed');
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('⚠️ Export failed. Using fallback: window.print()');
      window.print();
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-400 mb-2 font-mono">
            [SOC RESUME GENERATOR]
          </h1>
          <p className="text-gray-400">Real-time CV editor with live preview</p>
        </div>

        {/* Control Panel */}
        <div className="bg-gray-800 border border-green-500/30 rounded-lg p-4 mb-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('split')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'split'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Edit className="inline mr-2" size={18} />
              Split View
            </button>
            <button
              onClick={() => setViewMode('edit')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'edit'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Edit Only
            </button>
            <button
              onClick={() => setViewMode('preview')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'preview'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Eye className="inline mr-2" size={18} />
              Preview Only
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={resetToDefault}
              className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg font-medium transition-all"
            >
              <RefreshCw className="inline mr-2" size={18} />
              Reset
            </button>
            <button
              onClick={exportToPDF}
              disabled={isExporting}
              className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="inline mr-2" size={18} />
              {isExporting ? 'Exporting...' : 'Export PDF'}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className={`grid gap-6 ${viewMode === 'split' ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
          {/* Editor Panel */}
          {(viewMode === 'split' || viewMode === 'edit') && (
            <div className="space-y-6">
              <EditorPanel
                resumeData={resumeData}
                onInputChange={handleInputChange}
                onNestedChange={handleNestedChange}
                onSkillChange={handleSkillChange}
                onAddSkill={addSkill}
                onRemoveSkill={removeSkill}
                onProjectChange={handleProjectChange}
                onAddProject={addProject}
                onRemoveProject={removeProject}
              />
            </div>
          )}

          {/* Preview Panel */}
          {(viewMode === 'split' || viewMode === 'preview') && (
            <div className="sticky top-4">
              <PreviewPanel resumeData={resumeData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Editor Panel Component
const EditorPanel = ({
  resumeData,
  onInputChange,
  onNestedChange,
  onSkillChange,
  onAddSkill,
  onRemoveSkill,
  onProjectChange,
  onAddProject,
  onRemoveProject
}) => {
  return (
    <div className="space-y-4">
      {/* Personal Info */}
      <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-green-400 mb-4 font-mono">[PERSONAL INFO]</h2>
        
        <div className="space-y-4">
          <InputField
            label="Full Name"
            value={resumeData.fullName}
            onChange={(e) => onInputChange('fullName', e.target.value)}
          />
          <InputField
            label="Title"
            value={resumeData.title}
            onChange={(e) => onInputChange('title', e.target.value)}
          />
          <InputField
            label="Email"
            value={resumeData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
          />
          <InputField
            label="Phone"
            value={resumeData.phone}
            onChange={(e) => onInputChange('phone', e.target.value)}
          />
          <InputField
            label="Telegram"
            value={resumeData.telegram}
            onChange={(e) => onInputChange('telegram', e.target.value)}
          />
          <InputField
            label="GitHub"
            value={resumeData.github}
            onChange={(e) => onInputChange('github', e.target.value)}
          />
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-green-400 mb-4 font-mono">[PROFESSIONAL SUMMARY]</h2>
        <textarea
          value={resumeData.summary}
          onChange={(e) => onInputChange('summary', e.target.value)}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 min-h-[120px]"
          placeholder="Professional summary..."
        />
      </div>

      {/* Education */}
      <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-green-400 mb-4 font-mono">[EDUCATION]</h2>
        <div className="space-y-4">
          <InputField
            label="University"
            value={resumeData.education.university}
            onChange={(e) => onNestedChange('education', 'university', e.target.value)}
          />
          <InputField
            label="Degree"
            value={resumeData.education.degree}
            onChange={(e) => onNestedChange('education', 'degree', e.target.value)}
          />
          <InputField
            label="Specialization"
            value={resumeData.education.specialization}
            onChange={(e) => onNestedChange('education', 'specialization', e.target.value)}
          />
        </div>
      </div>

      {/* Skills */}
      <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-green-400 mb-4 font-mono">[CORE COMPETENCIES]</h2>
        <div className="space-y-2">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => onSkillChange(index, e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                placeholder="Skill name..."
              />
              <button
                onClick={() => onRemoveSkill(index)}
                className="px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-all"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={onAddSkill}
            className="w-full px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-all"
          >
            + Add Skill
          </button>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-green-400 mb-4 font-mono">[TECHNICAL SKILLS]</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Security Tools</label>
            <textarea
              value={resumeData.tools}
              onChange={(e) => onInputChange('tools', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 min-h-[60px]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Development</label>
            <textarea
              value={resumeData.development}
              onChange={(e) => onInputChange('development', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 min-h-[60px]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Technologies</label>
            <textarea
              value={resumeData.technologies}
              onChange={(e) => onInputChange('technologies', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 min-h-[60px]"
            />
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="bg-gray-800 border border-green-500/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-green-400 mb-4 font-mono">[KEY PROJECTS]</h2>
        <div className="space-y-4">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-green-400 font-mono text-sm">Project {index + 1}</span>
                <button
                  onClick={() => onRemoveProject(index)}
                  className="px-2 py-1 bg-red-600 hover:bg-red-500 text-white rounded text-sm transition-all"
                >
                  Remove
                </button>
              </div>
              <input
                type="text"
                value={project.title}
                onChange={(e) => onProjectChange(index, 'title', e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                placeholder="Project title..."
              />
              <textarea
                value={project.description}
                onChange={(e) => onProjectChange(index, 'description', e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 min-h-[80px]"
                placeholder="Project description..."
              />
              <input
                type="text"
                value={project.technologies}
                onChange={(e) => onProjectChange(index, 'technologies', e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                placeholder="Technologies (comma-separated)..."
              />
              <input
                type="text"
                value={project.status}
                onChange={(e) => onProjectChange(index, 'status', e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                placeholder="Status (optional, e.g., 'In Development')..."
              />
            </div>
          ))}
          <button
            onClick={onAddProject}
            className="w-full px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-all"
          >
            + Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

// Preview Panel Component
const PreviewPanel = ({ resumeData }) => {
  return (
    <div className="bg-gray-800 border border-green-500/30 rounded-lg p-8 shadow-2xl" id="resume-preview">
      <div className="bg-gray-900 rounded-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center border-b border-green-500/30 pb-6">
          <h1 className="text-3xl font-bold text-green-400 mb-2 font-mono uppercase">
            {resumeData.fullName}
          </h1>
          <p className="text-lg text-blue-400 mb-3">{resumeData.title}</p>
          <div className="text-sm text-gray-400 space-y-1">
            <p>{resumeData.email} | {resumeData.phone}</p>
            <p>GitHub: {resumeData.github.replace('https://github.com/', '')} | Telegram: @{resumeData.telegram}</p>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-lg font-bold text-green-400 mb-2 font-mono border-b border-green-500/30 pb-1">
            [PROFESSIONAL SUMMARY]
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">{resumeData.summary}</p>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-lg font-bold text-green-400 mb-2 font-mono border-b border-green-500/30 pb-1">
            [EDUCATION]
          </h2>
          <div className="text-sm text-gray-300">
            <p className="font-semibold text-blue-400">{resumeData.education.university}</p>
            <p>{resumeData.education.degree}</p>
            <p className="text-gray-400 text-xs">Specialization: {resumeData.education.specialization}</p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-bold text-green-400 mb-2 font-mono border-b border-green-500/30 pb-1">
            [CORE COMPETENCIES]
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="text-sm text-gray-300">
                <span className="text-green-500">▸</span> {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h2 className="text-lg font-bold text-green-400 mb-2 font-mono border-b border-green-500/30 pb-1">
            [TECHNICAL SKILLS]
          </h2>
          <div className="space-y-2 text-sm text-gray-300">
            <div>
              <span className="font-semibold text-blue-400">Security Tools:</span> {resumeData.tools}
            </div>
            <div>
              <span className="font-semibold text-blue-400">Development:</span> {resumeData.development}
            </div>
            <div>
              <span className="font-semibold text-blue-400">Technologies:</span> {resumeData.technologies}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-lg font-bold text-green-400 mb-2 font-mono border-b border-green-500/30 pb-1">
            [KEY PROJECTS]
          </h2>
          <div className="space-y-4">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="text-sm">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-blue-400">{project.title}</h3>
                  {project.status && (
                    <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mt-1 leading-relaxed">{project.description}</p>
                <p className="text-gray-400 text-xs mt-1 italic">
                  Technologies: {project.technologies}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 border-t border-green-500/30 pt-4">
          References available upon request
        </div>
      </div>
    </div>
  );
};

// Input Field Component
const InputField = ({ label, value, onChange, type = 'text' }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
      />
    </div>
  );
};

export default ResumeGenerator;
