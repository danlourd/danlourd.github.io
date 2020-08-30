import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';

import ExpirationHeader from './ExpirationHeader';
import DonationInputGroup from './DonationInputGroup';

function DonationForm({ donation, numberOfDonor, goal, endDate }) {
  return (
    <Form className="donationForm card shadow">
      <ProgressBar className="donationForm__progress" now={donation} max={goal} />
      <div className="p-3 p-sm-5">
        <ExpirationHeader expirationDate={endDate} />
        <p className="text-black-50 mb-4">
          Join the <span className="font-weight-bold donationForm__numberOfDonor">{numberOfDonor}</span> other donors who have already supported this project.
        </p>
        <DonationInputGroup />
      </div>
    </Form>
  );
}

DonationForm.propTypes = {
  donation: PropTypes.number,
  numberOfGoal: PropTypes.number,
  goal: PropTypes.number,
  endDate: PropTypes.instanceOf(Date),
}

export default DonationForm;
