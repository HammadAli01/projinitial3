import React from 'react';

export default function practice() {
  const myarray=[
    {
      "id": "1",
      "name": "Icebreakers"
    },
    {
      "id": "2",
      "name": "Experience"
    },
    {
      "id": "3",
      "name": "Environment"
    },
    {
      "id": "4",
      "name": "Icebreakers"
    },
    {
      "id": "5",
      "name": "Experience"
    },
    {
      "id": "6",
      "name": "Environment"
    }
  ];
  return <div>
      <h2>answers</h2>
{myarray.map((item)=>{
    return(
    <button onClick={(e)=>{console.log(item.name)}} id={item.id}>{item.name}</button>)
})}
  </div>;
}
