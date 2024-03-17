//src / Components / TodoForm.js
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const MyTextArea = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
      <>
          <label htmlFor={props.id || props.name} className="fw-bold text-lg">{label}</label>
          <textarea className="form-control" {...field} {...props} id={props.name}/>
      </>
  );
};

const TodoForm = (props) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Obrigatório"),
    description: Yup.string().required("Obrigatório"),
  });

  console.log(props);

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup className="mb-3">
            <label htmlFor="title" className="fw-bold text-lg">Título</label>
            <Field name="title" type="text" className="form-control" id="title" placeholder="Título da tarefa"/>
            <ErrorMessage
              name="title"
              className="d-block 
								invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup className="mb-3">            
            <MyTextArea
            label="Descrição"
            name="description"
            rows="6"
            placeholder="Descrição da tarefa a ser realizada"
            />
            <ErrorMessage
              name="description"
              className="d-block 
								invalid-feedback"
              component="span"
            />
          </FormGroup>

          <Button
            variant="success"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default TodoForm;
