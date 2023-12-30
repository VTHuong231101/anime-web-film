import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Comment from '../components/Comment';
import TopView from '../components/TopView';
import bannerApi from '../api/bannerApi';
import Detail from '../components/Detail';
import DirectLink from '../components/DirectLink';


DetailPage.propTypes = {

};

function DetailPage(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function bannerAnimes() {
      const bannerList = await bannerApi.getAll();
      setData(bannerList.data);
    };
    bannerAnimes();
  }, []);
  return (
    <div className='container'>
      <DirectLink endpoint="Kimetsu No Yaiba" />
      <Detail />
      <div className='row mt-5'>
        <div className='col-lg-9 movie__cmt-block'>
          <h5 className='movie__cmts text-white text-uppercase'>Comments</h5>
          <Comment
            avt="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
            time="Dec 01, 2023"
            name="Alice"
            comment="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"
            level="1"
          />
          <Comment
            avt="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
            time="Dec 01, 2023"
            name="Alice"
            comment="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"
            level="1"
          />
          <Comment
            avt="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
            time="Dec 01, 2023"
            name="Alice"
            comment="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"
            level="2"
          />
          <Comment
            avt="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"
            time="Dec 01, 2023"
            name="Alice"
            comment="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"
            level="1"
          />
          <h5 className='movie__add-cmt text-white text-uppercase position-relative'>Your comment</h5>
          <textarea
            className='w-100 rounded pl-2 pt-2 my-3'
            placeholder='Your Comment...'>
          </textarea>
          <button className='text-uppercase rounded text-white'>comment</button>
        </div>

        <div className='col-lg-3'>
          <TopView data={data} title="You might like..." />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;