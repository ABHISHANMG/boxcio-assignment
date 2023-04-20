import {useState} from 'react'

import {BsArrowRightCircleFill, BsFillCalendarDateFill} from 'react-icons/bs'

import {AiFillHome, AiFillAppstore} from 'react-icons/ai'

import {TiPencil} from 'react-icons/ti'

import {TbRoute2} from 'react-icons/tb'

import {CgDanger} from 'react-icons/cg'

import Inventory from '../Inventory'

import './index.css'

const MoveContainer = props => {
  const [isActive, setIsActive] = useState(false)

  const {eachItem} = props
  const {
    movingFrom,
    movingTo,
    estimateId,
    propertySize,
    totalItems,
    orderDate,
    distance,
    customStatus,
    items,
    oldHouseAdditionalInfo,
    oldElevatorAvailability,
    newFloorNo,
    newElevatorAvailability,
    oldFloorNo,
    oldParkingDistance,
  } = eachItem

  const showDetails = () => {
    setIsActive(prev => !prev)
  }

  const dateTime = new Date(orderDate)

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const month = monthNames[dateTime.getMonth()]
  const day = dateTime.getDate()
  const year = dateTime.getFullYear()

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(dateTime)

  const ordinalSuffix = num => {
    if (num >= 11 && num <= 13) {
      return 'th'
    }
    switch (num % 10) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }

  const formattedDate = `${month} ${day}${ordinalSuffix(day)} ${year}`

  const numericValue = parseInt(oldParkingDistance) * 0.3048
  const parkingDistance = Math.round(numericValue)

  const toggledDetails = () => {
    const info = 0
    return (
      <div>
        <div className="addition-info-container addition-info-container-margin">
          <div>
            <h1 className="list-sub-heading">Addition information</h1>
            <p className="list-sub-para">{oldHouseAdditionalInfo}</p>
          </div>
          <button type="button" className="edit-additional-btn">
            Edit Additional info
          </button>
        </div>
        <div className="addition-info-container">
          <h1 className="list-sub-heading">House Details</h1>
          <button type="button" className="edit-additional-btn">
            Edit House Details
          </button>
        </div>
        <h1 className="list-sub-heading red-heading">Existing House Details</h1>
        <div className="addition-info-container">
          <div>
            <h1 className="list-sub-heading">Floor No.</h1>
            <p className="list-sub-para">{oldFloorNo}</p>
          </div>
          <div>
            <h1 className="list-sub-heading">Elevator available</h1>
            <p className="list-sub-para">{oldElevatorAvailability}</p>
          </div>
          <div>
            <h1 className="list-sub-heading">
              Distance from Elevator/staircase to truck
            </h1>
            <p className="list-sub-para">{parkingDistance} meters</p>
          </div>
        </div>
        <h1 className="list-sub-heading red-heading">New House Details</h1>
        <div className="addition-info-container">
          <div>
            <h1 className="list-sub-heading">Floor No.</h1>
            <p className="list-sub-para">{newFloorNo}</p>
          </div>
          <div>
            <h1 className="list-sub-heading">Elevator available</h1>
            <p className="list-sub-para">{newElevatorAvailability}</p>
          </div>
          <div>
            <h1 className="list-sub-heading">
              Distance from Elevator/staircase to truck
            </h1>
            <p className="list-sub-para">{parkingDistance} meters</p>
          </div>
        </div>
        <div className="addition-info-container">
          <h1 className="list-sub-heading">Inventory Details</h1>
          <button type="button" className="edit-additional-btn">
            Edit inventory
          </button>
        </div>
      </div>
    )
  }

  const inventoryToggle = () => (
    <ul className="unordered-move-container">
      {items.inventory.map(eachItemInventory => (
        <Inventory inventoryItems={eachItemInventory} />
      ))}
    </ul>
  )

  return (
    <li className="li">
      <div className="move-sub-list-container">
        <div className="address-sub-container">
          <h1 className="list-sub-heading">From</h1>
          <p className="list-sub-para">{movingFrom}</p>
        </div>

        <BsArrowRightCircleFill
          className="arrow-circle-icon"
          size={40}
          color="#E32227"
        />

        <div className="address-sub-container">
          <h1 className="list-sub-heading">To</h1>
          <p className="list-sub-para">{movingTo}</p>
        </div>

        <div className="address-sub-container">
          <h1 className="list-sub-heading">Request#</h1>
          <p className="list-sub-para estimated-id">{estimateId}</p>
        </div>
      </div>

      <div className="move-route-container">
        <div className="move-route-sub-container">
          <AiFillHome size={30} color="#E32227" />
          <p className="list-sub-para">{propertySize}</p>
        </div>
        <div className="move-route-sub-container">
          <AiFillAppstore size={30} color="#E32227" />
          <p className="list-sub-para">{totalItems}</p>
        </div>
        <div className="move-route-sub-container">
          <TbRoute2 size={30} color="#E32227" />
          <p className="list-sub-para">{distance}</p>
        </div>
        <div className="move-route-sub-container">
          <BsFillCalendarDateFill size={20} color="#E32227" />
          <p className="list-sub-para">
            {formattedDate} at {formattedTime}
          </p>
          <TiPencil size={20} />
        </div>
        <div className="move-route-sub-container">
          <input type="checkbox" id="checkbox" className="input" checked />
          <label htmlFor="checkbox" className="move-route-sub-heading">
            Is flexible
          </label>
        </div>
        <div className="move-route-sub-btn-container">
          <button type="button" className="view-more-btn" onClick={showDetails}>
            View more details
          </button>
          <button type="button" className="quote-await-btn">
            {customStatus}
          </button>
        </div>
      </div>
      <div className="move-declaimer-container">
        <CgDanger size={25} color="#E32227" />
        <h1 className="list-sub-heading">
          Disclaimer:
          <span className="list-sub-para">
            Please update your move date before two days of shifting
          </span>
        </h1>
      </div>
      {isActive && (
        <div className="toggle-container">
          <>
            {toggledDetails()}
            {inventoryToggle()}
          </>
        </div>
      )}
      <hr className="horizontal-line" />
    </li>
  )
}

export default MoveContainer
