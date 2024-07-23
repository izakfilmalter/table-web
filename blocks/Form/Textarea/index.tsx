import React from 'react'
import { Label } from '@/components/ui/label'
import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

import { Error } from '../Error'
import { Width } from '../Width'

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

    {requiredFromProps && errors[name] && <Error />}
  </Width>
)
