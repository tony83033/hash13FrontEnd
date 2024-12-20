import React from 'react';
import { Card, CardContent ,CardFooter} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, Clock, Users } from "lucide-react";
import { Star } from "lucide-react"

const CoursePage = () => {
  const categories = [
    { name: "Popular Programs", count: 13, highlight: true },
    { name: "ChatGPT & AI", count: 7 },
    { name: "Data Science", count: 18 },
    { name: "Technology", count: 16 },
    { name: "Management", count: 31 },
    { name: "Marketing", count: 15 },
    { name: "Career Planning", count: 8 },
    { name: "Soft Skills", count: 6 },
    { name: "Law", count: 5 },
  ];

  const courseInfo = [
    {
      title: "AWS-Certified-Solutions-Architect-(CSA)-Training",
      rating: 4.8,
      totalRatings: 2103,
      duration: "3 Months",
     
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      hours: "30+",
      backgroundImage: "/assets/cources/awsCourse.jpg"
    },
    {
      title: "Complete-Linux-v9-Training",
      rating: 4.7,
      totalRatings: 1856,
      duration: "2 Months",
      hours: "20+",
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      backgroundImage: "/assets/cources/Complete-Linux-v9-Training-by-Mr.jpg"
    },
    {
      title: "Data-Structure-&-Algorithms-(DSA)",
      rating: 4.9,
      totalRatings: 3201,
      duration: "4 Months",
      hours: "15+",
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      backgroundImage: "/assets/cources/Data-Structure-&-Algorithms-(DSA)-for-FAANG.jpg"
    },
    {
      title: "Complete-NLP-Training-Basic-to-Advance-level",
      rating: 4.6,
      totalRatings: 1502,
      duration: "6 Weeks",
      hours: "50+",
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      backgroundImage: "/assets/cources/Complete-NLP-Training-Basic-to-Advance-level.jpg"
    },
    {
      title: "Complete-System-Design-Training",
      rating: 4.8,
      totalRatings: 2405,
      duration: "3 Months",
      hours: "60+",
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      backgroundImage: "/assets/cources/Complete-System-Design-Training-by-Mr.jpg"
    },
    {
      title: "Specialization in devops",
      rating: 4.7,
      totalRatings: 1987,
      duration: "10 Weeks",
      hours: "298",
      module:"155",
      skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
      backgroundImage: "/assets/cources/course1.jpg"
    }
  ]
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Discover Our <span className="text-red-500">Free Courses</span>
      </h1>
      
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`
                    flex items-center justify-between w-full p-4 
                    rounded-xl border border-gray-200
                    shadow-sm hover:shadow-md transition-all
                    ${category.highlight ? 'bg-pink-50' : 'bg-white'}
                  `}
                >
                  <span className="text-sm font-medium">{category.name}</span>
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-sm">({category.count})</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 p-2 max-w-6xl mx-auto">
      {courseInfo.map((course, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden w-full cursor-pointer transition-transform hover:scale-105 flex flex-col"
        >
          {/* Image Container */}
          <div className="h-56 sm:h-56 overflow-hidden">
            <img
              src={course.backgroundImage}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card Footer */}
          <CardFooter className="p-4 flex flex-col items-start bg-white">
            <h3 className="text-base sm:text-sm font-bold mb-2 text-gray-800">{course.title}</h3>

            <div className="flex items-center gap-4 mb-4 text-sm sm:text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
                <span className="text-sm sm:text-xs text-gray-600">{course.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="mr-2 sm:mr-1">{course.hours} hours</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
      </div>
    </div>
  );
};

export default CoursePage;