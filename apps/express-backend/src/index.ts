import express from "express";
const app = express();
const PORT = 3002;
import { UserInput } from "common";

app.use(express.json());

app.get("/", (req: any, res: any) => {
    let parsedUser = UserInput.safeParse(req.body);
    if(!parsedUser.success){
        return res.send("Incorrect Input");
    }
    return res.send("Correct Input");
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});