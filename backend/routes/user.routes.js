import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { followUnfollowUser, getUserProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/profile/:username", protectRoute, getUserProfile);
// router.get("/suggested", getUserProfile);
router.post("/follow/:id", followUnfollowUser);
// router.get("/update", protectRoute, updateUserProfile);

export default router;