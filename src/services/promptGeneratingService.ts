const PromptGeneratingService = {
    generateSystemPrompt(promptPerson: string, promptDifficulty: number) {
        
        switch (promptPerson) {
            case "HS_teacher":
                console.log("high school teacher");
                break;
            case "professor":
                console.log("professor");
                break;
            case "senior_SWE":
                console.log("senior software engineer");
                break;
            case "interviewer":
                console.log("interviewer");
                break;
            default:
                console.log("default");
                break;  
        }

        switch (promptDifficulty) {
            case 1:
                console.log("choice 1");
                break;
            case 2:
                console.log("choice 2");
                break;
            case 3:
                console.log("choice 3");
                break;
            case 4:
                console.log("choice 4");
                break;
            case 5:
                console.log("choice 5");
                break;
            default:
                console.log("default");
                break;
        }
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