import React from 'react';
import {Imagelist} from '../../components/Imagelist';
import Store from '../../components/layouts/Store';


export default function DetailPage() {
  return(
    <Store className={"bg-tertiary"}>
      <div className="" style={{ marginTop: "5.5rem" }}>
        <div>
          <Imagelist
						className={"mb-4 mt-3 mx-1 rounded-4"}/>
        </div>
      </div>
    </Store>
  )
}