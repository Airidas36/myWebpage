$(document).ready(function () {
    var lang;
    var arrLang = {
        'en': {
            'home': "Home",
            'history' :  "History",
            'cars' : "Cars",
            'brick' : "M50/M52",
            'login': 'LOGIN',
            'signup': 'SIGN UP',
            'modalsignup': "Create Account",
            'username': 'Username',
            'password': 'Password',
            'email': "Email",
            'label_email': "Enter your email adress",
            'label_password': "Enter your password",
            'label_username' : "Enter your username",
            'label_subject': "Enter the subject",
            'email_help': "We'll never share your email with anyone else.",
            'invalid_email': "Please enter a valid email address",
            'invalid_password': "Please enter a password",
            'invalid_username' : "Please enter a valid username",
            'title_1':"BMW is born.",
            'desc_1' : "BMW traces its roots back to Karl Rapp and Gustav Otto. In 1916, a company <br> known as Flugmaschinenfabrik Gustav Otto merged into Bayerische Flugzeug-Werke AG (BFW) <br> at the German government's behest. Elsewhere, in 1917, the <br> Rapp Motorenwerke company morphed into Bayerische Motoren Werke GmbH, <br> which duly became an AG (public limited company) in 1918. BMW AG <br> subsequently transferred its engine construction operations – including <br>the company and brand names – to BFW in 1922. The date of BFW's <br> founding, 7 March 1916, has therefore gone down in history as the <br> birthdate of Bayerische Motoren Werke AG.",
            'title_2' : "The BMW R32 - The first BMW Motorcycle.",
            'desc_2' : "BMW revealed its first motorcycle, the R 32, in 1923. Up to then, the company had only built <br> engines rather than complete vehicles. The basic concept behind the original BMW Motorrad model – a boxer engine with <br> longitudinally-positioned cylinders and cardan-shaft drive – was so sound that it remains a fixture of the <br> company's motorcycle line-up to this day.",
            'title_3' : "The BMW 501. The First post-war BMW car.",
            'desc_3':"BMW's first post-war car was the 501, built from 1952. A large sedan capable of seating up to six people, <br> it was powered by an evolution of the six-cylinder engine used in the pre-war BMW 326. Although not a <br> commercial success, this luxury model restored BMW's status as a manufacturer of high-quality, technically exciting cars.",
            'title_4':"First racing project.",
            'desc_4' : "Introduced in May 1972, the 3.0 CSL was a homologation special <br> built to make the car eligible for racing in the European Touring Car Championship.<br> 1,265 were built. It was developed by a separate division in BMW AG which would later <br> become BMW Motorsport GmbH. While the CSL does not carry the M badge many <br> consider this as the first ever M car and one that first carried the tri colour motorsport livery.",
            'title_5' : "The M1.",
            'desc_5': "In the late 1970s, Italian automobile manufacturer Lamborghini entered into an agreement with BMW to build<br> a production racing car in sufficient quantity for homologation, but conflicts arose that prompted BMW to produce<br> the car themselves. The M1 coupé was hand-built between 1978 and 1981 under the motorsport division of BMW as a <br> homologation special for sports car racing. The fibre glass body was designed by Giorgetto Giugiaro, taking <br> inspiration from the 1972 BMW Turbo concept car. Since the engineering of the car was still incomplete, a group<br> of former Lamborghini engineers had founded a company named Italengineering which offered to complete the car's<br> design. Less than 10 miles away from the Lamborghini shop, the engineering for the M1 was finished.",
            'kaista_plyta' : "Are you tired of your M50/M52 overheating everyday? <br>Are you tired of your coolant hoses being blown away?",
            'reveal_why' : "Find out why your engine is overheating, NOW!",
        },
        'lt': {
            'home': "Pagrindinis",
            'history' :  "Istorija",
            'cars' : "Automobiliai",
            'brick' : "Plyta",
            'login': 'PRISIJUNGTI',
            'signup': 'UŽSIREGISTRUOTI',
            'username': 'Prisijungimo vardas',
            'password': 'Slaptažodis',
            'email': "Elektroninis paštas",
            'modalsignin': 'Prisijungti',
            'modalsignup': 'Susikurti paskyrą',
            'label_email': "Įveskite savo elektroninį paštą",
            'label_password': "Įveskite slaptažodį",
            'label_username': "Įveskite savo slapyvardį",
            'label_subject': "Įrašykite temą",  
            'invalid_email': "Įveskite egzistuojantį elektroninį paštą",
            'invalid_password': "Slaptažodis yra privalomas",
            'invalid_username' : "Slapyvardis yra privalomas",
            'title_1' : "Gimsta BMW.",
            'desc_1': "BMW šaknys  siekia Karlą Rappą ir Gustavą Otto. 1916 m. Įmonė, žinoma kaip <br> Flugmaschinenfabrik Gustav Otto, Vokietijos vyriausybės prašymu susijungė į Bayerische <br> Flugzeug-Werke AG (BFW). 1917 m., Rapp Motorenwerke &quot įmonė <br> pasitraukė į Bayerische Motoren Werke GmbH, kuri 1918 m. tapo AG <br> (akcinė bendrovė). 1922 m. „BMW AG“ perdavė savo variklių konstravimo  <br> operacijas, įskaitant įmonės ir firminius pavadinimus, BFW 1922m. BFW <br> įkūrimo data, 1916 m. Kovo 7 d. įtraukta į istoriją kaip <br> „Bayerische Motoren Werke AG“ <br>gimimo data .",
            'title_2' : "BMW R32 - Pirmasis BMW motociklas.",
            'desc_2' : "Savo pirmąjį motociklą R 32 BMW pristatė 1923 m. Iki tol įmonė konstravo tik variklius, <br> o ne sukomplektuotas transporto priemones. Originali „BMW Motorrad“ modelio koncepcija - opozitinis variklis <br> su išilginiais cilindrais ir kardaninio veleno pavara - buvo tokia tvirta, kad iki <br> šios dienos tebėra šios bendrovės bendrovės motociklų komplektas.",
            'title_3' : "BMW 501. Pirmasis BMW pokario automobilis.",
            'desc_3' : "Pirmasis BMW pokario automobilis buvo 501, gaminamass nuo 1952 m. Didelis sedanas, galintis sutalpinti iki šešių žmonių, <br> jį varė atnaujintas prieškario „BMW 326“ naudotas šešių cilindrų variklis. Nors tai nebuvo komercinė sėkmė, tačiau šis prabangus modelis <br> atkūrė BMW kaip aukštos kokybės, techniškai patrauklių automobilių gamintojo statusą.",
            'title_4' : "Pirmasis lenktyninis projektas.",
            'desc_4' : "Įvestas 1972 m. Gegužės mėn., 3.0 CSL buvo išskirtinis, su homologacija automobilis, pagamintas tam, kad galėtų važiuoti lenktynėms Europos automobilių čempionate. <br> 1 265. Jį sukūrė atskiras BMW AG padalinys, kuris vėliau tapo BMW Motorsport GmbH. Nors CSL neturi „M“ ženklelio, daugelis <br> mano, kad tai pirmasis M automobilis ir pirmasis kuris turėjo sportinę  &quotM&quot trispalvę.",
            "title_5" : "M1.",
            "desc_5" : "7-ojo dešimtmečio pabaigoje Italijos automobilių gamintojas „Lamborghini“ sudarė sutartį su BMW gaminti didesnį kiekį lenktyninių automobilių, su homologacija, tačiau kilo konfliktų, paskatinusių BMW gamintį automobilį patiems. „M1“ kupė buvo renkamas rankomis nuo 1978 m. iki 1981 m., Vadovaujant BMW motosporto skyriui, kaip specialus, su homologacija, sportinių automobilių lenktynėms skirtas automobilis. Stiklo pluošto kėbulą sukūrė Giorgetto Giugiaro, gavęs įkvėpimą iš 1972 m. BMW Turbo koncepcto. Kadangi automobilis vis dar nebuvo baigtas, grupė buvusių „Lamborghini“ inžinierių įkūrė įmonę „Italengineering“, kuri pasiūlė užbaigti automobilio dizainą. Mažiau nei 10 mylių nuo „Lamborghini“ parduotuvės buvo baigtas M1 kūrimas.",
            'kaista_plyta' : "Ar tau jau atsibodo kiekvieną dieną kaistanti plyta? <br> Nebegali pakęsti nupūstų aušinimo šlangų?",
            'reveal_why' : "Pagaliau išsiaiškink, kodėl tavo plyta kaista!",
        }
    };
    $(function () {
        $('.lang-btn').click(function () {

            localStorage.setItem(lang, $(this).attr('id'));
            window.location.reload();
        });
        $('.nav-link').each(function (index, element) {
            $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
        });
        $('.nav button').each(function (index, element) {
            $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
        });
        $('.modal').find('label').each(function(){
            $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
        });
        $('.modal').find('button').each(function(){
            $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
        });
        $('.modal').find('.invalid-feedback').each(function(){
            $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
        });
        $('.modal').find('h2').each(function(){
            $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
        });
        $('[data-translate]').each(function (index, element) {
            $(this).attr('placeholder', arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
        });
        $('.story-title').each(function (index, element) {
            $(this).html(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
        });
        $('.story-description').each(function (index, element) {
            $(this).html(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
        });
        $('#brick h1').each(function (index, element) {
            $(this).html(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
        });
        $('#brick button').each(function (index, element) {
            $(this).html(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
        });
    });
});