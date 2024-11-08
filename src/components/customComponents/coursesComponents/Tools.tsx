import React from 'react';
import { TrendingUp, BarChart, Cpu } from 'lucide-react'; // import the specific icons you need

// Section Component
interface SectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      {/* Icon with red background */}
      <div className="bg-red-500 rounded-full p-2 flex items-center justify-center">
        {icon}
      </div>
      {/* Text Content */}
      <div>
        <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Main DataScienceTools Component
const Tools: React.FC = () => {
  return (
    <div className="flex flex-col mt-4 lg:flex-row items-center justify-between bg-white p-8 lg:p-16">
      {/* Left Text Content */}
      <div className="lg:w-1/2 space-y-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Most Hands-On Data Program
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Master 15+ Cutting-Edge <span className="text-red-600">Data Science Tools</span>
        </h1>
        
        {/* Tool Sections */}
        <Section 
          icon={<TrendingUp size={24} color="white" />} 
          title="Data Management and Development Tools" 
          description="Tools: Python, SQL" 
        />
        <Section 
          icon={<BarChart size={24} color="white" />} 
          title="Data Analysis and Visualization" 
          description="Tools: Excel, Power BI, Tableau, Matplotlib, Seaborn, NumPy, Pandas" 
        />
        <Section 
          icon={<Cpu size={24} color="white" />} 
          title="Machine Learning and AI Frameworks" 
          description="Tools: Statsmodels, Sklearn, TensorFlow, Keras, NLTK, OpenAI, MLflow" 
        />
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
        <div className="relative bg-gray-100 p-8 rounded-lg shadow-lg">
          {/* Replace this image tag with your actual image */}
          <img src="/assets/cources/tools.webp" alt="Data Science Tools" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Tools;