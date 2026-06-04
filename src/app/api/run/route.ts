import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      script,
      language,
      versionIndex,
      stdin,
    } = await req.json();

    const response = await fetch(
      "https://api.jdoodle.com/v1/execute",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: process.env.JDOODLE_CLIENT_ID,
          clientSecret:
            process.env.JDOODLE_CLIENT_SECRET,
          script,
          language,
          versionIndex,
          stdin,
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      output: data.output,
      cpuTime: data.cpuTime,
      memory: data.memory,
      statusCode: data.statusCode,
      error: data.error,
    });
  } catch (error) {
    console.error("JDoodle Error:", error);

    return NextResponse.json(
      {
        error: "Execution Failed",
      },
      {
        status: 500,
      }
    );
  }
}