export async function onRequestPost({ request }) {
  const form = await request.formData();
  const username = form.get("username");
  return Response.redirect(`/accounts/${encodeURIComponent(username)}`, 302);
}
