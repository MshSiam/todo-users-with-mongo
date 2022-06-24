import React from "react"
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="users">User</Link>
        <Link to="users/addUser">Add User</Link>
      </nav>
    </div>
  )
}

export default Header
