"use client";

import { useEffect, useState } from 'react';
import { Clock, Zap, Layers } from 'lucide-react';

interface PerformanceMetricsProps {
  apiTime?: number;
  renderType: 'ssr' | 'csr';
  pageLoadTime?: number;
  totalTime?: number;
}

export default function PerformanceMetrics({ apiTime, renderType, pageLoadTime, totalTime }: PerformanceMetricsProps) {
  const [metrics, setMetrics] = useState<{
    apiTime: number;
    domTime: number;
    totalTime: number;
  } | null>(null);

  useEffect(() => {
    if (renderType === 'csr' && (!apiTime || !totalTime)) {
      // For CSR, wait for API time and total time to be available
      return;
    }

    // Measure DOM rendering time
    const measureDOMTime = () => {
      if (typeof window === 'undefined') return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');

      if (navigation && paint.length > 0) {
        // First Contentful Paint (FCP) - when first content appears
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        
        if (renderType === 'ssr') {
          // For SSR: API happens on server BEFORE HTML is sent
          // API time and HTML generation happen in parallel/overlapped on server
          // Client receives HTML with data already included, then DOM renders
          const domTime = fcp ? Math.round(fcp.startTime) : Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
          // For SSR: Total = API + DOM (sum of both)
          const totalTime = (apiTime || 0) + domTime;

          setMetrics({
            apiTime: apiTime || 0,
            domTime: domTime,
            totalTime: totalTime,
          });
        } else {
          // For CSR: Page loads first, then API call happens, then DOM updates
          // pageLoadTime = initial HTML load
          // apiTime = API call duration
          // totalTime = from navigation start to data displayed
          const domTime = pageLoadTime || (fcp ? Math.round(fcp.startTime) : Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart));

          setMetrics({
            apiTime: apiTime || 0,
            domTime: domTime,
            totalTime: totalTime || ((apiTime || 0) + domTime),
          });
        }
      }
    };

    // Wait for performance metrics to be available
    if (document.readyState === 'complete') {
      // Small delay to ensure paint metrics are available
      setTimeout(measureDOMTime, 100);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measureDOMTime, 100);
      });
      return () => window.removeEventListener('load', measureDOMTime);
    }
  }, [apiTime, renderType, pageLoadTime, totalTime]);

  if (!metrics) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">Measuring performance...</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded p-3 border border-indigo-200 dark:border-indigo-800">
      <h3 className="text-sm font-semibold mb-2 text-gray-800 dark:text-white flex items-center gap-1.5">
        <Zap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
        Performance Metrics
      </h3>
      
      <div className="grid grid-cols-3 gap-2 mb-2">
        {/* API Time */}
        <div className="bg-white dark:bg-slate-800 rounded p-2 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-1 mb-1">
            <Clock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">API</span>
          </div>
          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
            {metrics.apiTime > 0 ? `${metrics.apiTime}ms` : 'N/A'}
          </div>
        </div>

        {/* DOM Time */}
        <div className="bg-white dark:bg-slate-800 rounded p-2 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-1 mb-1">
            <Layers className="w-3 h-3 text-green-600 dark:text-green-400" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">DOM</span>
          </div>
          <div className="text-lg font-bold text-green-600 dark:text-green-400">
            {metrics.domTime}ms
          </div>
        </div>

        {/* Total Time */}
        <div className="bg-white dark:bg-slate-800 rounded p-2 border-2 border-indigo-300 dark:border-indigo-700">
          <div className="flex items-center gap-1 mb-1">
            <Zap className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Total</span>
          </div>
          <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            {metrics.totalTime}ms
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-indigo-200 dark:border-indigo-800">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          <strong>Breakdown:</strong> {renderType === 'ssr' ? (
            <>
              API: {metrics.apiTime > 0 ? `${metrics.apiTime}ms` : 'N/A'} (server), 
              DOM: {metrics.domTime}ms, 
              Total: <strong className="text-indigo-600 dark:text-indigo-400">{metrics.totalTime}ms</strong>
            </>
          ) : (
            <>
              Page: {metrics.domTime}ms, 
              API: {metrics.apiTime > 0 ? `${metrics.apiTime}ms` : 'N/A'}, 
              Total: <strong className="text-indigo-600 dark:text-indigo-400">{metrics.totalTime}ms</strong>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

