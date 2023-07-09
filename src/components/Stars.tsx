import React from 'react'
import Star from './Star';

const Stars: React.FC<IStarsProps> = ({ count }) => {
  const lengthArray = count > 0 && count <= 5 ? count : 0;
  const countArr = Array(lengthArray).fill('_');
  
  return (
    <ul className='stars'>
      {
        countArr.map(_ => 
          <li className='star'><Star /></li>
        )
      }
    </ul>
  )
}

export default Stars

interface IStarsProps {
  count: number
}