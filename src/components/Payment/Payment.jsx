import "./Payment.scss";
import {BsFillShieldLockFill} from "react-icons/bs"
import card1 from "../../assets/card1.svg"
import card2 from "../../assets/card2.svg"
import card3 from "../../assets/card3.svg"
import card4 from "../../assets/card4.svg"
import card5 from "../../assets/card5.svg"

const Payment = () => {
  return (
    <div className="payment_container">
      <div className="inner_payment">


        <h1>Payment Details</h1>
        <p><BsFillShieldLockFill className="lock" />
          This transaction is secured by 128 bit SSL encryption
        </p>

        <div className="ava">
          <div className="ava_text">
            Available cards: 
          </div>
          <div className="ava_card">
            <img src={card1} alt="stuff" />
          </div>
          <div className="ava_card">
            <img src={card2} alt="stuff" />
          </div>
          <div className="ava_card">
            <img src={card3} alt="stuff" />
          </div>
          <div className="ava_card">
            <img src={card4} alt="stuff" />
          </div>
          <div className="ava_card">
            <img src={card5} alt="stuff" />
          </div>
        </div>

        <form className="payment_form">

          <label htmlFor="p_name" className="label_p_name">NAME ON CARD</label>
          <input type="text" id="p_name" className="p_name" />

          <label htmlFor="card_no" className="label_card_no">CARD NUMBER</label>
          <input type="text" id="card_no" className="card_no"/>

          <div className="num_values">

            <label htmlFor="expire" className="expire">EXPIRATION DATE</label>
            <div className="num_values_num">

              <div className="date_values">
                <input type="number" name="expire" id="expire" max={2} />
                <span>/</span>
                <input type="number" name="expire" id="expire" max={2} />
              </div>

              <input type="number" placeholder="CVV/CVC" max={3} />
            </div>
          </div>

          <div className="payment_checkbox">
            <input type="checkbox" id="check" /> 
            <label htmlFor="check">Save card details for next time</label>
          </div>

          <div className="sumbit"><BsFillShieldLockFill /> PAY $72.99</div>
        </form>

      </div>
    </div>
  )
}

export default Payment
