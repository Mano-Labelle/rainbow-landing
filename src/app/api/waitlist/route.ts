// Rainbow est arrêté : le formulaire reste affiché, plus aucun enregistrement.
export async function POST() {
  return Response.json({ ok: true, stored: "off" });
}
