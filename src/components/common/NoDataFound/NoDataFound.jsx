import React from 'react'
import errorImg from '../../../assets/images/warning-icon.gif'
const NoDataFound = () => {
  return (
    <div className='no-data'><img src={errorImg} />No Data Found</div>
  )
}

export default NoDataFound