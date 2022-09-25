import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeebackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeebackSpy },
    { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Exemple test',
            screenshot: 'data:image/png;base64,dfgdfgdfgdf'
        })).resolves.not.toThrow();

        // verifica se o método de create e sendmail está sendo executado
        expect(createFeebackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    
    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'Exemple test',
            screenshot: 'data:image/png;base64,dfgdfgdfgdf'
        })).rejects.toThrow();
    });
    
    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,dfgdfgdfgdf'
        })).rejects.toThrow();
    });
    
    it('should not be able to submit feedback with an invalid screensgot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Exemple test',
            screenshot: 'dfgdfgdfgdf'
        })).rejects.toThrow();
    });
})