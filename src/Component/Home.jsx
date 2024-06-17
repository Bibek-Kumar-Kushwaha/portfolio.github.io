import React from 'react';
import { ReactTyped } from 'react-typed';
import menImage from '../assets/BibekPort5.png';
import resume from '../assets/resume.pdf';
import Button from './Button';

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#fec7d7] font-bold">
        <div className="w-[90%] md:flex">
          <div className="md:w-[50%] w-full flex flex-col justify-center items-center text-center">
            <div className="p-4 md:p-8">
              <p className="md:text-2xl text-lg mb-2">Hello, I'm</p>
              <h1 className="md:text-4xl text-2xl text-[#8546ef] mb-4">BIBEK KUMAR KUSHWAHA</h1>
              <p className="md:text-3xl text-lg mb-6">
                <ReactTyped
                  strings={[
                    "MERN Stack Developer",
                    "Web Designer",
                    "Graphics Designer"
                  ]}
                  typeSpeed={100}
                  backSpeed={200}
                  loop
                />
              </p>
              <div className="flex justify-center md:justify-start">
                <Button btnName="DOWNLOAD CV" link={resume} isExternal={true} download="BibekKumarKushwaha_Resume.pdf" />
                &nbsp;
                <Button btnName="CONTACT ME" link="/Contact" />
              </div>
            </div>
          </div>

          <div className="md:w-[50%] w-full relative p-5 md:p-0 flex justify-center items-center">
            <img src={menImage} alt="Men" className="object-cover object-top relative z-10 w-full md:max-w-none md:h-auto" style={{ maxHeight: "600px" }} />
          </div>
        </div>
      </div>
    </>
  );
}
