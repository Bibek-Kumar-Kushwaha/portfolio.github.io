import React from 'react';
import Button from './Button';
import menImage from '../assets/men.avif';
export default function Card(props) {
  return (
    <>
      {props.data.map((item) => (
        <div key={item.id} className="w-full rounded overflow-hidden shadow-lg mx-auto hover:bg-white duration-1000 m-3 flex flex-col">
          {/* Assuming you have an image URL for each card */}
          <img className="w-[90%] m-auto" src={item.imageUrl} alt={item.altMessage} />
          <div className="flex-grow flex flex-col justify-between px-6 py-4">
            <div>
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="flex justify-center md:justify-start mt-2 w-full text-center">
              <Button btnName={props.btnName} link={item.link}/>
             </div>
          </div>
        </div>
      ))}
    </>
  );
}
