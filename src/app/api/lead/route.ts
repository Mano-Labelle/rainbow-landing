// Rainbow est arrêté : le formulaire reste affiché, plus aucun email ni enregistrement.
export async function POST() {
  return Response.json({ ok: true, stored: "off" });
}
