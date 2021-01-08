import React from 'react';
import {
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
  FormText,
} from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';

const ProviderDetailsForm = ({
  nextStep,
  prevStep,
  handleChange,
  values: { userType, firstName, lastName, email, phone, description },
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
        <CardTitle className="mb-2">Complete Your Registration</CardTitle>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <p>Step 1 : Do you want to Register as</p>
      </div>
      <Form>
        <FormGroup tag="fieldset">
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="userType"
                value="provider"
                checked={userType === 'provider'}
                onClick={handleChange}
              />
              Alert Provider
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="userType"
                value="subscriber"
                checked={userType === 'subscriber'}
                onClick={handleChange}
              />
              Alert Subscriber
            </Label>
          </FormGroup>
        </FormGroup>
        <div className="d-flex justify-content-start align-items-center">
          <CardTitle className="mb-2">Alert Profile</CardTitle>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p>Step 2 : Profile</p>
        </div>
        <Row form>
          <Col md={6}>
            <FormGroup className="form-group has-float-label  mb-4">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={firstName}
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="form-group has-float-label  mb-4">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={lastName}
                type="text"
                readOnly
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className="form-group has-float-label  mb-4">
          <Label htmlFor="email">
            <IntlMessages id="user.email" />
          </Label>
          <Input id="email" name="email" type="email" value={email} readOnly />
        </FormGroup>
        <FormGroup className="form-group has-float-label  mb-4">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="number" value={phone} readOnly />
        </FormGroup>
        {userType === 'subscriber' && (
          <div className="m-2">
            <FormGroup check inline>
              <Label htmlFor="notification">Enable Notification</Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="notifEmail"
                  onChange={handleChange}
                />
                Email
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="checkbox"
                  name="notifPhone"
                  onChange={handleChange}
                />
                Phone
              </Label>
            </FormGroup>
          </div>
        )}
        {userType !== 'subscriber' && (
          <>
            <FormGroup>
              <Label for="exampleFile">Profile Picture</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">Image Uplaod</FormText>
            </FormGroup>
            <FormGroup className="form-group has-float-label  mb-4">
              <Label htmlFor="description">Service Description</Label>
              <Input
                type="textarea"
                name="description"
                value={description}
                id="description"
                onChange={handleChange}
              />
            </FormGroup>
          </>
        )}
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

export default ProviderDetailsForm;
