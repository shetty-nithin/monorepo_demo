import express from "express";
const app = express();
const PORT = 3002;
import { UserInput } from "common";

app.use(express.json());

app.get("/", (req: any, res: any) => {
    let parsedUser = UserInput.safeParse(req.body);
    if(!parsedUser.success){
        return res.send("--------------I love this route-----------------successfull");
    }
    return res.send("else0.1");
});


app.get("/nithinshetty", (req: any, res: any) => {
    let parsedUser = UserInput.safeParse(req.body);
    if(!parsedUser.success){
        return res.send("I love that route1");
    }
    return res.send("else1");
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});