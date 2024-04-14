import { AnalyticsPayload } from "../models/analyticsPayload.js"
import supabase from "../utils/database.js"


async function analyticsMiddleware(req: any, res: any) {

    const eventData = new AnalyticsPayload(
        req.cookies.sessionID,
        req.body.datetime,
        req.body.studentCodeData,
        req.body.problemChoice,
        req.body.transcribedAudio,
        req.body.promptPerson,
        req.body.promptDifficulty,
        res.locals.generatedText
    );

    try {
        await processAnalyticsData(eventData);
    } catch (err) {
        console.error('Analytics tracking failed:', err);
    }
}

async function processAnalyticsData(eventData: AnalyticsPayload) {
    const { data, error } = await supabase
    .from('Analytics_test')
    .insert([ eventData ])
    .select()

    console.log("response from supabase in analytics: ", data, error)






    // // Logic to queue or batch data to the database   // delete?--------------
    // return new Promise((resolve, reject) => {
        

    //     resolve('success');
    //     reject('error');

    //     // Simulate async database operation
    //     // Replace this with your actual database call
    //     setTimeout(() => {  // delete this--------------------------
    //         resolve(console.log("eventdata: ", data));  // or reject('error message') to simulate a failure
    //     }, 100); // simulate delay
    // });
}

export default analyticsMiddleware;