import React from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function DonationInputGroup() {
  return (
    <InputGroup className="donationInputGroup">
      <span className="position-absolute text-black-50 donationInputGroup__dollarSign">$</span>
      <FormControl
        className="donationInputGroup__input font-weight-bolder pl-4"
      />
      <InputGroup.Append>
        <Button className="donationInputGroup__btn">Give Now</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default DonationInputGroup;
