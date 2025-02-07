import { GridContainer } from '@/components/ui/grid-container';
import { FaLinkedin } from "react-icons/fa";
export const AboutMe = () => {
  return (
    <GridContainer className="py-12 px-4 md:px-8 lg:px-16">
      <div className="space-y-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Passionate computer engineering student with experience in Python, AI, React.js, Next.js and Javascript. Currently working on pivoting into Computer Vision using libraries 
          such as OpenCV and YOLO whilst working with electronics.
        </p>

        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-200">
            🚀 Built AI projects to support image classification
            <br />
            📈 Multiple internships involving Front-End Web Development and RTL Design 
            <br />
            🎨 Web development enthusiast focused on interactive experiences
          </p>
        </div>

        <button className="bg-violet-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105" >
          <a href="#contact" className="_blank"> Let's connect! </a>
        </button>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow w-3/4 max-w-md">
          <img 
            src="/profile.png" 
            alt="Profile"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </GridContainer>
  );
};
