import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { site } from "@/config/site";
import { sendContactEmail } from "@/server-functions/contact-email";
import { Button } from "./Button";

const inputCls =
  "w-full rounded-xl border border-black/10 bg-card px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-gem-emerald focus:ring-2 focus:ring-gem-emerald/25";

const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/55";

export function ContactForm() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const sendEmail = useServerFn(sendContactEmail);
  const [form, setForm] = useState({
    nombre: "",
    negocio: "",
    email: "",
    whatsapp: "",
    tipo: "Página web",
    presupuesto: "A definir",
    mensaje: "",
  });

  function sanitizeText(value: string) {
    return value.replace(/[\u0000-\u001F\u007F]/g, "").trim();
  }

  function set(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nombre = sanitizeText(form.nombre);
    const negocio = sanitizeText(form.negocio);
    const email = sanitizeText(form.email);
    const whatsapp = sanitizeText(form.whatsapp);
    const tipo = sanitizeText(form.tipo);
    const presupuesto = sanitizeText(form.presupuesto);
    const mensaje = sanitizeText(form.mensaje);

    if (!nombre || !email) {
      return;
    }

    setEnviando(true);
    setError(null);

    try {
      await sendEmail({
        data: {
          nombre,
          negocio,
          email,
          whatsapp,
          tipo,
          presupuesto,
          mensaje,
        },
      });

      setEnviado(true);
    } catch (err) {
      console.error(err);
      setError("No se pudo enviar el mensaje. Reintentá más tarde o escribinos por WhatsApp.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-black/5 bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            required
            maxLength={80}
            className={inputCls}
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={(e) => set("nombre", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="negocio">
            Negocio
          </label>
          <input
            id="negocio"
            maxLength={120}
            className={inputCls}
            placeholder="Nombre de tu negocio"
            value={form.negocio}
            onChange={(e) => set("negocio", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            maxLength={120}
            className={inputCls}
            placeholder="tu@email.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="whatsapp">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            maxLength={40}
            className={inputCls}
            placeholder="Tu número"
            value={form.whatsapp}
            onChange={(e) => set("whatsapp", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="tipo">
            Tipo de proyecto
          </label>
          <select
            id="tipo"
            className={inputCls}
            value={form.tipo}
            onChange={(e) => set("tipo", e.target.value)}
          >
            <option>Página web</option>
            <option>Landing page</option>
            <option>Tienda online</option>
            <option>Página + dominio y email</option>
            <option>Chat con IA</option>
            <option>Otro</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="presupuesto">
            Presupuesto aproximado
          </label>
          <select
            id="presupuesto"
            className={inputCls}
            value={form.presupuesto}
            onChange={(e) => set("presupuesto", e.target.value)}
          >
            <option>A definir</option>
            <option>Desde $180.500</option>
            <option>Desde $380.600</option>
            <option>Desde $580.000</option>
            <option>Proyecto a medida</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={4}
            maxLength={600}
            className={inputCls}
            placeholder="Contanos qué necesitás"
            value={form.mensaje}
            onChange={(e) => set("mensaje", e.target.value)}
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={enviando}>
        {enviando ? "Enviando..." : "Enviar consulta"}
      </Button>

      {error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}

      {enviado && (
        <p className="mt-4 text-center text-sm text-ink/60">
          Tu consulta fue enviada correctamente. Te responderemos a {site.email}.
        </p>
      )}
    </form>
  );
}
