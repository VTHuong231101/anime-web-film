import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Products from './Products';
import './ContentHome.css';
import bannerApi from '../api/bannerApi';
import TopView from './TopView';
import NewComments from './NewComments';
import CommentBlock from './CommentBlock';

ContentHome.propTypes = {

};

function ContentHome({ trendings, populars, updates, liveActions }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function bannerAnimes() {
            const bannerList = await bannerApi.getAll();
            setData(bannerList.data);
        };
        bannerAnimes();
    }, []);


    return (
        <div>
            <div className='products__list container'>
                <div className='row'>
                    <div className='col-8'>
                        <Products title='trending now' data={trendings} modifier='view all' />
                        <Products title='popular animes' data={populars} modifier='view all' />
                        <Products title='recently updates' data={updates} modifier='view all' />
                        <Products title='live action' data={liveActions} modifier='view all' />
                    </div>
                    <div className='col-4'>
                        <TopView data={data} title='Top view' filter="true" />
                        <NewComments />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ContentHome;