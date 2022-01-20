Tech spec</br>
1. Framework : express node.js</br>
2. Library : </br>
a. nodemon : untuk selalu me-restart server ketika ada perubahan pada source code</br>
b. bcrypt : untuk melakukan enkripsi dan dekripsi pada password user</br>
c. mysql2 : untuk melakukan query ke database</br>
</br>
Melakukan Setup</br>
1. Cara Setup di Local : </br>
-Download source code</br>
-Ketik `npm install` untuk menginstall seluruh library yang dibutuhkan</br>
-Ketik `nodemon app.js` untuk menjalankan aplikasi</br>
</br>
2. Cara Testing :</br>
	-</br>
</br>
3. Cara Deploy (Heroku) :</br>
-Login akun</br>
-Create new app</br>
-Beri nama app lalu pilih create app</br>
-Buka terminal dan buka directory project</br>
-Tuliskan command `git init`</br>
-Lalu tuliskan command `heroku git:remote -a(nama app)`</br>
-Lalu command `git add .` untuk menambahkan seluruh file</br>
-Lalu command `git commit -am “(komentar)”` untuk melakukan commit file ke directory git</br>
-Lalu command `git push heroku master` untuk push ke branch master</br>
-Lalu buka app pada browser https://rollingglory-backend-test.herokuapp.com/ (masih gagal)</br>

