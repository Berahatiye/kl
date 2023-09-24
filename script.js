
window.onload = function() {
            window.scrollTo(0, 0);
};



document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent =  `
    
    <h2>Rheinland-Pfalz Eyaletindeki Müzeler</h2>
    <div class="center">
    <div class="carousel-wrapper">
    <!-- abstract radio buttons for slides -->
    <input id="slide1" type="radio" name="controls" checked="checked" />
    <input id="slide2" type="radio" name="controls" />
    <input id="slide3" type="radio" name="controls" />
    <input id="slide4" type="radio" name="controls" />
    <input id="slide5" type="radio" name="controls" />

    <!-- navigation dots -->
    <label for="slide1" class="nav-dot"></label>
    <label for="slide2" class="nav-dot"></label>
    <label for="slide3" class="nav-dot"></label>
    <label for="slide4" class="nav-dot"></label>
    <label for="slide5" class="nav-dot"></label>

    <!-- arrows -->
    <label for="slide1" class="left-arrow"> < </label>
    <label for="slide2" class="left-arrow"> < </label>
    <label for="slide3" class="left-arrow"> < </label>
    <label for="slide4" class="left-arrow"> < </label>
    <label for="slide5" class="left-arrow"> < </label>

    <label for="slide1" class="right-arrow"> > </label>
    <label for="slide2" class="right-arrow"> > </label>
    <label for="slide3" class="right-arrow"> > </label>
    <label for="slide4" class="right-arrow"> > </label>
    <label for="slide5" class="right-arrow"> > </label>

    <div class="carousel">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/jjjjjjjjj.jpg" />
          <h3>Alman Sokak-Cadde-Yol Müzesi-Deutsches Straßenmuseum-Germersheim</h3>
          <p>Germersheim’daki orijinal Tahkimatın eski Cephaneliğinde, Almanya’da eşsiz bir müze olan Alman Sokak Müzesi bulunmaktadır. İç ve dış mekanlarda yaklaşık 5000 m2’lik sergi alanında, yol ve yol yapımı konusu, büyük yol Silindirinden kaldırım Çekiçine kadar birçok tarihi ve kısmen nadir sergiyle aydınlatılmaktadır. Bu esnada Kemer, erken dönemlerin Trample Patikasından 21. yüzyıl otoyoluna kadar uzanmaktadır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/lllll.jpg" alt="">
          <h3>Alman Bims(Ponza Taşı) Müzesi</h3>
          <p>Yaklaşık 13.000 yıl önce Laacher See Yanardağının patlamasından sonra, bir metre kalınlığında bir pomza tabakası yeni Havzadaki manzarayı kapladı. Volkanik Kaya, binlerce yıl sonra bölgede muazzam bir ekonomik yükselişin temeli olarak ortaya çıkacaktı. 1860’lardan günümüze kadar, Bims(Ponza Taşı) inşaat sektöründe ve günlük yaşamda devrim yarattı.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/kakkaakkk.jpg" />
          <h3>Dökümantasyon ve Hükümet Sığınağı Müzesi</h3>
          <p>Mart 2008’de, ülke çapında benzersiz bir Soğuk Savaş tanığı yeni amacına teslim edildi: Ahr Vadisi’ndeki eski hükümet sığınağı atom bombasına dayanıklı kapılarını müze olarak açtı. Tesisin bölümleri hükümet sığınağı dokümantasyon tesisinin ziyaretçilerine açıktır ve dünyanın her yerinden genç ve yaşlıları davet etmektedir. Dokümantasyon merkezinin sahibi, “eski Ahrveller” yerli Derneği için bu aynı zamanda bir meydan okuma ve sorumluluktur, çünkü çalışanlar yakın zamana kadar sıkı gizliliğe tabi olan bir yeraltı dünyasında sığınaklarına size eşlik ederler.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdaaasasdasasaas.jpg">
          <h3>Gutenberg Müzesi Mainz</h3>
          <p>Müzenin merkezinde dünyaca ünlü 42 satırlık Kutsal kitabın iki kopyası var. Bunlar Johannes Gutenberg’in kendi tekniğiyle yaptığı ilk Kitaplar. 1450 yılında Gutenberg’in atölyesinde basılmıştır. Dünyanın en güzel kitapları olarak nitelendirilen Gutenberg İncillerinin yanı sıra, dünyanın dört bir yanından gelen 125.000 ziyaretçi için müzede keşfedilecek çok sayıda kitap hazinesi var.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/adadadaad.jpg?w=1024" alt="">
          <h3>Karl Marx Evi-Trier</h3>
          <p>1727 yılında Barok bir konut olarak inşa edilen ve 1928’de SPD tarafından satın alınan Karl Marks’ın doğum Evi, 1968’den beri Friedrich-Ebert-Stiftung (FES) tarafından müze olarak işletilmektedir. Marks‘ 200’e. Doğum günü 5 Mayıs 2018 tarihinde bu tarih ve politik öğrenme yerinde yeni bir kalıcı sergi açıldı ve 19. yüzyılın sosyal ve kapitalizm Eleştirmeni olarak nitelendirilen Karl Marks’a adanmıştır. Fikirleri bugün hâlâ insanları etkilemektedir.</p>
        </li>
      </ul>
    </div>
  </div>
</div>

<h2>Saarland Eyaletindeki Müzeler</h2>
<div class="custom-center">
  <div class="custom-carousel-wrapper">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide1" type="radio" name="custom-controls" checked="checked" />
    <input id="custom-slide2" type="radio" name="custom-controls" />
    <input id="custom-slide3" type="radio" name="custom-controls" />
    <input id="custom-slide4" type="radio" name="custom-controls" />
    <input id="custom-slide5" type="radio" name="custom-controls" />

    <!-- navigation dots -->
    <label for="custom-slide1" class="custom-nav-dot"></label>
    <label for="custom-slide2" class="custom-nav-dot"></label>
    <label for="custom-slide3" class="custom-nav-dot"></label>
    <label for="custom-slide4" class="custom-nav-dot"></label>
    <label for="custom-slide5" class="custom-nav-dot"></label>

    <!-- arrows -->
    <label for="custom-slide1" class="custom-left-arrow"> &lt; </label>
    <label for="custom-slide2" class="custom-left-arrow"> &lt; </label>
    <label for="custom-slide3" class="custom-left-arrow"> &lt; </label>
    <label for="custom-slide4" class="custom-left-arrow"> &lt; </label>
    <label for="custom-slide5" class="custom-left-arrow"> &lt; </label>

    <label for="custom-slide1" class="custom-right-arrow"> &gt; </label>
    <label for="custom-slide2" class="custom-right-arrow"> &gt; </label>
    <label for="custom-slide3" class="custom-right-arrow"> &gt; </label>
    <label for="custom-slide4" class="custom-right-arrow"> &gt; </label>
    <label for="custom-slide5" class="custom-right-arrow"> &gt; </label>

    <div class="custom-carousel">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2022/12/historischesmuseum-saar-sb-23-manuela-meyer-1.jpg" />
          <h3>Saar Tarih Müzesi</h3>
          <p>Müze, Saarland’ın tarihini Orta Çağ’dan erken modern çağa ve hareketli 20. yüzyıla kadar heyecan verici bir zaman yolculuğunda sergiliyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/hfgdfhfdfhg.png" alt="">
          <h3>Saarland Müzesi</h3>
          <p>Stiftung saarländischer Kulturbesitz(Stiftung Kültürel Miras Vakfı), Saarland’ın en prestijli müzelerinden ve sergi evlerinden birkaçını ve bugün beş lokasyonda üç Kurumu bir araya getiriyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/dasdasdasdasasdasdasdasdas.png" />
          <h3>Saarland Madencilik Müzesi</h3>
          <p>Bexbach’taki bir parkta yer alan bu müze, ziyaretçileri kasabanın Hindenburg Kulesi’nin yeraltı gösteri madenindeki madencilerin sıkı çalışmaları hakkında her şeyi öğrenmeden önce bir madenci ceketi ve güvenlik kaskı takmaya davet ediyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asddasdadas.png">
          <h3>Avrupa Kültür Parkı-Bliesbruck-Reinheim</h3>
          <p>Park, Alman-Fransız sınırında, Blies Nehri’nin pastoral vadisinde yer almaktadır ve bölgenin başlıca arkeolojik cazibe merkezlerinden biridir. Zaten 8000 yıldan daha uzun bir süre önce Orta Taş Çağları’nda, bu bölge insanlar tarafından doldurulmuştur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/saasdasdasdasd-2.jpg" alt="">
          <h3>Deutsches Zeitungsmuseum</h3>
          <p>Wadgassen’deki Alman Gazete Müzesi, gazetelerin tarihsel gelişimi, üretimi ve dağıtımı üzerine sergiler sergiliyor. Sergi üç bölüme ayrılmıştır: İlk bölüm, kitle iletişim araçlarının ilk günlerinden kalma orijinal baskılar ve değerli sergiler de dahil olmak üzere, Almanya’daki gazetelerin başlangıcından 1962’deki “Spiegel meselesine” kadar olan tarihine odaklanıyor. Teknik gazete üretiminin tarihsel yönleriyle ilgili ikinci bölüm, tarihi preslere ve makinelere odaklanıyor ve ziyaretçiler kendi gazetelerini üzerlerine basmaya bile başlayabilirler. Üçüncü bölüm, ziyaretçileri katılmaya ve öğrenmeye davet eden çeşitli uygulamalı istasyonlarla bugün gazetelere odaklanıyor.</p>
        </li>
      </ul>
    </div>
  </div>
</div>

<h2>Saksonya Eyaletindeki Müzeler</h2>
<div class="my-center">
  <div class="my-carousel-wrapper">
    <!-- abstract radio buttons for slides -->
    <input id="my-slide1" type="radio" name="my-controls" checked="checked" />
    <input id="my-slide2" type="radio" name="my-controls" />
    <input id="my-slide3" type="radio" name="my-controls" />
    <input id="my-slide4" type="radio" name="my-controls" />

    <!-- navigation dots -->
    <label for="my-slide1" class="my-nav-dot"></label>
    <label for="my-slide2" class="my-nav-dot"></label>
    <label for="my-slide3" class="my-nav-dot"></label>
    <label for="my-slide4" class="my-nav-dot"></label>

    <!-- arrows -->
    <label for="my-slide1" class="my-left-arrow"> &lt; </label>
    <label for="my-slide2" class="my-left-arrow"> &lt; </label>
    <label for="my-slide3" class="my-left-arrow"> &lt; </label>
    <label for="my-slide4" class="my-left-arrow"> &lt; </label>

    <label for="my-slide1" class="my-right-arrow"> &gt; </label>
    <label for="my-slide2" class="my-right-arrow"> &gt; </label>
    <label for="my-slide3" class="my-right-arrow"> &gt; </label>
    <label for="my-slide4" class="my-right-arrow"> &gt; </label>

    <div class="my-carousel">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/istockphoto-943029904-612x612-1.jpg" />
          <h3>Sağlık Bilgisi Müzesi-Dresden</h3>
          <p>Dresden’deki Deutsches Hygiene Museum’un odak noktası insandır. 100 yıldan fazla bir süredir Müze, insan yaşamı hakkında heyecan verici bilgiler sunuyor. Konuların çeşitliliği insan vücudu, cinsellik, beslenme ve çok daha fazlasını kapsar. Bütün aile burada öğreniyor. Çünkü küçük olanlar için de Müze, çocuklara uygun bir katılım Sergisi sunuyor. Ortak Müze ziyareti için çok sayıda tur, Çöpçü AVI, deney ve oyun bilgi, çeşitlilik ve karşılaşmalar için yer sunuyor. Dresden’in merkezinde yer alan Müze, kalıcı sergilere ek olarak, güncel konularda yıllık değişen sunumları bir araya getiriyor.</p>
          </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/istockphoto-1328817759-612x612-1.jpg" alt="">
          <h3>Königstein Kalesi-Festung Königstein</h3>
          <p>Sakson İsviçre’nin ortasında ve Dresden Kültür Metropolünün yakınında yer alan Königstein Kalesi tahtta yer almaktadır. İlk olarak 1241’de bahsedilen dağ Kalesi, bir manastır, bir kale, bir zevk Şatosu, bir devlet Hapishanesi, bir savaş esiri Kampı ve bir gençlik çalışma bahçesine ev sahipliği yapmıştı. Bugün Kale, nefes kesen panoramik manzaraya ek olarak, örneğin 400 yıllık Kale mimarisine ait çeşitli sergiler sunmaktadır. Elbe’nin 247 metre yukarısında, 13 Futbol sahasından oluşan bir alan, 50’den fazla heybetli bina ve daha fazla yeşil alan bulunmaktadır. Doğa ve Kültür, Königstein Kalesi’nde bir araya getirilmiş ve yaşanmıştır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/slide1_full.jpg" />
          <h3>August-Horch Müzesi-Zwickau</h3>
          <p>August-Horch Müzesi, 1904 yılından kalma orijinal bir üretim tesisinde bulunan Almanya genelinde sadece iki Müzeden biridir. Otantik hikayeler ve 118 yıllık Otomobil imalatında eşsiz bir zaman yolculuğu yaşanıyor. Zamanın tipik sahneleri, mekanları ve tarihi mekanları ile ziyaretçiler geçmiş on yıllara geri dönüyor. Avrupa’nın Endüstriyel Kültür rotasının bir parçası olan August-Horch Müzesi, ayrıca beş duyu için bir deneyimdir.</p>
          </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/jpg.jpg">
          <h3>Terra Mineralia Freudenstein Sarayı</h3>
          <p>1.500 metrekarelik Schloss Freudenstein, tarihi bir ortamda, dünyanın tüm katmanlarından ve uzayın geniş derinliklerinden binlerce Güzellik sergiliyor. Terra Mineralia, 50 yılı aşkın bir süre boyunca özenle hazırlanmış ve özenle muhafaza edilmiş bir Koleksiyondur. Buluntuların çoğu son derece nadir ve hatta benzersizdir ve ziyaretçiye dünyanın kristallerinin çeşitli renk ve şekil spektrumuna ezici bir bakış açısı sunar.</p>
          </li>
        <li>
          <img src="https://images.ctfassets.net/9l3tjzgyn9gr/photo-157575/d224d518da6c26515a470a9b7e490df8/157575-honey-bun-baby.jpg?fm=jpg&fl=progressive&q=50&w=1200" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>



<h2>Baden-Württemberg Eyaletindeki Müzeler</h2>
<div class="different-center">
  <div class="different-carousel-wrapper">
    <!-- abstract radio buttons for slides -->
    <input id="different-slide1" type="radio" name="different-controls" checked="checked" />
    <input id="different-slide2" type="radio" name="different-controls" />
    <input id="different-slide3" type="radio" name="different-controls" />
    <input id="different-slide4" type="radio" name="different-controls" />
    <input id="different-slide5" type="radio" name="different-controls" />

    <!-- navigation dots -->
    <label for="different-slide1" class="different-nav-dot"></label>
    <label for="different-slide2" class="different-nav-dot"></label>
    <label for="different-slide3" class="different-nav-dot"></label>
    <label for="different-slide4" class="different-nav-dot"></label>
    <label for="different-slide5" class="different-nav-dot"></label>

    <!-- arrows -->
    <label for="different-slide1" class="different-left-arrow"> &lt; </label>
    <label for="different-slide2" class="different-left-arrow"> &lt; </label>
    <label for="different-slide3" class="different-left-arrow"> &lt; </label>
    <label for="different-slide4" class="different-left-arrow"> &lt; </label>
    <label for="different-slide5" class="different-left-arrow"> &lt; </label>

    <label for="different-slide1" class="different-right-arrow"> &gt; </label>
    <label for="different-slide2" class="different-right-arrow"> &gt; </label>
    <label for="different-slide3" class="different-right-arrow"> &gt; </label>
    <label for="different-slide4" class="different-right-arrow"> &gt; </label>
    <label for="different-slide5" class="different-right-arrow"> &gt; </label>

    <div class="different-carousel">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/01-mercedes-benz-museum-overview-2560x1440-1.jpeg" />
          <h3>Mercedes-Benz Müzesi</h3>
          <p>Mercedes-Benz markasının tarihini ve onunla ilişkili markaları kapsar. Müze, bazıları motorlu araç motorunun en eski günlerine dayanan 160’tan fazla araç içeriyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/13-5_001-hero_pm_aussen.jpg" alt="">
          <h3>Porsche Müzesi</h3>
          <p>Bir spor otomobil severlerin cenneti olan Porsche Müzesi’nde birçok nadir araç ve tarihi model bulunuyor. 1976’da açılan 5.600 metrekarelik (60.278 fit kare) alan, araçları 80 farklı sergide sergilemek için özel olarak tasarlandı. Müze, ünlü otomobil üreticisinin dünya merkezinin hemen dışında.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/25205-luftbild-zeppelin-museum-und-zeppelin-nt-c-foto-spaeth-zeppelin-museum.jpg" />
          <h3>Zeplin Müzesi-Friedrichschafen</h3>
          <p>Zeppelin zeplininin doğum yeri olan Almanya’daki Konstanz Gölü’ndeki (Bodensee) Friedrichshafen’de bir müze. Müze, dünyanın en büyük havacılık koleksiyonuna ev sahipliği yapıyor ve Zeplin hava gemilerinin tarihini anlatıyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/autoundtechnikmuseumsinsheimluftbildcrop-scaled-848x566-1.jpg">
          <h3>Oto & Teknik Müzesi-Sinsheim</h3>
          <p>Müzenin 3.000’den fazla sergisi ve 50.000 m’den fazla sergi alanı vardı.2 (540.000 fit kare), iç ve dış mekanlarda. Avrupa’nın en büyük özel müzesidir. 2001’den beri sergilenen bir Tupolev Tu-144 ve emekli Concorde uçaklarından (F-BVFB) birini bağışlayan Air France ile her iki süpersonik yolcu uçağının da gösterildiği tek yer burası. Her ikisine de halk tarafından tamamen erişilebilir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/ludwigsburg-palace-residenzsch.jpg" alt="">
          <h3>Ludwigsburg Mesken Sarayı</h3>
          <p>32 hektarlık (79 dönüm) alana yayılmış 18 binadan oluşan 452 odalı bir saray kompleksi. Almanya’nın en büyük saray mülküdür ve Barok, Rokoko, Neoklasik ve imparatorluk tarzı mimarinin birleşimidir.</p>
        </li>
      </ul>
    </div>
  </div>
</div>



<h2>Berlin ve Brandenburg Eyaletlerindeki Müzeler</h2>
<div class="different-center-2">
  <div class="different-carousel-wrapper-2">
    <!-- abstract radio buttons for slides -->
    <input id="different-slide6" type="radio" name="different-controls-2" checked="checked" />
    <input id="different-slide7" type="radio" name="different-controls-2" />
    <input id="different-slide8" type="radio" name="different-controls-2" />
    <input id="different-slide9" type="radio" name="different-controls-2" />

    <!-- navigation dots -->
    <label for="different-slide6" class="different-nav-dot-2"></label>
    <label for="different-slide7" class="different-nav-dot-2"></label>
    <label for="different-slide8" class="different-nav-dot-2"></label>
    <label for="different-slide9" class="different-nav-dot-2"></label>

    <!-- arrows -->
    <label for="different-slide6" class="different-left-arrow-2"> &lt; </label>
    <label for="different-slide7" class="different-left-arrow-2"> &lt; </label>
    <label for="different-slide8" class="different-left-arrow-2"> &lt; </label>
    <label for="different-slide9" class="different-left-arrow-2"> &lt; </label>

    <label for="different-slide6" class="different-right-arrow-2"> &gt; </label>
    <label for="different-slide7" class="different-right-arrow-2"> &gt; </label>
    <label for="different-slide8" class="different-right-arrow-2"> &gt; </label>
    <label for="different-slide9" class="different-right-arrow-2"> &gt; </label>

    <div class="different-carousel-2">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/istockphoto-867269338-170667a.jpg" />
          <h3>Neues Museum-Yeni Müze</h3>
          <p>Neues Museum, Friedrich August Stüler tarafından 19. yüzyılın ortalarında inşa edilmiş bir yapıdadır, ancak İkinci Dünya Savaşı sırasında ciddi şekilde hasar görmüştür. İronik olarak, Yeni Müze artık Eski Müzedeki antikalardan bile daha eski bir koleksiyona ev sahipliği yapıyor:</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/altes-museum-staatliche.jpg" alt="">
          <h3>Altes Museum-Eski Müze</h3>
          <p>Altes Müzesi, 1820’lerde Karl Friedrich Schinkel tarafından tasarlanan 18 iyonik sütunlu neoklasik bir yapıdır.Berliner Dom ve Schloss ile birlikte açık Lustgarten Meydanı’nda yer almaktadır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/kf_aussenansicht_04.jpg" />
          <h3>Kulturforum-Kültür Forumu</h3>
          <p>Kulturforum / Kültür Forumu, amaca yönelik müzeler ve kültür merkezlerinden oluşan bir koleksiyondur. Buradaki odak Avrupa sanatıdır. Buradaki binaların çoğu, Almanya’nın yeniden birleşmesinin imkansız göründüğü bir dönemde, Soğuk Savaş sırasında inşa edildi. Bölge, Staatliche Museen zu Berlin binalarına ek olarak Berlin Filarmoni Orkestrası’na da ev sahipliği yapmaktadır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/pergamonmuseum_aussen_c_smb_foto_becker_web.jpg">
          <h3>Pergamonmuseum-Bergama Müzesi</h3>
          <p>Bergama restore ediliyor ve ünlü Bergama Sunağı da dahil olmak üzere müzenin bazı bölümlerinin 2026 yılına kadar kapalı olması muhtemel. Müze kısmen açık kalırken, geçici ve ayrı panorama sergilerinde Bergama Sunağından bazı heykeller görülebilir.</p>
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>



<h2>Kuzey Ren-Vestfalya Eyaletindeki Müzeler</h2>
<div class="custom-center-3">
  <div class="custom-carousel-wrapper-3">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide11" type="radio" name="custom-controls-3" checked="checked" />
    <input id="custom-slide12" type="radio" name="custom-controls-3" />
    <input id="custom-slide13" type="radio" name="custom-controls-3" />

    <!-- navigation dots -->
    <label for="custom-slide11" class="custom-nav-dot-3"></label>
    <label for="custom-slide12" class="custom-nav-dot-3"></label>
    <label for="custom-slide13" class="custom-nav-dot-3"></label>

    <!-- arrows -->
    <label for="custom-slide11" class="custom-left-arrow-3"> &lt; </label>
    <label for="custom-slide12" class="custom-left-arrow-3"> &lt; </label>
    <label for="custom-slide13" class="custom-left-arrow-3"> &lt; </label>

    <label for="custom-slide11" class="custom-right-arrow-3"> &gt; </label>
    <label for="custom-slide12" class="custom-right-arrow-3"> &gt; </label>
    <label for="custom-slide13" class="custom-right-arrow-3"> &gt; </label>

    <div class="custom-carousel-3">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/vespa.jpg" />
          <h3>Haus der Geschichte-Tarih Binası-Bonn</h3>
          <p>Müze 1945 ten bu yana olan Alman tarihini teması olarak alır. Alman tarihi ile ilgilenmek isteyenler, son 75 yılın siyaseti ve günlük yaşamı hakkında daha fazla bilgi edinmek isteyenler ve Alman donanımı ile ilgilenmek isteyenler, mutlaka eski Federal başkenti olan Bonn’a doğru yola çıkmalıdır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/fds.jpg" alt="">
          <h3>Deutsches Fußballmuseum-Alman Futbol Müzesi, Dortmund</h3>
          <p>Dortmund’da bulunan bu müze Alman Futbolunu, kendisine konu almıştır. Elbette Alman futbolunun tarihi ve futbol efsaneleri hakkında çok şey var, ancak içinde keşfedilecek çok yan da vardır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/gasometer-2021-plakatweb610.jpg" />
          <h3>Gasometer-Gasometre-Oberhausen</h3>
          <p>Oberhausen’da bulunan bu yer pek müze olarak tanımlanamasa da Doğa ve Kültür ile ilgili konularda sergi salonu niteliğindedir. İçeride bulunan ünlü eserlere ”Das zerbrechliche Paradies(Kırılgan Cennet)” resmi örnek verilebilir.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>




<h2>Bremen Eyaletindeki Müzeler</h2>
<div class="new-center-4">
  <div class="new-carousel-wrapper-4">
    <!-- abstract radio buttons for slides -->
    <input id="new-slide16" type="radio" name="new-controls-4" checked="checked" />
    <input id="new-slide17" type="radio" name="new-controls-4" />
    <input id="new-slide18" type="radio" name="new-controls-4" />
    <input id="new-slide19" type="radio" name="new-controls-4" />

    <!-- navigation dots -->
    <label for="new-slide16" class="new-nav-dot-4"></label>
    <label for="new-slide17" class="new-nav-dot-4"></label>
    <label for="new-slide18" class="new-nav-dot-4"></label>
    <label for="new-slide19" class="new-nav-dot-4"></label>

    <!-- arrows -->
    <label for="new-slide16" class="new-left-arrow-4"> &lt; </label>
    <label for="new-slide17" class="new-left-arrow-4"> &lt; </label>
    <label for="new-slide18" class="new-left-arrow-4"> &lt; </label>
    <label for="new-slide19" class="new-left-arrow-4"> &lt; </label>

    <label for="new-slide16" class="new-right-arrow-4"> &gt; </label>
    <label for="new-slide17" class="new-right-arrow-4"> &gt; </label>
    <label for="new-slide18" class="new-right-arrow-4"> &gt; </label>
    <label for="new-slide19" class="new-right-arrow-4"> &gt; </label>

    <div class="new-carousel-4">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/bremen-dommuseum-erdgeschoss.jpg" />
          <h3>Katedral Müzesi-Dom Museum im St. Petri Dom</h3>
          <p>Dom Müzesi, Katedralin büyük ölçekli restorasyonunun bir sonucu olarak ortaya çıktı. Restorasyon nedeniyle Katedralin sayısız mezarı ve 1.200 yıllık tarihi hakkında yeni bilgiler keşfedildi. Yüksek koronun yanındaki tarihi odalarda bir müze alanı oluşturuldu. Bremen’deki Katedral Müzesi Aziz Petri Katedrali bir ekümenik Kilisenin tarihi müzesi içinde Bremen Katedralin ortaçağ piskopos mezarlarından buluntuları kaydetmek için 1987 yılında kurulmuştur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/krankenhausmuseum_ausstellung_03.jpg" alt="">
          <h3>Hastane Müzesi-Krankenhaus Museum</h3>
          <p>Krankenhaus(Hastane) Müzesi bir tıbbi tarih müzesi içinde Doğu Vestfalya şehri Bielefeld içinde Kuzey Ren-Vestfalya. Dr. Mildred Scheel Parkı’ndaki Bielefeld Mitte Kliniğinde yer almaktadır. Müze, hastane yatağındaki hastaya odaklanan Bielefeld’deki hastanelerin tarihine adanmıştır. Kişisel mutfak eşyaları ve ilgili ekipman, tedavi ve bakım yardımcıları da mevcuttur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asd.jpg?w=1024" />
          <h3>Kainat Müzesi-Bremen</h3>
          <p>Universum Bremen’de, bilim dünyasına olağanüstü bir keşif yolculuğuna çıkıyorsunuz. 300’den fazla sergi, bilimsel fenomenleri yakından ve tüm duyularınızla deneyimlemenizi ve anlamanızı sağlar. Üç konu alanı Teknoloji, insan ve Doğa burada keşfedilmeyi bekliyor. Yılda ortalama 450.000 ziyaretçi almaktadır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/hh_eingang-menschen2-sister.jpg">
          <h3>Focke Müzesi-Bremen</h3>
          <p>Focke Müzesi, Bremen şehrinin tarih müzesi olan Bremer Eyalet Sanat ve Kültür Tarihi Müzesi’dir. 16. yüzyıldan 19. yüzyıla kadar olan binalarla tamamlanan modern ana bina, Riensberg’in Bremen bölgesinde 4,5 hektarlık bir parkta yer almaktadır. Şehrin Rheinsberg semtinde 4,5 hektarlık (11 dönüm) arazide yer almaktadır. 1964 yılında açılan ve 2002 yılında genişletilen ana binaya ek olarak, müze kompleksi, 1964 yılından kalma binaları içermektedir.</p>
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>




<h2>Bayern(Bavyera) Eyaletindeki Müzeler</h2>
<div class="custom-center-5">
  <div class="custom-carousel-wrapper-5">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide21" type="radio" name="custom-controls-5" checked="checked" />
    <input id="custom-slide22" type="radio" name="custom-controls-5" />
    <input id="custom-slide23" type="radio" name="custom-controls-5" />

    <!-- navigation dots -->
    <label for="custom-slide21" class="custom-nav-dot-5"></label>
    <label for="custom-slide22" class="custom-nav-dot-5"></label>
    <label for="custom-slide23" class="custom-nav-dot-5"></label>

    <!-- arrows -->
    <label for="custom-slide21" class="custom-left-arrow-5"> &lt; </label>
    <label for="custom-slide22" class="custom-left-arrow-5"> &lt; </label>
    <label for="custom-slide23" class="custom-left-arrow-5"> &lt; </label>

    <label for="custom-slide21" class="custom-right-arrow-5"> &gt; </label>
    <label for="custom-slide22" class="custom-right-arrow-5"> &gt; </label>
    <label for="custom-slide23" class="custom-right-arrow-5"> &gt; </label>

    <div class="custom-carousel-5">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/buchheim-museum-der-phantasie-in-bernried-am.jpg" />
          <h3>Buchheim Museum der Phantasie-Bernried İlçesi</h3>
          <p>Hayatı boyunca yazar, film yapımcısı ve ressam Lothar-Günther Buchheim resim ve eserler topladı. Artık ziyaretçiler koleksiyonunu Starnberg Gölü’nün yanındaki müzede görebilirler.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/csm_luftmuseum_10-2017_0012_1500_6c86cd686f.jpg" alt="">
          <h3>Luftmuseum-Amberg İlçesi</h3>
          <p>Amberg’deki Engelsburg Kalesi’ndeki Hava Müzesi, toplam 650 metrekarelik üç kata yayılmış, duyabileceğiniz, görebileceğiniz ve dokunabileceğiniz havaya sahiptir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/esm-sammlung-edwin-scharff-hockende-foto-niks.jpg" />
          <h3>Edwin Scharff Museum-Neu Ulm İlçesi</h3>
          <p>Neu-Ulm Edwin Scharff Müzesi, Almanya’daki sanatçının eserlerine ve modern sanatına adanmış sergi salonlarının yanı sıra etkileşimli bir çocuk müzesi içeren eşsiz bir kurumdur.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>




<h2>Thüringen Eyaletindeki Müzeler</h2>
<div class="custom-center-6">
  <div class="custom-carousel-wrapper-6">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide26" type="radio" name="custom-controls-6" checked="checked" />
    <input id="custom-slide27" type="radio" name="custom-controls-6" />
    <input id="custom-slide28" type="radio" name="custom-controls-6" />
    <input id="custom-slide29" type="radio" name="custom-controls-6" />

    <!-- navigation dots -->
    <label for="custom-slide26" class="custom-nav-dot-6"></label>
    <label for="custom-slide27" class="custom-nav-dot-6"></label>
    <label for="custom-slide28" class="custom-nav-dot-6"></label>
    <label for="custom-slide29" class="custom-nav-dot-6"></label>

    <!-- arrows -->
    <label for="custom-slide26" class="custom-left-arrow-6"> &lt; </label>
    <label for="custom-slide27" class="custom-left-arrow-6"> &lt; </label>
    <label for="custom-slide28" class="custom-left-arrow-6"> &lt; </label>
    <label for="custom-slide29" class="custom-left-arrow-6"> &lt; </label>

    <label for="custom-slide26" class="custom-right-arrow-6"> &gt; </label>
    <label for="custom-slide27" class="custom-right-arrow-6"> &gt; </label>
    <label for="custom-slide28" class="custom-right-arrow-6"> &gt; </label>
    <label for="custom-slide29" class="custom-right-arrow-6"> &gt; </label>

    <div class="custom-carousel-6">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/05oldsynaerfurt-edited-version-jpg.jpeg" />
          <h3>Thüringen Yahudi Cemaati Kültür ve Eğitim Merkezi</h3>
          <p>2001 yılında kurulan Kültür ve Eğitim Merkezi, o zamanlarda yeni yeni büyüyen topluluğa ek kültürel ve eğitimsel hizmetler sunar ve Yahudilerin dini ve kültürel yaşamı hakkında bilgi aktarımını teşvik eder.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/bild_1.jpg" alt="">
          <h3>Friedrich-Fröbel Müzesi</h3>
          <p>Friedrich-Fröbel Müzesi, anaokulunun başlangıcını canlandırıyor. Müzede yer alan “Bodrumun üstündeki ev” de Anaokulunun doğuşu gerçekleşti. Friedrich Wilhelm August Fröbel, 1839’da Okul Öncesi Eğitim programını uygulamaya başladı.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/weimar-schillers-wohnhaus-vorderfassade.jpg" />
          <h3>Schiller’in Evi-Weimar</h3>
          <p>Friedrich Schiller son üç yılını Esplanade’deki evinde geçirdi. Burada “Messina’nın Gelini” ve “tell” adlı büyük Dramalar, şairin 1805’te çalışma odasında ölmesinden önce ortaya çıktı. Bugün hala orijinal Masa Ve Schiller’in yatağını görebilirsiniz.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/weimar_0012.jpg">
          <h3>Goethe Ulusal Müzesi-Weimar</h3>
          <p>Goethe Ulusal Müzesi, Goethe’nin yaşamını ve çalışmalarını sergilemek ve araştırmak için en önemli müzedir. Eşsiz bir hazineye ev sahipliği yapıyor: şairin Evi, orijinal mobilya ve koleksiyon eşyalarıyla. Goethe’nin edebi yaratıcılığının ötesinde karmaşıklığını ortaya koyan komşu “Lebensfluten – Tagensturm” sergisinde de çok sayıda eser görülebilir.</p>
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>



<h2>Schleswig-Holstein Eyaletindeki Müzeler</h2>
<div class="custom-center-7">
  <div class="custom-carousel-wrapper-7">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide31" type="radio" name="custom-controls-7" checked="checked" />
    <input id="custom-slide32" type="radio" name="custom-controls-7" />
    <input id="custom-slide33" type="radio" name="custom-controls-7" />

    <!-- navigation dots -->
    <label for="custom-slide31" class="custom-nav-dot-7"></label>
    <label for="custom-slide32" class="custom-nav-dot-7"></label>
    <label for="custom-slide33" class="custom-nav-dot-7"></label>

    <!-- arrows -->
    <label for="custom-slide31" class="custom-left-arrow-7"> &lt; </label>
    <label for="custom-slide32" class="custom-left-arrow-7"> &lt; </label>
    <label for="custom-slide33" class="custom-left-arrow-7"> &lt; </label>

    <label for="custom-slide31" class="custom-right-arrow-7"> &gt; </label>
    <label for="custom-slide32" class="custom-right-arrow-7"> &gt; </label>
    <label for="custom-slide33" class="custom-right-arrow-7"> &gt; </label>

    <div class="custom-carousel-7">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/aaaaaaaaaaaaaaaaaaaaa.jpg" />
          <h3>UNESCO Dünya Mirası Danewerk-Haithabu(Viking Müzesi)</h3>
          <p>”Danewerk” kelime anlamı olarak Yüksek Orta Çağ’ın mekansal ve zamansal olarak tahkimatına denir. Altın takılar veya inciler gibi özel ürünlerin birçok ustası kalıcı olarak yerleşti ve burayı gelişen bir metropol haline getirdi. Kendinizi 1000 yıl önce Vikinglerin renkli Koşuşturmasına geri götüren bu yerde, açık alanda heybetli eski yapım evlerin yeniden inşasına ve burada bulunan çok sayıda eserlere hayret edin.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdaaasasdadas.jpg" alt="">
          <h3>AVRUPA HANSA MÜZESİ-HANSAMUSEUM</h3>
          <p>Bir ekonomi Müzesi olarak, Müze aynı zamanda ticaret ve ekonomi ile ilgili güncel konularla da ilgilenmektedir. Eşsiz ambiyansı ve etkinlikler için bol miktarda alanı ile daima, geleceği ve geçmişi düşünmek için ideal bir yerdir. Burada sadece bugünü anlayamaz, aynı zamanda tadını çıkarabilirsiniz.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/aaaaaaaaaaa.jpg" />
          <h3>Holstentor Müzesi</h3>
          <p>Holstentor Müzesi’ndeki sergide Lübeck’e nasıl “Hansa Kraliçesi” olduğunu öğreneceksiniz. Uzun mesafeli ticaret, şehir tarihi, aynı zamanda Denizcilik, Pazar olayları ve Orta Çağ’da Hukuk belgelenmiştir.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>





<h2>Niedersachsen-Aşağı Saksonya Eyaletindeki Müzeler</h2>
<div class="custom-center-8">
  <div class="custom-carousel-wrapper-8">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide36" type="radio" name="custom-controls-8" checked="checked" />
    <input id="custom-slide37" type="radio" name="custom-controls-8" />
    <input id="custom-slide38" type="radio" name="custom-controls-8" />
    <input id="custom-slide39" type="radio" name="custom-controls-8" />
    <input id="custom-slide40" type="radio" name="custom-controls-8" />

    <!-- navigation dots -->
    <label for="custom-slide36" class="custom-nav-dot-8"></label>
    <label for="custom-slide37" class="custom-nav-dot-8"></label>
    <label for="custom-slide38" class="custom-nav-dot-8"></label>
    <label for="custom-slide39" class="custom-nav-dot-8"></label>
    <label for="custom-slide40" class="custom-nav-dot-8"></label>

    <!-- arrows -->
    <label for="custom-slide36" class="custom-left-arrow-8"> &lt; </label>
    <label for="custom-slide37" class="custom-left-arrow-8"> &lt; </label>
    <label for="custom-slide38" class="custom-left-arrow-8"> &lt; </label>
    <label for="custom-slide39" class="custom-left-arrow-8"> &lt; </label>
    <label for="custom-slide40" class="custom-left-arrow-8"> &lt; </label>

    <label for="custom-slide36" class="custom-right-arrow-8"> &gt; </label>
    <label for="custom-slide37" class="custom-right-arrow-8"> &gt; </label>
    <label for="custom-slide38" class="custom-right-arrow-8"> &gt; </label>
    <label for="custom-slide39" class="custom-right-arrow-8"> &gt; </label>
    <label for="custom-slide40" class="custom-right-arrow-8"> &gt; </label>

    <div class="custom-carousel-8">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdasaaadd.jpg" />
          <h3>Endüstri Müzesi- Lohne</h3>
          <p>1000 metrekarelik sergi alanı, mütevazı başlangıçlardan ekonomik olarak başarılı bir bölgenin nasıl yaratıldığını gösteriyor. Galeri, Luzie Uptmoor ve birçok ödüllü ressamların resminlerini de sergiliyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdasdasaasdaasd.jpg" alt="">
          <h3>Biosphaerıum Elbtalaue-Bleckede</h3>
          <p>Tarihi Bleckeder Schloss’ta Aşağı Saksonya’daki Elbtalaue Biyosfer Rezervi’nin Bilgi Merkezi Biosphaerium Elbtalaue olmuştur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdasdasdasdasdasdasdas.jpeg" />
          <h3>Gifhorn Uluslarası Rüzgar ve Su Değirmenleri Müzesi</h3>
          <p>Yaklaşık 15 hektarlık Park alanında, Açık Hava Müzesi on bir ülkeden 14 Değirmene ev sahipliği yapıyor. Değirmenler işlevseldir ve orijinal boyutlarında sunulur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/blick-auf-die-gemaeldegalerie-rembrandt.jpeg">
          <h3>Herzog Anton Ulrich Müzesi-Braunschweig</h3>
          <p>Herzog Anton Ulrich Müzesi, Aşağı Saksonya eyaletinin Sanat müzesidir. Sadece Avrupa’nın en eski Müzelerinden biri değil (açılış tarihi: 1754), aynı zamanda birinci sınıf Sanat koleksiyonları sayesinde dünyanın en önemli Antik Sanat Müzelerinden biridir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asaasdasdas.jpg" alt="">
          <h3>Klimahaus-İklim Binası-Bremerhaven</h3>
          <p>Sekizinci Doğu boylamı boyunca dünyayı gezerken, Klimahaus Bremerhaven ziyaretçileri dünyanın en önemli iklim bölgelerindeki yaşam hakkında otantik izlenimler edinebilirler.</p>
        </li>
      </ul>
    </div>
  </div>
</div>






<h2>Hessen Eyaletindeki Müzeler</h2>
<div class="custom-center-9">
  <div class="custom-carousel-wrapper-9">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide41" type="radio" name="custom-controls-9" checked="checked" />
    <input id="custom-slide42" type="radio" name="custom-controls-9" />
    <input id="custom-slide43" type="radio" name="custom-controls-9" />
    <input id="custom-slide44" type="radio" name="custom-controls-9" />
    <input id="custom-slide45" type="radio" name="custom-controls-9" />

    <!-- navigation dots -->
    <label for="custom-slide41" class="custom-nav-dot-9"></label>
    <label for="custom-slide42" class="custom-nav-dot-9"></label>
    <label for="custom-slide43" class="custom-nav-dot-9"></label>
    <label for="custom-slide44" class="custom-nav-dot-9"></label>
    <label for="custom-slide45" class="custom-nav-dot-9"></label>

    <!-- arrows -->
    <label for="custom-slide41" class="custom-left-arrow-9"> &lt; </label>
    <label for="custom-slide42" class="custom-left-arrow-9"> &lt; </label>
    <label for="custom-slide43" class="custom-left-arrow-9"> &lt; </label>
    <label for="custom-slide44" class="custom-left-arrow-9"> &lt; </label>
    <label for="custom-slide45" class="custom-left-arrow-9"> &lt; </label>

    <label for="custom-slide41" class="custom-right-arrow-9"> &gt; </label>
    <label for="custom-slide42" class="custom-right-arrow-9"> &gt; </label>
    <label for="custom-slide43" class="custom-right-arrow-9"> &gt; </label>
    <label for="custom-slide44" class="custom-right-arrow-9"> &gt; </label>
    <label for="custom-slide45" class="custom-right-arrow-9"> &gt; </label>

    <div class="custom-carousel-9">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/0aa9ad6de9a802b65698e6af933f309a.jpg" />
          <h3>Spohr Müzesi-Kassel Şehri</h3>
          <p>Bugünkü Kassel Kulturbahnhof’un tarihi bir tuğla binasında (Güney kanadı) 2009’dan beri modern ve engelsiz bir şekilde döşenmiş “Spohr Müzesi”bulunmaktadır. Burada ziyaretçiler, 19. yüzyılın başlarındaki en önemli müzisyenlerden birinin hayatına ve çalışmalarına çeşitli şekillerde erişebilirler: Louis Spohr (1784-1859).</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/0ww26120008ye46le267f_magic.jpg" alt="">
          <h3>Horex Museum-Bad Homburg vor der Höhe Şehri</h3>
          <p>2012 yılında açılan Yeni Müze Binası, tren istasyonunun güneyinde ve diğer şeylerin yanı sıra efsanevi Motosikletlerin yapıldığı eski Horex fabrikasının hemen yakınında yer almaktadır. Binanın kendisi, yuvarlatılmış Köşeleri ve pencerelerin önündeki enine Kaburgaları ile bir Horeks tek silindirli motoru andırıyor. Ekstra bilgi olarak da Horex ünlü bir Alman motosiklet üreticisidir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/stadel-museum.jpg" />
          <h3>Städel Museum-Frankfurt Main İlçesi</h3>
          <p>Almanya’nın en eski ve en önemli Müze vakfı olan Städtel Müzesi (Städtel Sanat Enstitüsü ve Belediye Galerisi), 1815 yılında Frankfurtlu bankacı ve tüccar Johann Friedrich Stadtel’in Sanat Eserleri, bir sanat Kütüphanesi ve Sermayeyi içeren bir bağışına dayanıyor. 1874’ten 1878’e kadar, bugün hala kullanılan Müze Binası inşa edildi ve birkaç kez yapısal olarak genişletildi. Şubat 2012’de yeni bir yeraltı Binası açıldı. Fotoğraflarla 1945’ten sonra sunulan sanatın büyük ölçüde genişletilmiş koleksiyonudur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/innenansicht.jpg">
          <h3>Schulmuseum-Kriftel İlçesi</h3>
          <p>Kapsamlı bir okulda bulunan Müze (Main-Taunus-Kreis okul tarihi Koleksiyonu), özellikle Vortaunus bölgesinde okul sistemi ile ilgilenmektedir. Hem Pedagojinin gelişimi hakkında fikir vermek hem de okulun ve çocukluğun sosyal tarihini temsil etmek için tasarlanmıştır. Bazı okullar, bazı günlerde bu yerde ders bile işlemektedir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/16413-1.jpeg?w=1024" alt="">
          <h3>Mathematikum-Gießen İlçesi</h3>
          <p>Matematik Merkezi 2002 yılında eski Giessener Zollhaus’ta dünyanın ilk matematik” Mitmachmuseum ” (Bilim Merkezi) olarak açıldı. Amaç, matematiği halka açık bir şekilde anlaşılabilir hale getirmektir – ve aileler için bir gezi yeri olarak idealdir.</p>
        </li>
      </ul>
    </div>
  </div>
</div>




<h2>Sachsen-Anhalt Eyaletindeki Müzeler</h2>
<div class="custom-center-10">
  <div class="custom-carousel-wrapper-10">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide46" type="radio" name="custom-controls-10" checked="checked" />
    <input id="custom-slide47" type="radio" name="custom-controls-10" />
    <input id="custom-slide48" type="radio" name="custom-controls-10" />

    <!-- navigation dots -->
    <label for="custom-slide46" class="custom-nav-dot-10"></label>
    <label for="custom-slide47" class="custom-nav-dot-10"></label>
    <label for="custom-slide48" class="custom-nav-dot-10"></label>

    <!-- arrows -->
    <label for="custom-slide46" class="custom-left-arrow-10"> &lt; </label>
    <label for="custom-slide47" class="custom-left-arrow-10"> &lt; </label>
    <label for="custom-slide48" class="custom-left-arrow-10"> &lt; </label>

    <label for="custom-slide46" class="custom-right-arrow-10"> &gt; </label>
    <label for="custom-slide47" class="custom-right-arrow-10"> &gt; </label>
    <label for="custom-slide48" class="custom-right-arrow-10"> &gt; </label>

    <div class="custom-carousel-10">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/foto-heiko-janowski_trojanisches-pferd-scaled-1.jpg" />
          <h3>Winckelmann-Museum</h3>
          <p>Hansa kenti Stendal’daki Müze, klasik Arkeoloji ve Modern Sanat bilimlerinin kurucusunun hayatına adanmıştır. Bir müze bölgesinde, “Volkanın altında” Aile Müzesi ve dünyanın en büyük yürünebilir truva atı ile sergi alanları bulunmaktadır. Winckelmann-Museum</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/1053180118213811.jpg" alt="">
          <h3>Bismarck-Museum Schönhausen</h3>
          <p>İlk Alman Şansölyesi Otto von Bismarck’ın onuruna düzenlenen Müze, “Reich’in kurucusu” olarak saygı duyulan Devlet adamını çevreleyen çağdaş kültlük hakkında bir izlenim bırakıyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/service-besuch-diesdorf-slider01-berndrieck.jpg" />
          <h3>Freilichtmuseum Diesdorf</h3>
          <p>Altmark’taki Diesdorf’taki Freiland Müzesi bize çok eski zamanların kırsal yaşamını sunuyor. Güzel bahçeleri ve çok iyi yapılmış sergisi ile 20 tarihi evleri, ziyaretçileri memnun.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>




<h2>Mecklenburg-Vorpommern Eyaletindeki Müzeler</h2>
<div class="custom-center-11">
  <div class="custom-carousel-wrapper-11">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide51" type="radio" name="custom-controls-11" checked="checked" />
    <input id="custom-slide52" type="radio" name="custom-controls-11" />
    <input id="custom-slide53" type="radio" name="custom-controls-11" />

    <!-- navigation dots -->
    <label for="custom-slide51" class="custom-nav-dot-11"></label>
    <label for="custom-slide52" class="custom-nav-dot-11"></label>
    <label for="custom-slide53" class="custom-nav-dot-11"></label>

    <!-- arrows -->
    <label for="custom-slide51" class="custom-left-arrow-11"> &lt; </label>
    <label for="custom-slide52" class="custom-left-arrow-11"> &lt; </label>
    <label for="custom-slide53" class="custom-left-arrow-11"> &lt; </label>

    <label for="custom-slide51" class="custom-right-arrow-11"> &gt; </label>
    <label for="custom-slide52" class="custom-right-arrow-11"> &gt; </label>
    <label for="custom-slide53" class="custom-right-arrow-11"> &gt; </label>

    <div class="custom-carousel-11">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/ccccccc.jpg?w=1024" />
          <h3>Neubrandenburg Bölge Müzesi</h3>
          <p>Derneğin doğum gününü müzenin doğum günü takip eder. 1872’de Neubrandenburg Müzesi kuruldu vebu yılda Treptov Kapısı’ndaki ilk sergi gerçekleşti. O dönemde kurulan koleksiyon, 150 yılda on binlerce nesneye ulaştı.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/ssdasadas.jpg" alt="">
          <h3>Ozeaneum Akvaryum Müzesi</h3>
          <p>Çatı terasında ferah bir penguen tesisi ve Avrupa’nın en büyük Baltık Denizi Sergisi yer alıyor. En büyük Akvaryum 2,6 milyon litre su tutar ve 50 m2’lik panoramik penceresi balık sürüleri, vatozlar ve hatta köpekbalıklarının manzarasını sunar. OCEANEUM’DA bilimsel sergiler 50 çarpıcı, kısmen dev Akvaryumla birleştiriliyor. Müze, “2010 yılı Avrupa Müzesi” ödülüne layık görüldü.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/ddddddd.jpg" />
          <h3>Rostock Kültür Tarihi Müzesi</h3>
          <p>ROSTOCK KÜLTÜR TARİHİ MÜZESİ
1270 yılında kurulan Rostock Sistersian manastırı olan tarihi zum Heiligen Kreuz Manastırı’nda yer almaktadır. Müze, geniş bir sanat ve kültür tarihi koleksiyonuna sahiptir ve Mecklenburg-Vorpommern’deki burjuva Kültür tarihini belgeleyen en önemli yerlerden biridir. 1859 yılında kurulan Belediye Müzesinde resim, Grafik, El Sanatları, madeni para, Mobilya, Militaria, günlük Kültür ve Arkeoloji koleksiyonları bulunmaktadır.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>







<h2>Hamburg Eyaletindeki Müzeler</h2>
<div class="custom-center-12">
  <div class="custom-carousel-wrapper-12">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide56" type="radio" name="custom-controls-12" checked="checked" />
    <input id="custom-slide57" type="radio" name="custom-controls-12" />
    <input id="custom-slide58" type="radio" name="custom-controls-12" />

    <!-- navigation dots -->
    <label for="custom-slide56" class="custom-nav-dot-12"></label>
    <label for="custom-slide57" class="custom-nav-dot-12"></label>
    <label for="custom-slide58" class="custom-nav-dot-12"></label>

    <!-- arrows -->
    <label for="custom-slide56" class="custom-left-arrow-12"> &lt; </label>
    <label for="custom-slide57" class="custom-left-arrow-12"> &lt; </label>
    <label for="custom-slide58" class="custom-left-arrow-12"> &lt; </label>

    <label for="custom-slide56" class="custom-right-arrow-12"> &gt; </label>
    <label for="custom-slide57" class="custom-right-arrow-12"> &gt; </label>
    <label for="custom-slide58" class="custom-right-arrow-12"> &gt; </label>

    <div class="custom-carousel-12">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/aaaaaaaaaaaaaaaaaqaaaaaa.jpg" />
          <h3>Wasserkunst Elbinsel Kaltehofe Müzesi</h3>
          <p>Wasserkunst Elbinsel Kaltehofe, endüstriyel bir anıtın rekreasyonunu, ekolojik çeşitliliğini ve heyecan verici kültürel tarihini birleştiriyor. Rothenburgsort mahallesindeki Wasserkunstinsel’i (‘su işleri adası’) büyük ve küçükler için ilham verici kılan rehberli turlar, atölyeler ve özel etkinlikler sunulmaktadır. Ayrıca bu yerde Hamburg şehir bölgesindeki 18 yağış ölçüm istasyonundan birine ev sahipliği yapıyor ve 20. yüzyılın başlarına kadar veri sağlıyor. Bu şekilde, özellikle Hamburg’daki iklim değişikliği kesin olarak değerlendirilebilir ve eğilimler daha ayrıntılı olarak incelenebilir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg" alt="">
          <h3>Hamburg Müzesi</h3>
          <p>1922’de açılan güzel Hamburg müzesi, etkinlikler ve sergilerle şehrin 1.200 yıllık büyüleyici tarihini hayata geçiriyor. Minyatür demir yolu sistemi ve cam çatılı iç avlu, Hamburg müzesi’ni ziyaret etmeyi daha da gerekli kılıyor. Krameramtsstuben tarihi evleri’ndeki 1850’lerde Hamburg yaşamına bir bakış sunan küçük müzenin de Hamburg müzesi’nin bir parçası olduğunu unutmayın.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdasdasaas-1.jpg" />
          <h3>IMMH Müzesi</h3>
          <p>Hamburg’un ayakta kalan en eski tarihi deposu, Speicherstadt’taki kapsamlı bir denizcilik sergisi olan IMMH’ye ev sahipliği yapmaktadır. HafenCity Hamburg’da bulunan müze, 2008 yılında kapılarını halka açtı. Olağanüstü koleksiyon, dokuz seviyeye çeşitli sergilere dağıtılıyor ve her sergi eserler aracılığıyla kendine özgü hikayesini anlatıyor. Örneğin, sekizinci seviyedeki dünyanın en büyük kemik gemisi koleksiyonunu ziyaret etmek isteyebilirsiniz.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "kent") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "KENT";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "KENT";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});






document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p style="font-size: 20px;">İlk sitede "MÜZİK" bölümü için kullanılan tasarım:</p>
        <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/02/ornekdlkultur.jpg?w=1024" alt="hj">
        
        <h1>Almanya Musikîsi</h1>
        <p>Goethe Enstitüsüne göre Almanya, şairlerin ve düşünürlerin ülkesi olarak kabul edilir. Buna müzisyenler de dahildir. -Händel, Bach, Beethoven, Brahms, Schumann, Schütz, Wagner, Hindemith, Weill, Stockhausen vb.- Almanya’nın hemen hemen her döneminde dünyaca ünlü klasik müzisyenleri bir bir yetiştirilmiştir. Bir diğer konuda da yine Goethe Enstitüsüne göre ise yüksek övgü her zaman problemli olsa da sadece Avusturyalılar, İtalyanlar ve Fransızlar Almanya ile bu saygıda rekabet edebilir. Ne yazık ki orada bulunan katı vatanseverler için entelektüel yeterlilik, Almanya sınırlarında biter.1</p>
        
        <p style="font-size: 24px;"><b>Örnek Müzik Türlerinde Örnek Almanca Şarkılar</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/AlRzFIXrBIQ?si=6oljW24TjPGnIjkD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>“Moskau” Sovyetler Birliği’nde muazzam bir popülerlik kazandı. Bu şarkı ilk olarak Almanca versiyonu ile çıkmıştır ve Sovyetler Birliği’nin yıkılmasından yıllar yıllar sonra Slav halkı ile dalga geçilen internet videolarına adeta bir tema müziği oldu.</p>

        <iframe class="kalmipp" src="https://www.youtube.com/embed/dQfFTUZ3O80?si=Q_ZR3sqbo4VEApzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Bowie’nin Visconti ile şarkıcı Antonia Maass arasında Berlin Duvarı’nın yanında bir öpücüğe tanık olmasında doğrudan ilham alınan ve diğer ilhamlar arasında Otto Mueller’in bir tablosu ve Alberto Denti di Pirajno’nun kısa bir hikayesi vardır. Şarkı, ayrıca Almanca, Fransızca ve İngilizce versiyonları ile piyasaya sürülmüştür.</p>

        <iframe class="kalmipp" src="https://www.youtube.com/embed/xaKilnGA1C0?si=bIe0NiYI-UjdDwVx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        <p>Nazi Almanyası döneminde soykırıma uğramış Alman Yahudileri, orada konuştukları dil olan Yidiş ile kültürlerini de yanlarına alıp uzak diyarlara gittiler. Oradaki güzel günlerine dönecek olursak bizi bu şarkıları karşılamaktadır.</p> 
        <iframe class="kalmipp" src="https://www.youtube.com/embed/r-piMuyC1JY?si=51Oa-RCJG6m6vZIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <h1>Diğer Müzik Türlerinde Almanlar</h1>
        <p style="font-size: 24px;"><b>Klasik Müzik</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/-oSozJm_k0c?si=knf3-Sf_tt1zdk1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Bunun dışında klasik müziğin önemli isimlerinin Almanya diyarından çıktığı söylenir. Kesindir ki örnekleri bu sayfaya sığmaz ama ister istemez yaşamda bir kez karşılaşılmış olsun akıllara kazınmış bazı eserlere misâl olarak; genellikle bir senaryoda temsili olarak bir düğünü anlatma ekseriyetinde imgeleşmiş olan “Hochzeitsmarsch“(Düğün Şarkısı/Marşı) ve Avrupa Birliği Marşı, (Freude Schöner Götterfunken). Bu eser tuhaf gelen hızlı melodisi, alafranga müziğin adeta baş temsilcisi olmuş, 1823’te Ludwig van Beethoven’ın ve Friedrich Schiller’in 1785’te yazdığı “Ode an die Freude” şarkısının melodisi olarak bestelediği Dokuzuncu Senfoni‘den geliyor. Marş içerisinde Avrupa Birliği’nin daha geniş anlam olaraktan namına sembolize edildiği söylenir.</p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/Jo_-KoBiBG0?si=SMnCDl_bV29G7TQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <p style="font-size: 24px;"><b>Rock Müzik</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/5eHkjPCGXKQ?si=xnfBXxfDeqWdyG5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>İngiliz Rock Grubu Led Zeppelin, bu şarkıda kuzeyden güneye göç eden barbar Germenleri konu alır.</p>
        
        <p style="font-size: 24px;"><b>Pop-Disko Türü</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/YCQYdgYG7uY?si=70GNwUOi9a4eE5YL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Tarzı Eurodisco olan ve Batı Almanya’da kurulan Boney M. grubunun bu ünlü parçasında Rus gezgin Grigori Jefimowitsch Rasputin’in hayatı ele alınır.</p>
        
        <p style="font-size: 24px;"><b>Çocuk Şarkıları</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/Wz5P7EzEd4w?si=tl7m0HmFPEwPA-nx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Her kitleye olduğu gibi çocuklara yönelik şarkıların da, yani bir çocuğun ve bir müzik çaların bulunduğu herhangi yerde kulağa aşina gelebilecek bazı Alman kökenli niteliğe sahip eserlere örnek olarak “Hoffman von Fallersleben” tarafından yazılan “Ein Männlein steht im Walde” (1843) ve “Alle vögel sind schon da” (1835) şarkılarıdır. Şairin biyografisi “Edebi” bölümünde bulunmaktadır.</p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/74oAbPDa6vU?si=aIPdlFYfIHwZLNGx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <p style="font-size: 24px;"><b>Spor Takımlarının Sanatsal Rekabeti</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/DXCSG6AMpQM?si=A4DD4ef5LSmi15XS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Rekabetten güzellikler çıktığı söylenir. Bu güzellik herkese hitap edemese de Almanya ülkesinde bulunan bazı spor kulüpleri ve taraftarları bunun dışında denebilir. Tabii ki örnek olarak. FC Köln takımının taraftarları tarafından yapılan İskandinav kökenli “Mer stonn zo dir” şarkısını Köln kentinde konuştukları “Kölsch” lehçesi ile harmanlayarak takımlarına “her daim seninleyiz” mesajı vermiştir. FC Bayern takımının şarkısında ise daha çok oyuncularına destek veren bir hava ve tıpkı Köln şarkısı gibi geçmiş heyecanlar, hatıralar ve bir tarih bulundurur.</p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/X3CZiq_Li_U?si=eRofRHvPcxhbCFaq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "sanat") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "MÜZİK";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "MÜZİK";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});









function myFunction() {
  var x = document.getElementById("lala");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// script.js
// script.js
document.addEventListener('DOMContentLoaded', function() {
  
  const loadingContainer = document.querySelector('.loading-container');
  let hasScrolled = false; // Flag to track if scroll has occurred
  let isScrolling = false; // Flag to track if currently scrolling

  scrollButton.addEventListener('click', function() {
    if (!hasScrolled && !isScrolling) {
      isScrolling = true;
      loadingContainer.style.display = 'block'; // Show loading animation
      setTimeout(() => {
        loadingContainer.style.display = 'none'; // Hide loading animation after 3 seconds
        smoothScroll(200);
        hasScrolled = true;
      }, 400);
    }
  });

  


  function smoothScroll(distance) {
    const startPosition = window.pageYOffset;
    const targetPosition = startPosition + distance;
    const duration = 500; // Duration of the scroll animation in milliseconds
    const startTime = performance.now();

    function scrollStep(timestamp) {
      const currentTime = timestamp - startTime;
      const progress = Math.min(currentTime / duration, 1);

      window.scrollTo(0, startPosition + (targetPosition - startPosition) * progress);

      if (currentTime < duration) {
        requestAnimationFrame(scrollStep);
      } else {
        isScrolling = false; // Animation finished, re-enable the button
        scrollButton.classList.remove('loading'); // Remove loading animation class
      }
    }

    requestAnimationFrame(scrollStep);
  }
});




  document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.querySelector(".toggle-checkbox");
  const listItems = document.querySelectorAll(".list-item");

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      toggleCheckbox.checked = false; // Uncheck the checkbox to close the list
    });
  });
});











document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p>Alman Edebiyatının başlangıcında sadece 8. yüzyılda yazılmış olan germen kahramanlık şarkıları, atasözleri ve büyüleri vardır. 10. yüzyılın sonunda dahi Almanca şiir yoktu. Var olanlar ise Latince idi. Ancak Orta Çağ'da Alman şiirinin en yüksek noktası başladı(tahminen 1170 yılı civarında)...</p>
      <h1>MINNESANG-MINNELYRIK</h1>
      <p>Walter von der Vogelweide zamanının en önemli şairiydi. Alman lirik şiiri(Minnelyrik ya da Minnesang) yazmıştır. Bu şiir Alman dili alanındaki Yüksek Ortaçağ’ın(11. Yüzyılın ortalarından 13. Yüzyılın sonunda kadar süren dönem) şövalyevari şiirdir. Bu şiiri söyleyenler Minnesänger olarak adlandırılır. Minnesang bir halk şiiridir. Teması ise şatonun soylu kadınlarının onurunu yüceltmektir. Minne kelimesi aşk anlamına gelir. Yani hem tema hem de soylu kadın kavramına bakılırsa durum şöyledir; Minnesänger’den daha sosyal olarak yüksek olan evli bir kadına olan sevgidir. Minnesang’ların Ortaçağ’da keman benzeri bir müzik aleti ile söylendiği tahmin edilmektedir.</p>
      <p>Walther von der Vogelweide bu sanatta ünlü Filistin şarkısını yazmıştır (Aşağıdaki videodan dinleyebilirsiniz). Bu şiirin teması ise 2. Friedrich’in 1228 Haçlı Seferi(6.HaçlıSeferi) sonucu Kudüs’ü tekrar Hristiyanların eline geçirmesidir. Vogelweide dışında bir kaç örnek Minne şairi; Veldeke, Neidhart, Wolfram von Eschenbach, Heinrich von Morungen, Meister Johans Hadloub.</p>
      
      <h1>DER KLASSISCHEN DEUTSCHEN LITERATUR-KLASIK ALMAN EDEBIYATI</h1>
      <p>Alman Edebiyatı’nın hem temel taşları hem de öncüleri Johann Wolfgang von Goethe ve Friedrich Schiller’dir. Bu işin merkezi Weimar şehri idi.</p>
      <p>Goethe, İtalya’ya bir gezi yaptı. Orada hepsinden önce onu da çok büyüleyen Antik sanatın uyumunu inceledi. Klasik Dönemim en önemli eserleri ise kendisi tarafından yazılan ”Torquato Tasso, Iphigenie auf Tauris” bu eserler ile kendisine şehir sınıfını eğitmek için bir görev verdi. Goethe’nin ana eseri Faust’tur. Bu iki bölümden oluşan felsefi bir şiirdir. Goethe bu çalışmayı ölümünden bir yıl önce bitirdi ve bu eser, Fırtına ve Coşku döneminin eserleri ile İtalya’dan Zürich’e geldiği zaman arasında açık bir fark vardır. Bu zamanda şiirler de yazmıştır. Örnek olarak Wandrers Nachtlied birçok kişisel ifade içermektedir. Goethe kendisi hevesli bir gezgindi.</p>
      <p>Goethe, Friedrich Schiller ile arkadaşlardı ve birlikte tiyatrolar yönettiler. Goethe sayesinde Schiller tarih profesörü olmuştur. Bilinen diğer dramaları: Maria Stuart, Die Jungfrau von Orleans, Wilhelm Tell, Wallenste­in, Don Carlos… Eserleri anti-feodal eleştiriler içermektedir. Dramalarında özgürlük ve insanlıktan söz eder. Bu sebepledir ki o zamanki Almanya’nın düşünce yapısını etkilemiştir.</p>
      
      <h1>ROMANTIZM-DIE ROMANTIK</h1>
      <p>Romantizm 19. Yüzyıl boyunca sürdü. Romantizm’in idealleri bilinç dışılılık, rüyalar, doğa, esrarengizlik ve masallardır. Romantizm genellikle ”Sıla Hasreti” saiğini kullanılır ve gayesiz dolaşmaktan bahseder. Bu dönemin önemli temsilcileri E.T.A. Hoffman ve Josepf von Eichendorf’tur. Eichendorf’u ünlü romanlarından ”Aus dem Leben eines Taugenichts’te romantiklerin yaşam duygusunu örnek olarak tanıyabilirsiniz. Gayenin nedeni tüm kitabı kaplar niteliktedir.</p>
      
      <h1>REALIZM-REALISMUS</h1>
      <p>Realizm terimi Latince res kelimesinden türetilmiştir ve şey veya şey olarak çevrilebilir. Gerçekçi ol lat.: realis, gerçekçilik anlamına gelir ve bir şeyin gerçekliğe uygun olarak ya da gerçeğe yakın olarak gösterildiğini ifade eder. Yani gerçekçilik kavramı, gerçekliği yansıtan bir Temsildir. Edebi gerçekçilik, her şeyden önce, burjuva insanların yaşamlarını, yaşam koşullarını ve sınırlamalarını deneyimleme ya da onlarla başa çıkma biçimlerini olgusal ya da nesnel olarak temsil eder.</p>
      <p>Theodor Storm Realizm’in ve Natüralizm’in en önemli temsilcisidir. İlk olarak romanlar yazmıştır. Eserleri doğduğu Kuzey Almanya’nın genel görünümünü ve insanlarını pragmatize etmiştir. Oktoberlied, Die Stadt ve pastoral ruh hali resimleri ile dolu olan romanı Immensee’yi yazmıştır.Kronik eseri olan Aquis Submersus Prusya devletinin durumunu nefretle pragmatize eder.</p>
      
      <h1>DÜNYA SAVAŞI SONRASI ALMAN EDEBIYATI</h1>
      <p>Savaş sonrası Edebiyat birçok yönden bölünmüştü: yazarların bir kısmı Nazi diktatörlüğünü işlemeye, bir kısmı da bastırmaya çalışıyorlardı; iç Göç ve sürgün Edebiyatı arasında bir tartışma vardı; kısa bir süre sonra iki Alman devletinin kurulmasıyla siyasi bir ayrılık da gerçekleşti.</p>
      
      <div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 20px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFUXPMzgK0&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "edebiyat") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "EDEBİYAT";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "EDEBİYAT";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});








document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<h2>Almanya’da bulunan Hayvanlar Alemi- Das Leben der Tiere in Deutschland</h2>
      <p style="font-size: 25px;"><b><i>EVCİL HAYVANLAR</i></b></p>
      <p>Aslında sadece Almanya’ya özgü evcil hayvanlar bulmak zordur. Ancak bilinen şudur ki 2021 yılı itibarıyla Almanya ülkesinde 34,7 milyon evcil hayvan bulunmaktadır.</p>
      
      <p style="font-size: 25px;"><b><i>YABANİ HAYVANLAR-WİLDTİERE</i></b></p>
      
      <p style="font-size: 22px;">Karabatak Kuşu-Kormoran</p>
      <img loading="lazy" class="hayvankel" src="https://dillerinkulturu.files.wordpress.com/2022/12/great-cormorant-g3dd5454e8_1280.jpg?w=1024" alt="hj">
      <p>1970’lerde bile, Almanya’da bir Karabatak görmek gerçek bir Sansasyondu. İnsan, hemen hemen her şeyi yok etmiş ve yok etmiştir. Deniz Kartalı, bir balık yiyendir. Bu kara kuş, büyük nehirlere ve iç göllere yerleşmeyi sever. Burada yeterince yiyecek bulur. Şu anda Almanya’da 20.000’den fazla üreme çifti var. Bu canlılar balık konusunda Almanlar ile onlar için stresli bir yarış halinde bulunur.</p>
      
      <p style="font-size: 22px;">Kurt-Wolf</p>
      <img loading="lazy" class="hayvankel" src="https://dillerinkulturu.files.wordpress.com/2022/12/wolf-g5d28013e9_1920.jpg?w=1024" alt="hj">
      <p>1990’ların ortalarında ilk Kurt Alman topraklarında görüldü. Muhtemelen Polonya’dan gelmişti. Kısa bir süre sonra Doğu Saksonya’daki Lusatia’ya, ilk olarak iki Alman Kurt sürüsü 20 ila 25 hayvanla yerleşti. 2019 yılında Almanya’da 78 Kurt Sürüsüne ulaşması bekleniyordu.</p>
      
      <p style="font-size: 22px;">Boz Ayı-Braunbär</p>
      <img loading="lazy" class="hayvankel" src="https://dillerinkulturu.files.wordpress.com/2022/12/496e6c95-ae30-42ac-beb1-c7bc5201106e2d723127b110334faf_p1010067.jpg" alt="hj">
      <p>Boz ayı da bir zamanlar Almanya ormanlarında yaşıyordu. Ancak büyük orman alanları da yok olduğundan dolayı kendisine Almanya topraklarında rastlamak nadirdir. Romanya, İsveç, Slovakya, Hırvatistan ve Bulgaristan gibi ülkelerde hala serbest yaşayan ayılar var. Bazıları İtalya, Avusturya ve İsviçre’de de yaşıyor. Ayrıca Almanya’nın il ayısı olarak kabul edilen Ayı Bruno, Kuzey İtalya’dan Avusturya üzerinden Almanya’ya göç etti.</p>
      
      <p style="font-size: 22px;">Büyük Kuzey Geyiği-Elch</p>
      <img loading="lazy" class="hayvankel" src="https://dillerinkulturu.files.wordpress.com/2022/12/moose-gf73c79f69_1920.jpg?w=1024" alt="hj">
      <p>Bazı bölgelerde de bize yerleşebilirler, Korumacılar emindir. Geyikler iyi Yüzücülerdir ve örneğin Brandenburg’da, Mecklenburg-Batı Pomerania’da veya Bavyera Ormanı’nda bulunabileceği gibi bataklık, su bakımından zengin arazileri severler. İki metreye kadar omuz yüksekliği ile Elk etkileyici bir görünümdür. Savaş sona erdiğinden beri ormandan kaybolmuştu. Almanya’nın doğusunda çok sayıda geyik görülmüştür. Muhtemelen Polonya ya da Baltık ülkelerinden göç ettiler.</p>`;

      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "hayvan") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "HAYVANLAR";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "HAYVANLAR";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});












