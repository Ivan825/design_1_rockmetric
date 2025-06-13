import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Brain, LineChart, PieChart, Rocket, TrendingUp, ArrowRight, Check, Play, Star, Users } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [demoMetric, setDemoMetric] = useState(42);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const incrementMetric = () => {
    setDemoMetric(prev => Math.min(prev + 15, 100));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4B55] to-[#5B6AD0] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white/80 backdrop-blur-md py-6 px-6 fixed w-full top-0 z-40"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <motion.img 
              src="/image.png" 
              alt="Rockmetric" 
              className="h-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
          <div className="hidden md:flex gap-12">
            <motion.a 
              href="#features" 
              className="text-gray-600 hover:text-black transition-colors"
              whileHover={{ y: -2 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#demo" 
              className="text-gray-600 hover:text-black transition-colors"
              whileHover={{ y: -2 }}
            >
              Live Demo
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="text-gray-600 hover:text-black transition-colors"
              whileHover={{ y: -2 }}
            >
              Testimonials
            </motion.a>
          </div>
          <motion.button 
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6" ref={heroRef}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-[#FF4B55] rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">AI-Powered Analytics</span>
                </motion.div>
                <motion.div 
                  className="inline-flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Star className="w-4 h-4 text-[#FFB800]" fill="#FFB800" />
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </motion.div>
              </div>
              <motion.h1 
                className="text-6xl font-bold leading-tight mb-8 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transform Data into 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4B55] to-[#5B6AD0]"> Business Impact</span>
              </motion.h1>
              <motion.p 
                className="text-gray-600 text-lg mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Join 1000+ businesses using Rockmetric to unlock actionable insights. 
                Seamlessly integrate with Power BI for enhanced analytics.
              </motion.p>
              <motion.form 
                className="flex gap-4 mb-8" 
                onSubmit={(e) => e.preventDefault()}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="flex-1 px-6 py-4 rounded-md border border-gray-200 focus:outline-none focus:border-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <motion.button 
                  className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-900 transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
              </motion.form>
              <motion.div 
                className="flex items-center gap-8 text-sm text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#5B6AD0]" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#5B6AD0]" />
                  <span>No credit card required</span>
                </div>
              </motion.div>
            </motion.div>
            <div className="relative">
              <motion.div 
                className="absolute -z-10 w-[600px] h-[600px] bg-gradient-to-r from-[#5B6AD0] to-[#4CB9E7] opacity-10 rounded-full blur-3xl -right-40 -top-40"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <motion.div 
                    className="bg-white p-8 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <LineChart className="w-8 h-8 text-[#FF4B55] mb-4" strokeWidth={1.5} />
                    <h3 className="font-medium">Predictive Analytics</h3>
                  </motion.div>
                  <motion.div 
                    className="bg-white p-8 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <Brain className="w-8 h-8 text-[#5B6AD0] mb-4" strokeWidth={1.5} />
                    <h3 className="font-medium">AI-Powered Insights</h3>
                  </motion.div>
                </div>
                <div className="space-y-6 mt-12">
                  <motion.div 
                    className="bg-white p-8 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <BarChart3 className="w-8 h-8 text-[#FFB800] mb-4" strokeWidth={1.5} />
                    <h3 className="font-medium">Data Visualization</h3>
                  </motion.div>
                  <motion.div 
                    className="bg-white p-8 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <Rocket className="w-8 h-8 text-[#4CB9E7] mb-4" strokeWidth={1.5} />
                    <h3 className="font-medium">Real-time Analysis</h3>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50/50 px-6">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex justify-center gap-12 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&w=150" 
              alt="Company Logo" 
              className="h-8 opacity-50 hover:opacity-75 transition-opacity"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img 
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&w=150" 
              alt="Company Logo" 
              className="h-8 opacity-50 hover:opacity-75 transition-opacity"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img 
              src="https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&w=150" 
              alt="Company Logo" 
              className="h-8 opacity-50 hover:opacity-75 transition-opacity"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Data Analytics Lead",
                text: "Rockmetric helped us increase our data analysis efficiency by 40%. The AI insights are game-changing."
              },
              {
                name: "Michael Torres",
                role: "BI Manager",
                text: "The Power BI integration is seamless. We've cut our reporting time in half since implementing Rockmetric."
              },
              {
                name: "Emily Watson",
                role: "CEO",
                text: "The predictive analytics have transformed how we make business decisions. ROI has been incredible."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFB800]" fill="#FFB800" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Interactive Demo */}
      <section className="py-32 px-6" id="demo">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              See AI in Action
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience how Rockmetric analyzes your data in real-time and provides actionable insights.
            </motion.p>
          </div>
          <motion.div 
            className="bg-white rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.05)] p-12"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Revenue Prediction Model</h3>
                <p className="text-gray-600">Click to see how our AI analyzes trends</p>
              </div>
              <motion.button 
                onClick={incrementMetric}
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Analyze Data
              </motion.button>
            </div>
            <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#5B6AD0] to-[#4CB9E7]"
                style={{ width: `${demoMetric}%` }}
                initial={{ width: '0%' }}
                animate={{ width: `${demoMetric}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="mt-4 text-right text-sm text-gray-600">
              Analysis Progress: {demoMetric}%
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50/50 px-6" id="features" ref={featuresRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Powerful Features
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our AI-powered platform provides comprehensive analytics solutions to help you make better business decisions.
            </motion.p>
          </div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                icon: TrendingUp,
                color: "#FF4B55",
                title: "Advanced Analytics",
                description: "Leverage machine learning algorithms to uncover hidden patterns and trends in your data."
              },
              {
                icon: PieChart,
                color: "#5B6AD0",
                title: "Power BI Integration",
                description: "Seamlessly integrate with Power BI to enhance your existing data visualization capabilities."
              },
              {
                icon: Brain,
                color: "#FFB800",
                title: "AI Insights",
                description: "Get automated insights and recommendations powered by advanced AI algorithms."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-10 rounded-xl hover:shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-shadow"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`bg-[${feature.color}] bg-opacity-5 w-14 h-14 rounded-lg flex items-center justify-center mb-8`}>
                  <feature.icon className={`w-7 h-7 text-[${feature.color}]`} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "1000+", label: "Active Users" },
              { value: "40%", label: "Efficiency Increase" },
              { value: "24/7", label: "AI-Powered Support" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-4xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-black rounded-2xl p-16 text-center relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#5B6AD0] to-[#4CB9E7] opacity-10"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.h2 
              className="text-4xl font-bold mb-6 text-white relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Data?
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 text-gray-400 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join 1000+ businesses already using Rockmetric. Start your free trial today.
            </motion.p>
            <motion.div 
              className="flex justify-center gap-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-white text-black px-8 py-4 rounded-md hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button 
                className="border border-white/20 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center">
            <motion.img 
              src="/image.png" 
              alt="Rockmetric" 
              className="h-6"
              whileHover={{ scale: 1.05 }}
            />
            <div className="flex items-center gap-8">
              <motion.a 
                href="#privacy" 
                className="text-sm text-gray-500 hover:text-gray-900"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#terms" 
                className="text-sm text-gray-500 hover:text-gray-900"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <p className="text-sm text-gray-500">© 2025 Rockmetric. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;