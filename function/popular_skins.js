export async function onRequestGet() {
  const skins = ["Steve","Alex","Technoblade","Dream","Ranboo"];
  return new Response(skins.map(s=>`<p>${s}</p>`).join(""), { headers:{ "Content-Type":"text/html" } });
}