document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p style="font-size: 20px;">İlk sitede "TİYATRO VE SİNEMA" bölümü için kullanılan tasarım:</p>
        <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2022/12/adsiz-tasarim-3.jpg?w=1024" alt="hj">
        <h1>Almanya Tiyatroları</h1>
        <p>Alman prensleri 17. yüzyıldan 19. yüzyıla kadar muhteşem tiyatro binaları inşaa etmişlerdir. Bunlar tarihi tiyatrolardır. Bunlardan öte burjuvaziler kendilerine özel tiyatro yaptırdı. Bunlardan bazılarında hâlâ orijinal olarak özleri ve incelikleri görülebilir. Almanya’daki tarihi Tiyatro diyarı batıda Bielefeld’deki Aşağı Duvar Tiyatrosu’nda başlar ve kuzeydeki Kiel şehrinde bulunan Opera Binası’nda sona erer. Bu diyarlara yapılabilecek bir gezi, sizi Almanya’nın en güzel tiyatrolarına ve tiyatronun tarihine götürür.1</p>
        <p>Muhtemelen Alman edebiyatı, kısmen şiirinin lirik nitelikleri ve düzyazısının nüansları çeviriye meydan okuduğu için dünya edebiyatındaki hak ettiğinden daha az statüye sahiptir. Alman edebiyat tarihinin en yüce şahsiyetleri bile — dehası sadece şiir, roman ve drama yaratmakla kalmayıp aynı zamanda bilimsel çalışmaya da uzanan Goethe (Faust’un yazarı) ve şair, oyun yazarı ve edebiyat teorisyeni arkadaşı Friedrich Schiller – dış dünya tarafından tanınmaya mahkumdur almanca konuşulan bölgeler büyük ölçüde itibara göre. Aynısı, Yunan ve Latin klasiklerinden büyük ölçüde etkilenen lirik şiiri erken modern Alman yazısını canlandıran Friedrich Hölderlin de dahil olmak üzere, Alman edebiyat tarihinin tüm dönemlerinde birçok dikkate değer yazar için de geçerlidir; Hermann Broch, kimin Der Tod des Vergil (1945; Virgil’in Ölümü) derin bir bilimsel çağda ruhun çöküşü üzerine meditasyon; Fütüristik romanı Auf den Marmorklippen (1939; Mermer Kayalıklarda) Nazizmin alegorik bir eleştirisi olan Ernst Jünger; ve hatta 19. yüzyılın sonlarında sahtekarlıktan hapis cezasına çarptırıldıktan sonra art arda en çok satan batılıları yazan, belki de tüm Alman yazarların en popüleri olan Karl May bile.</p>
      
        <h1>Almanya Sineması</h1>
        <p>Sinema ya da Film, 1920’de Alman dışavurumcu sinemasının başlaması ve 1933’te kesin olarak sona ermesiyle, bu nedenle son derece üretken Alman film yapımının kısa dönemi, Weimar Cumhuriyeti zamanına neredeyse tamamen denk gelir ve bu nedenle genellikle ‘Weimar sineması’ olarak adlandırılır.‘</p>
        <p>Günümüze dönersek film konusunda dünyaya hitap eden kişilere örnek olarak; Hans Zimmer (Film Müziği Yapımcısı), Oyunculardan ise Jürgen Prochnow, Daniel Brühl, Michael Fassbender ve daha bir sürüsü…</p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "sinema") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "TİYATRO VE SİNEMA";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "TİYATRO VE SİNEMA";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});









document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p style="font-size: 25px;"><i><b>ALMANCA DEYİMLER</b></i></p>
      <p>Bütün deyimleri ne yazık ki barındırmaz.</p>
      <p><b>Mir fällt nichts ein:</b> Anlamıyorum.</p>
      <p><b>Mit Engelsgeduld:</b> Eyüp Sultan sabrıyla.</p>
      <p><b>Der Faden verlieren:</b> Delirmek.</p>
      <p><b>Alles in Butter:</b> Yerli yerinde.</p>
      <p><b>Äpfel mit Birnen vergleichen:</b> Sapla samanı ayırt etmek/Elmalarla armutlar kıyaslanamaz.</p>
      <p><b>Am seidenen Faden hängen:</b> Topun ağzında olmak.</p>
      <p><b>Der Affe laust mich:</b> Bir yaşıma daha girdim.</p>
      <p><b>Pech gehabt:</b> Kötü Talih.</p>
      <p><b>Mit Kannonen auf Spatzen schießen:</b> Kuşlara toplarla saldırmak.</p>
      <p><b>Murphy's gesetz:</b> Aksilik yasası.</p>
      <p><b>Mit allen wassern gewaschen:</b> Kitabını yazmak.</p>
      <p><b>Mir fällt ein Stein vom Herzen:</b> Yüreğime su serpildi.</p>
      <p><b>Lampenfieber:</b> Sahne heyecanı/korkusu.</p>
      <p><b>Jemanden die Leviten:</b> Birisine temiz fırça çekmek. <b><i>MUAMMA:</i></b>(kitab-ı mukkadeste Levililer bölümü konu alınmıştır??)</p>
      <p><b>Paroli bieten:</b> Efelenmek. <b>MAHİYET; TURSUN'UN NOTU:</b> Paroli; bir kumar sistemidir.</p>
      <p><b>Lunte riechen:</b> Bir bit yeniği sezmek .</p>
      <p><b>Pünktlich wie die Maurer:</b> Dakikası dakikasına (Mason gibi).</p>
      <p><b>Das ist mir Wurst:</b> Takmıyorum.</p>
      <p><b>Ich verstehe nur Bahnhof:</b> Anladıysam Arap olayım.</p>
      <p><b>Ich glaub mein Schwein:</b> Vay Vay Vay(Şaşırma).</p>
      <p><b>Mein Fehler:</b> Benim hatam.</p>
      <p><b>Fix und Fertig sein:</b> Turşusu çıkmak.</p>
      <p><b>Nach Schema F:</b> (rutin) Yasalara göre.</p>
      <p><b>Nigelnagelneu sein:</b> Yepyeni olmak.</p>
      <p><b>Wie der Schneider von Ulm sein:</b> Ulm terzisi gibi olmak.(Albrecht Berblinger)</p>
      <p><b>Wie im Schlaraffenland leben:</b> Bir eli balda bir eli yağda.(Yer: Kokanya)</p>
      <p><b>Wie Gott in Frankreich leben:</b> Lüks içinde yaşamak.</p>
      <p><b>Wolf im Schafpelz:</b> Koyun postuna bürünmüş kurt.</p>
      <p><b>Wie Kraut und Rüben:</b> Allak bullak.</p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "deyim") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "DEYİMLER";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "DEYİMLER";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});









