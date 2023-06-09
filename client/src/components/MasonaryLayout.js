import React from 'react'
import Masonry from 'react-masonry-css'

import './masonry.css'
import SingleImg from './SingleImg';
import useGlobalContext from '../context';

const breakpointObj2 = {
  default: 4,
  3000: 5,
  2000: 4,
  1100: 3,
  700: 2,
  500: 1
};

const MasonryLayout = ({ images }) => {

  const { searchTerm } = useGlobalContext()
  let imageToView = searchTerm
    ? images?.filter(img => img.label.toLowerCase().match(searchTerm.toLowerCase()))
    : images

  return (
    <div>
      <Masonry breakpointCols={breakpointObj2}
        className="my-masonry-grid d-flex"
        columnClassName="my-masonry-grid_column">
        {imageToView?.map(img => {
          return (
            <SingleImg key={img._id} img={img} />
          )
        })}
      </Masonry>
    </div>
  )
}

export default MasonryLayout
