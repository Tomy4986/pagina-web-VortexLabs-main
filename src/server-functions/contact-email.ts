import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Resend } from "resend";

import { site } from "@/config/site";

const contactEmailSchema = z.object({
  nombre: z.string().trim().min(1).max(120),
  negocio: z.string().trim().max(200).optional().default(""),
  email: z.string().trim().email(),
  whatsapp: z.string().trim().max(40).optional().default(""),
  tipo: z.string().trim().max(200).optional().default(""),
  presupuesto: z.string().trim().max(200).optional().default(""),
  mensaje: z.string().trim().max(1500).optional().default(""),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator(contactEmailSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Falta RESEND_API_KEY en el entorno.");
    }

    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";

    const text = [
      "Hola, quiero hacer una consulta:",
      `Nombre: ${data.nombre}`,
      `Negocio: ${data.negocio || "-"}`,
      `Email: ${data.email}`,
      `WhatsApp: ${data.whatsapp || "-"}`,
      `Tipo de proyecto: ${data.tipo || "-"}`,
      `Presupuesto aproximado: ${data.presupuesto || "-"}`,
      `Mensaje: ${data.mensaje || "-"}`,
    ].join("\n");

    await resend.emails.send({
      from,
      to: [site.email],
      replyTo: data.email,
      subject: `Consulta desde la web - ${data.nombre}`,
      text,
      html: `<p><strong>Hola, quiero hacer una consulta:</strong></p>
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Negocio:</strong> ${data.negocio || "-"}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>WhatsApp:</strong> ${data.whatsapp || "-"}</p>
        <p><strong>Tipo de proyecto:</strong> ${data.tipo || "-"}</p>
        <p><strong>Presupuesto aproximado:</strong> ${data.presupuesto || "-"}</p>
        <p><strong>Mensaje:</strong> ${data.mensaje || "-"}</p>`,
    });

    return { success: true };
  });