document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p style="font-size: 28px;"><b>Bilinmesi Gereken Alman Jestleri</b></p>
      <p style="font-size: 25px;"><b><i>1-Göz Kapağını Aşağıya Çekmek</i></b></p>
      <div id="image-container">
      <img class="kalmip" loading="lazy" src="https://dillerinkulturu.files.wordpress.com/2023/01/adsiz-tasarim-1.gif?w=1024" alt="hj">
      </div>
      <p>Bu hareketi yaparken, işaret parmağını alır ve göz kapağının altına yerleştirir ve biraz aşağı çeker. Bu jest iğneleyici bir sözü işaret eder ve bir şeyin şaka olduğunu yani ciddi olmadığını söyler.</p>

      <p style="font-size: 25px;"><b><i>2-Zafer İşareti-Victory-Zeichen</i></b></p>
      <div id="image-container">
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/adsiz-tasarim-1.png?w=1024" alt="hj">
      </div>
      <p>Bu işaret uluslararası olarak farklı anlamlara sahiptir, ancak çoğu durumda bu işaret “barış” veya “Zafer” anlamına gelir. Almanya’da da popüler bir jest, ancak İngiltere, Malta ve Avustralya’da bu jest farklı bir şey ifade edebilir. İki parmağını elinin arkasıyla dışa doğru çeviren kişi, karşısındakinin kaybolması gerektiğini işaret eder ve kesin bir reddedilmeyi sembolize eder. Bu işaret orta parmak ile olursa kişi daha saldırgan olabilir.</p>


      <p style="font-size: 25px;"><b><i>3-Beni Ahmak Yerine Koyuyorsun!-Du willst mich voll für dumm verkaufen!</i></b></p>
      <div id="image-container">
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/02/duwillstmirblabla7-1.gif?w=1024" alt="hj">
      </div>
      <p>Bu Jestte, konuşmacı düz elini yüzünün önünde sallar ve ön cam sileceği gibi hareket ettirir.</p>
      
      <p style="font-size: 25px;"><b><i>4-Başparmak Yukarı-Daumen hoch</i></b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/adsiz-tasarim-2.png?w=1024" alt="hj">
      <p>Çoğu ülkede, yukarı doğru uzatılmış bir başparmak, her şeyin harika olduğu anlamına gelir. Ancak bazı ülkelerde müstehcen bir hakaret olabilir. Avustralya’da, Afrika ve Asya’nın bazı bölgelerinde Başparmaklarını yukarı doğru hareket ettirenler cinsel bir davette bulunurlar.</p>
      
      <p style="font-size: 25px;"><b><i>5-Lippen spitzen-Dudak İpuçları</i></b></p>
      <div id="image-container">
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/hjjj.jpg" alt="hj">
      </div>
      <p>Bu durumda dudaklar yontulur ve asık bir surat şekillenir. Bu, tipik bir Alman hareketi gibi görünür, bu da bir konu hakkında hâlâ düşünüldüğünü veya düşünülmesi gerektiğini gösteriyor.</p>
      
      <p style="font-size: 25px;"><b><i>6-Das Ringzeichen-Halka Hareketi</i></b></p>
      <div id="image-container">
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/adsiz-tasarim-3.png?w=1024" alt="hj">
      </div>
      <p>Başparmağını ve işaret parmağını bir halka haline getiren kişi, ayrıca bir dalgıç her şeyin yolunda olduğunu söylemek ister. Günlük yaşamda bile, birçok insan bunu özellikle ABD ve Kuzey Avrupa’da tamam işareti olarak kullanır. Ancak, Belçika ve Tunus’ta “sıfır”, Japonya’da “para”, Fransa’da “lezzetli”, İtalya’da “ne demek istiyorsun?”, Güney Amerika’da mükemmelliği temsil ediyor. Bununla birlikte, diğer birçok ülkede dikkatli olunmalıdır, çünkü burada hakaret olarak görülebilir.</p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "beden") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "BEDEN DİLİ";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "BEDEN DİLİ";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});








document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p style="font-size: 24px;">Almanca Dilindeki Kullanılmış Yazı Türleri</p>
      <p style="font-size: 22px" style="font-size: 22px"><b>Karolenjler’in Küçük Harfli Yazısı-Karolingische Minuskel</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/rrrrr.jpg" alt="hj">
      <p>Birçok yazılı özel gelişime neden olan Antik Çağ ve halkların göçünden sonra, Karolenj(karolingische) Dönemi’nde (yaklaşık 800 yılları) ortak yazıların birleştirilmesi ve birleştirilmesi gerçekleşti. ”Karolingische Minuskel” , hem Gotik hem de bugünkü Latin yazının dayandığı yeni birleşik yazı tipi haline gelmişti.</p>
      <p>Karolingischen Minuskel’in önemli bir özelliği yuvarlaklıklarıdır. 12.yüzyılda, Gotik Yazıya geçişle birlikte, yazı dili önemli bir değişiklik geçirdi. Bu değişiklik ise harflerde bulunan kıvrımların kırılmasıdır.</p>
      
      <p style="font-size: 22px"><b>Gotik Yazı-Gotische Schrift-Fraktur(Kırık)</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/www.jpg" alt="hj">
      <p>13. yüzyılın ortalarında bir kitap yazısı olarak Gotik Yazı aynı zamanda artan yazımın bir ifadesi olarak Gotik italik kullanım ve anlaşma ya da çeşitli işler için kullanılan bir yazı dili olarak gelişti.</p>
      <p>Artan ekonomik ve idari ihtiyaçlar, 20. yüzyıla kadar ticari ve bireysel yazı tiplerini belirleyecek bir hukuk firması ve kurs yazısı olarak (sürekli gelişirken) yeni Gotik İtalik’i ortaya çıkardı. Bu yazının sonlarına doğru ise sizi tanıdık bir isim karşılıyor; 1934 yılında Reich Partisi Kongresi’nde “Gotik yazı” ya karşı çıkmasıyla yazı ve yazı tarihi hakkındaki bilgisizliğini ve Alman yazısına karşı muhalefetini ortaya koyan Adolf Hitler‘in kendisi de bu yazının karşısında duruyordu.</p>
      
      <p style="font-size: 22px"><b>Latince Yazı-Lateinische Schrift</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/kkkkkkk.jpg" alt="hj">
      <p>15. yüzyılda, Fraktur’a karşı bir hareket ortaya çıktı. Çünkü bu yazı çoğunlukla Hümanistler tarafından reddedilmesine rağmen Martin Luther gibi hümanist olmayan kişilerce de reddedilmiştir. Eski bir yazı olarak görülen yuvarlak ”Karolingische Minuskel”, bazı gelişmelerle yeniden canlandırılmaya çalışıldı. Gotik kitap yazımı gibi, Antikalar için de bir kullanım yazısı geliştirdi. Bu geliştirilen yazı günümüz Latince El yazmasının dayandığı Hümanist yazıdır.</p>
      <p>Özellikle kitap baskısında 20. yüzyıla kadar Gotik ve Latin yazı tipleri yan yana var olmuş, ancak Almanca konuşulan ülkelerde yazı tipi olarak Kurrentschrift hakim olmuştur.</p>
      
      <p style="font-size: 22px"><b>Buchdruck Schrift-Matbaacılık Yazısı</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/csm_schrift6_7b14501dda.jpg" alt="hj">
      <p>15. Yüzyılda ortaya çıkan kitap baskısı, kitap yazısı için kullanılan el yazısının yerini aldı ve el yazmaları o zamandan beri öncelikle hukuk bürolarında, ofislerde ve bireysel yazışmalarda sürdürülüyordu. Ancak yeni oluşturulan basılı yazılar da kırık, Gotik yazıya dayanıyordu: Almanya’da saf bir basılı yazı olarak tasarlanan ilk yazı ”Schwabacher” yazısıdır.</p>
      
      <p style="font-size: 22px"><b>Kurrentschrift</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/jjjjj.jpg" alt="hj">
      <p>Bu yazı tarihi gelişmelerine dayanarak, 16. yüzyıldan itibaren üç yazı türü ayırt edilir: Kitap/basılı yazı olarak Fraktur, ofisler ve Hukuk Büroları için el yazısı olarak hukuk bürosu ve özel kullanım için ikinci el yazısı olarak Kurrent, günlük kullanımda sınırlamalar akıcıydı, bu da özellikle Kurrentschrift’in incelenmesini zorlaştırıyordu.</p>
      
      <p style="font-size: 22px"><b>Sütterlin-Schrift</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/sssss.jpg" alt="hj">
      <p>Kurrentschrift’in son standardizasyonu, 20. yüzyılın başında, 1865-1917 yılları arasında, 1930’dan itibaren Almanca konuşulan ülkelerin çoğunda okul derslerinde standartlaştırılmış bir el yazması için kullanılan grafik sanatçısı Louis Sutterlin tarafından gerçekleştirildi. Günümüzde Almanya Saarland Üniversitesinde hâlâ öğretilmektedir.</p>
      
      <h1><b>Kurrentschrift’in Kaldırılması</b></h1>
      <p>Nasyonal sosyalist iktidarın ele geçirilmesinden sonra, Antikacı ya da Latince yazı “Aryan olmayan” olarak kabul edildi ve bu nedenle yasaklanmaya kadar yol aldı. Parti ve Devlet” Alman ” yazısını teşvik etmeye çalıştı. Örneğin, Yahudi halkı, 1941’de Nasyonal sosyalist yönetimde şaşırtıcı bir dönüş yapana kadar yayın ve baskı yapmaktan men edildi.</p>
      <p>Nasyonal Sosyalist Alman İşçi Partisi, sözde “Alman” yazısının yani gotk yazının aslında bir Alman yazısı olmadığına, ancak matbaanın ortaya çıkmasıyla Yahudi Matbaacılar tarafından tanıtıldığına karar verdi. Bormann’ın imzaladığı 3 Ocak 1941 tarihli bir Genelgede,” Aryan olmayan ” Latince yazı tüm yazı ve öğretimde standart yazı olarak ilan edildi ve şu bildirge verildi;</p>
      <p>“Sözde Gotik yazıyı bir Alman yazısı olarak görmek ve adlandırmak yanlıştır. Aslında, sözde Gotik yazı “Schwabacher” Yahudilerine aittir. Tıpkı daha sonra gazetelerin eline geçtikleri gibi, Almanya’da yaşayan Yahudiler de Matbaaların başına geçtiler ve böylece Almanya’da Yahudi tırmanıcılarının güçlü bir şekilde ortaya çıkmasına neden oldular.”    (KAYNAK: Karl Gladt, Deutsche Schriftfibel. Anleitung zur Lektüre der Kurrentschrift des 17.-20. Jahrhunderts, Graz 1974, 8.)</p>`;
      
      
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "yazıdil") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "Almanca Dilindeki Kullanılmış Yazı Türleri";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "Almanca Dilindeki Kullanılmış Yazı Türleri";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});










document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p style="font-size: 25px;"><i><b>ALMANCA ATASÖZLERİ</b></i></p>

<p>Bu bölümün tek mahiyeti Türkçe bilen insanların Almanca atasözlerini anlamasına yönelik bir basamak oluşturmaktr. Bunun yolu elbet kelimelerin özgün anlamlarını araştırarak olabilir. Fakat bu sözlerin bireyin kendi külütüründe hangi söze tekabul ettiğini belirtmenin, anlamaya yönelik bir basamak oluşturabileceği bu çalışmada zannedilmiştir. Ve elbette, bütün Almanca atasözleri ne yazık ki burada belirtilmemiştir. Tüm bu vaziyet, deyimler için de geçerlidir.</p>

<p><b>Hochmut kommt vor dem Fall:</b> Kibir düşüşten evvel gerçekleşir.</p>

<p><b>Es ist nicht alles Gold, was glänzt.</b> Parlayan her şey altın değildir.</p>

<p><b>Der Äpfel fällt nicht weit vom Stamm:</b> Armut dibine düşermiş.</p>

<p><b>Ausnahmen bestätigen die Regel:</b> İstisnalar kaideyi bozmaz.</p>

<p><b>Aller Anfang ist schwer:</b> Bütün başlangıçlar güçtür.</p>

<p><b>Morgenstund hat Gold im Mund:</b> Erkenci kuş solucanı yakalar.</p>

<p><b>Wer rastet, der rostet:</b> Yuvarlanan taş yosun tutmaz.</p>

<p><b>Wo gehobelt wird, da fallen Späne:</b> Gülü seven dikenine katlanır.</p>

<p><b>Kindermund tut Wahrheit kund:</b> Çocuktan al haberi.</p>

<p><b>Der Ton mach die Musik:</b> Ses tonu güdüdür.</p>

<p><b>Was Hänschen nicht lernt, lernt Hans nimmermehr:</b> İhtiyar köpeğe yeni hüner öğretilemez.</p>

<p><b>Der Fisch stinkt vom Kopf her:</b> Balık basştan kokar.</p>

<p><b>was du Heute kannst besorgen, das verschiebe nicht auf Morgen:</b> Bugünün işini yarına bırakma.</p>

<p><b>Viele Köche verderben den Brei:</b> Birden fazla el yemeği bozar.</p>

<p><b>Wenn zwei sich streiten, freutscih der Dritte:</b> İkisi kavga ediyorsa, üçüncü bayram eder.</p>

<p><b>Reden ist Silber, Schweigen ist Gold.:</b> Söz gümüşse sükut altındır.</p>

<p><b>Kleider machen Leute:</b> Kıyafetler insanı baştan yapar.</p>

<p><b>Wer anderen eine Grube gräbt, fällt selbst hinein:</b> Zarar veren zarar alır.</p>

<p><b>Lieber dne Spatz in der Hand als die Tuabe auf dem Dach:</b> Eldeki bir kuş çalılıkta iki eder.</p>

<p><b>Alle Wege führ nach Rom:</b> Bütün yollar romaya çıkar.</p>

<p><b>Man soll den Tag nicht vor dem Abend loben:</b> Dereyi görmeden paçaları sıvamak.</p>

<p><b>Einem geschenkten Gaul schaut man nicht ins Maul:</b> Beleş atın dişine bakılmaz.</p>

<p><b>Eine Hand wäscht die andere:</b> Bir el diğerini yıkar.</p>

<p><b>Kleinvieh macht auch Mist:</b> Damlaya damlaya göl olur.</p>

<p><b>Wer im Glashaus sitzt, sollte nicht mit Steinen werfen:</b> Dinime küfreden bari müslüman olsa.<b>İZAH</b>(Asıl nosyon emin olmaktır: Bu herhangi işte veya konuda bilgi sahibi olmak olabilir.)</p>

<p><b>Die Katze lässt das Mausen nicht:</b> Can çıkar huy çıkmaz.</p>

<p><b>Wer zuerst kommt, mahlt zuerst:</b> Erken kalkan yol alır.</p>

<p><b>Andere länder,andere Sitten:</b> Farklı ülkeler, farklı kültürler.</p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "soz") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "ALMANCA ATASÖZLERİ";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "Almanya ve Avrupa İklimi – Das Klima in Deutschland-Europa";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});



document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<h2>Almanya Ülkesinde Spor</h2>
<p>Taban sporu için destek esas olarak belediyelerden ve eyaletlerden geliyor. Almanya’da spor yaklaşık 91.000 jimnastik ve spor kulübü tarafından organize edilmektedir. Yaklaşık 24 milyon üyesi için spor, sağlıklı bir yaşam tarzını teşvik eder, topluluk oluşturur ve bağlılık, güvenilirlik, takım ruhu, adil oyun ve hoşgörü gibi değerleri aktarır.

Allensbach pazar ve reklam ortamı analizine göre, Futbol 2022 yılında Almanya’da en popüler spordur: ankete katılan Almanların yaklaşık yüzde 30’u özellikle futbola ilgi duyduğunu söyledi. Bu arada, yaklaşık yüzde 13’ü kayakla atlama sporuna özel ilgi gösterirken, yaklaşık yüzde 12’si özellikle Biatlon’a ilgi duyuyordu. Televizyonda spor yayınlarını veya spor programlarını izlemeyi seven insan sayısı 17,57 milyon civarında</p>
      
     <h2>Alman Spor Geçmişi</h2>
<p>1780-1815 yılları arasında idealist bir insan imajı ve yeni bir eğitim ideali ortaya çıktı. Burada spor ve özellikle Jimnastik önemli bir rol oynamaktadır. 1785 yılından itibaren Johann Friedrich Gutsmuth, Schnepfenthal Eğitim kurumunda pedagojik Jimnastik ve böylece ilk planlı okul Beden eğitimini geliştirdi. Alman Jimnastik hareketinin Başlatıcısı olarak kabul edilen Jimnastiğin babası “Jahn” olarak da bilinen Friedrich Ludwig Jahn, 1808’de bu hareketi doğrudan kaynakta inceledi. 1809’dan itibaren Jahn, Grau Manastırı’nda öğretmen olarak çalıştı. Orada öğrencilerini fiziksel egzersizlere, oyunlara ve açık hava hareketlerine tanıtmaya başlar.

Nazi partisinde, Alman işçi cephesinde, SA’DA, SS’DE ve Hitler Gençliği’nde spor kısmen zorunlu olarak uygulanmaktadır. Bu, ilk başta kulüplerdeki sayıların keskin bir şekilde düşmesine neden oldu. Avusturya ve Sudetenland’ın(Çekya) ilhak edilmesi nedeniyle, rakamlar kısmen tekrar keskin bir şekilde artmaktadır. 1939’dan itibaren savaş sonunda erkek üyelerin kaybına yol açtı. Birinci Dünya Savaşı’nda olduğu gibi, kadın Sporları da yeniden canlanıyor. 1938-1939 yılları arasında örgütler NSDAP’A bağımlı Parti hücreleri haline gelir ve bağımsızlıklarını kaybeder.

Savaşın sona ermesinden sonra, ilk olarak örgütlerin NSDAP’IN Parti hücreleri olarak Yasaklanması ve görevlilerin Denazifikasyonu söz konusudur. Bu nedenle, kulüplerin yeniden kurulması öncelikle bölgesel olarak gerçekleşir. Savaş sırasında ve Harabelerde yıllarca süren sıkıntılardan sonra, Aralık 1950’de Alman spor Federasyonu’nun (DSB) kurulması, yeni bir başlangıcın umut verici işaretlerinden biridir. Federal Almanya Cumhuriyeti’nin tüm spor ve spor kulüplerine aittir. Bu, Turner Birliği kampındaki uzun süren en şiddetli çatışmalardan sonra barışın geri dönmesine ve Alman Turnerbund’un büyük bir yükseliş yaşamasına neden oluyor. 1957 yılında Alman Jimnastik ve spor Federasyonu (DTSB) kuruldu.

Alman nüfusu içinde aşırı kilonun artması nedeniyle, Alman spor Federasyonu (DSB) 1970 yılında “Trimm Dich – Durch Sport”adlı hastalık önleme kampanyasını başlattı. Yirmi yıldan fazla bir süredir Slogan, daha fazla hareket etmek için talep ve teşviktir. 90’lı yıllardan bu yana, spor konusu çocuk, kadın, yaşlı, Göç ve Kapsayıcılık Teşviki bağlamında da büyük önem taşımaktadır. Bu nedenle, spor kulüplerinde farklı ilgi grupları için çok yönlü bir teklif var.</p>
      
     <h2>KAYNAKLAR</h2>

     <p style="text-decoration: overline;"><a onclick="location.href='https://de.statista.com/statistik/daten/studie/171072/umfrage/sportarten-fuer-die-besonderes-interesse-besteht/'">1-KAYNAK</a></p>

     <p style="text-decoration: overline;"><a onclick="location.href='https://www.bmi.bund.de/DE/themen/sport/sport-node.html'">2-KAYNAK</a></p>

     <p style="text-decoration: overline;"><a onclick="location.href='https://www.freisport.de/geschichte-breitensport-deutschland/'">3-KAYNAK</a></p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "spor") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "SPOR";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "SPOR";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});




document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p><b>ALMANYA ÜLKESİNDE KUTLANAN RESMÎ GÜNLER</b></p>

<p>Almanya Federal Devleti eyaletler ile yönetildiğinden ve resmî günler eyaletlere göre farklılık gösterdiği için bu bölüm eyaletlere göre ayrılmıştır.</p>

<p><b>Epifani Yortusu - Heilige Drei Könige:</b> Baden, Württemberg, Bavyera, Saksonya Anhalt kutlar.</p>

<p><b>Kutsal Cuma - Karfreitag:</b> Bütün eyaletler kutlar.</p>

<p><b>Paskalya Pazarı - Ostersonntag:</b> Brandenburg kutlar.</p>

<p><b>Paskalya Pazartesisi - Ostermontag:</b> Bütün eyaletler kutlar.</p>

<p><b>Yükseliş Günü - Christi Himmelfahrt:</b> Bütün eyaletler kutlar.</p>

<p><b>Hamsin Yortusu - Pfingstsonntag:</b> Brandenburg kutlar.</p>

<p><b>Hamsin Pazartesisi - Pfingstmontag:</b> Bütün eyaletle kutlar.</p>

<p><b>Katolik Yortusu - Fronleichnam oder Corpus Christi:</b> Baden Württemberg, Bavyera, Hessen, Kuzey Ren Vestfalya, Renanya Palatina, Saarland, Saksonya, Thüringen kutlar.</p>

<p><b>Meryem’in Göğe Çıkışı - Mariä Himmelfahrt:</b> Bavyera ve Saaland kutlar.</p>

<p><b>Alman Birliği Günü-Tag der deutschen Einheit:</b> Bütün eyaletler kutlar.</p>

<p><b>Reformasyon Günü - Reformationstag:</b> Brandenburg, Hamburg, Aşağı Saksonya, Mecklenburg Vorpommern, Saksonya, Saksonya Anhalt, Thüringen, Schleswig Holstein kutlar.</p>

<p><b>Azizler Günü - Allerheiligen:</b> Brandenburg, Hamburg, Aşağı Saksonya, Mecklenburg Vorpommern, Saksonya, Saksonya Anhalt, Thüringen, Schleswig Holstein kutlar.</p>

<p><b>Dua ve Tövbe Günü - Buß und Bettag:</b> Saksonya eyaleti  kutlar.</p>

<p><b>Noel Günü - Erster Weihnachtstag:</b> Bütün eyaletler kutlar.</p>

<p><b>Noel Ertesi Günü - Zweiter Weihnachtstag:</b> Bütün eyaletler kutlar.</p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "gun") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "GÜN";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "GÜN";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});




document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p>Kondrad Adenauer Stıftung(KAS)’a göre Alman toplumu gün geçtikçe çeşitli bir hâl alıyor. Almanya’nın birleşmesiyle ile birlikte 40 yıl boyunca bölünmüş bu ülke 1989 yılından bu yana daha da birleşti. Avrupa Entegrasyonu, gelişen dijitalleşme ve Enerji Geçişi dönemi Almanya’nın çalışma ve yaşam dünyasını kalıcı olarak değiştirdi. Göçmenler Almanlaşıyor, dinî çeşitlilik ve aile yapılarının sayısı artıyor. Aynı zamanda şehir-ülke ve genç-yaşlı ilişkileri de değişiyor1.</p>
      <p>Dinî cemaatlerdeki üye sayısına bakılırsa Almanya, ağırlıklı olarak Hristiyan bir ülkedir. 2020 yılında Roma Katolik Kilisesi’nin üye sayısı yaklaşık 21,6 milyon iken bir başka 19,7 milyon kişi Protestan Kilisesi’ne aittir. Almanya’da temsil edilen bir başka din ise İslam’dır. Almanya Federal Göç ve Mülteciler Dairesi, ülkelerinde yaşayan 5,5 milyon Müslüman olduğunu tahmin ediyor. Almanya’daki Yahudi Cemaatlerinin 2021 yılındaki üye sayısı 92.000 civarındadır. Yahudilik küresel olarak bir dünya dini olmasına rağmen Budizm ya da Hinduizm gibi dinlerin toplulukları Almanya’da azınlıklardır.2</p>
      <p><b>Bu sayfada kullanılan kaynaklar:</b></p>
      <p style="text-decoration: overline;"><a onclick="location.href='https://www.kas.de/tr/gesellschaft-und-religion'">(1-KAYNAK)</a></p>
      <p style="text-decoration: overline;"><a onclick="location.href='https://de.statista.com/themen/125/religion/#topicOverview'">(2-KAYNAK)</a></p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "din") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "DİN";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "DİN";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});



document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `
    <h2>ALMANYA İKLİMİ</h2>
<p>Almanya'da ölçülü bir iklim hakimdir. Kendi ikliminin oluşmasında Batı Avrupa Deniz İklimi ve Doğu Avrupa karasal iklimi etkilidir. Kuzey Alman ovalarında ve Kuzey Baltık Denizi'nde yaz mevsimi hoş bir sıcaklığa sahiptir ve kışlar fazlasıyla soğuk değildir. Ayrıca güneyde ve doğuda mevsimler arası sıcaklık farklılıkları bazen çok daha büyüktür. Haziran ve Eylül ayları arasında Almanya'da aylık ortalama sıcaklıklar 21 ila 25 arasında gerçekleşir. Ocak ayında dip sıcaklıklar ölçülür. Genellikle yağmurlu günlere, kış mevsiminde rastlanır ancak en başta yaz mevsiminde de dağlarda sık sık yağmur yağabilir.

  <p style="font-size: 22px;"><b>KAYNAK</b></p>

  <p style="text-decoration: overline;"><a onclick="location.href='https://www.wetterkontor.de/de/klima/klima-land.asp?land=DE'">Wetter Kontor:</a></p>
    
  <h2>AVRUPA İKLİMİ</h2>

<p>Avrupa,  ağırlıklı olarak sıcak ve ılıman bir iklim bölgesinde yer almaktadır. Deniz İklimi etkisi batıdan doğuya doğru azalır ve doğuya doğru karasal iklim giderek artar. Yani bir ülke,  Atlantik'e(Batıda) ne kadar yakın olursa denizin etkisi de bir o kadar güçlü olur. Su kütleleri  sonbahar ve kış aylarında karadan daha yavaş soğur  bundan dolayıdır ki hava sıcaklığında yüksek düşüş görülmez. Diğer taraftan deniz, ilkbahar ve yaz aylarında yavaş yavaş ısınır ancak kara kütleleri çok daha hızlı ısınır. Bu sebeple bu mevsimlerde hava sıcaklığı, kıtadan çok daha düşüktür. Batı Avrupa'nın çoğunda kış ayları yumuşak, yaz ayları ise nispeten serindir. Denizden daha uzak olan bölgelerde sıcaklık farklılıkları daha kuvvetlidir. Doğu Avrupa'da ise iklim, denize olan uzaklığı nedeniyle genellikle kıtasal tiptedir. Doğu Avrupa'nın karaları ilkbahar ve yaz aylarında hızlı bir şekilde ısınır ve aynı şekilde sonbahar ve kış aylarında yine hızlı bir şekilde soğur. Bu sebeple yaz ve kış arasındaki sıcaklık farklılıkları çök büyüktür. Doğu-Orta Avrupa'da yağışlar nispeten düşüktür, yeniden belirtilir ki denizin bu bölgeler üzerindeki etkisi çok düşüktür.</p>

<p>Avrupa'daki iklim, aynı şekilde Dünya yüzeyinin kuzeyden güneye artan ısınmasıyla da belirlenir. Bu nedenle Akdeniz Bölgesin'de (Subtropikal Etki) yaz aylarında genellikle eşit derecede sıcaktır ve kış ayları yumuşak ve yağışlıdır. Güneşin güneye doğru ilerlemesi sebebiyle sonbahar ve kış aylarında Akdeniz Bölgesi, batı rüzgarlarının(Ilıman Bölge) etki alanına girer ve kış vakti hemen hemen bütün yıllık yağışlar orada gerçekleşir.</p>

<p>Orta Avrupa'da (Yani Almanya'da) ne deniz iklimi ne de kara iklimi hâkimdir. Ancak ikinci sayfada da belirtildiği gibi etkilidir. Mevsime bağlı olarak burada çeşitli etkiler meydana gelebilir. Kuzey Avrupa'da kutupsal ve kutup aşağı bir iklim vardır. Yaz mevsimi serin ve nemli ve kışlar soğuk ve karlıdır.</p>

<p style="font-size: 22px;"><b>KAYNAK</b></p>

<p>https://www.europakarte.org/klima/</p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "iklim") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "Almanya ve Avrupa İklimi – Das Klima in Deutschland-Europa";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "Almanya ve Avrupa İklimi – Das Klima in Deutschland-Europa";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});



document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `
    <p>Alman Federal Hükümeti’ne göre birçok ziyaretçi Almanya’yı kozmopolit, kültürel açıdan farklı ve yaşamaya değer bir ülke olarak görüyor ve bu sadece 2006 Futbol Dünya Kupası gibi etkinliklerde değil. O zamanlar Futbol etkinliğinin resmi sloganı “Arkadaş Olma Zamanı” idi ve daveti kabul edenler, Avrupa Birliği’nin en kalabalık ülkesindeki insanların yaşam sevinci, nezaketi ve merakına şaşırdılar. Almanların sadece ekonomik başarıya değil, aynı zamanda aileye, arkadaşlara ve boş zamanlara da odaklandığını görebildiler. Ama aynı zamanda, yaşlı ve genç insanların çoğunun nasyonal sosyalist geçmişi ve 1990’da yeniden birleşmeye kadar Almanya’nın bölünmesiyle yoğun bir şekilde ilgilendiğini de gördüler ve bu geçmişle başa çıkmanın sonucu, canlı bir Hafıza Kültürü ve Dayanışma ve çeşitliliğe saygı gibi temel değerlerin derin bir şekilde sabitlenmesini sağlamıştır.</p>
    <p>Almanya’nın uzun zamandan beri bir göçmen ülkesi olması şaşırtıcı değil. Ülkede yaşanan çeşitlilik, bazı insanları şaşırtacak rakamlarla anlatılıyor. Almanya’daki toplam 82,87 milyon insanın 10,96 milyonu yabancı bir pasaporta sahip – 28 AB ülkesinin (2022 itibarı ile 27 ülke) hiçbirinde olmadığı kadar. Bu arada Alman vatandaşlığına sahip olan ancak Almanya’da doğmamış veya göçmen ebeveynlerden gelen kadın ve erkekleri de eklerseniz, Almanya’da 20 milyondan fazla insanın göçmen kökenli bir geçmişi vardır. Bu, nüfusun yaklaşık beşte birinin yabancı kökenli olduğu anlamına gelir.</p>
    <p>Almanya’ya, 1960 sonrası farklı ülkelerden farklı kültürel birikime sahip işçilerin göç
etmesi sonucunda Almanya’da çok kültürlü bir toplum meydana gelmiştir.

Bu sayfada kullanılan kaynaklar:

(1-) https://www.make-it-in-germany.com/de/leben-in-deutschland/deutschland-kennenlernen/deutsche-gesellschaft</p>
    <!-- Add more content as needed -->
  `;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "toplum") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "ALMANYA TOPLUMU";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "ALMANYA TOPLUMU";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});






document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p><b>ALMANCA'NIN KÜLTÜREL PAYESİ</b></p>
      <p>Öncelikle dil, resmi olarak veya dilsel işaretlerin yapısal bir sistemi olarak kabul edilmez. Bunun yerine, sosyal amaçlar ve kültürel bağlamlarda kullanılan bir iletişim aracı olarak anlaşılmaktadır. Bu nedenle odak noktası, dil kullanımının çeşitli ortamlarında, geleneksel ve bireysel davranış kalıplarına, sosyal normlara ve söylem topluluklarının kültürel değerlerine nasıl yansıdığıdır. Bir çevirinin arkasında genellikle A’dan B’ye basit bir aktarımdan daha fazlası vardır. Bir kelime bile hiçbir zaman başka bir dile tam olarak eşdeğer bir şekilde aktarılamaz, çünkü kültürel etkiler nedeniyle bile bilinen bir kelimenin anlamı değişebilir. Bu nedenle, dil süreçlerine Danışmanlık yaparken ve dil verilerinin toplu tedavisinde bu yönleri dikkate almak daha önemlidir.</p>
      <p>Johannes Ebert, Almanca dili için şunları söylemektedir; “Küreselleşme, giderek daha fazla dilin yok olmasına neden oluyor. Bu bir gün Almanca için de geçerli olacak, çünkü Avrupa’da sadece İngilizce iletişim kurulacak mı? Hiç sanmıyorum. Almanca, Avrupa’nın en çok konuşulan ana dilidir ve canlı bir şekilde gelişmeye devam etmektedir.”</p>
      <p>Bir dili gerçekten tanımlayan şey, genellikle kendi dilinden çok farklı olan kültür çevrelerinde ortaya çıkar. Bu durumda örnek olabilecek Japonya ülkesi vardır. İlk göze çarpan dilsel özelliklerden biri, yay ya da neredeyse melodik konuşma ritmi değil, herhangi bir Japonca konuşmada eksik olmaması gereken sürekli, doğrulayıcı “mh” idi! Almanca’da ise ” ja…mh….mh…ja…”, Japonca’da ihmal etmek anlamına gelir: seni dinlemiyorum!</p>
      <p>Almanca dili için en kritik etki ve öneme sahip olan Almanya federal hükümeti, resmî sitesinde bizzat şunlar yazılmıştır; “Alman dilinin öğretilmesi ve bakımı Federal Hükümet için büyük önem taşımaktadır. Federal Hükümet, kültürel, araştırma ve dış politika çerçevesinde, genel devlet önemine sahip kurumları ve projeleri teşvik etmekte ve böylece Alman dilini kültürel bir varlık olarak sürdürmeyi ve korumayı ve sürekli değişim ve gelişme sürecine eleştirel bir şekilde eşlik etmeyi hedeflemektedir. Bununla birlikte, anayasal olarak belirlenmiş görev bölünmesine göre, Almanca dil düzenlemelerinin sorumluluğu öncelikle eyaletlere aittir. Federal hükümetin temel yasaya göre – Federasyonun Hukuk ve İdari dili gibi Alt alanlar dışında – yasama yetkisi yoktur.“</p>
      
      <p style="font-size: 20px;"><b>Bu Sayfada Kullanılan Kaynaklar</b></p>

      <p style="text-decoration: overline;"><a onclick="location.href='https://www.bundesregierung.de/breg-de/bundesregierung/bundeskanzleramt/staatsministerin-fuer-kultur-und-medien/kultur/deutsche-sprache-1891474'">Almanya Federal Hükümeti Resmî Sitesi:</a></p> 

      <p style="text-decoration: overline;"><a onclick="location.href='https://www.goethe.de/de/uun/prs/int/gen/20490256.html'">Johannes Ebert; Die Globalisierung führt dazu, dass immer mehr Sprachen aussterben. Gilt das eines Tages auch für Deutsch, weil in Europa nur noch auf Englisch kommuniziert wird?</a></p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "kulturdil") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "KÜLTÜREL DİL";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "KÜLTÜREL DİL";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});








