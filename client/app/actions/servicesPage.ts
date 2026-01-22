'use server';

import connectToDatabase from "@/lib/db";
import ServicesPage from "@/models/ServicesPage";

export async function getServicesPageContent() {
  await connectToDatabase();
  try {
    const content = await ServicesPage.findOne().sort({ createdAt: -1 }).lean();
    if (!content) return null;
    return JSON.parse(JSON.stringify(content));
  } catch (error) {
    console.error("Failed to fetch services page content", error);
    return null;
  }
}

export async function updateServicesPageContent(data: any) {
  await connectToDatabase();
  try {
    let content = await ServicesPage.findOne().sort({ createdAt: -1 });
    
    if (content) {
      content = await ServicesPage.findByIdAndUpdate(content._id, data, { new: true });
    } else {
      content = await ServicesPage.create(data);
    }
    return JSON.parse(JSON.stringify(content));
  } catch (error) {
    console.error("Failed to update services page content", error);
    throw error;
  }
}
