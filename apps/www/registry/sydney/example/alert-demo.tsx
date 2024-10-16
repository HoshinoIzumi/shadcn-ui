import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
import { AlertCircle, Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/registry/sydney/ui/alert"

export default function AlertDemo() {
  return (
    <div style={{ width: "500px" }}>
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
      </Alert>
      <br></br>
      <Alert variant="success">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 1024 1024"
          className="icon mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="#5fdd96"
          stroke="#5fdd96"
          transform="matrix(1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#0bda6f"
              d="M512 64a448 448 0 110 896 448 448 0 010-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 10-54.336 54.336l126.72 126.72a38.272 38.272 0 0054.336 0l262.4-262.464a38.4 38.4 0 10-54.272-54.336L456.192 600.384z"
            ></path>
          </g>
        </svg>
        <AlertTitle>Successful alert</AlertTitle>
      </Alert>
      <br></br>
      <Alert variant="information">
        <svg
          width="24px"
          height="24px"
          viewBox="-81.92 -81.92 1187.84 1187.84"
          className="icon mr-2"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          stroke="#000000"
          stroke-width="0.01024"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="18.432"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"
              fill="#2196F3"
            ></path>
            <path
              d="M469.333333 469.333333h85.333334v234.666667h-85.333334z"
              fill="#FFFFFF"
            ></path>
            <path
              d="M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z"
              fill="#FFFFFF"
            ></path>
          </g>
        </svg>
        <AlertTitle>Information alert</AlertTitle>
      </Alert>
      <br></br>
      <Alert variant="warning">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 512 512"
          className="icon mr-2"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>warning-filled</title>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g
                id="add"
                fill="#f2df0d"
                transform="translate(32.000000, 42.666667)"
              >
                {" "}
                <path
                  d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z M224,272 C208.761905,272 197.333333,283.264 197.333333,298.282667 C197.333333,313.984 208.415584,325.248 224,325.248 C239.238095,325.248 250.666667,313.984 250.666667,298.624 C250.666667,283.264 239.238095,272 224,272 Z M245.333333,106.666667 L202.666667,106.666667 L202.666667,234.666667 L245.333333,234.666667 L245.333333,106.666667 Z"
                  id="Combined-Shape"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <AlertTitle>Warning alert</AlertTitle>
      </Alert>
      <br></br>
      <Alert variant="destructive">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          className="icon mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="style=fill">
              {" "}
              <g id="error-box">
                {" "}
                <path
                  id="Subtract"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.25 8C1.25 4.27208 4.27208 1.25 8 1.25L16 1.25C19.7279 1.25 22.75 4.27208 22.75 8L22.75 16C22.75 19.7279 19.7279 22.75 16 22.75L8 22.75C4.27208 22.75 1.25 19.7279 1.25 16L1.25 8ZM8.46967 8.46966C8.76257 8.17676 9.23744 8.17677 9.53033 8.46966L12 10.9393L14.4697 8.46966C14.7626 8.17676 15.2374 8.17677 15.5303 8.46966C15.8232 8.76256 15.8232 9.23743 15.5303 9.53032L13.0606 12L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7625 15.8232 14.4696 15.5303L12 13.0606L9.53033 15.5303C9.23743 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7625 8.46967 14.4696L10.9393 12L8.46967 9.53032C8.17678 9.23742 8.17678 8.76255 8.46967 8.46966Z"
                  fill="#e00b0b"
                ></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <AlertTitle>Error alert</AlertTitle>
      </Alert>
    </div>
  )
}
