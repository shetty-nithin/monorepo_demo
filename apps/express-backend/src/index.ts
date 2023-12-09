import express from "express";
const app = express();
const PORT = 3002;
import { UserInput } from "common";

app.use(express.json());

app.get("/", (req: any, res: any) => {
    let parsedUser = UserInput.safeParse(req.body);
    if(!parsedUser.success){
        return res.send("Testing CI/CD of express web applications: dist is ignored");
    }
    return res.send("Testing CI/CD 5 all");
});


app.get("/nithinshetty", (req: any, res: any) => {
    let parsedUser = UserInput.safeParse(req.body);
    if(!parsedUser.success){
        return res.send("Testing CI/CD with Nithin Shetty 5 all");
    }
    return res.send("Testing CI/CD with ns 5 all");
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});