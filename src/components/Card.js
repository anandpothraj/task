import React from 'react';
import rewardImg from '../assets/icons/icon-won.png';
import starIcon from '../assets/icons/icon_star.png';
import defaultImg from '../assets/images/defaultCardImg.jpg';
import notBookMarked from '../assets/icons/icon_bookmark_off.png';
import alreadyBookMarked from '../assets/icons/icon_bookmark_on.png';

const Card = ({feed}) => {

  console.log(feed);
  return (
    <div className="m-3 w-80 rounded-xl">
      <div className='relative'>
        <div className='absolute flex rounded m-0 w-7 h-7 opacity-40' style={{backgroundColor: "#323438",top:"10px", left:"275px"}}>
          <img className="m-auto" src={feed.bookmark ? alreadyBookMarked : notBookMarked} alt="Book Mark"/>
        </div>
        <img className="w-full rounded-t-xl" src={ feed.image ? feed.image : defaultImg } alt="CoverImage"/>
      </div>
      <div className='rounded-b-xl' style={{border: "1px solid #E5E6E9", borderTop:"none"}}>
      <div className="px-6 py-4">
        <div>
          <h1 className="font-bold mb-2 text-xl">{feed.title.slice(0, 14)}{feed.title.length > 14 && "..."}</h1>
          <p className="text-gray-700 text-xs font-normal text-gray02">{feed.skills.slice(0,3).map((skill)=>skill+" ,")}...</p>
        </div>
        <hr className="w-11/12 mx-auto my-2 h-px bg-gray03 opacity-40"/>
        <div>
          <div className='flex flex-row'>
            <div className='border rounded border-gray03 my-auto mx-1'>
              <img src={feed.company.logo} alt="company logo" className='rounded w-6 h-6'/>
            </div>
            <h2 className='font-bold text-sm text-gray01 font-sans my-auto mx-1' >{feed.company.name}</h2>
            <img src={starIcon} alt="star icon" className='w-4 h-4 my-auto mx-1'/>
            <h2 className='font-bold text-sm text-gray01 my-auto mx-1'>3.7</h2>
            <p className='font-normal text-sm my-auto mx-1 text-gray02'>(196)</p>
          </div>
          <p className='my-2 font-normal text-gray02 text-sm'>{feed.appeal}</p>
        </div>
        <hr className="w-11/12 mx-auto my-2 h-px bg-gray03 opacity-40"/>
        <div className='flex flex-row'>
          <img src={rewardImg} alt="reward" className='w-4 h-4 my-auto mx-3'/>
          <h3 className='font-bold text-sm text-gray01'>취업 축하금: {feed.reward}원</h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Card;