import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { MDBInput } from 'mdbreact';
import { TextField } from '@mui/material';
import { render } from '@testing-library/react';

Test.propTypes = {

};

function Test(props) {
  const form = useForm({
    defaultValues: {
      username: "defaultUserName",
      password: "defaultPassword"
    },
  });

  function whenSubmit(value) {
    console.log("submit: ", value)
  };
  return (
    <form onSubmit={form.handleSubmit(whenSubmit())}>
      <Controller
        name='username'
        control={form.control}


        render={() => (
          <MDBInput label='Password' />
        )}
      />
    </form>
  );
}

export default Test;