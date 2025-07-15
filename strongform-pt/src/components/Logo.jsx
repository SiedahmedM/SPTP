import React from 'react'

function Logo({ className = '', width = 180, height = 'auto', includeText = false }) {
  if (includeText) {
    return (
      <div className={`logo-container ${className}`}>
        <img 
          src="/images/sptp-logo.jpg" 
          alt="Strongform Physical Therapy & Performance Logo"
          width={width}
          height={height}
          className="logo-image"
        />
      </div>
    )
  }
  
  return (
    <img 
      src="/images/sptp-logo.jpg" 
      alt="Strongform PT Logo"
      width={width}
      height={height}
      className={`logo-image ${className}`}
    />
  )
}

export default Logo