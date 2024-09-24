import { auth, currentUser } from "@clerk/nextjs/server";
import { NEXT_BODY_SUFFIX } from "next/dist/lib/constants";
import { NextResponse } from "next/server";

export async function GET() {
    const {userId} = auth()
    const user = await currentUser()

    if(!userId) {
        return NextResponse.json({message: "Not Authenticated"}, {status: 401})
    }

    return NextResponse.json(
        {
            message: "Authenticated",
            data: {userId: userId, username: user?.username }
        },
        { status: 200}
    );
}