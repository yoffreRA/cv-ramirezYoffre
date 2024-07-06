import * as brevo from '@getbrevo/brevo'

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY as string

);
interface Params {
    subject: string;
    to: { email: string; name: string; }[];
    htmlContent: string;
}

export async function sendEmail({subject, to, htmlContent}: Params) {
    try {
        const smtEmail = new brevo.SendSmtpEmail();
        smtEmail.subject = subject;
        smtEmail.to = to;
        smtEmail.htmlContent = `<html><body>${htmlContent}</body></html>`;
        smtEmail.sender = {name: 'Yoffre', email: 'ramirezamadoyoffre@gmail.com'};

        await apiInstance.sendTransacEmail(smtEmail);

    } catch (error) {
        console.error(error);
    }
}