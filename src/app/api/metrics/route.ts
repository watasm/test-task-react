import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const allowedOrigin = req.headers.get("origin");
  let response: NextResponse;
  const token = cookies().get("accessToken")?.value;

  const body = await req.json();

  const res = await fetch("https://service-1-lh4l.onrender.com/metrics/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ start_time: body.from, end_time: body.end }),
  });
  const data = await res.json();

  if (data.code && data.code === "token_not_valid") {
    response = new NextResponse(JSON.stringify({ data }), {
      status: 401,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin || "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
        "Access-Control-Max-Age": "86400",
      },
    });
  } else {
    const formated = {
      ...data,
      indastryBoxOffice: data["Indastry box office"],
    };

    response = new NextResponse(JSON.stringify({ data: formated }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin || "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  return response;
}
