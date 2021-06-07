import fs from "fs";
import express from "express";

const app = express();

// Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));
console.log(fs.readFileSync("./README.md", "utf-8"));
