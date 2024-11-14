import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { NextFunction, Request, Response } from "express";
import { IOrder, IProduct, IProductOrder } from "../types/orderTypes";

let products: IProduct[] = [];
let orders: IOrder[] = [];

const apiStateClassController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const order = orders.find((order) => order.id.includes(id));
      if (!order) {
        return res.status(404).json({ message: "Not found order " + id });
      }
      return res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  },

  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        productId,
        quantity,
      }: { productId: number[]; quantity: number[] } = req.body;
      if (productId.length === 0 || quantity.length === 0) {
        return res
          .status(400)
          .json({ message: "Please add product or quantity" });
      }

      if (products.length === 0) {
        try {
            const response = await axios.get(process.env.REST_API!);
            products = response.data;
        } catch (error) {
            next(error);
        }
      }
      const productsList: IProductOrder[] = productId.map((id, index) => ({
        productId: id,
        quantity: quantity[index],
      }));

      const newOrder: IOrder = {
        id: uuidv4(),
        products: productsList,
        status: "pending",
      };

      const matches = productId.map((id, index) => {
        const product = products.find((p) => p.id === id);
        if (product) {
          const availableStock = product.rating.count;
          return availableStock >= quantity[index];
        }
        return false;
      });

      if (matches.every((match) => match)) {
        newOrder.status = "approved";
        orders.push(newOrder);
        return res
          .status(201)
          .json({ message: "Order approved", status: newOrder });
      } else {
        newOrder.status = "rejected";
        return res
          .status(201)
          .json({ message: "Not enough products", status: newOrder.status });
      }
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const orderIndex = orders.findIndex((order) => order.id === id);
      if (orderIndex === -1) {
        return res.status(404).json({ message: "Not found order " + id });
      }
      orders = orders.filter((order) => order.id !== id);

      return res.status(200).json({ message: "Deleted " + id });
    } catch (error) {
      next(error);
    }
  },
};

export default apiStateClassController;
