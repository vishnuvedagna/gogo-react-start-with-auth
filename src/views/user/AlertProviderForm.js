import React from 'react';
import { Button, CardTitle, Form, FormGroup, Input, Label } from 'reactstrap';

const AlertProviderForm = ({
  nextStep,
  prevStep,
  handleChange,
  values: { platform },
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
      <div className="d-flex justify-content-start align-items-start">
        <CardTitle className="mb-2">Alert Provider</CardTitle>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <p>Step 3 : Setup Alert Platform</p>
      </div>
      <Form>
        <FormGroup className="form-group has-float-label  mb-4">
          <Label htmlFor="platform">Select Platform</Label>
          <Input
            type="select"
            name="platform"
            id="platform"
            value={platform}
            onChange={handleChange}
          >
            <option>Discord</option>
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

export default AlertProviderForm;
