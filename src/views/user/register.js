import React, { Component } from 'react';
import {
  Row,
  Card,
  CardTitle,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import { adminRoot } from '../../constants/defaultValues';
import UserDetailsForm from './UserDetailsForm';
import ProviderDetailsForm from './ProviderDetailsForm';
import AlertProviderForm from './AlertProviderForm';
import AlertSubscriberForm from './AlertSubscriberForm';
import ConfirmPage from './ConfirmPage';
import Success from '../success';

class Register extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword:'',
    userType: '',
    notifEmail: false,
    notifPhone: false,
    platform:'discord',
    description:'',
  };

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      userType,
      notifEmail,
      notifPhone,
      platform,
      description,
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      notifEmail,
      notifPhone,
      userType,
      platform,
      description,
    };
    const renderForm = () => {
      switch (step) {
        case 1:
          return (
            <UserDetailsForm
              nextStep={this.nextStep}
              values={values}
              handleChange={this.handleChange}
            />
          );
        case 2:
          return (
            <ProviderDetailsForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              handleChange={this.handleChange}
            />
          );
        case 3:
          if (userType === 'provider') {
            return (
              <AlertProviderForm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                handleChange={this.handleChange}
              />
            );
          }
          if (userType === 'subscriber') {
            return (
              <AlertSubscriberForm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                handleChange={this.handleChange}
              />
            );
          }
          break;
        case 4:
          return (
            <ConfirmPage
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          );
        case 5:
          return <Success />;
        default:
          break;
      }
    };
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="6" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="form-side">
              <NavLink to="/" className="white">
                <span className="logo-single" />
              </NavLink>
              {renderForm()}
            </div>
          </Card>
        </Colxx>
      </Row>
    );
  }
}
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
