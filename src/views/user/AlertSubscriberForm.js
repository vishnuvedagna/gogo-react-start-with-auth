import React from 'react';
import { Button, CardTitle, Form, FormGroup, Input, Label } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';

const AlertSubscriberForm = ({ nextStep, prevStep }) => {
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
      <div className="d-flex justify-content-start align-items-start">
        <CardTitle className="mb-2">
          <IntlMessages id="Alert Subscriber" />
        </CardTitle>
      </div>
      <Form>
        <div className="d-flex justify-content-center align-items-center">
          <p>Step 3 : Choose Alerts Provider</p>
        </div>
        <FormGroup className="form-group has-float-label mb-4">
          <Label htmlFor="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <div className="d-flex justify-content-center align-items-center">
          <p>Step 4 : Provider Page</p>
        </div>
        <div className="row p-2">
          <div className="col-6 col-md-6 review-label d-flex justify-content-center align-items-center">
            abc
          </div>
          <div className="col-6 col-md-6 d-flex justify-content-center align-items-center">
            abc
          </div>
          <div className="col col-md-6 review-label d-flex justify-content-center align-items-center">
            xyz
          </div>
          <div className="col col-md-6 d-flex justify-content-center align-items-center">
            xyz
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p>Step 5 : Setup Trading Platform</p>
        </div>
        <FormGroup className="form-group has-float-label  mb-4">
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Form>
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
          Next
        </Button>
      </div>
    </>
  );
};

export default AlertSubscriberForm;
