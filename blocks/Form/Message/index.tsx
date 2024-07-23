import React from 'react'
import { Width } from '@/blocks/Form/Width'
import RichText from '@/components/RichText'
import type { MessageField } from '@payloadcms/plugin-form-builder/types'

export const Message: React.FC<MessageField> = ({ message }) => (
  <Width className={'my-12'} width={'100'}>
    <RichText content={message} />
  </Width>
)
