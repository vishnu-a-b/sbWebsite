import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Volunteer from '@/models/Volunteer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();

    const newVolunteer = await Volunteer.create(body);

    return NextResponse.json(
      { message: 'Volunteer registered successfully', data: newVolunteer },
      { status: 201 }
    );
  } catch (error) {
    console.error('Volunteer Error:', error);
    return NextResponse.json(
      { message: 'Failed to register volunteer', error: String(error) },
      { status: 500 }
    );
  }
}
