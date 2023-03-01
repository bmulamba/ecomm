import React from 'react'

function Categories() {

  const data = [
    {
      id : 1,
      cateName : "Laptop",
    },
    {
      id : 2,
      cateName : "Telephone",
    },
    {
      id : 3,
      cateName : "Music",
    },
    {
      id : 4,
      cateName : "Health & Beauty",
    },
    {
      id : 5,
      cateName : "Pets",
    },
    {
      id : 6,
      cateName : "Baby Toys",
    },
    {
      id : 7,
      cateName : "Groceries",
    },
    {
      id : 8,
      cateName : "Books",
    },
  ]

  return (
    <React.Fragment>
      <div className='category'>
        {
          data.map((value) => {
            return (
              <div className='box f_flex' key={value.id}>
                <span>{value.cateName}</span>
              </div>
            )
          })
        }
      </div>
    </React.Fragment>
  )
}

export default Categories