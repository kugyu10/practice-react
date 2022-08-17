import React from "react"
import { useContext } from "react"

type User = {
  id: number
  name: string
}

const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
  const user = useContext(UserContext)

  return (user !== null) ? <p>Hello, {user.name}</p> : null
}

const Child = () => {
  const now = new Date()

  return (
    <div>
      <p>Current: {now.toLocaleDateString()}</p>
      <GrandChild />
    </div>
  )
}

export const Parent3 = () => {
  const user: User = { id: 1, name: 'kugyu10',}
  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}