import { Code, Server, Shield, Wrench, Users } from 'lucide-react';
import { technicalSkills, softSkills } from '../data/portfolioData';

const Skills = () => {
  const iconMap = {
    Frontend: Code,
    Backend: Server,
    Cybersecurity: Shield,
    'Tools & Technologies': Wrench,
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Skills</h1>
      
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Code className="mr-3 text-blue-500" size={32} />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skillGroup) => {
              const Icon = iconMap[skillGroup.category] || Code;
              return (
                <div key={skillGroup.category} className="card">
                  <div className="flex items-center mb-4">
                    <Icon className="text-blue-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-gray-700 rounded-lg text-sm hover:bg-gray-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Users className="mr-3 text-blue-500" size={32} />
            Soft Skills
          </h2>
          <div className="card">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800">
          <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-gray-400 leading-relaxed">
            I'm constantly expanding my skill set through online courses, security challenges, 
            and hands-on projects. Currently focusing on advanced penetration testing techniques, 
            cloud security, and modern web frameworks. I believe in staying updated with the latest 
            security threats and development best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
