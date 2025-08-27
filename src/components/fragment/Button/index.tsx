import type React from "react"

type ButtonProps = {
  id?: string
  type?: "button" | "submit" | "reset"
  variant: "default" | "btn-primary" | "btn-secondary" | "btn-tertiary" | "btn-quaternary"
  className: string
  children: React.ReactNode
  onClick?: () => void
}


const Button = (props: ButtonProps) => {
  const { id, type, variant, className, children, onClick } = props

  return (
    <button
      id={id}
      type={type}
      className={`${className} ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;