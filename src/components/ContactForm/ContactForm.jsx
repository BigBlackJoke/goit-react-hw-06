import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export default function ContactForm({addContact}) {
    const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
    });
    
    const contactValues = {
    name: "",
    number: ""
    };

    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        addContact(newContact);
        resetForm();
      };

    return (
        <Formik
        initialValues={contactValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
            >
                
        <Form className={css.container}>
                <label className={css.label} htmlFor="name">Name</label>
                <Field className={css.field} type="text" name="name" />
                <ErrorMessage className={css.error} name="name" component="span" />

                <label className={css.label} htmlFor="number">Number</label>
                <Field className={css.field} type="text" name="number" />
                <ErrorMessage className={css.error} name="number" component="span" />
                <button className={css.button} type='submit'>Add contact</button>
            </Form>

        </Formik>
    )
}