document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p><b>GERMENLER VE ORTA ÇAĞ ALMANYA'SI TARİHİ</b></p>
      <p><b>Germenler-Germanien</b></p>
      <div id="image-container">
        <img class="kalmip" loading="lazy" src="https://www.planet-wissen.de/kultur/voelker/germanen/germanenstaemmeakggjpg100~_v-gseapremiumxl.jpg" alt="hjj">
      </div>
      <p>“Germanien” terimi, birkaç tarih öncesine dayanıyor ve Yunanca “Germanoi”den gelmektedir. Ancak kesin kökenleri bilinmemektedir. Bununla birlikte, kavramın kökeninin Kelt dillerine dayandığı ve ”Schreienden”(göze batanlar) yani ya da ”Nachbarn”(komşular) kelimelerinden türetildiği varsayılmaktadır. Roma İmparatorluğu döneminde bu terim, iki Roma Vilayetini ifade ediyordu: biri “Germania superior”, diğeri ise “Germania inferior”. Bu, Ren Nehri’nin sol tarafında Roma tarafından işgal edilen bölgelere işaret ediyordu. O zamanki Alman toprakları “Germania magna “veya” Germania libera ” olarak adlandırılmıştır. Daha sonra, yaklaşık 9. yüzyılda, Frenk İmparatorluğu bölündüğünde, Germania çoğunlukla Doğu kısmı veya Kutsal Roma İmparatorluğu’nun Alman kısmı için kullanıldı. Bu nedenle, Germenlerin, yani eski Alman tarihi, daha çok topraklarla sınırlıdır, daha az katı bir Halk ya da tek bir katı kültür ile sınırlıdır.</p>
      <p><b>Orta Çağ Almanyası-Deutschland und das Mittelalter-(Wege aus der Finsternis)</b></p>
      <p>Burada Orta Çağ zamanı, 800 ve 1500’lü yıllar olarak kapsama alınmıştır. Orta Çağ’ın başlarında önemli bir olay, Karolenj Fransa’nın dağılmasıydı. Ardından batı ve doğu Fransa’ya bölündü. Daha sonra bu iki taraftan Fransa ve Almanya oluşacaktı. Doğu Fransa’da bağımsız bir Alman kimliği henüz mevcut değildi, ama Eski Yüksek Alman Dili, birleştirici bir karaktere sahip bir dil olarak gelişti. Politik olarak, Liudolfinger Hanedanı 10. yüzyılda Ostfranken(Doğu Frankonya)’da güç kazandı ve Roma İmparatoru oldu. Böylece, daha sonra Kutsal Roma İmparatorluğu olarak bilinen Roma-Alman İmparatorluğu kuruldu. Ortaçağda Roma-Alman İmparatorluğu’nun var olmasına rağmen bu henüz birleşik bir Almanya olarak kabul edilemez. Güç, birçok toprak sahibi arasında daha fazla dağıldı, bu da bugün Alman Federalizminde hala görülebilir. Farklı Prenslikler arasında da birçok çatışma vardı, bu yüzden sürekli bir birlik yoktu.</p>
      <p><b>ORTA CAGDAN NAZI ALMANYASINA KADAR TARIH</b></p>
      <p>1500-1558: Charles V: Kutsal Roma İmparatorluğu'nun son güçlü İmparatoru; Luther ve Reformasyona karşı savaştı. Almanya onun için sadece Burgonya/ İspanyol İmparatorluğunun bir yan Ülkesiydi.</p>
      <p>1517: Martin Luther (1483-1546) 95 Thesen gegen den Ablass [= günahkarların Araf'taki zamanını kısaltmak için kilise tarafından satılan (genellikle yozlaşmış) hoşgörüler].</p>
      <p>1534: Luther, İncil'in Almanca'ya çevirisini bitirir.</p>
      <p>1555: Augsburg Dini barışı: V. Charles Protestanlığa karşı mücadeleyi kaybeder ve Alman prenslerinin kendi toprakları için Protestanlık ile Katoliklik arasında seçim yapmalarına izin vermelidir. Almanların çoğu, kısmen Almanların Roma Kilisesi tarafından sömürülmesine tepki olarak Protestanlığı seçmektedir.</p>
      <p>1618-1648: Otuz Yıl Savaşı. Savaş bir inanç Savaşı olarak başladı ve Katolik Habsburg imparatorları (İspanya, Avusturya, Bohemya, İtalya ve Güney Hollanda'nın büyük bir bölümünü kontrol eden ve Katolik Alman Prenslerinin yardımıyla Almanya'daki geleneksel güçleri için savaşan) ile Protestan Fransızlar ve İsveçliler (Protestan Alman Prenslerinin yardımıyla) arasında bir güç mücadelesi olarak sona erdi. Savaşın sonuçları: Din özgürlüğü-Alman topraklarının imhası ve Yoksullaşması-Fransa Avrupa'nın en güçlü ülkesi olacaktır.-Kutsal Roma İmparatorluğu anlamsız bir formalite olacaktır.</p>
      <p>1683-1714: Türklere karşı yapılan savaşlarda ve İspanyol ardıl Savaşında Avusturya, Avrupa'nın büyük bir gücü haline geldi.</p>
      <p>1756-1763: Yedi Yıl Savaşı. II. Friedrich (1712-1786) döneminde Prusya, Avrupa'nın büyük bir gücü haline geldi ve bundan sonra giderek artan bir şekilde Avusturya'ya karşı Almanya'da Güç ve etki mücadelesini kazandı.</p>
      <p>1772-1795: Polonya'nın üç Bölümü. Prusya, Avusturya ve Rusya Polonya'yı kendi aralarında bölerler.</p>
      <p>1789: Prusya ve Avusturya'nın şiddetle mücadele ettiği Fransız Devrimi gerçekleşir.</p>
      <p>1815: 2. Napolyon'un yenilgisinden sonra Paris barışı. Fransız Devrimi'ne ve daha sonra Napolyon'a karşı mücadele ile Kutsal Roma İmparatorluğu resmen sona erer ve aynı zamanda küçük Alman devletlerinin sonu başlar. Şimdi, Frankfurt'ta (Cumhurbaşkanı Avusturya tarafından atanan) bir Bundestag ile aciz bir Alman konfederasyonu vardir, ancak çok az güce sahiptirler. Prusya ve Avusturya, gelişen demokratik özlemleri başarıyla bastırmaya devam ettiler.</p>
      <p>1848: Mart devrimi. Avusturya'da muhafazakar bakan Kont Metternich görevden alındı ve Alman Federasyonunda liberal bir ulusal meclis demokratik olarak seçildi, ancak Avusturya ve Prusya reformları engellemeye devam etti.</p>
      <p>1861: I. Prusya Kralı oldu ve 1862'de Otto von Bismarck'ı Başbakan olarak atadı.</p>
      <p>1866: Bismarck, Alman Konfederasyonu'nun soyu tükenmiş olduğunu ilan eder ve Prusya, Königgratz Savaşı'nda avusturya ile sonuçlanan savaşı kazanır ve böylece yeni "Kuzey Alman Konfederasyonu"nda Alman eyaletlerinin etkin kontrolünü kazanır.</p>
      <p>1875: Almanya Sosyal Demokrat Partisi'nin (SPD) kuruluşu, Sosyal Demokrat İşçi Partisi ve genel Alman işçi Derneği'nin birleşmesinden kaynaklandı.</p>
      <p>1878: Bismarck'ın "Sosyalist Yasası" (iki suikast girişiminden sonra) tüm sosyalist ve komünist Dernekleri yasaklar, ancak SPD'Yİ yasaklamaz. Yasa 1890'a kadar uzatıldı ve SPD'NİN daha da güçlenmesine engel olamadı.</p>
      <p>1883/1889: Bismarck sosyal sigortayı kurdu. Ancak bu, muhafazakar Hükümeti ile işçi sınıfı arasındaki gerginliği hafifletmeye yetmedi.</p>
      <p>1914-1918: Birinci Dünya Savaşı, Avusturya-Macaristan Arşidük Franz Ferdinand'ın Saraybosna'da öldürülmesiyle başladı. Versailles Antlaşması'nda Almanya Kolonilerini, Alsace-Lorraine'i Fransa ve Posen'e ve "Polonya koridoru" nun Polonya'ya kaybediyor; Almanya önemli tazminatlar ödemek ve Rheinland'ı askerden arındırmak zorunda. (Mart 1918'de Almanya'nın Rusya ile imzaladığı Brest-Litovsk Barışından daha cömert bir barış anlaşması. Rusya Almanya'ya çok fazla toprak vermeli, Polonya, Gürcistan ve Ukrayna'nın bağımsızlığını tanımalı ve Almanya'ya büyük tazminat ödemeye mahkum oldu.)</p>
      <h1><b>1 DAKİKADA TARİH; ALMANYA</b></h1>
      <p style="font-size: 22px;"><b>1 DAKİKADA NAZİ ALMANYASI</b></p>
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/QycURXf_mB4?si=gzm6Yzvn3hO_uuiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p style="font-size: 22px;"><b>1 DAKİKADA FEDERAL ALMANYA CUMHURİYETİ TARİHİ</b></p>
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/lUAsnAa4yoE?si=iTxeSLV03uvC2LNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/ok26x8NkYVM?si=cOhPE6pzzRj9vuAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/CksGXl6oa3c?si=xF2JvTru2C718RwJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/hdYzRtZXy64?si=xiPzWQ_-wiob2210" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/Q1VQYnfKJFg?si=DLYmlv2wtv2Tg8Tp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/JdwfhP_Om8w?si=T94xOsL4hyUmhKds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "tarih") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "TARİH";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "TARİH";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});








document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p></p>
      <p><b>Almanya Federal Cumhuriyeti Arması</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/deutschlandflagge-mit-bundesadler.jpg" alt="hj">
      <p>Kartal, dünyanın en eski Devlet sembollerinden biridir ve bugün hâlâ var olan en eski Avrupa Amblemidir. Roma İmparatorlarının egemenliğinin sembolü olarak kullanılmıştır. Frenk hükümdarları, İmparatorluklarıyla birlikte, güçlerinin sembolü olarak Kartal’ı da kabul ettiler.</p>
      
      <p><b>Bundestag-Reichstag-Alman Federal Meclisi</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/riechtag-g5367cb989_1920.jpg?w=900" alt="hj">
      <p>Almanya Federal Cumhuriyeti’nin başkenti Berlin’de bulunan Bundestag ya da eski adıyla Reichstag Almanya Federal Cumhuriyeti’nin yönetim merkezlerinden biridir. Kapısında ”Dem deutschen Volke”-”Alman Halkına” yazsısı 1916 yılında mimar Peter Behrens tarafından yazılmıştır. Günümüzde adeta bir ikon olup Almanya ziyaretçileirnin uğrak noktalarındandır.</p>
      
      <p><b>ALMAN BAYRAĞI-BUNDESFLAGGE</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/adsiz-1.png" alt="hj">
      <p>Anayasanın 22. maddesinin 2. fıkrası şöyle diyor: “Federal bayrak siyah-kırmızı-altındır.”Bu renk uzun bir geleneğe dayanıyor. Birlik, özgürlük ve demokrasinin simgesidir.</p>
      
      <h1><b>RESMÎ MARŞ</b></h1>
      <p>Sözleri ünlü ve mühim şair Hoffman von Fallersleben tarafından yazılan(1841) ve bestesinin de ayrıca ünlü ve mühim bestekâr Franz Joseph Haydn tarafından yapılan(1797) Alman marşı(Einigkeit und Recht und Freiheit), Alman ulusunun birçok duygusunu paylaşır.</p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/02/almanmarsdilkultur.jpeg?w=1024" alt="hj">
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/Xsu9cwwIiuw?si=dqFY7_MFxKsxyw0R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "sembol") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "SEMBOLLER";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "SEMBOLLER";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});











document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<h2>ALMANYA TEKNİK VE SANAYİSİNDEN ÖN BİLGİLER</h2>
      <p>Almanya’nın on yıllardır belirlediği Sanayi çağının geride bıraktığı binalar ve tesisler ve tüm mahalleler her zaman, bazı kişiler için etkileyicidir. Endüstriyel miras, Almanya’nın imajını da görsel olarak şekillendirmeye devam ediyor; terk edilmiş fabrikalar, kullanılmayan fabrika salonları, işçi yerleşimleri, madenler, madencilik sonrası manzaralar her yerde bulunabilir. Bu yapılar, yakın Almanya tarihi hakkında çok şey söyleyen, bölgelerin ve insanların nasıl geliştiğini gösteren çağdaş tanıklardır. Bu yerler kırsal bölgelerde de bulunabilir.1</p>
      <h2>Önemli Kişiler</h2>
      <p><b>1-Carl Friedrich Benz Carl Friedrich Benz (1844-1929)</b></p>
      <p>teknoloji tarihinin en önemli Mucitlerinden biridir. Mühendis Carl Benz’in 1 numaralı 1885 numaralı Patent motorlu otomobili ilk modern otomobil olarak kabul ediliyor. Daimler AG’DE(Mercedes-Benz Eski Adı), Otomotiv Mühendisliği öncüsü Carl Benz’in İnovasyon ruhu canlı tutuluyor. Stuttgart Bölgesi Otomobil endüstrisini Carl Benz geleneğinde görülüyor.</p>
      <p><b>2-Ferdinand Graf von Zeppelin Ferdinand Graf von Zeppelin (1838-1917)</b></p>
      <p>"Zeppelin" zeplini, Alman ve uluslararası zeplin gemilerini birbirine bağlar. Süvari Generali ve zeplin Tasarımcısı Graf Zepelin Konstanz Gölü’nde doğdu ve ilk Zeplinleri orada yükseldi. Hava taşımacılığının gelişiminin biyografik ve tarihi yerleri Almanya ve Danimarka’da kuzeye doğru yer almaktadır.</p>
      <p><b>3-Karl Wilhelm Otto Lilienthal Karl Otto Lilienthal (1848-1896)</b></p>
      <p>muhtemelen bir uçakla (asılı Planör) başarılı ve tekrarlanabilir bir şekilde kayma yapan ilk insandı. Otto Lilienthal, Kuş uçuşu ile ilgili deneysel hazırlık çalışmaları ile modern Havacılık için ön koşullar yarattı.</p>
      <p><b>4-Gottlieb Daimler Gottlieb Daimler (1834-1900)</b></p>
      <p>teknoloji tarihinin en önemli Mucitlerinden biridir. Mühendis, tasarımcı ve Sanayici, ilk yüksek hızlı benzinli motoru ve içten yanmalı motorlu ilk dört tekerlekli motorlu aracı geliştirdi. Daimler AG’de(Mercedes-Benz Eski Adı) Otomotiv üretim Öncüsünün İnovasyon ruhu canlı tutuluyor.</p>
      <p><b>5- Terzi Albrecht Berblinger Ulm Terzisi Albrecht Berblinger (1770-1829)</b></p>
      <p>bir uçuş cihazı tasarladı. 31 Mayıs 1811’de Berblinger ilk kez Kartal Kalesi’nden Tuna Nehri üzerinde uçmaya çalıştı ve suya düştü. 1986 yılında, uçuşa elverişlilik kanıtlandı. Uçak Belediye binasında hâlâ görülebilir.</p>
      <p><b>6-Otto von Guericke Otto von Guericke (1602-1686)</b></p>
      <p>aynı zamanda hukukçu, fizikçi ve mucit olan nadir Alman Siyasetçilerden biriydi. Magdeburg yarım küreleri ile yapılan hava basıncı deneyleri onu tanıdı. Magdeburg, Eski Belediye Başkanı Otto von Guericke’nin anısını canlı tutan tek kişi değil.</p>
      <p><b>7-Krupp Ailesi</b></p>
      <p>Adeta bir girişimci hanedanı olan Krupp Ailesi Essen ve Ruhr bölgesini şekillendirdi. Ekonomik güç ve etki, günümüze kadar devam eden bir efsane yarattı. Nasyonal sosyalizm döneminde kurumsal hayırseverliğin ve adaletsizliğin tanıklıkları da aynı şekilde not edilebilir. Essen ve Duisburg’da binalar, anıtlar, sanayi tesisleri ve halefi şirketler büyük bir Krupp endüstri geleneğini hatırlatıyor.</p>
      <p><b><i>KAYNAKLAR</i></b></p>
      <p>1- https://www.kulturrat.de/themen/texte-zur-kulturpolitik/industriekultur-kulturpolitische-bilanz-und-mehr/</p>
      <p>2- ÖNEMLİ KİŞİLER: https://www.kulturreise-ideen.de/technik/personen-2.html</p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "teknik") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "TEKNİK VE SANAYİ";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "TEKNİK VE SANAYİ";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});












document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p>Bir dilin lehçeleri, o dili benzersiz kılar. Bölgesel dil farklılıkları sadece heyecan verici olmayıp aynı zamanda Kültür hakkında bir fikir de vermektedir. En çok konuşulan diller gibi Almanca’nın da birçok farklı lehçesi vardır. Almanya, Avusturya ve İsviçre’nin hepsinin kendine özgü aksanlarının nasıl olduğunu görmek kolaydır. Ancak Almanya’da bile farklı bölgesel lehçeler vardır. Peki hangisi öğrenilmeye değer?</p>

<h2>1-Hochdeutsch- Standart Almanca</h2>

<p>Almanya birkaç farklı lehçeye bölünmüştür. Bunlar iki ana kategori olarak sınıflandırılır; Hochdeutsch(Yüksek Almanca) ve Plattdeutsch(Düşük Almanca). Bunlardan Hochdeutsch daha önemlidir. Bu lehçe daha çok Hochdeutsch olarak bilinir. Hochdeutsch ile ilgili Kuzey Almanya’dan geldiğini düşünebilirsiniz ancak durum tam tersidir. Hochdeutsch, Alplerin ve yaylaların bulunduğu Güney Almanya’dan geliyor. Bugün Almanca hakkında bildiğiniz bilgiler bu Hochdeutsch’a dayanır. Hochdeutsch okulda öğretilen lehçedir. Eğer Alman televizyonunu veya haberlerini izliyorsanız, oyuncular ve sunucular muhtemelen bu lehçeyi konuşurlar. Bu en çok konuşulan Almanca lehçesidir.</p>

<h2>2- Plattdeutsch-Kuzey Almanya Lehçesi</h2>

<p>Bu lehçe Almanyave Hollanda’nın kuzey kesminden gelir. Telaffuz açısından Hochdeutsch’a daha yakındır. Bu iki lehçenin yazılış biçimleri tamamen aynıdır. Kuzey Almanya Lehçesi giderek daha az insan konuştuğu için kaybolan bir lehçedir. Bu yüzden bu lehçeye Düşük veya Alçak Almanca da denilmektedir. Plattdeutsch’a örnek olarak; Türkçe: Ağız, Hochdeutsch: Mund, Plattdeutsch: Sabbel.</p>

<h2>3-Schwiizerdütsch-İsviçre Almancası</h2>

<p>İsviçre Almancası, doğal olarak İsviçre’nin lehçesidir. Fransızca ve İtalyanca, İsviçre’nin resmi dilleri olduğundan bu Almanca lehçesi diğerlerinden çok daha farklıdır. Komşu diller telaffuz üzerinde kesinlikle izlerini bıraktılar. İsviçre-Alman lehçesini anlamak, diğer bölgelerden Almanca konuşanlar için bile zordur. Schwiizerdütsch’e örnek olarak; Türkçe: Kova, Hochdeutsch: Eimari, Schwiizerdütsch: Chübel.</p>

<h2>4-Bayerisch-Bavyera(Bayern) Lehçesi</h2>

<p>Bavyera Güneydoğu Almanya’dadır ve Bayerisch yazıldığında standart Almancaya çok benzer, ancak ünlülerin telaffuzunda farklılık gösterir. Bavyera’daki herkes standart Almancayı okuyabilir, yazabilir ve anlayabilir. Ancak, nadiren konuşma fırsatı bulurlar. Almanca / Hochdeutsch bu nedenle bu bölgede “Schriftdeutsch” veya Yazılı Almanca takma adını almıştır. Bayerisch’e örnek olarak; Türkçe: Sincap, Hochdeutsch: Eichhörnchen, Bayerisch: Oachkatzlschwoaf.</p>

<h2>5-Österreichisches Deutsch-Avusturya Almancası</h2>

<p>Avusturya Almancası diğerlerinden biraz farklıdır. Dilbilgisinde çoğunlukla aynı olsa da, Avusturya Almancası benzersiz bir kelime dağarcığına sahiptir. Bu Amerikan ve İngiliz İngilizcesi olarak düşünülebilir. Amerikalılar chips, İngilizler crisps der. Ancak her iki tarafın da bahsettiği şey aynıdır. Aynı durum Avusturya ve Almanya lehçeleri için de geçerlidir. Misal erik kelimesi Hochdeutsch olarak Pflaume, Österreichisches Deutsch olarak Zwetschge’dir. Österreichisches’e örnek olarak; Türkçe: Selam!, Hochdeutsch: Grüß Gott!, Österreichisches: Griaß di!</p>

<h2>6-Sächsisch-Yukarı Sakson Lehçesi</h2>

<p>Saksonya, Almanya’nın doğu bölgesinde bir eyalettir, bu nedenle Säschsisch öncelikle doğuda konuşulur. Dil, bilimsel olarak standart Almanca ve diğer lehçelere oldukça benzer, ancak birçok Almanca konuşanın güçlü duygulara sahip olduğu bir aksanı vardır. Sächsisch’e örnek olarak: Türkçe: Kafa, Hochdeutsch: Kopf, Sächsisch: Nischl.</p>

<h2>7-Berlinerisch- Berlin Almancası</h2>

<p>Berlin, Almanya’nın başkentidir. Zengin tarihi ve gelişen sanat sahnesiyle uluslararası bir merkez hâline geldi. Bu sebeptendirki Berlin lehçesinin temsil ettiği vurgu yavaş yavaş kaybolmaktadır. Berlin’in modernleşmesi onu küresel bir şehir haline getirdiğinden tüm yaşamları boyunca orada kalmış sadece birkaç kişi yaşıyor. Eğitimde de Hochdeutsch öğretilmesi bu lehçenin popülaritesini azaltmaktadır. Berlinerisch’e örnek olarak Türkçe: Gıcık İnsan, Hochdeutsch: hinterhältiger Mensch, Berlinerisch: Aas</p>

<h2>8-Pennsylvania Dutch-Pensilvanya Almancası-(Pennsilfaanisch Deitsch)</h2>

<p>Pennsylvania Dutch’ın aslında bir Alman lehçesi olduğunu pek kimse bilmiyor. ”Dutch” aslında ”Deutsch” olması gerekir. Alman göçmenlerin oluşturduğu bu Amerikan azınlık dili, Amerika Birleşik Devletleri’nin doğu kıyısında hâlâ yaşıyor. Pennsilfaanisch’e örnek olarak; Türkçe: Kaplumabağa, Hochdeutsch: Eine Schildkröte, Pennsylvanisch: En Shil-grut.</p>

<p style="font-size: 21px;"><b>Bu sayfada Referans alınan Kaynaklar:</b><p>

  <p style="text-decoration: overline;"><a onclick="location.href='https://www.optilingo.com/blog/german/german-dialects/'">1-KAYNAK</a></p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "lehce") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "LEHÇE";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "LEHÇE";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});







document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p>Waldmann'ın 2020'de yazdığı makale'de o zamanı kastederek günümüzde 100 milyon kişi ile Almanca'nın Avrupa'nın en büyük dili olduğunu söylemiştir. Ancak bu dil sahip olduğu geniş Grammer yapısı ve kelime dağarcığı ile nereden geldi ve bugünkü hâline nasıl geldi?</p>
      <p style="font-size: 25px"><i><b>Urgemanische Sprache-Proto Germen Dili</b></i></p>
<p>Henüz Almanca mevzu bahis bile değilken MÖ 5. Yüzyılı arasında İlk Fonetik Değişimle bir ilkel Germen dili, Hint-Avrupa dil ailesinden ayrıldı. Bu ilk fonetik değişimi ise belirli seslerin zamanla değiştiği bir değişim sürecidir. Bu ilkel yada Proto-Germen dilinin ayrıntılı olarak nasıl inşaa edildiği pek iyi bilinmemektedir çünkü bu döneme ait yazılı kanıtlar çok nadirdir. Bu sebeple günümüzde yalnızca yeniden inşa edilebilir. Önceki Germenler mezarlarında ve kült nesnelerinde n fazla birkaç Runik yazıt bıraktılar, hikayeler ve ilahiler ise sözlü olarak aktarıldı. Bununla birlikte brauda(Brot-Ekmek) veya Gronpan(Griffin) gibi bazı germen terimleri şekil değiştirerek günümüze kadar gelmeyi başarmıştır.</p>
      <p style="font-size: 25px"><i><b>Diutisc-Althochdeutsch-Eski Standart Almanca (MS 600-1050)</b></i></p>
<p>Alman halkının göçü ve Hristiyanlığın yayılması sırasında, Alman dilinin gerçek tarihi MS 600 civarında başladı. Bir grup Batı Germen Dili, İkinci Fonetik Değişim olarak adlandırılan diğer Germen Lehçelerinden ayrıldı ve başlıkta da geçen Eski yüksek Almanca denilen şey ortaya çıktı. İkinci Fonetik Değişim, Alman tarihinde önemli bir dönüm noktasıdır. Bugün Pfanne, Zeit ve Tochter denilmesinin sebebi budur. Oysa Hollandaca ve İngilizce olarak sırasıyla Pan, Tijd/Time ve Dochter/Daughter denir. Ek olarak bu değişim süreci Almanca'yı farklı lehçelere bölmüştür. Örnek olarak kuzeydeki Düşük Almanca, İngilizce'de olduğu gibi eski sesleri (yani "pf" yerine "p" vb.) korumuştur. Bu durum günümüzde de İskandinav Lehçelerinde ve dillerinde görülmektedir.</p>
      <p style="font-size: 25px"><i><b>Herzeliebez vrouwelin-Mittelhochdeutsch-Orta Zaman Standart Almancası(MS 1050 – 1350)</b></i></p>      
<p>Ritter, Minnesang ve Feodalizm; Yüksek Orta Çağ ekonomik ve kültürel yükseliş olarak değil de aynı zamanda politik parçalanma ile de karakterize edilmiştir.1050 yılından itibaren konuşulan alanlar ayrı ayrı bireysel egemenliğini ilan etmiş alanlarından oluşan bir yama halısına ayrıldı. Alman dili aynı şekilde tekrar gelişti ve her bölgenin kendisine ait lehçesi, her hanedanın kendi mahkeme şiiri vardı. Örneğin, Staufen İmparatorunun sarayında bu dönemde Nibelungenlied, Parzival ve Tristan gibi önemli destanlar ortaya çıktı. Ayrıca Walter von der Vogelweide Minnesangı ''Herzeliebez Vrouwelin'' gibi Orta Standart Almanca'da çırptı. Orta-yüksek Almanca, günümüz Almancasına çok benziyordu. Bir yandan Umlautlar (ä, ö, ü) tam çiçeklenmeye başladı, diğer yandan gerilmemiş heceler zayıfladı ve gerilmemiş son hecelerdeki sesli harfler zayıfladı (Eski Standart Almanca'da hōran, Orta Zaman Standart Almancası'nda hœren-hören olmuştur). Telaffuzdaki bu değişiklik gerçek bir zincirleme reaksiyona yol açtı. Sesli harflerin zayıflaması, daha önce farklı çekim sonlarının(Kasusendung) birbirine benzemesine neden oldu ve bu da bir ismin durumunu göstermeye devam etmek için makaleleri gerekli kıldı.</p>
      <p style="font-size: 25px"><i><b>Frühneuhochdeutsch-Erken Yeni Yüksek veya Standart Almanca</b></i></p>
<p>Erken Yeni Yüksek Almanca ayrı bir döneme değer. Çünkü bu dönemde Almanca dil alanında önemli kültürel değişiklikler meydana geldi. Martin Luther, 1545 tarihli Kitab-ı Mukaddes çevirisiyle Almanca kelime dağarcığını ''Denkzettel, Feuereifer ve Lästermaul'' gibi sayısız sözcükle zenginleştirdi. Daha önce Ziege-Keçi (Geiss yerine) veya Ufer-Kıyı (Gestade yerine) gibi bölgesel ifadeler de tüm Almanca dil bölgelerinde tanınmaya yardımcı oldu. Fakat her şeyden önce, tek tip bir Almanca dilinin temelini attı. Çünkü Kitab-ı Mukaddes'in Almanca metninin yayılmasıyla Güney ve Orta Alman Lehçelerine dayanan Yeni Yüksek Almanca, Kuzey Almanya'da da giderek daha fazla hakim oldu. Johannes Gutenberg'in 1446 civarında kitap basımı gibi teknik yenilikler, Alman yazılı dilinin önem kazanmasına neden oldu. Tüm Lehçelerin konuşmacıları tarafından anlaşılan standart bölgesel diller oluşturuldu. Öte yandan, Aşağı Alman lehçeleri, Orta Çağ'da hala Alman lehçeleri arasında yer alan ve 16. yüzyılın sonunda bağımsız bir dil haline gelen Hollandaca hariç kendi yazılı dillerini geliştirmediler.</p>
      <p style="font-size: 25px"><i><b>Ulusal Dil Olarak Almanca 19. ve 20. Yüzyıllar</b></i></p>
<p>Almanca konuşulan bölgelerin çoğunluğu 1871'de Alman Reich'i oluşturmak üzere bir araya geldiğinde, yeni ulus devletin dili için elbette tek tip bir yazım gerekliydi. Böylece Konrad Duden, 1880 yılında Alman dilinin tam ortografik sözlüğünü yayınladı. 1996 yılında yapılan Yazım Reformuna kadar uygulanmıştır. 19.yüzyılda Sanayi Devrimi ile birlikte birçok teknik sözcük (Elektrizität-Elektrik, Waschmaschine-Çamaşır Makinesi, Eisenbahn-Demir Yolu) toplumsal yaşam alanında ise İngilizce ve Fransızcadan (Lokomotive-Lokomotif, Billet-Kütük, Telegramm-Telgraf) ödünç alınmıştır. 20. Yüzyıl'da da yeni icatlar ve toplumsal değişikler Almanca kelime dağarcığına ''Computer-Bilgisayar, Job-İş ve Team-Takım'' gibi çok sayıda İngilizce ödünç kelime eklenmesini sağlamıştır. 20. yüzyılda telaffuz konusunda pek bir şey yapılmamış olsa da (sadece yuvarlanmış "r", daha çok rendelenmiş bir "r" ye yol açtı, Alman vakalarında sadeleştirme eğilimi gözlemlenebilir: Genitif (en azından konuşulan dilde) daha az ve daha az kullanılır, bunun yerine genellikle Dativ, örneğin "wegen dem Wetter" (Genitiv wegen des Wetters) ile değiştirilir.</p>
      <p style="font-size: 25px"><i><b>Günümüz Almancası Konuşanları Kadar Çeşitli Hâli</b></i></p>
<p>İngilizce, Fransızca ve İspanyolca'dan farklı olarak Almanca, hiçbir zaman dünya dili hâline gelmedi. Bununla birlikte Alman dili, tekdüze olmaktan uzaktır. Çünkü yüzlerce ortaya çıkan Alman lehçeleri bugün hâlâ vardır. Büyük diyalektik çeşitlilik, Almanca'da bir ve aynı şey için sık sık birçok terimin bulunmasından da sorumludur. Sadece "bequeme Hausschuhe" ifadelerini düşünün: Schlappen, Latschen, Pantoffeln, Puschen, Finken, Patschen...</p>

<p>Tüm dillerin doğasında olduğu gibi Almanca da kaçınılmaz olarak değişmeye devam ediyor. Bunun yanında yazı dili bile yeniliklerden uzak durmuyor. Haziran 2017'de Alman yazımında bugüne kadarki en son harf tanıtıldı. ß harfi yani okunuşuyla Eszett harfi.</p>

<p>Bu konuda gördüğünüz bu yazılanlardan da referans alınan Sarah Waldmann durumu şöyle görmektedir; ''Genitiv, Dativ ve Akkusativ bir noktada tamamen kaybolacak ya da karmaşık hece Yapılarımızla üçüncü bir ses kayması temizlenecek, ancak büyük-büyük-büyük torunlarımız muhtemelen en erken öğreneceklerdir.''</p>

<p style="font-size: 22px;"><b>KAYNAKLAR</b></p>

<p style="text-decoration: overline;"><a onclick="location.href='https://de.babbel.com/de/magazine/geschichte-der-deutschen-sprache'">Sarah Hanım:</a></p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "diltarih") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "DİLİN TARİHİ";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "DİN";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});







document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `<p>Frankfurt’taki modern gökdelenler, kuzeyde yıllardır bulunan tuğla binalar, Münih’teki klasik müze tapınakları gibi eserlere bakılırsa Almanya’nın renkli bir mimari tarihe sahip olduğu söylenebilir. Özellikle Berlin gibi tarihsel olarak önemli şehirlerde etkileyici ve çok yönlü yapı manzarası vardır. Brandenburg Kapısı gibi turist çeken yerlerin dışında Başkent, aynı zamanda Gründrzeit’ın blok kenar mahallerine sahip geniş kapsamlı yapısıyla da bilinir. Rheinmetropole yani Köln denilince dünya çapında Köln Katedrali ve bir gotik mimari yapısı akla gelir. Frankfurt’ta ise herkesin aklına hemen 20. yüzyılın gökdelenleri gelir. O hâlde hangi mimari üslup ve özellikler Alman metropolleri için tipiktir?1</p>
      <h2>KARL FRİEDRİCH SCHİNKEL’DEN NORMAN FOSTER’A-BAROCK’TAN MODERN MİMARİYE...</h2>
      
      <p style="font-size: 22px;"><b><i>BERLİN-STADT DER ARCHİTEKTUR-MİMARLIK ŞEHRİ</i></b></p>
      <p>Tek başına Berlin bile mimarlık hayranlarını haftalarca orada tutabilecek zenginliğe sahiptir. Şehrin en güzel meydanlarının birisinde bulunan Fransız Katedrali, Alman Katedrali, Gendarmenmarkt ve daha fazlası…</p>
      <p>Mimar Friedrich Schinkel, Berlin’de Klassizmin başyapıtları olarak kabul edilen Neue Gar veya Alte Museum’u gerçekleştirdi. Bay Norman Forest, Almanya Bundestag’ın babası gibi görülebilecek ve yeniden canlandırılan Reichstag’ın 1999 yılından beri ziyaretçlere erişilebilir olan cam kubbeyi genel kurul salonunun üzerine yerleştirilmesine izin vermiştir.</p>
      
      <p style="font-size: 22px;"><b><i>Elbphilharmonie: Hamburg’un Simgesel Yapıları</i></b></p>
      <p>Hamburg’un yeni dönüm noktası, 2017 yılında açılan Elbphilharmonie, Hafencity’de heybetli bir cam yapıya sahip ve eski bir mağazanın tuğla kaidesi üzerine inşa edilmiş bir Konser Salonu. Almanya’nın en büyük ikinci kentinin daha eski bir simgesi UNESCO tarafından Yüceltilmiş ve Mimar Fritz Höger tarafından eski şehrin Kontorhaus bölgesinde gerçekleştirilen Chilehaus, 1920’lerin tuğla Dışavurumculuğunun etkileyici bir örneğidir. Şili’den zengin bir adam olarak dönen ve inşa etmek için 4,8 milyon tuğla satın aldığı iddia edilen Hamburglu bir tüccarın bağışına borçludur. Binanın Tepesi bir gemi yayı andırıyor ve Avrupa’nın en sivri cephe açılarından biri. Üst katlar ofis olarak kiralanırken, avluya mağazalar, kafeler ve restoranlar ile serbestçe erişilebilir.</p>
      
      <p style="font-size: 22px;"><b><i>Dessau Kenti</i></b></p> 
      <p>Orta Çağ tamamlanmış bir dönem olarak kabul edilebilir, Bauhaus’un Mirası ise günümüze kadar Sanat, Mimarlık ve kültürde yankılanır. 1919 yılında Gropius tarafından kurulan okulun büyük bir inşaat Topluluğu, Berlin’in güneybatısındaki Dessau’da bir buçuk saatlik bir sürüş mesafesindedir.</p>
      
      <p style="font-size: 22px;"><b><i>Truss Hayranları İçin: Quedlinburg</i></b></p>
      <p>Ortaçağ yapılarına meraklıysanız, Bavyera’daki küçük Nördlingen kasabasında da haklısınız. 2,6 kilometre boyunca, eski, kapalı ve 1400 yılı civarında kapalı olan şehir duvarı halkası tamamen erişilebilir. Bu da Almanya’da eşsiz.</p>
      
      <p style="font-size: 22px;"><b><i>Mühendis Aklı: Göltzschtalbrücke</i></b></p> 
      <p>1851’den beri vogtland, Saksonya’daki Reichenbach yakınlarındaki derin bir Vadiyi kapsayan köprü Yapım sanatının bir örneği: dünyanın en büyük tuğla Köprüsü. Göltzschtal Köprüsü, tamamlandığında 78 metre yüksekliğindeki dünyanın en yüksek Demiryolu Köprüsüydü. Alman mühendis Johann Andreas Schubert tarafından tasarlandı. Yürüyüş yolları binlerce Kemerden oluşan yapı boyunca devam ediyor. Köprünün 150 metreden muhteşem manzarası için komşu Mylau kasabasında bir balon yükselir. Event karakteri var.</p>
      
      <p style="font-size: 22px;"><b><i>Konutlar-Klasik Modernliğin Simgesi</i></b></p>
      <p>Berlin ve Hamburg’un yanı sıra, diğer büyük Alman şehirleri de mimari güzellikler sunuyor: Düsseldorf, örneğin Frank O’gehry’nin çarpık açılı binaları, Münih, Herzog ve Pierre de Meuron’un dış cephesinde renkli ışıklı Yastıklarla Stadyumu, Frankfurt am Main Avrupa’nın en yüksek gökdeleni, Sir Norman Foster tarafından tasarlanan Commerzbank Kulesi. Dresden, köpek kulübesi, kıyafet Evi ve yeniden inşa edilen Frauenkirche dahil olmak üzere Barok binaların bolluğu ile çekiyor.</p>
      
      <p style="font-size: 20px;"><b>Bu sayfada referans alınan kaynaklar:</b></p>

      <p style="text-decoration: overline;"><a onclick="location.href='https://www.mcmakler.de/magazin/architektur-in-deutschland'">1-KAYNAK</a></p>

      <p style="text-decoration: overline;"><a onclick="location.href='https://www.germany.travel/de/staedte-kultur/von-schinkel-bis-foster-faszinierende-architektur.html'">2-KAYNAK</a></p>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "mimar") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "ALMANYA MİMARİSİ";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "ALMANYA MİMARİSİ";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
});












document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      
      const replacementContents = {
        felsefe: `
        <p>Vittorio Hösle'nin ''A Short History of German Philosophy'' kitabının direkt olarak burada da verilen özeti, Alman felsefesini özetler nitelikte olabilir; Ortaçağdan başlayarak mistik Meister Eckhartkitap, Luther'in Reformunun getirdiği felsefi değişikliklere vurgu yapar ve ardından Leibniz ve Kant'ın çalışmaları da dahil olmak üzere Alman felsefesinin klasik çağının ayrıntılı bir açıklaması sunulur; Lessing, Hamann, Herder ve Schiller'de yeni bir beşeri bilimler biçiminin yükselişi ilk Romantikler ve İdealistler Fichte, Schelling ve Hegel. Sonraki zamanalar ise Schopenhauer, Feuerbach, Marx ve Nietzsche'deki Alman sentezinin çöküşünü araştırıyor. Yirminci yüzyıla dönersek kitabın yazarı olan Hösle, Frege ve Viyana ve Berlin çevrelerinde analitik felsefenin yükselişini araştırıyor; Neo-Kantçılık ve Dilthey'de tarih bilimlerinin temeli; Husserl'in fenomenolojisi ve Heidegger'in radikal değişimi; Nazi filozofları Gehlen ve Schmitt; ve başlıca Batı Alman filozofları, gadamer, Jonas ve iki Frankfurt okulundan olanlar dahil. On sekizinci yüzyılın ortalarından yirminci yüzyılın ortalarına kadar kendine özgü bir Alman felsefi geleneği olduğu savunulur, bu geleneğin neden büyük ölçüde II. Dünya Savaşı'ndan sonraki on yıllarda sona erdiğini söyler.</p>
        <div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 20px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFW4yCkcmI&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>`,
        ulasim: `
      <p>Destatis’e (Federal İstatistik Dairesi) göre Ulaşım, malların ve kişilerin hareketliliği anlamına gelmektedir. Ulusal ve uluslararası iş bölümü, turizm ve boş zaman etkinliği sağlar. Yükselen mobilite nedeniyle ulaşım altyapısı zorlıuklarla karşı karşıyadır. Bu sebeple resmi tarfik istatistikleri, nispeten sıkı bir şekilde ulaşım faaliyetleri ve önkoşullar ile yönlendirildiğini söyler. Özellikle ulaşım hizmetleri, nakliye şirketleri, ulaşım araçları stokları ve ulaşım altyapısı ile ilgili tüm önemli bilgileri toplarlar.1</p>
    <p>Almanya’da 830.000 km yol(buna cadde, sokak vb. dâhil), 38.600 km Demiryolu, 7.300 km iç su yolu ve 24 ana havaalanı, malların taşınmasını ve vatandaşların hareketliliğini sağlamaktadır. Şüphesiz ki ve her ülkede olduğu gibi; insanlara, işletmelere gıda, mal ve hammadde tedarikinin sorunsuz bir şekilde sağlanması için ön koşuldur.</p>
    <p>Ayrıca, aşırı hava olayları trafik altyapısında büyük tahribata neden olur. İklim değişikliği nedeniyle sıklık ve yoğunlukta artan şiddetli yağışlar, seller, heyelanlar ve orman yangınları, son yıllarda Almanya’daki yollara, köprülere ve demiryolu altyapılarına giderek daha fazla zarar vermiştir.</p>
    <p>Ek olarak Almanya’da yol müzesi bulunmaktadır. Bu müzeyi insanlara yol müzesi adıyla tanıtınca akıllarına genellikle yol üstünde bulunan bir açık hava müzesi geliyor ancak durum ironik olarak bu müzenin konusu geçmişten günümüze yapılmış olan kaldırımlar, kısa yollar ve yol ile ilgili her şeydir. Müze Rheinland-Pfalz eyaletinde bulunmaktadır. Görmek için aşağıdaki seçeneğe tıklayınız.</p>
      `,
        toplum:  `
    <p>Alman Federal Hükümeti’ne göre birçok ziyaretçi Almanya’yı kozmopolit, kültürel açıdan farklı ve yaşamaya değer bir ülke olarak görüyor ve bu sadece 2006 Futbol Dünya Kupası gibi etkinliklerde değil. O zamanlar Futbol etkinliğinin resmi sloganı “Arkadaş Olma Zamanı” idi ve daveti kabul edenler, Avrupa Birliği’nin en kalabalık ülkesindeki insanların yaşam sevinci, nezaketi ve merakına şaşırdılar. Almanların sadece ekonomik başarıya değil, aynı zamanda aileye, arkadaşlara ve boş zamanlara da odaklandığını görebildiler. Ama aynı zamanda, yaşlı ve genç insanların çoğunun nasyonal sosyalist geçmişi ve 1990’da yeniden birleşmeye kadar Almanya’nın bölünmesiyle yoğun bir şekilde ilgilendiğini de gördüler ve bu geçmişle başa çıkmanın sonucu, canlı bir Hafıza Kültürü ve Dayanışma ve çeşitliliğe saygı gibi temel değerlerin derin bir şekilde sabitlenmesini sağlamıştır.</p>
    <p>Almanya’nın uzun zamandan beri bir göçmen ülkesi olması şaşırtıcı değil. Ülkede yaşanan çeşitlilik, bazı insanları şaşırtacak rakamlarla anlatılıyor. Almanya’daki toplam 82,87 milyon insanın 10,96 milyonu yabancı bir pasaporta sahip – 28 AB ülkesinin (2022 itibarı ile 27 ülke) hiçbirinde olmadığı kadar. Bu arada Alman vatandaşlığına sahip olan ancak Almanya’da doğmamış veya göçmen ebeveynlerden gelen kadın ve erkekleri de eklerseniz, Almanya’da 20 milyondan fazla insanın göçmen kökenli bir geçmişi vardır. Bu, nüfusun yaklaşık beşte birinin yabancı kökenli olduğu anlamına gelir.</p>
    <p>Almanya’ya, 1960 sonrası farklı ülkelerden farklı kültürel birikime sahip işçilerin göç
