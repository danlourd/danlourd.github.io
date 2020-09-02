import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { toast } from 'react-toastify';

import { getUSCurrency } from '../utils';

const MIN_DONATION = 5;
const MAX_DONATION = 500000;

function DonationInputGroup({ endDate, onDonate }) {
  const projectEnded = Date.now() > endDate;

  const [donation, setDonation] = useState('')
  const [invalid, setInvalid] = useState(false)

  const handleInputChange = (e) => {
    if (e.target.value === '') {
      setDonation('');
      setInvalid(false);
    } else {
      const amount = parseInt(e.target.value);
      if (!isNaN(amount)) {
        setDonation(amount);
        setInvalid(false);
      }
    }
  }

  const handleDonated = () => {
    if (onDonate && !projectEnded) {
      if (donation >= MIN_DONATION && donation <= MAX_DONATION) {
        onDonate(donation);
        setInvalid(false);
        toast.success(`You donated ${getUSCurrency(donation)}`);
        setDonation('');
      }
      else {
        setInvalid(true);
      }
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleDonated();
    }
  }

  return (
    <InputGroup className="donationInputGroup">
      <span className="position-absolute text-black-50 donationInputGroup__dollarSign">$</span>
      <Form.Label className="donationInputGroup__label invisible" id="donationLabel">Enter amount</Form.Label>
      <Form.Control
        type="text"
        aria-labelledby="donationLabel"
        className={`donationInputGroup__input font-weight-bolder pl-4 ${invalid ? 'is-invalid' : ''}`}
        onChange={handleInputChange}  
        value={donation}
        onKeyUp={handleKeyUp}
      />
      <InputGroup.Append>
        <Button
          className="donationInputGroup__btn font-weight-bold"
          onClick={handleDonated}
          disabled={projectEnded}
        >
          Give Now
        </Button>
      </InputGroup.Append>
      <Form.Control.Feedback className="position-relative" type="invalid">
        Enter amount between 5 to 500000
      </Form.Control.Feedback>
    </InputGroup>
  );
}

DonationInputGroup.propTypes = {
  onDonate: PropTypes.func,
}

export default DonationInputGroup;
