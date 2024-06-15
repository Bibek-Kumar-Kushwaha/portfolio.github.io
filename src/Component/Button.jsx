import React from 'react';
import { Link } from 'react-router-dom';

export default function Button(props) {
  const { btnName, link, isExternal, download } = props;

  if (isExternal) {
    return (
      <a
        href={link}
        className="text-[12px] md:text-[15px] bg-[#8546EF] hover:bg-[#8546E0] text-[#FFF] font-bold rounded w-full p-2"
        download={download}
      >
        {btnName}
      </a>
    );
  } else {
    return (
      <Link
        to={link}
        className="text-[12px] md:text-[15px] bg-[#8546EF] hover:bg-[#8546E0] text-[#FFF] font-bold rounded w-full p-2"
      >
        {btnName}
      </Link>
    );
  }
}
