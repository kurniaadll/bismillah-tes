document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-control");
  const nameInput = document.querySelector('.input-field[name="name"]');
  const emailInput = document.querySelector('.input-field[name="email"]');
  const messageInput = document.querySelector(".text-area textarea");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan perilaku default form

    // Mendapatkan nilai input dari form
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Validasi input
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // Kirim data, Anda bisa menyesuaikan logika ini dengan API atau metode lainnya
    // Di sini saya hanya menampilkan pesan menggunakan alert
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Menampilkan data yang akan dikirim
    const formDataString = JSON.stringify(formData);
    alert("Form Data:\n" + formDataString);

    // Setelah mengirim, bisa dilakukan reset form
    form.reset();
  });
});
