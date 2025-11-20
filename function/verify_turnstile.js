export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  const token = form.get("cf-turnstile-response");
  if(!token) return Response.json({ success:false, msg:"No token" });

  const resp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method:"POST",
    body:new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token })
  }).then(r=>r.json());

  return Response.json(resp);
}
