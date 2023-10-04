import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div><Outlet/></div>
  )
}

export default PublicLayout