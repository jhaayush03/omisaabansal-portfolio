"use client";
import { useState } from "react";
import {
  FileText,
  Download,
  ExternalLink,
  Calendar,
  Users,
  Award,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Eye, Mail, Phone, Linkedin } from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function ResumePage() {
  const sections = [
    {
      title: "Education",
      items: [
        {
          heading: "Standardize tests and advance Placements",
          subheading: "SAT | IELTS",
          points: [
            "SAT : 1550",
            "IELTS : 8",
            "AP : Microeconomics - 5",
            "AP : Calculus BC - 5",
          ],
        },
        {
          heading: "Class XII",
          subheading: "Predicted Marks",
          points: [
            "Economics",
            "Mathematics",
            "Business Studies",
            "Accountancy",
            "English",
          ],
        },
        {
          heading: "Class XI",
          subheading: "87.6%",
          points: [
            "Economics",
            "Mathematics",
            "Business Studies",
            "Accountancy",
            "English",
          ],
        },
        {
          heading: "High Schooling",
          subheading: "96.4%",
          points: ["Class X : 96.4%", "Class IX : 96.4%"],
        },
      ],
    },
    {
      title: "Academic Achievments",
      items: [
        {
          heading: "",
          subheading: "",
          points: [
            "Gold Medal, Scholar Tie, Badge and Certificate of academic excellence for 7 consecutive years | Grade 12",
            "Ishwar Chandra Memorial Award for securing the highest marks in the section | Grade 11",
            "A+ Grade at Global Economics Olympiad | Grade 11",
          ],
        },
        {
          heading: "",
          subheading: "",
          points: [
            "A+ Grade at International Finance Olympiad | Grade 11",
            "Gold Medal for ranking 2nd at school level of the International Commerce Olympiad 2025 | Grade 11",
            "Certificate of Distinction in International Chemistry Quiz | Grade 10",
            "Certificate of Merit in Teri Green Olympiad | Grade 9",
          ],
        },
      ],
    },
    {
      title: "Leadership Responsibilities and Roles",
      items: [
        {
          heading: "President of Expressions Theatre Club DPS RK Puram",
          subheading: "Grade 10-12",
          points: [
            "Organised Delhi NCR’s largest theatre festival, Theatron 2025 with a footfall of 1500+ theatre enthusiasts and 45+ schools participating in 12 different competitions",
            "Collaborated with sponsors and school partners ensuring their participation.",
            "Performed as one of the leads in front of Principal, Chairman of the DPS Society and other esteemed members twice",
            "Won various inter-school theatre competitions and selected to represent the school at New Zealand High Commission Sustainability Carnival by performing a mime promoting environmental awareness",
            "Awarded a Pin by school to honour achievements in the inter school competitions.",
            "Spearheaded the Expressions Theatre Club Inductions 2025-2026 ",
          ],
        },
        {
          heading: "Founder, SwayamSutra",
          subheading: "Grade 11-12",
          points: [
            "Organisation with dual purpose: empowering women and promoting sustainability",
            "Employed 15+ rural women seeking money to stitch cotton bags",
            "Set machinery at a workplace near their homes so that they can earn a livelihood without disturbing their household responsibilities",
            "Organised session on Financial literacy, self defence and other necessary skills to empower women ",
            "Built partnerships with Vaish World Foundation for product distribution and community outreach. ",
            "Managed operations, supervised productions and created a supportive work environment",
            "Secured recognition as Youth President, Vaish Word Foundation for outstanding community leadership",
          ],
        },
        {
          heading:
            "Core Member of Interact Club and Social Service League DPS RK Puram",
          subheading: "Grade 9-12",
          points: [
            "Set up a game stall at Youth Delhi Interact Leadership Assembly and raised Rs3000+",
            "Organised Cleanliness drive in school to prevent water stagnation",
            "Participated in the Adult Literacy Campaign and took the responsibility to teach illiterate adults",
            "Set up a game stall at our school’s annual carnival to promote our club ",
            "Spearheaded the Social Service League Inductions 2025-2026",
          ],
        },
        {
          heading: "Member of Business Studies Society DPS RK Puram",
          subheading: "Grade 11-12",
          points: [
            "Helped organise various Intra-Section Competitions",
            "Won 2nd position at Ramjas International School’s Commerce Festival under the idea pitching category",
            "Volunteered at DPSRKP’s Commerce Festival ",
          ],
        },
      ],
    },
    {
      title: "Journalism/Publication",
      items: [
        {
          heading: "Echoes of a Paper Heart",
          subheading: "Author",
          points: [
            "a published anthology of original poems capturing emotional conflicts, human connection, and the journey of personal growth. Received a preface for the same by the schools’s principal ",
          ],
        },
      ],
    },
    {
      title: "Research Paper",
      items: [
        {
          heading:
            "Consumer Perception and Buying Behaviour Regarding Eco-Friendly Product",
          subheading:
            "Journal of Business Management and Information Systems [Oct 2023- June 2024] ",
          points: [
            "Conducted empirical research on consumer attitudes and purchase intent toward eco-friendly products using surveys and statistical analysis. ",
            "Analysed how environmental awareness, product benefits, and demographic factors shape consumer behaviour.",
            "Identified barriers (price sensitivity, awareness gaps) and proposed actionable insights for marketers and policymakers.",
          ],
        },
      ],
    },
    {
      title: "Internship",
      items: [
        {
          heading: "TaxCity",
          subheading: "Sept 2024 - June 2025",
          points: [
            "Appointed Vice President Finance and Vice President Taxation to honour meticulous work ",
            "Created a tax education board game ",
            "Impacted 9,250+ students across 14 states; generated ₹5.5L+",
            "Played a vital role in the backend work which helped organisation gain national recognition—from the Honourable Minister of Education in Rajasthan",
          ],
        },
      ],
    },
    {
      title: "TIE Young Entrepreneur Challenge",
      items: [
        {
          heading: "2022",
          subheading: "",
          points: [
            "Over a period of 9 months, worked on a project called DetectoClip which was an assistive solution for the blind. It was an obstruction-detecting clip-on for the visually impaired and blind. ",
            "Created a working prototype of the same which was later tested in a School for Blind ",
            "Won 1st position in the regional round and was selected to represent the same in global finale ",
            "Won Second Runner up, Best Maker Faire Video award, Best Customer Validation Award and in the global Finale and a cash price of Rs 20,000 ",
            "Was featured in The Economic Times being congratulated for the same ",
          ],
        },
      ],
    },
    {
      title: "Workshop and Summer Programs",
      items: [
        {
          heading:
            "Summer Program in Data ScienceSelected to Participate in High School Achievers Program [June 2023]",
          subheading: "YLAC",
          points: [
            "A a competitive program focused on sensitising students to social issues, fostering diverse perspectives, and developing skills for long-lasting impact. The program provided a platform to explore leadership potential, strengthen problem-solving abilities, and cultivate a deeper sense of purpose in society.",
          ],
        },
        {
          heading: "Won 1st place in UnHackathon’23 [July 2023]",
          subheading: "Rishihood University",
          points: [
            "Awarded cash prize of ₹50,000 for developing an innovative phone screen guard designed to induce sleep after prolonged viewing, reducing screen time and alleviating anxiety.",
          ],
        },
        {
          heading: "Participated in Regional Science Exhibition [Dec 2023]",
          subheading: "",
          points: [
            ": Represented school at CBSE Regional Science Exhibition and presented a design for a environmental friendly firecracker show building which can be used to avoid pollution during Diwali Festival.",
          ],
        },
        {
          heading: "Harvard Youth Lead Change [June 2024]",
          subheading: "",
          points: [
            "Selected to participate in the Harvard Youth Lead the Change program, developing a project to combat fast fashion by repurposing excess cloth into eco-friendly cotton bags. Individually recognised with an Honourable Mention for outstanding performance, while the team received an Oral Mention for delivering the Best Presentation of the project",
          ],
        },
        {
          heading: "Ashoka Young Scholars Programme [June 2024]",
          subheading: "Economics, Policy and Society",
          points: [
            " Shortlisted for a selective summer course at Ashoka University. Participated in hands-on learning sessions led by college professors and experts, gaining practical insights into economics, policy, and societal impact. The experience strengthened analytical skills and fostered a deeper passion for the subject.",
          ],
        },
        {
          heading: "Participated in Young CEO Program at IIT Delh [Oct 2024]",
          subheading: "IIT Delhi",
          points: [
            " Learnt about leadership and entrepreneurial mindset in this week long program. Built a idea for a shark tank pitch.",
          ],
        },
        {
          heading: "Epiphany Model United Nations: [Jan 2024]",
          subheading: "",
          points: [
            "Won High Commendation Award as Hermione Granger in Harry Potter Committee, combining passion for speaking and love for harry potter",
          ],
        },
        {
          heading:
            "Summer Program in Data ScienceSelected to Participate in High School Achievers Program [June 2023]",
          subheading: "YLAC",
          points: [
            "A a competitive program focused on sensitising students to social issues, fostering diverse perspectives, and developing skills for long-lasting impact. The program provided a platform to explore leadership potential, strengthen problem-solving abilities, and cultivate a deeper sense of purpose in society.",
          ],
        },
      ],
    },
    {
      title: "Economic Pursuit",
      items: [
        {
          heading: "Online courses",
          subheading: "",
          points: [
            "Course Behavioural Finance by Duke on Coursera",
            "Course on Game Theory by Stanford on Coursera",
          ],
        },
      ],
    },
    {
      title: "Virtual Internships ",
      items: [
        {
          heading: "HSBC Global Banking & Markets Simulation",
          subheading: "Oct 2024",
          points: [
            "Completed a simulation on M&A strategy, DCM analysis, and matching financial products with client needs. ",
          ],
        },
        {
          heading: "JPMorgan Chase Investment Banking Simulation",
          subheading: "Dec 2024",
          points: [
            "Identified M&A targets, built DCF valuation models, and prepared client summaries for strategic decisions. ",
          ],
        },
        {
          heading: "KPMG U.S. Audit Simulation",
          subheading: "March 2025",
          points: [
            ": Conducted audit planning, evaluated confirmations, reviewed OTC processes, and communicated findings via a video presentation.",
          ],
        },
        {
          heading: "BCG Strategy Consulting Simulation",
          subheading: "March 2025",
          points: [
            "Advised a telco company on declining profits, conducted market research, built Excel models, and presented actionable recommendations to stakeholders.",
          ],
        },
      ],
    },
    {
      title: "Virtual Projects ",
      items: [
        {
          heading: "Analysing Macro-Environmental Factors",
          subheading: "",
          points: [
            "Conducted a comprehensive analysis of macroeconomic trends and their impact on industries and investment decisions.",
          ],
        },
        {
          heading: "Seeking Investment Alpha",
          subheading: "Dec 2024",
          points: [
            "Researched and evaluated investment opportunities to identify strategies for superior portfolio performance. ",
          ],
        },
      ],
    },
    {
      title: "Community Service",
      items: [
        {
          heading: "2023, 2025",
          subheading: "",
          points: [
            "Volunteered as a scribe to assist students with learning disorders during Central Board of Secondary Education Examinations",
          ],
        },
        {
          heading: "2024",
          subheading: "",
          points: [
            "Participated in a crowdfunding campaign to provide reusable sanitary pads for underprivileged girls and women in Haryana, raising ₹15,600",
          ],
        },
        {
          heading: "2025",
          subheading: "",
          points: [
            "As Youth President of Vaish World Foundation, inspired and mobilized peers to engage in social service initiatives.",
          ],
        },
        {
          heading: "",
          subheading: "",
          points: [
            "Donated clothes and books to underprivileged children at an orphanage.",
          ],
        },
      ],
    },
    {
      title: "Hobbies",
      items: [
        {
          heading: "",
          subheading: "",
          points: [
            "Jazz Dance",
            "Sketching",
            "Painting",
            "Badminton",
            "Writing",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <div className="container mx-auto px-8 pt-32 pb-16 md:px-16 lg:px-32">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-8">Resume</h1>

          {/* Contact Information Grid */}
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            <a
              href="tel:+919312652000"
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm">+91 9312652000</span>
            </a>

            <a
              href="mailto:omisaabansal2009@gmail.com"
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm">omisaabansal@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/omisaabansal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Resume Action Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="secondary"
              className="bg-white text-black hover:bg-white/90"
              onClick={() => window.open("/path-to-resume.pdf", "_blank")}
            >
              <Eye className="h-4 w-4 mr-2" />
              View Resume
            </Button>
            <Button
              variant="secondary"
              className="bg-purple-600 text-white hover:bg-purple-700"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/path-to-resume.pdf";
                link.download = "Omisaa_Bansal_Resume.pdf";
                link.click();
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Sections */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-purple-500 pb-2">
              {section.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-purple-400 transition-all hover:transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-purple-300 text-sm mb-4">
                    {item.subheading}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {item.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="text-gray-300 text-sm flex items-start"
                      >
                        <span className="text-purple-400 mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-400 text-purple-300 hover:bg-purple-500/20"
                    onClick={() => alert("Certificate link coming soon!")}
                  >
                    View Certificate
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
