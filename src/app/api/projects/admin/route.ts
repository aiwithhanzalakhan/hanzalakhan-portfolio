// import { NextResponse } from "next/server";
// import dbConnect from "../../../../lib/mongobd";
// import Project from "../../../../models/Project";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../../../../lib/auth";

// export async function GET() {
//   // const session = await getServerSession(authOptions);
//   // if (!session)
//   //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//   // await dbConnect();
//   // const projects = await Project.find().sort({ createdAt: -1 });
//   // return NextResponse.json(projects);
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json([], { status: 200 });
//   }

//   await dbConnect();
//   const projects = await Project.find().sort({ createdAt: -1 });

//   return NextResponse.json(projects);
// }
import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongobd"; // ✅ spelling fix
import Project from "../../../../models/Project";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json([], { status: 200 });
    }

    await dbConnect();

    const projects = await Project.find().sort({ createdAt: -1 });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("ADMIN PROJECT API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
