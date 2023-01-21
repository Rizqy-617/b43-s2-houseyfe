import React from 'react';
import {Imagelist} from '../../components/Imagelist';
import Store from '../../components/layouts/Store';
import DataRooms from "../../data/rooms";

export default function DetailPage() {
  return(
    <Store className={"bg-tertiary"}>
      <div className="" style={{ marginTop: "5.5rem" }}>
        <div>
          <Imagelist Rooms={DataRooms}
						className={"mb-4 mt-3 mx-1 rounded-4"}/>
        </div>
      </div>
    </Store>
  )
}