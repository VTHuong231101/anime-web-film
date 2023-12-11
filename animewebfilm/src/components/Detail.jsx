import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DirectLink from './DirectLink';
import { useParams } from 'react-router-dom';
import romanceApi from '../api/romanceApi';


Detail.propTypes = {

};

function Detail(props) {
  const param = useParams();
  const [movie, setMovie] = useState({})
  useEffect(() => {
    async function getMovie() {
      const liveActionList = await romanceApi.get(1);
      console.log(liveActionList)
      setMovie(liveActionList.data.at(0).romance);
    };
    getMovie();
  }, []);
  return (
    <div className='container'>
      <DirectLink />

    </div>
  );
}

export default Detail;