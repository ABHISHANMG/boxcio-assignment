import './index.css'

const InventoryToggleItems = props => {
  const {inventoryToggledItems} = props
  const {displayName, order, typeOptions} = inventoryToggledItems
  return (
    <li className="list-toggledItem-container">
      <div className="inventory-items-quantity-container">
        <p className="item-quantity-para">{displayName}</p>
        <p className="item-heading-para">{order}</p>
      </div>
      <p className="item-heading-para">{typeOptions}</p>
    </li>
  )
}

export default InventoryToggleItems
