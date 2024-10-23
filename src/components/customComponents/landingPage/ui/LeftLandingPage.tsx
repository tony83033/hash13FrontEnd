"use state"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// JSON data
const jsonData = {
  headings: {
    main: "Master tomorrow's skills today.",
    sub: "Excel with India's top upskilling platform."
  },
  search: {
    placeholder: "Tell us what you're looking to learn"
  },
  goals: [
    "Get a promotion",
    "Ace interview skills",
    "Move to a new career path",
    "Study Abroad",
    "Study for Industry Certification",
    "Prepare for your first job",
    "Get an international degree"
  ],
  community: {
    text: "Join the community of",
    learnersCount: "10,800,359"
  },
  interests: [
    { icon: "🎓", label: "MBA" },
    { icon: "📢", label: "Marketing" },
    { icon: "⚖️", label: "Law" },
    { icon: "🎓", label: "Doctorate" },
    { icon: "🤖", label: "AI & ML" },
    { icon: "📊", label: "Management" },
    { icon: "📈", label: "Data Science" },
    { icon: "💻", label: "Software & Tech" }
  ]
};

const InterestDialog = ({ isOpen, onClose }:any) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select your area of interest</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {jsonData.interests.map((interest, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-24 flex flex-col items-center justify-center text-center"
              onClick={() => {
                console.log(`Selected: ${interest.label}`);
                onClose();
              }}
            >
              <span className="text-2xl mb-2">{interest.icon}</span>
              <span>{interest.label}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const LeftHero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 pt-16 pb-8">
      {/* Main heading */}
      <h1 className="text-4xl font-bold mb-2">
        <span className="text-[#ff0000]">{jsonData.headings.main}</span>
      </h1>
      
      {/* Subheading */}
      <h2 className="text-3xl font-bold mb-8">{jsonData.headings.sub}</h2>

      {/* Search section */}
      <div className="relative mb-8 w-11/12">
        <Input 
          placeholder={jsonData.search.placeholder}
          className="w-full py-6 bg-white px-4 text-lg text-gray-600 rounded-xl shadow-sm"
        />
        <Button 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 rounded-lg p-2"
        >
          <Search className="h-6 w-6" />
        </Button>
      </div>

      {/* Goals section */}
      <div className="mb-8">
        <p className="text-sm font-bold mb-4 flex items-center gap-2">
          Or select your goal <span className="cursor-pointer">🎯</span>
        </p>
        
        {/* Rendering buttons dynamically */}
        <div className="flex flex-wrap gap-1">
          {jsonData.goals.map((goal, index) => (
            <Button
              key={index}
              variant="outline"
              className="rounded-xl shadow-sm border-2 hover:bg-gray-50"
              onClick={() => setIsDialogOpen(true)}
            >
              {goal}
            </Button>
          ))}
        </div>
      </div>

      {/* Community section */}
      <div className="text-lg">
        {jsonData.community.text}{" "}
        <span className="text-red-500 font-medium">{jsonData.community.learnersCount}</span> learners.
      </div>

      {/* Interest Dialog */}
      <InterestDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  );
};

export default LeftHero;