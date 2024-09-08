import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/registry/default/ui/table"
import { Toaster } from "@/registry/default/ui/toaster"
import { useToast } from "@/registry/default/ui/use-toast"

export default function AccordionList() {
  const { toast } = useToast()

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "600px",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <div style={{ width: "500px", backgroundColor: "rgb(255, 255, 255)" }}>
        <Accordion type="single" collapsible className="w-full">
          {/* First Accordion Item */}
          <AccordionItem value="item-1">
            <AccordionTrigger>University Campus Locations</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  {[
                    "Camperdown/Darlington",
                    "Camden Campus",
                    "Mallett Street Campus",
                    "Sydney College of the Arts",
                    "Sydney Medical School Campuses",
                  ].map((location) => (
                    <TableRow key={location}>
                      <Toaster />
                      <TableCell
                        className="font-medium"
                        onClick={() => {
                          toast({ description: location })
                        }}
                      >
                        {location}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          {/* Second Accordion Item */}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              University Faculties And Schools
            </AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  {[
                    "Faculty of Arts and Social Sciences",
                    "Faculty of Engineering",
                    "Faculty of Medicine and Health",
                    "Faculty of Science",
                    "School of Architecture, Design and Planning",
                    "University of Sydney Business School",
                    "Conservatorium of Music",
                    "Sydney Law School",
                  ].map((faculty) => (
                    <TableRow key={faculty}>
                      <Toaster />
                      <TableCell
                        className="font-medium"
                        onClick={() => {
                          toast({ description: faculty })
                        }}
                      >
                        {faculty}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
