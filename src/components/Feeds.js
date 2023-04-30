import Card from './Card';
import { fetchFeeds } from '../features/feedSlice';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Feeds = () => {

  const dispatch = useDispatch();
  const [ page, setPage ] = useState(1);
  const feeds = useSelector((state) => state.feed.feeds);
  const loading = useSelector((state) => state.feed.loading);

  const fetchData = async () => {
    if(page <= 4){
      await dispatch(fetchFeeds(page));
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="min-h-full bg-white w-9/12 m-auto flex flex-column flex-wrap justify-center">
      {
        feeds && feeds.length > 0 ? 
        feeds.map((feed, i) => {
          return (
            <Card key={i} feed={feed}/>
          )
        }): null
      }
      {loading ? <div>Loading...</div> : null}
    </div>
  );
};

export default Feeds;