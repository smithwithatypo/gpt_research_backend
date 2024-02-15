const AudioController = {
    async uploadAudio(req, res) {
        console.log("Uploaded File: ", req.file.size); 
        res.json({ message: "Upload complete", fileInfo: req.file.size });
    }
};



export { AudioController };


