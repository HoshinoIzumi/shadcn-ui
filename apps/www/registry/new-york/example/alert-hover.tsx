import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
import { AlertCircle, Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/registry/sydney/ui/alert"

export default function AlertHover() {
  return (
    <div style={{ width: "500px" }}>
      <Alert className="hover:bg-gray-200 hover:text-foreground">
        <RocketIcon className="h-4 w-4 hover:text-foreground" />
        <AlertTitle>Heads up!</AlertTitle>
      </Alert>
      <br />
      <Alert
        variant="success"
        className="hover:bg-green-500 hover:text-white hover:[&>svg]:text-white"
      >
        <CheckCircledIcon className="h-4 w-4" />
        <AlertTitle>Successful alert</AlertTitle>
      </Alert>
      <br />
      <Alert
        variant="information"
        className="hover:bg-blue-500 hover:text-white hover:[&>svg]:text-white"
      >
        <InfoCircledIcon className="h-4 w-4" />
        <AlertTitle>Information alert</AlertTitle>
      </Alert>
      <br />
      <Alert
        variant="warning"
        className="hover:bg-yellow-500 hover:text-white hover:[&>svg]:text-white"
      >
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Warning alert</AlertTitle>
      </Alert>
      <br />
      <Alert
        variant="destructive"
        className="hover:bg-red-500 hover:text-white hover:[&>svg]:text-white"
      >
        <CrossCircledIcon className="h-4 w-4" />
        <AlertTitle>Error alert</AlertTitle>
      </Alert>
    </div>
  )
}
