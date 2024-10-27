const image_input = document.querySelector("#image_input");
let uploaded_image = "";

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      "#displayed_image"
    ).style.backgroundImage = `url(${uploaded_image})`; // Use backticks for template literals
  });
  reader.readAsDataURL(this.files[0]);
});
