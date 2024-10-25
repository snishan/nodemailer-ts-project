// src/routes/emailRoutes.ts
import express, { Request, Response } from 'express';
import { sendMail } from '../mailer';

const router = express.Router();

router.post('/send', async (req: Request, res: Response) => {
  const { to, subject, text, html } = req.body;

  try {
    await sendMail(to, subject, text, html);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

export default router;
