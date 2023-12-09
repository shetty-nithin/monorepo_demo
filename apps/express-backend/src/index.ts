import express from "express";
const app = express();
const PORT = 3002;
import { UserInput } from "common";

app.use(express.json());

app.get("/", (req: any, res: any) => {
    let parsedUser = UserInput.safeParse(req.body);
    if(!parsedUser.success){
        return res.send("I love this route");
    }
    return res.send("Testing CI/CD 5 all");
});


app.get("/nithinshetty", (req: any, res: any) => {
    let parsedUser = UserInput.safeParse(req.body);
    if(!parsedUser.success){
        return res.send("I love that route");
    }
    return res.send("Testing CI/CD with ns 5 all");
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});