import { Request, Response, Router } from "express";
import { User } from "../models/userModel";


const router = Router();


router.post('/auth', async (req: Request, res: Response) => {
    const user = new User(req.body);
    try {
        await user.save();
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

export default router;