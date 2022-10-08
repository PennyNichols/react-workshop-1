import React from 'react';

const Header = (props) => {
  return (
    <div style={{backgroundColor:props.bg}}>
        <h1>{props.title}</h1>
    </div>
  )
}

export default Header