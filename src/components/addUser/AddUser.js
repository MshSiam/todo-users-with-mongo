import React, { useRef } from "react"

const AddUser = () => {
  const nameRef = useRef()
  const emailRef = useRef()

  const handleOnSubmit = (e) => {
    const name = nameRef.current.value
    const email = emailRef.current.value
    const newUser = { name, email }

    //-------- post to database ...//

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          alert("User Added Successfully.")
          e.target.reset()
        }
      })

    console.log(newUser)
    e.preventDefault()
  }

  return (
    <div>
      <h1>This is add User.</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" ref={nameRef} placeholder="name" />
        <br />
        <input type="email" ref={emailRef} placeholder="email" />
        <br />
        <input type="submit" value="Submit" required />
      </form>
    </div>
  )
}

export default AddUser
