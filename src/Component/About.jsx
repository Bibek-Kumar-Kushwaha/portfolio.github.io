import React from 'react'
import Card from './Card';

const aboutData = [
  {
    id: 1,
    title: 'EDUCATION',
    image: '',
    description:
      "I am a student of CSIT (Computer Science And Information Technology) currently studying at Birendra Multiple Campus, Bharatpur. I completed Intermediate from Hetauda School Of Management, Hetauda in 2079 BS. Also, I completed schooling from Adhunik Rastriya Secondary School, Hetauda in 2076.",
  },
  {
    id: 2,
    image:'',
    title: 'SKILL',
    description: 
    "Now I am in learning phase, I try to learn as much as possible. I have Excellent Knowledge of Graphics-Desigh concepts. And also in Web-Development. I have good Knowledge in Microsoft office like Excel, MS-Word, PowerPoint etc.",
  },

];

    export default function About() {
      return (
        <>
    <div className="bg-[#F8FAE5] text-center md:h-screen">
      <div className="w-[90%] m-auto py-10 font-bold">
        <div className="mb-8">
          <p className="text-[#ca0a0a] text-lg">
            I Am <span className="text-[20px]">Bibek Kumar Kushwaha</span> from <span className="text-[20px]">Godaita-05 (Municipality), Sarlahi</span>
          </p>
          <p className="text-[#333]">
            A passionate and detail-oriented web developer with a focus on creating engaging and user-friendly websites. I have a strong foundation in front-end and back-end technologies, and I love turning ideas into interactive and dynamic web applications.
          </p>
        </div>

        <div className="md:flex w-[90%] m-auto">
          <Card data={aboutData} />
        </div>

        <div className="mt-8 text-[#00ff] text-[20px]">
          <p>
            Thank you for visiting my portfolio! I'm excited about the possibilities in the world of web development and look forward to contributing to innovative projects.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
