import {useState} from 'react'

import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md'

import InventoryToggle from '../InventoryToggle'

import './index.css'

const Inventory = props => {
  const [isToggle, setIsToggle] = useState(false)

  const {inventoryItems} = props
  console.log(inventoryItems)
  const {displayName, category} = inventoryItems

  const toggleItems = () => {
    setIsToggle(prev => !prev)
  }

  const countItems = category.map(eachItem => eachItem.items.length)

  const totalCountItems = countItems.reduce((acc, num) => acc + num, 0)

  return (
    <li className="list-inventory-toggle-container">
      <button
        type="button"
        onClick={toggleItems}
        className="inventory-toggle-btn"
      >
        <h1 className="inventory-Heading">
          {displayName} <span className="quantity-span">{totalCountItems}</span>
        </h1>
        {isToggle ? (
          <MdOutlineKeyboardArrowUp size={25} />
        ) : (
          <MdOutlineKeyboardArrowDown size={25} />
        )}
      </button>
      {isToggle && (
        <div className="inventory-toggled-items-container">
          <ul className="unordered-inventory-container">
            {category.map(eachItem => (
              <InventoryToggle
                key={eachItem.id}
                inventoryItemsToggled={eachItem}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

export default Inventory
