import React from 'react';
import PropTypes from 'prop-types';

function BubbleText({ donation, goal }) {
  return (
    <div className="bubbleText">
      <div className="bubbleText__text w-100 py-2 px-3 rounded">
        <sup className="font-weight-bold">$</sup>
        <span className="font-weight-bold mr-1">{new Intl.NumberFormat('en-US').format(donation < goal ? goal - donation : donation)}</span>
        <span className="font-weight-lighter">
          {donation < goal
            ? 'still needed to fund this project'
            : `raised of ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(goal)}`
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
