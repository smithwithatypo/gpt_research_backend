interface IAnalyticsPayload {
    sessionID?: string;
    feedback: string;
    datetime: string;
    generatedText: string;
    temperature: number;
    voice: string;
    instruction: string;
    guardrail: string;
    summarize: string;
    COT: string;
    extractor: string;
    code: string;
    transcript: string;
    problemID: number;
    netID: string;
}

export class AnalyticsPayload {
    sessionID?: string;
    feedback: string;
    datetime: string;
    generatedText: string;
    temperature: number;
    voice: string;
    instruction: string;
    guardrail: string;
    summarize: string;
    COT: string;
    extractor: string;
    code: string;
    transcript: string;
    problemID: number;
    netID: string;

    constructor(data: IAnalyticsPayload) {
        this.sessionID = data.sessionID;
        this.feedback = data.feedback;
        this.datetime = data.datetime;
        this.generatedText = data.generatedText;
        this.temperature = data.temperature;
        this.voice = data.voice;
        this.instruction = data.instruction;
        this.guardrail = data.guardrail;
        this.summarize = data.summarize;
        this.COT = data.COT;
        this.extractor = data.extractor;
        this.code = data.code;
        this.transcript = data.transcript;
        this.problemID = data.problemID;
        this.netID = data.netID;
    }
}