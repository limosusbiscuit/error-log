/* THINGS TO DO */
// 1. Add a function to get the current date and time
// 2. Connect KOF DB
// 3. Add mulitple charts displaying data
// 4. Add a function to update the charts automatically
// 5. Use KOF color scheme
// 6. Create more of a dashboard of different charts
// 7. Create a table of full error logs




"use client" 
// This ensures this file runs on the client side in Next.js
// allowing it to include client-side libraries or interactions

import { TrendingUp } from "lucide-react" 
// Importing an icon from the React library for use in the footer.

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts" 
// Importing chart components from Recharts(shadcn/ui) for creating the bar chart.

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" 
// Importing reusable Card components for styling and layout this is from shadcn/ui.

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart" 
// Importing custom chart-related components for configuring and styling charts from shadcn/ui.

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
// An array of data objects where each object represents the desktop and mobile
// visitor counts for a specific month this is for testing the chart feature, will change in the future for error logs.

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))", // Using CSS variable for the desktop bar color(tailwind).
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))", // Using CSS variable for the mobile bar color(tailwind).
  },
} satisfies ChartConfig 
// A configuration object that defines labels and colors for the two chart data keys.

function Page() {
  // The main React component exported as the default for this page.
  return (
    <Card>
      {/* Card component is a container for the chart and its description */}
      <CardHeader>
        {/* Card header contains the title and description */}
        <CardTitle>Bar Chart - Testing Phase</CardTitle>
        {/* The title of the chart */}
        <CardDescription>January - June 2024</CardDescription>
        {/* description of what the chart represents */}
      </CardHeader>
      <CardContent>
        {/* Main content of the card (contains the chart itself) */}
        <ChartContainer config={chartConfig}>
          {/* ChartContainer wraps and applies configuration to the chart */}
          <BarChart accessibilityLayer data={chartData}>
            {/* BarChart is the main chart component using the chart data */}
            <CartesianGrid vertical={false} />
            {/* CartesianGrid adds gridlines to the chart, but vertical lines are disabled. Might adjust later depending on what we need */}
            <XAxis
              dataKey="month" // Maps the X-axis to the "month" key in the data.
              tickLine={false} // Removes the small tick lines from the axis these were making the chart look funky.
              tickMargin={10} // Adds space between the ticks and the axis, need this but can adjust.
              axisLine={false} // Removes the horizontal axis line.
              tickFormatter={(value) => value.slice(0, 3)} 
              // Customizes the ticks to display only the first 3 letters of each month.
            />
            <ChartTooltip
              cursor={false} 
              // Disables the cursor (highlighted area) when hovering over bars.
              content={<ChartTooltipContent indicator="dashed" />}
              // Creates custom tooltip with dashed indicators(Maybe for error types?).
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            {/* Bar for desktop data with a rounded corner radius */}
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            {/* Bar for mobile data with a rounded corner radius */}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* Footer section of the card with additional details */}
        <div className="flex gap-2 font-medium leading-none">
          {/* Text indicating a trending up metric */}
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          {/* Adds a "TrendingUp" icon next to the text (Used this for testing but could be dynamic) */}
        </div>
        <div className="leading-none text-muted-foreground">
          {/* Additional description text in a muted style */}
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export default Page 
// Default export of the Page component so it is rendered when visiting this route.