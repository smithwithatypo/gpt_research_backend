import generateCookie from '../services/generateCookieService.js';

const cookieAssignment = (req: any, res: any, next: any) => {
    // console.log('Accessing cookieAssignment middleware');
    // console.log('Secure:', req.secure);
    console.log('Cookies in cookieAssignment middlware: ', req.cookies);

    if (!req.cookies.sessionID) {
        console.log("no req.cookies.sessionID detected")
        const newSessionId = generateCookie();

        res.cookie('sessionID', newSessionId, {
            // domain: 'localhost',
            path: '/',
            httpOnly: true,
            secure: true,
            maxAge: 14400000,
            sameSite: 'None'
        });
    }
    next(); // Continue to the next middleware or route handler
};

export default cookieAssignment;