import { UserCard } from "@/components/UserCard"
import { Button } from "@base-ui/react"
import Link from "next/link"

interface IUser {
  _id: string
  name: string
  email: string
}

const UsersPage = async () => {
  const res = await fetch(`http://localhost:5000/users`)
  const users: IUser[] = await res.json()

  return (
    <div className="container mx-auto mt-5">
      <h2>
        <Link href="/" className="mr-5 hover:border-b hover:border-amber-300">
          Home 🏠
        </Link>
        Users: {users.length}
      </h2>
      <div>
        <Link href="/new">
          <Button className="my-5 cursor-pointer rounded-lg bg-[#aaa] px-4 py-1 text-black">
            Add New User
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-7">
        {users.map((user: IUser) => (
          <UserCard key={user._id} user={user}></UserCard>
        ))}
      </div>
    </div>
  )
}

export default UsersPage
