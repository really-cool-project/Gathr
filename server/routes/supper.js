const express = require("express");
const expressJwt = require("express-jwt");

const SupperModel = require("../models/supper");
const config = require("../config");

const supperRoute = express.Router();

const authorize = expressJwt({secret: config.secret})

supperRoute.use(authorize);

supperRoute.route("/")
    .get((req, res) => {
        SupperModel.find({owner: req.user._id}, req.query, (err, suppers) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(suppers);
            }
        });
    })
    .post((req, res) => {
        let newSupper = new SupperModel(req.body);
        newSupper.owner = req.user._id;
        newSupper.save((err, supper) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(supper);
            }
        });
    });
supperRoute.route("/:id")
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
    .delete((req, res) => {
        SupperModel.findByIdAndRemove(req.params.id, (err, supper) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (supper === null) {
                    res.status(404).send({
                        success: true,
                        err: "Result not found!"
                    });
                } else {
                    res.status(200).send({
                        success: true,
                        id: supper._id
                    });
                }
            }
        })
    })
    .put((req, res) => {
        SupperModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, supper) => {
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
    });


module.exports = supperRoute;