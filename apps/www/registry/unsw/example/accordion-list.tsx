import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/registry/default/ui/accordion"
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/registry/default/ui/table"
  import { Button } from "@/registry/default/ui/button"
  import { useToast } from "@/registry/default/ui/use-toast"
  import { Toaster } from "@/registry/default/ui/toaster";
  
  export function AccordionList() {
    const { toast } = useToast();
    const buttonText = "Normal Show Toast";
    const handleClick = (url:any) => () => {
      window.open(url, "_blank");
    };
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width: '600px', backgroundColor: 'rgb(255, 255, 255)'}} >
          <div style={{ width: '500px', backgroundColor: 'rgb(255, 255, 255)'}} >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>University Campus Locations</AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableBody>
                <TableRow>
                  <Toaster />
                  <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "Camperdown/Darlington",});}}>
                    Camperdown/Darlington</TableCell>
                </TableRow>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "Camden Campus",});}}>
                    Camden Campus</TableCell>
                </TableRow>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "Mallett Street Campus",});}}>
                    Mallett Street Campus</TableCell>
                </TableRow>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "Sydney College of the Arts",});}}>
                    Sydney College of the Arts</TableCell>
                </TableRow>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "Sydney Medical School Campuses",});}}>
                    Sydney Medical School Campuses</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>University Faculties And Schools</AccordionTrigger>
          <AccordionContent>
          <Table>
              <TableBody>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "Faculty of Arts and Social Sciences",});}}>Faculty of Arts and Social Sciences</TableCell>
                </TableRow>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "Faculty of Engineering",});}}>Faculty of Engineering</TableCell>
                </TableRow>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "Faculty of Medicine and Health",});}}>Faculty of Medicine and Health</TableCell>
                </TableRow>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "Faculty of Science",});}}>Faculty of Science</TableCell>
                </TableRow>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "School of Architecture, Design and Planning",});}}>School of Architecture, Design and Planning</TableCell>
                </TableRow>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "University of Sydney Business School",});}}>University of Sydney Business School</TableCell>
                </TableRow>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "Conservatorium of Music",});}}>Conservatorium of Music</TableCell>
                </TableRow>
                <TableRow>
                <Toaster />
                <TableCell className="font-medium" onClick={() => {console.log(buttonText, "has clicked");toast({ description: "Sydney Law School",});}}>Sydney Law School</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
      </div>
    )
  }
  export default AccordionList;