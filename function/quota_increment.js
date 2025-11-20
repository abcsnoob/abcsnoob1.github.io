export async function onRequestPost({ env }) {
  let current = parseInt(await env.QUOTA.get("remaining") || "1000");
  current = Math.max(0, current-1);
  await env.QUOTA.put("remaining", current.toString());
  return Response.json({ remaining: current });
}
