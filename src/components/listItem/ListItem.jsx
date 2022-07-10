import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import "./listItem.scss"

const ListItem = () => {
  return (
    <div className='listItem'>
        <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
        <div className="itemInfo">
            <div className="icons">
                <PlayArrow/>
                <Add/>
                <ThumbUpAltOutlined/>
                <ThumbDownOutlined/>
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className='limit'>+16</span>
                <span>1999</span>
            </div>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic odit ipsum quam voluptates. Recusandae facere laborum nobis tempore libero omnis voluptate dolore, a reprehenderit quaerat! Explicabo molestiae iste tempore.</div>
            <div className="genre">Action</div>
        </div>
    </div>
  )
}

export default ListItem