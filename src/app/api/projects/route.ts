import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongobd";
import Project from "@/models/Project";
import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/route";
import { authOptions } from "../../../lib/auth";
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    await dbConnect();

    const body = await req.json();
    console.log("BODY 👉", body);

    const project = await Project.create(body);

    return NextResponse.json(project, { status: 201 });
  } catch (error: any) {
    console.error("api error", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({ isHidden: false }).sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch (error: any) {
    console.error("get error ", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  // const session = await getServerSession(authOptions);
  // if (!session)
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const { id, isHidden } = await req.json();

  const project = await Project.findByIdAndUpdate(
    id,
    { isHidden },
    { new: true }
  );

  return NextResponse.json(project);
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const { id } = await req.json();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
