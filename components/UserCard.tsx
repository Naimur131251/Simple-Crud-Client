"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { UpdateUserDialog } from "./UpdateUserDialog"

interface IUser {
  _id: string
  name: string
  email: string
}

// প্রপসের টাইপ ডিক্লেয়ার করা হলো
interface UserCardProps {
  user: IUser
}

export function UserCard({ user }: UserCardProps) {
  const { _id } = user
  const router = useRouter()

  const handleDeleteUser = async (id: string) => {
    console.log("Delete Id", _id)

    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
    const afterDelete = await res.json()

    if (afterDelete.deleteCount > 0) {
      console.log("User delete successfully")
      router.refresh()
    }
  }

  return (
    <Card className="relative mx-auto mt-5 w-full">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/users/${user._id}`}>
          <Button className="w-full cursor-pointer">View Details</Button>
        </Link>
        <UpdateUserDialog user={user} />
        <Button
          onClick={() => handleDeleteUser(_id)}
          className="cursor-pointer"
          variant="destructive"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
