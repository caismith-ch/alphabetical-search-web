import {Router} from "express";
import {searchHandler} from "../handlers";

const request = require('request');

// a router is a collection of routes that can have their own middleware chain. It is helpful to create routers for
// a collection of related routes for better organisation and specific logic.
const router = Router();
router.get("/", searchHandler);
router.get("/get-results", () => {

    request('http://localhost:8080/movies', {json: true}, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        body.forEach(element => {
        console.log(element.title);
        });
    });

});

export default router;
