import express from 'express';
import auth from '../../middleware/auth.js';
import { uploadMaterial, getMaterials } from '../../controllers/material/material.controller.js';
import { upload } from '../../middleware/upload.middleware.js';


const router = express.Router();

// ✅ Upload other materials (notes, videos, etc.)
router.post('/upload', auth, upload.single('file'), uploadMaterial);

// ✅ Get other materials
router.get('/', getMaterials);



export default router;
