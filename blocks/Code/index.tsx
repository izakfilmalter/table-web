import React from 'react'

import { Code } from './Code.client'

export type CodeBlockProps = {
  code: string
  language?: string
  blockType: 'code'
}

type Props = CodeBlockProps & {
  className?: string
}

export const CodeBlock: React.FC<Props> = ({ className, code, language }) => (
  <div className={[className, 'not-prose'].filter(Boolean).join(' ')}>
    <Code code={code} language={language} />
  </div>
)
