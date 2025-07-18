"use client"

import { Button } from "@/components/ui/button"
import { FileText, Mail, Linkedin, Github } from "lucide-react"

export default function ResumePage() {
  const handleContact = () => {
    window.location.href = "mailto:dhruvjain527@gmail.com"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Resume Download Button */}
          <div className="mb-4 flex justify-center">
            {/* <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              size="lg"
            >
              <a
                href="/Dhruv Jain Resume CV Latest.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <FileText className="mr-2 h-5 w-5" />
                Download My Latest Resume (PDF)
              </a>
            </Button> */}
          </div>
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Dhruv Jain
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Software Developer & Full Stack Engineer
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleContact}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.linkedin.com/in/dhruv-jain-877543223/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/dhruvjain2004" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-400">
                <p>📧 dhruvjain527@gmail.com</p>
                <p>📱 +91 8860048684</p>
                <p>📍 Delhi, India</p>
                <p>🌐 dhruvjain2004.github.io</p>
              </div>
            </div>

            {/* Summary */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Professional Summary</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Aspiring software developer with hands-on experience in full-stack development, a strong foundation in Data Structures and Algorithms (DSA), and a proven record of building real-world projects. Seeking a role where I can contribute to scalable software solutions and grow with a forward-thinking tech team. Strong problem-solving skills and ability to work in collaborative environments.
              </p>
            </div>

            {/* Skills */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Frontend</h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• React.js</li>
                    <li>• JavaScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• HTML5 & CSS3</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Backend</h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Node.js</li>
                    <li>• Express.js</li>
                    <li>• MongoDB</li>
                    <li>• MySQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Tools & Others</h3>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Git & GitHub</li>
                    <li>• Render</li>
                    <li>• AWS</li>
                    <li>• Vercel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Work Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Web Developer</h3>
                  <p className="text-blue-600 dark:text-blue-400">Tech Company • May 2024 - June 2024</p>
                  <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>• Developed and maintained web applications using HTML,CSS and Javascript</li>
                    <li>• Collaborated with cross-functional teams to deliver high-quality products</li>
                    <li>• Implemented responsive design and optimized application performance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Education</h2>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Bachelor of Technology in Computer Science</h3>
                <p className="text-blue-600 dark:text-blue-400">Raj Kumar Goel Institute of Technology , AKTU • 2022 - 2026</p>
                <p className="text-gray-600 dark:text-gray-400">GPA: 8.05/10</p>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Key Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">NaukriVerse - A Job Portal App</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Built a full-stack job portal application using React.js, Node.js, Express.js and MongoDB. 
                    Features include user authentication, job listings, and application management.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">StockTradeX - Trading App</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Developed a modern trading application using React.js, Node.js, Express.js , MongoDB and Tailwind CSS. 
                    Includes real-time stock data, user authentication, and interactive charts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Interested in working together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Button onClick={handleContact} className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}