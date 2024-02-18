import React from 'react'

export const CartToggleAmount = ({amount , setIncrease , setDecrease}) => {
  return (
    <div className="carttogglemount">
      <div className="amount flex gap-6 text-2xl">
        <button onClick={() => setDecrease()}>-</button >
        <div>{amount}</div>
        <button onClick={() => setIncrease()}>+</button>
      </div>
    </div>
  )
}


