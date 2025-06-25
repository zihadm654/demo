import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Settings, FileText, Shield, Brain, Users, Heart, Building2 } from "lucide-react"

export default function ClinTechnologies() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-slate-800/50">
        <div className="text-xl font-bold">Clin</div>
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#about" className="hover:text-blue-400 transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#solutions" className="hover:text-blue-400 transition-colors relative group">
            Our Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#technology" className="hover:text-blue-400 transition-colors relative group">
            AI Engine
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#technology" className="hover:text-blue-400 transition-colors relative group">
            Technology
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#benefits" className="hover:text-blue-400 transition-colors relative group">
            Benefits
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#case-use" className="hover:text-blue-400 transition-colors relative group">
            Case Use
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Large circular gradient on the left */}
          <div className="absolute -left-32 top-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-purple-600/20 rounded-full blur-3xl"></div>

          {/* Medium circular gradient on the right */}
          <div className="absolute -right-24 top-1/3 w-72 h-72 bg-gradient-to-bl from-blue-500/25 to-indigo-600/15 rounded-full blur-2xl"></div>

          {/* Small circular accent top center */}
          <div className="absolute left-1/2 top-16 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>

          {/* Additional geometric elements */}
          <div className="absolute left-1/4 bottom-1/4 w-32 h-32 bg-gradient-to-tr from-purple-500/15 to-pink-500/10 rounded-full blur-lg"></div>
          <div className="absolute right-1/3 bottom-1/3 w-24 h-24 bg-gradient-to-bl from-blue-400/20 to-cyan-400/15 rounded-full blur-md"></div>

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/30"></div>
        </div>

        <div className="relative max-w-4xl mx-auto z-10">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Clin Technologies</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionizing clinical documentation through{" "}
              <span className="text-blue-400 font-semibold">HIPAA COMPLIANT</span> advanced artificial intelligence,
              giving healthcare providers everything they need to focus on what truly matters — patient care. Try it for
              yourself.
            </p>
            <p className="text-gray-400 mb-8">
              Our sophisticated AI platform intelligently processes clinical conversations, creating accurate
              documentation that integrates with your existing EHR system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-transparent border-gray-600 text-white hover:bg-gray-800 backdrop-blur-sm"
              >
                Login
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 backdrop-blur-sm">Sign Up</Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">About Clin Technologies</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Healthcare is the backbone of our communities. A specialized branch that requires precise procedures to
              safeguard patient care and ensure optimal outcomes. However, the administrative burden of clinical
              documentation often detracts from the direct patient care that healthcare providers are passionate about.
              At the heart of this challenge lies the need for accurate, efficient, and compliant documentation.
            </p>
            <p>
              Our expertise lies in applying cutting-edge{" "}
              <span className="text-blue-400">Large Language Models (LLMs)</span> and advanced{" "}
              <span className="text-blue-400">learning ML</span> to solve real-world healthcare challenges. We
              understand that every clinical conversation is unique, and our AI is designed to capture the nuances,
              context, and critical details that matter most. From routine check-ups to complex diagnostic discussions,
              our platform ensures nothing is missed.
            </p>
            <p>
              This same pursuit of innovation serves as the foundation for our enterprise partnerships. Whether you need
              AI-powered clinical documentation insights, or a strategic partner to build custom AI solutions for your
              healthcare organization, we're here to help. Our team combines deep healthcare domain expertise with
              cutting-edge AI technology to deliver solutions that make a real difference in patient care and provider
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Solutions</h2>
          <p className="text-center text-gray-400 mb-12">
            Our comprehensive suite of AI-powered solutions addresses every aspect of healthcare documentation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Validity</h3>
                <p className="text-gray-300">
                  Ensure documentation accuracy with advanced AI that understands medical context and terminology. Our
                  validation system cross-references clinical data to maintain the highest standards of accuracy and
                  compliance, reducing errors and improving patient safety.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <Settings className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Reactivity</h3>
                <p className="text-gray-300">
                  Real-time clinical HIPAA-compliant feedback, assessments, and recommendations. Our reactive AI system
                  provides instant insights during patient encounters, helping providers make informed decisions and
                  improve patient outcomes in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Transcript</h3>
                <p className="text-gray-300">
                  Transform clinical conversations into structured, detailed clinical documentation. Our advanced
                  transcription AI captures nuanced medical conversations, converting them into comprehensive clinical
                  notes that integrate seamlessly with your existing EHR systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Changelogit</h3>
                <p className="text-gray-300">
                  Track and audit with accuracy. Our AI-powered audit trail logs every change, decision point, and
                  modification professionally made to clinical documentation, ensuring full transparency and
                  accountability in your healthcare practice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions in Action */}
      <section className="px-6 py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">See Our Solutions in Action</h2>

          <Tabs defaultValue="transcript" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-700">
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="changelogit">Changelogit</TabsTrigger>
              <TabsTrigger value="reactivity">Reactivity</TabsTrigger>
              <TabsTrigger value="validity">Validity</TabsTrigger>
            </TabsList>
            <TabsContent value="transcript" className="mt-8">
              <div className="bg-slate-800 p-8 rounded-lg">
                <p className="text-gray-300 mb-6">
                  Experience real-time clinical conversation transcription with our advanced AI technology.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="changelogit" className="mt-8">
              <div className="bg-slate-800 p-8 rounded-lg">
                <p className="text-gray-300 mb-6">
                  Track every change and modification with comprehensive audit trails.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="reactivity" className="mt-8">
              <div className="bg-slate-800 p-8 rounded-lg">
                <p className="text-gray-300 mb-6">
                  Get real-time feedback and recommendations during patient encounters.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="validity" className="mt-8">
              <div className="bg-slate-800 p-8 rounded-lg">
                <p className="text-gray-300 mb-6">Ensure documentation accuracy with AI-powered validation systems.</p>
              </div>
            </TabsContent>
          </Tabs>

          <Button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3">Try Our Solutions Today</Button>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Technology</h2>
          <p className="text-center text-gray-400 mb-12">
            At Clin Technologies, we harness the most advanced developments in AI to build truly transformative
            solutions. Our platform combines cutting-edge natural language processing with deep healthcare domain
            expertise to deliver unparalleled accuracy and efficiency in clinical documentation.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Sophisticated Natural Language Processing</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  At the core of our platform is an advanced Natural Language Processing engine that understands medical
                  terminology, context, and nuances. Our NLP technology processes clinical conversations with
                  unprecedented accuracy, capturing subtle medical details that traditional systems miss. This
                  sophisticated understanding enables our AI to generate comprehensive, contextually accurate clinical
                  documentation that meets the highest standards of medical practice.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Learning Mode & Personalization</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our AI doesn't just process information—it learns and adapts to individual healthcare providers and
                  practice patterns. Through continuous learning algorithms, our system personalizes its approach to
                  match each provider's documentation style, preferred terminology, and clinical workflow. This
                  personalization ensures that generated documentation feels natural and aligns with each provider's
                  unique approach to patient care, improving both efficiency and satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Robust Data Privacy & Security</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Healthcare data security is paramount, and our platform is built with enterprise-grade security
                  measures. We maintain full HIPAA compliance with end-to-end encryption, secure data transmission, and
                  strict access controls. Our infrastructure includes advanced threat detection, regular security
                  audits, and comprehensive data governance protocols. Patient information is protected at every level,
                  ensuring that healthcare providers can trust our platform with their most sensitive data while
                  maintaining complete regulatory compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="px-6 py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Benefits</h2>
          <p className="text-gray-400 mb-8">
            Healthcare providers using Clin Technologies experience transformative improvements in their clinical
            workflow and patient care.
          </p>

          <div className="text-left space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Reduction in documentation time by up to 80%</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Improved work-life balance with less administrative burden</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Enhanced patient care through more focused interactions</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">More comprehensive and consistent clinical documentation</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Reduced risk of documentation errors and omissions</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-transparent border-gray-600 text-white hover:bg-gray-800">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
          </div>
        </div>
      </section>

      {/* Case Use Section */}
      <section id="case-use" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Case Use</h2>
          <p className="text-center text-gray-400 mb-12">
            Our AI-powered clinical documentation solutions serve healthcare providers across multiple specialties and
            care settings.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Primary Care</h3>
                <p className="text-gray-300">
                  Dr. Smith reduced her documentation time by 75%, allowing her to see more patients and spend quality
                  time with each one during routine check-ups and chronic disease management.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Emergency Medicine</h3>
                <p className="text-gray-300">
                  Our ER department experienced a 60% reduction in note completion time, enabling faster patient
                  throughput and improved care coordination during critical situations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <Brain className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Behavioral Health</h3>
                <p className="text-gray-300">
                  Therapists using our platform report 80% less time spent on documentation, allowing them to focus
                  entirely on therapeutic relationships and patient mental health outcomes while maintaining detailed
                  session notes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <Building2 className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Case Management</h3>
                <p className="text-gray-300">
                  Complex care coordination becomes streamlined with our AI platform. Case managers can track patient
                  progress across multiple providers and specialties, ensuring comprehensive care plans and improved
                  patient outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="px-6 py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Ready to transform your clinical documentation process? Contact our team today. Clin Technologies can be
            tailored to your specific healthcare needs and integrated seamlessly with your existing EHR systems.
          </p>
          <p className="text-gray-400 mb-8">
            Or reach us directly via email at{" "}
            <a href="mailto:contact@clintechnologies.com" className="text-blue-400 hover:underline">
              contact@clintechnologies.com
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-transparent border-gray-600 text-white hover:bg-gray-800">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xl font-bold mb-4">Clin Technologies</div>
          <p className="text-gray-400 text-sm">
            © 2024 Clin Technologies. All rights reserved. | Revolutionizing healthcare documentation through AI.
          </p>
        </div>
      </footer>
    </div>
  )
}
