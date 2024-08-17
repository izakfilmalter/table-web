import type { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { useEffect, useState } from 'react'
import { Option, pipe } from 'effect'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'

export type ResponsiveDialogProps = {
  Trigger: ReactNode
  Title: ReactNode
  Description?: ReactNode
  Content: ReactNode
  open?: boolean
  setOpen?: Dispatch<SetStateAction<boolean>>
}

export const ResponsiveDialog: FC<ResponsiveDialogProps> = (props) => {
  const {
    Trigger,
    Title,
    Description,
    Content,
    open: passedOpen = false,
    setOpen: passedSetOpen,
  } = props

  const [open, setOpen] = useState(passedOpen)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    setOpen(passedOpen)
  }, [passedOpen])

  useEffect(() => {
    pipe(
      passedSetOpen,
      Option.fromNullable,
      Option.map((x) => x(open)),
    )
  }, [open, passedSetOpen])

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{Trigger}</DialogTrigger>
        <DialogContent className={'sm:max-w-[425px]'} forceMount>
          <DialogHeader>
            <DialogTitle>{Title}</DialogTitle>
            {pipe(
              Description,
              Option.fromNullable,
              Option.map((x) => <DialogDescription>{x}</DialogDescription>),
              Option.getOrNull,
            )}
          </DialogHeader>
          {Content}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{Trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className={'text-left'}>
          <DrawerTitle>{Title}</DrawerTitle>
          {pipe(
            Description,
            Option.fromNullable,
            Option.map((x) => <DrawerDescription>{x}</DrawerDescription>),
            Option.getOrNull,
          )}
        </DrawerHeader>
        <div className={'px-4'}>{Content}</div>
        <DrawerFooter className={'pt-2'}>
          <DrawerClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
