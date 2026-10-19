import { UserCard } from "@/components/UserCard"

interface IUser {
  _id: string
  name: string
  email: string
}

const UsersPage = async () => {
  const res = await fetch(`http://localhost:5000/users`)
  const users: IUser[] = await res.json()

  return (
    <div>
      <h2>Users: {users.length}</h2>
      <div>
        {users.map((user: IUser) => (
          <UserCard key={user._id} user={user}></UserCard>
        ))}
      </div>
    </div>
  )
}

export default UsersPage