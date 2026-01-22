'use server';

import connectToDatabase from "@/lib/db";
import Volunteer from "@/models/Volunteer";
import Contact from "@/models/Contact";

export async function getAdminData(type: 'volunteers' | 'contacts') {
  await connectToDatabase();

  try {
    let data;
    switch (type) {
      case 'volunteers':
        data = await Volunteer.find({}).sort({ createdAt: -1 }).lean();
        break;
      case 'contacts':
        data = await Contact.find({}).sort({ createdAt: -1 }).lean();
        break;
    }
    // Convert _id and dates to string to be passed to client
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.error("Failed to fetch admin data", error);
    return [];
  }
}
