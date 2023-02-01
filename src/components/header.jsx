import React from 'react'



function Header() {

    function keyPressed(e){
        console.log(e);
    }

  return (
    <header>
      <div className="player__header">
        <input
          type="text"
          id="search-bar"
          placeholder="Search song"
          defaultValue=""         
        //   onKeyDown="keyPressed()"
        />
        <select name="searchtype" id="searchtype" defaultValue={'all'}>
          <option value="artist">by artist</option>
          <option value="all" >normal</option>
        </select> 
        </div>     
    </header>
  )
}

export default Header;