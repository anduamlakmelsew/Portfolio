import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import Button from '../components/Button';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please try alternative contact methods below.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Get In Touch</h1>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="card">
          <div className="flex items-center mb-6">
            <Mail className="text-blue-500 mr-3" size={32} />
            <div>
              <h2 className="text-2xl font-bold">Send a Message</h2>
              <p className="text-gray-400">Fill out the form below</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.name 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.message 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                }`}
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {status.message && (
              <div
                className={`flex items-center p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-900/20 border border-green-800 text-green-400'
                    : 'bg-red-900/20 border border-red-800 text-red-400'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="mr-3 flex-shrink-0" size={20} />
                ) : (
                  <AlertCircle className="mr-3 flex-shrink-0" size={20} />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full"
            >
              Send Message <Send className="ml-2" size={20} />
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                <Phone className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                <Mail className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex items-start p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                <MessageCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Telegram</h3>
                  <a 
                    href={`https://t.me/${personalInfo.telegram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center"
                  >
                    @{personalInfo.telegram}
                    <ExternalLink className="ml-1" size={14} />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                <ExternalLink className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">GitHub</h3>
                  <a 
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center break-all"
                  >
                    {personalInfo.github}
                    <ExternalLink className="ml-1 flex-shrink-0" size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="card bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">View My GitHub</span>
                  <ExternalLink size={18} className="text-blue-400" />
                </div>
              </a>
              <a
                href={`https://t.me/${personalInfo.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Message on Telegram</span>
                  <ExternalLink size={18} className="text-blue-400" />
                </div>
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="card">
            <h3 className="text-xl font-bold mb-3">Availability</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm currently open to opportunities in SOC analysis, cybersecurity consulting, 
              and security-focused development roles. Feel free to reach out for collaborations 
              or project discussions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
