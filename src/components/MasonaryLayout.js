import React from 'react'
import Masonry from 'react-masonry-css'

import './masonry.css'

const breakpointObj2 = {
  default: 4,
  3000: 5,
  2000: 4,
  1100: 3,
  700: 2,
  500: 1
};

const MasonryLayout = ({ imgs }) => {
  return (
    <div>
      <Masonry breakpointCols={breakpointObj2}
        className="my-masonry-grid d-flex"
        columnClassName="my-masonry-grid_column">
        {imgs?.map((img, ind) => {
          return (
            <div key={ind}>
              <img src={img} alt="" />
            </div>
          )
        })}
      </Masonry>
    </div>
  )
}

export default MasonryLayout
