// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, withdraw} = props
  const {value, id} = denomination
  const onWithdraw = () => {
    withdraw(id)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={onWithdraw} className="denomination">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
