import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Contact from '@/models/Contact';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();

    const newContact = await Contact.create(body);

    return NextResponse.json(
      { message: 'Message sent successfully', data: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact Error:', error);
    return NextResponse.json(
      { message: 'Failed to send message', error: String(error) },
      { status: 500 }
    );
  }
}
