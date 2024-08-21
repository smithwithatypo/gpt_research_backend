const PromptGeneratingService = {
    
    generateCodePrompt() {
        const prompt = "this is my pseudocode to solve the problem above";
        return prompt;
    },

    generateTranscriptPrompt() {
        const prompt = "this is my verbal explanation of my solution to the problem above";
        return prompt;
    }

};

export { PromptGeneratingService };