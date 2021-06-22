import express from "express";

const app = express();

app.get("/test", (request, response) => {
    return response.send("ola mundo")
});

app.post("/test-post", (request, response) => {
    return response.send("continue a nadar")
})

app.listen(3000, () => console.log("server is running") );