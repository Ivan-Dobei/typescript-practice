import React, { FC, useState } from 'react'

export enum CardVariant {
   primary = 'primary',
   outlined = 'outlined'
}

interface CardProps {
   width: string,
   height: string,
   children: React.ReactChild | React.ReactNode,
   variant: CardVariant,
}

const Card: FC<CardProps> = ({
   width,
   height,
   children,
   variant,
}) => {

   const [state, setState] = useState(0);

   return (
      <div style={{
         width,
         height,
         border: variant === CardVariant.outlined ? '1px solid black' : 'none',
         background: variant === CardVariant.primary ? 'silver' : ''
      }}
      >
         {children}
      </div>
   )
}

export default Card