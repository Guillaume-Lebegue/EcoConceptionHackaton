import React from 'react'

import './ChefDescription.css';

export default function ChefDescription() {
  return (
    <div className="chef-parent">
      <div className='chef-box'>
        <div className="">
          <div className="description">
            <h1 className='title'>Le chef</h1>
            <p>Philippe Lugnac s'amuse autant à inventer qu'à réinventer, faire briller le répertoire classique parisen, visiter de nouvelles terres avec attention et donner de l'éclat aux soirées festives qui se prolongent.</p>
            <div className="description-picture">
              <picture className='contain'>
                <source media="(min-width: 1920px)" srcSet={process.env.PUBLIC_URL + "/chef/le-chef-1-745.jpg"} />
                <source media="(min-width: 1280px)" srcSet={process.env.PUBLIC_URL + "/chef/le-chef-1-497.jpg"} />
                <img loading='lazy' src={process.env.PUBLIC_URL + "/chef/le-chef-1-331.jpg"} alt="Chef making a cake" />
              </picture>
            </div>
          </div>
        </div>
        <div className="">
          <picture>
            <source media="(min-width: 1920px)" srcSet={process.env.PUBLIC_URL + "/chef/le-chef-2-752.jpg"} />
            <source media="(min-width: 1280px)" srcSet={process.env.PUBLIC_URL + "/chef/le-chef-2-501.jpg"} />
            <img loading='lazy' src={process.env.PUBLIC_URL + "/chef/le-chef-1-334.jpg"} alt="Chef making a cake" />
          </picture>
        </div>
      </div>
    </div>
  )
}
