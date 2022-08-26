import React, { ChangeEvent, useState } from 'react'

const EventsExample = () => {

   const [value, setValue] = useState<string>('');

   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   }
   const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(value);
      setValue('');
   }

   return (
      <div>
         <input
            type='text'
            value={value}
            onChange={changeHandler}
         />
         <button onClick={clickHandler}>Click</button>
      </div>
   )
}

export default EventsExample