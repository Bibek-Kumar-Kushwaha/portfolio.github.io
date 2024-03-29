import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { iconList } from './IconListData';

const Icon = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {iconList.map((item, index) => (
        <div className="text-6xl font-bold text-center mx-4" key={index}>
          <Link to={item.link} className="flex flex-col items-center">
            <div className={`m-auto cursor-pointer ${item.className}  p-3 rounded-lg transition duration-300 hover:bg-gray-300`}>
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
  return (
    <div className="min-h-screen bg-[#F8FAE5] ">
      <div className="container mx-auto p-8">
        <div className="text-[20px] font-bold mb-8">
          I'm currently open to new opportunities and collaborations. If you have a project idea, want to discuss web development, or just say hello, feel free to reach out.
        </div>

        <div className="mb-6">
          <Icon />
        </div>

        <div className="space-y-4 font-bold w-full md:w-[60%] m-auto">
          <label htmlFor="Name" className="block mb-2">
            Name: <input type="text" placeholder="Enter your name" className="border p-2 rounded-md w-full bg-transparent" />
          </label>
          <label htmlFor="Email" className="block mb-2">
            Email: <input type="text" placeholder="Enter your email" className="border p-2 rounded-md w-full bg-transparent" />
          </label>
          <label htmlFor="Message" className="block mb-2">
            Message: <textarea placeholder="Enter your message" className="border p-2 rounded-md w-full bg-transparent"></textarea>
          </label>
          <div className="button">
            <Button btnName={'SUBMIT'} link={'/About'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
