import {Component} from 'react'

import {FiTruck, FiLogOut} from 'react-icons/fi'

import {CgProfile} from 'react-icons/cg'

import {RiDatabaseFill} from 'react-icons/ri'

import MoveContainer from '../MoveContainer'

import './index.css'

class Home extends Component {
  state = {allDetailsList: []}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const url = 'http://test.api.boxigo.in/sample-data/'

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    const formattedData = data.Customer_Estimate_Flow.map(eachItem => ({
      callBack: eachItem.call_back,
      customStatus: eachItem.custom_status,
      dateCreated: eachItem.date_created,
      distance: eachItem.distance,
      estimateId: eachItem.estimate_id,
      estimateStatus: eachItem.estimate_status,
      moveDateFlexible: eachItem.move_date_flexible,
      movingFrom: eachItem.moving_from,
      movingOn: eachItem.moving_on,
      movingTo: eachItem.moving_to,
      newElevatorAvailability: eachItem.new_elevator_availability,
      newFloorNo: eachItem.new_floor_no,
      newParkingDistance: eachItem.new_parking_distance,
      oldElevatorAvailability: eachItem.old_elevator_availability,
      oldFloorNo: eachItem.old_floor_no,
      oldHouseAdditionalInfo: eachItem.old_house_additional_info,
      oldParkingDistance: eachItem.old_parking_distance,
      orderDate: eachItem.order_date,
      orderReviewed: eachItem.order_reviewed,
      packingService: eachItem.packing_service,
      propertySize: eachItem.property_size,
      serviceType: eachItem.service_type,
      status: eachItem.status,
      storageItems: eachItem.storage_items,
      totalItems: eachItem.total_items,
      unpackingService: eachItem.unpacking_service,
      userId: eachItem.user_id,
      items: eachItem.items,
      fromAddress: eachItem.from_address,
      toAddress: eachItem.to_address,
    }))

    console.log(formattedData)
    this.setState({allDetailsList: formattedData})
  }

  render() {
    const {allDetailsList} = this.state

    return (
      <div className="home-container">
        <div className="dash-board-container">
          <button type="button" className="tab-btn active-btn">
            <FiTruck size={25} />
            <p className="tab-name">MY MOVES</p>
          </button>
          <button type="button" className="tab-btn">
            <CgProfile size={25} />
            <p className="tab-name">MY PROFILE</p>
          </button>
          <button type="button" className="tab-btn">
            <RiDatabaseFill size={25} />
            <p className="tab-name">GET QUOTE</p>
          </button>
          <button type="button" className="tab-btn">
            <FiLogOut size={25} />
            <p className="tab-name">LOGOUT</p>
          </button>
        </div>

        <div className="display-container">
          <h1 className="heading-name">MY MOVES</h1>
          <div className="address-container">
            <ul className="ul">
              {allDetailsList.map(eachItem => (
                <MoveContainer key={eachItem.userId} eachItem={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
