import React from 'react'
import { Error } from '@/blocks/Form/Error'
import { Width } from '@/blocks/Form/Width'
import { Label } from '@/components/ui/label'
import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl<Record<string, any>>>
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  rows = 3,
  width,
}) => (
  <Width width={width}>
    <Label htmlFor={name}>{label}</Label>

    <TextAreaComponent
      defaultValue={defaultValue}
      id={name}
      rows={rows}
      {...register(name, { required: requiredFromProps })}
    />

    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
    {requiredFromProps && errors[name] && <Error />}
  </Width>
)
