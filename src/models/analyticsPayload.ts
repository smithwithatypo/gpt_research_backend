interface IAnalyticsPayload {
    sessionID?: string; // Optional
    feedback: string;
    datetime: string;
    generatedText: string;
    temperature: number;
    voice: string;
    difficulty: number;
    model: string;
    code: string;
    transcript: string;
    problemID: number;
}

export class AnalyticsPayload {
    sessionID?: string;
    feedback: string;
    datetime: string;
    generatedText: string;
    temperature: number;
    voice: string;
    difficulty: number;
    model: string;
    code: string;
    transcript: string;
    problemID: number;

    constructor(data: IAnalyticsPayload) {
        this.sessionID = data.sessionID;
        this.feedback = data.feedback;
        this.datetime = data.datetime;
        this.generatedText = data.generatedText;
        this.temperature = data.temperature;
        this.voice = data.voice;
        this.difficulty = data.difficulty;
        this.model = data.model;
        this.code = data.code;
        this.transcript = data.transcript;
        this.problemID = data.problemID;
    }
}








// export class AnalyticsPayload {
//     sessionID?: string;
//     feedback: string;
//     datetime: string;
//     generatedText: string;
//     temperature: number;
//     voice: string;
//     difficulty: number;
//     model: string;
//     code: string;
//     transcript: string;
//     problemID: number;

//     constructor(
//         sessionID: string,
//         feedback: string,
//         datetime: string,
//         generatedText: string,
//         temperature: number,
//         voice: string,
//         difficulty: number,
//         model: string,
//         code: string,
//         transcript: string,
//         problemID: number
//     ) {
//         this.sessionID = sessionID;
//         this.feedback = feedback;
//         this.datetime = datetime;
//         this.generatedText = generatedText;
//         this.temperature = temperature;
//         this.voice = voice;
//         this.difficulty = difficulty;
//         this.model = model;
//         this.code = code;
//         this.transcript = transcript;
//         this.problemID = problemID;
//     }
// }