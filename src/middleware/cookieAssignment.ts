import generateCookie from '../services/generateCookieService.js';

const cookieAssignment = (req: any, res: any, next: any) => {
    console.log('Accessing cookieAssignment middleware');
    console.log('Secure:', req.secure);
    console.log('Cookies:', req.cookies);

    if (!req.cookies.sessionID) {
        const newSessionId = generateCookie();

        res.cookie('sessionID', newSessionId, {
            httpOnly: true,
            secure: true, // Set to true if using HTTPS, set to false if using HTTP or testing locally
            maxAge: 14400000, // expires in 4 hours
            sameSite: 'strict'
        });
    }
    next(); // Continue to the next middleware or route handler
};

export default cookieAssignment;