etmesi sonucunda Almanya’da çok kültürlü bir toplum meydana gelmiştir.

Bu sayfada kullanılan kaynaklar:

(1-) https://www.make-it-in-germany.com/de/leben-in-deutschland/deutschland-kennenlernen/deutsche-gesellschaft</p>
    <!-- Add more content as needed -->
  `,
       iklim:  `
    <h2>ALMANYA İKLİMİ</h2>
<p>Almanya'da ölçülü bir iklim hakimdir. Kendi ikliminin oluşmasında Batı Avrupa Deniz İklimi ve Doğu Avrupa karasal iklimi etkilidir. Kuzey Alman ovalarında ve Kuzey Baltık Denizi'nde yaz mevsimi hoş bir sıcaklığa sahiptir ve kışlar fazlasıyla soğuk değildir. Ayrıca güneyde ve doğuda mevsimler arası sıcaklık farklılıkları bazen çok daha büyüktür. Haziran ve Eylül ayları arasında Almanya'da aylık ortalama sıcaklıklar 21 ila 25 arasında gerçekleşir. Ocak ayında dip sıcaklıklar ölçülür. Genellikle yağmurlu günlere, kış mevsiminde rastlanır ancak en başta yaz mevsiminde de dağlarda sık sık yağmur yağabilir.

  <p style="font-size: 22px;"><b>KAYNAK</b></p>

  <p style="text-decoration: overline;"><a onclick="location.href='https://www.wetterkontor.de/de/klima/klima-land.asp?land=DE'">Wetter Kontor:</a></p>
    
  <h2>AVRUPA İKLİMİ</h2>

<p>Avrupa,  ağırlıklı olarak sıcak ve ılıman bir iklim bölgesinde yer almaktadır. Deniz İklimi etkisi batıdan doğuya doğru azalır ve doğuya doğru karasal iklim giderek artar. Yani bir ülke,  Atlantik'e(Batıda) ne kadar yakın olursa denizin etkisi de bir o kadar güçlü olur. Su kütleleri  sonbahar ve kış aylarında karadan daha yavaş soğur  bundan dolayıdır ki hava sıcaklığında yüksek düşüş görülmez. Diğer taraftan deniz, ilkbahar ve yaz aylarında yavaş yavaş ısınır ancak kara kütleleri çok daha hızlı ısınır. Bu sebeple bu mevsimlerde hava sıcaklığı, kıtadan çok daha düşüktür. Batı Avrupa'nın çoğunda kış ayları yumuşak, yaz ayları ise nispeten serindir. Denizden daha uzak olan bölgelerde sıcaklık farklılıkları daha kuvvetlidir. Doğu Avrupa'da ise iklim, denize olan uzaklığı nedeniyle genellikle kıtasal tiptedir. Doğu Avrupa'nın karaları ilkbahar ve yaz aylarında hızlı bir şekilde ısınır ve aynı şekilde sonbahar ve kış aylarında yine hızlı bir şekilde soğur. Bu sebeple yaz ve kış arasındaki sıcaklık farklılıkları çök büyüktür. Doğu-Orta Avrupa'da yağışlar nispeten düşüktür, yeniden belirtilir ki denizin bu bölgeler üzerindeki etkisi çok düşüktür.</p>

<p>Avrupa'daki iklim, aynı şekilde Dünya yüzeyinin kuzeyden güneye artan ısınmasıyla da belirlenir. Bu nedenle Akdeniz Bölgesin'de (Subtropikal Etki) yaz aylarında genellikle eşit derecede sıcaktır ve kış ayları yumuşak ve yağışlıdır. Güneşin güneye doğru ilerlemesi sebebiyle sonbahar ve kış aylarında Akdeniz Bölgesi, batı rüzgarlarının(Ilıman Bölge) etki alanına girer ve kış vakti hemen hemen bütün yıllık yağışlar orada gerçekleşir.</p>

<p>Orta Avrupa'da (Yani Almanya'da) ne deniz iklimi ne de kara iklimi hâkimdir. Ancak ikinci sayfada da belirtildiği gibi etkilidir. Mevsime bağlı olarak burada çeşitli etkiler meydana gelebilir. Kuzey Avrupa'da kutupsal ve kutup aşağı bir iklim vardır. Yaz mevsimi serin ve nemli ve kışlar soğuk ve karlıdır.</p>

<p style="font-size: 22px;"><b>KAYNAK</b></p>

