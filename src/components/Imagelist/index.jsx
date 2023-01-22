import react, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import css from "./index.module.css"
import {IoBed} from "react-icons/io5"
import {GiBathtub} from "react-icons/gi"
import Ordermodal from "../Button/Ordermodal";

function Imagelist(props) {
  const [orderModal, setOrderModal] = useState(false)
	return (
    <>
    <div>
      <div className={css.Maxwidth}>
        <div className="d-flex flex-column gap-3 w-100">
          <div className={css.WrapperPrimary}>
            <Image src={process.env.PUBLIC_URL + "/img/image2.png"} className={css.PrimaryImage}/>
          </div>
          <div className="d-flex gap-3">
            <div className={css.WrapperSub}>
              <Image src={process.env.PUBLIC_URL + "/img/image3.png"} className={css.PrimaryImage}/>
            </div>
            <div className={css.WrapperSub}>
              <Image src={process.env.PUBLIC_URL + "/img/image4.png"} className={css.PrimaryImage}/>
            </div>
            <div className={css.WrapperSub}>
              <span className={css.ImageMore}>+5</span>
              <Image src={process.env.PUBLIC_URL + "/img/image5.png"} className={css.PrimaryImage}/>
            </div>
          </div>
        </div>
        <div className={css.WrappingBookingDesc}>
          <h1 className={css.BookingTitle}>House Astina</h1>
          <div className={css.BookingDesc}>
            <div>
              <h3>Rp.9.000.000 / Year</h3>
              <p>
                Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren, Tangerang Selatan
              </p>
            </div>
            <div className="d-flex gap-3">
              <div className="fw-semibold">
                <small className="text-secondary">Bedrooms</small>
                <span className="d-flex align-items-center gap-2 fs-4">
                  3 <IoBed />
                </span>
              </div>
              <div className="fw-semibold">
                <small className="text-secondary">Bathrooms</small>
                <span className="d-flex align-items-center gap-2 fs-4">
                  3 <GiBathtub />
                </span>
              </div>
              <div className="fw-semibold">
                <small className="text-secondary">Area</small>
                <span className="d-flex align-items-center gap-2 fs-4">
                  3 sqft
                </span>
              </div>
            </div>
          </div>
          <div className="">
              <h3 className="fw-bold">Description</h3>
              <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
              <Button
              size="lg"
              variant="primary"
              className="px-5 py-2"
              onClick={() => setOrderModal(true)}
              >BOOK NOW</Button>
              <Ordermodal show={orderModal} onHide={() => setOrderModal(false)} />
            </div>
        </div>
        
      </div>
    </div>
		</>
	);
}

export { Imagelist };