export class AnalyticsPayload {
    sessionID: string;
    datetime: string;
    studentCodeData: string;
    problemChoice: string;
    transcribedAudio: string;
    promptPerson: string;
    promptDifficulty: string;
    generatedText: string;

    constructor(
        sessionID: string,
        datetime: string,
        studentCodeData: string,
        problemChoice: string,
        transcribedAudio: string,
        promptPerson: string,
        promptDifficulty: string,
        generatedText: string
    ) {
        this.sessionID = sessionID;
        this.datetime = datetime;
        this.studentCodeData = studentCodeData;
        this.problemChoice = problemChoice;
        this.transcribedAudio = transcribedAudio;
        this.promptPerson = promptPerson;
        this.promptDifficulty = promptDifficulty;
        this.generatedText = generatedText;
    }
}