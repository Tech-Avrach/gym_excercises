import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function AnimCursor() {
  return (
    <AnimatedCursor
    innerSize={20}
    outerSize={60}
    innerScale={1}
    outerScale={1}
    outerAlpha={0}
    hasBlendMode={true}
    innerStyle={{
      backgroundColor: '#ff2625'
    }}
    outerStyle={{
      border: '3px solid #ff2625'
    }}
    />
  )
}

export default AnimCursor