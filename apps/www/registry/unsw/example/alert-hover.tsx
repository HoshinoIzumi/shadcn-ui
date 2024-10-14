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
      <Alert className="hover:bg-gray-200 hover:text-foreground transition-colors duration-300">
        <RocketIcon className="h-4 w-4 transition-colors duration-300 hover:text-foreground" />
        <AlertTitle>Heads up!</AlertTitle>
      </Alert>
      <br />
      <Alert
        variant="success"
        className="hover:bg-green-500 hover:text-white transition-colors duration-300 hover:[&>svg]:text-white"
      >
        <CheckCircledIcon className="h-4 w-4 transition-colors duration-300" />
        <AlertTitle>Successful alert</AlertTitle>
      </Alert>
      <br />
      <Alert
        variant="information"
        className="hover:bg-blue-500 hover:text-white transition-colors duration-300 hover:[&>svg]:text-white"
      >
        <InfoCircledIcon className="h-4 w-4 transition-colors duration-300" />
        <AlertTitle>Information alert</AlertTitle>
      </Alert>
      <br />
      <Alert
        variant="warning"
        className="hover:bg-yellow-500 hover:text-white transition-colors duration-300 hover:[&>svg]:text-white"
      >
        <ExclamationTriangleIcon className="h-4 w-4 transition-colors duration-300" />
        <AlertTitle>Warning alert</AlertTitle>
      </Alert>
      <br />
      <Alert
        variant="destructive"
        className="hover:bg-red-500 hover:text-white transition-colors duration-300 hover:[&>svg]:text-white"
      >
        <CrossCircledIcon className="h-4 w-4 transition-colors duration-300" />
        <AlertTitle>Error alert</AlertTitle>
      </Alert>
    </div>
  )
}
