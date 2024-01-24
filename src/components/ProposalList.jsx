import React from 'react';
import FormatDate from '../../hooks/FormatDate';

const ProposalList = () => {
  const proposals = [
    {
      dateReceived: "2024-01-15T09:30:00Z",
      proposalName: "Project Alpha",
      status: "Pending"
    },
    {
      dateReceived: "2024-01-18T14:45:00Z",
      proposalName: "Marketing Campaign Beta",
      status: "Reviewed"
    },
    {
      dateReceived: "2024-01-20T11:20:00Z",
      proposalName: "Product Launch Gamma",
      status: "Pending"
    },
    {
      dateReceived: "2024-01-22T08:00:00Z",
      proposalName: "Training Program Delta",
      status: "Reviewed"
    },
    {
      dateReceived: "2024-01-24T13:15:00Z",
      proposalName: "Budget Proposal Epsilon",
      status: "Pending"
    }
  ];

  return (
    <div className='w-full'>
        <div className='grid grid-cols-2 md:grid-cols-3 font-semibold'>
            <p>Proposal Name</p>
            <p className='hidden md:block'>Submission Date</p>
            <p>Status</p>
        </div>
      {proposals.map((proposal, index) => (
        <div key={index} className='w-full  grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3 pb-2'>
          <div>{proposal.proposalName}</div>
          <div className='hidden md:block'>{FormatDate(proposal.dateReceived)}</div>
          <div className={` ${proposal.status === 'Pending' ? 'text-[#F3C300]' : 'text-[#32CD32]'}`}>{proposal.status}</div>
        </div>
      ))}
    </div>
  );
};

export default ProposalList;
