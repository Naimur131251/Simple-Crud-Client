import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

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
  return (
    <Card className="relative mx-auto mt-5 w-full p-5">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/users/${user._id}`}>
          <Button className="w-full cursor-pointer">View Event</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
