import React from 'react'

function Categories({ items, onClickItem }) {

   const [activeItem, setActiveItem] = React.useState(null);

   const onSelectItem = (index) => {
      setActiveItem(index);
      // onClickItem(index)
   }

   return (
      <div className="categories" >
         <ul>
            <li
               className={activeItem === null ? 'active' : ''}
               onClick={() => onSelectItem(null)}>Все</li>
            {items && items.map((name, index) => (
               <li
                  className={activeItem === index ? 'active' : ''}
                  onClick={() => onSelectItem(index)}
                  key={name}>
                  {name}
               </li>
            ))}
         </ul  >
      </div>
   )
}

export default Categories
