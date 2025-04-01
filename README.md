# node-express-ejs-layout-boilerplate
Express EJS Boilerplate

Boilerplate ini adalah template sederhana untuk memulai proyek dengan Express.js dan EJS. Cocok untuk developer yang butuh setup cepat dan pemula yang ingin belajar EJS.

Fitur

Struktur proyek yang rapi dan mudah dipahami

Routing dengan Express.js

Template engine menggunakan EJS

Middleware dasar sudah tersedia (morgan, express.static)

Layouting dengan partials (header, footer, dll.)

Instalasi

Pastikan Anda sudah menginstal Node.js.

Clone repository ini:

git clone https://github.com/BangkitBayu/express-ejs-boilerplate.git

Masuk ke folder proyek:

cd express-ejs-boilerplate

Install dependencies:

npm install

Jalankan server:

npm start

Buka di browser:

http://localhost:3000

Struktur Proyek

express-ejs-boilerplate/
│── views/            # Folder untuk file EJS
│   ├── partials/     # Header, footer, dll.
│   ├── pages/        # Halaman utama
│   └── home.ejs      # Halaman utama
│   └── about.ejs     # Halaman about
│── public/           # Folder untuk aset statis (CSS, JS, gambar)
│── routes/           # Folder untuk routing
│── server.js         # File utama Express.js
│── package.json      # Konfigurasi npm

Konfigurasi

Jika ingin mengubah port atau konfigurasi lain, edit file server.js.

Kontribusi

Jika ingin berkontribusi, silakan fork repository ini dan buat pull request.

Lisensi

Boilerplate ini tersedia di bawah lisensi MIT.

Silakan gunakan boilerplate ini untuk proyek Anda! 

