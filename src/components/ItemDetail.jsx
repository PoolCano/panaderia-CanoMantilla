import React from 'react'

const ItemDetail = ({data}) => {
  return (
    <div>
      <div>
        <img src={data.thumbnail} alt="" />
        <div>
            <h1>{data.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail
