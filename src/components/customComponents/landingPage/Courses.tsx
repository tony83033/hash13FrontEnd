"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader,CardFooter  } from "@/components/ui/card"
import { Clock, Star, BookOpen } from "lucide-react"

interface Course {
  category: string
  learners: string
  title: string
  lessons: number
  duration: string
  rating: number
  imageUrl: string
}

interface CardPosition {
  isRightmost: boolean
}

const courses = [
  {
    category: "Art & Design",
    learners:"9K",
    title: "Basic Fundamentals of Interior & Graphics Design",
    lessons: 2,
    duration: "4h",
    rating: 4.8,
    imageUrl: "/assets/landingPageBlog.jpg",
  },
  {
    category: "Development",
    learners:"9K",
    title: "Increasing Engagement with Instagram & Facebook",
    lessons: 2,
    duration: "4h",
    rating: 4.8,
    imageUrl: "/assets/landingPageBlog2.jpg",
  },
  {
    category: "Drawing",
    learners:"9K",
    title: "Introduction to Color Theory & Basic UI/UX",
    lessons: 2,
    duration: "4h",
    rating: 4.8,
    imageUrl: "/assets/landingPageBlog.jpg",
  },
  {
    category: "Technology",
    learners:"9K",
    title: "Financial Security Thinking and Principles Theory",
    lessons: 2,
    duration: "4h",
    rating: 4.8,
    imageUrl: "/assets/landingPageBlog3.jpg",
  },
  {
    category: "Data Science",
    learners:"9K",
    title: "Logo Design: From Concept to Presentation",
    lessons: 2,
    duration: "4h",
    rating: 4.8,
    imageUrl: "/assets/landingPageBlog.jpg",
  },
  {
    category: "Development",
    learners:"9K",
    title: "Professional Ceramic Moulding for Beginners",
    lessons: 2,
    duration: "4h",
    rating: 4.8,
    imageUrl: "/assets/landingPageBlog2.jpg",
  },
]


function CardComponent({ 
  course, 
  index, 
  isHovered, 
  onHover, 
  position 
}: { 
  course: Course
  index: number
  isHovered: boolean
  onHover: (index: number | null) => void
  position: CardPosition
}) {
  return (
    <div 
      className="relative"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <Card className={`max-w-sm overflow-hidden transition-all duration-300 ease-in-out ${isHovered ? 'z-20' : 'z-10'}`}>
        <CardHeader className="p-0 relative">
          <img className="w-full h-48 object-cover" src={course.imageUrl} alt={course.title} />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Button variant="secondary">View Course</Button>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-sm text-muted-foreground mb-2">{course.category}</div>
          <h2 className="font-bold text-xl mb-2 line-clamp-2">{course.title}</h2>
          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex items-center text-muted-foreground">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{course.lessons} Lessons</span>
            </div>

            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.duration}+ hrs of learning</span>
            </div>

          </div>
         
          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.learners} learners</span>
            </div>

            <div className="flex items-center text-muted-foreground">
            <Star className="h-4 w-4 mr-1 text-yellow-400" />
            <span>{course.rating}</span>
            </div>
          </div>
          
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button className="w-full bg-red-500 font-bold text-1xl" variant="default">
          Invest
          </Button>
        </CardFooter>
      </Card>

      {isHovered && (
        <HoverCard course={course} position={position} />
      )}
    </div>
  )
}

function HoverCard({ course, position }: { course: Course, position: CardPosition }) {
  return (
    <div 
      className={`
        absolute top-0 w-64 bg-white shadow-lg p-4 rounded-lg z-30
        transition-all duration-300 ease-in-out
        ${position.isRightmost ? 'right-full mr-4' : 'left-full ml-4'}
      `}
    >
      <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{course.category}</p>
      <div className="space-y-2">
        <p className="flex items-center text-sm">
          <BookOpen className="h-4 w-4 mr-2" />
          {course.lessons} Lessons
        </p>
        <p className="flex items-center text-sm">
          <Clock className="h-4 w-4 mr-2" />
          {course.duration}
        </p>
        <p className="flex items-center text-sm">
          <Clock className="h-4 w-4 mr-2" />
          {course.learners} learners
        </p>
        <div className="flex items-center text-yellow-400">
          <Star className="h-4 w-4 mr-2" />
          <span>{course.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default function CoursesComponent() {
  const [hoveredCourseIndex, setHoveredCourseIndex] = useState<number | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const getCardPosition = (index: number): CardPosition => {
    if (!gridRef.current) return { isRightmost: false }
    
    const gridColumns = window.getComputedStyle(gridRef.current)
      .gridTemplateColumns.split(' ').length
    
    // Check if card is in the last column
    const isRightmost = (index + 1) % gridColumns === 0
    
    return { isRightmost }
  }

  return (
    <div className="container max-w-7xl mx-auto px-6 lg:px-14 py-8">
      <div className="text-center mb-10">
        <h2 className="text-sm text-muted-foreground mb-2 text-teal-500">Popular Courses</h2>
        <h1 className="text-3xl font-bold">
          Choose Our Top <span className="text-red-500 relative">
            Courses
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></span>
          </span>
        </h1>
      </div>

      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
      >
        {courses.map((course, index) => (
          <div 
            key={index} 
            className="relative" 
            style={{ zIndex: hoveredCourseIndex === index ? 20 : 10 }}
          >
            <CardComponent
              course={course}
              index={index}
              isHovered={hoveredCourseIndex === index}
              onHover={setHoveredCourseIndex}
              position={getCardPosition(index)}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="destructive" size="lg">
          View All Courses
        </Button>
      </div>
    </div>
  )
}