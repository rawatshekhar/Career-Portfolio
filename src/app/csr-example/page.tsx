"use client";

import { useState, useEffect } from 'react';
import PerformanceMetrics from '@/components/PerformanceMetrics';

// Client Component - Fetches data in the browser
function ClientDataFetcher() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiTime, setApiTime] = useState<number>(0);
  const [pageLoadTime, setPageLoadTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);

  useEffect(() => {
    // Measure initial page load time (when page first loads)
    let pageLoadStartTime = 0;
    if (typeof window !== 'undefined') {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        pageLoadStartTime = navigation.fetchStart;
      }
    }

    // Fetch data when component mounts (client-side)
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Measure API call time
        const apiStartTime = performance.now();
        
        // Use relative URL for client-side fetching
        const response = await fetch('/api/example');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        const apiEndTime = performance.now();
        const apiDuration = Math.round(apiEndTime - apiStartTime);
        
        // Calculate total time: from page navigation start to data being set
        const dataSetTime = performance.now();
        const totalDuration = pageLoadStartTime > 0 
          ? Math.round(dataSetTime - pageLoadStartTime)
          : apiDuration;
        
        setData(result);
        setApiTime(apiDuration);
        setTotalTime(totalDuration);
        
        // Measure initial page load (DOM ready)
        if (typeof window !== 'undefined') {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            const domReadyTime = Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart);
            setPageLoadTime(domReadyTime);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array = run once on mount

  // Refetch function for demonstration
  const handleRefetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiStartTime = performance.now();
      const response = await fetch('/api/example');
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      const apiEndTime = performance.now();
      const apiDuration = Math.round(apiEndTime - apiStartTime);
      
      setData(result);
      setApiTime(apiDuration);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-3">
        <div className="animate-pulse space-y-3">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
          <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">⏳ Fetching...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-3">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3">
          <p className="text-red-600 dark:text-red-400 font-semibold text-xs mb-1">Error:</p>
          <p className="text-red-600 dark:text-red-400 text-xs">{error}</p>
        </div>
        <button
          onClick={handleRefetch}
          className="px-3 py-1.5 text-xs bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800 dark:text-white">
          Client-Side Fetched Data:
        </h3>
        <button
          onClick={handleRefetch}
          className="px-2 py-1 text-xs bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
        >
          🔄 Refetch
        </button>
      </div>
      <div className="flex gap-3">
        {/* JSON Data - Left Side */}
        <div className="flex-1 bg-white dark:bg-slate-800 rounded p-3 shadow">
          <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-auto max-h-[calc(100vh-250px)]">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
        
        {/* Performance Metrics - Right Side */}
        {!loading && apiTime > 0 && (
          <div className="flex-1">
            <PerformanceMetrics apiTime={apiTime} renderType="csr" pageLoadTime={pageLoadTime} totalTime={totalTime} />
          </div>
        )}
      </div>
    </div>
  );
}

// Main Page Component (Client Component)
export default function CSRExamplePage() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-4 h-full flex flex-col">
        <div className="mb-3">
          <h1 className="text-xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Client-Side Rendering (CSR)
          </h1>
          <div className="inline-flex items-center gap-2 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">
            <span className="font-medium text-blue-600 dark:text-blue-400">/csr-example</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3">
          {/* Client Component with useState/useEffect */}
          <ClientDataFetcher />

          {/* Navigation Links */}
          <div className="flex gap-2 justify-center pt-2">
            <a
              href="/ssr-example"
              target="_blank"
              className="px-3 py-1.5 text-xs bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              ← SSR Example
            </a>
            <a
              target="_blank"
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

