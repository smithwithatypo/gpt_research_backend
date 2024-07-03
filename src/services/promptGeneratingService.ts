import { ClientData } from "../models/clientData";

const PromptGeneratingService = {
    generateSystemPrompt(clientData: ClientData) {
        let promptPersonText: string = "";
        let promptDifficultyText: string = "";

        switch (clientData.promptData.voice) {
            case "Professor":
                promptPersonText = "Be a university computer science professor"
                break;
            case "Mentor":
                promptPersonText = "Be a senior software engineer working at a big tech company who helps teach new software engineers"
                break;
            case "Interviewer":
                promptPersonText = "Be a senior software engineer who is interviewing a new software engineer"
                break;
            case "Child":
                promptPersonText = "Be a fifth grader who is teaching another fifth grader about data structures and algorithms. Use analogies and simple language"
                break;
            default:
                console.log("default prompt person");
                break;  
        }

        switch (Number(clientData.promptData.difficulty)) {
            case 1:
                promptDifficultyText = "provide a lot of hints";
                break;
            case 2:
                promptDifficultyText = "provide a few hints";
                break;
            case 3:
                promptDifficultyText = "provide very few hints";
                break;
            case 4:
                promptDifficultyText = "provide almost no hints";
                break;
            case 5:
                promptDifficultyText = "provide no hints at all";
                break;
            default:
                console.log("default difficulty level");
                break;
        }
        return `${promptPersonText}, ${promptDifficultyText}`
    },
    
    generateCodePrompt() {
        const prompt = "this is my code to solve the problem above";
        return prompt;
    },

    generateTranscriptPrompt() {
        const prompt = "this is my verbal explanation of my solution to the problem above";
        return prompt;
    }

};

export { PromptGeneratingService };