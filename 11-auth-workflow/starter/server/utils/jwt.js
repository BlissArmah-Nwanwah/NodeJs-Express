const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, );
  return token;
};

const isTokenValid = ( token ) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ({ res, user,refreshToken }) => {
  const accessTokenJWT = createJWT({ payload: {user} });
  const refreshTokenJwt = createJWT({ payload: {user,refreshToken} });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('accessToken', accessTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    maxAge: 1000 ,
  });

  res.cookie('refreshToken', refreshTokenJwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    expires: new Date(Date.now() + oneDay)
  });
};

// const attachSingleCookiesToResponse = ({ res, user }) => {
//   const token = createJWT({ payload: user });

//   const oneDay = 1000 * 60 * 60 * 24;
//   const fiveSeconds = 1000 * 5;

//   res.cookie('token', token, {
    // httpOnly: true,
    // expires: new Date(Date.now() + fiveSeconds),
    // secure: process.env.NODE_ENV === 'production',
    // signed: true,
//   });
// };

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
};
