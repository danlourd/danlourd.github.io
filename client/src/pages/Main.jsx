import React, { useState } from 'react';

import DonationForm from '../components/DonationForm';
import BubbleText from '../components/BubbleText';

function Main() {
  const [goal, setGoal] = useState(5000)
  const [numberOfDonor, setNumberOfDonor] = useState(11)
  const [donation, setDonation] = useState(1250)
  const [endDate, setEndDate] = useState(new Date('September 5, 2020 22:00:00'));

  return (
    <div className="main d-flex justify-content-center align-items-center h-100">
      <div className="main__container m-2">
        <BubbleText donation={donation} goal={goal} />
        <DonationForm
          donation={donation}
          numberOfDonor={numberOfDonor}
          goal={goal}
          endDate={endDate}
        />
      </div>
    </div>
  );
}

export default Main;
