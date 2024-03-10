<template>
  <div>
    <Field :name="name" v-slot="{field}">
      <input
      v-bind="field"
      :placeholder="placeholder" 
      :type="type">

      <ErrorMessage :name="name"/>
      <pre>{{ errors }}</pre>
    </Field>
  </div>
</template>
<script setup>
  import {Field, ErrorMessage} from 'vee-validate'

  const props = defineProps({
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    errors: {
      type: String
    }
  });
</script>