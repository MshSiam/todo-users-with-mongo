import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Users = () => {
  const [users, setUsers] = useState("")

  // load data from database
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  // delete an user //
  const handleDeleteUser = (id) => {
    const procced = window.confirm("Are you sure? This action can't be undone.")
    if (procced) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully")
            const remainingUsers = users.filter((user) => user._id !== id)
            setUsers(remainingUsers)
          }
        })
    }
  }

  return (
    <div>
      <h1>This is Users</h1>
      <h3>We have {users.length} users</h3>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user._id}>
              {" "}
              {user.name}{" "}
              <button onClick={() => handleDeleteUser(user._id)}>X</button>{" "}
              <Link to={`/users/update/${user._id}`}>
                <button>Update</button>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Users
