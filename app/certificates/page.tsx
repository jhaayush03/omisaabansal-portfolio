"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";

interface Certificate {
  id: number;
  title: string;
  date: string;
  image: string;
  issuer?: string;
}

export default function CertificatePage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [modalScrollTop, setModalScrollTop] = useState(0);

  // Sample certificate data - replace with your actual data
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Advanced Machine Learning",
      date: "March 2024",
      image: "/image64.jpeg",
      issuer: "Stanford Online",
    },
    {
      id: 2,
      title: "Data Science Professional",
      date: "February 2024",
      image: "/image65.jpeg",
      issuer: "Coursera",
    },
    {
      id: 3,
      title: "Python Programming",
      date: "January 2024",
      image: "/image110.jpeg",
      issuer: "Udemy",
    },
    {
      id: 4,
      title: "Cloud Architecture",
      date: "December 2023",
      image: "image111.jpeg",
      issuer: "AWS",
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      date: "November 2023",
      image: "image112.jpeg",
      issuer: "Codecademy",
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image113.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 7,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image114.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 8,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image115.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 9,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image133.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 10,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image134.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 11,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image135.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 12,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image136.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 13,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image144.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 14,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image145.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 15,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image146.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 16,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image178.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 17,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image179.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 18,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image180.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 19,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image181.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 20,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image182.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 21,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image183.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 22,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image200.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 23,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image201.jpeg",
      issuer: "Design Academy",
    },
    {
      id: 24,
      title: "UI/UX Design Fundamentals",
      date: "October 2023",
      image: "/image202.jpeg",
      issuer: "Design Academy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificates & Credentials
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            A collection of professional certifications and credentials I've
            earned throughout my career.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="px-4 sm:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                {/* Certificate Image */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Certificate Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {cert.title}
                  </h3>

                  {cert.issuer && (
                    <p className="text-sm text-gray-400 mb-3">{cert.issuer}</p>
                  )}

                  <p className="text-sm text-gray-400 mb-4">{cert.date}</p>

                  <Button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    View Certificate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full Certificate View */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-slate-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedCert.title}
                </h2>
                {selectedCert.issuer && (
                  <p className="text-sm text-gray-400 mt-1">
                    {selectedCert.issuer}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content with Scroll */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto rounded-lg border border-slate-700"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-700 p-6 bg-slate-800/50">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-400">{selectedCert.date}</p>
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
