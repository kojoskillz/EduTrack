"use client";
import logoX from "../app/assets/Edutrack logo.png"
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Code,
  Book,
  PieChart,
  DollarSign,
  Fingerprint,
  Bell,
  Menu,
//   X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Staff Management",
    description: "This Pokemon's cry is very loud and distracting",
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description: "The fluid of Smeargle's tail secretions changes",
  },
  {
    icon: Book,
    title: "Student Management",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: Fingerprint,
    title: "Security",
    description: "The shell's rounded shape and the grooves on its",
  },
  {
    icon: PieChart,
    title: "Reports",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: Bell,
    title: "Notice Board",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
  
      <header className="sticky glass top-0 z-50 w-full  ">
        <div className="container flex h-14 items-center justify-between ">
          <div className="flex items-center w-full space-x-4">
            <Link href={"/"} className="flex items-center space-x-2">
              {/* <div className="bg-blue-500 rounded-full p-1">
                <span className="text-white font-bold text-xl">Σ</span>
              </div> */}
                <Image
                        src={logoX}
                            alt="star_image"
                            width="100"
                            height="100"
                            sizes="fit-content"
                            className=" rounded-full md:h-[2.2rem] h-[2rem] md:w-[2.2rem] w-[2rem] fit-content ml-3"    
                        />  
              <span className="font-bold text-xl text-white ">EduTrack</span>
            </Link>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="rounded-[4px] hover:bg-white hover:text-black group inline-flex h-9 w-max items-center justify-center  bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4 rounded-[4px] ">
                      <div className=" flex items-center justify-between mb-4 pb-2 border-b">
                        <h4 className="text-lg font-medium">Features</h4>
                        <Link
                          href="/features"
                          className="text-sm text-blue-500 hover:underline"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        {features.map((feature, index) => (
                          <Link
                            key={index}
                            href={`/feature/${feature.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block group"
                          >
                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                                <feature.icon className="h-6 w-6 text-blue-500" />
                              </div>
                              <div>
                                <h5 className="font-medium mb-1 group-hover:text-blue-500">
                                  {feature.title}
                                </h5>
                                <p className="text-sm text-muted-foreground">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium mb-1">Get started</h4>
                            <p className="text-sm text-muted-foreground">
                              Their food sources have decreased, and their
                              numbers
                            </p>
                          </div>
                          <Button variant="secondary">Get started</Button>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/learn" legacyBehavior passHref>
                    <NavigationMenuLink className="rounded-[4px]  hover:bg-white hover:text-black group inline-flex h-9 w-max items-center justify-center  bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/academy" legacyBehavior passHref>
                    <NavigationMenuLink className="rounded-[4px]  hover:bg-white hover:text-black group inline-flex h-9 w-max items-center justify-center  bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      How It Works
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex  items-center space-x-4 mr-10">
            <Button variant="ghost" className="text-white rounded-[4px]  hover:bg-white hover:text-black">Log in</Button>
            <Button className="border-[1px] border-white/15 rounded-[4px] hover:bg-white/5 text-white">Sign up</Button>
          </div>
{/* hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden text-white">
              <Button variant="ghost" size="icon">
                <Menu className="h-10 w-10 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full glass p-0">
              <SheetHeader className="border-b  p-4 text-white">
                <div className="flex gap-2 ml-[-1.2rem] ">
                  <Image
                          src={logoX}
                              alt="star_image"
                              width="100"
                              height="100"
                              sizes="fit-content"
                              className=" rounded-full md:h-[2.2rem] h-[2rem] md:w-[2.2rem] w-[2rem] fit-content ml-3"    
                          />  
                  <SheetTitle className="text-left text-white font-bold">EduTrack</SheetTitle>
                </div>
            
              </SheetHeader>
              <div className="flex flex-col py-4 text-white ">
                <Link
                  href="/"
                  className="px-4 py-2  hover:bg-white hover:text-black rounded-[9px] text-white text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <button
                  className="flex text-white items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                  onClick={() => setShowFeatures(!showFeatures)}
                >
                  Features
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-white",
                      showFeatures && "rotate-180"
                    )}
                  />
                </button>
                {showFeatures && (
                  <div className="px-4 py-2 space-y-4 text-white">
                    {features.map((feature, index) => (
                      <Link
                        key={index}
                        href={`/feature/${feature.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex items-start gap-4 py-2"
                        onClick={() => setOpen(false)}
                      >
                        <div className="p-2 bg-muted rounded-md">
                          <feature.icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1 text-white">{feature.title}</h5>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/learn"
                  className="px-4 py-2 text-lg rounded-[9px] hover:bg-white hover:text-black font-medium hover:bg-accent text-white"
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/academy"
                  className="px-4 py-2 text-lg rounded-[9px] font-medium hover:bg-accent text-white  hover:bg-white hover:text-black"
                  onClick={() => setOpen(false)}
                >
                  How it works
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                <div className="grid z-50 gap-2">
                  <Button
                    variant="outline"
                    className="w-full rounded-[9px] border-none  text-white hover:bg-white hover:text-black"
                    onClick={() => setOpen(false)}
                  >
                    Log in
                  </Button>
                  <Button className="w-full text-white rounded-[9px] border-white/5 border-[1px]  hover:bg-white/5 hover:text-white " onClick={() => setOpen(false)}>
                    Sign up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

  );
}
