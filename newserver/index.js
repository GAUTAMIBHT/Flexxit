import {app} from './app.js';
import Razorpay from "razorpay";


export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });



app.listen(5000, console.log("5000"));
