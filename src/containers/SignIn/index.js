import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import { Formik } from "formik";
import { connect } from "react-redux";

import { Fieldset } from "components/form/fieldset";
import { Button } from "components/elements/button";

import { formDefinition } from "./utils/formDefinition";
import * as styled from "./styles";
import { signIn } from "./actions";

export const SignInComponent = ({ handleSignIn }) => {
  const onValidate = ({ username, password }) => {
    const errors = {};
    if (isEmpty(username)) {
      errors.username = "Username missing";
    } else if (isEmpty(password)) {
      errors.password = "Password missing";
    }
    return errors;
  };

  const onSave = (values, { setSubmitting, resetForm }) => {
    handleSignIn(values)
      .then(() => {
        setSubmitting(false);
        resetForm({ values: "" });
      })
      .catch(() => setSubmitting(false));
  };

  return (
    <styled.OuterWrapper>
      <styled.InnerWrapper>
        <styled.Circle color="lightYellow" rightTop />
        <styled.Circle color="lightBlue" />
        <styled.CenterContainer>
          <styled.FormWrapper>
            <styled.Title>Sign in</styled.Title>
            <styled.InputsWrapper>
              <Formik //move to scenes
                initialValues={{ username: "", password: "" }}
                validate={(values) => onValidate(values)}
                onSubmit={onSave}
              >
                {({
                  errors,
                  touched,
                  values: { username, password },
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <>
                    <Fieldset
                      context={formDefinition.username}
                      onChange={handleChange}
                      value={username}
                      errors={touched.username && errors.username}
                    />
                    <Fieldset
                      context={formDefinition.password}
                      onChange={handleChange}
                      value={password}
                      errors={touched.password && errors.password}
                    />
                    <Button
                      btnColor="lightBlue"
                      color="white"
                      onClick={handleSubmit}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Sign in
                    </Button>
                  </>
                )}
              </Formik>
            </styled.InputsWrapper>
          </styled.FormWrapper>
        </styled.CenterContainer>
      </styled.InnerWrapper>
    </styled.OuterWrapper>
  );
};

SignInComponent.propTypes = {
  handleSignIn: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    handleSignIn: (params) => dispatch(signIn(params)),
  };
}

export const SignIn = connect(null, mapDispatchToProps)(SignInComponent);
