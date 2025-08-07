async function includeComponent(selector, file) {
  const el = document.querySelector(selector);
  const res = await fetch(file);
  const html = await res.text();
  el.innerHTML = html;
}

includeComponent("#header", "https://luisgaabrielmarquizaramalho.github.io/JuBento-Demo/components/header.html");
includeComponent("#footer", "https://luisgaabrielmarquizaramalho.github.io/JuBento-Demo/components/footer.html");
