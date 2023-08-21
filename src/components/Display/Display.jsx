import Carousel from "../Carousel/Carousel";
import "./Display.scss";
import {IoIosArrowBack} from "react-icons/io"
// import image1 from "../../assets/130.jpg";
// import image2 from "../../assets/graphic-shirt-trendy-design-mockup.jpg";
// import image3 from "../../assets/pants.jpg";
// import image4 from "../../assets/pexels-karolina-grabowska-4464821.jpg"

const images = [
  "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=740&t=st=1692609156~exp=1692609756~hmac=0e52af7e961aaaf200804ee772c4e852630de337aa85590de7182bb6be0851ce",
  "https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=740&t=st=1692609191~exp=1692609791~hmac=5eadf2a0c3d877d2461f7021d8b8ea2bb152af5f7427f1af793e1e2b42ba91dd",
  "https://img.freepik.com/free-photo/high-heels-black-velvet_53876-102771.jpg?w=740&t=st=1692609204~exp=1692609804~hmac=b439fc2bbe835832fda81c215ce8983232b11cf251ec5bd4f108dfbbbb52521f"
]

const Display = () => {

  return (
    <div className="display_container">
      <div className="inner_display">

        <div className="back">
          <span className="back_icon"><IoIosArrowBack /> </span>
          <span> Back to shopping</span>
        </div>

        <div className="carousel_display">
          <Carousel images={images} />
        </div>

        <div className="details">
          <div className="first_detail">
            <span>Order Subtotal</span>
            <span>$60.99</span>
          </div>
          <div className="second_detail">
            <span>Shipping Payment</span>
            <span>$12.99</span>
          </div>
          <div className="details_line"></div>
          <div className="total_detail">
            <span>TOTAL</span>
            <span>$72.99</span>
          </div>
        </div>
      </div>

    </div> 
  )
}

export default Display
