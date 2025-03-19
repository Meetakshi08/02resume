import React from 'react'
import { Link } from 'react-router-dom'

function Button({value,to}) {
  return (
    <>
    <Link to={to}>
    <button className='bg-gray-500 text-white'>{value}</button>
    </Link>
    </>
    )
}

export default Button