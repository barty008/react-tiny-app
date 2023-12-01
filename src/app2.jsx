import { useState } from "react"
function FormApp() {
  // is get the user input > target event value
  const [name, setName] = useState("")
  const [greeting, setGreeting] = useState("")
  const UpdateGreeting = (event) => {
    setName(event.target.value)
  }
  const HandleSubmit = (event) => {
    event.preventDefault()
    setGreeting(name)
  }
  return (
    <div>
      <h1>Day 2 app 2</h1>
      <div className="container">
        <form>
          <label htmlFor="name">
            {" "}
            Input your name here:
            <input
              id="name"
              type="text"
              placeholder="name..."
              onChange={UpdateGreeting}
            />
          </label>
          <button onClick={HandleSubmit}>Submit</button>
          <h2>Hello {greeting}</h2>
        </form>
      </div>
    </div>
  )
}
export default FormApp
