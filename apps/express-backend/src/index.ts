import express from "express";
const app = express();
const PORT = 3002;
import { UserInput } from "common";

app.use(express.json());

app.get("/", (req: any, res: any) => {
    let parsedUser = UserInput.safeParse(req.body);
    if(!parsedUser.success){
        return res.send("simple route: working for sure");
    }
    return res.send("Nithin Shetty: its working alonee");
});


app.get("/nithinshetty", (req: any, res: any) => {
    let parsedUser = UserInput.safeParse(req.body);
    if(!parsedUser.success){
        return res.send("Nithin Shetty route: workign alone");
    }
    return res.send("Nithin Shetty: if failed: 2 routes: working alone");
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});