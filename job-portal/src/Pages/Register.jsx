import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import RadioBtn from "./RadioBtn"
import { Navigate, useNavigate } from "react-router-dom"

export default function Register() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username</Label>
              <Input id="name" placeholder="Enter username" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Your email" />
            </div>
          </div>
        </form>
        
      </CardContent>
      <CardFooter className="flex flex-col justify-between">
        <RadioBtn/>
        <a href="#">Registered user? Login here</a>
        <div className="flex flex-row">
        <Button variant="outline">Clear</Button>
        <Button>Register</Button>
        </div>
      </CardFooter>
    </Card>
  )
}
