import Store from '../../components/layouts/Store';
import React from 'react'
import BookingLayout from '../../components/BookingLayout';

export default function BookingPage() {
  return (
    <Store className={"bg-tertiary"}>
      <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "5.5rem" }}>
        <div>
          <BookingLayout />
        </div>
      </div>
    </Store>
  )
}