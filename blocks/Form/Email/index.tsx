import React from 'react'
import { Error } from '@/blocks/Form/Error'
import { Width } from '@/blocks/Form/Width'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { EmailField } from '@payloadcms/plugin-form-builder/types'
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

export const Email: React.FC<
  EmailField & {
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
      type={'text'}
      {...register(name, {
        pattern: /^\S[^\s@]*@\S+$/,
        required: requiredFromProps,
      })}
    />

    {requiredFromProps && errors[name] && <Error />}
  </Width>
)
