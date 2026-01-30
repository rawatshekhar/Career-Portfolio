// This is a SERVER COMPONENT (no "use client")
// It runs on the server and can fetch data directly
import { Suspense } from 'react';
import PerformanceMetrics from '@/components/PerformanceMetrics';

// Server Component - Fetches data on the server
async function ServerDataFetcher() {
  // Fetch data directly in Server Component
  // This runs ONLY on the server, never in the browser
  
  // Measure API call time
  const apiStartTime = Date.now();
  
  // For internal API routes during SSR, use absolute URL
  // In production, you'd use: process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
    (process.env.NODE_ENV === 'production' ? 'https://yourdomain.com' : 'http://localhost:3000');
  
  // Note: Server-side fetch to localhost includes HTTP/TCP overhead
  // This is why it's slower than client-side fetch which uses optimized browser APIs
  const response = await fetch(`${baseUrl}/api/example`, {
    // Important: Use absolute URL for internal API calls during SSR
    // cache: 'no-store' for dynamic data, 'force-cache' for static
    cache: 'no-store', // This makes it fetch fresh data on each request
    // In production, you could optimize by calling the handler directly instead of HTTP
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  const apiEndTime = Date.now();
  const apiTime = apiEndTime - apiStartTime;

  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-gray-800 dark:text-white">
        Server-Side Fetched Data:
      </h3>
      <div className="flex gap-3">
        {/* JSON Data - Left Side */}
        <div className="flex-1 bg-white dark:bg-slate-800 rounded p-3 shadow">
          <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-auto max-h-[calc(100vh-250px)]">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
        
        {/* Performance Metrics - Right Side */}
        <div className="flex-1">
          <PerformanceMetrics apiTime={apiTime} renderType="ssr" />
        </div>
      </div>
    </div>
  );
}

// Loading component for Suspense
function Loading() {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
      <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  );
}

// Main Page Component (Server Component)
export default async function SSRExamplePage() {
  // You can fetch multiple data sources here
  // All of this runs on the server
  
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-4 h-full flex flex-col">
        <div className="mb-3">
          <h1 className="text-xl font-bold mb-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Server-Side Rendering (SSR)
          </h1>
          <div className="inline-flex items-center gap-2 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded text-xs">
            <span className="font-medium text-green-600 dark:text-green-400">/ssr-example</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3">
          {/* Server Component with Suspense */}
          <Suspense fallback={<Loading />}>
            <ServerDataFetcher />
          </Suspense>

          {/* Navigation Links */}
          <div className="flex gap-2 justify-center pt-2">
            <a
              href="/csr-example"
              className="px-3 py-1.5 text-xs bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded hover:from-blue-700 hover:to-cyan-700 transition-all"
            >
              CSR Example →
            </a>
            <a
              href="/learning"
              className="px-3 py-1.5 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            >
              Learning Hub
            </a>
            <a
              href="/api/example"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              🔗 API Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

