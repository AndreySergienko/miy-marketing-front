<template>
  <Form
    :validation-schema="schema"
    :initial-values="initialValues"
    @submit="handleSubmit">

    <TextFormInput 
      type="email"
      name="email"
      label="Email"
      placeholder="Email"/>

    <TextFormInput 
      type="password"
      name="password"
      label="Password"
      placeholder="Password"/>

    <button
      type="submit">Submit</button>
  </Form>
</template>

<script setup>
  import {Form} from 'vee-validate';
  import {object, string} from 'yup';
  import TextFormInput from '~/components/Form/TextFormInput.vue';

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  }

  const schema = object({
    email: string()
      .required()
      .email()
      .label('Email Address'),
    password: string().required().min(2).label('Your Password')
  });
  const initialValues = {email:'', password: ''}
</script>