async function includeComponent(selector, file) {
  const el = document.querySelector(selector);
  const res = await fetch(file);
  const html = await res.text();
  el.innerHTML = html;
}

includeComponent("#header", "/components/header.html");
includeComponent("#footer", "/components/footer.html");
