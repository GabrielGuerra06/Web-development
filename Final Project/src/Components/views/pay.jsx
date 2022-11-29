import React from 'react';
import { Button } from 'react-bootstrap';
import "./pay.css";
import PageFooter from '../footer';
import NavBar from '../navBar';
import "../styles.css";
import {Link, useLocation} from 'react-router-dom';

const Pay = () => {
    const location =  useLocation();
    const {price} =  location.state;
    return ( 
    <div class="color-fondo">
        <NavBar/>
        <div class="form-group container w-50 p-4 inline payment-form">
            <h2 class="my-4 form-c-title"><b>PAYMENT METHOD</b></h2>
            <div class="mt-1 mx-3">
                <div class="row mx-auto">
                    <label for="name">Name:</label>
                    <input class="form-control" type="text" name="name" required/>
                </div>

                <div class="row mx-auto">
                    <label for="credit_card">Credit Card Number:</label>
                    <input class="form-control" type="text" name="credit-card" inputmode="numeric" pattern="[0-9\s]{13,19}" required/>
                </div>

                <div class="row">
                    <div class="col-6">
                        <label for="exp-date">Expiration Date:</label>
                        <input class="form-control" type="date" name="exp-date" required/>
                    </div>

                    <div class="col-6">
                        <label for="cvv">CVV</label>
                        <input class="form-control" type="text" name="cvv" inputmode="numeric" pattern="[0-9\s]{3}" required/>
                    </div>
                </div>
                <p>Amount: {price}</p>
                <Link to="/">
                <Button type="submit" className={"cardButton mt-1"}>PAY NOW</Button>
                </Link>
            </div>
        </div>
        <PageFooter/>
    </div>
    );
}
 
export default Pay;
