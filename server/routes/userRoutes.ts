import { Request, Response, Router } from "express";
import { User } from "../models/userModel";
const jwt = require('jsonwebtoken');


const router = Router();


router.post('/auth', async (req: Request, res: Response) => {
    const user = new User(req.body);
    try {
        await user.save();
        const accessToken = jwt.sign(user.toObject(), process.env.ACCESS_TOKEN_SECRET!);
        res.setHeader("Set-Cookie", `user=${accessToken}; Path=/`);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
})

router.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        console.log(error);
    }
})

router.get('/user', async (req: Request, res: Response) => {
    try {
        const data = await jwt.verify(
            req.headers.authorization!, 
            process.env.ACCESS_TOKEN_SECRET!
        );
        const user = await User.find({email: data?.email});
        res.send(user);
    } catch (error) {
        console.log(error);
    }
})

export default router;