import React from 'react'
import { Width } from '@/blocks/Form/Width'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { CountryField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { countryOptions } from './options'

export const Country: React.FC<
  CountryField & {
    control: Control<FieldValues, any>
    errors: Partial<FieldErrorsImpl<Record<string, any>>>
  }
> = ({ name, control, errors, label, required, width }) => (
  <Width width={width}>
    <Label className={''} htmlFor={name}>
      {label}
    </Label>
    <Controller
      control={control}
      defaultValue={''}
      name={name}
      render={({ field: { onChange, value } }) => {
        const controlledValue = countryOptions.find((t) => t.value === value)

        return (
          <Select
            onValueChange={(val) => onChange(val)}
            value={controlledValue?.value}
          >
            <SelectTrigger className={'w-full'} id={name}>
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {countryOptions.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      }}
      rules={{ required }}
    />
    {required && errors[name] && <Error />}
  </Width>
)
