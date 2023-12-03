import express from "express";
const app = express();
const PORT = 3002;
import { UserInput } from "common";

app.use(express.json());

app.get("/", (req: any, res: any) => {
    let parsedUser = UserInput.safeParse(req.body);
    if(!parsedUser.success){
        return res.send("simple route: its working now again deffinetly");
    }
    return res.send("Nithin Shetty: workingggg again deffinately");
});


app.get("/nithinshetty", (req: any, res: any) => {
    let parsedUser = UserInput.safeParse(req.body);
    if(!parsedUser.success){
        return res.send("Nithin Shetty route: its working now again nsnsnsn");
    }
    return res.send("Nithin Shetty: if failed: 2 routes: its working now again nsnsns");
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});