import React from 'react';
import {
  Row,
  Col,
  Label,
  Form,
  FormGroup,
  Button,
  Input,
  CardTitle,
} from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';

const UserDetailsForm = ({
  nextStep,
  handleChange,
  values: { firstName, lastName, email, phone, password, confirmPassword },
}) => {
  const HandleContinue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <>
      <CardTitle className="mb-2">
        <IntlMessages id="user.register" />
      </CardTitle>
      <Form className="av-tooltip tooltip-label-bottom">
        <Row form>
          <Col md={6}>
            <FormGroup className="form-group has-float-label">
              <Label>First Name</Label>
              <Input
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                // validate={validateEmail}
              />
              {/* {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )} */}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="form-group has-float-label">
              <Label>Last Name</Label>
              <Input
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                // validate={validateEmail}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup className="form-group has-float-label">
          <Label>Phone Number</Label>
          <Input
            className="form-control"
            name="phone"
            value={phone}
            type="number"
            onChange={handleChange}
          />
          {/* {errors.email && touched.email && (
              <div className="invalid-feedback d-block">{errors.email}</div>
            )} */}
        </FormGroup>
        <FormGroup className="form-group has-float-label">
          <Label>
            <IntlMessages id="user.email" />
          </Label>
          <Input
            className="form-control"
            name="email"
            value={email}
            type="email"
            onChange={handleChange}
          />
          {/* {errors.email && touched.email && (
              <div className="invalid-feedback d-block">{errors.email}</div>
            )} */}
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup className="form-group has-float-label">
              <Label>Password</Label>
              <Input
                className="form-control"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                // validate={validateEmail}
              />
              {/* {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )} */}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="form-group has-float-label">
              <Label>Confirm Password</Label>
              <Input
                className="form-control"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={handleChange}
                // validate={validateEmail}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Some input
          </Label>
        </FormGroup>
        <div className="d-flex justify-content-center align-items-center">
          <Button
            color="primary"
            className="btn-shadow"
            size="lg"
            onClick={HandleContinue}
          >
            Continue
          </Button>
        </div>
      </Form>
    </>
  );
};

export default UserDetailsForm;
