import React from 'react'

function FormatDate(ISoDate) {
    const date = new Date(ISoDate);
    const day = date.getDate().toString().padStart(2,'0')
    const month = (date.getMonth()+1).toString().padStart(2,'0')
    const year = date.getFullYear().toString()
  return  `${day}/${month}/${year}`;
}

export default FormatDate