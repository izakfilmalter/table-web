import React from 'react'
import { Error } from '@/blocks/Form/Error'
import { Width } from '@/blocks/Form/Width'
import { Checkbox as CheckboxUi } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import type { CheckboxField } from '@payloadcms/plugin-form-builder/types'
import type {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

export const Checkbox: React.FC<
  CheckboxField & {
    errors: Partial<FieldErrorsImpl<Record<string, unknown>>>
    getValues: unknown
    register: UseFormRegister<FieldValues>
    setValue: unknown
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
    <div className={'flex items-center gap-2'}>
      <CheckboxUi
        defaultChecked={defaultValue}
        id={name}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        {...register(name, { required: requiredFromProps })}
      />
      <Label htmlFor={name}>{label}</Label>
    </div>
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
    {requiredFromProps && errors[name] && <Error />}
  </Width>
)
