import { Star } from "lucide-react"
import { Card, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
// Course data array
const courseInfo = [
  {
    title: "Spallation in DevOps",
    rating: 4.8,
    totalRatings: 2103,
    duration: "3 Months",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    hours: "30+",
    backgroundImage: "/assets/cources/course1.jpg"
  },
  {
    title: "React Fundamentals",
    rating: 4.7,
    totalRatings: 1856,
    duration: "2 Months",
    hours: "20+",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/course1.jpg"
  },
  {
    title: "Python for Data Science",
    rating: 4.9,
    totalRatings: 3201,
    duration: "4 Months",
    hours: "15+",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/course1.jpg"
  },
  {
    title: "Web Design Basics",
    rating: 4.6,
    totalRatings: 1502,
    duration: "6 Weeks",
    hours: "50+",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/course1.jpg"
  },
  {
    title: "Machine Learning",
    rating: 4.8,
    totalRatings: 2405,
    duration: "3 Months",
    hours: "60+",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/course1.jpg"
  },
  {
    title: "Mobile App Development",
    rating: 4.7,
    totalRatings: 1987,
    duration: "10 Weeks",
    hours: "50+",
    skills: ["Excel", "MySQL", "Data Visualization", "Data Reporting"],
    backgroundImage: "/assets/cources/course1.jpg"
  }
]

export default function ExampleCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4 p-2">
      {courseInfo.map((course, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden w-full cursor-pointer transition-transform hover:scale-105 flex flex-col"
        >
          {/* Image Container */}
          <div className="h-56 overflow-hidden">
            <img
              src={course.backgroundImage}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card Footer */}
          <CardFooter className="p-4 flex flex-col items-start bg-white">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{course.title}</h3>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    {/* <Users className="h-4 w-4" /> */}
                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
              <span className="text-sm text-gray-600">{course.rating.toFixed(1)}</span>
              {/* <span className="text-xs ml-1 text-gray-500">({course.totalRatings.toLocaleString()})</span> */}
                  </div>
                  <div className="flex items-center gap-1">
                    {/* <Clock className="h-4 w-4" /> */}
                    <span className="mr-2">{course.hours} hours</span>
                  </div>
                </div>

              

         

            
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}