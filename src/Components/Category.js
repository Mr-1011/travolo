import React from 'react'
import '../Styling/Category.css';
import Navbar from './Navbar';
import Topic from './Topic';
import { Link } from "react-router-dom";
import Pic from '../Data/help/Category-Tutorial.png'
import categoryData from '../Data/categoryData';

export default function Category() {
  return (
    <main>
      <Navbar title={'just choose'} desc={'just click your way through personas and categories you like'} pic={Pic} />

      {categoryData.map(category => (
        <Topic
          title={category.title}
          description={category.description}
          svg={category.svg}
          subTopic1={category.subTopic1}
          subTopic2={category.subTopic2}
          subTopic3={category.subTopic3}
          subTopic4={category.subTopic4}
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
