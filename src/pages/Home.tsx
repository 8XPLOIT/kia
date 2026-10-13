import { useState, useEffect, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass, Map, Calendar, MapPin, User, MessageSquare, Send,
  Sparkles, Heart, Quote, ArrowRight, Phone, Instagram, Globe
} from 'lucide-react';

const WHATSAPP_NUMBER = '62882006725559';

const sessions = [
  {
    slug: 'soul-compass',
    name: 'SOUL COMPASS',
    priceOnline: 'Rp.1.888.000,-',
    priceOffline: 'Rp.5.888.000,-',
    icon: Compass,
    description: 'Untukmu yang ingin menemukan arah, menyembuhkan luka batin, dan memperkuat intuisi. Hadir khusus untuk merangkul jiwamu yang sedang mencari kejelasan arah, membasuh sisa-sisa luka batin di masa lalu, serta membangkitkan kembali ketajaman intuisi yang selama ini terpendam.',
  },
  {
    slug: 'life-blueprint',
    name: 'LIFE BLUEPRINT',
    priceOnline: 'Rp.1.222.000,-',
    priceOffline: 'Rp.4.222.000,-',
    icon: Map,
    description: 'Bagi yang siap mewujudkan impian karir, membangun hubungan ideal, dan menyeimbangkan energi cakra. Didedikasikan bagi Anda yang kini siap melangkah maju untuk memanifestasikan puncak karir impian, menarik hubungan yang harmonis dan penuh cinta, serta melakukan penyelarasan energi cakra demi keseimbangan hidup yang utuh.',
  },
  {
    slug: 'destiny-insight',
    name: 'DESTINY INSIGHT',
    priceOnline: 'Rp.1.111.000,-',
    priceOffline: 'Rp.3.111.000,-',
    icon: Sparkles,
    description: 'Ungkap misteri dan potensi takdirmu di bidang asmara, finansial, dan lainnya. Sibak tabir rahasia semesta dan temukan cetak biru takdirmu yang sesungguhnya. Dapatkan panduan jernih untuk memecahkan teka-teki asmara, membuka gerbang kelimpahan finansial, serta menyingkap potensi tersembunyi di berbagai aspek kehidupanmu.',
  },
];

const testimonials = [
  { name: 'Dewi Anggraini', comment: 'Sesi dengan Kak Kia benar-benar life changing. Saya akhirnya menemukan arah hidup yang selama ini saya cari. Intuisi saya kembali tajam! Makasih yang sangat banyak buat kakiaaaa udah bimbing,... WORTH IT!!!' },
  { name: 'Agatha Sonia', comment: 'Kak kia, makasih ya udh ditemenin selama perjalanan ke bromo kemarin, terbantu sekali.. Banyak pengalaman yang wow sekali,, so much fun perjalanan kemarin.. Naik turun perasaan nya, kyk kmrn naik bromo, ada naik dan turun, bgtulah perjalanan setiap insan ya kak.. Pkoknya the best didampingi kak kia.. Sukses selalu kak.. Sarangbeooo😊😆😘😍🥰' },
  { name: 'Chiendu Putri', comment: 'Tau gak kia.. sepanjang 2023, selama perjalanan gonjang ganjingku wkwk aku selalu berharap ada org yg bs nemenin aku dan bisa menjawab pertanyaanku jika sangat aku perlukan, kayaknya hadiah leluhurku yg dijanjikan salahsatunya adalah terkoneksi sm km.. entah kenapa jd ga ngerasa sendirian' },
  { name: 'Anonim Client', comment: ' Aku gak iso berkata2 kak . Semesta luar biasa. Mungkin banyak orang yang sudah kamu temui lebih dari ak dan adik2ku dlm perjalanan mu kak, tp kamuuu satu2nya yang belum pernah kami temui sejauh ini untuk menuntun kami ke dalam jiwa itu sendiri 🙏' },
  { name: 'Sari Wulandari', comment: 'Destiny Insight sungguh luar biasa. Saya bisa melihat cetak biru takdir saya dan kini lebih percaya diri mengambil keputusan.' },
  { name: 'Moonlight Fay', comment: 'Terimakasih sudah membersamai journey jiwa malam ini kak @kiamaheswari_ semoga waktunya dapat untuk ketemu offline, karena baru 2 jam aja pesan semesta melalui kak Kia udah banyak dan masih berlapis . . .' },
  { name: 'Maya Kusuma', comment: 'Ruang yang dibangun Kak Kia begitu safe. Saya bisa menemukan kembali kompas batin saya. Grateful sekali! Bebas mau jadi apa aja kalo sama kak kia mah... :) Terhuraaaaaaaaaa akuuuu...' },
  { name: 'Anonim Client', comment: 'Sebelum sesi meditasi tadi, di bagian pinggang lumayan sakit. Selama pas sesi meditasi juga nyaris mau ketiduran, tapi habis sesi meditasi, anehnya pinggang udah gak sakit lagi. Kalau ngantuknya masih ya,.. Soalnya memang hawanya pengen tidur terus 😂 Yang aku herankan, waktu mau sesi meditasi, malah melihat sosok leluhur dan waktu meditasi malah ditemenin ular 😥 Aku nggak suka ular padahal' },
  { name: 'Anonim Client', comment: 'Halo kak kia sorry aku ngespam ga jelas ni, just random thought 😂 Semua orang itu takut resiko takut ini takut itu, tapi mereka gak sadar kalau lahir jadi manusia itu penuh resiko juga dan mereka yang berani ambil keputusan untuk diri mereka sendiri lalu berani bersuara untuk diri mereka sendiri itu hebat❤' },
];

