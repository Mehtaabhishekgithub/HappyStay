import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { createBooking } from "../controllers/booking.controller.js"


let bookingRouter = express.Router()

bookingRouter.post("/create",isAuth,createBooking)


export default bookingRouter