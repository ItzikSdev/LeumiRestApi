import express, { NextFunction } from "express";
import apiStateClassController from "../controller/apiController";
const api = express()



api.get('/order/:id', apiStateClassController.get)
api.post('/order', apiStateClassController.post)
api.delete('/order/:id', apiStateClassController.delete)



export default api