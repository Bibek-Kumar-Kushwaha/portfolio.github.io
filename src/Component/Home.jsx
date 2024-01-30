import React from 'react';
import { ReactTyped } from 'react-typed';
import menImage from '../assets/men.avif';
import Button from './Button';

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#F8FAE5] font-bold">
        <div className="w-[90%] md:flex">
          <div className="md:w-[50%] w-full text-center">
            <div className="p-4 md:p-8">
              <p className="md:text-2xl text-lg mb-2">Hello, I'm</p>
              <h1 className="md:text-4xl text-2xl text-[#76453B] mb-4">BIBEK KUMAR KUSHWAHA</h1>
              <p className="md:text-3xl text-lg mb-6">
                <ReactTyped
                  strings={[
                    "Web Developer",
                    "Web Designer",
                    "Graphics Artist"
                  ]}
                  typeSpeed={100}
                  backSpeed={200}
                  loop
                />
              </p>
              <div className="flex justify-center md:justify-start">
              <Button btnName = {'DOWNLOAD CV'} />
              &nbsp;
              <Button btnName = {'CONTACT ME'} link={'/Contact'}/>
              </div>
            </div>
          </div>

          <div className="md:w-[50%] w-full  bg-[#F8FAE5] p-5 md:p-0">
            <img src={menImage} alt="Men" className="h-[450px] w-full object-cover object-top" />
          </div>
        </div>
      </div>
    </>
  );
}
