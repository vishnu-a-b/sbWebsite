'use server';

import connectToDatabase from "@/lib/db";
import About from "@/models/About";

export async function getAboutContent() {
  await connectToDatabase();
  try {
    const about = await About.findOne().sort({ createdAt: -1 }).lean();
    if (!about) return null;
    return JSON.parse(JSON.stringify(about));
  } catch (error) {
    console.error("Failed to fetch about content", error);
    return null;
  }
}

export async function updateAboutContent(data: any) {
  await connectToDatabase();
  try {
    let about = await About.findOne().sort({ createdAt: -1 });
    
    // Explicitly handle nested objects to ensure they are updated correctly
    const updateData = {
      ...data,
      mission: { ...about?.mission, ...data.mission },
      vision: { ...about?.vision, ...data.vision },
      motto: { ...about?.motto, ...data.motto },
      belief: { ...about?.belief, ...data.belief },
    };

    if (about) {
      about = await About.findByIdAndUpdate(about._id, updateData, { new: true });
    } else {
      about = await About.create(updateData);
    }
    return JSON.parse(JSON.stringify(about));
  } catch (error) {
    console.error("Failed to update about content", error);
    throw error;
  }
}
