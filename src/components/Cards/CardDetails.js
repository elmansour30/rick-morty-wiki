import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchData] = useState([]);
  let { name, image, location, origin, gender, species, status, type } =
    fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <div className='container d-flex justify-content-center'>
      <div className='d-flex flex-column gap-3'>
        <h1 className='text-center'>{name}</h1>
        <img src={image} alt='' className='img-fluid' />
        {(() => {
          if (status === 'Dead') {
            return <div className='badge bg-danger fs-5'>{status}</div>;
          } else if (status === 'Alive') {
            return <div className='badge bg-success fs-5'>{status}</div>;
          } else {
            return <div className='badge bg-secondary fs-5'>{status}</div>;
          }
        })()}

        <div className='content'>
          <div className=''>
            <div className='span fw-bold'>Gender :{gender}</div>
          </div>
          <div className=''>
            <div className='span fw-bold'>Species :{species}</div>
          </div>
          <div className=''>
            <div className='span fw-bold'>
              Type :{type === '' ? 'Uknown' : type}
            </div>
          </div>
          <div className=''>
            <div className='span fw-bold'>Gender :{gender}</div>
          </div>
          <div className=''>
            <div className='span fw-bold'>Location :{location?.name}</div>
          </div>
          <div className=''>
            <div className='span fw-bold'>Origin :{origin?.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
