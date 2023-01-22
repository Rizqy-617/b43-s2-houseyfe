import React from 'react';
import Store from '../../components/layouts/Store';
import ProfileLayout from '../../components/Profile';

export default function Profile() {
  return (
    <Store className={"bg-tertiary"}>
      <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "5.5rem" }}>
        <div>
          <ProfileLayout />
        </div>
      </div>
    </Store>
  )
}