import { Compass, Map, ArrowLeft, Sparkles } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { BookingForm } from '@/components/BookingForm';

type SessionData = {
  slug: string;
  name: string;
  priceOnline: string;
  priceOffline: string;
  icon: typeof Compass;
  tagline: string;
  description: string;
  highlights: string[];
};

const sessionMap: Record<string, SessionData> = {
  'soul-compass': {
    slug: 'soul-compass',
    name: 'Soul Compass',
    priceOnline: 'Rp.1.888.000,-',
    priceOffline: 'Rp.5.888.000,-',
    icon: Compass,
    tagline: 'Temukan arah, sembuhkan luka batin, perkuat intuisi',
    description: 'Untukmu yang ingin menemukan arah, menyembuhkan luka batin, dan memperkuat intuisi. Hadir khusus untuk merangkul jiwamu yang sedang mencari kejelasan arah, membasuh sisa-sisa luka batin di masa lalu, serta membangkitkan kembali ketajaman intuisi yang selama ini terpendam.',
    highlights: ['Menemukan arah hidup', 'Menyembuhkan luka batin', 'Menguatkan intuisi'],
  },
  'life-blueprint': {
    slug: 'life-blueprint',
    name: 'Life Blueprint',
    priceOnline: 'Rp.1.222.000,-',
    priceOffline: 'Rp.4.222.000,-',
    icon: Map,
    tagline: 'Wujudkan karir, bangun hubungan ideal, seimbangkan cakra',
    description: 'Bagi yang siap mewujudkan impian karir, membangun hubungan ideal, dan menyeimbangkan energi cakra. Didedikasikan bagi Anda yang kini siap melangkah maju untuk memanifestasikan puncak karir impian, menarik hubungan yang harmonis dan penuh cinta, serta melakukan penyelarasan energi cakra demi keseimbangan hidup yang utuh.',
    highlights: ['Manifestasi karir', 'Hubungan harmonis', 'Penyelarasan cakra'],
  },
  'destiny-insight': {
    slug: 'destiny-insight',
    name: 'Destiny Insight',
    priceOnline: 'Rp.1.111.000,-',
    priceOffline: 'Rp.3.111.000,-',
    icon: Sparkles,
    tagline: 'Ungkap misteri takdir: asmara, finansial, dan potensi tersembunyi',
    description: 'Ungkap misteri dan potensi takdirmu di bidang asmara, finansial, dan lainnya. Sibak tabir rahasia semesta dan temukan cetak biru takdirmu yang sesungguhnya. Dapatkan panduan jernih untuk memecahkan teka-teki asmara, membuka gerbang kelimpahan finansial, serta menyingkap potensi tersembunyi di berbagai aspek kehidupanmu.',
    highlights: ['Cetak biru takdir', 'Kelimpahan finansial', 'Rahasia asmara'],
  },
};

export function BookingPage() {
  const { slug } = useParams<{ slug: string }>();
  const session = slug ? sessionMap[slug] : undefined;

  if (!session) {
    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="glass-card p-10 rounded-3xl text-center">
          <p className="font-display text-2xl text-nusantara-deep mb-4">Sesi tidak ditemukan</p>
          <Link to="/" className="glass-btn inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const Icon = session.icon;

  return (
    <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-nusantara-deep/60 hover:text-nusantara-deep transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Session Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 rounded-3xl animate-fade-in-up">
              <div className="session-icon w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-lightblue-600" />
              </div>
              <h1 className="session-name font-display text-3xl sm:text-4xl font-bold mb-2">{session.name}</h1>
              <p className="session-price font-display text-base font-bold mb-4">{session.priceOnline} — {session.priceOffline}</p>
              <p className="font-display text-base text-nusantara-deep/70 italic mb-6">{session.tagline}</p>
              <p className="font-body text-sm text-nusantara-deep/75 leading-relaxed">{session.description}</p>
            </div>

            <div className="glass-card p-6 rounded-3xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-lightblue-400" />
                <h3 className="font-display text-lg font-semibold text-nusantara-deep">Yang akan Anda dapatkan</h3>
              </div>
              <ul className="space-y-3">
                {session.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-lightblue-300/30 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-lightblue-400" />
                    </div>
                    <span className="font-body text-sm text-nusantara-deep/80">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <div className="mb-5">
              <h2 className="font-display text-2xl font-bold text-nusantara-deep mb-1">Form Pemesanan Sesi</h2>
              <p className="font-body text-sm text-nusantara-deep/60">Lengkapi data di bawah ini untuk melanjutkan ke WhatsApp</p>
            </div>
            <BookingForm session={session} />
          </div>
        </div>
      </div>
    </div>
  );
}
