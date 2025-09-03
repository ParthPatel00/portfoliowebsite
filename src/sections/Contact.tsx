import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const mailtoLink = `mailto:patelsparth00@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoLink);
  };

  const contactInfo = [
    {
      icon: <MdEmail className="text-2xl" />,
      label: "Email",
      value: "patelsparth00@gmail.com",
      link: "mailto:patelsparth00@gmail.com",
      color: "bg-slate-700 text-slate-200",
    },
    {
      icon: <MdLocationOn className="text-2xl" />,
      label: "Location",
      value: "San Jose, CA",
      color: "bg-emerald-900 text-emerald-200",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      value: "github.com/ParthPatel00",
      link: "https://github.com/ParthPatel00",
      color: "bg-slate-600 text-slate-200",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/parth-patel-sjsu",
      link: "https://www.linkedin.com/in/parth-patel-sjsu",
      color: "bg-slate-800 text-slate-200",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader text="Get In Touch" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg text-slate-400 font-medium">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Let's Connect</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                Ready to work together?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm always interested in new opportunities, collaborations, and
                interesting projects. Whether you have a question or just want
                to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group-hover:scale-102">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 ${info.color} rounded-lg`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-slate-400 mb-1">
                          {info.label}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={
                              info.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-white font-medium hover:text-slate-300 transition-colors text-xs leading-tight block truncate"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium text-xs leading-tight truncate">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaGithub />,
                    href: "https://github.com/ParthPatel00",
                    label: "GitHub",
                  },
                  {
                    icon: <FaLinkedin />,
                    href: "https://www.linkedin.com/in/parth-patel-sjsu",
                    label: "LinkedIn",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 text-slate-400 hover:text-white hover:border-slate-500 transition-all flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-lg p-8 border border-slate-700/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-700 border border-slate-600 rounded-lg">
                    <FaPaperPlane className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 transition-all resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-slate-800 border border-slate-600 rounded-lg font-semibold text-white hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPaperPlane />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
