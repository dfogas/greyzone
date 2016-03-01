import express from 'express';
import NotVerified from '../models/notverified';

const router = express.Router();

router.route('/signup')
  .post((req, res) => {
    const {email, pasword} = req.body;
    // TODO: security hash here
  });
