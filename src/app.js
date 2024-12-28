import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin : process.env.CORS_ORIGIN
}))
app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended:true , limit: "16kb"}))

app.use(express.static("public"))

app.use(cookieParser())

//routes
import router from "./routes/user.routes.js";

app.use('/api/v1/user',router)


//http://localhost:8000/api/v1/user/register
app.get('/test', (req, res) => {
  res.send('Server is running');
});
export {app}
