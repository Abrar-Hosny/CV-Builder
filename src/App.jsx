import React from 'react'
import Paper from './components/Paper'
import Navbar from './components/Navbar'
import Content from './components/Content'

export default function App() {
  return (
    <>
      <div className="flex bg-gray-100 dark:bg-gray-800 min-h-screen p-3">
        {/* Left Section - Navbar and Content */}
        <div className="w-1/4 pr-3 bg-gray-500">
          <Navbar />
          <Content />
        </div>

        {/* Right Section - Paper */}
        <div >
          <Paper />
        </div>
      </div>
    </>
  );
}
