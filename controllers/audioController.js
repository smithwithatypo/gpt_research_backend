const AudioController = {
    async uploadAudio(req, res) {
        console.log("Uploaded File: ", req.file); // Information about the saved file
        
        // You can perform additional server-side processing here
        res.json({ message: "Upload complete", fileInfo: req.file.size });
    }
    
};



export { AudioController };


