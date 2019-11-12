import {Request, Response} from "express";

const request = require('request');
// TODO change to alphabetical search url
const basePath: string = "http://localhost:8080/movies/";

export default (req: Request, res: Response) => {
    let companyName: string = req.query["company-name"];

    request(basePath + companyName, {json: true}, (err, res, body) => {
        if (err) { return console.log(err); }
            console.log(body);
            // TODO will be needed to sift through the objects
            // body.forEach(element => {
            //     console.log(element.title);
            // });
    });
    res.render("test");
  };