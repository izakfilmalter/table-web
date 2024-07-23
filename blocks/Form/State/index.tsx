import React from 'react'
import { Error } from '@/blocks/Form/Error'
import { stateOptions } from '@/blocks/Form/State/options'
import { Width } from '@/blocks/Form/Width'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { StateField } from '@payloadcms/plugin-form-builder/types'
import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
} from 'react-hook-form'

export const State: React.FC<
  StateField & {
    control: Control<FieldValues, unknown>
    errors: Partial<FieldErrorsImpl<Record<string, unknown>>>
  }
> = ({ name, control, errors, label, required, width }) => (
  <Width width={width}>
    <Label htmlFor={name}>{label}</Label>
    <Controller
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      control={control}
      defaultValue={''}
      name={name}
      render={({ field: { onChange, value } }) => {
        const controlledValue = stateOptions.find((t) => t.value === value)

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
              {stateOptions.map(({ label, value }) => (
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
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
    {required && errors[name] && <Error />}
  </Width>
)
