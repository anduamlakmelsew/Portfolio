import { useState } from 'react';
import { ExternalLink, Star, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.flatMap(p => p.technologies))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Projects</h1>
      
      {/* Filter Buttons */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.slice(0, 10).map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-6">
        {filteredProjects.length === 0 ? (
          <div className="card text-center py-12">
            <p className="text-gray-400 text-lg">No projects found with this filter.</p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div key={project.id} className="card hover:border hover:border-blue-500 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2 flex items-center">
                    {project.title}
                    {project.featured && (
                      <Star className="ml-2 text-yellow-500 fill-yellow-500" size={20} />
                    )}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600 text-sm rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
                      onClick={() => setFilter(tech)}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <Code2 className="mr-2" size={20} />
                  View Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="max-w-6xl mx-auto mt-12 card bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Featured: AI-Based Baseline Assessment and Scanner</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          This flagship project represents the intersection of artificial intelligence and cybersecurity. 
          The scanner performs comprehensive security assessments across multiple layers:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-400 mb-2">🌐 Web Security</h3>
            <p className="text-sm text-gray-400">Scans for XSS, SQL Injection, CSRF, and other web vulnerabilities</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-400 mb-2">🔌 Network Analysis</h3>
            <p className="text-sm text-gray-400">Identifies network-level vulnerabilities and misconfigurations</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-400 mb-2">💻 System Assessment</h3>
            <p className="text-sm text-gray-400">Evaluates system security posture and compliance</p>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed">
          The AI component analyzes patterns, learns from scan results, and provides intelligent 
          recommendations for remediation. This tool is designed to help security teams identify 
          vulnerabilities early and maintain a strong security baseline.
        </p>
      </div>
    </div>
  );
};

export default Projects;
