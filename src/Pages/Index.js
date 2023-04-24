import React, { useState,useEffect } from 'react'
import Electronics from './Electronics'
import Books from './Books'
import Sports from './Sports'
import axios from 'axios'
import HomePage from './HomePage'
import Category from './Category'



function Index() {
    

  return (
    <div>
        {/* <Electronics/>
        <Books/>
        <Sports/> */}
       {/* <Category/> */}
<HomePage/>       
    </div>
  )
}

export default Index