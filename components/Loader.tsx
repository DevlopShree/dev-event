import React from 'react'

const Loader = () => {
   return (
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-2 animate-pulse">
         {/* Header Skeleton */}
         <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            <div className="flex-1 space-y-2">
               <div className="h-4 bg-gray-700 rounded w-3/4"></div>
               <div className="h-3 bg-gray-700 rounded w-1/2"></div>
            </div>
         </div>

         {/* Content Skeleton */}
         <div className="space-y-4">
            <div className="h-5 bg-gray-700 rounded w-full"></div>
            <div className="h-5 bg-gray-700 rounded w-5/6"></div>
            <div className="h-5 bg-gray-700 rounded w-full"></div>
            <div className="h-5 bg-gray-700 rounded w-2/3"></div>
            <div className="h-5 bg-gray-700 rounded w-full"></div>
         </div>

         {/* Footer Skeleton */}
         <div className="mt-8 flex justify-between items-center">
            <div className="h-8 w-24 bg-gray-700 rounded-md"></div>
            <div className="h-8 w-24 bg-gray-700 rounded-md"></div>
         </div>
      </div>
   )
}

export default Loader