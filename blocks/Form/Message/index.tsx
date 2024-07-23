import type { ComponentProps, FC } from 'react'
import { Width } from '@/blocks/Form/Width'
import RichText from '@/components/RichText'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { MessageField } from '@payloadcms/plugin-form-builder/dist/types'

export const Message: FC<MessageField> = ({ message }) => (
  <Width className={'my-12'} width={'100'}>
    <RichText content={message as ComponentProps<typeof RichText>['content']} />
  </Width>
)
