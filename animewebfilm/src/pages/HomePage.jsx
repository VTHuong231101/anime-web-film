import React, { useState, useEffect } from 'react';
import Slide from '../components/Slide';
import ContentHome from '../components/ContentHome';
import trendingApi from '../api/trendingApi';
import popularApi from '../api/popularApi';
import updateApi from '../api/updateApi';
import liveactionApi from '../api/liveactionApi';

HomePage.propTypes = {

};

function HomePage(props) {
  const [trendings, setTrendings] = useState([]);
  useEffect(() => {
    async function trendingAnimes() {
      const trendingList = await trendingApi.getAll();
      setTrendings(trendingList.data.at(0).trendings);
    };
    trendingAnimes();
  }, []);

  const [populars, setPopulars] = useState([]);
  useEffect(() => {
    async function popularAnimes() {
      const popularList = await popularApi.getAll();
      setPopulars(popularList.data.at(0).populars);
    };
    popularAnimes();
  }, []);

  const [updates, setUpdates] = useState([]);
  useEffect(() => {
    async function updateAnimes() {
      const updateList = await updateApi.getAll();
      setUpdates(updateList.data.at(0).updates);
    };
    updateAnimes();
  }, []);


  const [liveactions, setLiveActions] = useState([]);
  useEffect(() => {
    async function liveActionAnimes() {
      const liveActionList = await liveactionApi.getAll();
      setLiveActions(liveActionList.data.at(0).liveAction);
    };
    liveActionAnimes();
  }, []);

  const trendingsForHomePage = trendings.slice(0, 6);
  const popularsForHomePage = populars.slice(0, 6);
  const updatesForHomePage = updates.slice(0, 6);
  const liveactionsForHomePage = liveactions.slice(0, 6);
  return (
    <div>
      <Slide />
      <ContentHome
        trendings={trendingsForHomePage}
        populars={popularsForHomePage}
        updates={updatesForHomePage}
        liveActions={liveactionsForHomePage}
      />
    </div>
  );
}

export default HomePage;