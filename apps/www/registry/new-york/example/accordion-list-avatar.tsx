import React, { useState } from "react"
import Image from "next/image"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/registry/default/ui/table"

export default function AccordionDemo() {
  // Define a state to hold the active dialog's content.
  const [activeDialogContent, setActiveDialogContent] =
    useState<JSX.Element | null>(null)

  // Helper function to create the dialog content with Image optimization.
  const createDialogContent = (
    avatarSrc: string,
    role: string,
    fullName: string,
    description: string
  ) => (
    <DialogContent style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          flex: "none",
          width: "120px",
          height: "160px",
          marginRight: "20px",
        }}
      >
        <Image
          src={avatarSrc}
          alt={fullName}
          width={120}
          height={160}
          objectFit="cover"
        />
      </div>
      <div style={{ flex: "1" }}>
        <div style={{ marginBottom: "10px" }}>
          <p style={{ color: "#e83e1c", margin: "0", fontWeight: "bold" }}>
            {role}
          </p>
          <p style={{ margin: "0" }}>{fullName}</p>
        </div>
        <div>
          <p style={{ color: "grey", margin: "0" }}>{description}</p>
        </div>
      </div>
    </DialogContent>
  )

  // Helper function to render a dialog trigger with its content.
  const renderDialogTableRow = (
    avatarSrc: string,
    role: string,
    fullName: string,
    description: string
  ) => (
    <TableRow key={role}>
      <TableCell>
        <Avatar>
          <AvatarImage src={avatarSrc} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </TableCell>
      <Dialog>
        <TableCell className="font-medium" style={{ textAlign: "right" }}>
          <DialogTrigger asChild>
            <div
              onClick={() =>
                setActiveDialogContent(
                  createDialogContent(avatarSrc, role, fullName, description)
                )
              }
              style={{ cursor: "pointer" }}
            >
              <p
                style={{
                  color: "rgb(249, 115, 22)",
                  textAlign: "right",
                  cursor: "pointer",
                }}
              >
                {role}
              </p>
              <p style={{ textAlign: "right", cursor: "pointer" }}>
                {fullName}
              </p>
            </div>
          </DialogTrigger>
        </TableCell>
        {activeDialogContent}
      </Dialog>
    </TableRow>
  )

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
          <AccordionItem value="item-1">
            <AccordionTrigger>Albanese Ministry</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  {renderDialogTableRow(
                    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/albanese.jpg?raw=true",
                    "Prime Minister",
                    "The Hon Anthony Albanese MP",
                    "As the Prime Minister, Anthony Albanese serves as the head of the Australian government, overseeing the administration's policies and agenda."
                  )}
                  {renderDialogTableRow(
                    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/marles.jpg?raw=true",
                    "Deputy Prime Minister",
                    "The Hon Richard Marles MP",
                    "Richard Marles holds the position of Deputy Prime Minister, acting as the second-in-command within the government."
                  )}
                  {renderDialogTableRow(
                    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/wong.jpg?raw=true",
                    "Minister for Foreign Affairs",
                    "Senator the Hon Penny Wong",
                    "As the Minister for Foreign Affairs, Senator Penny Wong is responsible for managing Australia's international relationships."
                  )}
                  {renderDialogTableRow(
                    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/chalmers.jpg?raw=true",
                    "Treasurer",
                    "The Hon Dr Jim Chalmers MP",
                    "The Hon Dr. Jim Chalmers, as Treasurer, is charged with the Australian government's economic policy and fiscal management."
                  )}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Shadow Ministry</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  {renderDialogTableRow(
                    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/dutton.jpg?raw=true",
                    "Leader of the Opposition",
                    "The Hon Peter Dutton MP",
                    "As the Leader of the Opposition, Peter Dutton MP represents the main opposition party and stands as the alternative to the current Prime Minister."
                  )}
                  {renderDialogTableRow(
                    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/ley.jpg?raw=true",
                    "Deputy Leader of the Opposition",
                    "The Hon Sussan Ley MP",
                    "Sussan Ley MP serves as the Deputy Leader of the Opposition, supporting the Leader in scrutinizing the government's actions."
                  )}
                  {renderDialogTableRow(
                    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/payne.jpg?raw=true",
                    "Shadow Cabinet Secretary",
                    "Senator the Hon Marise Payne",
                    "Senator Marise Payne holds the position of Shadow Cabinet Secretary, where she is responsible for coordinating the activities of the Shadow Cabinet."
                  )}
                  {renderDialogTableRow(
                    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/hume.jpg?raw=true",
                    "Shadow Minister for Finance",
                    "Senator the Hon Jane Hume",
                    "As the Shadow Minister for Finance, Senator Jane Hume scrutinizes the government's financial decisions and policies."
                  )}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
