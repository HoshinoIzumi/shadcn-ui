import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/sydney/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/sydney/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="recent" className="w-[500px] h-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger
          value="recent"
          className="relative data-[state=active]:bg-orange-600 data-[state=active]:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-orange-600"
        >
          Recent
        </TabsTrigger>
        <TabsTrigger
          value="popular"
          className="relative data-[state=active]:bg-orange-600 data-[state=active]:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-orange-600"
        >
          Popular
        </TabsTrigger>
        <TabsTrigger
          value="trending"
          className="relative data-[state=active]:bg-orange-600 data-[state=active]:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-orange-600"
        >
          Trending
        </TabsTrigger>
      </TabsList>
      <TabsContent value="recent" className="h-[440px] overflow-y-auto">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>1h ago - 2 comments - 1 shares</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Suspendisse eget ante viverra</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>1h ago - 3 comments - 2 shares</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="popular" className="h-[440px] overflow-y-auto">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Donec eleifend dui quis varius placerat</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>11h ago - 15 comments - 4 shares</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ut vel ligula consequat, aliquet ipsum ut</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>5h ago - 7 comments - 3 shares</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="trending" className="h-[440px] overflow-y-auto">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Maecenas vel quam ac nibh tincidunt maximus</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>3h ago - 5 comments - 2 shares</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              Donec elementum erat eleifend mi posuere hendrerit
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <p>2h ago - 4 comments - 1 shares</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default TabsDemo
