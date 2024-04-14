import { v4 as uuidv4 } from 'uuid';

const generateCookie = () => {
    return uuidv4();
};

export default generateCookie;