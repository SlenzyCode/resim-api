const express = require("express");
const app = express();
const { Hercai } = require("hercai");
const herc = new Hercai();

app.get("/", (req, res) => {
    res.json({ message: "Eee, bir resim çizdirmeyecek misin?" });
});

app.get("/ai/:prompt", (req, res) => {
    const prompt = req.params.prompt.toLowerCase();
    herc.drawImage({ model: "v3", prompt: prompt }).then((response) => {
        res.json({ sonuc: response.url });
    });
});

app.listen(3000);