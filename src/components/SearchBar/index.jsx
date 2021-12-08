import React, { useState, useRef } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import SearchBarSucess from '../SearchBarSucess';
import Text from '../Text';
import TextWarning from '../TextWarning';

function SearchBar() {
  const [code, setCode] = useState('');
  const [data, addCode] = useState([{ code: '123', link: 'facebook.com' }]);
  const [show, setShow] = useState(false);
  const [showText, setShowText] = useState(true);
  const searchBarRef = useRef(undefined);
  const addData = () => {
    if (code === data[0].code) {
      setShow(true);
      setShowText(true);
      searchBarRef.current.classList.remove('outline-red');
    } else {
      setShowText(false);
      searchBarRef.current.classList.add('outline-red');
      addCode((prev) => [...prev, { code, link: 'Hello.com' }]);
    }
  };
  return (
    <>
      <div className="flex items-center flex-col bg-gray-200 mt-8">
        <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="relative w-full ml-4">
            {' '}
            <input value={code} ref={searchBarRef} onChange={(e) => setCode(e.target.value)} type="text" className="pr-8 pl-5 z-0 dark:text-white focus:shadow dark:bg-gray-5 bg-gray-1 text-black focus:outline-none rounded-full md:w-96 h-9 w-72 " placeholder="Your code here..." />
            <div className="absolute top-2 right-3 h-5 w-5 cursor-pointer">
              {' '}
              <SearchIcon onClick={() => {
                console.log('Click');
                addData();
                console.log(data);
                setCode(code);
              }}
              />
              {' '}
            </div>
          </div>
        </div>
      </div>
      {show && showText && <SearchBarSucess />}
      {showText && <Text />}
      {!showText && <TextWarning />}
    </>
  );
}

export default SearchBar;
