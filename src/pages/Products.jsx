import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

import { addtocart } from '../features/cartSlice';


const Products = () => {


const dispatch = useDispatch()

  const item = useSelector((state) => (state.allCart.items))

const[search , setSearch] = useState("")

function heandleInput(e){

  setSearch(e.target.value.toLowerCase())
}

  return (
    <MDBContainer>
        <MDBInput label="Search Products...." id="form1" type="text"  className='my-3' value={search} onChange={ heandleInput}/>
      <MDBRow>
        {

          item
          .filter((el) => el && el.title && el.title.toLowerCase().includes(search))
          .map((items, id) => (
            <MDBCol key={id} size='md-4' className='my-2'>
              <MDBCard>
                <MDBCardImage src={items.img} position='top' alt='...' style={{width : "100% ", objectFit : "contain" , aspectRatio : "1/1"}} />
                <MDBCardBody>
                  <MDBCardTitle>{items.title}</MDBCardTitle>
                  <MDBCardTitle>{items.price}</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href='#' onClick={()=>{dispatch(addtocart(items))}}>ADD TO CARD</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))

        }
      </MDBRow>
    </MDBContainer>

  )
}

export default Products