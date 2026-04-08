import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import GlowCard from './ui/GlowCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // EmailJS configuration from environment variables
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      // Template parameters - must match your EmailJS template exactly
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: import.meta.env.VITE_EMAIL_TO,
        reply_to: formData.email
      };
      
      console.log('Sending email with params:', templateParams);
      
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      
      console.log('Email sent successfully:', result);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', error.text || error.message);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gurbakshkaur127@gmail.com',
      href: 'mailto:gurbakshkaur127@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9465310712',
      href: 'tel:+919465310712',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Punjab, India',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gurbaksh363', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/learnergurbaksh', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gurbakshkaur127@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative flex items-center mb-16 lg:mb-0">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's work together on your next project"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Contact Info (order-2 on mobile, order-1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
                Let's talk about everything!
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Don't like forms? Send me an{' '}
                <a href="mailto:gurbakshkaur127@gmail.com" className="text-accent-400 hover:underline">
                  email
                </a>
                . 👋
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlowCard>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-accent-500/10 flex-shrink-0">
                        <info.icon className="text-accent-400" size={24} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white font-medium hover:text-accent-400 transition-colors break-all text-sm md:text-base"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium break-all text-sm md:text-base">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4 text-center lg:text-left">Follow me on social media:</p>
              <div className="flex gap-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-full hover:bg-accent-500/10 transition-colors duration-300 group"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <social.icon className="text-gray-400 group-hover:text-accent-400 transition-colors" size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact Form (order-1 on mobile, order-2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <GlowCard>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:border-accent-500 text-white transition-colors text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:border-accent-500 text-white transition-colors text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:border-accent-500 text-white transition-colors text-sm md:text-base"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5 md:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:border-accent-500 text-white transition-colors resize-none text-sm md:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
                  >
                    Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}

                <div className="flex justify-center">
                  <Button
                    variant="primary"
                    className="w-full max-w-md"
                    type="submit"
                    disabled={isSubmitting}
                    icon={Send}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
