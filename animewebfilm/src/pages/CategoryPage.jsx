import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DirectLink from '../components/DirectLink';
import Products from '../components/Products';
import romanceApi from '../api/romanceApi';
import Pagination from '../components/Pagination';
import TopView from './../components/TopView';
import bannerApi from '../api/bannerApi';
import NewComments from '../components/NewComments';

CategoryPage.propTypes = {

};

function CategoryPage(props) {
  const [romance, setRomance] = useState([]);
  useEffect(() => {
    async function liveActionAnimes() {
      const liveActionList = await romanceApi.getAll();
      setRomance(liveActionList.data.at(0).romance);
    };
    liveActionAnimes();
  }, []);

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
      <DirectLink />

      <div className='row'>
        <div className='col-8'>
          <Products title='Romance' data={romance} modifier='order by' />
          <Pagination />
        </div>
        <div className='col-4'>
          <TopView data={data} />
          <NewComments />
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;