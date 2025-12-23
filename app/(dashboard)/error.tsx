'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-gray-900 to-black p-6">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 text-center text-white">
        
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 text-red-400 text-3xl">
          ⚠️
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-3">
          Oops! Something went wrong
        </h1>

        {/* Message */}
        <p className="text-gray-300 mb-6">
          {process.env.NODE_ENV === 'development'
            ? error.message
            : 'An unexpected error occurred. Please try again.'}
        </p>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow-lg"
          >
            🔄 Try Again
          </button>

          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition font-semibold"
          >
            🏠 Go Home
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-400">
          If the problem persists, contact support.
        </p>
      </div>
    </div>
  )
}
