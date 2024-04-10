const PromptGeneratingService = {
    generateSystemPrompt(promptPerson: string, promptDifficulty: string) {
        let promptPersonText: string = "";
        let promptDifficultyText: string = "";

        switch (promptPerson) {
            case "Professor":
                promptPersonText = "Be a university-level computer science professor"
                break;
            case "Mentor":
                promptPersonText = "Be a senior software engineer working at a big tech company who helps teach new software engineers"
                break;
            case "Interviewer":
                promptPersonText = "Be a senior software engineer who is interviewing a new software engineer"
                break;
            default:
                console.log("default");
                break;  
        }

        switch (promptDifficulty) {
            case "1":
                promptDifficultyText = "provide a lot of hints";
                break;
            case "2":
                promptDifficultyText = "provide a few hints";
                break;
            case "3":
                promptDifficultyText = "provide very few hints";
                break;
            case "4":
                promptDifficultyText = "provide almost no hints";
                break;
            case "5":
                promptDifficultyText = "provide no hints at all";
                break;
            default:
                console.log("default");
                break;
        }
        return `${promptPersonText}, ${promptDifficultyText}`
    },
    
    generateCodePrompt() {
        const prompt = "this is my code to solve the problem above";
        return prompt;
    },

    generateTranscriptPrompt() {
        const prompt = "this is my explanation of my solution code to the problem above ";
        return prompt;
    }

};

export { PromptGeneratingService };