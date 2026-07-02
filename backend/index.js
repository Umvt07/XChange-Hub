import axios from "axios";
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
const app=express();
dotenv.config();
app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:["GET"],
    credentials:true,
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port=process.env.PORT||4000;
app.get("/convert",async(req,res)=>{
    const {base_currency,currencies}=req.query;
    try {
        const url=`https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.API_KEY}&base_currency=${base_currency}&currencies=${currencies}`;
        console.log(url);
        const response=await axios.get(url);
        console.log(response);
        res.json(response.data);
    } catch (error) {
        console.error("error in fetching data",error.message,error.response?.data);
        res.status(500).json({
            message:"INTERNAL SERVER ERROR"
        });
    }
});

app.listen(port,()=>{
    console.log(`Backend Server running on port ${port}`);
})