import React from 'react'
import loaderImg from '../../../assets/images/loading-img.gif'
const Loader = () => {
  return (
    <div className="loading-screen">
    <div>
      <img src={loaderImg} />
    </div>
  </div>
  )
}

export default Loader