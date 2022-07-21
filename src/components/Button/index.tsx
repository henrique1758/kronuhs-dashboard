import { ButtonHTMLAttributes } from 'react'

import { Button } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

function ButtonComponent({ title, ...rest }: ButtonProps) {
  return <Button {...rest}>{title}</Button>
}

export { ButtonComponent as Button }
