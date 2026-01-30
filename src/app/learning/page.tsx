"use client";

import { useState } from "react";
import Link from "next/link";
import { Book, Code, Database, Zap, Globe, Settings, ArrowLeft } from "lucide-react";

export default function LearningPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const learningTopics = [
    {
      id: "api-integration",
      title: "API Integration",
      icon: Globe,
      description: "Learn how to integrate external APIs and handle data fetching",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      id: "database",
      title: "Database Operations",
      icon: Database,
      description: "Explore database queries, CRUD operations, and data management",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      id: "performance",
      title: "Performance Optimization",
      icon: Zap,
      description: "Optimize application performance and improve user experience",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      id: "configuration",
      title: "Configuration & Setup",
      icon: Settings,
      description: "Configure application settings and environment variables",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-3 h-full flex flex-col">
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <Book className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Self-Learning Hub
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/api/example"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              🔗 API Call
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Portfolio</span>
            </Link>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3">
        {/* Quick Examples Links */}
        <div className="grid md:grid-cols-2 gap-3 mb-3">
          <Link
            href="/ssr-example"
            className="group p-3 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 border border-green-200 dark:border-green-800 hover:border-green-400 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white group-hover:text-green-600 transition-colors">
                  Server-Side Rendering
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">/ssr-example</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Fetch data on server using Server Components
            </p>
          </Link>

          <Link
            href="/csr-example"
            className="group p-3 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-blue-200 dark:border-blue-800 hover:border-blue-400 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
                  Client-Side Rendering
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">/csr-example</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Fetch data on client using React hooks
            </p>
          </Link>
        </div>

        {/* Learning Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          {learningTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`p-3 rounded-lg bg-gradient-to-br ${topic.bgColor} dark:from-slate-800 dark:to-slate-700 border cursor-pointer transition-all ${
                  selectedTopic === topic.id
                    ? "border-indigo-500 shadow"
                    : "border-transparent"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-r ${topic.color} flex items-center justify-center mb-2`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                  {topic.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs">
                  {topic.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
          <div className="mb-3">
            <h2 className="text-base font-semibold text-gray-800 dark:text-white mb-1">
              {selectedTopic
                ? learningTopics.find((t) => t.id === selectedTopic)?.title
                : "Getting Started"}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>

          {selectedTopic ? (
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                  This section is ready for your implementation. You can:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 dark:text-gray-300 ml-2">
                  <li>Add API integration code</li>
                  <li>Implement data fetching logic</li>
                  <li>Create forms and user interactions</li>
                  <li>Add error handling and loading states</li>
                  <li>Test new features and concepts</li>
                </ul>
              </div>

              <div className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-lg border-l-2 border-indigo-500">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                  Next Steps
                </h3>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  Start by creating API routes, adding state management, or integrating external services.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                  Welcome to your self-learning space! This route is designed to help you:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 dark:text-gray-300 ml-2">
                  <li>Experiment with new technologies and APIs</li>
                  <li>Practice building features from scratch</li>
                  <li>Test different approaches and patterns</li>
                  <li>Learn by doing and iterating</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
                  <h3 className="text-xs font-semibold text-gray-800 dark:text-white mb-1">
                    Code Examples
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Add code snippets and implementations here
                  </p>
                </div>

                <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                  <Zap className="w-5 h-5 text-green-600 dark:text-green-400 mb-2" />
                  <h3 className="text-xs font-semibold text-gray-800 dark:text-white mb-1">
                    Quick Actions
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Implement quick actions and interactive elements
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

