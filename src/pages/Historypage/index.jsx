import Store from '../../components/layouts/Store';
import React from 'react'
import History from '../../components/History';

export default function Historypage() {
  return (
    <Store className={"bg-tertiary"}>
      <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "5.5rem" }}>
        <div>
          <History />
        </div>
      </div>
    </Store>
  )
}