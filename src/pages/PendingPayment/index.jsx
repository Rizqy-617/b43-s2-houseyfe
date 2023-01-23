import Store from '../../components/layouts/Store';
import React from 'react'
import BookingPending from '../../components/Bookingpending';

export default function Pendingpage() {
  return (
    <Store className={"bg-tertiary"}>
      <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "5.5rem" }}>
        <div>
          <BookingPending />
        </div>
      </div>
    </Store>
  )
}