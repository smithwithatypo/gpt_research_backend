const AudioController = {
    async uploadAudio(req: any, res: any) {
        console.log("Uploaded File: ", req.file.size); 
        res.json({ message: "Upload complete", fileInfo: req.file.size });
    }
};



export { AudioController };