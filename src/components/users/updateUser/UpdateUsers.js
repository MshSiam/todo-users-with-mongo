import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const UpdateUsers = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [])

  const handleNameChange = (e) => {
    const updatedName = e.target.value
    const updateUser = { name: updatedName, email: user.email }
    setUser(updateUser)
  }
  const handleEmailChange = (e) => {
    const updatedEmail = e.target.value
    const updateUser = { name: user.name, email: updatedEmail }
    setUser(updateUser)
  }

  const hanleUpdateUser = (e) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated Successfully")
          setUser({})
        }
        console.log(data)
      })

    e.preventDefault()
  }

  return (
    <div>
      <h1> Update {user.name}</h1>
      <form onSubmit={hanleUpdateUser}>
        <input
          type="text"
          onChange={handleNameChange}
          defaultValue={user.name || ""}
        />
        <br />
        <input
          type="email"
          onChange={handleEmailChange}
          defaultValue={user.email || ""}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  )
}

export default UpdateUsers
