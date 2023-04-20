import {Component} from 'react'

import InventoryToggleItems from '../InventoryToggleItems'

import './index.css'

const InventoryToggle = props => {
  const {inventoryItemsToggled} = props
  console.log(inventoryItemsToggled)
  const {displayName, id, items} = inventoryItemsToggled
  return (
    <div className="inventory-items-container">
      <h1 className="inventory-items-heading">{displayName}</h1>
      <ul className="unordered-inventory-toggled-items">
        {items.map(eachItem => (
          <InventoryToggleItems
            inventoryToggledItems={eachItem}
            key={eachItem.uniquieId}
          />
        ))}
      </ul>
    </div>
  )
}

export default InventoryToggle
