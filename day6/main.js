
import express from 'express';
import router from './routes/blog_route.js';
const app = express();
app.use(router)
const port = 3000
app.listen(port, ()=>{
    console.log(`listening on ${port}`);//use backtiks not single quote bcs it takes the '...' as string literal
}
)