import connectMongoDB from "@/app/libs/mongodb"
import Job from "@/app/models/Job";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, postedBy } = await request.json();
  await connectMongoDB();
  await Job.create({ title, description, postedBy });
  return NextResponse.json({ message: "Job created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const jobs = await Job.find();
  return NextResponse.json(jobs);
}