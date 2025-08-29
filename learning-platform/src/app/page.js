"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Code, CheckCircle, BookOpen, Zap, Target, Award } from 'lucide-react';

const JSNextJSLearningPlatform = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [codeOutput, setCodeOutput] = useState('');
  const [userCode, setUserCode] = useState('');

  const modules = [
    {
      title: "JavaScript Fundamentals",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      lessons: [
        {
          title: "Variables & Data Types",
          content: `// JavaScript Variables and Data Types
// Let's start with the building blocks!

// Variables - containers for data
let name = "John";
let age = 25;
let isStudent = true;
let hobbies = ["coding", "reading"];
let person = { name: "Alice", age: 30 };

console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Person:", person);

// Try changing the values and run again!`,
          challenge: "Create a variable for your favorite color and log it to the console."
        },
        {
          title: "Functions",
          content: `// Functions - reusable blocks of code

// Function declaration
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Arrow function (modern syntax)
const addNumbers = (a, b) => {
  return a + b;
};

// Function with default parameter
const createUser = (name, age = 18) => {
  return {
    name: name,
    age: age,
    isAdult: age >= 18
  };
};

console.log(greetUser("Developer"));
console.log("5 + 3 =", addNumbers(5, 3));
console.log(createUser("Sam", 25));
console.log(createUser("Alex")); // Uses default age`,
          challenge: "Create a function that takes a number and returns whether it's even or odd."
        },
        {
          title: "Arrays & Objects",
          content: `// Working with Arrays and Objects

// Arrays - ordered lists
let fruits = ["apple", "banana", "orange"];

// Array methods
fruits.push("grape");
fruits.unshift("mango");
let lastFruit = fruits.pop();

console.log("Fruits:", fruits);
console.log("Last fruit:", lastFruit);

// Objects - key-value pairs
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
  start: function() {
    return this.brand + " " + this.model + " is starting!";
  }
};

// Accessing object properties
console.log("Car brand:", car.brand);
console.log("Car year:", car["year"]);
console.log(car.start());

// Object destructuring (modern JS)
const { brand, model } = car;
console.log("Destructured:", brand, model);`,
          challenge: "Create an array of your favorite movies and an object representing a book."
        }
      ]
    },
    {
      title: "React Fundamentals",
      icon: <Zap className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500",
      lessons: [
        {
          title: "Components & JSX",
          content: `// React Components and JSX
// React uses components to build UIs

// Function Component
const Welcome = ({ name }) => {
  return React.createElement('h1', null, 'Hello, ' + name + '!');
};

// Component concepts
console.log("React concepts:");
console.log("✓ Components are reusable UI pieces");
console.log("✓ JSX looks like HTML but is JavaScript");
console.log("✓ Props pass data to components");
console.log("✓ Always return single parent element");

// In a real React app, you'd write:
// <Welcome name="Developer" />
// But here we'll focus on the JavaScript concepts

const userExample = {
  name: "Alice Johnson",
  age: 28,
  email: "alice@example.com"
};

console.log("User example:", userExample);`,
          challenge: "Create a user object with name, age, and email properties."
        },
        {
          title: "State Management",
          content: `// React State Concepts
// State manages changing data in components

// State example (conceptual)
let counterState = {
  count: 0,
  increment: function() {
    this.count += 1;
    console.log("Count is now:", this.count);
  },
  decrement: function() {
    this.count -= 1;
    console.log("Count is now:", this.count);
  },
  reset: function() {
    this.count = 0;
    console.log("Count reset to:", this.count);
  }
};

console.log("React State concepts:");
console.log("✓ useState hook manages component state");
console.log("✓ State updates trigger re-renders");
console.log("✓ Event handlers respond to user actions");

// Simulate state changes
counterState.increment();
counterState.increment();
counterState.decrement();
counterState.reset();`,
          challenge: "Create a state object for managing a todo list with add and remove methods."
        }
      ]
    },
    {
      title: "Next.js Essentials",
      icon: <Award className="w-6 h-6" />,
      color: "from-green-400 to-blue-500",
      lessons: [
        {
          title: "Pages & Routing",
          content: `// Next.js Pages and Routing Concepts
// Next.js uses file-based routing

console.log("Next.js File Structure:");
console.log("pages/index.js → / (home page)");
console.log("pages/about.js → /about");
console.log("pages/blog/[slug].js → /blog/any-post-name");

// Routing concepts
const routingConcepts = {
  fileBasedRouting: "File structure determines URL structure",
  dynamicRoutes: "Use [brackets] for dynamic segments",
  nestedRoutes: "Folders create nested URL paths",
  apiRoutes: "pages/api/ folder creates backend endpoints"
};

console.log("Routing concepts:", routingConcepts);

// Example route structure for a blog
const blogStructure = {
  "pages/index.js": "Home page (/)",
  "pages/about.js": "About page (/about)",
  "pages/blog/index.js": "Blog listing (/blog)",
  "pages/blog/[slug].js": "Individual posts (/blog/post-name)",
  "pages/api/posts.js": "API endpoint (/api/posts)"
};

console.log("Blog structure example:", blogStructure);`,
          challenge: "Plan the file structure for a portfolio site with projects and contact pages."
        },
        {
          title: "Data Fetching",
          content: `// Next.js Data Fetching Methods

// 1. getStaticProps - Build time data fetching
const getStaticPropsExample = {
  purpose: "Fetch data at build time",
  when: "For static content that doesn't change often",
  example: "Blog posts, product listings"
};

// 2. getServerSideProps - Request time data fetching  
const getServerSidePropsExample = {
  purpose: "Fetch data on each request",
  when: "For dynamic, user-specific data",
  example: "User dashboards, real-time data"
};

// 3. Client-side fetching - Browser data fetching
const clientSideExample = {
  purpose: "Fetch data in the browser after page load",
  when: "For interactive features, user actions",
  example: "Search results, form submissions"
};

console.log("Data fetching methods:");
console.log("Static:", getStaticPropsExample);
console.log("Server-side:", getServerSidePropsExample);
console.log("Client-side:", clientSideExample);

// Simulated API response
const mockApiData = {
  posts: [
    { id: 1, title: "Getting Started with Next.js", author: "John" },
    { id: 2, title: "Advanced React Patterns", author: "Jane" }
  ]
};

console.log("Mock API data:", mockApiData);`,
          challenge: "Explain when you would use each data fetching method."
        }
      ]
    }
  ];

  const runCode = (code) => {
    setCodeOutput('Running code...');
    try {
      // Create a function to capture console.log output
      const logs = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(' '));
      };

      // Execute the code
      eval(code);

      // Restore console.log
      console.log = originalLog;

      // Set the output
      setCodeOutput(logs.join('\n') || 'Code executed successfully!');
    } catch (error) {
      setCodeOutput(`Error: ${error.message}`);
    }
  };

  const markLessonComplete = (moduleIndex, lessonIndex) => {
    const lessonId = `${moduleIndex}-${lessonIndex}`;
    setCompletedLessons(prev => new Set([...prev, lessonId]));
  };

  const currentLessonData = modules[currentModule]?.lessons[currentLesson];
  const totalLessons = modules.reduce((total, module) => total + module.lessons.length, 0);
  const progress = (completedLessons.size / totalLessons) * 100;

  const nextLesson = () => {
    if (currentLesson < modules[currentModule].lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1);
      setCurrentLesson(0);
    }
    setUserCode('');
    setCodeOutput('');
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    } else if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
      setCurrentLesson(modules[currentModule - 1].lessons.length - 1);
    }
    setUserCode('');
    setCodeOutput('');
  };

  useEffect(() => {
    if (currentLessonData) {
      setUserCode(currentLessonData.content);
    }
  }, [currentModule, currentLesson, currentLessonData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            JavaScript & Next.js Learning Platform
          </h1>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex-1 bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-medium">{Math.round(progress)}% Complete</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Modules
              </h2>
              <div className="space-y-3">
                {modules.map((module, moduleIndex) => (
                  <div key={moduleIndex}>
                    <button
                      onClick={() => {
                        setCurrentModule(moduleIndex);
                        setCurrentLesson(0);
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        currentModule === moduleIndex
                          ? `bg-gradient-to-r ${module.color} text-white shadow-lg`
                          : 'bg-gray-800/50 hover:bg-gray-700/50'
                      }`}
                    >
                      <div className="flex items-center">
                        {module.icon}
                        <span className="ml-2 font-medium">{module.title}</span>
                      </div>
                    </button>
                    
                    {currentModule === moduleIndex && (
                      <div className="mt-2 ml-4 space-y-1">
                        {module.lessons.map((lesson, lessonIndex) => {
                          const isCompleted = completedLessons.has(`${moduleIndex}-${lessonIndex}`);
                          const isCurrent = currentLesson === lessonIndex;
                          
                          return (
                            <button
                              key={lessonIndex}
                              onClick={() => setCurrentLesson(lessonIndex)}
                              className={`w-full text-left p-2 rounded text-sm transition-all flex items-center ${
                                isCurrent
                                  ? 'bg-white/20 text-cyan-300'
                                  : isCompleted
                                  ? 'bg-green-500/20 text-green-300'
                                  : 'text-gray-300 hover:bg-white/10'
                              }`}
                            >
                              {isCompleted && <CheckCircle className="w-4 h-4 mr-2" />}
                              {lesson.title}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              {/* Lesson Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{currentLessonData?.title}</h2>
                  <p className="text-gray-300 mt-1">
                    Module {currentModule + 1}: {modules[currentModule]?.title}
                  </p>
                </div>
                <button
                  onClick={() => markLessonComplete(currentModule, currentLesson)}
                  disabled={completedLessons.has(`${currentModule}-${currentLesson}`)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    completedLessons.has(`${currentModule}-${currentLesson}`)
                      ? 'bg-green-500/20 text-green-300 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {completedLessons.has(`${currentModule}-${currentLesson}`) ? (
                    <>
                      <CheckCircle className="w-4 h-4 inline mr-2" />
                      Completed
                    </>
                  ) : (
                    'Mark Complete'
                  )}
                </button>
              </div>

              {/* Code Editor */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      Interactive Code
                    </h3>
                    <button
                      onClick={() => runCode(userCode)}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded-lg text-sm font-medium transition-colors flex items-center"
                    >
                      <Play className="w-3 h-3 mr-1" />
                      Run
                    </button>
                  </div>
                  <textarea
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    className="w-full h-64 bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border border-gray-700 focus:border-cyan-400 focus:outline-none resize-none"
                    placeholder="Write your JavaScript code here..."
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Output</h3>
                  <div className="bg-gray-900 p-4 rounded-lg h-64 overflow-y-auto">
                    <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                      {codeOutput || 'Click "Run" to see the output...'}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Challenge Section */}
              {currentLessonData?.challenge && (
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold text-purple-300 mb-2">💡 Practice Challenge</h4>
                  <p className="text-gray-300">{currentLessonData.challenge}</p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevLesson}
                  disabled={currentModule === 0 && currentLesson === 0}
                  className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>

                <span className="text-gray-400">
                  Lesson {currentLesson + 1} of {modules[currentModule]?.lessons.length}
                </span>

                <button
                  onClick={nextLesson}
                  disabled={currentModule === modules.length - 1 && currentLesson === modules[currentModule].lessons.length - 1}
                  className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-800 disabled:text-gray-500 rounded-lg transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSNextJSLearningPlatform;