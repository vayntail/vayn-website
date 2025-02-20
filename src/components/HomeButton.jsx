import React from 'react'

const HomeButton = (props) => {
  return (
    <div className='w-fit text-center'>
        <img className="w-16" src={props.url}/>
        <p>{props.title}</p>
    </div>
  )
}

export default HomeButton