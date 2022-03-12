import React from "react";
import { Link } from "react-router-dom";
import style from './Cards.module.scss'

const Card = ({ results, page }) => {
  console.log(results);
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <Link to={`${page}${id}`} 
        key={id} className="col-12 col-md-6 col-lg-4 mb-4 position-relative text-dark"
        style={{textDecoration: "none"}} >
          <div className={`${style.card} d-flex flex-column justify-content-center`}>
            <img src={image} alt="" className={`${style.img} img-fluid`} />
            <div className={style.content}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className=''>
                <div className="fs-5">Last location</div>
                <div className="">{location.name}</div>
              </div>
            </div>
          </div>
          {(()=>{
            if(status === 'Dead')  {
              return <div className={`${style.badge} position-absolute badge bg-danger`}>{status}</div>
            }
            else if (status === 'Alive'){
              return <div className={`${style.badge} position-absolute badge bg-success`}>{status}</div>
            }
            else {
              return <div className={`${style.badge} position-absolute badge bg-secondary`}>{status}</div>
            }
          })()}
          
        </Link>
      );
    });
  } else {
    display = `Bad Luck: No character has been found ! Try again. `;
  }
  return <>{display}</>;
};

export default Card;
