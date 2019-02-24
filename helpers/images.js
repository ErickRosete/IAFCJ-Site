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
    const imageLink = saveImageAux(req.file, res);
    res.status(200).json(imageLink);
}

exports.saveImages = (req, res) => {
    const imageLinks = [];
    req.files.forEach(file => {
        const imageLink = saveImageAux(file, res);
        imageLinks.push(imageLink);
    });
    res.status(200).json(imageLinks);
}

const saveImageAux = (file, res) => {
    const tempPath = file.path;
    const targetPath = path.join(__dirname, "../public/images", file.originalname);
    const imageLink = `https://server.iglesiacristianasanluis.com/images/${file.originalname}`;

    const fileExt = path.extname(file.originalname).toLowerCase();
    if (fileExt === ".png" || fileExt === ".jpg" || fileExt === ".jpeg"
        || fileExt === ".bmp" || fileExt === ".gif") {
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);
            console.log("image uploaded")
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

    return imageLink;
}
