export default {
  async scheduled(event, env) {
    await env.QUOTA.put("remaining", "1000");
    await env.QUOTA.put("reset", Math.floor(Date.now()/1000)+86400);
  }
}
