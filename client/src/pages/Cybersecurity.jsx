import { Shield, AlertTriangle, Wrench } from 'lucide-react';
import { vulnerabilities, securityTools } from '../data/portfolioData';

const Cybersecurity = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Cybersecurity Expertise</h1>
      
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <AlertTriangle className="mr-3 text-blue-500" size={32} />
            Vulnerabilities & Security Concepts
          </h2>
          <div className="space-y-4">
            {vulnerabilities.map((vuln) => (
              <div key={vuln.name} className="card">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{vuln.name}</h3>
                <p className="text-gray-400 leading-relaxed">{vuln.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Wrench className="mr-3 text-blue-500" size={32} />
            Security Tools & Labs
          </h2>
          <div className="card">
            <p className="text-gray-400 mb-6 leading-relaxed">
              I regularly practice with various security tools and vulnerable applications to sharpen 
              my penetration testing skills and stay updated with the latest attack vectors and 
              defense mechanisms.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityTools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Shield className="text-blue-500 mr-3 flex-shrink-0" size={20} />
                  <span className="font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Shield className="mr-3 text-red-500" size={28} />
            Security Philosophy & SOC Approach
          </h2>
          <div className="text-gray-400 leading-relaxed space-y-4">
            <p>
              As a SOC Analyst, I believe security should be proactive, not reactive. My approach combines 
              continuous monitoring with threat intelligence to identify and neutralize threats before they 
              cause damage. I advocate for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>24/7 security monitoring and real-time threat detection</li>
              <li>Proactive threat hunting to find hidden adversaries</li>
              <li>Rapid incident response with clear escalation procedures</li>
              <li>Defense in depth with multiple security layers</li>
              <li>Continuous improvement through lessons learned</li>
              <li>Collaboration between blue team and development teams</li>
              <li>Security automation to reduce response time</li>
            </ul>
            <p className="text-blue-400 font-semibold mt-4">
              "The best defense is a well-prepared, continuously monitoring, and rapidly responding security team."
            </p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Professional Development & Certifications</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Continuously expanding my expertise through hands-on practice, security research, and 
            professional development. Currently focused on:
          </p>
          <ul className="text-gray-400 space-y-2">
            <li>• Advanced SOC operations and threat hunting techniques</li>
            <li>• Security automation and orchestration (SOAR)</li>
            <li>• Threat intelligence analysis and integration</li>
            <li>• Cloud security and modern infrastructure protection</li>
            <li>• Pursuing industry certifications (CEH, Security+, CySA+)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
