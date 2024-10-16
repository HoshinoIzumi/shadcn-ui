import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/sydney/ui/table";

const defaultInvoices = [
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
];

export default function TableDemo({
  enableBgAndHover = false,
  tableShadow = "shadow-none",
  tableWidth = "w-full",
  rowAlignment = "text-left",  
  fontSize = "text-base",  
  borderStyle = "border-solid",  
  invoices = defaultInvoices,
  tableCaption = "A list of your recent invoices.",
}) {
  const rowBgClass = enableBgAndHover ? "bg-orange-50 hover:bg-orange-100" : "";

  return (
    <div className={`border-2 ${borderStyle} border-black rounded-xl overflow-hidden ${tableShadow} ${tableWidth}`}>
      <Table className={`w-full bg-white ${fontSize}`}>
        <TableCaption className="text-black">
          {tableCaption}
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-white">
            <TableHead className={`w-[100px] border-b-2 border-black text-black ${rowAlignment}`}>
              Invoice
            </TableHead>
            <TableHead className={`border-b-2 border-black text-black ${rowAlignment}`}>
              Status
            </TableHead>
            <TableHead className={`border-b-2 border-black text-black ${rowAlignment}`}>
              Method
            </TableHead>
            <TableHead className={`text-right border-b-2 border-black text-black ${rowAlignment}`}>
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow
              key={index}
              className={`border-b border-black ${rowBgClass} ${rowAlignment}`}
            >
              <TableCell className={`font-medium text-black ${rowAlignment}`}>
                {invoice.invoice}
              </TableCell>
              <TableCell className={rowAlignment}>{invoice.paymentStatus}</TableCell>
              <TableCell className={rowAlignment}>{invoice.paymentMethod}</TableCell>
              <TableCell className={`text-right ${rowAlignment}`}>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className={enableBgAndHover ? "bg-orange-100" : "bg-white"}>
            <TableCell colSpan={3} className={`font-semibold text-black ${rowAlignment}`}>
              Total
            </TableCell>
            <TableCell className={`text-right font-semibold text-black ${rowAlignment}`}>
              $2,500.00
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
