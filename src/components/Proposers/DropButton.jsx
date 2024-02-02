import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdCreateNewFolder } from 'react-icons/md';
import { TiArrowSortedDown } from 'react-icons/ti';
import useFetch from '../../../hooks/useFetch'; // replace with your actual path

function DropButton() {
  const [clicked, setClicked] = React.useState(false);
  const handleClicked = () => setClicked(!clicked);
  const catList = useFetch('https://oppsapi.onrender.com/api/v1/user/category/');
  const location = useLocation();

  return (
    <div
      className="relative transition-all duration-300 ease-in-out flex gap-3 py-2 px-2 cursor-pointer"
      onMouseLeave={handleClicked}
    >
      <MdCreateNewFolder className="mt-1" width={40} height={40} />
      <div>
        <p className="flex" onClick={handleClicked}>
          Create Proposal{' '}
          <span className="font-bold relative">
            <TiArrowSortedDown className="absolute bottom-[20%]" />
          </span>
        </p>
        <ul className={`${clicked ? 'block' : 'hidden'}`}>
          {catList?.data?.map((item) => (
            <li key={item.name} className="hover:border-b transition-all duration-300 ease-in-out">
              {/* Use Link to redirect to the create proposal page with the proposal name as a parameter */}
              <Link key={location.pathname} to={`/createproposal/${item.name}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropButton;
