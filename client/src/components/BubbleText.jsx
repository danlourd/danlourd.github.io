import React from 'react';
import PropTypes from 'prop-types';

import { getUSCurrency, getUSNumberFormat } from '../utils';

function BubbleText({ donation, goal }) {
  const isLowerThanGoal = donation < goal;
  return (
    <div className="bubbleText">
      <div className="bubbleText__text w-100 py-2 px-3 rounded">
        <sup className="font-weight-bold">$</sup>
        <span className="font-weight-bold mr-1">{getUSNumberFormat(isLowerThanGoal ? goal - donation : donation)}</span>
        <span>
          {isLowerThanGoal
            ? 'still needed to fund this project'
            : `raised of ${getUSCurrency(goal)}`
          }
        </span>
      </div>
      <div className="bubbleText__arrowBottom" />
    </div>
  );
}

BubbleText.propTypes = {
  donation: PropTypes.number,
  goal: PropTypes.number,
}

export default BubbleText;