<p>https://www.europakarte.org/klima/</p>`,
   
    din:`<p>Kondrad Adenauer Stıftung(KAS)’a göre Alman toplumu gün geçtikçe çeşitli bir hâl alıyor. Almanya’nın birleşmesiyle ile birlikte 40 yıl boyunca bölünmüş bu ülke 1989 yılından bu yana daha da birleşti. Avrupa Entegrasyonu, gelişen dijitalleşme ve Enerji Geçişi dönemi Almanya’nın çalışma ve yaşam dünyasını kalıcı olarak değiştirdi. Göçmenler Almanlaşıyor, dinî çeşitlilik ve aile yapılarının sayısı artıyor. Aynı zamanda şehir-ülke ve genç-yaşlı ilişkileri de değişiyor1.</p>
      <p>Dinî cemaatlerdeki üye sayısına bakılırsa Almanya, ağırlıklı olarak Hristiyan bir ülkedir. 2020 yılında Roma Katolik Kilisesi’nin üye sayısı yaklaşık 21,6 milyon iken bir başka 19,7 milyon kişi Protestan Kilisesi’ne aittir. Almanya’da temsil edilen bir başka din ise İslam’dır. Almanya Federal Göç ve Mülteciler Dairesi, ülkelerinde yaşayan 5,5 milyon Müslüman olduğunu tahmin ediyor. Almanya’daki Yahudi Cemaatlerinin 2021 yılındaki üye sayısı 92.000 civarındadır. Yahudilik küresel olarak bir dünya dini olmasına rağmen Budizm ya da Hinduizm gibi dinlerin toplulukları Almanya’da azınlıklardır.2</p>
      <p><b>Bu sayfada kullanılan kaynaklar:</b></p>
      <p style="text-decoration: overline;"><a onclick="location.href='https://www.kas.de/tr/gesellschaft-und-religion'">(1-KAYNAK)</a></p>
      <p style="text-decoration: overline;"><a onclick="location.href='https://de.statista.com/themen/125/religion/#topicOverview'">(2-KAYNAK)</a></p>`,

    gun: `<p><b>ALMANYA ÜLKESİNDE KUTLANAN RESMÎ GÜNLER</b></p>

<p>Almanya Federal Devleti eyaletler ile yönetildiğinden ve resmî günler eyaletlere göre farklılık gösterdiği için bu bölüm eyaletlere göre ayrılmıştır.</p>

<p><b>Epifani Yortusu - Heilige Drei Könige:</b> Baden, Württemberg, Bavyera, Saksonya Anhalt kutlar.</p>

<p><b>Kutsal Cuma - Karfreitag:</b> Bütün eyaletler kutlar.</p>

<p><b>Paskalya Pazarı - Ostersonntag:</b> Brandenburg kutlar.</p>

<p><b>Paskalya Pazartesisi - Ostermontag:</b> Bütün eyaletler kutlar.</p>

<p><b>Yükseliş Günü - Christi Himmelfahrt:</b> Bütün eyaletler kutlar.</p>

<p><b>Hamsin Yortusu - Pfingstsonntag:</b> Brandenburg kutlar.</p>

<p><b>Hamsin Pazartesisi - Pfingstmontag:</b> Bütün eyaletle kutlar.</p>

<p><b>Katolik Yortusu - Fronleichnam oder Corpus Christi:</b> Baden Württemberg, Bavyera, Hessen, Kuzey Ren Vestfalya, Renanya Palatina, Saarland, Saksonya, Thüringen kutlar.</p>

<p><b>Meryem’in Göğe Çıkışı - Mariä Himmelfahrt:</b> Bavyera ve Saaland kutlar.</p>

<p><b>Alman Birliği Günü-Tag der deutschen Einheit:</b> Bütün eyaletler kutlar.</p>

<p><b>Reformasyon Günü - Reformationstag:</b> Brandenburg, Hamburg, Aşağı Saksonya, Mecklenburg Vorpommern, Saksonya, Saksonya Anhalt, Thüringen, Schleswig Holstein kutlar.</p>

<p><b>Azizler Günü - Allerheiligen:</b> Brandenburg, Hamburg, Aşağı Saksonya, Mecklenburg Vorpommern, Saksonya, Saksonya Anhalt, Thüringen, Schleswig Holstein kutlar.</p>

<p><b>Dua ve Tövbe Günü - Buß und Bettag:</b> Saksonya eyaleti  kutlar.</p>

<p><b>Noel Günü - Erster Weihnachtstag:</b> Bütün eyaletler kutlar.</p>

<p><b>Noel Ertesi Günü - Zweiter Weihnachtstag:</b> Bütün eyaletler kutlar.</p>`, 
   
    spor:  `<h2>Almanya Ülkesinde Spor</h2>
<p>Taban sporu için destek esas olarak belediyelerden ve eyaletlerden geliyor. Almanya’da spor yaklaşık 91.000 jimnastik ve spor kulübü tarafından organize edilmektedir. Yaklaşık 24 milyon üyesi için spor, sağlıklı bir yaşam tarzını teşvik eder, topluluk oluşturur ve bağlılık, güvenilirlik, takım ruhu, adil oyun ve hoşgörü gibi değerleri aktarır.

Allensbach pazar ve reklam ortamı analizine göre, Futbol 2022 yılında Almanya’da en popüler spordur: ankete katılan Almanların yaklaşık yüzde 30’u özellikle futbola ilgi duyduğunu söyledi. Bu arada, yaklaşık yüzde 13’ü kayakla atlama sporuna özel ilgi gösterirken, yaklaşık yüzde 12’si özellikle Biatlon’a ilgi duyuyordu. Televizyonda spor yayınlarını veya spor programlarını izlemeyi seven insan sayısı 17,57 milyon civarında</p>
      
     <h2>Alman Spor Geçmişi</h2>
<p>1780-1815 yılları arasında idealist bir insan imajı ve yeni bir eğitim ideali ortaya çıktı. Burada spor ve özellikle Jimnastik önemli bir rol oynamaktadır. 1785 yılından itibaren Johann Friedrich Gutsmuth, Schnepfenthal Eğitim kurumunda pedagojik Jimnastik ve böylece ilk planlı okul Beden eğitimini geliştirdi. Alman Jimnastik hareketinin Başlatıcısı olarak kabul edilen Jimnastiğin babası “Jahn” olarak da bilinen Friedrich Ludwig Jahn, 1808’de bu hareketi doğrudan kaynakta inceledi. 1809’dan itibaren Jahn, Grau Manastırı’nda öğretmen olarak çalıştı. Orada öğrencilerini fiziksel egzersizlere, oyunlara ve açık hava hareketlerine tanıtmaya başlar.

Nazi partisinde, Alman işçi cephesinde, SA’DA, SS’DE ve Hitler Gençliği’nde spor kısmen zorunlu olarak uygulanmaktadır. Bu, ilk başta kulüplerdeki sayıların keskin bir şekilde düşmesine neden oldu. Avusturya ve Sudetenland’ın(Çekya) ilhak edilmesi nedeniyle, rakamlar kısmen tekrar keskin bir şekilde artmaktadır. 1939’dan itibaren savaş sonunda erkek üyelerin kaybına yol açtı. Birinci Dünya Savaşı’nda olduğu gibi, kadın Sporları da yeniden canlanıyor. 1938-1939 yılları arasında örgütler NSDAP’A bağımlı Parti hücreleri haline gelir ve bağımsızlıklarını kaybeder.

Savaşın sona ermesinden sonra, ilk olarak örgütlerin NSDAP’IN Parti hücreleri olarak Yasaklanması ve görevlilerin Denazifikasyonu söz konusudur. Bu nedenle, kulüplerin yeniden kurulması öncelikle bölgesel olarak gerçekleşir. Savaş sırasında ve Harabelerde yıllarca süren sıkıntılardan sonra, Aralık 1950’de Alman spor Federasyonu’nun (DSB) kurulması, yeni bir başlangıcın umut verici işaretlerinden biridir. Federal Almanya Cumhuriyeti’nin tüm spor ve spor kulüplerine aittir. Bu, Turner Birliği kampındaki uzun süren en şiddetli çatışmalardan sonra barışın geri dönmesine ve Alman Turnerbund’un büyük bir yükseliş yaşamasına neden oluyor. 1957 yılında Alman Jimnastik ve spor Federasyonu (DTSB) kuruldu.

Alman nüfusu içinde aşırı kilonun artması nedeniyle, Alman spor Federasyonu (DSB) 1970 yılında “Trimm Dich – Durch Sport”adlı hastalık önleme kampanyasını başlattı. Yirmi yıldan fazla bir süredir Slogan, daha fazla hareket etmek için talep ve teşviktir. 90’lı yıllardan bu yana, spor konusu çocuk, kadın, yaşlı, Göç ve Kapsayıcılık Teşviki bağlamında da büyük önem taşımaktadır. Bu nedenle, spor kulüplerinde farklı ilgi grupları için çok yönlü bir teklif var.</p>
      
     <h2>KAYNAKLAR</h2>

     <p style="text-decoration: overline;"><a onclick="location.href='https://de.statista.com/statistik/daten/studie/171072/umfrage/sportarten-fuer-die-besonderes-interesse-besteht/'">1-KAYNAK</a></p>

     <p style="text-decoration: overline;"><a onclick="location.href='https://www.bmi.bund.de/DE/themen/sport/sport-node.html'">2-KAYNAK</a></p>

     <p style="text-decoration: overline;"><a onclick="location.href='https://www.freisport.de/geschichte-breitensport-deutschland/'">3-KAYNAK</a></p>`,

      soz:`<p style="font-size: 25px;"><i><b>ALMANCA ATASÖZLERİ</b></i></p>

<p>Bu bölümün tek mahiyeti Türkçe bilen insanların Almanca atasözlerini anlamasına yönelik bir basamak oluşturmaktr. Bunun yolu elbet kelimelerin özgün anlamlarını araştırarak olabilir. Fakat bu sözlerin bireyin kendi külütüründe hangi söze tekabul ettiğini belirtmenin, anlamaya yönelik bir basamak oluşturabileceği bu çalışmada zannedilmiştir. Ve elbette, bütün Almanca atasözleri ne yazık ki burada belirtilmemiştir. Tüm bu vaziyet, deyimler için de geçerlidir.</p>

<p><b>Hochmut kommt vor dem Fall:</b> Kibir düşüşten evvel gerçekleşir.</p>

<p><b>Es ist nicht alles Gold, was glänzt.</b> Parlayan her şey altın değildir.</p>

<p><b>Der Äpfel fällt nicht weit vom Stamm:</b> Armut dibine düşermiş.</p>

<p><b>Ausnahmen bestätigen die Regel:</b> İstisnalar kaideyi bozmaz.</p>

<p><b>Aller Anfang ist schwer:</b> Bütün başlangıçlar güçtür.</p>

<p><b>Morgenstund hat Gold im Mund:</b> Erkenci kuş solucanı yakalar.</p>

<p><b>Wer rastet, der rostet:</b> Yuvarlanan taş yosun tutmaz.</p>

<p><b>Wo gehobelt wird, da fallen Späne:</b> Gülü seven dikenine katlanır.</p>

<p><b>Kindermund tut Wahrheit kund:</b> Çocuktan al haberi.</p>

<p><b>Der Ton mach die Musik:</b> Ses tonu güdüdür.</p>

<p><b>Was Hänschen nicht lernt, lernt Hans nimmermehr:</b> İhtiyar köpeğe yeni hüner öğretilemez.</p>

<p><b>Der Fisch stinkt vom Kopf her:</b> Balık basştan kokar.</p>

<p><b>was du Heute kannst besorgen, das verschiebe nicht auf Morgen:</b> Bugünün işini yarına bırakma.</p>

<p><b>Viele Köche verderben den Brei:</b> Birden fazla el yemeği bozar.</p>

<p><b>Wenn zwei sich streiten, freutscih der Dritte:</b> İkisi kavga ediyorsa, üçüncü bayram eder.</p>

<p><b>Reden ist Silber, Schweigen ist Gold.:</b> Söz gümüşse sükut altındır.</p>

<p><b>Kleider machen Leute:</b> Kıyafetler insanı baştan yapar.</p>

<p><b>Wer anderen eine Grube gräbt, fällt selbst hinein:</b> Zarar veren zarar alır.</p>

<p><b>Lieber dne Spatz in der Hand als die Tuabe auf dem Dach:</b> Eldeki bir kuş çalılıkta iki eder.</p>

<p><b>Alle Wege führ nach Rom:</b> Bütün yollar romaya çıkar.</p>

<p><b>Man soll den Tag nicht vor dem Abend loben:</b> Dereyi görmeden paçaları sıvamak.</p>

<p><b>Einem geschenkten Gaul schaut man nicht ins Maul:</b> Beleş atın dişine bakılmaz.</p>

<p><b>Eine Hand wäscht die andere:</b> Bir el diğerini yıkar.</p>

<p><b>Kleinvieh macht auch Mist:</b> Damlaya damlaya göl olur.</p>

<p><b>Wer im Glashaus sitzt, sollte nicht mit Steinen werfen:</b> Dinime küfreden bari müslüman olsa.<b>İZAH</b>(Asıl nosyon emin olmaktır: Bu herhangi işte veya konuda bilgi sahibi olmak olabilir.)</p>

<p><b>Die Katze lässt das Mausen nicht:</b> Can çıkar huy çıkmaz.</p>

<p><b>Wer zuerst kommt, mahlt zuerst:</b> Erken kalkan yol alır.</p>

<p><b>Andere länder,andere Sitten:</b> Farklı ülkeler, farklı kültürler.</p>`,

     lehce:`<p>Bir dilin lehçeleri, o dili benzersiz kılar. Bölgesel dil farklılıkları sadece heyecan verici olmayıp aynı zamanda Kültür hakkında bir fikir de vermektedir. En çok konuşulan diller gibi Almanca’nın da birçok farklı lehçesi vardır. Almanya, Avusturya ve İsviçre’nin hepsinin kendine özgü aksanlarının nasıl olduğunu görmek kolaydır. Ancak Almanya’da bile farklı bölgesel lehçeler vardır. Peki hangisi öğrenilmeye değer?</p>

<h2>1-Hochdeutsch- Standart Almanca</h2>

<p>Almanya birkaç farklı lehçeye bölünmüştür. Bunlar iki ana kategori olarak sınıflandırılır; Hochdeutsch(Yüksek Almanca) ve Plattdeutsch(Düşük Almanca). Bunlardan Hochdeutsch daha önemlidir. Bu lehçe daha çok Hochdeutsch olarak bilinir. Hochdeutsch ile ilgili Kuzey Almanya’dan geldiğini düşünebilirsiniz ancak durum tam tersidir. Hochdeutsch, Alplerin ve yaylaların bulunduğu Güney Almanya’dan geliyor. Bugün Almanca hakkında bildiğiniz bilgiler bu Hochdeutsch’a dayanır. Hochdeutsch okulda öğretilen lehçedir. Eğer Alman televizyonunu veya haberlerini izliyorsanız, oyuncular ve sunucular muhtemelen bu lehçeyi konuşurlar. Bu en çok konuşulan Almanca lehçesidir.</p>

<h2>2- Plattdeutsch-Kuzey Almanya Lehçesi</h2>

<p>Bu lehçe Almanyave Hollanda’nın kuzey kesminden gelir. Telaffuz açısından Hochdeutsch’a daha yakındır. Bu iki lehçenin yazılış biçimleri tamamen aynıdır. Kuzey Almanya Lehçesi giderek daha az insan konuştuğu için kaybolan bir lehçedir. Bu yüzden bu lehçeye Düşük veya Alçak Almanca da denilmektedir. Plattdeutsch’a örnek olarak; Türkçe: Ağız, Hochdeutsch: Mund, Plattdeutsch: Sabbel.</p>

<h2>3-Schwiizerdütsch-İsviçre Almancası</h2>

<p>İsviçre Almancası, doğal olarak İsviçre’nin lehçesidir. Fransızca ve İtalyanca, İsviçre’nin resmi dilleri olduğundan bu Almanca lehçesi diğerlerinden çok daha farklıdır. Komşu diller telaffuz üzerinde kesinlikle izlerini bıraktılar. İsviçre-Alman lehçesini anlamak, diğer bölgelerden Almanca konuşanlar için bile zordur. Schwiizerdütsch’e örnek olarak; Türkçe: Kova, Hochdeutsch: Eimari, Schwiizerdütsch: Chübel.</p>

<h2>4-Bayerisch-Bavyera(Bayern) Lehçesi</h2>

<p>Bavyera Güneydoğu Almanya’dadır ve Bayerisch yazıldığında standart Almancaya çok benzer, ancak ünlülerin telaffuzunda farklılık gösterir. Bavyera’daki herkes standart Almancayı okuyabilir, yazabilir ve anlayabilir. Ancak, nadiren konuşma fırsatı bulurlar. Almanca / Hochdeutsch bu nedenle bu bölgede “Schriftdeutsch” veya Yazılı Almanca takma adını almıştır. Bayerisch’e örnek olarak; Türkçe: Sincap, Hochdeutsch: Eichhörnchen, Bayerisch: Oachkatzlschwoaf.</p>

<h2>5-Österreichisches Deutsch-Avusturya Almancası</h2>

<p>Avusturya Almancası diğerlerinden biraz farklıdır. Dilbilgisinde çoğunlukla aynı olsa da, Avusturya Almancası benzersiz bir kelime dağarcığına sahiptir. Bu Amerikan ve İngiliz İngilizcesi olarak düşünülebilir. Amerikalılar chips, İngilizler crisps der. Ancak her iki tarafın da bahsettiği şey aynıdır. Aynı durum Avusturya ve Almanya lehçeleri için de geçerlidir. Misal erik kelimesi Hochdeutsch olarak Pflaume, Österreichisches Deutsch olarak Zwetschge’dir. Österreichisches’e örnek olarak; Türkçe: Selam!, Hochdeutsch: Grüß Gott!, Österreichisches: Griaß di!</p>

<h2>6-Sächsisch-Yukarı Sakson Lehçesi</h2>

<p>Saksonya, Almanya’nın doğu bölgesinde bir eyalettir, bu nedenle Säschsisch öncelikle doğuda konuşulur. Dil, bilimsel olarak standart Almanca ve diğer lehçelere oldukça benzer, ancak birçok Almanca konuşanın güçlü duygulara sahip olduğu bir aksanı vardır. Sächsisch’e örnek olarak: Türkçe: Kafa, Hochdeutsch: Kopf, Sächsisch: Nischl.</p>

<h2>7-Berlinerisch- Berlin Almancası</h2>

<p>Berlin, Almanya’nın başkentidir. Zengin tarihi ve gelişen sanat sahnesiyle uluslararası bir merkez hâline geldi. Bu sebeptendirki Berlin lehçesinin temsil ettiği vurgu yavaş yavaş kaybolmaktadır. Berlin’in modernleşmesi onu küresel bir şehir haline getirdiğinden tüm yaşamları boyunca orada kalmış sadece birkaç kişi yaşıyor. Eğitimde de Hochdeutsch öğretilmesi bu lehçenin popülaritesini azaltmaktadır. Berlinerisch’e örnek olarak Türkçe: Gıcık İnsan, Hochdeutsch: hinterhältiger Mensch, Berlinerisch: Aas</p>

<h2>8-Pennsylvania Dutch-Pensilvanya Almancası-(Pennsilfaanisch Deitsch)</h2>

<p>Pennsylvania Dutch’ın aslında bir Alman lehçesi olduğunu pek kimse bilmiyor. ”Dutch” aslında ”Deutsch” olması gerekir. Alman göçmenlerin oluşturduğu bu Amerikan azınlık dili, Amerika Birleşik Devletleri’nin doğu kıyısında hâlâ yaşıyor. Pennsilfaanisch’e örnek olarak; Türkçe: Kaplumabağa, Hochdeutsch: Eine Schildkröte, Pennsylvanisch: En Shil-grut.</p>

<p style="font-size: 21px;"><b>Bu sayfada Referans alınan Kaynaklar:</b><p>

  <p style="text-decoration: overline;"><a onclick="location.href='https://www.optilingo.com/blog/german/german-dialects/'">1-KAYNAK</a></p>`,

   diltarih: `<p>Waldmann'ın 2020'de yazdığı makale'de o zamanı kastederek günümüzde 100 milyon kişi ile Almanca'nın Avrupa'nın en büyük dili olduğunu söylemiştir. Ancak bu dil sahip olduğu geniş Grammer yapısı ve kelime dağarcığı ile nereden geldi ve bugünkü hâline nasıl geldi?</p>
      <p style="font-size: 25px"><i><b>Urgemanische Sprache-Proto Germen Dili</b></i></p>
<p>Henüz Almanca mevzu bahis bile değilken MÖ 5. Yüzyılı arasında İlk Fonetik Değişimle bir ilkel Germen dili, Hint-Avrupa dil ailesinden ayrıldı. Bu ilk fonetik değişimi ise belirli seslerin zamanla değiştiği bir değişim sürecidir. Bu ilkel yada Proto-Germen dilinin ayrıntılı olarak nasıl inşaa edildiği pek iyi bilinmemektedir çünkü bu döneme ait yazılı kanıtlar çok nadirdir. Bu sebeple günümüzde yalnızca yeniden inşa edilebilir. Önceki Germenler mezarlarında ve kült nesnelerinde n fazla birkaç Runik yazıt bıraktılar, hikayeler ve ilahiler ise sözlü olarak aktarıldı. Bununla birlikte brauda(Brot-Ekmek) veya Gronpan(Griffin) gibi bazı germen terimleri şekil değiştirerek günümüze kadar gelmeyi başarmıştır.</p>
      <p style="font-size: 25px"><i><b>Diutisc-Althochdeutsch-Eski Standart Almanca (MS 600-1050)</b></i></p>
<p>Alman halkının göçü ve Hristiyanlığın yayılması sırasında, Alman dilinin gerçek tarihi MS 600 civarında başladı. Bir grup Batı Germen Dili, İkinci Fonetik Değişim olarak adlandırılan diğer Germen Lehçelerinden ayrıldı ve başlıkta da geçen Eski yüksek Almanca denilen şey ortaya çıktı. İkinci Fonetik Değişim, Alman tarihinde önemli bir dönüm noktasıdır. Bugün Pfanne, Zeit ve Tochter denilmesinin sebebi budur. Oysa Hollandaca ve İngilizce olarak sırasıyla Pan, Tijd/Time ve Dochter/Daughter denir. Ek olarak bu değişim süreci Almanca'yı farklı lehçelere bölmüştür. Örnek olarak kuzeydeki Düşük Almanca, İngilizce'de olduğu gibi eski sesleri (yani "pf" yerine "p" vb.) korumuştur. Bu durum günümüzde de İskandinav Lehçelerinde ve dillerinde görülmektedir.</p>
      <p style="font-size: 25px"><i><b>Herzeliebez vrouwelin-Mittelhochdeutsch-Orta Zaman Standart Almancası(MS 1050 – 1350)</b></i></p>      
<p>Ritter, Minnesang ve Feodalizm; Yüksek Orta Çağ ekonomik ve kültürel yükseliş olarak değil de aynı zamanda politik parçalanma ile de karakterize edilmiştir.1050 yılından itibaren konuşulan alanlar ayrı ayrı bireysel egemenliğini ilan etmiş alanlarından oluşan bir yama halısına ayrıldı. Alman dili aynı şekilde tekrar gelişti ve her bölgenin kendisine ait lehçesi, her hanedanın kendi mahkeme şiiri vardı. Örneğin, Staufen İmparatorunun sarayında bu dönemde Nibelungenlied, Parzival ve Tristan gibi önemli destanlar ortaya çıktı. Ayrıca Walter von der Vogelweide Minnesangı ''Herzeliebez Vrouwelin'' gibi Orta Standart Almanca'da çırptı. Orta-yüksek Almanca, günümüz Almancasına çok benziyordu. Bir yandan Umlautlar (ä, ö, ü) tam çiçeklenmeye başladı, diğer yandan gerilmemiş heceler zayıfladı ve gerilmemiş son hecelerdeki sesli harfler zayıfladı (Eski Standart Almanca'da hōran, Orta Zaman Standart Almancası'nda hœren-hören olmuştur). Telaffuzdaki bu değişiklik gerçek bir zincirleme reaksiyona yol açtı. Sesli harflerin zayıflaması, daha önce farklı çekim sonlarının(Kasusendung) birbirine benzemesine neden oldu ve bu da bir ismin durumunu göstermeye devam etmek için makaleleri gerekli kıldı.</p>
      <p style="font-size: 25px"><i><b>Frühneuhochdeutsch-Erken Yeni Yüksek veya Standart Almanca</b></i></p>
<p>Erken Yeni Yüksek Almanca ayrı bir döneme değer. Çünkü bu dönemde Almanca dil alanında önemli kültürel değişiklikler meydana geldi. Martin Luther, 1545 tarihli Kitab-ı Mukaddes çevirisiyle Almanca kelime dağarcığını ''Denkzettel, Feuereifer ve Lästermaul'' gibi sayısız sözcükle zenginleştirdi. Daha önce Ziege-Keçi (Geiss yerine) veya Ufer-Kıyı (Gestade yerine) gibi bölgesel ifadeler de tüm Almanca dil bölgelerinde tanınmaya yardımcı oldu. Fakat her şeyden önce, tek tip bir Almanca dilinin temelini attı. Çünkü Kitab-ı Mukaddes'in Almanca metninin yayılmasıyla Güney ve Orta Alman Lehçelerine dayanan Yeni Yüksek Almanca, Kuzey Almanya'da da giderek daha fazla hakim oldu. Johannes Gutenberg'in 1446 civarında kitap basımı gibi teknik yenilikler, Alman yazılı dilinin önem kazanmasına neden oldu. Tüm Lehçelerin konuşmacıları tarafından anlaşılan standart bölgesel diller oluşturuldu. Öte yandan, Aşağı Alman lehçeleri, Orta Çağ'da hala Alman lehçeleri arasında yer alan ve 16. yüzyılın sonunda bağımsız bir dil haline gelen Hollandaca hariç kendi yazılı dillerini geliştirmediler.</p>
      <p style="font-size: 25px"><i><b>Ulusal Dil Olarak Almanca 19. ve 20. Yüzyıllar</b></i></p>
<p>Almanca konuşulan bölgelerin çoğunluğu 1871'de Alman Reich'i oluşturmak üzere bir araya geldiğinde, yeni ulus devletin dili için elbette tek tip bir yazım gerekliydi. Böylece Konrad Duden, 1880 yılında Alman dilinin tam ortografik sözlüğünü yayınladı. 1996 yılında yapılan Yazım Reformuna kadar uygulanmıştır. 19.yüzyılda Sanayi Devrimi ile birlikte birçok teknik sözcük (Elektrizität-Elektrik, Waschmaschine-Çamaşır Makinesi, Eisenbahn-Demir Yolu) toplumsal yaşam alanında ise İngilizce ve Fransızcadan (Lokomotive-Lokomotif, Billet-Kütük, Telegramm-Telgraf) ödünç alınmıştır. 20. Yüzyıl'da da yeni icatlar ve toplumsal değişikler Almanca kelime dağarcığına ''Computer-Bilgisayar, Job-İş ve Team-Takım'' gibi çok sayıda İngilizce ödünç kelime eklenmesini sağlamıştır. 20. yüzyılda telaffuz konusunda pek bir şey yapılmamış olsa da (sadece yuvarlanmış "r", daha çok rendelenmiş bir "r" ye yol açtı, Alman vakalarında sadeleştirme eğilimi gözlemlenebilir: Genitif (en azından konuşulan dilde) daha az ve daha az kullanılır, bunun yerine genellikle Dativ, örneğin "wegen dem Wetter" (Genitiv wegen des Wetters) ile değiştirilir.</p>
      <p style="font-size: 25px"><i><b>Günümüz Almancası Konuşanları Kadar Çeşitli Hâli</b></i></p>
<p>İngilizce, Fransızca ve İspanyolca'dan farklı olarak Almanca, hiçbir zaman dünya dili hâline gelmedi. Bununla birlikte Alman dili, tekdüze olmaktan uzaktır. Çünkü yüzlerce ortaya çıkan Alman lehçeleri bugün hâlâ vardır. Büyük diyalektik çeşitlilik, Almanca'da bir ve aynı şey için sık sık birçok terimin bulunmasından da sorumludur. Sadece "bequeme Hausschuhe" ifadelerini düşünün: Schlappen, Latschen, Pantoffeln, Puschen, Finken, Patschen...</p>

<p>Tüm dillerin doğasında olduğu gibi Almanca da kaçınılmaz olarak değişmeye devam ediyor. Bunun yanında yazı dili bile yeniliklerden uzak durmuyor. Haziran 2017'de Alman yazımında bugüne kadarki en son harf tanıtıldı. ß harfi yani okunuşuyla Eszett harfi.</p>

<p>Bu konuda gördüğünüz bu yazılanlardan da referans alınan Sarah Waldmann durumu şöyle görmektedir; ''Genitiv, Dativ ve Akkusativ bir noktada tamamen kaybolacak ya da karmaşık hece Yapılarımızla üçüncü bir ses kayması temizlenecek, ancak büyük-büyük-büyük torunlarımız muhtemelen en erken öğreneceklerdir.''</p>

<p style="font-size: 22px;"><b>KAYNAKLAR</b></p>

<p style="text-decoration: overline;"><a onclick="location.href='https://de.babbel.com/de/magazine/geschichte-der-deutschen-sprache'">Sarah Hanım:</a></p>`,
    
       deyim:`<p style="font-size: 25px;"><i><b>ALMANCA DEYİMLER</b></i></p>
      <p>Bütün deyimleri ne yazık ki barındırmaz.</p>
      <p><b>Mir fällt nichts ein:</b> Anlamıyorum.</p>
      <p><b>Mit Engelsgeduld:</b> Eyüp Sultan sabrıyla.</p>
      <p><b>Der Faden verlieren:</b> Delirmek.</p>
      <p><b>Alles in Butter:</b> Yerli yerinde.</p>
      <p><b>Äpfel mit Birnen vergleichen:</b> Sapla samanı ayırt etmek/Elmalarla armutlar kıyaslanamaz.</p>
      <p><b>Am seidenen Faden hängen:</b> Topun ağzında olmak.</p>
      <p><b>Der Affe laust mich:</b> Bir yaşıma daha girdim.</p>
      <p><b>Pech gehabt:</b> Kötü Talih.</p>
      <p><b>Mit Kannonen auf Spatzen schießen:</b> Kuşlara toplarla saldırmak.</p>
      <p><b>Murphy's gesetz:</b> Aksilik yasası.</p>
      <p><b>Mit allen wassern gewaschen:</b> Kitabını yazmak.</p>
      <p><b>Mir fällt ein Stein vom Herzen:</b> Yüreğime su serpildi.</p>
      <p><b>Lampenfieber:</b> Sahne heyecanı/korkusu.</p>
      <p><b>Jemanden die Leviten:</b> Birisine temiz fırça çekmek. <b><i>MUAMMA:</i></b>(kitab-ı mukkadeste Levililer bölümü konu alınmıştır??)</p>
      <p><b>Paroli bieten:</b> Efelenmek. <b>MAHİYET; TURSUN'UN NOTU:</b> Paroli; bir kumar sistemidir.</p>
      <p><b>Lunte riechen:</b> Bir bit yeniği sezmek .</p>
      <p><b>Pünktlich wie die Maurer:</b> Dakikası dakikasına (Mason gibi).</p>
      <p><b>Das ist mir Wurst:</b> Takmıyorum.</p>
      <p><b>Ich verstehe nur Bahnhof:</b> Anladıysam Arap olayım.</p>
      <p><b>Ich glaub mein Schwein:</b> Vay Vay Vay(Şaşırma).</p>
      <p><b>Mein Fehler:</b> Benim hatam.</p>
      <p><b>Fix und Fertig sein:</b> Turşusu çıkmak.</p>
      <p><b>Nach Schema F:</b> (rutin) Yasalara göre.</p>
      <p><b>Nigelnagelneu sein:</b> Yepyeni olmak.</p>
      <p><b>Wie der Schneider von Ulm sein:</b> Ulm terzisi gibi olmak.(Albrecht Berblinger)</p>
      <p><b>Wie im Schlaraffenland leben:</b> Bir eli balda bir eli yağda.(Yer: Kokanya)</p>
      <p><b>Wie Gott in Frankreich leben:</b> Lüks içinde yaşamak.</p>
      <p><b>Wolf im Schafpelz:</b> Koyun postuna bürünmüş kurt.</p>
      <p><b>Wie Kraut und Rüben:</b> Allak bullak.</p>`,

      kulturdil: `<p><b>ALMANCA'NIN KÜLTÜREL PAYESİ</b></p>
      <p>Öncelikle dil, resmi olarak veya dilsel işaretlerin yapısal bir sistemi olarak kabul edilmez. Bunun yerine, sosyal amaçlar ve kültürel bağlamlarda kullanılan bir iletişim aracı olarak anlaşılmaktadır. Bu nedenle odak noktası, dil kullanımının çeşitli ortamlarında, geleneksel ve bireysel davranış kalıplarına, sosyal normlara ve söylem topluluklarının kültürel değerlerine nasıl yansıdığıdır. Bir çevirinin arkasında genellikle A’dan B’ye basit bir aktarımdan daha fazlası vardır. Bir kelime bile hiçbir zaman başka bir dile tam olarak eşdeğer bir şekilde aktarılamaz, çünkü kültürel etkiler nedeniyle bile bilinen bir kelimenin anlamı değişebilir. Bu nedenle, dil süreçlerine Danışmanlık yaparken ve dil verilerinin toplu tedavisinde bu yönleri dikkate almak daha önemlidir.</p>
      <p>Johannes Ebert, Almanca dili için şunları söylemektedir; “Küreselleşme, giderek daha fazla dilin yok olmasına neden oluyor. Bu bir gün Almanca için de geçerli olacak, çünkü Avrupa’da sadece İngilizce iletişim kurulacak mı? Hiç sanmıyorum. Almanca, Avrupa’nın en çok konuşulan ana dilidir ve canlı bir şekilde gelişmeye devam etmektedir.”</p>
      <p>Bir dili gerçekten tanımlayan şey, genellikle kendi dilinden çok farklı olan kültür çevrelerinde ortaya çıkar. Bu durumda örnek olabilecek Japonya ülkesi vardır. İlk göze çarpan dilsel özelliklerden biri, yay ya da neredeyse melodik konuşma ritmi değil, herhangi bir Japonca konuşmada eksik olmaması gereken sürekli, doğrulayıcı “mh” idi! Almanca’da ise ” ja…mh….mh…ja…”, Japonca’da ihmal etmek anlamına gelir: seni dinlemiyorum!</p>
      <p>Almanca dili için en kritik etki ve öneme sahip olan Almanya federal hükümeti, resmî sitesinde bizzat şunlar yazılmıştır; “Alman dilinin öğretilmesi ve bakımı Federal Hükümet için büyük önem taşımaktadır. Federal Hükümet, kültürel, araştırma ve dış politika çerçevesinde, genel devlet önemine sahip kurumları ve projeleri teşvik etmekte ve böylece Alman dilini kültürel bir varlık olarak sürdürmeyi ve korumayı ve sürekli değişim ve gelişme sürecine eleştirel bir şekilde eşlik etmeyi hedeflemektedir. Bununla birlikte, anayasal olarak belirlenmiş görev bölünmesine göre, Almanca dil düzenlemelerinin sorumluluğu öncelikle eyaletlere aittir. Federal hükümetin temel yasaya göre – Federasyonun Hukuk ve İdari dili gibi Alt alanlar dışında – yasama yetkisi yoktur.“</p>
      
      <p style="font-size: 20px;"><b>Bu Sayfada Kullanılan Kaynaklar</b></p>

      <p style="text-decoration: overline;"><a onclick="location.href='https://www.bundesregierung.de/breg-de/bundesregierung/bundeskanzleramt/staatsministerin-fuer-kultur-und-medien/kultur/deutsche-sprache-1891474'">Almanya Federal Hükümeti Resmî Sitesi:</a></p> 

      <p style="text-decoration: overline;"><a onclick="location.href='https://www.goethe.de/de/uun/prs/int/gen/20490256.html'">Johannes Ebert; Die Globalisierung führt dazu, dass immer mehr Sprachen aussterben. Gilt das eines Tages auch für Deutsch, weil in Europa nur noch auf Englisch kommuniziert wird?</a></p>`,

       mimar:`<p>Frankfurt’taki modern gökdelenler, kuzeyde yıllardır bulunan tuğla binalar, Münih’teki klasik müze tapınakları gibi eserlere bakılırsa Almanya’nın renkli bir mimari tarihe sahip olduğu söylenebilir. Özellikle Berlin gibi tarihsel olarak önemli şehirlerde etkileyici ve çok yönlü yapı manzarası vardır. Brandenburg Kapısı gibi turist çeken yerlerin dışında Başkent, aynı zamanda Gründrzeit’ın blok kenar mahallerine sahip geniş kapsamlı yapısıyla da bilinir. Rheinmetropole yani Köln denilince dünya çapında Köln Katedrali ve bir gotik mimari yapısı akla gelir. Frankfurt’ta ise herkesin aklına hemen 20. yüzyılın gökdelenleri gelir. O hâlde hangi mimari üslup ve özellikler Alman metropolleri için tipiktir?1</p>
      <h2>KARL FRİEDRİCH SCHİNKEL’DEN NORMAN FOSTER’A-BAROCK’TAN MODERN MİMARİYE...</h2>
      
      <p style="font-size: 22px;"><b><i>BERLİN-STADT DER ARCHİTEKTUR-MİMARLIK ŞEHRİ</i></b></p>
      <p>Tek başına Berlin bile mimarlık hayranlarını haftalarca orada tutabilecek zenginliğe sahiptir. Şehrin en güzel meydanlarının birisinde bulunan Fransız Katedrali, Alman Katedrali, Gendarmenmarkt ve daha fazlası…</p>
      <p>Mimar Friedrich Schinkel, Berlin’de Klassizmin başyapıtları olarak kabul edilen Neue Gar veya Alte Museum’u gerçekleştirdi. Bay Norman Forest, Almanya Bundestag’ın babası gibi görülebilecek ve yeniden canlandırılan Reichstag’ın 1999 yılından beri ziyaretçlere erişilebilir olan cam kubbeyi genel kurul salonunun üzerine yerleştirilmesine izin vermiştir.</p>
      
      <p style="font-size: 22px;"><b><i>Elbphilharmonie: Hamburg’un Simgesel Yapıları</i></b></p>
      <p>Hamburg’un yeni dönüm noktası, 2017 yılında açılan Elbphilharmonie, Hafencity’de heybetli bir cam yapıya sahip ve eski bir mağazanın tuğla kaidesi üzerine inşa edilmiş bir Konser Salonu. Almanya’nın en büyük ikinci kentinin daha eski bir simgesi UNESCO tarafından Yüceltilmiş ve Mimar Fritz Höger tarafından eski şehrin Kontorhaus bölgesinde gerçekleştirilen Chilehaus, 1920’lerin tuğla Dışavurumculuğunun etkileyici bir örneğidir. Şili’den zengin bir adam olarak dönen ve inşa etmek için 4,8 milyon tuğla satın aldığı iddia edilen Hamburglu bir tüccarın bağışına borçludur. Binanın Tepesi bir gemi yayı andırıyor ve Avrupa’nın en sivri cephe açılarından biri. Üst katlar ofis olarak kiralanırken, avluya mağazalar, kafeler ve restoranlar ile serbestçe erişilebilir.</p>
      
      <p style="font-size: 22px;"><b><i>Dessau Kenti</i></b></p> 
      <p>Orta Çağ tamamlanmış bir dönem olarak kabul edilebilir, Bauhaus’un Mirası ise günümüze kadar Sanat, Mimarlık ve kültürde yankılanır. 1919 yılında Gropius tarafından kurulan okulun büyük bir inşaat Topluluğu, Berlin’in güneybatısındaki Dessau’da bir buçuk saatlik bir sürüş mesafesindedir.</p>
      
      <p style="font-size: 22px;"><b><i>Truss Hayranları İçin: Quedlinburg</i></b></p>
      <p>Ortaçağ yapılarına meraklıysanız, Bavyera’daki küçük Nördlingen kasabasında da haklısınız. 2,6 kilometre boyunca, eski, kapalı ve 1400 yılı civarında kapalı olan şehir duvarı halkası tamamen erişilebilir. Bu da Almanya’da eşsiz.</p>
      
      <p style="font-size: 22px;"><b><i>Mühendis Aklı: Göltzschtalbrücke</i></b></p> 
      <p>1851’den beri vogtland, Saksonya’daki Reichenbach yakınlarındaki derin bir Vadiyi kapsayan köprü Yapım sanatının bir örneği: dünyanın en büyük tuğla Köprüsü. Göltzschtal Köprüsü, tamamlandığında 78 metre yüksekliğindeki dünyanın en yüksek Demiryolu Köprüsüydü. Alman mühendis Johann Andreas Schubert tarafından tasarlandı. Yürüyüş yolları binlerce Kemerden oluşan yapı boyunca devam ediyor. Köprünün 150 metreden muhteşem manzarası için komşu Mylau kasabasında bir balon yükselir. Event karakteri var.</p>
      
      <p style="font-size: 22px;"><b><i>Konutlar-Klasik Modernliğin Simgesi</i></b></p>
      <p>Berlin ve Hamburg’un yanı sıra, diğer büyük Alman şehirleri de mimari güzellikler sunuyor: Düsseldorf, örneğin Frank O’gehry’nin çarpık açılı binaları, Münih, Herzog ve Pierre de Meuron’un dış cephesinde renkli ışıklı Yastıklarla Stadyumu, Frankfurt am Main Avrupa’nın en yüksek gökdeleni, Sir Norman Foster tarafından tasarlanan Commerzbank Kulesi. Dresden, köpek kulübesi, kıyafet Evi ve yeniden inşa edilen Frauenkirche dahil olmak üzere Barok binaların bolluğu ile çekiyor.</p>
      
      <p style="font-size: 20px;"><b>Bu sayfada referans alınan kaynaklar:</b></p>

      <p style="text-decoration: overline;"><a onclick="location.href='https://www.mcmakler.de/magazin/architektur-in-deutschland'">1-KAYNAK</a></p>

      <p style="text-decoration: overline;"><a onclick="location.href='https://www.germany.travel/de/staedte-kultur/von-schinkel-bis-foster-faszinierende-architektur.html'">2-KAYNAK</a></p>`,

      teknik: `<h2>ALMANYA TEKNİK VE SANAYİSİNDEN ÖN BİLGİLER</h2>
      <p>Almanya’nın on yıllardır belirlediği Sanayi çağının geride bıraktığı binalar ve tesisler ve tüm mahalleler her zaman, bazı kişiler için etkileyicidir. Endüstriyel miras, Almanya’nın imajını da görsel olarak şekillendirmeye devam ediyor; terk edilmiş fabrikalar, kullanılmayan fabrika salonları, işçi yerleşimleri, madenler, madencilik sonrası manzaralar her yerde bulunabilir. Bu yapılar, yakın Almanya tarihi hakkında çok şey söyleyen, bölgelerin ve insanların nasıl geliştiğini gösteren çağdaş tanıklardır. Bu yerler kırsal bölgelerde de bulunabilir.1</p>
      <h2>Önemli Kişiler</h2>
      <p><b>1-Carl Friedrich Benz Carl Friedrich Benz (1844-1929)</b></p>
      <p>teknoloji tarihinin en önemli Mucitlerinden biridir. Mühendis Carl Benz’in 1 numaralı 1885 numaralı Patent motorlu otomobili ilk modern otomobil olarak kabul ediliyor. Daimler AG’DE(Mercedes-Benz Eski Adı), Otomotiv Mühendisliği öncüsü Carl Benz’in İnovasyon ruhu canlı tutuluyor. Stuttgart Bölgesi Otomobil endüstrisini Carl Benz geleneğinde görülüyor.</p>
      <p><b>2-Ferdinand Graf von Zeppelin Ferdinand Graf von Zeppelin (1838-1917)</b></p>
      <p>"Zeppelin" zeplini, Alman ve uluslararası zeplin gemilerini birbirine bağlar. Süvari Generali ve zeplin Tasarımcısı Graf Zepelin Konstanz Gölü’nde doğdu ve ilk Zeplinleri orada yükseldi. Hava taşımacılığının gelişiminin biyografik ve tarihi yerleri Almanya ve Danimarka’da kuzeye doğru yer almaktadır.</p>
      <p><b>3-Karl Wilhelm Otto Lilienthal Karl Otto Lilienthal (1848-1896)</b></p>
      <p>muhtemelen bir uçakla (asılı Planör) başarılı ve tekrarlanabilir bir şekilde kayma yapan ilk insandı. Otto Lilienthal, Kuş uçuşu ile ilgili deneysel hazırlık çalışmaları ile modern Havacılık için ön koşullar yarattı.</p>
      <p><b>4-Gottlieb Daimler Gottlieb Daimler (1834-1900)</b></p>
      <p>teknoloji tarihinin en önemli Mucitlerinden biridir. Mühendis, tasarımcı ve Sanayici, ilk yüksek hızlı benzinli motoru ve içten yanmalı motorlu ilk dört tekerlekli motorlu aracı geliştirdi. Daimler AG’de(Mercedes-Benz Eski Adı) Otomotiv üretim Öncüsünün İnovasyon ruhu canlı tutuluyor.</p>
      <p><b>5- Terzi Albrecht Berblinger Ulm Terzisi Albrecht Berblinger (1770-1829)</b></p>
      <p>bir uçuş cihazı tasarladı. 31 Mayıs 1811’de Berblinger ilk kez Kartal Kalesi’nden Tuna Nehri üzerinde uçmaya çalıştı ve suya düştü. 1986 yılında, uçuşa elverişlilik kanıtlandı. Uçak Belediye binasında hâlâ görülebilir.</p>
      <p><b>6-Otto von Guericke Otto von Guericke (1602-1686)</b></p>
      <p>aynı zamanda hukukçu, fizikçi ve mucit olan nadir Alman Siyasetçilerden biriydi. Magdeburg yarım küreleri ile yapılan hava basıncı deneyleri onu tanıdı. Magdeburg, Eski Belediye Başkanı Otto von Guericke’nin anısını canlı tutan tek kişi değil.</p>
      <p><b>7-Krupp Ailesi</b></p>
      <p>Adeta bir girişimci hanedanı olan Krupp Ailesi Essen ve Ruhr bölgesini şekillendirdi. Ekonomik güç ve etki, günümüze kadar devam eden bir efsane yarattı. Nasyonal sosyalizm döneminde kurumsal hayırseverliğin ve adaletsizliğin tanıklıkları da aynı şekilde not edilebilir. Essen ve Duisburg’da binalar, anıtlar, sanayi tesisleri ve halefi şirketler büyük bir Krupp endüstri geleneğini hatırlatıyor.</p>
      <p><b><i>KAYNAKLAR</i></b></p>
      <p>1- https://www.kulturrat.de/themen/texte-zur-kulturpolitik/industriekultur-kulturpolitische-bilanz-und-mehr/</p>
      <p>2- ÖNEMLİ KİŞİLER: https://www.kulturreise-ideen.de/technik/personen-2.html</p>`,

      tarih: `<p><b>GERMENLER VE ORTA ÇAĞ ALMANYA'SI TARİHİ</b></p>
      <p><b>Germenler-Germanien</b></p>
      <div id="image-container">
      <img class="kalmip" loading="lazy" src="https://www.planet-wissen.de/kultur/voelker/germanen/germanenstaemmeakggjpg100~_v-gseapremiumxl.jpg" alt="hjj">
      </div>
      <p>“Germanien” terimi, birkaç tarih öncesine dayanıyor ve Yunanca “Germanoi”den gelmektedir. Ancak kesin kökenleri bilinmemektedir. Bununla birlikte, kavramın kökeninin Kelt dillerine dayandığı ve ”Schreienden”(göze batanlar) yani ya da ”Nachbarn”(komşular) kelimelerinden türetildiği varsayılmaktadır. Roma İmparatorluğu döneminde bu terim, iki Roma Vilayetini ifade ediyordu: biri “Germania superior”, diğeri ise “Germania inferior”. Bu, Ren Nehri’nin sol tarafında Roma tarafından işgal edilen bölgelere işaret ediyordu. O zamanki Alman toprakları “Germania magna “veya” Germania libera ” olarak adlandırılmıştır. Daha sonra, yaklaşık 9. yüzyılda, Frenk İmparatorluğu bölündüğünde, Germania çoğunlukla Doğu kısmı veya Kutsal Roma İmparatorluğu’nun Alman kısmı için kullanıldı. Bu nedenle, Germenlerin, yani eski Alman tarihi, daha çok topraklarla sınırlıdır, daha az katı bir Halk ya da tek bir katı kültür ile sınırlıdır.</p>
      <p><b>Orta Çağ Almanyası-Deutschland und das Mittelalter-(Wege aus der Finsternis)</b></p>
      <p>Burada Orta Çağ zamanı, 800 ve 1500’lü yıllar olarak kapsama alınmıştır. Orta Çağ’ın başlarında önemli bir olay, Karolenj Fransa’nın dağılmasıydı. Ardından batı ve doğu Fransa’ya bölündü. Daha sonra bu iki taraftan Fransa ve Almanya oluşacaktı. Doğu Fransa’da bağımsız bir Alman kimliği henüz mevcut değildi, ama Eski Yüksek Alman Dili, birleştirici bir karaktere sahip bir dil olarak gelişti. Politik olarak, Liudolfinger Hanedanı 10. yüzyılda Ostfranken(Doğu Frankonya)’da güç kazandı ve Roma İmparatoru oldu. Böylece, daha sonra Kutsal Roma İmparatorluğu olarak bilinen Roma-Alman İmparatorluğu kuruldu. Ortaçağda Roma-Alman İmparatorluğu’nun var olmasına rağmen bu henüz birleşik bir Almanya olarak kabul edilemez. Güç, birçok toprak sahibi arasında daha fazla dağıldı, bu da bugün Alman Federalizminde hala görülebilir. Farklı Prenslikler arasında da birçok çatışma vardı, bu yüzden sürekli bir birlik yoktu.</p>
      <p><b>ORTA CAGDAN NAZI ALMANYASINA KADAR TARIH</b></p>
      <p>1500-1558: Charles V: Kutsal Roma İmparatorluğu'nun son güçlü İmparatoru; Luther ve Reformasyona karşı savaştı. Almanya onun için sadece Burgonya/ İspanyol İmparatorluğunun bir yan Ülkesiydi.</p>
      <p>1517: Martin Luther (1483-1546) 95 Thesen gegen den Ablass [= günahkarların Araf'taki zamanını kısaltmak için kilise tarafından satılan (genellikle yozlaşmış) hoşgörüler].</p>
      <p>1534: Luther, İncil'in Almanca'ya çevirisini bitirir.</p>
      <p>1555: Augsburg Dini barışı: V. Charles Protestanlığa karşı mücadeleyi kaybeder ve Alman prenslerinin kendi toprakları için Protestanlık ile Katoliklik arasında seçim yapmalarına izin vermelidir. Almanların çoğu, kısmen Almanların Roma Kilisesi tarafından sömürülmesine tepki olarak Protestanlığı seçmektedir.</p>
      <p>1618-1648: Otuz Yıl Savaşı. Savaş bir inanç Savaşı olarak başladı ve Katolik Habsburg imparatorları (İspanya, Avusturya, Bohemya, İtalya ve Güney Hollanda'nın büyük bir bölümünü kontrol eden ve Katolik Alman Prenslerinin yardımıyla Almanya'daki geleneksel güçleri için savaşan) ile Protestan Fransızlar ve İsveçliler (Protestan Alman Prenslerinin yardımıyla) arasında bir güç mücadelesi olarak sona erdi. Savaşın sonuçları: Din özgürlüğü-Alman topraklarının imhası ve Yoksullaşması-Fransa Avrupa'nın en güçlü ülkesi olacaktır.-Kutsal Roma İmparatorluğu anlamsız bir formalite olacaktır.</p>
      <p>1683-1714: Türklere karşı yapılan savaşlarda ve İspanyol ardıl Savaşında Avusturya, Avrupa'nın büyük bir gücü haline geldi.</p>
      <p>1756-1763: Yedi Yıl Savaşı. II. Friedrich (1712-1786) döneminde Prusya, Avrupa'nın büyük bir gücü haline geldi ve bundan sonra giderek artan bir şekilde Avusturya'ya karşı Almanya'da Güç ve etki mücadelesini kazandı.</p>
      <p>1772-1795: Polonya'nın üç Bölümü. Prusya, Avusturya ve Rusya Polonya'yı kendi aralarında bölerler.</p>
      <p>1789: Prusya ve Avusturya'nın şiddetle mücadele ettiği Fransız Devrimi gerçekleşir.</p>
      <p>1815: 2. Napolyon'un yenilgisinden sonra Paris barışı. Fransız Devrimi'ne ve daha sonra Napolyon'a karşı mücadele ile Kutsal Roma İmparatorluğu resmen sona erer ve aynı zamanda küçük Alman devletlerinin sonu başlar. Şimdi, Frankfurt'ta (Cumhurbaşkanı Avusturya tarafından atanan) bir Bundestag ile aciz bir Alman konfederasyonu vardir, ancak çok az güce sahiptirler. Prusya ve Avusturya, gelişen demokratik özlemleri başarıyla bastırmaya devam ettiler.</p>
      <p>1848: Mart devrimi. Avusturya'da muhafazakar bakan Kont Metternich görevden alındı ve Alman Federasyonunda liberal bir ulusal meclis demokratik olarak seçildi, ancak Avusturya ve Prusya reformları engellemeye devam etti.</p>
      <p>1861: I. Prusya Kralı oldu ve 1862'de Otto von Bismarck'ı Başbakan olarak atadı.</p>
      <p>1866: Bismarck, Alman Konfederasyonu'nun soyu tükenmiş olduğunu ilan eder ve Prusya, Königgratz Savaşı'nda avusturya ile sonuçlanan savaşı kazanır ve böylece yeni "Kuzey Alman Konfederasyonu"nda Alman eyaletlerinin etkin kontrolünü kazanır.</p>
      <p>1875: Almanya Sosyal Demokrat Partisi'nin (SPD) kuruluşu, Sosyal Demokrat İşçi Partisi ve genel Alman işçi Derneği'nin birleşmesinden kaynaklandı.</p>
      <p>1878: Bismarck'ın "Sosyalist Yasası" (iki suikast girişiminden sonra) tüm sosyalist ve komünist Dernekleri yasaklar, ancak SPD'Yİ yasaklamaz. Yasa 1890'a kadar uzatıldı ve SPD'NİN daha da güçlenmesine engel olamadı.</p>
      <p>1883/1889: Bismarck sosyal sigortayı kurdu. Ancak bu, muhafazakar Hükümeti ile işçi sınıfı arasındaki gerginliği hafifletmeye yetmedi.</p>
      <p>1914-1918: Birinci Dünya Savaşı, Avusturya-Macaristan Arşidük Franz Ferdinand'ın Saraybosna'da öldürülmesiyle başladı. Versailles Antlaşması'nda Almanya Kolonilerini, Alsace-Lorraine'i Fransa ve Posen'e ve "Polonya koridoru" nun Polonya'ya kaybediyor; Almanya önemli tazminatlar ödemek ve Rheinland'ı askerden arındırmak zorunda. (Mart 1918'de Almanya'nın Rusya ile imzaladığı Brest-Litovsk Barışından daha cömert bir barış anlaşması. Rusya Almanya'ya çok fazla toprak vermeli, Polonya, Gürcistan ve Ukrayna'nın bağımsızlığını tanımalı ve Almanya'ya büyük tazminat ödemeye mahkum oldu.)</p>
      <h1><b>1 DAKİKADA TARİH; ALMANYA</b></h1>
      <p style="font-size: 22px;"><b>1 DAKİKADA NAZİ ALMANYASI</b></p>
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/QycURXf_mB4?si=gzm6Yzvn3hO_uuiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p style="font-size: 22px;"><b>1 DAKİKADA FEDERAL ALMANYA CUMHURİYETİ TARİHİ</b></p>
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/lUAsnAa4yoE?si=iTxeSLV03uvC2LNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/ok26x8NkYVM?si=cOhPE6pzzRj9vuAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/CksGXl6oa3c?si=xF2JvTru2C718RwJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/hdYzRtZXy64?si=xiPzWQ_-wiob2210" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/Q1VQYnfKJFg?si=DLYmlv2wtv2Tg8Tp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/JdwfhP_Om8w?si=T94xOsL4hyUmhKds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      
      beden: `<p style="font-size: 28px;"><b>Bilinmesi Gereken Alman Jestleri</b></p>
      <p style="font-size: 25px;"><b><i>1-Göz Kapağını Aşağıya Çekmek</i></b></p>
      <div id="image-container">
      <img class="kalmip" loading="lazy" src="https://dillerinkulturu.files.wordpress.com/2023/01/adsiz-tasarim-1.gif?w=1024" alt="hj">
      </div>
      <p>Bu hareketi yaparken, işaret parmağını alır ve göz kapağının altına yerleştirir ve biraz aşağı çeker. Bu jest iğneleyici bir sözü işaret eder ve bir şeyin şaka olduğunu yani ciddi olmadığını söyler.</p>

      <p style="font-size: 25px;"><b><i>2-Zafer İşareti-Victory-Zeichen</i></b></p>
      <div id="image-container">
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/adsiz-tasarim-1.png?w=1024" alt="hj">
      </div>
      <p>Bu işaret uluslararası olarak farklı anlamlara sahiptir, ancak çoğu durumda bu işaret “barış” veya “Zafer” anlamına gelir. Almanya’da da popüler bir jest, ancak İngiltere, Malta ve Avustralya’da bu jest farklı bir şey ifade edebilir. İki parmağını elinin arkasıyla dışa doğru çeviren kişi, karşısındakinin kaybolması gerektiğini işaret eder ve kesin bir reddedilmeyi sembolize eder. Bu işaret orta parmak ile olursa kişi daha saldırgan olabilir.</p>


      <p style="font-size: 25px;"><b><i>3-Beni Ahmak Yerine Koyuyorsun!-Du willst mich voll für dumm verkaufen!</i></b></p>
      <div id="image-container">
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/02/duwillstmirblabla7-1.gif?w=1024" alt="hj">
      </div>
      <p>Bu Jestte, konuşmacı düz elini yüzünün önünde sallar ve ön cam sileceği gibi hareket ettirir.</p>
      
      <p style="font-size: 25px;"><b><i>4-Başparmak Yukarı-Daumen hoch</i></b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/adsiz-tasarim-2.png?w=1024" alt="hj">
      <p>Çoğu ülkede, yukarı doğru uzatılmış bir başparmak, her şeyin harika olduğu anlamına gelir. Ancak bazı ülkelerde müstehcen bir hakaret olabilir. Avustralya’da, Afrika ve Asya’nın bazı bölgelerinde Başparmaklarını yukarı doğru hareket ettirenler cinsel bir davette bulunurlar.</p>
      
      <p style="font-size: 25px;"><b><i>5-Lippen spitzen-Dudak İpuçları</i></b></p>
      <div id="image-container">
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/hjjj.jpg" alt="hj">
      </div>
      <p>Bu durumda dudaklar yontulur ve asık bir surat şekillenir. Bu, tipik bir Alman hareketi gibi görünür, bu da bir konu hakkında hâlâ düşünüldüğünü veya düşünülmesi gerektiğini gösteriyor.</p>
      
      <p style="font-size: 25px;"><b><i>6-Das Ringzeichen-Halka Hareketi</i></b></p>
      <div id="image-container">
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/adsiz-tasarim-3.png?w=1024" alt="hj">
      </div>
      <p>Başparmağını ve işaret parmağını bir halka haline getiren kişi, ayrıca bir dalgıç her şeyin yolunda olduğunu söylemek ister. Günlük yaşamda bile, birçok insan bunu özellikle ABD ve Kuzey Avrupa’da tamam işareti olarak kullanır. Ancak, Belçika ve Tunus’ta “sıfır”, Japonya’da “para”, Fransa’da “lezzetli”, İtalya’da “ne demek istiyorsun?”, Güney Amerika’da mükemmelliği temsil ediyor. Bununla birlikte, diğer birçok ülkede dikkatli olunmalıdır, çünkü burada hakaret olarak görülebilir.</p>`,

      yazıdil:  `<p style="font-size: 24px;">Almanca Dilindeki Kullanılmış Yazı Türleri</p>
      <p style="font-size: 22px" style="font-size: 22px"><b>Karolenjler’in Küçük Harfli Yazısı-Karolingische Minuskel</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/rrrrr.jpg" alt="hj">
      <p>Birçok yazılı özel gelişime neden olan Antik Çağ ve halkların göçünden sonra, Karolenj(karolingische) Dönemi’nde (yaklaşık 800 yılları) ortak yazıların birleştirilmesi ve birleştirilmesi gerçekleşti. ”Karolingische Minuskel” , hem Gotik hem de bugünkü Latin yazının dayandığı yeni birleşik yazı tipi haline gelmişti.</p>
      <p>Karolingischen Minuskel’in önemli bir özelliği yuvarlaklıklarıdır. 12.yüzyılda, Gotik Yazıya geçişle birlikte, yazı dili önemli bir değişiklik geçirdi. Bu değişiklik ise harflerde bulunan kıvrımların kırılmasıdır.</p>
      
      <p style="font-size: 22px"><b>Gotik Yazı-Gotische Schrift-Fraktur(Kırık)</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/www.jpg" alt="hj">
      <p>13. yüzyılın ortalarında bir kitap yazısı olarak Gotik Yazı aynı zamanda artan yazımın bir ifadesi olarak Gotik italik kullanım ve anlaşma ya da çeşitli işler için kullanılan bir yazı dili olarak gelişti.</p>
      <p>Artan ekonomik ve idari ihtiyaçlar, 20. yüzyıla kadar ticari ve bireysel yazı tiplerini belirleyecek bir hukuk firması ve kurs yazısı olarak (sürekli gelişirken) yeni Gotik İtalik’i ortaya çıkardı. Bu yazının sonlarına doğru ise sizi tanıdık bir isim karşılıyor; 1934 yılında Reich Partisi Kongresi’nde “Gotik yazı” ya karşı çıkmasıyla yazı ve yazı tarihi hakkındaki bilgisizliğini ve Alman yazısına karşı muhalefetini ortaya koyan Adolf Hitler‘in kendisi de bu yazının karşısında duruyordu.</p>
      
      <p style="font-size: 22px"><b>Latince Yazı-Lateinische Schrift</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/kkkkkkk.jpg" alt="hj">
      <p>15. yüzyılda, Fraktur’a karşı bir hareket ortaya çıktı. Çünkü bu yazı çoğunlukla Hümanistler tarafından reddedilmesine rağmen Martin Luther gibi hümanist olmayan kişilerce de reddedilmiştir. Eski bir yazı olarak görülen yuvarlak ”Karolingische Minuskel”, bazı gelişmelerle yeniden canlandırılmaya çalışıldı. Gotik kitap yazımı gibi, Antikalar için de bir kullanım yazısı geliştirdi. Bu geliştirilen yazı günümüz Latince El yazmasının dayandığı Hümanist yazıdır.</p>
      <p>Özellikle kitap baskısında 20. yüzyıla kadar Gotik ve Latin yazı tipleri yan yana var olmuş, ancak Almanca konuşulan ülkelerde yazı tipi olarak Kurrentschrift hakim olmuştur.</p>
      
      <p style="font-size: 22px"><b>Buchdruck Schrift-Matbaacılık Yazısı</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/csm_schrift6_7b14501dda.jpg" alt="hj">
      <p>15. Yüzyılda ortaya çıkan kitap baskısı, kitap yazısı için kullanılan el yazısının yerini aldı ve el yazmaları o zamandan beri öncelikle hukuk bürolarında, ofislerde ve bireysel yazışmalarda sürdürülüyordu. Ancak yeni oluşturulan basılı yazılar da kırık, Gotik yazıya dayanıyordu: Almanya’da saf bir basılı yazı olarak tasarlanan ilk yazı ”Schwabacher” yazısıdır.</p>
      
      <p style="font-size: 22px"><b>Kurrentschrift</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/jjjjj.jpg" alt="hj">
      <p>Bu yazı tarihi gelişmelerine dayanarak, 16. yüzyıldan itibaren üç yazı türü ayırt edilir: Kitap/basılı yazı olarak Fraktur, ofisler ve Hukuk Büroları için el yazısı olarak hukuk bürosu ve özel kullanım için ikinci el yazısı olarak Kurrent, günlük kullanımda sınırlamalar akıcıydı, bu da özellikle Kurrentschrift’in incelenmesini zorlaştırıyordu.</p>
      
      <p style="font-size: 22px"><b>Sütterlin-Schrift</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/sssss.jpg" alt="hj">
      <p>Kurrentschrift’in son standardizasyonu, 20. yüzyılın başında, 1865-1917 yılları arasında, 1930’dan itibaren Almanca konuşulan ülkelerin çoğunda okul derslerinde standartlaştırılmış bir el yazması için kullanılan grafik sanatçısı Louis Sutterlin tarafından gerçekleştirildi. Günümüzde Almanya Saarland Üniversitesinde hâlâ öğretilmektedir.</p>
      
      <h1><b>Kurrentschrift’in Kaldırılması</b></h1>
      <p>Nasyonal sosyalist iktidarın ele geçirilmesinden sonra, Antikacı ya da Latince yazı “Aryan olmayan” olarak kabul edildi ve bu nedenle yasaklanmaya kadar yol aldı. Parti ve Devlet” Alman ” yazısını teşvik etmeye çalıştı. Örneğin, Yahudi halkı, 1941’de Nasyonal sosyalist yönetimde şaşırtıcı bir dönüş yapana kadar yayın ve baskı yapmaktan men edildi.</p>
      <p>Nasyonal Sosyalist Alman İşçi Partisi, sözde “Alman” yazısının yani gotk yazının aslında bir Alman yazısı olmadığına, ancak matbaanın ortaya çıkmasıyla Yahudi Matbaacılar tarafından tanıtıldığına karar verdi. Bormann’ın imzaladığı 3 Ocak 1941 tarihli bir Genelgede,” Aryan olmayan ” Latince yazı tüm yazı ve öğretimde standart yazı olarak ilan edildi ve şu bildirge verildi;</p>
      <p>“Sözde Gotik yazıyı bir Alman yazısı olarak görmek ve adlandırmak yanlıştır. Aslında, sözde Gotik yazı “Schwabacher” Yahudilerine aittir. Tıpkı daha sonra gazetelerin eline geçtikleri gibi, Almanya’da yaşayan Yahudiler de Matbaaların başına geçtiler ve böylece Almanya’da Yahudi tırmanıcılarının güçlü bir şekilde ortaya çıkmasına neden oldular.”    (KAYNAK: Karl Gladt, Deutsche Schriftfibel. Anleitung zur Lektüre der Kurrentschrift des 17.-20. Jahrhunderts, Graz 1974, 8.)</p>`,
      
      sembol: `<p></p>
      <p><b>Almanya Federal Cumhuriyeti Arması</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/deutschlandflagge-mit-bundesadler.jpg" alt="hj">
      <p>Kartal, dünyanın en eski Devlet sembollerinden biridir ve bugün hâlâ var olan en eski Avrupa Amblemidir. Roma İmparatorlarının egemenliğinin sembolü olarak kullanılmıştır. Frenk hükümdarları, İmparatorluklarıyla birlikte, güçlerinin sembolü olarak Kartal’ı da kabul ettiler.</p>
      
      <p><b>Bundestag-Reichstag-Alman Federal Meclisi</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/riechtag-g5367cb989_1920.jpg?w=900" alt="hj">
      <p>Almanya Federal Cumhuriyeti’nin başkenti Berlin’de bulunan Bundestag ya da eski adıyla Reichstag Almanya Federal Cumhuriyeti’nin yönetim merkezlerinden biridir. Kapısında ”Dem deutschen Volke”-”Alman Halkına” yazsısı 1916 yılında mimar Peter Behrens tarafından yazılmıştır. Günümüzde adeta bir ikon olup Almanya ziyaretçileirnin uğrak noktalarındandır.</p>
      
      <p><b>ALMAN BAYRAĞI-BUNDESFLAGGE</b></p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/01/adsiz-1.png" alt="hj">
      <p>Anayasanın 22. maddesinin 2. fıkrası şöyle diyor: “Federal bayrak siyah-kırmızı-altındır.”Bu renk uzun bir geleneğe dayanıyor. Birlik, özgürlük ve demokrasinin simgesidir.</p>
      
      <h1><b>RESMÎ MARŞ</b></h1>
      <p>Sözleri ünlü ve mühim şair Hoffman von Fallersleben tarafından yazılan(1841) ve bestesinin de ayrıca ünlü ve mühim bestekâr Franz Joseph Haydn tarafından yapılan(1797) Alman marşı(Einigkeit und Recht und Freiheit), Alman ulusunun birçok duygusunu paylaşır.</p>
      <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2023/02/almanmarsdilkultur.jpeg?w=1024" alt="hj">
      <iframe loading="lazy" class="kalmipp" src="https://www.youtube.com/embed/Xsu9cwwIiuw?si=dqFY7_MFxKsxyw0R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,

      sanat: `<p style="font-size: 20px;">İlk sitede "MÜZİK" bölümü için kullanılan tasarım:</p>
        <img class="kalmip" loading="lazy" src="https://dillerinkulturu.files.wordpress.com/2023/02/ornekdlkultur.jpg?w=1024" alt="hj">
        
        <h1>Almanya Musikîsi</h1>
        <p>Goethe Enstitüsüne göre Almanya, şairlerin ve düşünürlerin ülkesi olarak kabul edilir. Buna müzisyenler de dahildir. -Händel, Bach, Beethoven, Brahms, Schumann, Schütz, Wagner, Hindemith, Weill, Stockhausen vb.- Almanya’nın hemen hemen her döneminde dünyaca ünlü klasik müzisyenleri bir bir yetiştirilmiştir. Bir diğer konuda da yine Goethe Enstitüsüne göre ise yüksek övgü her zaman problemli olsa da sadece Avusturyalılar, İtalyanlar ve Fransızlar Almanya ile bu saygıda rekabet edebilir. Ne yazık ki orada bulunan katı vatanseverler için entelektüel yeterlilik, Almanya sınırlarında biter.1</p>
        
        <p style="font-size: 24px;"><b>Örnek Müzik Türlerinde Örnek Almanca Şarkılar</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/AlRzFIXrBIQ?si=6oljW24TjPGnIjkD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>“Moskau” Sovyetler Birliği’nde muazzam bir popülerlik kazandı. Bu şarkı ilk olarak Almanca versiyonu ile çıkmıştır ve Sovyetler Birliği’nin yıkılmasından yıllar yıllar sonra Slav halkı ile dalga geçilen internet videolarına adeta bir tema müziği oldu.</p>

        <iframe class="kalmipp" src="https://www.youtube.com/embed/dQfFTUZ3O80?si=Q_ZR3sqbo4VEApzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Bowie’nin Visconti ile şarkıcı Antonia Maass arasında Berlin Duvarı’nın yanında bir öpücüğe tanık olmasında doğrudan ilham alınan ve diğer ilhamlar arasında Otto Mueller’in bir tablosu ve Alberto Denti di Pirajno’nun kısa bir hikayesi vardır. Şarkı, ayrıca Almanca, Fransızca ve İngilizce versiyonları ile piyasaya sürülmüştür.</p>

        <iframe class="kalmipp" src="https://www.youtube.com/embed/xaKilnGA1C0?si=bIe0NiYI-UjdDwVx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        <p>Nazi Almanyası döneminde soykırıma uğramış Alman Yahudileri, orada konuştukları dil olan Yidiş ile kültürlerini de yanlarına alıp uzak diyarlara gittiler. Oradaki güzel günlerine dönecek olursak bizi bu şarkıları karşılamaktadır.</p> 
        <iframe class="kalmipp" src="https://www.youtube.com/embed/r-piMuyC1JY?si=51Oa-RCJG6m6vZIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <h1>Diğer Müzik Türlerinde Almanlar</h1>
        <p style="font-size: 24px;"><b>Klasik Müzik</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/-oSozJm_k0c?si=knf3-Sf_tt1zdk1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Bunun dışında klasik müziğin önemli isimlerinin Almanya diyarından çıktığı söylenir. Kesindir ki örnekleri bu sayfaya sığmaz ama ister istemez yaşamda bir kez karşılaşılmış olsun akıllara kazınmış bazı eserlere misâl olarak; genellikle bir senaryoda temsili olarak bir düğünü anlatma ekseriyetinde imgeleşmiş olan “Hochzeitsmarsch“(Düğün Şarkısı/Marşı) ve Avrupa Birliği Marşı, (Freude Schöner Götterfunken). Bu eser tuhaf gelen hızlı melodisi, alafranga müziğin adeta baş temsilcisi olmuş, 1823’te Ludwig van Beethoven’ın ve Friedrich Schiller’in 1785’te yazdığı “Ode an die Freude” şarkısının melodisi olarak bestelediği Dokuzuncu Senfoni‘den geliyor. Marş içerisinde Avrupa Birliği’nin daha geniş anlam olaraktan namına sembolize edildiği söylenir.</p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/Jo_-KoBiBG0?si=SMnCDl_bV29G7TQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <p style="font-size: 24px;"><b>Rock Müzik</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/5eHkjPCGXKQ?si=xnfBXxfDeqWdyG5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>İngiliz Rock Grubu Led Zeppelin, bu şarkıda kuzeyden güneye göç eden barbar Germenleri konu alır.</p>
        
        <p style="font-size: 24px;"><b>Pop-Disko Türü</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/YCQYdgYG7uY?si=70GNwUOi9a4eE5YL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Tarzı Eurodisco olan ve Batı Almanya’da kurulan Boney M. grubunun bu ünlü parçasında Rus gezgin Grigori Jefimowitsch Rasputin’in hayatı ele alınır.</p>
        
        <p style="font-size: 24px;"><b>Çocuk Şarkıları</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/Wz5P7EzEd4w?si=tl7m0HmFPEwPA-nx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Her kitleye olduğu gibi çocuklara yönelik şarkıların da, yani bir çocuğun ve bir müzik çaların bulunduğu herhangi yerde kulağa aşina gelebilecek bazı Alman kökenli niteliğe sahip eserlere örnek olarak “Hoffman von Fallersleben” tarafından yazılan “Ein Männlein steht im Walde” (1843) ve “Alle vögel sind schon da” (1835) şarkılarıdır. Şairin biyografisi “Edebi” bölümünde bulunmaktadır.</p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/74oAbPDa6vU?si=aIPdlFYfIHwZLNGx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <p style="font-size: 24px;"><b>Spor Takımlarının Sanatsal Rekabeti</b></p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/DXCSG6AMpQM?si=A4DD4ef5LSmi15XS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Rekabetten güzellikler çıktığı söylenir. Bu güzellik herkese hitap edemese de Almanya ülkesinde bulunan bazı spor kulüpleri ve taraftarları bunun dışında denebilir. Tabii ki örnek olarak. FC Köln takımının taraftarları tarafından yapılan İskandinav kökenli “Mer stonn zo dir” şarkısını Köln kentinde konuştukları “Kölsch” lehçesi ile harmanlayarak takımlarına “her daim seninleyiz” mesajı vermiştir. FC Bayern takımının şarkısında ise daha çok oyuncularına destek veren bir hava ve tıpkı Köln şarkısı gibi geçmiş heyecanlar, hatıralar ve bir tarih bulundurur.</p>
        <iframe class="kalmipp" src="https://www.youtube.com/embed/X3CZiq_Li_U?si=eRofRHvPcxhbCFaq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,

        sinema: `<p style="font-size: 20px;">İlk sitede "TİYATRO VE SİNEMA" bölümü için kullanılan tasarım:</p>
        <img loading="lazy" class="kalmip" src="https://dillerinkulturu.files.wordpress.com/2022/12/adsiz-tasarim-3.jpg?w=1024" alt="hj">
        <h1>Almanya Tiyatroları</h1>
        <p>Alman prensleri 17. yüzyıldan 19. yüzyıla kadar muhteşem tiyatro binaları inşaa etmişlerdir. Bunlar tarihi tiyatrolardır. Bunlardan öte burjuvaziler kendilerine özel tiyatro yaptırdı. Bunlardan bazılarında hâlâ orijinal olarak özleri ve incelikleri görülebilir. Almanya’daki tarihi Tiyatro diyarı batıda Bielefeld’deki Aşağı Duvar Tiyatrosu’nda başlar ve kuzeydeki Kiel şehrinde bulunan Opera Binası’nda sona erer. Bu diyarlara yapılabilecek bir gezi, sizi Almanya’nın en güzel tiyatrolarına ve tiyatronun tarihine götürür.1</p>
        <p>Muhtemelen Alman edebiyatı, kısmen şiirinin lirik nitelikleri ve düzyazısının nüansları çeviriye meydan okuduğu için dünya edebiyatındaki hak ettiğinden daha az statüye sahiptir. Alman edebiyat tarihinin en yüce şahsiyetleri bile — dehası sadece şiir, roman ve drama yaratmakla kalmayıp aynı zamanda bilimsel çalışmaya da uzanan Goethe (Faust’un yazarı) ve şair, oyun yazarı ve edebiyat teorisyeni arkadaşı Friedrich Schiller – dış dünya tarafından tanınmaya mahkumdur almanca konuşulan bölgeler büyük ölçüde itibara göre. Aynısı, Yunan ve Latin klasiklerinden büyük ölçüde etkilenen lirik şiiri erken modern Alman yazısını canlandıran Friedrich Hölderlin de dahil olmak üzere, Alman edebiyat tarihinin tüm dönemlerinde birçok dikkate değer yazar için de geçerlidir; Hermann Broch, kimin Der Tod des Vergil (1945; Virgil’in Ölümü) derin bir bilimsel çağda ruhun çöküşü üzerine meditasyon; Fütüristik romanı Auf den Marmorklippen (1939; Mermer Kayalıklarda) Nazizmin alegorik bir eleştirisi olan Ernst Jünger; ve hatta 19. yüzyılın sonlarında sahtekarlıktan hapis cezasına çarptırıldıktan sonra art arda en çok satan batılıları yazan, belki de tüm Alman yazarların en popüleri olan Karl May bile.</p>
      
        <h1>Almanya Sineması</h1>
        <p>Sinema ya da Film, 1920’de Alman dışavurumcu sinemasının başlaması ve 1933’te kesin olarak sona ermesiyle, bu nedenle son derece üretken Alman film yapımının kısa dönemi, Weimar Cumhuriyeti zamanına neredeyse tamamen denk gelir ve bu nedenle genellikle ‘Weimar sineması’ olarak adlandırılır.‘</p>
        <p>Günümüze dönersek film konusunda dünyaya hitap eden kişilere örnek olarak; Hans Zimmer (Film Müziği Yapımcısı), Oyunculardan ise Jürgen Prochnow, Daniel Brühl, Michael Fassbender ve daha bir sürüsü…</p>`,


        hayvan: `<h2>Almanya’da bulunan Hayvanlar Alemi- Das Leben der Tiere in Deutschland</h2>
      <p style="font-size: 25px;"><b><i>EVCİL HAYVANLAR</i></b></p>
      <p>Aslında sadece Almanya’ya özgü evcil hayvanlar bulmak zordur. Ancak bilinen şudur ki 2021 yılı itibarıyla Almanya ülkesinde 34,7 milyon evcil hayvan bulunmaktadır.</p>
      
      <p style="font-size: 25px;"><b><i>YABANİ HAYVANLAR-WİLDTİERE</i></b></p>
      
      <p style="font-size: 22px;">Karabatak Kuşu-Kormoran</p>
      <img loading="lazy" class="hayvankel" src="https://dillerinkulturu.files.wordpress.com/2022/12/great-cormorant-g3dd5454e8_1280.jpg?w=1024" alt="hj">
      <p>1970’lerde bile, Almanya’da bir Karabatak görmek gerçek bir Sansasyondu. İnsan, hemen hemen her şeyi yok etmiş ve yok etmiştir. Deniz Kartalı, bir balık yiyendir. Bu kara kuş, büyük nehirlere ve iç göllere yerleşmeyi sever. Burada yeterince yiyecek bulur. Şu anda Almanya’da 20.000’den fazla üreme çifti var. Bu canlılar balık konusunda Almanlar ile onlar için stresli bir yarış halinde bulunur.</p>
      
      <p style="font-size: 22px;">Kurt-Wolf</p>
      <img loading="lazy" class="hayvankel" src="https://dillerinkulturu.files.wordpress.com/2022/12/wolf-g5d28013e9_1920.jpg?w=1024" alt="hj">
      <p>1990’ların ortalarında ilk Kurt Alman topraklarında görüldü. Muhtemelen Polonya’dan gelmişti. Kısa bir süre sonra Doğu Saksonya’daki Lusatia’ya, ilk olarak iki Alman Kurt sürüsü 20 ila 25 hayvanla yerleşti. 2019 yılında Almanya’da 78 Kurt Sürüsüne ulaşması bekleniyordu.</p>
      
      <p style="font-size: 22px;">Boz Ayı-Braunbär</p>
      <img loading="lazy" class="hayvankel" src="https://dillerinkulturu.files.wordpress.com/2022/12/496e6c95-ae30-42ac-beb1-c7bc5201106e2d723127b110334faf_p1010067.jpg" alt="hj">
      <p>Boz ayı da bir zamanlar Almanya ormanlarında yaşıyordu. Ancak büyük orman alanları da yok olduğundan dolayı kendisine Almanya topraklarında rastlamak nadirdir. Romanya, İsveç, Slovakya, Hırvatistan ve Bulgaristan gibi ülkelerde hala serbest yaşayan ayılar var. Bazıları İtalya, Avusturya ve İsviçre’de de yaşıyor. Ayrıca Almanya’nın il ayısı olarak kabul edilen Ayı Bruno, Kuzey İtalya’dan Avusturya üzerinden Almanya’ya göç etti.</p>
      
      <p style="font-size: 22px;">Büyük Kuzey Geyiği-Elch</p>
      <img loading="lazy" class="hayvankel" src="https://dillerinkulturu.files.wordpress.com/2022/12/moose-gf73c79f69_1920.jpg?w=1024" alt="hj">
      <p>Bazı bölgelerde de bize yerleşebilirler, Korumacılar emindir. Geyikler iyi Yüzücülerdir ve örneğin Brandenburg’da, Mecklenburg-Batı Pomerania’da veya Bavyera Ormanı’nda bulunabileceği gibi bataklık, su bakımından zengin arazileri severler. İki metreye kadar omuz yüksekliği ile Elk etkileyici bir görünümdür. Savaş sona erdiğinden beri ormandan kaybolmuştu. Almanya’nın doğusunda çok sayıda geyik görülmüştür. Muhtemelen Polonya ya da Baltık ülkelerinden göç ettiler.</p>`,


      edebiyat: `<p>Alman Edebiyatının başlangıcında sadece 8. yüzyılda yazılmış olan germen kahramanlık şarkıları, atasözleri ve büyüleri vardır. 10. yüzyılın sonunda dahi Almanca şiir yoktu. Var olanlar ise Latince idi. Ancak Orta Çağ'da Alman şiirinin en yüksek noktası başladı(tahminen 1170 yılı civarında)...</p>
      <h1>MINNESANG-MINNELYRIK</h1>
      <p>Walter von der Vogelweide zamanının en önemli şairiydi. Alman lirik şiiri(Minnelyrik ya da Minnesang) yazmıştır. Bu şiir Alman dili alanındaki Yüksek Ortaçağ’ın(11. Yüzyılın ortalarından 13. Yüzyılın sonunda kadar süren dönem) şövalyevari şiirdir. Bu şiiri söyleyenler Minnesänger olarak adlandırılır. Minnesang bir halk şiiridir. Teması ise şatonun soylu kadınlarının onurunu yüceltmektir. Minne kelimesi aşk anlamına gelir. Yani hem tema hem de soylu kadın kavramına bakılırsa durum şöyledir; Minnesänger’den daha sosyal olarak yüksek olan evli bir kadına olan sevgidir. Minnesang’ların Ortaçağ’da keman benzeri bir müzik aleti ile söylendiği tahmin edilmektedir.</p>
      <p>Walther von der Vogelweide bu sanatta ünlü Filistin şarkısını yazmıştır (Aşağıdaki videodan dinleyebilirsiniz). Bu şiirin teması ise 2. Friedrich’in 1228 Haçlı Seferi(6.HaçlıSeferi) sonucu Kudüs’ü tekrar Hristiyanların eline geçirmesidir. Vogelweide dışında bir kaç örnek Minne şairi; Veldeke, Neidhart, Wolfram von Eschenbach, Heinrich von Morungen, Meister Johans Hadloub.</p>
      
      <h1>DER KLASSISCHEN DEUTSCHEN LITERATUR-KLASIK ALMAN EDEBIYATI</h1>
      <p>Alman Edebiyatı’nın hem temel taşları hem de öncüleri Johann Wolfgang von Goethe ve Friedrich Schiller’dir. Bu işin merkezi Weimar şehri idi.</p>
      <p>Goethe, İtalya’ya bir gezi yaptı. Orada hepsinden önce onu da çok büyüleyen Antik sanatın uyumunu inceledi. Klasik Dönemim en önemli eserleri ise kendisi tarafından yazılan ”Torquato Tasso, Iphigenie auf Tauris” bu eserler ile kendisine şehir sınıfını eğitmek için bir görev verdi. Goethe’nin ana eseri Faust’tur. Bu iki bölümden oluşan felsefi bir şiirdir. Goethe bu çalışmayı ölümünden bir yıl önce bitirdi ve bu eser, Fırtına ve Coşku döneminin eserleri ile İtalya’dan Zürich’e geldiği zaman arasında açık bir fark vardır. Bu zamanda şiirler de yazmıştır. Örnek olarak Wandrers Nachtlied birçok kişisel ifade içermektedir. Goethe kendisi hevesli bir gezgindi.</p>
      <p>Goethe, Friedrich Schiller ile arkadaşlardı ve birlikte tiyatrolar yönettiler. Goethe sayesinde Schiller tarih profesörü olmuştur. Bilinen diğer dramaları: Maria Stuart, Die Jungfrau von Orleans, Wilhelm Tell, Wallenste­in, Don Carlos… Eserleri anti-feodal eleştiriler içermektedir. Dramalarında özgürlük ve insanlıktan söz eder. Bu sebepledir ki o zamanki Almanya’nın düşünce yapısını etkilemiştir.</p>
      
      <h1>ROMANTIZM-DIE ROMANTIK</h1>
      <p>Romantizm 19. Yüzyıl boyunca sürdü. Romantizm’in idealleri bilinç dışılılık, rüyalar, doğa, esrarengizlik ve masallardır. Romantizm genellikle ”Sıla Hasreti” saiğini kullanılır ve gayesiz dolaşmaktan bahseder. Bu dönemin önemli temsilcileri E.T.A. Hoffman ve Josepf von Eichendorf’tur. Eichendorf’u ünlü romanlarından ”Aus dem Leben eines Taugenichts’te romantiklerin yaşam duygusunu örnek olarak tanıyabilirsiniz. Gayenin nedeni tüm kitabı kaplar niteliktedir.</p>
      
      <h1>REALIZM-REALISMUS</h1>
      <p>Realizm terimi Latince res kelimesinden türetilmiştir ve şey veya şey olarak çevrilebilir. Gerçekçi ol lat.: realis, gerçekçilik anlamına gelir ve bir şeyin gerçekliğe uygun olarak ya da gerçeğe yakın olarak gösterildiğini ifade eder. Yani gerçekçilik kavramı, gerçekliği yansıtan bir Temsildir. Edebi gerçekçilik, her şeyden önce, burjuva insanların yaşamlarını, yaşam koşullarını ve sınırlamalarını deneyimleme ya da onlarla başa çıkma biçimlerini olgusal ya da nesnel olarak temsil eder.</p>
      <p>Theodor Storm Realizm’in ve Natüralizm’in en önemli temsilcisidir. İlk olarak romanlar yazmıştır. Eserleri doğduğu Kuzey Almanya’nın genel görünümünü ve insanlarını pragmatize etmiştir. Oktoberlied, Die Stadt ve pastoral ruh hali resimleri ile dolu olan romanı Immensee’yi yazmıştır.Kronik eseri olan Aquis Submersus Prusya devletinin durumunu nefretle pragmatize eder.</p>
      
      <h1>DÜNYA SAVAŞI SONRASI ALMAN EDEBIYATI</h1>
      <p>Savaş sonrası Edebiyat birçok yönden bölünmüştü: yazarların bir kısmı Nazi diktatörlüğünü işlemeye, bir kısmı da bastırmaya çalışıyorlardı; iç Göç ve sürgün Edebiyatı arasında bir tartışma vardı; kısa bir süre sonra iki Alman devletinin kurulmasıyla siyasi bir ayrılık da gerçekleşti.</p>
      
      <div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 20px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFUXPMzgK0&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>`,    

       kent: `
    
    <h2>Rheinland-Pfalz Eyaletindeki Müzeler</h2>
    <div class="center">
    <div class="carousel-wrapper">
    <!-- abstract radio buttons for slides -->
    <input id="slide1" type="radio" name="controls" checked="checked" />
    <input id="slide2" type="radio" name="controls" />
    <input id="slide3" type="radio" name="controls" />
    <input id="slide4" type="radio" name="controls" />
    <input id="slide5" type="radio" name="controls" />

    <!-- navigation dots -->
    <label for="slide1" class="nav-dot"></label>
    <label for="slide2" class="nav-dot"></label>
    <label for="slide3" class="nav-dot"></label>
    <label for="slide4" class="nav-dot"></label>
    <label for="slide5" class="nav-dot"></label>

    <!-- arrows -->
    <label for="slide1" class="left-arrow"> < </label>
    <label for="slide2" class="left-arrow"> < </label>
    <label for="slide3" class="left-arrow"> < </label>
    <label for="slide4" class="left-arrow"> < </label>
    <label for="slide5" class="left-arrow"> < </label>

    <label for="slide1" class="right-arrow"> > </label>
    <label for="slide2" class="right-arrow"> > </label>
    <label for="slide3" class="right-arrow"> > </label>
    <label for="slide4" class="right-arrow"> > </label>
    <label for="slide5" class="right-arrow"> > </label>

    <div class="carousel">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/jjjjjjjjj.jpg" />
          <h3>Alman Sokak-Cadde-Yol Müzesi-Deutsches Straßenmuseum-Germersheim</h3>
          <p>Germersheim’daki orijinal Tahkimatın eski Cephaneliğinde, Almanya’da eşsiz bir müze olan Alman Sokak Müzesi bulunmaktadır. İç ve dış mekanlarda yaklaşık 5000 m2’lik sergi alanında, yol ve yol yapımı konusu, büyük yol Silindirinden kaldırım Çekiçine kadar birçok tarihi ve kısmen nadir sergiyle aydınlatılmaktadır. Bu esnada Kemer, erken dönemlerin Trample Patikasından 21. yüzyıl otoyoluna kadar uzanmaktadır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/lllll.jpg" alt="">
          <h3>Alman Bims(Ponza Taşı) Müzesi</h3>
          <p>Yaklaşık 13.000 yıl önce Laacher See Yanardağının patlamasından sonra, bir metre kalınlığında bir pomza tabakası yeni Havzadaki manzarayı kapladı. Volkanik Kaya, binlerce yıl sonra bölgede muazzam bir ekonomik yükselişin temeli olarak ortaya çıkacaktı. 1860’lardan günümüze kadar, Bims(Ponza Taşı) inşaat sektöründe ve günlük yaşamda devrim yarattı.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/kakkaakkk.jpg" />
          <h3>Dökümantasyon ve Hükümet Sığınağı Müzesi</h3>
          <p>Mart 2008’de, ülke çapında benzersiz bir Soğuk Savaş tanığı yeni amacına teslim edildi: Ahr Vadisi’ndeki eski hükümet sığınağı atom bombasına dayanıklı kapılarını müze olarak açtı. Tesisin bölümleri hükümet sığınağı dokümantasyon tesisinin ziyaretçilerine açıktır ve dünyanın her yerinden genç ve yaşlıları davet etmektedir. Dokümantasyon merkezinin sahibi, “eski Ahrveller” yerli Derneği için bu aynı zamanda bir meydan okuma ve sorumluluktur, çünkü çalışanlar yakın zamana kadar sıkı gizliliğe tabi olan bir yeraltı dünyasında sığınaklarına size eşlik ederler.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdaaasasdasasaas.jpg">
          <h3>Gutenberg Müzesi Mainz</h3>
          <p>Müzenin merkezinde dünyaca ünlü 42 satırlık Kutsal kitabın iki kopyası var. Bunlar Johannes Gutenberg’in kendi tekniğiyle yaptığı ilk Kitaplar. 1450 yılında Gutenberg’in atölyesinde basılmıştır. Dünyanın en güzel kitapları olarak nitelendirilen Gutenberg İncillerinin yanı sıra, dünyanın dört bir yanından gelen 125.000 ziyaretçi için müzede keşfedilecek çok sayıda kitap hazinesi var.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/adadadaad.jpg?w=1024" alt="">
          <h3>Karl Marx Evi-Trier</h3>
          <p>1727 yılında Barok bir konut olarak inşa edilen ve 1928’de SPD tarafından satın alınan Karl Marks’ın doğum Evi, 1968’den beri Friedrich-Ebert-Stiftung (FES) tarafından müze olarak işletilmektedir. Marks‘ 200’e. Doğum günü 5 Mayıs 2018 tarihinde bu tarih ve politik öğrenme yerinde yeni bir kalıcı sergi açıldı ve 19. yüzyılın sosyal ve kapitalizm Eleştirmeni olarak nitelendirilen Karl Marks’a adanmıştır. Fikirleri bugün hâlâ insanları etkilemektedir.</p>
        </li>
      </ul>
    </div>
  </div>
