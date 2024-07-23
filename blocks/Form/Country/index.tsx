import React from 'react'
import { countryOptions } from '@/blocks/Form/Country/options'
import { Error } from '@/blocks/Form/Error'
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

export const Country: React.FC<
  CountryField & {
    control: Control<FieldValues, unknown>
    errors: Partial<FieldErrorsImpl<Record<string, unknown>>>
  }
> = ({ name, control, errors, label, required, width }) => (
  <Width width={width}>
    <Label className={''} htmlFor={name}>
      {label}
    </Label>
    <Controller
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      control={control}
      defaultValue={''}
      name={name}
      render={({ field: { onChange, value } }) => {
        const controlledValue = countryOptions.find((t) => t.value === value)

        return (
          <Select
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
            onValueChange={(val) => onChange(val)}
            value={controlledValue?.value}
          >
            <SelectTrigger className={'w-full'} id={name}>
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
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
    {}
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
    {required && errors[name] && <Error />}
  </Width>
)
