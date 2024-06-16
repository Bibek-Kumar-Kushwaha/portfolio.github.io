import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { iconList } from './IconListData';

const Icon = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {iconList.map((item, index) => (
        <div className="text-6xl font-bold text-center mx-4" key={index}>
          <Link to={item.link} className="flex flex-col items-center">
            <div className={`m-auto cursor-pointer ${item.className}  p-3 rounded-lg transition duration-300 hover:bg-[#d9d4e7]`}>
              {item.icon}
            </div>
            <div className="text-center md:text-2xl text-xl font-bold">{item.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post(
        'https://portfolioapi-sigma.vercel.app/contact',
        { name, email, message }, // Pass formData directly without wrapping it
        { headers: { 'Content-Type': 'application/json' } }
      );
      
      toast.success('Message sent successfully');
      console.log('Message sent successfully:', response.data); // Log successful response
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(`Error: ${error.response.data.error}`);
      } else {
        toast.error('An error occurred while sending the message.');
        console.error('Error sending message:', error); // Log detailed error information
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#Fec7d7] ">
      <div className="container mx-auto p-8">
        <div className="text-[20px] font-bold mb-8">
          I'm currently open to new opportunities and collaborations. If you have a project idea, want to discuss web development, or just say hello, feel free to reach out.
          <br/>
          For a quicker response, you can reach me via WhatsApp.
        </div>

        <div className="mb-6">
          <Icon />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-bold w-full md:w-[60%] m-auto">
          <label htmlFor="name" className="block mb-2">
            Name: <input
              type="text"
              placeholder="Enter your name"
              className="border p-2 rounded-md w-full bg-transparent"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </label>
          <label htmlFor="email" className="block mb-2">
            Email: <input
              type="email"
              placeholder="Enter your email"
              className="border p-2 rounded-md w-full bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </label>
          <label htmlFor="message" className="block mb-2">
            Message: <textarea
              placeholder="Enter your message"
              className="border p-2 rounded-md w-full bg-transparent"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
          </label>

          <div className="button">
          <button  type="submit"  className="text-[15px] md:text-[20px] bg-[#8546ef] hover:bg-[#8546d0] text-white font-bold rounded w-full p-2" >
            SUBMIT
          </button>      
          </div>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Contact;