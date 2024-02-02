import React from "react";
import FormatDate from "../../../hooks/FormatDate";
import useFetch from "../../../hooks/useFetch";

const ProposalList = () => {
  const proposals = useFetch(
    "https://oppsapi.onrender.com/api/v1/proposal/my_proposal"
  );
  console.log(proposals.data);

  return (
    <div className='w-full'>
      <div className='grid grid-cols-2 gap-3 font-semibold'>
        <p className=''>Submission Date</p>
        <p>Status</p>
      </div>

      {proposals.data !== null ? (
        proposals.data.map((proposal, index) => (
          <div key={index} className='w-full grid grid-cols-2 gap-4 md:gap-0 pb-2'>
            
            <div className=''>{FormatDate(proposal.created_on)}</div>
            <div className={`${proposal.status === 'pending' ? 'text-[#F3C300]' : 'text-[#32CD32]'}`}>
              {proposal.status}
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProposalList;
