import React from 'react';
import { useFormik } from 'formik';
import {
  Row,
  Card,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import { adminRoot } from '../../constants/defaultValues';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password !== values.confirmPassword) {
    errors.password = 'Does not match';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.confirmPassword !== values.password) {
    errors.password = 'Does not match';
  }
  if (!values.acceptedTerms) {
    errors.acceptedTerms = 'Required';
  }
  return errors;
};

const Register = ({ history }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptedTerms: false,
    },
    validate,
    // eslint-disable-next-line no-shadow
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
      if (values.email !== '' && values.password !== '') {
        history.push(adminRoot);
      }
    },
  });

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="6" className="mx-auto my-auto">
        <Card className="auth-card">
          {/* <div className="position-relative image-side ">
            <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
            <p className="white mb-0">
              Please use this form to register. <br />
              If you are a member, please{' '}
              <NavLink to="/user/login" className="white">
                login
              </NavLink>
              .
            </p>
          </div> */}
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle>
            <form onSubmit={formik.handleSubmit}>
              <Row form>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label htmlFor="firstName">
                      <IntlMessages id="First Name" />
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="invalid-feedback d-block">
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label htmlFor="lastName">
                      <IntlMessages id="Last Name" />
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="invalid-feedback d-block">
                        {formik.errors.lastName}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label htmlFor="email">
                  <IntlMessages id="user.email" />
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback d-block">
                    {formik.errors.email}
                  </div>
                ) : null}
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label htmlFor="password">
                      <IntlMessages id="user.password" />
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="invalid-feedback d-block">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label htmlFor="confirmPassword">
                      <IntlMessages id="Confirm Password" />
                    </Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className="invalid-feedback d-block">
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check inline className="form-group mb-4">
                <Label check>
                  <Input
                    type="checkbox"
                    name="acceptedTerms"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />
                  {formik.touched.acceptedTerms &&
                  formik.errors.acceptedTerms ? (
                    <div className="invalid-feedback d-block">
                      {formik.errors.acceptedTerms}
                    </div>
                  ) : null}{' '}
                  I accept the terms and conditions
                </Label>
              </FormGroup>
              <div className="d-flex justify-content-center align-items-center">
                <Button color="primary" className="btn-shadow" size="lg">
                  <IntlMessages id="user.register-button" />
                </Button>
              </div>
              <div className="d-flex justify-content-center align-items-center p-2">
                <p className="mb-0">
                  Have an Account?{' '}
                  <NavLink to="/user/login">
                    <IntlMessages id="login" />
                  </NavLink>
                  .
                </p>
              </div>
            </form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
