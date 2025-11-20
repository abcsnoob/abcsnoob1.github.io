export async function onRequestGet({ env }) {
  const remaining = parseInt(await env.QUOTA.get("remaining") || "1000");
  const reset_time = parseInt(await env.QUOTA.get("reset") || `${Math.floor(Date.now()/1000)+86400}`);
  return Response.json({ remaining, reset_time });
}
