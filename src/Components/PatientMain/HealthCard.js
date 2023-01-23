import { useState } from "react"
import cardLogo from '../../images/HealthVault.png'
import './HealthCard.css'

const HealthCard = (props) => {
  const [cardclassName, setcardClassName] = useState()
  const [flipped, setflipped] = useState(false)

  const flipCard = () => {
    if (flipped)
      setcardClassName('card is-flipped')
    else
      setcardClassName('card')

    setflipped(!flipped)
  }
  return <div className="scene">
    <div className={cardclassName} onClick={flipCard}>
      <div className="card__front">
        <div className="card-row">
          <img src={cardLogo} className="card__logo" />
          <div className="card__number number">
            <div className="number-group number-group--2">{props.data.healthId}</div>
          </div>
        </div>
        <div className="card-row">
          <div className="card__holder">
            <span className="card__holder__title">Card Holder</span>
            <span className="card__holder__name">{props.data.name}</span>
          </div>
          <div className="card__expiration">
            <span className="card__expiration__title">DOB</span>
            <span className="card__expiration__date">{props.data.dob}</span>
          </div>
        </div>
      </div>
      <div className="card__back">
        <div className="card__stripe"></div>
        <div className="card__signature">
          <span className="card__cvv">Email</span>
          <span className="card__cvv-number">{props.data.email}</span>
        </div>
        <p className="card__info">
          {props.data.address}
        </p>
      </div>
    </div>
  </div>;
};

export default HealthCard;
