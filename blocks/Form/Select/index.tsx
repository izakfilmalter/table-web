import React from 'react'
import { Error } from '@/blocks/Form/Error'
import { Width } from '@/blocks/Form/Width'
import { Label } from '@/components/ui/label'
import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { SelectField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'

export const Select: React.FC<
  SelectField & {
    control: Control<FieldValues, unknown>
    errors: Partial<FieldErrorsImpl<Record<string, unknown>>>
  }
> = ({ name, control, errors, label, options, required, width }) => (
  <Width width={width}>
    <Label htmlFor={name}>{label}</Label>
    <Controller
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      control={control}
      defaultValue={''}
      name={name}
      render={({ field: { onChange, value } }) => {
        const controlledValue = options.find((t) => t.value === value)

        return (
          <SelectComponent
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
            onValueChange={(val) => onChange(val)}
            value={controlledValue?.value}
          >
            <SelectTrigger className={'w-full'} id={name}>
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
              {options.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectComponent>
        )
      }}
      rules={{ required }}
    />
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
    {required && errors[name] && <Error />}
  </Width>
)
