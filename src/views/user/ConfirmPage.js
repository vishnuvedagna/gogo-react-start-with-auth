import React from 'react';
import { Button, CardTitle } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';

const ConfirmPage = ({
  nextStep,
  prevStep,
  values: { firstName, lastName, email, phone, userType,platform,description },
}) => {
  const HandleContinue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const HandleBack = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <>
      <div className="d-flex justify-content-start align-items-center">
        <CardTitle className="mb-2">
          <IntlMessages
            id={`Confirm the ${
              userType === 'provider' ? 'Alert provider' : 'Alert subscriber'
            } Details`}
          />
        </CardTitle>
      </div>
      <div className="row p-4">
        <div className="col-12 col-md-6 review-label">First Name</div>
        <div className="col-12 col-md-6 review-primary">
          {firstName ? firstName : '--'}
        </div>
        <div className="col-12 col-md-6 review-label">Last Name</div>
        <div className="col-12 col-md-6 review-primary">
          {lastName ? lastName : '--'}
        </div>
        <div className="col-6 col-md-6  review-label">Email Address</div>
        <div className="col-6 col-md-6">{email ? email : '--'}</div>
        <div className="col col-md-6  review-label">Phone</div>
        <div className="col col-md-6 ">{phone ? phone : '--'}</div>
        <div className="col col-md-6  review-label">User Type</div>
        <div className="col col-md-6 ">{userType ? userType : '--'}</div>
        <div className="col col-md-6  review-label">Platform</div>
        <div className="col col-md-6 ">{platform ? platform : '--'}</div>
        <div className="col col-md-6  review-label">Description</div>
        <div className="col col-md-6 ">{description ? description : '--'}</div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Button
          color="primary"
          className="btn-shadow"
          size="lg"
          onClick={HandleBack}
        >
          Back
        </Button>
        <Button
          color="primary"
          className="btn-shadow"
          size="lg"
          onClick={HandleContinue}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default ConfirmPage;

{/* <div className="row px-2">
        <div className="col-6 col-md-3 col-xl-2 review-label">Doing Business As</div>
        <div className="col col-md-3 col-xl-4">{format(customer.dba)}</div>
        <div className="col-6 col-md-3 col-xl-2 review-label">State of Formation</div>
        <div className="col-6 col-md-3 col-xl-4">{format(customer.stateOfFormation)}</div>
      </div>
      <div className="row px-2">
        <div className="col-6 col-md-3 col-xl-2 review-label">Federal Tax ID</div>
        <div className="col-6 col-md-3 col-xl-4">{format(customer.fedTaxId)}</div>
        <div className="col-6 col-md-3 col-xl-2 review-label">Date Established</div>
        <div className="col-6 col-md-3  col-xl-4">{format(customer.established)}</div>
      </div>
      <div className="row px-2">
        <div className="col col-md-3 col-xl-2 review-label">Rental House</div>
        <div className="col col-md-3 col-xl-4">{customer.corpRental}</div>
      </div> */}