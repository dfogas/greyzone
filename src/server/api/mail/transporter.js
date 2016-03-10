import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        authMethod: 'LOGIN',
        auth: {
          user: 'keyholder@ghoststruggle.com',
          pass: 'PAgm2bR7FnDX'
        }
    });

export default transporter;
