"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  Root,
  List,
  Item,
  Trigger,
  Content,
  Link as NavigationLinkPrimitive,
  Indicator,
  Viewport,
} from "@radix-ui/react-navigation-menu";

import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";


interface NavigationMenuProps
  extends ComponentPropsWithoutRef<typeof Root> {
  children: ReactNode;
  className?: string;
}

export function NavigationMenu({
  children,
  className,
  ...props
}: NavigationMenuProps) {
  return (
    <Root
      className={cn(
        "relative flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </Root>
  );
}


export function NavigationMenuList({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof List>) {
  return (
    <List
      className={cn(
        "flex items-center gap-2",
        className
      )}
      {...props}
    />
  );
}


export function NavigationMenuItem({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Item>) {
  return (
    <Item
      className={cn("relative", className)}
      {...props}
    />
  );
}


export function NavigationMenuTrigger({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Trigger>) {
  return (
    <Trigger
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
        "text-white/70 hover:text-white hover:bg-white/5",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
        "data-[state=open]:text-white data-[state=open]:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="size-3 transition-transform duration-200 data-[state=open]:rotate-180"
        aria-hidden
      />
    </Trigger>
  );
}


export function NavigationMenuContent({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Content>) {
  return (
    <Content
      className={cn(
        "absolute left-0 top-full w-full md:w-auto",
        "rounded-md border bg-card text-card-foreground shadow-lg",
        "p-2",
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out",
        className
      )}
      {...props}
    />
  );
}


interface NavigationMenuLinkProps
  extends ComponentPropsWithoutRef<typeof NavigationLinkPrimitive> {
  children: ReactNode;
}

export function NavigationMenuLink({
  className,
  children,
  ...props
}: NavigationMenuLinkProps) {
  return (
    <NavigationLinkPrimitive
      className={cn(
        "block rounded-md px-4 py-2 text-sm transition-colors",
        "text-white/70 hover:text-white hover:bg-white/5",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
        className
      )}
      {...props}
    >
      {children}
    </NavigationLinkPrimitive>
  );
}


export function NavigationMenuIndicator({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Indicator>) {
  return (
    <Indicator
      className={cn(
        "top-full z-10 flex h-1.5 items-end justify-center",
        className
      )}
      {...props}
    >
      <div className="h-2 w-2 rotate-45 bg-border shadow-sm" />
    </Indicator>
  );
}



export function NavigationMenuViewport({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Viewport>) {
  return (
    <div className="absolute left-0 top-full flex w-full justify-center">
      <Viewport
        className={cn(
          "relative mt-2 h-[var(--radix-navigation-menu-viewport-height)]",
          "w-full md:w-[var(--radix-navigation-menu-viewport-width)]",
          "overflow-hidden rounded-md border bg-card shadow-md",
          className
        )}
        {...props}
      />
    </div>
  );
}