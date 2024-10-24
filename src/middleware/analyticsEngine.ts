import { AnalyticsPayload } from "../models/analyticsPayload.js"
import supabase from "../utils/database.js"

const SUPABASE_COLLECTION = 'Analytics_v2';

async function analyticsMiddleware(req: any, res: any) {

    try {
        const payloadData = {
            sessionID: req.cookies.sessionID,
            feedback: req.body.metaData.feedback,
            datetime: req.body.metaData.datetime,
            generatedText: res.locals.generatedText,
            temperature: req.body.promptData.temperature,
            voice: req.body.promptData.voice.text,
            instruction: req.body.promptData.instruction.text,
            guardrail: req.body.promptData.guardrail.text,
            summarize: req.body.promptData.summarize.text,
            COT: req.body.promptData.COT.text,
            extractor: req.body.promptData.extractor.text,
            code: req.body.studentData.code,
            transcript: req.body.studentData.transcript,
            problemID: req.body.studentData.problemID,
            netID: req.body.studentData.netID
        };
        let eventData = new AnalyticsPayload(payloadData);

        try {
            await processAnalyticsData(eventData);
            console.log("Analytics tracking complete");
        } catch (err) {
            console.error('Analytics tracking failed:', err);
        }
    } catch (err) {
        console.error('Error creating analytics payload:', err);
    }
}


async function processAnalyticsData(eventData: AnalyticsPayload) {
    const { data, error } = await supabase
    .from(SUPABASE_COLLECTION)
    .insert([ eventData ])
    .select()

    if (error) {
        console.log("error from supabase in analytics: ", error)
    }
}

export default analyticsMiddleware;