import React from 'react'
import '../Styling/Category.css';
import Navbar from './Navbar';
import Topic from './Topic';
import { Link } from "react-router-dom";
import Pic from '../Data/help/Category-Tutorial.png'
import categoryData from '../Data/categoryData';
import { useTranslation } from 'react-i18next';

export default function Category() {
  const { t } = useTranslation();
  return (
    <main>
      <Navbar title={'just choose'} desc={t('categoryTutorial')} pic={Pic} />
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
            {t('NEXT')}
          </button>
        </Link>
      </div>
    </main>
  )
}
