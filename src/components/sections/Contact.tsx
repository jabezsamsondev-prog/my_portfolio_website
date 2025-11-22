import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Card, CardContent } from "../ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Linkedin,
  Instagram,
  Github,
  Facebook,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { SiQuora } from "react-icons/si";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateEmail = (email: string): boolean => {
    // RFC 5322 compliant email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Please enter your name';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Please enter your email address';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        return '';
      case 'subject':
        if (!value.trim()) return 'Please enter a subject';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        return '';
      case 'message':
        if (!value.trim()) return 'Please enter your message';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Trim all form data to remove extra whitespace
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim()
    };

    // Validate that fields are not empty after trimming
    if (!trimmedData.name || !trimmedData.email || !trimmedData.subject || !trimmedData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      setIsSubmitting(false);
      return;
    }

    try {
      // Replace with your Google Apps Script Web App URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwmPa8VGmMijrGThURZSsaX3v1n5it8KCzS196wmzMclXUuQFxc1MduzVs9H8euPCEXmQ/exec';
      
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedData)
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      className="bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
    >
      {/* Communication Doodle Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="doodle-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Email Icon Doodle */}
              <g transform="translate(30, 30)">
                <rect x="0" y="8" width="24" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" rx="2"/>
                <path d="M 0 8 L 12 16 L 24 8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              </g>
              
              {/* Phone Icon Doodle */}
              <g transform="translate(120, 50)">
                <path d="M 4 2 Q 2 2 2 4 L 2 20 Q 2 22 4 22 L 16 22 Q 18 22 18 20 L 18 4 Q 18 2 16 2 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="6" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5"/>
              </g>
              
              {/* Message Bubble Doodle */}
              <g transform="translate(160, 120)">
                <rect x="0" y="0" width="28" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M 8 20 L 14 26 L 14 20" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="6" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="6" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5"/>
              </g>
              
              {/* Location Pin Doodle */}
              <g transform="translate(50, 140)">
                <path d="M 12 2 Q 8 2 6 6 Q 4 10 6 14 L 12 24 L 18 14 Q 20 10 18 6 Q 16 2 12 2 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              </g>
              
              {/* At Symbol Doodle */}
              <g transform="translate(140, 150)">
                <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M 10 6 Q 14 6 14 10 L 14 14 Q 14 16 12 16 Q 10 16 10 14 L 10 10 Q 10 8 12 8 Q 14 8 14 10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              </g>
              
              {/* Chat Dots Doodle */}
              <g transform="translate(80, 100)">
                <circle cx="4" cy="10" r="2" fill="currentColor"/>
                <circle cx="12" cy="10" r="2" fill="currentColor"/>
                <circle cx="20" cy="10" r="2" fill="currentColor"/>
              </g>
              
              {/* Link/Connection Icon */}
              <g transform="translate(20, 100)">
                <path d="M 8 12 L 12 8 M 12 16 L 16 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="6" cy="14" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="18" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#doodle-pattern)"/>
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-3xl" />

      {/* Toast Notifications */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-md"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-lg shadow-2xl shadow-green-500/50 border border-green-400/50 flex items-center gap-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.2 }}
              >
                <CheckCircle className="h-6 w-6 flex-shrink-0" />
              </motion.div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Success!</p>
                <p className="text-xs opacity-90">Message sent successfully! I'll get back to you soon.</p>
              </div>
            </div>
          </motion.div>
        )}
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-md"
          >
            <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-6 py-4 rounded-lg shadow-2xl shadow-red-500/50 border border-red-400/50 flex items-center gap-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.2 }}
              >
                <XCircle className="h-6 w-6 flex-shrink-0" />
              </motion.div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Error!</p>
                <p className="text-xs opacity-90">Failed to send message. Please try again or email me directly.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-12 text-center">
        <h2 className="text-[32px] font-bold mb-4">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-xs md:text-sm px-4">
          Have a project in mind or just want to say hi? I'm always open to
          discussing new projects, creative ideas or opportunities to be part of
          your visions.
        </p>
      </div>

      <div className="grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="space-y-5 md:space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="flex items-center gap-4 p-5 md:p-6">
                <div className="bg-primary/20 p-3 rounded-full text-primary flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-xs md:text-sm">Email</h3>
                  <p className="text-muted-foreground text-xs md:text-sm truncate">
                    jabezsamson.dev@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="flex items-center gap-4 p-5 md:p-6">
                <div className="bg-primary/20 p-3 rounded-full text-primary flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-xs md:text-sm">Phone</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    +91 9710601958
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="flex items-center gap-4 p-5 md:p-6">
                <div className="bg-primary/20 p-3 rounded-full text-primary flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-xs md:text-sm">
                    Location
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Chennai, Tamil Nadu.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Section */}
          <div className="mt-8 pt-6 border-t border-primary/20">
            <h3 className="text-sm md:text-sm font-semibold mb-5">
              Follow Me on Social Media
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/jabezsamson/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://github.com/jabezsamsondev-prog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.quora.com/profile/Jabez-Samson"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Quora"
              >
                <SiQuora className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://x.com/jabinem"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.instagram.com/jabezsamson/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.facebook.com/jabezsamson95"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <form
            className="space-y-6 p-8 md:p-10 rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm flex-1"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-foreground block"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-lg border-0 bg-secondary/50 px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:bg-secondary focus:ring-2 transition-all duration-200 outline-none ${
                    errors.name ? 'ring-2 ring-red-500/50 focus:ring-red-500/50' : 'focus:ring-primary/50'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                )}
              </div>
              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-foreground block"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-lg border-0 bg-secondary/50 px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:bg-secondary focus:ring-2 transition-all duration-200 outline-none ${
                    errors.email ? 'ring-2 ring-red-500/50 focus:ring-red-500/50' : 'focus:ring-primary/50'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="space-y-3">
              <label
                htmlFor="subject"
                className="text-xs font-medium text-foreground block"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-lg border-0 bg-secondary/50 px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:bg-secondary focus:ring-2 transition-all duration-200 outline-none ${
                  errors.subject ? 'ring-2 ring-red-500/50 focus:ring-red-500/50' : 'focus:ring-primary/50'
                }`}
                placeholder="Project Inquiry"
              />
              {errors.subject && (
                <p className="text-xs text-red-400 mt-1">{errors.subject}</p>
              )}
            </div>
            <div className="space-y-3">
              <label
                htmlFor="message"
                className="text-xs font-medium text-foreground block"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full min-h-[140px] md:min-h-[160px] rounded-lg border-0 bg-secondary/50 px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:bg-secondary focus:ring-2 transition-all duration-200 resize-none outline-none ${
                  errors.message ? 'ring-2 ring-red-500/50 focus:ring-red-500/50' : 'focus:ring-primary/50'
                }`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1">{errors.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full group" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {isSubmitting ? (
                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
