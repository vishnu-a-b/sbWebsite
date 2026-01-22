'use server';

import connectToDatabase from "@/lib/db";
import AboutImage from "@/models/AboutImage";

export async function getAboutImage() {
  await connectToDatabase();
  try {
    const image = await AboutImage.findOne({ isActive: true }).lean();
    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    console.error("Failed to fetch about image", error);
    return null;
  }
}

export async function createAboutImage(data: any) {
  await connectToDatabase();
  try {
    // Deactivate all existing images
    await AboutImage.updateMany({}, { isActive: false });

    // Create new active image
    const image = await AboutImage.create({ ...data, isActive: true });
    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    console.error("Failed to create about image", error);
    throw error;
  }
}

export async function updateAboutImage(id: string, data: any) {
  await connectToDatabase();
  try {
    // Deactivate all existing images
    await AboutImage.updateMany({}, { isActive: false });

    // Update and activate the specified image
    const image = await AboutImage.findByIdAndUpdate(
      id,
      { ...data, isActive: true },
      { new: true }
    );
    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    console.error("Failed to update about image", error);
    throw error;
  }
}

export async function deleteAboutImage(id: string) {
  await connectToDatabase();
  try {
    await AboutImage.findByIdAndDelete(id);
    return { success: true };
  } catch (error) {
    console.error("Failed to delete about image", error);
    throw error;
  }
}

export async function getAllAboutImages() {
  await connectToDatabase();
  try {
    const images = await AboutImage.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(images));
  } catch (error) {
    console.error("Failed to fetch all about images", error);
    return [];
  }
}
