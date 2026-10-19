"use client"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NewUserAddPage() {
  const router = useRouter()

  const handleAddNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // FormData ক্লাসের বানান ঠিক করা হলো এবং ইভেন্টের টাইপ দেওয়া হলো
    const formData = new FormData(e.currentTarget)

    // অবজেক্টের জন্য একটি জেনারেল টাইপ (Record) দেওয়া হলো
    const newUser = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >

    console.log(newUser) // এখানে আপনার name এবং email অবজেক্ট আকারে চলে আসবে

    const res = await fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    const data = await res.json()
    console.log(data)

    if (data.insertedId) {
      router.push("/users")
    }
  }

  return (
    <form
      className="container mx-auto mt-20 max-w-xl"
      onSubmit={handleAddNewUser}
    >
      <FieldGroup>
        <Link href='/users' className="hover:border-b hover:border-amber-300 max-w-15">⬅ Back</Link>
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
          <Input id="fieldgroup-name" name="name" placeholder="Jordan Lee" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            name="email"
            placeholder="name@example.com"
          />
          <FieldDescription>
            We&apos;ll send updates to this address.
          </FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Button type="reset" variant="outline">
            Reset
          </Button>
          <Button type="submit" className='cursor-pointer'>Add User</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
