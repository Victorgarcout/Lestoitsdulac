import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;
    const { name, email, phone, address, message } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Le nom est requis (minimum 2 caractères).' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Une adresse email valide est requise.' },
        { status: 400 }
      );
    }

    // Log the contact request (email service will be connected later)
    console.log('📬 Nouvelle demande de contact — Les Toits du Lac');
    console.log('─────────────────────────────────────────────────');
    console.log(`Nom     : ${name.trim()}`);
    console.log(`Email   : ${email.trim()}`);
    console.log(`Tél     : ${phone?.trim() || 'Non renseigné'}`);
    console.log(`Adresse : ${address?.trim() || 'Non renseignée'}`);
    console.log(`Message : ${message?.trim() || 'Aucun message'}`);
    console.log('─────────────────────────────────────────────────');
    console.log(`Reçu le : ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}`);

    // TODO: connecter un service email (Resend, SendGrid, Nodemailer…)
    // Exemple avec Resend :
    // await resend.emails.send({
    //   from: 'contact@lestoitsdulac.fr',
    //   to: '[Email]',
    //   subject: `Nouvelle demande de ${name}`,
    //   html: `...`,
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Votre demande a bien été reçue. Nous vous recontactons sous 48h.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée.' }, { status: 405 });
}
