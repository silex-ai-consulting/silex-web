import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  needs?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.email || !body.needs) {
    return NextResponse.json(
      {
        ok: false,
        message: "Completa nombre, correo y objetivo principal."
      },
      { status: 422 }
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Diagnóstico recibido. La integración externa puede conectarse aquí en el siguiente paso.",
    lead: {
      name: body.name,
      email: body.email,
      company: body.company ?? "",
      needs: body.needs
    }
  });
}
