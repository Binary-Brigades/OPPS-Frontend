import React from 'react';
import FormatDate from '../../../hooks/FormatDate';
import useFetch from '../../../hooks/useFetch';

const ProposalList = () => {
  const proposals = useFetch('https://oops-n5cn.onrender.com/api/v1/proposal/my_proposal');
  console.log(proposals.data);

  return (
    <div className='w-full'>
      <div className='grid grid-cols-2 md:grid-cols-3 font-semibold'>
        <p>Proposal Name</p>
        <p className='hidden md:block'>Submission Date</p>
        <p>Status</p>
      </div>

      {proposals.data !== null ? (
        proposals.data.map((proposal, index) => (
          <div key={index} className='w-full grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3 pb-2'>
            <div>{proposal.proposalName}</div>
            <div className='hidden md:block'>{FormatDate(proposal.created_on)}</div>
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
