const express = require("express");

const SupperModel = require("../models/supper");
const config = require("../config");

const publicRoute = express.Router();


publicRoute.route("/")
    .get((req, res) => {
        SupperModel.find((err, suppers) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(suppers);
            }
        });
    })

publicRoute.route("/:id")
    .get((req, res) => {
        supperModel.findById(req.params.id, (err, supper) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (supper === null) {
                    res.status(404).send({
                        success: false,
                        err: "Result not found!"
                    });
                } else {
                    res.status(200).send(supper);
                }
            }
        });
    })


module.exports = publicRoute;