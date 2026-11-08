// The contact address is never in the page source as text, so scrapers that
// read raw HTML can't harvest it. It's stored reversed with each character
// shifted, and only assembled when someone presses the button.
const CODES = [116, 118, 106, 53, 115, 112, 104, 116, 110, 71, 129, 117, 112, 104, 122, 108, 123, 104,
  115, 124, 108, 108, 107, 129, 108, 121, 104, 125, 115, 104, 104, 112, 115, 124, 113];

document.querySelectorAll(".contact button").forEach((button) => {
  button.addEventListener("click", () => {
    const address = CODES.map((c) => String.fromCharCode(c - 7)).reverse().join("");
    const link = document.createElement("a");
    link.href = "mailto:" + address + "?subject=Markit";
    link.textContent = address;
    button.replaceWith(link);
  });
});
