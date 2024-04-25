import { AnalyticsPayload } from "../models/analyticsPayload.js"
import supabase from "../utils/database.js"

const SUPABASE_COLLECTION = 'Analytics_v1';

async function analyticsMiddleware(req: any, res: any) {
    // console.log('cookie data in analytics middleware: ', req.cookies);  // delete. debug only

    try {
        const payloadData = {
            sessionID: req.cookies.sessionID,
            feedback: req.body.metaData.feedback,
            datetime: req.body.metaData.datetime,
            generatedText: res.locals.generatedText,
            temperature: req.body.promptData.temperature,
            voice: req.body.promptData.voice,
            difficulty: req.body.promptData.difficulty,
            model: req.body.promptData.model,
            code: req.body.studentData.code,
            transcript: req.body.studentData.transcript,
            problemID: req.body.studentData.problemID
        };
        let eventData = new AnalyticsPayload(payloadData);

        console.log("here", eventData);
        try {
            await processAnalyticsData(eventData);
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