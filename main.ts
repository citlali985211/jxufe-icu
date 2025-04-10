import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve(async (req) => {
  const path = new URL(req.url).pathname;
  const filePath = path === "/" ? "/index.html" : path;

  try {
    const file = await Deno.readTextFile(`./static${filePath}`);
    return new Response(file, {
      headers: { "content-type": "text/html" },
    });
  } catch {
    return new Response("404 Not Found", { status: 404 });
  }
});
