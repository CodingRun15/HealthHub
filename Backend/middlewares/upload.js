const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        let userID = req.id;
        // console.log(userID);
        cb(null, userID+ext);
    },
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "application/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .pdf format allowed!'));
        
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 5
    }
  });
  const upload = multer({ storage: storage });
  module.exports = {upload};