</div>

<h2>Saarland Eyaletindeki Müzeler</h2>
<div class="custom-center">
  <div class="custom-carousel-wrapper">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide1" type="radio" name="custom-controls" checked="checked" />
    <input id="custom-slide2" type="radio" name="custom-controls" />
    <input id="custom-slide3" type="radio" name="custom-controls" />
    <input id="custom-slide4" type="radio" name="custom-controls" />
    <input id="custom-slide5" type="radio" name="custom-controls" />

    <!-- navigation dots -->
    <label for="custom-slide1" class="custom-nav-dot"></label>
    <label for="custom-slide2" class="custom-nav-dot"></label>
    <label for="custom-slide3" class="custom-nav-dot"></label>
    <label for="custom-slide4" class="custom-nav-dot"></label>
    <label for="custom-slide5" class="custom-nav-dot"></label>

    <!-- arrows -->
    <label for="custom-slide1" class="custom-left-arrow"> &lt; </label>
    <label for="custom-slide2" class="custom-left-arrow"> &lt; </label>
    <label for="custom-slide3" class="custom-left-arrow"> &lt; </label>
    <label for="custom-slide4" class="custom-left-arrow"> &lt; </label>
    <label for="custom-slide5" class="custom-left-arrow"> &lt; </label>

    <label for="custom-slide1" class="custom-right-arrow"> &gt; </label>
    <label for="custom-slide2" class="custom-right-arrow"> &gt; </label>
    <label for="custom-slide3" class="custom-right-arrow"> &gt; </label>
    <label for="custom-slide4" class="custom-right-arrow"> &gt; </label>
    <label for="custom-slide5" class="custom-right-arrow"> &gt; </label>

    <div class="custom-carousel">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2022/12/historischesmuseum-saar-sb-23-manuela-meyer-1.jpg" />
          <h3>Saar Tarih Müzesi</h3>
          <p>Müze, Saarland’ın tarihini Orta Çağ’dan erken modern çağa ve hareketli 20. yüzyıla kadar heyecan verici bir zaman yolculuğunda sergiliyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/hfgdfhfdfhg.png" alt="">
          <h3>Saarland Müzesi</h3>
          <p>Stiftung saarländischer Kulturbesitz(Stiftung Kültürel Miras Vakfı), Saarland’ın en prestijli müzelerinden ve sergi evlerinden birkaçını ve bugün beş lokasyonda üç Kurumu bir araya getiriyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/dasdasdasdasasdasdasdasdas.png" />
          <h3>Saarland Madencilik Müzesi</h3>
          <p>Bexbach’taki bir parkta yer alan bu müze, ziyaretçileri kasabanın Hindenburg Kulesi’nin yeraltı gösteri madenindeki madencilerin sıkı çalışmaları hakkında her şeyi öğrenmeden önce bir madenci ceketi ve güvenlik kaskı takmaya davet ediyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asddasdadas.png">
          <h3>Avrupa Kültür Parkı-Bliesbruck-Reinheim</h3>
          <p>Park, Alman-Fransız sınırında, Blies Nehri’nin pastoral vadisinde yer almaktadır ve bölgenin başlıca arkeolojik cazibe merkezlerinden biridir. Zaten 8000 yıldan daha uzun bir süre önce Orta Taş Çağları’nda, bu bölge insanlar tarafından doldurulmuştur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/saasdasdasdasd-2.jpg" alt="">
          <h3>Deutsches Zeitungsmuseum</h3>
          <p>Wadgassen’deki Alman Gazete Müzesi, gazetelerin tarihsel gelişimi, üretimi ve dağıtımı üzerine sergiler sergiliyor. Sergi üç bölüme ayrılmıştır: İlk bölüm, kitle iletişim araçlarının ilk günlerinden kalma orijinal baskılar ve değerli sergiler de dahil olmak üzere, Almanya’daki gazetelerin başlangıcından 1962’deki “Spiegel meselesine” kadar olan tarihine odaklanıyor. Teknik gazete üretiminin tarihsel yönleriyle ilgili ikinci bölüm, tarihi preslere ve makinelere odaklanıyor ve ziyaretçiler kendi gazetelerini üzerlerine basmaya bile başlayabilirler. Üçüncü bölüm, ziyaretçileri katılmaya ve öğrenmeye davet eden çeşitli uygulamalı istasyonlarla bugün gazetelere odaklanıyor.</p>
        </li>
      </ul>
    </div>
  </div>
</div>

<h2>Saksonya Eyaletindeki Müzeler</h2>
<div class="my-center">
  <div class="my-carousel-wrapper">
    <!-- abstract radio buttons for slides -->
    <input id="my-slide1" type="radio" name="my-controls" checked="checked" />
    <input id="my-slide2" type="radio" name="my-controls" />
    <input id="my-slide3" type="radio" name="my-controls" />
    <input id="my-slide4" type="radio" name="my-controls" />

    <!-- navigation dots -->
    <label for="my-slide1" class="my-nav-dot"></label>
    <label for="my-slide2" class="my-nav-dot"></label>
    <label for="my-slide3" class="my-nav-dot"></label>
    <label for="my-slide4" class="my-nav-dot"></label>

    <!-- arrows -->
    <label for="my-slide1" class="my-left-arrow"> &lt; </label>
    <label for="my-slide2" class="my-left-arrow"> &lt; </label>
    <label for="my-slide3" class="my-left-arrow"> &lt; </label>
    <label for="my-slide4" class="my-left-arrow"> &lt; </label>

    <label for="my-slide1" class="my-right-arrow"> &gt; </label>
    <label for="my-slide2" class="my-right-arrow"> &gt; </label>
    <label for="my-slide3" class="my-right-arrow"> &gt; </label>
    <label for="my-slide4" class="my-right-arrow"> &gt; </label>

    <div class="my-carousel">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/istockphoto-943029904-612x612-1.jpg" />
          <h3>Sağlık Bilgisi Müzesi-Dresden</h3>
          <p>Dresden’deki Deutsches Hygiene Museum’un odak noktası insandır. 100 yıldan fazla bir süredir Müze, insan yaşamı hakkında heyecan verici bilgiler sunuyor. Konuların çeşitliliği insan vücudu, cinsellik, beslenme ve çok daha fazlasını kapsar. Bütün aile burada öğreniyor. Çünkü küçük olanlar için de Müze, çocuklara uygun bir katılım Sergisi sunuyor. Ortak Müze ziyareti için çok sayıda tur, Çöpçü AVI, deney ve oyun bilgi, çeşitlilik ve karşılaşmalar için yer sunuyor. Dresden’in merkezinde yer alan Müze, kalıcı sergilere ek olarak, güncel konularda yıllık değişen sunumları bir araya getiriyor.</p>
          </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/istockphoto-1328817759-612x612-1.jpg" alt="">
          <h3>Königstein Kalesi-Festung Königstein</h3>
          <p>Sakson İsviçre’nin ortasında ve Dresden Kültür Metropolünün yakınında yer alan Königstein Kalesi tahtta yer almaktadır. İlk olarak 1241’de bahsedilen dağ Kalesi, bir manastır, bir kale, bir zevk Şatosu, bir devlet Hapishanesi, bir savaş esiri Kampı ve bir gençlik çalışma bahçesine ev sahipliği yapmıştı. Bugün Kale, nefes kesen panoramik manzaraya ek olarak, örneğin 400 yıllık Kale mimarisine ait çeşitli sergiler sunmaktadır. Elbe’nin 247 metre yukarısında, 13 Futbol sahasından oluşan bir alan, 50’den fazla heybetli bina ve daha fazla yeşil alan bulunmaktadır. Doğa ve Kültür, Königstein Kalesi’nde bir araya getirilmiş ve yaşanmıştır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/slide1_full.jpg" />
          <h3>August-Horch Müzesi-Zwickau</h3>
          <p>August-Horch Müzesi, 1904 yılından kalma orijinal bir üretim tesisinde bulunan Almanya genelinde sadece iki Müzeden biridir. Otantik hikayeler ve 118 yıllık Otomobil imalatında eşsiz bir zaman yolculuğu yaşanıyor. Zamanın tipik sahneleri, mekanları ve tarihi mekanları ile ziyaretçiler geçmiş on yıllara geri dönüyor. Avrupa’nın Endüstriyel Kültür rotasının bir parçası olan August-Horch Müzesi, ayrıca beş duyu için bir deneyimdir.</p>
          </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/jpg.jpg">
          <h3>Terra Mineralia Freudenstein Sarayı</h3>
          <p>1.500 metrekarelik Schloss Freudenstein, tarihi bir ortamda, dünyanın tüm katmanlarından ve uzayın geniş derinliklerinden binlerce Güzellik sergiliyor. Terra Mineralia, 50 yılı aşkın bir süre boyunca özenle hazırlanmış ve özenle muhafaza edilmiş bir Koleksiyondur. Buluntuların çoğu son derece nadir ve hatta benzersizdir ve ziyaretçiye dünyanın kristallerinin çeşitli renk ve şekil spektrumuna ezici bir bakış açısı sunar.</p>
          </li>
        <li>
          <img src="https://images.ctfassets.net/9l3tjzgyn9gr/photo-157575/d224d518da6c26515a470a9b7e490df8/157575-honey-bun-baby.jpg?fm=jpg&fl=progressive&q=50&w=1200" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>



<h2>Baden-Württemberg Eyaletindeki Müzeler</h2>
<div class="different-center">
  <div class="different-carousel-wrapper">
    <!-- abstract radio buttons for slides -->
    <input id="different-slide1" type="radio" name="different-controls" checked="checked" />
    <input id="different-slide2" type="radio" name="different-controls" />
    <input id="different-slide3" type="radio" name="different-controls" />
    <input id="different-slide4" type="radio" name="different-controls" />
    <input id="different-slide5" type="radio" name="different-controls" />

    <!-- navigation dots -->
    <label for="different-slide1" class="different-nav-dot"></label>
    <label for="different-slide2" class="different-nav-dot"></label>
    <label for="different-slide3" class="different-nav-dot"></label>
    <label for="different-slide4" class="different-nav-dot"></label>
    <label for="different-slide5" class="different-nav-dot"></label>

    <!-- arrows -->
    <label for="different-slide1" class="different-left-arrow"> &lt; </label>
    <label for="different-slide2" class="different-left-arrow"> &lt; </label>
    <label for="different-slide3" class="different-left-arrow"> &lt; </label>
    <label for="different-slide4" class="different-left-arrow"> &lt; </label>
    <label for="different-slide5" class="different-left-arrow"> &lt; </label>

    <label for="different-slide1" class="different-right-arrow"> &gt; </label>
    <label for="different-slide2" class="different-right-arrow"> &gt; </label>
    <label for="different-slide3" class="different-right-arrow"> &gt; </label>
    <label for="different-slide4" class="different-right-arrow"> &gt; </label>
    <label for="different-slide5" class="different-right-arrow"> &gt; </label>

    <div class="different-carousel">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/01-mercedes-benz-museum-overview-2560x1440-1.jpeg" />
          <h3>Mercedes-Benz Müzesi</h3>
          <p>Mercedes-Benz markasının tarihini ve onunla ilişkili markaları kapsar. Müze, bazıları motorlu araç motorunun en eski günlerine dayanan 160’tan fazla araç içeriyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/13-5_001-hero_pm_aussen.jpg" alt="">
          <h3>Porsche Müzesi</h3>
          <p>Bir spor otomobil severlerin cenneti olan Porsche Müzesi’nde birçok nadir araç ve tarihi model bulunuyor. 1976’da açılan 5.600 metrekarelik (60.278 fit kare) alan, araçları 80 farklı sergide sergilemek için özel olarak tasarlandı. Müze, ünlü otomobil üreticisinin dünya merkezinin hemen dışında.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/25205-luftbild-zeppelin-museum-und-zeppelin-nt-c-foto-spaeth-zeppelin-museum.jpg" />
          <h3>Zeplin Müzesi-Friedrichschafen</h3>
          <p>Zeppelin zeplininin doğum yeri olan Almanya’daki Konstanz Gölü’ndeki (Bodensee) Friedrichshafen’de bir müze. Müze, dünyanın en büyük havacılık koleksiyonuna ev sahipliği yapıyor ve Zeplin hava gemilerinin tarihini anlatıyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/autoundtechnikmuseumsinsheimluftbildcrop-scaled-848x566-1.jpg">
          <h3>Oto & Teknik Müzesi-Sinsheim</h3>
          <p>Müzenin 3.000’den fazla sergisi ve 50.000 m’den fazla sergi alanı vardı.2 (540.000 fit kare), iç ve dış mekanlarda. Avrupa’nın en büyük özel müzesidir. 2001’den beri sergilenen bir Tupolev Tu-144 ve emekli Concorde uçaklarından (F-BVFB) birini bağışlayan Air France ile her iki süpersonik yolcu uçağının da gösterildiği tek yer burası. Her ikisine de halk tarafından tamamen erişilebilir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/ludwigsburg-palace-residenzsch.jpg" alt="">
          <h3>Ludwigsburg Mesken Sarayı</h3>
          <p>32 hektarlık (79 dönüm) alana yayılmış 18 binadan oluşan 452 odalı bir saray kompleksi. Almanya’nın en büyük saray mülküdür ve Barok, Rokoko, Neoklasik ve imparatorluk tarzı mimarinin birleşimidir.</p>
        </li>
      </ul>
    </div>
  </div>
</div>



<h2>Berlin ve Brandenburg Eyaletlerindeki Müzeler</h2>
<div class="different-center-2">
  <div class="different-carousel-wrapper-2">
    <!-- abstract radio buttons for slides -->
    <input id="different-slide6" type="radio" name="different-controls-2" checked="checked" />
    <input id="different-slide7" type="radio" name="different-controls-2" />
    <input id="different-slide8" type="radio" name="different-controls-2" />
    <input id="different-slide9" type="radio" name="different-controls-2" />

    <!-- navigation dots -->
    <label for="different-slide6" class="different-nav-dot-2"></label>
    <label for="different-slide7" class="different-nav-dot-2"></label>
    <label for="different-slide8" class="different-nav-dot-2"></label>
    <label for="different-slide9" class="different-nav-dot-2"></label>

    <!-- arrows -->
    <label for="different-slide6" class="different-left-arrow-2"> &lt; </label>
    <label for="different-slide7" class="different-left-arrow-2"> &lt; </label>
    <label for="different-slide8" class="different-left-arrow-2"> &lt; </label>
    <label for="different-slide9" class="different-left-arrow-2"> &lt; </label>

    <label for="different-slide6" class="different-right-arrow-2"> &gt; </label>
    <label for="different-slide7" class="different-right-arrow-2"> &gt; </label>
    <label for="different-slide8" class="different-right-arrow-2"> &gt; </label>
    <label for="different-slide9" class="different-right-arrow-2"> &gt; </label>

    <div class="different-carousel-2">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/istockphoto-867269338-170667a.jpg" />
          <h3>Neues Museum-Yeni Müze</h3>
          <p>Neues Museum, Friedrich August Stüler tarafından 19. yüzyılın ortalarında inşa edilmiş bir yapıdadır, ancak İkinci Dünya Savaşı sırasında ciddi şekilde hasar görmüştür. İronik olarak, Yeni Müze artık Eski Müzedeki antikalardan bile daha eski bir koleksiyona ev sahipliği yapıyor:</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/altes-museum-staatliche.jpg" alt="">
          <h3>Altes Museum-Eski Müze</h3>
          <p>Altes Müzesi, 1820’lerde Karl Friedrich Schinkel tarafından tasarlanan 18 iyonik sütunlu neoklasik bir yapıdır.Berliner Dom ve Schloss ile birlikte açık Lustgarten Meydanı’nda yer almaktadır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/kf_aussenansicht_04.jpg" />
          <h3>Kulturforum-Kültür Forumu</h3>
          <p>Kulturforum / Kültür Forumu, amaca yönelik müzeler ve kültür merkezlerinden oluşan bir koleksiyondur. Buradaki odak Avrupa sanatıdır. Buradaki binaların çoğu, Almanya’nın yeniden birleşmesinin imkansız göründüğü bir dönemde, Soğuk Savaş sırasında inşa edildi. Bölge, Staatliche Museen zu Berlin binalarına ek olarak Berlin Filarmoni Orkestrası’na da ev sahipliği yapmaktadır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/pergamonmuseum_aussen_c_smb_foto_becker_web.jpg">
          <h3>Pergamonmuseum-Bergama Müzesi</h3>
          <p>Bergama restore ediliyor ve ünlü Bergama Sunağı da dahil olmak üzere müzenin bazı bölümlerinin 2026 yılına kadar kapalı olması muhtemel. Müze kısmen açık kalırken, geçici ve ayrı panorama sergilerinde Bergama Sunağından bazı heykeller görülebilir.</p>
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>



