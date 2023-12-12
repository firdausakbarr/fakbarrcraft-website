import React from 'react'

type ContainerProps = {
	children: React.ReactNode;
  className?:string;
}

const Container = ({className,children}:ContainerProps) => {
  return (
    <section className={`container p-4 ${className}`}>
      {children}
    </section>
  )
}

export default Container
