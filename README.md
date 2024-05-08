# Spēle "Vērši un govis"

Šis projekts ir klasiskās spēles "Vērši un govis" realizācija, izmantojot šādas tehnoloģijas: React priekš frontend, Express.js priekš backend un MySQL datu glabāšanai. 
Lai lokāli testētu un izvietotu, mēs izmantojam XAMPP, kas nodrošina vidi servera un MySQL datu bāzes darbināšanai.

## Instalācija un palaišana

### Prasības
```
NPM
Node.js
XAMPP
```

## Instalācijas soli
### 1. Klonesiet repozitoriju
```
git clone https://github.com/ImWeffi/Bulls_Cows.git
```
### 2. Navigējiet uz projekta mapju 
```
cd Bulls_Cows
```
### 3. Uzstādīt atkarības klienta un servera daļām
```
cd Bulls_Cows: npm install
cd Bulls_Cows/server: npm install
cd Bulls_Cows/server: npm i bcrypt
```
### 4. Palaidiet XAMPP un palaistiet Apache un MySQL serverus.
### 5. Importējat MySQL datu bāzi ar nosaukumu "bullscows". To varat izdarīt, izmantojot phpMyAdmin.
### 6. Atgriezieties projekta saknes mapē un palaidiet gan klienta, gan servera daļas
```
cd Bulls_Cows: npm start
cd Bulls_Cows/server: node server.js
```

 ## Svarīgi! 
> Pārbaudiet, uz kāda ports darbojas XAMPP, un vai jūsu phpMyAdmin ir parole. 
 Ja serveris nenokļūst, ports un parole var tikt iestatīti failā cd Bulls_Cows/server/server.js. 
 Pirmajā rindkopā ir pieejami savienojuma iestatījumi.


