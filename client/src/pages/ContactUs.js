import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiCornerDownRight, FiCornerDownLeft } from 'react-icons/fi';

/** 
 *  Get in touch saves message in the database
 *  and send email.
 */

const ContactUs = (props) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: ``,
      message: '',
    });

    const { name, email, subject, message } = formData;

    const [loading, setLoading] = useState(false);

    const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      setLoading(true);
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/contacts/`,
          { name, email, subject, message },
          config,
        )
        .then(res => {
          setLoading(false);
          window.scrollTo(0, 0);
        })
        .catch(err => {
          setLoading(false);
          window.scrollTo(0, 0);
        });
    };
    

    return (
    <>
    <Fade duration={1200}>
      <div className="position-relative col mt-4 text-center mb-5">
        -
        <div className="col p-4 d-flex flex-column position-static align-items-center">
          <h1 className='mb-0 mt-4'>Contact us <FiCornerDownRight /></h1>
          <form className="form-group col-md-6 align-items-center mt-5" onSubmit={e => onSubmit(e)}>
            -
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="Full Name"
              onChange={e => onChange(e)}
              value={name}
              required
            />
            <input
              className="form-control mt-3"
              name="email"
              type="email"
              placeholder="Your Email"
              onChange={e => onChange(e)}
              value={email}
              required
            />
            <input
              className="form-control mt-3"
              name="subject"
              type="text"
              placeholder="Subject"
              onChange={e => onChange(e)}
              value={subject}
              required
            />
            <textarea
              className="form-control mt-3"
              name="message"
              placeholder="Message"
              onChange={e => onChange(e)}
              value={message}
              required
            />
            <br />
            {loading ? (
              <div>
                Loading...
              </div>
            ) : (
              <button className="btn btn-primary btn-lg btn-block" type="submit">
                Send
              </button>
            )}
            -
          </form>
        </div>
        <p className="p-2 p-md-2 mb-5"><Link to='/' className="font-weight-bold"><FiCornerDownLeft /> Back to Home</Link></p>
      </div>
    </Fade>
    </>
  );
}

export default ContactUs;
