import React from 'react'
import '../Styling/Category.css';
import Navbar from './Navbar';
import TopicRight from './TopicRight';
import TopicLeft from './TopicLeft';
import { Link } from "react-router-dom";
import Pic from '../Data/help/Category-Tutorial.png'
import categoryData from '../Data/categoryData';

import Nature from '../Data/svg/Nature.svg'

export default function Category() {
  return (
    <main>
      <Navbar title={'just choose'} desc={'just pic topics that you like'} pic={Pic} />

      {categoryData.map(cat => (
        <TopicRight
          title={cat.title}
          description={cat.description}
          svg={cat.svg}
          subTopic1={cat.subTopic1}
          subTopic2={cat.subTopic2}
          subTopic3={cat.subTopic3}
          subTopic4={cat.subTopic4}
        />
      ))}

      <div className='next__div'>
        <Link to='/sliders' className='next__link'>
          <button className='button__next' onClick={() => window.scrollTo({ top: 0 })}>
            NEXT
          </button>
        </Link>
      </div>
    </main>
  )
}
