import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import contactImg from '../asset/img/contact.svg';
const ContactUs = ({darkMode}) => {
  const contactUrl = `${process.env.REACT_APP_BACKEND_API_URL}/api/contact`
  const initialFormData = {
    name: '',
    email: '',
    message: ''
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    try {
      const response = await fetch(contactUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Message Submitted Successfully", {
          position: 'top-center',
        });
        setFormData(initialFormData);
       
      } else {
        throw new Error('Something went Wrong');
        toast.error("Please enter required details", {
          position: 'top-center',
        })
      }

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className={`py-10 ${darkMode ? 'bg-black' : 'bg-white'}`} id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 bg-white p-4 rounded-sm">
          <div className='img-container h-64 md:h-full  py-4 relative'>
          <img src={contactImg} alt="mithlesh_patel" loading='lazy' className="absolute top-0 left-0 w-full h-full object-cover object-center" />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-4">Get in touch</h2>
          <p className="text-gray-700 mb-4">Fill out the form below to send us a message and we'll get back to you as soon as possible!</p>
          <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" style={{ border: '1px solid #ccc' }} id="name" name="name" value={formData.name} onChange={handleChange} 
              className="shadow-sm block w-full sm:text-sm py-1 rounded-md px-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" style={{ border: '1px solid #ccc' }} id="email" name="email" value={formData.email} onChange={handleChange} 
              className="shadow-sm block w-full sm:text-sm py-1 rounded-md px-2" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" style={{ border: '1px solid #ccc' }} name="message" rows="4" value={formData.message} onChange={handleChange} 
              className="shadow-sm py-1 px-2 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
