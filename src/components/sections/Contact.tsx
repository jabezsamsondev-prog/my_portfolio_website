import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Card, CardContent } from "../ui/Card";
import { motion } from "framer-motion";
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
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string): boolean => {
    // RFC 5322 compliant email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate email on change
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validate email before submitting
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

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
      className="bg-gradient-to-b from-background to-secondary/20"
    >
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
            className="space-y-6 p-8 md:p-10 rounded-lg border border-primary/20 bg-secondary/20 flex-1"
            onSubmit={handleSubmit}
          >
            {submitStatus === 'success' && (
              <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm">
                Failed to send message. Please try again or email me directly.
              </div>
            )}
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
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border-0 bg-secondary/50 px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:bg-secondary focus:ring-2 focus:ring-primary/50 transition-all duration-200 outline-none"
                  placeholder="John Doe"
                />
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
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border-0 bg-secondary/50 px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:bg-secondary focus:ring-2 transition-all duration-200 outline-none ${
                    emailError ? 'ring-2 ring-red-500/50 focus:ring-red-500/50' : 'focus:ring-primary/50'
                  }`}
                  placeholder="john@example.com"
                />
                {emailError && (
                  <p className="text-xs text-red-400 mt-1">{emailError}</p>
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
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border-0 bg-secondary/50 px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:bg-secondary focus:ring-2 focus:ring-primary/50 transition-all duration-200 outline-none"
                placeholder="Project Inquiry"
              />
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
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full min-h-[140px] md:min-h-[160px] rounded-lg border-0 bg-secondary/50 px-4 py-3.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:bg-secondary focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none outline-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <Button type="submit" className="w-full group" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
