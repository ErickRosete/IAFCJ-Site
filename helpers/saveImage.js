const path = require("path");
const fs = require("fs");

const handleError = (err, res) => {
    console.log(err)

    res
        .status(500)
        .contentType("text/plain")
        .end("Oops! Something went wrong!");
};

exports.saveImage = (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "../public/images", req.file.originalname);
    const imageLink = `http://localhost:8000/images/${req.file.originalname}`;

    const fileExt = path.extname(req.file.originalname).toLowerCase();
    if (fileExt === ".png" || fileExt === ".jpg" || fileExt === ".jpeg"
        || fileExt === ".bmp" || fileExt === ".gif") {
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
            console.log("image uploaded")
            res.status(200).json(imageLink);
        });
    } else {
        fs.unlink(tempPath, err => {
            if (err) return handleError(err, res);
            console.log("incorrect format")

            res.status(403)
                .contentType("text/plain")
                .end("Only .png, .jpg, .jpeg, .bmp and .gif files are allowed!");
        });
    }
}
