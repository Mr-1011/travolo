import React from 'react'
import '../Styling/Category.css';
import Navbar from './Navbar';
import Topic from './Topic';
import { Link } from "react-router-dom";
import Pic from '../Data/help/Category-Tutorial.png'
import categoryDataEN from '../Data/categoryDataEN';
import categoryDataDE from '../Data/categoryDataDE';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export default function Category() {
  const { t } = useTranslation();
  return (
    <main>
      <Navbar title={'just choose'} desc={t('categoryTutorial')} pic={Pic} />

      {i18next.language === 'en' ?
        categoryDataEN.map(category => (
          <Topic
            key={category.id}
            title={category.title}
            description={category.description}
            svg={category.svg}
            subTopic1={category.subTopic1}
            subTopic2={category.subTopic2}
            subTopic3={category.subTopic3}
            subTopic4={category.subTopic4}
            subTopic5={category.subTopic5}
            subTopic6={category.subTopic6}
            subTopic7={category.subTopic7}
            subTopic8={category.subTopic8}
          />
        ))
        :
        categoryDataDE.map(category => (
          <Topic
            key={category.id}
            title={category.title}
            description={category.description}
            svg={category.svg}
            subTopic1={category.subTopic1}
            subTopic2={category.subTopic2}
            subTopic3={category.subTopic3}
            subTopic4={category.subTopic4}
            subTopic5={category.subTopic5}
            subTopic6={category.subTopic6}
            subTopic7={category.subTopic7}
            subTopic8={category.subTopic8}
          />
        ))
      }
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