export function Home() {
  const [tanya, setTanya] = useState({ nama: '', ig: '', pesan: '' });

  useEffect(() => {
    ['tanyaNama', 'tanyaIG', 'tanyaPesan'].forEach((id) => {
      const saved = localStorage.getItem(id);
      if (saved) setTanya((prev) => ({ ...prev, [id.replace('tanya', '').toLowerCase()]: saved }));
    });
  }, []);

  const handleTanya = (e: FormEvent) => {
    e.preventDefault();
    const nama = tanya.nama;
    const ig = tanya.ig;
    const pesanInput = tanya.pesan;

    const pesan = `Halo Kak Kia, saya izin bertanya...

- *Nama:* ${nama}
- *Instagram:* ${ig}
- *Pesan:*
${pesanInput}

> Terima kasih kak.`;

    ['tanyaNama', 'tanyaIG', 'tanyaPesan'].forEach((key) => localStorage.removeItem(key));
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pesan)}`;
  };

  return (
    <div className="relative z-10">
      {/* HERO */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <div className="order-1 lg:order-1 flex justify-center lg:justify-start animate-fade-in-up">
              <div className="relative">
                <div className="absolute -inset-4 hero-glow rounded-[2rem] blur-2xl animate-shimmer" />
                <div className="relative glass-card p-3 rounded-[2rem]">
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqplKH_5h2p8onZrsEzso77C2ZAcj7uakAY-amCK43hDOarxxkMWlze5GRsmr7BkGCp-C1AfVxMHA_2Od3s-XAAO2KDdpRyPHz605V29IcKnJVAGsGsmGCvxhvh4gI97EEUnalaZyF66PmYTMnqUyrk4OEvgrIkS-T8TL6KcCKVKSc_lcFlLDKtYVjm6Ow/s1600/2026-10-13_185620.jpg?auto=compress&cs=tinysrgb&h=900&w=700"
                    alt="Kia Maheswari"
                    className="rounded-[1.75rem] w-full max-w-md object-cover aspect-[3/4] shadow-lg"
                    loading="eager"
                  />
                </div>
               <div className="absolute -bottom-6 -right-4 glass-card bg-white/30 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl hidden sm:block animate-float shadow-lg">
  <p className="font-display text-sm font-semibold text-white">Mojokerto, Jawa Timur</p>
  <p className="font-body text-xs text-white/80">Indonesia</p>
</div>
              </div>
            </div>

            {/* Text */}
            <div className="order-2 lg:order-2 text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <p className="font-body text-sm sm:text-base text-lightblue-400 font-medium tracking-wide uppercase mb-3">
                Halo, Soulfams!
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text leading-tight mb-4">
                Saya KIA MAHESWARI
              </h1>
              <p className="font-display text-lg sm:text-xl text-nusantara-deep/80 italic mb-5 leading-relaxed">
                Seorang Yogini, Tantrikers, Fasilitator, Healer, Acaraki, Seniman dan Penulis.
              </p>
              <p className="font-body text-sm text-nusantara-deep/60 mb-6">
                <span className="mr-1">Owner of</span>
                <span className="instagram-pill">@kiamaheswari_</span>
                <span className="instagram-pill">@omah.maheswari</span>
                <span className="instagram-pill">@maheswarikia</span>
              </p>

              <div className="glass-card p-6 rounded-2xl text-left mb-8">
                <p className="font-body text-sm sm:text-base text-nusantara-deep/75 leading-relaxed">
                  Hadir untuk membimbingmu menemukan kedalaman dan potensi tak terbatas dalam dirimu. Sebagai seorang pendamping jiwa dan fasilitator kesadaran yang hadir untuk membantumu kembali terhubung dengan inti terdalam dirimu. Saya percaya bahwa setiap manusia memiliki kompas batin, potensi tak terbatas, dan kemampuan alami untuk menyembuhkan dirinya sendiri. Terkadang, kita hanya perlu ruang yang aman dan bimbingan yang tepat untuk menemukannya kembali. Melalui pendekatan yang intuitif dan membumi, saya mendampingi individu yang sedang berada di fase pencarian arah, pemulihan luka batin, maupun proses perwujudan hidup yang lebih selaras secara jiwa, pikiran, dan energi.
                </p>
                <p className="font-display text-lg sm:text-xl text-nusantara-deep italic mt-4 text-center">
                  Kapan terakhir kali kamu benar-benar meluangkan waktu untuk jiwamu?
                </p>
              </div>

              <button
                onClick={() => document.getElementById('sessions')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-btn inline-flex items-center gap-2 text-base group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                AMBIL SESI ANDA SEKARANG!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SESSIONS */}
      <section id="sessions" className="px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-lightblue-400" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">BOOK YOUR SESSIONS</h2>
              <Sparkles className="w-6 h-6 text-lightblue-400" />
            </div>
            <p className="font-body text-sm text-nusantara-deep/60 max-w-2xl mx-auto">
              Pilih sesi yang paling selaras dengan kebutuhan jiwamu saat ini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {sessions.map((session, i) => {
              const Icon = session.icon;
              return (
                <div
                  key={session.slug}
                  className="glass-card p-7 rounded-3xl flex flex-col animate-fade-in-up hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="session-icon w-14 h-14 rounded-full flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-lightblue-600" />
                  </div>
                  <h3 className="session-name font-display text-2xl font-bold mb-1">{session.name}</h3>
                  <p className="session-price font-display text-sm font-bold mb-4">{session.priceOnline} — {session.priceOffline}</p>
                  <p className="font-body text-sm text-nusantara-deep/70 leading-relaxed mb-6 flex-1">
                    {session.description}
                  </p>
                  <Link
                    to={`/booking/${session.slug}`}
                    className="glass-btn-light flex items-center justify-center gap-2 text-sm group"
                  >
                    Ambil Sesi Ini
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section id="highlight" className="px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="w-6 h-6 text-lightblue-400" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">HIGHLIGHT</h2>
              <Heart className="w-6 h-6 text-lightblue-400" />
            </div>
           
          </div>
          <div className="glass-card p-8 sm:p-12 rounded-3xl">
            <div className="space-y-5 font-body text-sm sm:text-base text-nusantara-deep/75 leading-relaxed text-justify">
              <p>
                Perjalanan ini dimulai dari langkah kembali ke dalam batin. Kami hadir sebagai ruang aman bagi Anda yang sedang mencari kompas kehidupan, membasuh sisa-sisa luka batin di masa lalu, serta menajamkan kembali intuisi yang selama ini terpendam. Ini adalah fondasi utama untuk berdiri tegak menghadapi dunia dengan hati yang lebih tenang, jernih, dan terarah.
              </p>
              <p>
                Ketika batin telah pulih, saatnya melangkah menuju transformasi nyata. Ruang ini didedikasikan bagi jiwa-jiwa yang siap naik level: mewujudkan puncak karir yang diimpikan, menarik hubungan interpersonal yang harmonis, serta menyelaraskan energi cakra. Tujuannya adalah menciptakan keseimbangan hidup yang utuh, di mana kesuksesan lahiriah berjalan selaras dengan kedamaian batiniah.
              </p>
              <p>
                Lebih dari sekadar perbaikan diri, ini adalah sebuah undangan untuk menjelajahi misteri semesta. Mari sibak tabir rahasia dan temukan cetak biru takdirmu yang sesungguhnya, baik dalam membuka gerbang kelimpahan finansial maupun memahami dinamika asmara. Kenali setiap potensi tersembunyi yang Anda miliki, agar Anda tidak hanya menjalani hidup, tetapi benar-benar memegang kendali atas takdir Anda sendiri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section id="testimoni" className="py-20 scroll-mt-20 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Quote className="w-6 h-6 text-lightblue-400" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">TESTIMONI</h2>
              <Quote className="w-6 h-6 text-lightblue-400" />
            </div>
            <p className="font-body text-sm text-nusantara-deep/60">Cerita dari mereka yang telah menemukan cahayanya</p>
          </div>
        </div>

        <div className="relative">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl w-[340px] flex-shrink-0">
                <Quote className="w-6 h-6 text-lightblue-300 mb-3" />
                <p className="font-body text-sm text-nusantara-deep/75 leading-relaxed mb-4">{t.comment}</p>
                <p className="font-display text-base font-semibold text-nusantara-deep">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUBUNGI SAYA */}
      <section id="kontak" className="px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MessageSquare className="w-6 h-6 text-lightblue-400" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">HUBUNGI SAYA</h2>
            </div>
            <p className="font-display text-xl text-nusantara-deep/70 italic">Mau Tanya-Tanya Dulu?</p>
          </div>

          <form onSubmit={handleTanya} className="glass-card p-6 sm:p-8 rounded-3xl space-y-5">
            <div>
              <label className="flex items-center gap-2 font-body text-sm font-medium text-nusantara-deep mb-2">
                <User className="w-4 h-4 text-lightblue-400" /> Nama <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                id="tanyaNama"
                placeholder="Masukkan nama Anda"
                value={tanya.nama}
                onChange={(e) => {
                  setTanya({ ...tanya, nama: e.target.value });
                  localStorage.setItem('tanyaNama', e.target.value);
                }}
                className="glass-input"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 font-body text-sm font-medium text-nusantara-deep mb-2">
                <Instagram className="w-4 h-4 text-lightblue-400" /> Instagram <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-sm text-nusantara-deep/40">@</span>
                <input
                  type="text"
                  required
                  id="tanyaIG"
                  placeholder="username_instagram"
                  value={tanya.ig}
                  onChange={(e) => {
                    const v = e.target.value.replace(/^@/, '');
                    setTanya({ ...tanya, ig: v });
                    localStorage.setItem('tanyaIG', v);
                  }}
                  className="glass-input !pl-9"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 font-body text-sm font-medium text-nusantara-deep mb-2">
                <MessageSquare className="w-4 h-4 text-lightblue-400" /> Pesan <span className="text-red-400">*</span>
              </label>
              <textarea
                required
                id="tanyaPesan"
                rows={5}
                maxLength={200}
                placeholder="Tuliskan pertanyaan atau hal yang ingin Anda sampaikan..."
                value={tanya.pesan}
                onChange={(e) => {
                  setTanya({ ...tanya, pesan: e.target.value });
                  localStorage.setItem('tanyaPesan', e.target.value);
                }}
                className="glass-input resize-none"
              />
              <p className="text-right text-xs text-nusantara-deep/40 mt-1">{tanya.pesan.length}/200</p>
            </div>

            <button type="submit" className="glass-btn w-full flex items-center justify-center gap-2 text-base">
              <Send className="w-5 h-5" /> Kirim Pesan
            </button>
          </form>

          <div className="mt-10 text-center glass-card p-8 rounded-3xl">
            <p className="font-display text-xl sm:text-2xl font-semibold gradient-text mb-5">
              Unlock your soul & Shine bright together
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <p className="font-display text-base text-nusantara-deep">— Kia Maheswari</p>
              <a
                href="https://wa.me/62882006725559"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-body text-sm text-nusantara-deep/60 hover:text-lightblue-400 transition-colors"
              >
                <Phone className="w-4 h-4" /> +62 882-0067-25559
              </a>
              <p className="flex items-center gap-1.5 font-body text-sm text-nusantara-deep/60">
                <Globe className="w-4 h-4" /> kiamaheswari.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
