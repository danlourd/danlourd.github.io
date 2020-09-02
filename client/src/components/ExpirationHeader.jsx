import React from 'react';
import PropTypes from 'prop-types';

const DAYS_IN_MS = 1000 * 60 * 60 * 24;

function ExpirationHeader({ expirationDate }) {
  const diffInMs = expirationDate - Date.now();
  const diffDays = Math.ceil(diffInMs / DAYS_IN_MS);
  const daysLeftText = diffDays > 1 ? `${diffDays} days` : 'a day';
  return (
      <h4 className="expirationHeader mb-3">
        { diffInMs >= 0
          ? `Only ${daysLeftText} left to fund this project`
          : 'Project has ended'
        }
      </h4>
  );
}

ExpirationHeader.propTypes = {
  expirationDate: PropTypes.instanceOf(Date),
}

export default ExpirationHeader;
