import React from 'react'

export const Expensive = () => {
    console.log('espensive!');
  return (
    <div>Expensive</div>
  )
}

export default React.memo(Expensive);