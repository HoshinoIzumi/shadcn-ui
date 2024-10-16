import * as React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/registry/sydney/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/sydney/ui/tabs";

type TabsDemoProps = {
  defaultTab?: string;
  width?: string;
  height?: string;
  tabTitles?: { recent: string; popular: string; trending: string };
  cardContent?: { title: string; footer: string }[];
  activeBgColor?: boolean; // New: Active tab background color
  activeTextColor?: string; // New: Active tab text color
};

export function TabsDemo({
  defaultTab = "recent",
  width = "w-[400px]",
  height = "h-[500px]",
  tabTitles = { recent: "Recent", popular: "Popular", trending: "Trending" },
  cardContent = [
    { title: "Lorem ipsum dolor sit amet", footer: "1h ago - 2 comments - 1 shares" },
    { title: "Suspendisse eget ante viverra", footer: "1h ago - 3 comments - 2 shares" }
  ],
  activeBgColor = false,
  activeTextColor = "text-black",
}: TabsDemoProps) {
  return (
    <Tabs defaultValue={defaultTab} className={`${width} ${height}`}>
      <TabsList className="flex w-full h-[60px]">
      <TabsTrigger
  value="recent"
  className={`w-full text-center text-lg ${activeBgColor ? 'data-[state=active]:bg-orange-600' : ''} data-[state=active]:${activeTextColor}`}
>
  {tabTitles.recent}
</TabsTrigger>
        <TabsTrigger
          value="popular"
          className={`w-full text-center text-lg ${activeBgColor ? 'data-[state=active]:bg-orange-600' : ''} data-[state=active]:${activeTextColor}`}
        >
          {tabTitles.popular}
        </TabsTrigger>
        <TabsTrigger
          value="trending"
          className={`w-full text-center text-lg ${activeBgColor ? 'data-[state=active]:bg-orange-600' : ''} data-[state=active]:${activeTextColor}`}
        >
          {tabTitles.trending}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="recent" className="h-[440px] overflow-y-auto">
        {cardContent.map((card, index) => (
          <Card className="mb-4" key={`recent-${index}`}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <p>{card.footer}</p>
            </CardFooter>
          </Card>
        ))}
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
            <CardTitle>Donec elementum erat eleifend mi posuere hendrerit</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>2h ago - 4 comments - 1 shares</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default TabsDemo;
