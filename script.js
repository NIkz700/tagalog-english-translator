function translate() {
  const inputText = document.getElementById("inputText").value.trim();
  const outputText = document.getElementById("outputText");
  const langSelect = document.getElementById("langSelect").value;

  let source = langSelect === "tl-en" ? "tl" : "en";
  let target = langSelect === "tl-en" ? "en" : "tl";

  if (!inputText) {
    outputText.value = "Please enter text to translate.";
    return;
  }

  fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: inputText,
      source: source,
      target: target,
      format: "text"
    })
  })
  .then(res => res.json())
  .then(data => {
    outputText.value = data.translatedText || "Translation failed.";
  })
  .catch(() => {
    outputText.value = "Translation error. Check your internet.";
  });
}
