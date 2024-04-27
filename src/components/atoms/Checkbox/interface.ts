import { ReactNode } from 'react'

export interface CheckboxProps {
  value: string
  onChange: () => void
  checked: boolean
  children: ReactNode
}
