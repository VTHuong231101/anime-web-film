import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import './Detail.css';


Detail.propTypes = {

};

function Detail(props) {
  const [follow, setFollow] = useState(false);



  return (
    <div className='container'>
      <div className='row text-white'>
        <img
          className='col-lg-3 rounded'
          src='https://gamek.mediacdn.vn/133514250583805952/2021/7/14/hua1-162623618740924521628.jpg'
          alt='' />

        <div className='col-lg-9'>
          <h2 className='fw-bold'>Kimetsu No Yaiba</h2>
          <p className='text-muted'>フェイト／ステイナイト, Feito/sutei naito</p>
          <p className='movie__descript text-muted'>
            Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina's mother, her total drops to 0 and she's pulled into the Abyss, never to be seen again. But her mother's last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!
          </p>
          <div className='row'>
            <ul className='movie__attribute font-monospace col-lg-2 text-muted'>
              <li className=''>Type:</li>
              <li className=''>Studios:</li>
              <li className=''>Date aired:</li>
              <li className=''>Status:</li>
              <li className=''>Genre:</li>
            </ul>
            <ul className='attribute font-monospace col-lg-4'>
              <li className=''>TV Series</li>
              <li className=''>Lerche</li>
              <li className=''>Oct 02, 2019 to ?</li>
              <li className=''>Airing</li>
              <li className=''>Action, Adventure, Fantasy, Magic</li>
            </ul>
            <ul className='movie__attribute font-monospace col-lg-2 text-muted'>
              <li className=''>Score:</li>
              <li className=''>Rating:</li>
              <li className=''>Duration:</li>
              <li className=''>Quality:</li>
              <li className=''>Views:</li>
            </ul>
            <ul className='attribute font-monospace col-lg-4'>
              <li className=''>7.31 / 1,515</li>
              <li className=''>8.5 / 161 times</li>
              <li className=''>24 mins/ep</li>
              <li className=''>HD</li>
              <li className=''>131,541</li>
            </ul>
          </div>
          <div className='movie__action row'>
            <button
              className='movie__follow'
              onClick={() => setFollow(!follow)}
              style={follow ? { backgroundColor: "var(--primary-color)" } : {}}
            >
              {follow ?
                <i
                  className="fa-solid fa-heart"
                >
                </i> : <i className="fa-regular fa-heart"></i>}
              <span>{follow ? "Followed" : "Follow"}</span>
            </button>
            <button
              className='movie__watch'
            >
              <span>Watch</span>
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Detail;