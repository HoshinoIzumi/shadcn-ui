import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function TableDemo() {
  return (
    <Table className="border border-orange-500">
      <TableCaption className="text-orange-600">
        A list of your recent invoices.
      </TableCaption>
      <TableHeader>
        <TableRow className="bg-orange-100">
          <TableHead className="w-[100px] border-b border-orange-500 text-orange-800">
            Invoice
          </TableHead>
          <TableHead className="border-b border-orange-500 text-orange-800">
            Status
          </TableHead>
          <TableHead className="border-b border-orange-500 text-orange-800">
            Method
          </TableHead>
          <TableHead className="text-right border-b border-orange-500 text-orange-800">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.invoice}
            className="hover:bg-orange-50 even:bg-orange-100"
          >
            <TableCell className="font-medium border-b border-orange-300">
              {invoice.invoice}
            </TableCell>
            <TableCell className="border-b border-orange-300">
              {invoice.paymentStatus}
            </TableCell>
            <TableCell className="border-b border-orange-300">
              {invoice.paymentMethod}
            </TableCell>
            <TableCell className="text-right border-b border-orange-300">
              {invoice.totalAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="bg-orange-200">
          <TableCell colSpan={3} className="font-semibold text-orange-800">
            Total
          </TableCell>
          <TableCell className="text-right font-semibold text-orange-800">
            $2,500.00
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
