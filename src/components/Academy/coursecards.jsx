import React from 'react';
import AcademyCard from './card';
import './academy.css'

function CourseCardSet(props) {

  let cardData = props.cardData;
  let cardItems = [];

  for (let k in cardData) {
    if (cardData[k].isCourse) {
      cardItems.push(
        <div class="col col--4">
          <AcademyCard 
            title={cardData[k].courseId + ". " + cardData[k].title} 
            body={cardData[k].body} 
            buttonType={cardData[k].buttonType}
            badgeType={cardData[k].badgeType}
          />
        </div>
      )
    }
  };

  return (<div class="row __academy_cardgroup">{cardItems}</div>)
}

export default CourseCardSet;