<h2>Kuzey Ren-Vestfalya Eyaletindeki Müzeler</h2>
<div class="custom-center-3">
  <div class="custom-carousel-wrapper-3">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide11" type="radio" name="custom-controls-3" checked="checked" />
    <input id="custom-slide12" type="radio" name="custom-controls-3" />
    <input id="custom-slide13" type="radio" name="custom-controls-3" />

    <!-- navigation dots -->
    <label for="custom-slide11" class="custom-nav-dot-3"></label>
    <label for="custom-slide12" class="custom-nav-dot-3"></label>
    <label for="custom-slide13" class="custom-nav-dot-3"></label>

    <!-- arrows -->
    <label for="custom-slide11" class="custom-left-arrow-3"> &lt; </label>
    <label for="custom-slide12" class="custom-left-arrow-3"> &lt; </label>
    <label for="custom-slide13" class="custom-left-arrow-3"> &lt; </label>

    <label for="custom-slide11" class="custom-right-arrow-3"> &gt; </label>
    <label for="custom-slide12" class="custom-right-arrow-3"> &gt; </label>
    <label for="custom-slide13" class="custom-right-arrow-3"> &gt; </label>

    <div class="custom-carousel-3">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/vespa.jpg" />
          <h3>Haus der Geschichte-Tarih Binası-Bonn</h3>
          <p>Müze 1945 ten bu yana olan Alman tarihini teması olarak alır. Alman tarihi ile ilgilenmek isteyenler, son 75 yılın siyaseti ve günlük yaşamı hakkında daha fazla bilgi edinmek isteyenler ve Alman donanımı ile ilgilenmek isteyenler, mutlaka eski Federal başkenti olan Bonn’a doğru yola çıkmalıdır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/fds.jpg" alt="">
          <h3>Deutsches Fußballmuseum-Alman Futbol Müzesi, Dortmund</h3>
          <p>Dortmund’da bulunan bu müze Alman Futbolunu, kendisine konu almıştır. Elbette Alman futbolunun tarihi ve futbol efsaneleri hakkında çok şey var, ancak içinde keşfedilecek çok yan da vardır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/gasometer-2021-plakatweb610.jpg" />
          <h3>Gasometer-Gasometre-Oberhausen</h3>
          <p>Oberhausen’da bulunan bu yer pek müze olarak tanımlanamasa da Doğa ve Kültür ile ilgili konularda sergi salonu niteliğindedir. İçeride bulunan ünlü eserlere ”Das zerbrechliche Paradies(Kırılgan Cennet)” resmi örnek verilebilir.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>




<h2>Bremen Eyaletindeki Müzeler</h2>
<div class="new-center-4">
  <div class="new-carousel-wrapper-4">
    <!-- abstract radio buttons for slides -->
    <input id="new-slide16" type="radio" name="new-controls-4" checked="checked" />
    <input id="new-slide17" type="radio" name="new-controls-4" />
    <input id="new-slide18" type="radio" name="new-controls-4" />
    <input id="new-slide19" type="radio" name="new-controls-4" />

    <!-- navigation dots -->
    <label for="new-slide16" class="new-nav-dot-4"></label>
    <label for="new-slide17" class="new-nav-dot-4"></label>
    <label for="new-slide18" class="new-nav-dot-4"></label>
    <label for="new-slide19" class="new-nav-dot-4"></label>

    <!-- arrows -->
    <label for="new-slide16" class="new-left-arrow-4"> &lt; </label>
    <label for="new-slide17" class="new-left-arrow-4"> &lt; </label>
    <label for="new-slide18" class="new-left-arrow-4"> &lt; </label>
    <label for="new-slide19" class="new-left-arrow-4"> &lt; </label>

    <label for="new-slide16" class="new-right-arrow-4"> &gt; </label>
    <label for="new-slide17" class="new-right-arrow-4"> &gt; </label>
    <label for="new-slide18" class="new-right-arrow-4"> &gt; </label>
    <label for="new-slide19" class="new-right-arrow-4"> &gt; </label>

    <div class="new-carousel-4">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/bremen-dommuseum-erdgeschoss.jpg" />
          <h3>Katedral Müzesi-Dom Museum im St. Petri Dom</h3>
          <p>Dom Müzesi, Katedralin büyük ölçekli restorasyonunun bir sonucu olarak ortaya çıktı. Restorasyon nedeniyle Katedralin sayısız mezarı ve 1.200 yıllık tarihi hakkında yeni bilgiler keşfedildi. Yüksek koronun yanındaki tarihi odalarda bir müze alanı oluşturuldu. Bremen’deki Katedral Müzesi Aziz Petri Katedrali bir ekümenik Kilisenin tarihi müzesi içinde Bremen Katedralin ortaçağ piskopos mezarlarından buluntuları kaydetmek için 1987 yılında kurulmuştur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/krankenhausmuseum_ausstellung_03.jpg" alt="">
          <h3>Hastane Müzesi-Krankenhaus Museum</h3>
          <p>Krankenhaus(Hastane) Müzesi bir tıbbi tarih müzesi içinde Doğu Vestfalya şehri Bielefeld içinde Kuzey Ren-Vestfalya. Dr. Mildred Scheel Parkı’ndaki Bielefeld Mitte Kliniğinde yer almaktadır. Müze, hastane yatağındaki hastaya odaklanan Bielefeld’deki hastanelerin tarihine adanmıştır. Kişisel mutfak eşyaları ve ilgili ekipman, tedavi ve bakım yardımcıları da mevcuttur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asd.jpg?w=1024" />
          <h3>Kainat Müzesi-Bremen</h3>
          <p>Universum Bremen’de, bilim dünyasına olağanüstü bir keşif yolculuğuna çıkıyorsunuz. 300’den fazla sergi, bilimsel fenomenleri yakından ve tüm duyularınızla deneyimlemenizi ve anlamanızı sağlar. Üç konu alanı Teknoloji, insan ve Doğa burada keşfedilmeyi bekliyor. Yılda ortalama 450.000 ziyaretçi almaktadır.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/hh_eingang-menschen2-sister.jpg">
          <h3>Focke Müzesi-Bremen</h3>
          <p>Focke Müzesi, Bremen şehrinin tarih müzesi olan Bremer Eyalet Sanat ve Kültür Tarihi Müzesi’dir. 16. yüzyıldan 19. yüzyıla kadar olan binalarla tamamlanan modern ana bina, Riensberg’in Bremen bölgesinde 4,5 hektarlık bir parkta yer almaktadır. Şehrin Rheinsberg semtinde 4,5 hektarlık (11 dönüm) arazide yer almaktadır. 1964 yılında açılan ve 2002 yılında genişletilen ana binaya ek olarak, müze kompleksi, 1964 yılından kalma binaları içermektedir.</p>
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>




<h2>Bayern(Bavyera) Eyaletindeki Müzeler</h2>
<div class="custom-center-5">
  <div class="custom-carousel-wrapper-5">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide21" type="radio" name="custom-controls-5" checked="checked" />
    <input id="custom-slide22" type="radio" name="custom-controls-5" />
    <input id="custom-slide23" type="radio" name="custom-controls-5" />

    <!-- navigation dots -->
    <label for="custom-slide21" class="custom-nav-dot-5"></label>
    <label for="custom-slide22" class="custom-nav-dot-5"></label>
    <label for="custom-slide23" class="custom-nav-dot-5"></label>

    <!-- arrows -->
    <label for="custom-slide21" class="custom-left-arrow-5"> &lt; </label>
    <label for="custom-slide22" class="custom-left-arrow-5"> &lt; </label>
    <label for="custom-slide23" class="custom-left-arrow-5"> &lt; </label>

    <label for="custom-slide21" class="custom-right-arrow-5"> &gt; </label>
    <label for="custom-slide22" class="custom-right-arrow-5"> &gt; </label>
    <label for="custom-slide23" class="custom-right-arrow-5"> &gt; </label>

    <div class="custom-carousel-5">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/buchheim-museum-der-phantasie-in-bernried-am.jpg" />
          <h3>Buchheim Museum der Phantasie-Bernried İlçesi</h3>
          <p>Hayatı boyunca yazar, film yapımcısı ve ressam Lothar-Günther Buchheim resim ve eserler topladı. Artık ziyaretçiler koleksiyonunu Starnberg Gölü’nün yanındaki müzede görebilirler.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/csm_luftmuseum_10-2017_0012_1500_6c86cd686f.jpg" alt="">
          <h3>Luftmuseum-Amberg İlçesi</h3>
          <p>Amberg’deki Engelsburg Kalesi’ndeki Hava Müzesi, toplam 650 metrekarelik üç kata yayılmış, duyabileceğiniz, görebileceğiniz ve dokunabileceğiniz havaya sahiptir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/esm-sammlung-edwin-scharff-hockende-foto-niks.jpg" />
          <h3>Edwin Scharff Museum-Neu Ulm İlçesi</h3>
          <p>Neu-Ulm Edwin Scharff Müzesi, Almanya’daki sanatçının eserlerine ve modern sanatına adanmış sergi salonlarının yanı sıra etkileşimli bir çocuk müzesi içeren eşsiz bir kurumdur.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>




<h2>Thüringen Eyaletindeki Müzeler</h2>
<div class="custom-center-6">
  <div class="custom-carousel-wrapper-6">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide26" type="radio" name="custom-controls-6" checked="checked" />
    <input id="custom-slide27" type="radio" name="custom-controls-6" />
    <input id="custom-slide28" type="radio" name="custom-controls-6" />
    <input id="custom-slide29" type="radio" name="custom-controls-6" />

    <!-- navigation dots -->
    <label for="custom-slide26" class="custom-nav-dot-6"></label>
    <label for="custom-slide27" class="custom-nav-dot-6"></label>
    <label for="custom-slide28" class="custom-nav-dot-6"></label>
    <label for="custom-slide29" class="custom-nav-dot-6"></label>

    <!-- arrows -->
    <label for="custom-slide26" class="custom-left-arrow-6"> &lt; </label>
    <label for="custom-slide27" class="custom-left-arrow-6"> &lt; </label>
    <label for="custom-slide28" class="custom-left-arrow-6"> &lt; </label>
    <label for="custom-slide29" class="custom-left-arrow-6"> &lt; </label>

    <label for="custom-slide26" class="custom-right-arrow-6"> &gt; </label>
    <label for="custom-slide27" class="custom-right-arrow-6"> &gt; </label>
    <label for="custom-slide28" class="custom-right-arrow-6"> &gt; </label>
    <label for="custom-slide29" class="custom-right-arrow-6"> &gt; </label>

    <div class="custom-carousel-6">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/05oldsynaerfurt-edited-version-jpg.jpeg" />
          <h3>Thüringen Yahudi Cemaati Kültür ve Eğitim Merkezi</h3>
          <p>2001 yılında kurulan Kültür ve Eğitim Merkezi, o zamanlarda yeni yeni büyüyen topluluğa ek kültürel ve eğitimsel hizmetler sunar ve Yahudilerin dini ve kültürel yaşamı hakkında bilgi aktarımını teşvik eder.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/bild_1.jpg" alt="">
          <h3>Friedrich-Fröbel Müzesi</h3>
          <p>Friedrich-Fröbel Müzesi, anaokulunun başlangıcını canlandırıyor. Müzede yer alan “Bodrumun üstündeki ev” de Anaokulunun doğuşu gerçekleşti. Friedrich Wilhelm August Fröbel, 1839’da Okul Öncesi Eğitim programını uygulamaya başladı.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/weimar-schillers-wohnhaus-vorderfassade.jpg" />
          <h3>Schiller’in Evi-Weimar</h3>
          <p>Friedrich Schiller son üç yılını Esplanade’deki evinde geçirdi. Burada “Messina’nın Gelini” ve “tell” adlı büyük Dramalar, şairin 1805’te çalışma odasında ölmesinden önce ortaya çıktı. Bugün hala orijinal Masa Ve Schiller’in yatağını görebilirsiniz.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/weimar_0012.jpg">
          <h3>Goethe Ulusal Müzesi-Weimar</h3>
          <p>Goethe Ulusal Müzesi, Goethe’nin yaşamını ve çalışmalarını sergilemek ve araştırmak için en önemli müzedir. Eşsiz bir hazineye ev sahipliği yapıyor: şairin Evi, orijinal mobilya ve koleksiyon eşyalarıyla. Goethe’nin edebi yaratıcılığının ötesinde karmaşıklığını ortaya koyan komşu “Lebensfluten – Tagensturm” sergisinde de çok sayıda eser görülebilir.</p>
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>



<h2>Schleswig-Holstein Eyaletindeki Müzeler</h2>
<div class="custom-center-7">
  <div class="custom-carousel-wrapper-7">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide31" type="radio" name="custom-controls-7" checked="checked" />
    <input id="custom-slide32" type="radio" name="custom-controls-7" />
    <input id="custom-slide33" type="radio" name="custom-controls-7" />

    <!-- navigation dots -->
    <label for="custom-slide31" class="custom-nav-dot-7"></label>
    <label for="custom-slide32" class="custom-nav-dot-7"></label>
    <label for="custom-slide33" class="custom-nav-dot-7"></label>

    <!-- arrows -->
    <label for="custom-slide31" class="custom-left-arrow-7"> &lt; </label>
    <label for="custom-slide32" class="custom-left-arrow-7"> &lt; </label>
    <label for="custom-slide33" class="custom-left-arrow-7"> &lt; </label>

    <label for="custom-slide31" class="custom-right-arrow-7"> &gt; </label>
    <label for="custom-slide32" class="custom-right-arrow-7"> &gt; </label>
    <label for="custom-slide33" class="custom-right-arrow-7"> &gt; </label>

    <div class="custom-carousel-7">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/aaaaaaaaaaaaaaaaaaaaa.jpg" />
          <h3>UNESCO Dünya Mirası Danewerk-Haithabu(Viking Müzesi)</h3>
          <p>”Danewerk” kelime anlamı olarak Yüksek Orta Çağ’ın mekansal ve zamansal olarak tahkimatına denir. Altın takılar veya inciler gibi özel ürünlerin birçok ustası kalıcı olarak yerleşti ve burayı gelişen bir metropol haline getirdi. Kendinizi 1000 yıl önce Vikinglerin renkli Koşuşturmasına geri götüren bu yerde, açık alanda heybetli eski yapım evlerin yeniden inşasına ve burada bulunan çok sayıda eserlere hayret edin.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdaaasasdadas.jpg" alt="">
          <h3>AVRUPA HANSA MÜZESİ-HANSAMUSEUM</h3>
          <p>Bir ekonomi Müzesi olarak, Müze aynı zamanda ticaret ve ekonomi ile ilgili güncel konularla da ilgilenmektedir. Eşsiz ambiyansı ve etkinlikler için bol miktarda alanı ile daima, geleceği ve geçmişi düşünmek için ideal bir yerdir. Burada sadece bugünü anlayamaz, aynı zamanda tadını çıkarabilirsiniz.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/aaaaaaaaaaa.jpg" />
          <h3>Holstentor Müzesi</h3>
          <p>Holstentor Müzesi’ndeki sergide Lübeck’e nasıl “Hansa Kraliçesi” olduğunu öğreneceksiniz. Uzun mesafeli ticaret, şehir tarihi, aynı zamanda Denizcilik, Pazar olayları ve Orta Çağ’da Hukuk belgelenmiştir.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>





<h2>Niedersachsen-Aşağı Saksonya Eyaletindeki Müzeler</h2>
<div class="custom-center-8">
  <div class="custom-carousel-wrapper-8">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide36" type="radio" name="custom-controls-8" checked="checked" />
    <input id="custom-slide37" type="radio" name="custom-controls-8" />
    <input id="custom-slide38" type="radio" name="custom-controls-8" />
    <input id="custom-slide39" type="radio" name="custom-controls-8" />
    <input id="custom-slide40" type="radio" name="custom-controls-8" />

    <!-- navigation dots -->
    <label for="custom-slide36" class="custom-nav-dot-8"></label>
    <label for="custom-slide37" class="custom-nav-dot-8"></label>
    <label for="custom-slide38" class="custom-nav-dot-8"></label>
    <label for="custom-slide39" class="custom-nav-dot-8"></label>
    <label for="custom-slide40" class="custom-nav-dot-8"></label>

    <!-- arrows -->
    <label for="custom-slide36" class="custom-left-arrow-8"> &lt; </label>
    <label for="custom-slide37" class="custom-left-arrow-8"> &lt; </label>
    <label for="custom-slide38" class="custom-left-arrow-8"> &lt; </label>
    <label for="custom-slide39" class="custom-left-arrow-8"> &lt; </label>
    <label for="custom-slide40" class="custom-left-arrow-8"> &lt; </label>

    <label for="custom-slide36" class="custom-right-arrow-8"> &gt; </label>
    <label for="custom-slide37" class="custom-right-arrow-8"> &gt; </label>
    <label for="custom-slide38" class="custom-right-arrow-8"> &gt; </label>
    <label for="custom-slide39" class="custom-right-arrow-8"> &gt; </label>
    <label for="custom-slide40" class="custom-right-arrow-8"> &gt; </label>

    <div class="custom-carousel-8">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdasaaadd.jpg" />
          <h3>Endüstri Müzesi- Lohne</h3>
          <p>1000 metrekarelik sergi alanı, mütevazı başlangıçlardan ekonomik olarak başarılı bir bölgenin nasıl yaratıldığını gösteriyor. Galeri, Luzie Uptmoor ve birçok ödüllü ressamların resminlerini de sergiliyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdasdasaasdaasd.jpg" alt="">
          <h3>Biosphaerıum Elbtalaue-Bleckede</h3>
          <p>Tarihi Bleckeder Schloss’ta Aşağı Saksonya’daki Elbtalaue Biyosfer Rezervi’nin Bilgi Merkezi Biosphaerium Elbtalaue olmuştur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdasdasdasdasdasdasdas.jpeg" />
          <h3>Gifhorn Uluslarası Rüzgar ve Su Değirmenleri Müzesi</h3>
          <p>Yaklaşık 15 hektarlık Park alanında, Açık Hava Müzesi on bir ülkeden 14 Değirmene ev sahipliği yapıyor. Değirmenler işlevseldir ve orijinal boyutlarında sunulur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/blick-auf-die-gemaeldegalerie-rembrandt.jpeg">
          <h3>Herzog Anton Ulrich Müzesi-Braunschweig</h3>
          <p>Herzog Anton Ulrich Müzesi, Aşağı Saksonya eyaletinin Sanat müzesidir. Sadece Avrupa’nın en eski Müzelerinden biri değil (açılış tarihi: 1754), aynı zamanda birinci sınıf Sanat koleksiyonları sayesinde dünyanın en önemli Antik Sanat Müzelerinden biridir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asaasdasdas.jpg" alt="">
          <h3>Klimahaus-İklim Binası-Bremerhaven</h3>
          <p>Sekizinci Doğu boylamı boyunca dünyayı gezerken, Klimahaus Bremerhaven ziyaretçileri dünyanın en önemli iklim bölgelerindeki yaşam hakkında otantik izlenimler edinebilirler.</p>
        </li>
      </ul>
    </div>
  </div>
</div>






<h2>Hessen Eyaletindeki Müzeler</h2>
<div class="custom-center-9">
  <div class="custom-carousel-wrapper-9">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide41" type="radio" name="custom-controls-9" checked="checked" />
    <input id="custom-slide42" type="radio" name="custom-controls-9" />
    <input id="custom-slide43" type="radio" name="custom-controls-9" />
    <input id="custom-slide44" type="radio" name="custom-controls-9" />
    <input id="custom-slide45" type="radio" name="custom-controls-9" />

    <!-- navigation dots -->
    <label for="custom-slide41" class="custom-nav-dot-9"></label>
    <label for="custom-slide42" class="custom-nav-dot-9"></label>
    <label for="custom-slide43" class="custom-nav-dot-9"></label>
    <label for="custom-slide44" class="custom-nav-dot-9"></label>
    <label for="custom-slide45" class="custom-nav-dot-9"></label>

    <!-- arrows -->
    <label for="custom-slide41" class="custom-left-arrow-9"> &lt; </label>
    <label for="custom-slide42" class="custom-left-arrow-9"> &lt; </label>
    <label for="custom-slide43" class="custom-left-arrow-9"> &lt; </label>
    <label for="custom-slide44" class="custom-left-arrow-9"> &lt; </label>
    <label for="custom-slide45" class="custom-left-arrow-9"> &lt; </label>

    <label for="custom-slide41" class="custom-right-arrow-9"> &gt; </label>
    <label for="custom-slide42" class="custom-right-arrow-9"> &gt; </label>
    <label for="custom-slide43" class="custom-right-arrow-9"> &gt; </label>
    <label for="custom-slide44" class="custom-right-arrow-9"> &gt; </label>
    <label for="custom-slide45" class="custom-right-arrow-9"> &gt; </label>

    <div class="custom-carousel-9">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/0aa9ad6de9a802b65698e6af933f309a.jpg" />
          <h3>Spohr Müzesi-Kassel Şehri</h3>
          <p>Bugünkü Kassel Kulturbahnhof’un tarihi bir tuğla binasında (Güney kanadı) 2009’dan beri modern ve engelsiz bir şekilde döşenmiş “Spohr Müzesi”bulunmaktadır. Burada ziyaretçiler, 19. yüzyılın başlarındaki en önemli müzisyenlerden birinin hayatına ve çalışmalarına çeşitli şekillerde erişebilirler: Louis Spohr (1784-1859).</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/0ww26120008ye46le267f_magic.jpg" alt="">
          <h3>Horex Museum-Bad Homburg vor der Höhe Şehri</h3>
          <p>2012 yılında açılan Yeni Müze Binası, tren istasyonunun güneyinde ve diğer şeylerin yanı sıra efsanevi Motosikletlerin yapıldığı eski Horex fabrikasının hemen yakınında yer almaktadır. Binanın kendisi, yuvarlatılmış Köşeleri ve pencerelerin önündeki enine Kaburgaları ile bir Horeks tek silindirli motoru andırıyor. Ekstra bilgi olarak da Horex ünlü bir Alman motosiklet üreticisidir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/stadel-museum.jpg" />
          <h3>Städel Museum-Frankfurt Main İlçesi</h3>
          <p>Almanya’nın en eski ve en önemli Müze vakfı olan Städtel Müzesi (Städtel Sanat Enstitüsü ve Belediye Galerisi), 1815 yılında Frankfurtlu bankacı ve tüccar Johann Friedrich Stadtel’in Sanat Eserleri, bir sanat Kütüphanesi ve Sermayeyi içeren bir bağışına dayanıyor. 1874’ten 1878’e kadar, bugün hala kullanılan Müze Binası inşa edildi ve birkaç kez yapısal olarak genişletildi. Şubat 2012’de yeni bir yeraltı Binası açıldı. Fotoğraflarla 1945’ten sonra sunulan sanatın büyük ölçüde genişletilmiş koleksiyonudur.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/innenansicht.jpg">
          <h3>Schulmuseum-Kriftel İlçesi</h3>
          <p>Kapsamlı bir okulda bulunan Müze (Main-Taunus-Kreis okul tarihi Koleksiyonu), özellikle Vortaunus bölgesinde okul sistemi ile ilgilenmektedir. Hem Pedagojinin gelişimi hakkında fikir vermek hem de okulun ve çocukluğun sosyal tarihini temsil etmek için tasarlanmıştır. Bazı okullar, bazı günlerde bu yerde ders bile işlemektedir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/16413-1.jpeg?w=1024" alt="">
          <h3>Mathematikum-Gießen İlçesi</h3>
          <p>Matematik Merkezi 2002 yılında eski Giessener Zollhaus’ta dünyanın ilk matematik” Mitmachmuseum ” (Bilim Merkezi) olarak açıldı. Amaç, matematiği halka açık bir şekilde anlaşılabilir hale getirmektir – ve aileler için bir gezi yeri olarak idealdir.</p>
        </li>
      </ul>
    </div>
  </div>
</div>




<h2>Sachsen-Anhalt Eyaletindeki Müzeler</h2>
<div class="custom-center-10">
  <div class="custom-carousel-wrapper-10">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide46" type="radio" name="custom-controls-10" checked="checked" />
    <input id="custom-slide47" type="radio" name="custom-controls-10" />
    <input id="custom-slide48" type="radio" name="custom-controls-10" />

    <!-- navigation dots -->
    <label for="custom-slide46" class="custom-nav-dot-10"></label>
    <label for="custom-slide47" class="custom-nav-dot-10"></label>
    <label for="custom-slide48" class="custom-nav-dot-10"></label>

    <!-- arrows -->
    <label for="custom-slide46" class="custom-left-arrow-10"> &lt; </label>
    <label for="custom-slide47" class="custom-left-arrow-10"> &lt; </label>
    <label for="custom-slide48" class="custom-left-arrow-10"> &lt; </label>

    <label for="custom-slide46" class="custom-right-arrow-10"> &gt; </label>
    <label for="custom-slide47" class="custom-right-arrow-10"> &gt; </label>
    <label for="custom-slide48" class="custom-right-arrow-10"> &gt; </label>

    <div class="custom-carousel-10">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/foto-heiko-janowski_trojanisches-pferd-scaled-1.jpg" />
          <h3>Winckelmann-Museum</h3>
          <p>Hansa kenti Stendal’daki Müze, klasik Arkeoloji ve Modern Sanat bilimlerinin kurucusunun hayatına adanmıştır. Bir müze bölgesinde, “Volkanın altında” Aile Müzesi ve dünyanın en büyük yürünebilir truva atı ile sergi alanları bulunmaktadır. Winckelmann-Museum</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/1053180118213811.jpg" alt="">
          <h3>Bismarck-Museum Schönhausen</h3>
          <p>İlk Alman Şansölyesi Otto von Bismarck’ın onuruna düzenlenen Müze, “Reich’in kurucusu” olarak saygı duyulan Devlet adamını çevreleyen çağdaş kültlük hakkında bir izlenim bırakıyor.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/service-besuch-diesdorf-slider01-berndrieck.jpg" />
          <h3>Freilichtmuseum Diesdorf</h3>
          <p>Altmark’taki Diesdorf’taki Freiland Müzesi bize çok eski zamanların kırsal yaşamını sunuyor. Güzel bahçeleri ve çok iyi yapılmış sergisi ile 20 tarihi evleri, ziyaretçileri memnun.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>




<h2>Mecklenburg-Vorpommern Eyaletindeki Müzeler</h2>
<div class="custom-center-11">
  <div class="custom-carousel-wrapper-11">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide51" type="radio" name="custom-controls-11" checked="checked" />
    <input id="custom-slide52" type="radio" name="custom-controls-11" />
    <input id="custom-slide53" type="radio" name="custom-controls-11" />

    <!-- navigation dots -->
    <label for="custom-slide51" class="custom-nav-dot-11"></label>
    <label for="custom-slide52" class="custom-nav-dot-11"></label>
    <label for="custom-slide53" class="custom-nav-dot-11"></label>

    <!-- arrows -->
    <label for="custom-slide51" class="custom-left-arrow-11"> &lt; </label>
    <label for="custom-slide52" class="custom-left-arrow-11"> &lt; </label>
    <label for="custom-slide53" class="custom-left-arrow-11"> &lt; </label>

    <label for="custom-slide51" class="custom-right-arrow-11"> &gt; </label>
    <label for="custom-slide52" class="custom-right-arrow-11"> &gt; </label>
    <label for="custom-slide53" class="custom-right-arrow-11"> &gt; </label>

    <div class="custom-carousel-11">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/ccccccc.jpg?w=1024" />
          <h3>Neubrandenburg Bölge Müzesi</h3>
          <p>Derneğin doğum gününü müzenin doğum günü takip eder. 1872’de Neubrandenburg Müzesi kuruldu vebu yılda Treptov Kapısı’ndaki ilk sergi gerçekleşti. O dönemde kurulan koleksiyon, 150 yılda on binlerce nesneye ulaştı.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/ssdasadas.jpg" alt="">
          <h3>Ozeaneum Akvaryum Müzesi</h3>
          <p>Çatı terasında ferah bir penguen tesisi ve Avrupa’nın en büyük Baltık Denizi Sergisi yer alıyor. En büyük Akvaryum 2,6 milyon litre su tutar ve 50 m2’lik panoramik penceresi balık sürüleri, vatozlar ve hatta köpekbalıklarının manzarasını sunar. OCEANEUM’DA bilimsel sergiler 50 çarpıcı, kısmen dev Akvaryumla birleştiriliyor. Müze, “2010 yılı Avrupa Müzesi” ödülüne layık görüldü.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/ddddddd.jpg" />
          <h3>Rostock Kültür Tarihi Müzesi</h3>
          <p>ROSTOCK KÜLTÜR TARİHİ MÜZESİ
1270 yılında kurulan Rostock Sistersian manastırı olan tarihi zum Heiligen Kreuz Manastırı’nda yer almaktadır. Müze, geniş bir sanat ve kültür tarihi koleksiyonuna sahiptir ve Mecklenburg-Vorpommern’deki burjuva Kültür tarihini belgeleyen en önemli yerlerden biridir. 1859 yılında kurulan Belediye Müzesinde resim, Grafik, El Sanatları, madeni para, Mobilya, Militaria, günlük Kültür ve Arkeoloji koleksiyonları bulunmaktadır.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>







<h2>Hamburg Eyaletindeki Müzeler</h2>
<div class="custom-center-12">
  <div class="custom-carousel-wrapper-12">
    <!-- abstract radio buttons for slides -->
    <input id="custom-slide56" type="radio" name="custom-controls-12" checked="checked" />
    <input id="custom-slide57" type="radio" name="custom-controls-12" />
    <input id="custom-slide58" type="radio" name="custom-controls-12" />

    <!-- navigation dots -->
    <label for="custom-slide56" class="custom-nav-dot-12"></label>
    <label for="custom-slide57" class="custom-nav-dot-12"></label>
    <label for="custom-slide58" class="custom-nav-dot-12"></label>

    <!-- arrows -->
    <label for="custom-slide56" class="custom-left-arrow-12"> &lt; </label>
    <label for="custom-slide57" class="custom-left-arrow-12"> &lt; </label>
    <label for="custom-slide58" class="custom-left-arrow-12"> &lt; </label>

    <label for="custom-slide56" class="custom-right-arrow-12"> &gt; </label>
    <label for="custom-slide57" class="custom-right-arrow-12"> &gt; </label>
    <label for="custom-slide58" class="custom-right-arrow-12"> &gt; </label>

    <div class="custom-carousel-12">
      <ul>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/aaaaaaaaaaaaaaaaaqaaaaaa.jpg" />
          <h3>Wasserkunst Elbinsel Kaltehofe Müzesi</h3>
          <p>Wasserkunst Elbinsel Kaltehofe, endüstriyel bir anıtın rekreasyonunu, ekolojik çeşitliliğini ve heyecan verici kültürel tarihini birleştiriyor. Rothenburgsort mahallesindeki Wasserkunstinsel’i (‘su işleri adası’) büyük ve küçükler için ilham verici kılan rehberli turlar, atölyeler ve özel etkinlikler sunulmaktadır. Ayrıca bu yerde Hamburg şehir bölgesindeki 18 yağış ölçüm istasyonundan birine ev sahipliği yapıyor ve 20. yüzyılın başlarına kadar veri sağlıyor. Bu şekilde, özellikle Hamburg’daki iklim değişikliği kesin olarak değerlendirilebilir ve eğilimler daha ayrıntılı olarak incelenebilir.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg" alt="">
          <h3>Hamburg Müzesi</h3>
          <p>1922’de açılan güzel Hamburg müzesi, etkinlikler ve sergilerle şehrin 1.200 yıllık büyüleyici tarihini hayata geçiriyor. Minyatür demir yolu sistemi ve cam çatılı iç avlu, Hamburg müzesi’ni ziyaret etmeyi daha da gerekli kılıyor. Krameramtsstuben tarihi evleri’ndeki 1850’lerde Hamburg yaşamına bir bakış sunan küçük müzenin de Hamburg müzesi’nin bir parçası olduğunu unutmayın.</p>
        </li>
        <li>
          <img src="https://dillerinkulturu.files.wordpress.com/2023/01/asdasdasaas-1.jpg" />
          <h3>IMMH Müzesi</h3>
          <p>Hamburg’un ayakta kalan en eski tarihi deposu, Speicherstadt’taki kapsamlı bir denizcilik sergisi olan IMMH’ye ev sahipliği yapmaktadır. HafenCity Hamburg’da bulunan müze, 2008 yılında kapılarını halka açtı. Olağanüstü koleksiyon, dokuz seviyeye çeşitli sergilere dağıtılıyor ve her sergi eserler aracılığıyla kendine özgü hikayesini anlatıyor. Örneğin, sekizinci seviyedeki dünyanın en büyük kemik gemisi koleksiyonunu ziyaret etmek isteyebilirsiniz.</p>
        </li>
        <li>
          <img src="https://example.com/image4.jpg">
        </li>
        <li>
          <img src="https://example.com/image5.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>`,
        
      };
      
      let activeContent = null;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          const contentKey = item.getAttribute("data-content");
          const replacementContent = replacementContents[contentKey];

          if (replacementContent) {
            originalContent.innerHTML = replacementContent;
            izParagraph.textContent = item.textContent;
            activeContent = contentKey;
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (activeContent) {
          originalContent.innerHTML = replacementContents[activeContent];
          izParagraph.textContent = activeContent.toUpperCase();
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
    });


document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `
      <p>Destatis’e (Federal İstatistik Dairesi) göre Ulaşım, malların ve kişilerin hareketliliği anlamına gelmektedir. Ulusal ve uluslararası iş bölümü, turizm ve boş zaman etkinliği sağlar. Yükselen mobilite nedeniyle ulaşım altyapısı zorlıuklarla karşı karşıyadır. Bu sebeple resmi tarfik istatistikleri, nispeten sıkı bir şekilde ulaşım faaliyetleri ve önkoşullar ile yönlendirildiğini söyler. Özellikle ulaşım hizmetleri, nakliye şirketleri, ulaşım araçları stokları ve ulaşım altyapısı ile ilgili tüm önemli bilgileri toplarlar.1</p>
    <p>Almanya’da 830.000 km yol(buna cadde, sokak vb. dâhil), 38.600 km Demiryolu, 7.300 km iç su yolu ve 24 ana havaalanı, malların taşınmasını ve vatandaşların hareketliliğini sağlamaktadır. Şüphesiz ki ve her ülkede olduğu gibi; insanlara, işletmelere gıda, mal ve hammadde tedarikinin sorunsuz bir şekilde sağlanması için ön koşuldur.</p>
    <p>Ayrıca, aşırı hava olayları trafik altyapısında büyük tahribata neden olur. İklim değişikliği nedeniyle sıklık ve yoğunlukta artan şiddetli yağışlar, seller, heyelanlar ve orman yangınları, son yıllarda Almanya’daki yollara, köprülere ve demiryolu altyapılarına giderek daha fazla zarar vermiştir.</p>
    <p>Ek olarak Almanya’da yol müzesi bulunmaktadır. Bu müzeyi insanlara yol müzesi adıyla tanıtınca akıllarına genellikle yol üstünde bulunan bir açık hava müzesi geliyor ancak durum ironik olarak bu müzenin konusu geçmişten günümüze yapılmış olan kaldırımlar, kısa yollar ve yol ile ilgili her şeydir. Müze Rheinland-Pfalz eyaletinde bulunmaktadır. Görmek için aşağıdaki seçeneğe tıklayınız.</p>
      `;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "ulasim") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "ALMANYA ULAŞIMI VE ALTYAPISI";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "ALMANYA ULAŞIMI VE ALTYAPISI";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
    });






    document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.querySelector(".toggle");
      const listItems = document.querySelectorAll(".list-item");
      const originalContent = document.querySelector(".izah");
      const izParagraph = document.querySelector(".iz");
      const replacementContent = `
        <p>Vittorio Hösle'nin ''A Short History of German Philosophy'' kitabının direkt olarak burada da verilen özeti, Alman felsefesini özetler nitelikte olabilir; Ortaçağdan başlayarak mistik Meister Eckhartkitap, Luther'in Reformunun getirdiği felsefi değişikliklere vurgu yapar ve ardından Leibniz ve Kant'ın çalışmaları da dahil olmak üzere Alman felsefesinin klasik çağının ayrıntılı bir açıklaması sunulur; Lessing, Hamann, Herder ve Schiller'de yeni bir beşeri bilimler biçiminin yükselişi ilk Romantikler ve İdealistler Fichte, Schelling ve Hegel. Sonraki zamanalar ise Schopenhauer, Feuerbach, Marx ve Nietzsche'deki Alman sentezinin çöküşünü araştırıyor. Yirminci yüzyıla dönersek kitabın yazarı olan Hösle, Frege ve Viyana ve Berlin çevrelerinde analitik felsefenin yükselişini araştırıyor; Neo-Kantçılık ve Dilthey'de tarih bilimlerinin temeli; Husserl'in fenomenolojisi ve Heidegger'in radikal değişimi; Nazi filozofları Gehlen ve Schmitt; ve başlıca Batı Alman filozofları, gadamer, Jonas ve iki Frankfurt okulundan olanlar dahil. On sekizinci yüzyılın ortalarından yirminci yüzyılın ortalarına kadar kendine özgü bir Alman felsefi geleneği olduğu savunulur, bu geleneğin neden büyük ölçüde II. Dünya Savaşı'ndan sonraki on yıllarda sona erdiğini söyler.</p>
        <div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 20px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFW4yCkcmI&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>`;
      let isReplaced = false;

      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.getAttribute("data-content") === "felsefe") {
            if (!isReplaced) {
              originalContent.innerHTML = replacementContent;
              izParagraph.textContent = "FELSEFE";
              isReplaced = true;
            }
          }
        });
      });

      toggleButton.addEventListener("click", () => {
        if (isReplaced) {
          originalContent.innerHTML = replacementContent;
          izParagraph.textContent = "FELSEFE";
        } else {
          originalContent.innerHTML = "";
          izParagraph.textContent = "İZAH:";
        }
      });
    });



    function appendLazyImages(images) {
            const container = document.getElementById("image-container");
            
            images.forEach(imageUrl => {
                const img = new Image();
                img.src = imageUrl;
                img.alt = "Lazy Loaded Image";
                img.loading = "lazy";
                
                container.appendChild(img);
            });
        }

        // Load images when the page is fully loaded
        window.addEventListener("load", () => {
            appendLazyImages(imagesToLoad);
        });