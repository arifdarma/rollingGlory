Tech spec
Framework : express node.js
Library : 
nodemon : untuk selalu me-restart server ketika ada perubahan pada source code
bcrypt : untuk melakukan enkripsi dan dekripsi pada password user
mysql2 : untuk melakukan query ke database

Melakukan Setup
Cara Setup di Local : 
Download source code
Ketik `npm install` untuk menginstall seluruh library yang dibutuhkan
Ketik `nodemon app.js` untuk menjalankan aplikasi

Cara Testing :
	-

Cara Deploy (Heroku) :
Login akun
Create new app
Beri nama app lalu pilih create app
Buka terminal dan buka directory project
Tuliskan command `git init`
Lalu tuliskan command `heroku git:remote -a(nama app)`
Lalu command `git add .` untuk menambahkan seluruh file
Lalu command `git commit -am “(komentar)”` untuk melakukan commit file ke directory git
Lalu command `git push heroku master` untuk push ke branch master
Lalu buka app pada browser https://rollingglory-backend-test.herokuapp.com/ (masih gagal)

