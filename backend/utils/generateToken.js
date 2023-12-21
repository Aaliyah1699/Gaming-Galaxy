import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        signed: true,
        sameSite: 'strict',
        expires: 24 * 60 * 60 * 1000, // 1 day
    });
};

export default generateToken;
