import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

import { Error } from '../Error'
import { Width } from '../Width'

export const Number: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl<Record<string, any>>>
    register: UseFormRegister<FieldValues>
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  width,
}) => (
  <Width width={width}>
    <Label htmlFor={name}>{label}</Label>
    <Input
      defaultValue={defaultValue}
      id={name}
      type={'number'}
      {...register(name, { required: requiredFromProps })}
    />
    {requiredFromProps && errors[name] && <Error />}
  </Width>
)
