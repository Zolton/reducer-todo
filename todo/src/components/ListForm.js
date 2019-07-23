import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";

function ListForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <Field type="task" name="task" placeholder="Enter new task" />
      <button type="submit">Submit New Task</button>
    </Form>
  );
}

// If you're wondering why I'm using Formik, you don't know
// how much I truly hated change and submit handlers


//  This is absolutely brilliant - Formik will always send back an 
// object by default, so just configure what you want it to look
// like here instead of in the reducer or changeHandler!!

const FormikForm = withFormik({
  mapPropsToValues({ task }) {
    return {
      task: task || "",
      completed: false,
      id: Date.now()
    };
  },

  handleSubmit(values, { resetForm, props }) {
    console.log("values below");
    console.log(values);
    props.addTask(values);
    resetForm();
  }
})(ListForm);

export default FormikForm;
