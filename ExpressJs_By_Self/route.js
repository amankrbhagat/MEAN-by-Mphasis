// const express = require("express");    // used in commonJS
import express from 'express'   /// ES module way to import
import { userLogin, userSignup } from './controller.js';   /// .js extension lagana zaruri hai

const router = express.Router();

router.get('/login',userLogin);
router.get('/signup',userSignup);


export default router;   /// export krna padega router  /// buut ye ES module ke liye kam krega naki commonJ wale me isliye ye use krnge

// module.exports = router;   /// commonJS me aise export krnge

