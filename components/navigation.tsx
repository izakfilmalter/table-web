'use client'

import type {
  AnchorHTMLAttributes,
  ComponentPropsWithRef,
  FC,
  ReactNode,
} from 'react'
import { useState } from 'react'
import Image from 'next/image'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

import { containerClassName } from '@/components/globalStyles'
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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

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
        className={cn(
          containerClassName,
          'h-navigation-height flex-row items-center',
        )}
      >
        <Link href={'/'}>
          <Logo className={'h-12 w-auto md:mr-[-190px]'} />
        </Link>

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
            <div
              className={
                'my-4 flex flex-col gap-y-3 overflow-y-auto overflow-x-hidden'
              }
            >
              <MobileLink href={'/'} onOpenChange={setOpen}>
                Home
              </MobileLink>

              <MobileLink href={'/about-us/our-story'} onOpenChange={setOpen}>
                Our Story
              </MobileLink>

              <MobileLink href={'/about-us/who-we-are'} onOpenChange={setOpen}>
                Who We Are
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
          </SheetContent>
        </Sheet>

        <NavigationMenu className={'mx-auto hidden md:flex'}>
          <NavigationMenuList>
            <NavigationMenuItem value={'about-us'}>
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
                          'rounded-4xl relative flex h-full w-full select-none flex-col justify-end overflow-hidden p-6 no-underline outline-none focus:shadow-md'
                        }
                        href={'/about-us/our-story'}
                      >
                        <Image
                          src={'/family.webp'}
                          alt={'Filmalter Family'}
                          fill
                          priority
                          className={'z-0'}
                          style={{
                            objectFit: 'cover',
                          }}
                        />

                        <div
                          className={
                            'absolute inset-0 z-0 bg-gradient-to-b from-muted/50 to-muted'
                          }
                        />

                        <div className={'relative h-6 w-6'} />
                        <div
                          className={'relative mb-2 mt-4 text-lg font-medium'}
                        >
                          Our Story
                        </div>
                        <p
                          className={
                            'relative text-sm leading-tight text-muted-foreground'
                          }
                        >
                          Hear the story of our pastors, how the Lord moved them
                          to St Pete, and their heart for revival.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href={'/about-us/who-we-are'} title={'Who We Are'}>
                    Learn about the new move the Lord is birthing to see revival
                    in the nations.
                  </ListItem>
                  <ListItem
                    href={'/about-us/values'}
                    title={'Values'}
                    className={'hidden'}
                  >
                    We are driven by what we hold dear, our values found in the
                    word.
                  </ListItem>
                  <ListItem
                    href={'/about-us/beliefs'}
                    title={'Beliefs'}
                    className={'hidden'}
                  >
                    The foundations of our faith, how we view God, Jesus, and
                    the Holy Spirit.
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
      <p className={'line-clamp-2 text-sm leading-snug text-muted-foreground'}>
        {children}
      </p>
    </a>
  </NavigationMenuLink>
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
