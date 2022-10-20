import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <>
        <div className="top-block">
          <div className="banner-text">
            {this.props.children}GALLERY
          </div>
        </div>
      </>
    )
  }
}
export default Header;