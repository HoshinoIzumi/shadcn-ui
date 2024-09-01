import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  RocketIcon,
} from "@radix-ui/react-icons"

import { Alert } from "@/registry/sydney/ui/alert"

export default function AlertHover() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <Alert className="flex items-center p-4 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 hover:text-black transition-colors">
        <RocketIcon className="h-5 w-5 mr-2 hover:text-black transition-colors" />
        <span className="font-medium">Heads up!</span>
      </Alert>

      <Alert className="flex items-center p-4 bg-green-100 text-green-800 rounded-lg hover:bg-green-500 hover:text-white transition-colors">
        <CheckCircledIcon className="h-5 w-5 mr-2 hover:text-white transition-colors" />
        <span className="font-medium">Successful alert</span>
      </Alert>

      <Alert className="flex items-center p-4 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
        <InfoCircledIcon className="h-5 w-5 mr-2 hover:text-white transition-colors" />
        <span className="font-medium">Information alert</span>
      </Alert>

      <Alert className="flex items-center p-4 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-500 hover:text-white transition-colors">
        <ExclamationTriangleIcon className="h-5 w-5 mr-2 hover:text-white transition-colors" />
        <span className="font-medium">Warning alert</span>
      </Alert>

      <Alert className="flex items-center p-4 bg-red-100 text-red-800 rounded-lg hover:bg-red-500 hover:text-white transition-colors">
        <CrossCircledIcon className="h-5 w-5 mr-2 hover:text-white transition-colors" />
        <span className="font-medium">Error alert</span>
      </Alert>
    </div>
  )
}
