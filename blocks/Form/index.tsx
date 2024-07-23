'use client'

import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { buildInitialFormState } from '@/blocks/Form/buildInitialFormState'
import { fields } from '@/blocks/Form/fields'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { env } from '@/env.mjs'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'
import { useForm } from 'react-hook-form'

export type Value = unknown

export type Property = Record<string, Value>

export type Data = Record<string, Property | Array<Property>>

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: Array<Record<string, unknown>>
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: {
      id: formID,
      confirmationMessage,
      confirmationType,
      redirect,
      submitButtonLabel,
    } = {},
    introContent,
  } = props

  const formMethods = useForm({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    defaultValues: buildInitialFormState(formFromProps.fields),
  })

  const {
    control,
    formState: { errors },
    // getValues,
    handleSubmit,
    register,
    // setValue,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<
    { message: string; status?: string } | undefined
  >()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: Data) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(
            `${env.NEXT_PUBLIC_PAYLOAD_URL}/api/form-submissions`,
            {
              body: JSON.stringify({
                form: formID,
                submissionData: dataToSend,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
            },
          )

          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
              message: res.errors?.[0]?.message || 'Internal Server Error',
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <div className={'container max-w-[48rem] pb-20'}>
      {enableIntro && introContent && !hasSubmitted && (
        <RichText
          className={'mb-8'}
          content={introContent}
          enableGutter={false}
        />
      )}
      {!isLoading && hasSubmitted && confirmationType === 'message' && (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <RichText content={confirmationMessage} />
      )}
      {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
      {error && <div>{`${error.status ?? '500'}: ${error.message || ''}`}</div>}
      {!hasSubmitted && (
        <form
          id={formID}
          /* eslint-disable @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          onSubmit={handleSubmit(onSubmit)}
          /* eslint-enable @typescript-eslint/ban-ts-comment */
        >
          <div className={'mb-4 last:mb-0'}>
            {formFromProps.fields.map((field, index) => {
              /* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/ban-ts-comment */
              // @ts-ignore
              const Field: React.FC<unknown> = fields[field.blockType]
              /* eslint-enable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/ban-ts-comment */
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              if (Field) {
                return (
                  <div className={'mb-6 last:mb-0'} key={index}>
                    <Field
                      form={formFromProps}
                      {...field}
                      {...formMethods}
                      /* eslint-disable @typescript-eslint/ban-ts-comment */
                      // @ts-ignore
                      control={control}
                      errors={errors}
                      register={register}
                      /* eslint-enable @typescript-eslint/ban-ts-comment */
                    />
                  </div>
                )
              }
              return null
            })}
          </div>

          <Button form={formID} type={'submit'} variant={'default'}>
            {submitButtonLabel}
          </Button>
        </form>
      )}
    </div>
  )
}
