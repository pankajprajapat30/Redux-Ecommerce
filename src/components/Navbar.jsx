import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { getCartTotal } from '../features/cartSlice'


const Navbar = () => {

 const dispatch = useDispatch()
const {cart , totalQuantity} = useSelector((state)=>(state.allCart))

useEffect(()=>{
    dispatch(getCartTotal())
} , [cart])

    return (
        <div>
            <nav className="navbar navbar-expand-lg " id='navbar'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Ecommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home ">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active " aria-current="page" to="/Products ">Products </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Cart"><MDBBtn color='dark'>
                                <MDBIcon className='me-2' fas icon="shopping-cart" />
                                   Cart({totalQuantity})
                                </MDBBtn></Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar