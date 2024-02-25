import multer from 'multer';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        // cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'audio/webm' || file.mimetype === 'video/webm') {
        cb(null, true);
    }
    else {
        cb(new Error('Unsupported file format'), false);
    }
};
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
});
export default upload;
