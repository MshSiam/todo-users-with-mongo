import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import AddUser from "./components/addUser/AddUser"
import UpdateUsers from "./components/users/updateUser/UpdateUsers"
import Users from "./components/users/Users"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
          <Route path="/users/adduser" element={<AddUser></AddUser>}></Route>
          <Route
            path="/users/update/:id"
            element={<UpdateUsers></UpdateUsers>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
