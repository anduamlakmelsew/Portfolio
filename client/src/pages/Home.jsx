import { Link } from 'react-router-dom';
import { ArrowRight, Code, Shield, Download, ExternalLink, Target } from 'lucide-react';
import ProfileImage from '../components/ProfileImage';
import { personalInfo, projects, technicalSkills } from '../data/portfolioData';

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/20"></div>
        
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-6 animate-fadeIn">
            <ProfileImage size="xl" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-400 mb-6 font-semibold">
            {personalInfo.title}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            {personalInfo.introduction}
          </p>

          {/* Education Badge */}
          <div className="inline-block mb-8 px-6 py-3 bg-gray-800 border border-blue-500 rounded-full">
            <p className="text-blue-400 font-semibold">
              🎓 {personalInfo.education.degree} | {personalInfo.education.university}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="btn-primary inline-flex items-center">
              <Target className="mr-2" size={20} />
              View Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <ExternalLink className="mr-2" size={20} />
              View GitHub
            </a>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Cybersecurity Focus Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500">
            <div className="flex items-center mb-4">
              <Shield className="text-blue-400 mr-3" size={40} />
              <h2 className="text-3xl font-bold text-blue-400">Cybersecurity Focus</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Specialized in <span className="text-blue-400 font-semibold">Security Operations Center (SOC)</span> analysis 
              and <span className="text-blue-400 font-semibold">Blue Team operations</span>. My expertise includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-400 mb-2">🛡️ Defensive Security</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Real-time threat monitoring</li>
                  <li>• Incident response & management</li>
                  <li>• Security event analysis</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-400 mb-2">🔍 Threat Detection</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Proactive threat hunting</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Network & system scanning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {featuredProjects.map((project) => (
            <div key={project.id} className="card hover:border-2 hover:border-blue-500 transition-all group">
              {project.status && (
                <div className="mb-3">
                  <span className="px-3 py-1 bg-yellow-600 text-white text-xs rounded-full">
                    {project.status}
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-600 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              <Link
                to="/projects"
                className="text-blue-500 hover:text-blue-400 inline-flex items-center font-semibold"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/projects" className="btn-primary inline-flex items-center">
            View All Projects <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="container mx-auto px-4">
        <h2 className="section-title">Core Competencies</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="card hover:border-2 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <Shield className="text-blue-500 mr-3" size={32} />
              <h3 className="text-2xl font-bold">SOC & Security</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills[0].skills.slice(0, 4).map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="card hover:border-2 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <Shield className="text-blue-500 mr-3" size={32} />
              <h3 className="text-2xl font-bold">Cybersecurity</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills[1].skills.slice(0, 4).map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card hover:border-2 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <Code className="text-blue-500 mr-3" size={32} />
              <h3 className="text-2xl font-bold">Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills[2].skills.slice(0, 4).map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/skills" className="text-blue-500 hover:text-blue-400 inline-flex items-center text-lg font-semibold">
            View All Skills <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto card bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-gray-300 text-lg mb-6">
            Looking for a dedicated SOC Analyst or security-focused developer? 
            Let's discuss how I can contribute to your security operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
            <Link to="/cybersecurity" className="btn-secondary">
              View Security Expertise
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
