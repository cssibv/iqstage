# Livrare site — Iqstage (cursuri muzică și orchestră pentru evenimente)

Site de prezentare static (HTML/CSS/JS pur, fără framework), în limba română cu diacritice complete, gata de publicat pe GitHub Pages. Numele afișat „Iqstage" este provizoriu (numele de domeniu dorit), până la confirmarea clientului.

## Ce am implementat

**Pagini (5):**
- `index.html` — Acasă: hero cu imagine reală, cele două direcții de servicii, secțiuni „de ce noi", pași de colaborare, dublu CTA (telefon + WhatsApp).
- `despre.html` — Despre noi: poveste, valori, abordare.
- `servicii.html` — Servicii: cele două linii (cursuri de instrumente / orchestră pentru evenimente), publicuri țintă, tipuri de evenimente.
- `portofoliu.html` — Galerie foto (imagini stock provizorii, de înlocuit cu poze proprii).
- `contact.html` — Date de contact, formular „Cere ofertă", hartă Google Maps embed și buton „Direcții".

**Design system:**
- Fonturi Google: **Playfair Display** (serif, titluri) + **Manrope** (sans, text).
- Paletă: crem, gri-antracit, accent auriu (neutre + 1 brand + 1 accent), contrast conform WCAG AA.
- Iconuri SVG inline în stil linie (Lucide-like); logo WhatsApp = glifa oficială.
- Logo tip text „Iq**stage**" cu simbol de notă muzicală stilizat.

**Funcționalități:**
- Meniu hamburger pe mobil (panou fixat, frate al header-ului — se deschide și se închide corect; telefonul și CTA-urile WhatsApp/apel sunt deasupra meniului).
- Buton WhatsApp flotant (colț jos-dreapta) pe toate paginile + butoane WhatsApp în secțiunile Contact/CTA. Link: `https://wa.me/40740057211?text=...` cu mesaj predefinit.
- Hartă Google Maps prin `iframe` (fără cheie API) + buton „Direcții".
- Formular de contact demo (nume, telefon, localitate, tip curs/eveniment, dată, detalii) — vezi mai jos pentru activare.
- Date structurate `LocalBusiness` / `MusicGroup` / `EducationalOrganization` (adresă, telefon, program) în `index.html`.
- Responsive mobil-întâi, zone de tap ≥ 44px, fără overflow orizontal, imagini `lazy` cu dimensiuni fixe.
- Micro-interacțiuni discrete (hover carduri/butoane, reveal la scroll).

**Date afișate (conform brief):** telefon 0740 057 211, adresă Piatra Mare nr. 84, Brașov, program Luni–Vineri 09:00–20:00 (Sâmbătă–Duminică închis). Nu s-au afișat e-mail sau rețele sociale (nefurnizate). Numele persoanei fizice nu apare public.

## Imagini — de înlocuit cu poze reale ale clientului

Toate imaginile din `assets/img/` sunt **stock (Pexels, gratuite)**, puse ca substitut vizual. Recomandăm înlocuirea lor cu fotografii proprii din cursuri și evenimente:
- `assets/img/hero.jpg` — orchestră live (hero Acasă / Servicii).
- `assets/img/cursuri.jpg` — lecție de pian (secțiunea Cursuri).
- `assets/img/orchestra.jpg` — vioară / orchestră (secțiunea Orchestră).
- `assets/img/eveniment.jpg` — ansamblu de coarde (hero Despre/Contact, galerie).

Sursă: Pexels (licență gratuită, fără atribuire obligatorie). Păstrează aceleași nume de fișier ca înlocuirea să fie automată, sau actualizează căile din HTML.

## Ce mai trebuie de la client

