import News from "@/assets/img/news.png";

function YamaNotes() {
  return (
    <div className="w-full bg-gradient-to-t from-white/5 to-transparent rounded-b-lg px-4 sm:px-6 md:px-8 py-10 select-none">
      <img src={News} className="w-full h-[440px] object-cover" />
      <div className="flex flex-col">
        <h1 className="text-white text-xl font-bold mt-4">
          VALORANT 10.07 Yama Notları
        </h1>
        <p className="text-[#979797] text-base">
          Ajanlara ve oyun arayüzüne yönelik giderilen hatalar, konsol için yeni
          zaman çizelgesi görüntüleme seçeneği ve dahası.
        </p>
        <p className="text-[#979797] mt-4">
          <span className="text-amber-500">Oyun Güncellemeleri</span> - Riot
          Prism - 27.05.2025
        </p>

        <div className="flex flex-col mt-10">
          <p className="font-bold text-white">A YAMASI GÜNCELLEMESİ</p>
          <p className="text-[#979797] text-base mt-4">
            A yaması mı? O da ne? Ana yama oyuna geldikten hemen sonra
            getirdiğimiz kısa ve acil durum yamalarına A yaması diyoruz. Bu
            yamalar genelde yama notları çıkmadan bir gün önce veya yama
            notlarının çıktığı gün yayınlanıyor ancak bazen bu A yamasında da
            olduğu gibi geç kalabiliyorlar. A yamaları yalnızca ana yamada
            değiştirilmemiş dosyaları değiştirmemize imkân tanıyor. Bugünkü A
            yamasında en güçlü kompozisyonumuz olan Müdafi Morgana'yı
            zayıflatıyoruz ancak bunu yaparken bilhassa en güçlü olduğu halini,
            yani Müdafi özelliğinin 6 birimlik eşiğini hedef alıyoruz. Ayrıca
            amblemi de zayıflatarak Morgana'nın Müdafi özeliğinin kazandırdığı
            dayanıklılıktan faydalanarak bolca yetenek gücü kazanmasının da
            önüne geçiyoruz. Orta safhalarda kompozisyonda yer alan güçlü ön saf
            birimlerini aşmak için yeterince hasar veremediğiniz durumlar can
            sıkıcı olabildiği için bu zayıflatmalardaki asıl amacımız
            kompozisyonun hayatta kalma becerisini azaltmak. Öte yandan büyük
            bir değişiklik yapmıyoruz çünkü denge gayet iyi durumda ve
            kompozisyon o kadar da güçlü değil. Yine de bu zayıflatmalar,
            kompozisyonu benzerleriyle aynı seviyeye çekmeli. 
          </p>
          <ul className="list-disc text-[#979797] text-base mt-4 pl-6">
            <li>
              Müdafi Özelliğinin Zırhı ve Büyü Direnci: 18/40/75 + 30 ⇒
              18/36/70+25
            </li>
            <li>
              Müdafi Amblemi'nin Zırh ve Büyü Direncini Yetenek Gücüne
              Dönüştürme Oranı: %20 ⇒ %15
            </li>
          </ul>
          <div className="mt-10">
            <p className="font-bold text-white">YAMADA ÖNE ÇIKANLAR</p>
            <ul className="list-disc text-[#979797] text-base mt-4">
              <li>DÖNÜŞÜMLÜ MAĞAZA GRAFİĞİ</li>
              <li>KOZMETİK NADİRLİKLERİ BASİTLEŞİYOR</li>
            </ul>
          </div>
          <p className="text-[#979797] text-base mt-4">
            Bu yamadan itibaren TFT'nin kozmetik içeriklerinin nadirlik
            düzeylerini daha sade ve tutarlı olacak şekilde düzenliyoruz.
            Güncellemeye dair ayrıntılı bilgi için makaleye göz atabilirsiniz.
            Özeti şu şekilde:
          </p>
          <ul className="list-disc text-[#979797] text-base mt-4 pl-6">
            <li>
              14.5 Yaması'ndan önce çıkan nadide ve destansı nadirlik
              düzeyindeki minik efsanelerin tamamı yeni standart nadirlik düzeyi
              altında toplanacak.
            </li>
            <li>
              Geliştirilemeyen minik efsaneler ve çatapatlar üç yıldızlı içerik
              olarak sayılacak.
            </li>
          </ul>

          <p className="font-bold text-white mt-10">AÇILIŞ ZİYARETLERİ</p>
          <p className="text-[#979797] text-base mt-4">
             İki yıldızlı 2 Altınlık şampiyon kazandıran Geliştirilmiş Başlangıç
            açılış ziyareti yenilikçi olsa da oyunları şaşırtıcı seviyede
            etkiliyor. Zira bu ziyaretle rasgele olarak aldığınız şampiyon
            başlangıçtaki oyun planınızı ve temponuzu kendi başına belirliyor.
            Bu ziyaret, oyuna başladığınız rasgele eşyalarla birleşince kartopu
            etkisi oluşturabilen kombolara (2 yıldızlı Twisted Fate'e doğrudan
            bir Guinsoo'nun Hiddeti vermek gibi) veya büyük hayal kırıklıklarına
            (tahtada hiç Kriptocu birimi olmadan LeBlanc'a sahip olmak gibi)
            sebep olabiliyor.
          </p>
          <p className="text-[#979797] text-base mt-4">
            Paylaşmak ya da Paylaşmamak ziyareti bazen bir hatadan dolayı "veya"
            kısmını görmezden geliyor. O kısım olmayınca da herhangi bir ikilem
            olmadan doğrudan altın kazandırmış oluyor. Bu sebeple bu açılış
            ziyaretini devre dışı bırakıyoruz. Ancak Paylaşmak ya da
            Paylaşmamak'ı oyunlarınızda hack olarak görmeye devam edeceksiniz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default YamaNotes;
