// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdraw = id => {
    const {denominationsList} = this.props
    const withdrawnAmount = denominationsList[id - 1].value
    this.setState(prevState => ({amount: prevState.amount - withdrawnAmount}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="denominations-container">
          <div className="profile-container">
            <h1 className="profile-initial">S</h1>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="balance-amount-container">
              <p className="balance-amount">{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum-in-rupees">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list-container">
            {denominationsList.map(each => (
              <DenominationItem
                denomination={each}
                key={each.id}
                withdraw={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
