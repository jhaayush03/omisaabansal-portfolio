"use client";
import { useState } from "react";
import {
  Download,
  ExternalLink,
  Calendar,
  Users,
  Award,
  BookOpen,
  Zap,
  Quote,
  Share2,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";

interface ResearchPaper {
  id: number;
  title: string;
  authors: string[];
  date: string;
  publishedIn: string;
  abstract: string;
  introduction: string;
  keyFindings: string[];
  methodology: string;
  conclusion: string;
  keywords: string[];
  citations: number;
  pdfUrl: string;
  externalLink: string;
  image: string;
  volume?: string;
  issue?: string;
  pages?: string;
}

export default function ResearchPaperPage() {
  const [selectedSection, setSelectedSection] = useState<string>("abstract");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const researchPaper: ResearchPaper = {
    id: 1,
    title:
      "Advanced Machine Learning Approaches for Real-Time Predictive Analytics in Cloud Infrastructure",
    authors: [
      "Alexandra Chen",
      "Dr. Michael Thompson",
      "Dr. Sarah Williams",
      "Prof. James Rodriguez",
    ],
    date: "March 2024",
    publishedIn: "Journal of Machine Learning and Data Science",
    volume: "Volume 15",
    issue: "Issue 3",
    pages: "pp. 234-267",
    abstract:
      "This research paper presents a comprehensive framework for implementing advanced machine learning algorithms in cloud-based infrastructure to enable real-time predictive analytics. We introduce novel optimization techniques that reduce computational overhead by 65% while maintaining high accuracy. Our methodology combines federated learning with edge computing to process streaming data efficiently across distributed systems. The results demonstrate that our approach outperforms traditional centralized methods in both latency and scalability metrics.",
    introduction:
      "The exponential growth of data generation in modern applications has created unprecedented challenges for real-time analytics. Traditional centralized machine learning approaches struggle with scalability and latency issues when processing massive data streams. This paper addresses these challenges by proposing an innovative distributed architecture that leverages cloud computing resources and edge computing nodes. Our solution is designed to be production-ready and has been validated across multiple cloud platforms including AWS, Google Cloud, and Azure.",
    methodology:
      "Our research methodology consists of four phases: (1) Data Collection and Preprocessing, where we gathered 50GB of real-world data from various IoT sensors and cloud services; (2) Model Development, implementing both traditional ML algorithms and deep learning models; (3) Optimization and Tuning, using automated hyperparameter optimization; (4) Deployment and Testing, evaluating performance across different cloud environments. We used Python, TensorFlow, and Apache Spark for implementation, with validation on production datasets containing over 100 million records.",
    keyFindings: [
      "Achieved 65% reduction in computational overhead compared to baseline methods",
      "Reduced inference latency from 850ms to 120ms on average",
      "Improved prediction accuracy by 12% using ensemble methods",
      "Successfully scaled to handle 1 million events per second",
      "Implemented federated learning reducing data transmission by 80%",
      "Cost reduction of 45% compared to traditional cloud solutions",
    ],
    conclusion:
      "This research successfully demonstrates that advanced machine learning combined with intelligent cloud architecture can achieve significant improvements in real-time predictive analytics. The proposed framework addresses key industry challenges and provides practical solutions for enterprise-scale deployments. Future work will focus on incorporating reinforcement learning for dynamic optimization and expanding the framework to support multi-cloud environments. Our contributions have direct applicability to finance, healthcare, e-commerce, and IoT sectors.",
    keywords: [
      "Machine Learning",
      "Cloud Computing",
      "Predictive Analytics",
      "Edge Computing",
      "Federated Learning",
      "Real-time Processing",
      "Data Science",
      "Distributed Systems",
    ],
    citations: 234,
    pdfUrl: "https://example.com/research-paper.pdf",
    externalLink: "https://example.com/paper-doi-link",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  };

  const sections = [
    { id: "abstract", label: "Abstract", icon: BookOpen },
    { id: "introduction", label: "Introduction", icon: Zap },
    { id: "methodology", label: "Methodology", icon: FileText },
    { id: "findings", label: "Key Findings", icon: Award },
    { id: "conclusion", label: "Conclusion", icon: Quote },
  ];

  const getSectionContent = () => {
    switch (selectedSection) {
      case "abstract":
        return researchPaper.abstract;
      case "introduction":
        return researchPaper.introduction;
      case "methodology":
        return researchPaper.methodology;
      case "findings":
        return null; // Special case for findings
      case "conclusion":
        return researchPaper.conclusion;
      default:
        return researchPaper.abstract;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <span className="text-blue-400 font-semibold">
              Research Publication
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {researchPaper.title}
          </h1>

          {/* Authors and Meta Info */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {researchPaper.authors.map((author, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-gray-300 hover:border-blue-400/50 transition-colors"
                >
                  {author}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-400" />
                {researchPaper.date}
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-purple-400" />
                {researchPaper.publishedIn}
              </div>
              {researchPaper.volume && (
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  {researchPaper.volume}
                </div>
              )}
              {researchPaper.pages && (
                <div className="text-gray-400">{researchPaper.pages}</div>
              )}
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-yellow-400" />
                {researchPaper.citations} Citations
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={researchPaper.pdfUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70"
            >
              <Download className="h-5 w-5" />
              Download PDF
            </a>
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50 text-white font-semibold rounded-lg transition-all duration-300"
            >
              <ExternalLink className="h-5 w-5" />
              View Paper
            </button>
            <a
              href={researchPaper.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 text-white font-semibold rounded-lg transition-all duration-300"
            >
              <Share2 className="h-5 w-5" />
              External Link
            </a>
          </div>
        </div>
      </section>

      {/* Paper Image */}
      <section className="px-4 sm:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-96 rounded-xl overflow-hidden border border-slate-700 group">
            <img
              src={researchPaper.image}
              alt={researchPaper.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 sm:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 border-b border-slate-700 pb-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedSection === section.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                      : "text-gray-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 backdrop-blur-md">
            {selectedSection === "findings" ? (
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Key Findings
                </h2>
                <div className="space-y-4">
                  {researchPaper.keyFindings.map((finding, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-colors group"
                    >
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                        {idx + 1}
                      </div>
                      <p className="text-gray-300 leading-relaxed flex-1 pt-1">
                        {finding}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {sections.find((s) => s.id === selectedSection)?.label}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                  {getSectionContent()}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="px-4 sm:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Keywords</h2>
          <div className="flex flex-wrap gap-3">
            {researchPaper.keywords.map((keyword, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-full text-blue-300 font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Paper Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col border border-slate-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h3 className="text-2xl font-bold text-white">Paper Preview</h3>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {researchPaper.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {researchPaper.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {researchPaper.keywords.slice(0, 5).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-slate-700 text-gray-300 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-white mb-3">
                    Publication Details
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <p>
                      <strong>Journal:</strong> {researchPaper.publishedIn}
                    </p>
                    <p>
                      <strong>Date:</strong> {researchPaper.date}
                    </p>
                    {researchPaper.volume && (
                      <p>
                        <strong>Volume:</strong> {researchPaper.volume}
                      </p>
                    )}
                    {researchPaper.pages && (
                      <p>
                        <strong>Pages:</strong> {researchPaper.pages}
                      </p>
                    )}
                    <p>
                      <strong>Citations:</strong> {researchPaper.citations}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-700 p-6 bg-slate-800/50 flex gap-3">
              <a
                href={researchPaper.pdfUrl}
                download
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all"
              >
                <Download className="h-5 w-5" />
                Download Full PDF
              </a>
              <a
                href={researchPaper.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all"
              >
                <ExternalLink className="h-5 w-5" />
                View on Publisher Site
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
