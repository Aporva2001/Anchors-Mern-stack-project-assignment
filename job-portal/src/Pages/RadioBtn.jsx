import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioBtn() {
  return (
    <RadioGroup defaultValue="comfortable" className="flex flex-row my-5">
      <span className="flex flex-row space-x-1.5">
        <RadioGroupItem value="company" id="r1" />
        <Label htmlFor="r1">Company</Label>
      </span>
      <span className="flex flex-row space-x-1.5">
        <RadioGroupItem value="student" id="r2" />
        <Label htmlFor="r2">Student</Label>
      </span>

    </RadioGroup>
  )
}
