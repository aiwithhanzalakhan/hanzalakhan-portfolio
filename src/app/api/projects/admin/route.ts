import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongobd";
import Project from "../../../../models/Project";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const projects = await Project.find().sort({ createdAt: -1 });
  return NextResponse.json(projects);
}