- **Confirmarea numelui de brand** afișat (acum „Iqstage", provizoriu) și a extensiei de domeniu (.ro/.com/.eu).
- **Poze proprii** din cursuri și evenimente (înlocuiesc imaginile stock din galerie și secțiuni).
- **Logo grafic** (dacă se dorește siglă/simbol dedicat — acum e logo tip text).
- **Confirmarea paletei de culori** (crem / antracit / auriu — propunere).
- **Texte finale / detalii:** ce instrumente se predau la cursuri, ce tipuri de evenimente acoperă orchestra (acum text generic).
- **Cifre reale pentru credibilitate:** ani de experiență, număr de evenimente/cursanți, certificări/afilieri (ex. UCMR-ADA) — secțiunile sunt pregătite structural, dar nu conțin cifre inventate.
- **Testimoniale** cu nume real (de adăugat când sunt disponibile).
- **E-mail public** (dacă se dorește afișat) și **conturi de social media** (acum omise).
- **Decizie asupra paginii Servicii** (inclusă provizoriu, esența ofertei).

## Ajustări după review vizual

- **Un singur CTA WhatsApp pe mobil (≤560px):** butonul WhatsApp flotant rămâne singurul apel-la-acțiune WhatsApp vizibil simultan. Am ascuns butoanele WhatsApp inline duplicate din hero și din banda CTA de jos (`.hero-actions .btn--wa`, `.cta-band .actions .btn--wa`), ca să nu apară două butoane WhatsApp în același ecran. Pe desktop rămân neschimbate.

*Restul verificării vizuale (390px mobil + desktop): fără overflow orizontal, hamburger funcțional, logo WhatsApp oficial prezent, imagini întregi, fără text „&" în conținut (se folosește „și"), navbar și telefon pe un singur rând — nimic de reparat.*

## Cum reglezi și publici

**Fișiere cheie:**
- `index.html`, `despre.html`, `servicii.html`, `portofoliu.html`, `contact.html` — paginile.
- `css/style.css` — tot designul; variabilele de culoare/font sunt în `:root` (sus de tot), ușor de ajustat.
- `js/main.js` — meniu mobil, an footer, reveal la scroll, gestionarea formularului demo.
- `assets/img/` — imaginile.

**Activarea formularului de contact (Formspree):**
1. Creează un cont gratuit pe [formspree.io](https://formspree.io) și un formular nou; vei primi un endpoint de forma `https://formspree.io/f/xxxxxxx`.
2. În `contact.html`, la elementul `<form id="contactForm" ...>`, înlocuiește `action="https://formspree.io/f/your-id-here"` cu endpoint-ul tău.
3. În `js/main.js`, șterge (sau comentează) blocul care oprește trimiterea (`form.addEventListener("submit", ...)` cu `e.preventDefault()`), pentru ca formularul să trimită real către Formspree. Până atunci, formularul afișează un mesaj clar că este demonstrativ și direcționează către telefon/WhatsApp.

**Actualizarea datelor de contact:** telefonul apare în header, footer, secțiunea Contact și în linkurile `tel:` și `wa.me`. Adresa apare în footer, Contact și în `iframe`-ul/butonul hărții. Caută `0740057211` / `40740057211` și „Piatra Mare nr. 84" în fișiere dacă se schimbă.

**Publicare (GitHub Pages):** site-ul folosește doar căi relative și este pregătit pentru servire la sub-cale. `index.html` este în rădăcină. Activează GitHub Pages din Settings → Pages (branch principal, folder `/root`) și site-ul devine disponibil la `https://<user>.github.io/<slug>/`.

## Ajustări după review vizual

- **Un singur CTA WhatsApp pe mobil (pagina Contact):** pe mobil, pagina de contact afișa simultan butonul inline verde „Scrie pe WhatsApp" din secțiunea de contact **și** butonul flotant WhatsApp. Am extins regula existentă (`@media max-width:560px`) ca butonul WhatsApp inline din `.contact-actions` să fie ascuns pe mobil, la fel ca în hero și în benzile CTA. Astfel, pe toate paginile rămâne un singur CTA WhatsApp pe mobil — butonul flotant — consecvent cu restul site-ului. Aspectul pe desktop rămâne neschimbat (ambele butoane vizibile).

Restul verificărilor au trecut fără modificări: fără overflow orizontal la 390px, hamburger funcțional, logo-ul oficial WhatsApp (glifa telefon-în-bulă) și iconuri corecte pentru telefon/adresă/program, fără caracterul „&" în text (se folosește „și"), navbar și număr de telefon pe un singur rând, căi relative.
