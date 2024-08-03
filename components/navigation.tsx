'use client'

import type {
  AnchorHTMLAttributes,
  ComponentPropsWithRef,
  FC,
  ReactNode,
} from 'react'
import { useState } from 'react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'

const communityNavItems: Array<{
  title: string
  href: string
  description: string
}> = [
  {
    title: 'Gathering',
    href: '/community/gathering',
    description:
      'Find a Table close to you, a place for you to be home, a place for you to be discipled.',
  },
  {
    title: 'Prayer',
    href: '/community/prayer',
    description:
      'Find a place to pray for the harvest. A place to intercede for St Pete. A place to birth revival',
  },
  {
    title: 'Training',
    href: '/community/training',
    description:
      'Find a place to be equipped for the great commission. Learn to share the gospel, heal the sick, and make disciples.',
  },
  {
    title: 'Outreach',
    href: '/community/outreach',
    description:
      'Find a place to spread the gospel. A place where you can walk out your calling, to see the world saved.',
  },
]

export const Navigation: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={'fixed left-0 top-0 z-[60] w-full backdrop-blur-[12px]'}>
      <div
        className={
          'mx-auto flex h-navigation-height max-w-[1200px] flex-row items-center px-[32px]'
        }
      >
        <Logo className={'h-12 w-auto'} />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className={'my-auto ml-auto md:hidden'} variant={'ghost'}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            onOpenAutoFocus={(event) => {
              event.preventDefault()
            }}
          >
            <ScrollArea className={'my-4'}>
              <div className={'flex flex-col gap-y-3'}>
                <MobileLink href={'/'} onOpenChange={setOpen}>
                  Home
                </MobileLink>

                <ExternalMobileLink
                  href={
                    'https://table-church.churchcenter.com/people/forms/789148'
                  }
                  data-open-in-church-center-modal={'true'}
                  onOpenChange={setOpen}
                >
                  Connect
                </ExternalMobileLink>

                <ExternalMobileLink
                  href={'https://table-church.churchcenter.com/giving'}
                  data-open-in-church-center-modal={'true'}
                  onOpenChange={setOpen}
                >
                  Give
                </ExternalMobileLink>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        <NavigationMenu className={'ml-auto mr-0 hidden md:flex'}>
          <NavigationMenuList>
            <NavigationMenuItem className={'hidden'}>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className={
                    'grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'
                  }
                >
                  <li className={'row-span-3'}>
                    <NavigationMenuLink asChild>
                      <a
                        className={
                          'flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                        }
                        href={'/about-us/our-story'}
                      >
                        <div className={'h-6 w-6'} />
                        <div className={'mb-2 mt-4 text-lg font-medium'}>
                          Our Story
                        </div>
                        <p
                          className={
                            'text-sm leading-tight text-muted-foreground'
                          }
                        >
                          Hear the story of our pastors, how the Lord moved them
                          to St Pete, and their heart for revival.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href={'/about-us/our-story'} title={'Our Story'}>
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href={'/about-us/our-values'} title={'Our Values'}>
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href={'/about-us/our-beliefs'}
                    title={'Our Beliefs'}
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className={'hidden'}>
              <NavigationMenuTrigger>Community</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className={
                    'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'
                  }
                >
                  {communityNavItems.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href={
                  'https://table-church.churchcenter.com/people/forms/789148'
                }
                data-open-in-church-center-modal={'true'}
              >
                Connect
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href={'https://table-church.churchcenter.com/giving'}
                data-open-in-church-center-modal={'true'}
              >
                Give
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

const ListItem: FC<ComponentPropsWithRef<'a'>> = ({
  className,
  title,
  children,
  ref,
  ...props
}) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className,
        )}
        {...props}
      >
        <div className={'text-sm font-medium leading-none'}>{title}</div>
        <p
          className={'line-clamp-2 text-sm leading-snug text-muted-foreground'}
        >
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
)

type MobileLinkProps = LinkProps & {
  onOpenChange: (open: boolean) => void
  children: ReactNode
  className?: string
}

const MobileLink: FC<MobileLinkProps> = (props) => {
  const { href, onOpenChange, className, children, ...domProps } = props

  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange(false)
      }}
      className={cn(navigationMenuTriggerStyle(), className)}
      {...domProps}
    >
      {children}
    </Link>
  )
}

type ExternalMobileLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  onOpenChange: (open: boolean) => void
  children: ReactNode
  className?: string
}

const ExternalMobileLink: FC<ExternalMobileLinkProps> = (props) => {
  const { href, onOpenChange, className, children, ...domProps } = props

  return (
    <a
      href={href}
      onClick={() => {
        onOpenChange(false)
      }}
      className={cn(navigationMenuTriggerStyle(), className)}
      {...domProps}
    >
      {children}
    </a>
  )
}
