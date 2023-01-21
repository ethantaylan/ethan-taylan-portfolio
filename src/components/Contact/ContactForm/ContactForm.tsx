import React from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import ContactSnippet from '../ContactSnippet/ContactSnippet';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Form, Input, TextArea } from 'semantic-ui-react';
import './contact-form.scss';

const ContactForm = () => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  const getNameInputValue = (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };
  const getEmailInputValue = (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const getMessageInputValue = (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  React.useEffect(() => {
    setName(name);
    setEmail(email);
    setMessage(message);
  }, [name, email, message]);

  const matches = useMediaQuery('(max-width: 992px)');

  const SERVICE_ID = 'service_ocmb31v';
  const TEMPLATE_ID = 'template_nlic5e6';
  const USER_ID = 'ShI3iGfExRJvjBLGn';

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      result => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        });
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="d-flex flex-row h-100 w-100">
      <div className="w-100 d-flex">
        <div className="p-5 d-flex justify-content-center align-items-center w-100">
          <Form
            id="my-form"
            className={matches ? 'w-100' : 'w-75'}
            onSubmit={handleOnSubmit}
          >
            <span className="input-labels">_name : </span>

            <Form.Field
              id="form-input-control-last-name"
              className="input-labels"
              control={Input}
              name="user_name"
              required
              onChange={getNameInputValue}
            />
            <span className="input-labels">_email : </span>

            <Form.Field
              className="input-labels"
              id="form-input-control-email"
              control={Input}
              name="user_email"
              required
              onChange={getEmailInputValue}
            />
            <span className="input-labels">_message : </span>

            <Form.Field
              id="form-textarea-control-opinion"
              className="input-labels"
              control={TextArea}
              name="user_message"
              required
              onChange={getMessageInputValue}
            />

            <button className="submit-button" type="submit" color="green">
              Send message
            </button>
          </Form>
        </div>
      </div>
      <ContactSnippet
        email={email}
        message={message}
        name={name}
        showContactSnippet={matches ? true : false}
      />
    </div>
  );
};

export default ContactForm;
