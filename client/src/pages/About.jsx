import { BookOpen, Target, Shield, GraduationCap } from 'lucide-react';
import ProfileImage from '../components/ProfileImage';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">About Me</h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Image Section */}
        <div className="flex justify-center">
          <ProfileImage size="lg" />
        </div>

        {/* Professional Summary */}
        <div className="card bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Professional Summary</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I am <span className="text-blue-400 font-semibold">{personalInfo.name}</span>, a dedicated 
            <span className="text-blue-400 font-semibold"> Cybersecurity Analyst</span> with specialized focus on 
            <span className="text-blue-400 font-semibold"> Security Operations Center (SOC)</span> operations. 
            My expertise lies in threat detection, incident response, and defensive cybersecurity strategies. 
            I combine deep security knowledge with full-stack development skills to build secure, resilient systems 
            that protect against modern cyber threats.
          </p>
        </div>

        {/* Education */}
        <div className="card">
          <div className="flex items-center mb-4">
            <GraduationCap className="text-blue-500 mr-3" size={32} />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-2">{personalInfo.education.degree}</h3>
            <p className="text-gray-300 mb-1">{personalInfo.education.university}</p>
            <p className="text-gray-400">
              <span className="font-semibold">Specialization:</span> {personalInfo.education.specialization}
            </p>
          </div>
        </div>

        {/* Background */}
        <div className="card">
          <div className="flex items-center mb-4">
            <BookOpen className="text-blue-500 mr-3" size={32} />
            <h2 className="text-2xl font-bold">Background</h2>
          </div>
          <div className="text-gray-400 leading-relaxed space-y-4">
            <p>
              My journey in cybersecurity began with a deep fascination for understanding how systems work 
              and, more importantly, how they can be protected. Through my education at Bahir Dar University, 
              I developed a strong foundation in cybersecurity principles, with a particular focus on 
              Security Operations Center (SOC) analysis.
            </p>
            <p>
              As a SOC Analyst, I specialize in monitoring security events, detecting threats in real-time, 
              and responding to incidents before they escalate. My approach combines proactive threat hunting 
              with reactive incident response, ensuring comprehensive security coverage.
            </p>
            <p>
              Beyond defensive security, I've developed expertise in vulnerability assessment, network security, 
              and system hardening. I understand common attack vectors like XSS, SQL Injection, and CSRF, 
              which allows me to implement effective countermeasures and security controls.
            </p>
          </div>
        </div>

        {/* SOC & Blue Team Focus */}
        <div className="card">
          <div className="flex items-center mb-4">
            <Shield className="text-blue-500 mr-3" size={32} />
            <h2 className="text-2xl font-bold">SOC & Blue Team Operations</h2>
          </div>
          <div className="text-gray-400 leading-relaxed space-y-4">
            <p>
              My primary focus is on <span className="text-blue-400 font-semibold">Blue Team operations</span> – 
              the defensive side of cybersecurity. I work on:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><span className="font-semibold text-gray-300">Security Monitoring:</span> Continuous surveillance of security events and alerts</li>
              <li><span className="font-semibold text-gray-300">Threat Detection:</span> Identifying malicious activities and potential security breaches</li>
              <li><span className="font-semibold text-gray-300">Incident Response:</span> Rapid response to security incidents to minimize impact</li>
              <li><span className="font-semibold text-gray-300">Log Analysis:</span> Analyzing system and network logs for security insights</li>
              <li><span className="font-semibold text-gray-300">Threat Hunting:</span> Proactively searching for hidden threats in the environment</li>
              <li><span className="font-semibold text-gray-300">Vulnerability Management:</span> Identifying and remediating security weaknesses</li>
            </ul>
            <p>
              Through my Blue Team project (Bueteam), I've implemented comprehensive defensive strategies 
              that combine automated monitoring with manual threat hunting to create a robust security posture.
            </p>
          </div>
        </div>

        {/* Development Skills */}
        <div className="card">
          <div className="flex items-center mb-4">
            <Target className="text-blue-500 mr-3" size={32} />
            <h2 className="text-2xl font-bold">Full-Stack Development</h2>
          </div>
          <div className="text-gray-400 leading-relaxed space-y-4">
            <p>
              In addition to my cybersecurity expertise, I'm a proficient full-stack developer. This unique 
              combination allows me to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Build secure applications with security built-in from the ground up</li>
              <li>Understand both the attacker's and defender's perspective</li>
              <li>Implement security controls at the application level</li>
              <li>Develop security tools and automation scripts</li>
              <li>Create dashboards and interfaces for security monitoring</li>
            </ul>
            <p>
              My development skills in React, Node.js, and other modern technologies enable me to create 
              practical security solutions and tools that enhance defensive capabilities.
            </p>
          </div>
        </div>

        {/* Career Goals */}
        <div className="card">
          <div className="flex items-center mb-4">
            <Target className="text-blue-500 mr-3" size={32} />
            <h2 className="text-2xl font-bold">Career Goals</h2>
          </div>
          <div className="text-gray-400 leading-relaxed space-y-4">
            <p>
              My goal is to become a leading SOC Analyst and Blue Team specialist, contributing to 
              organizations' security postures through proactive defense and rapid incident response. 
              I aim to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Master advanced threat detection and hunting techniques</li>
              <li>Develop innovative security tools and automation solutions</li>
              <li>Build comprehensive defense systems that prevent breaches before they occur</li>
              <li>Contribute to the cybersecurity community through knowledge sharing</li>
              <li>Stay at the forefront of emerging threats and defense strategies</li>
              <li>Bridge the gap between security operations and development teams</li>
            </ul>
            <p>
              I'm particularly passionate about creating proactive defense systems that don't just react 
              to threats, but anticipate and neutralize them before they can cause harm.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="card bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 mb-6">
            Interested in collaborating on security projects or discussing cybersecurity? 
            I'm always open to connecting with fellow security professionals and organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://github.com/${personalInfo.github.split('/').pop()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View GitHub
            </a>
            <a
              href="/contact"
              className="btn-secondary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
