import { useState, useEffect, type FormEvent } from 'react';
import { Copy, Send, ShieldCheck, Calendar, MapPin, User, MessageSquare, Target, Mail, Clock } from 'lucide-react';
import { showToast } from './Toast';

type SessionInfo = {
  name: string;
  priceOnline: string;
  priceOffline: string;
  description: string;
};

const WHATSAPP_NUMBER = '62882006725559';
const BANK_ACCOUNT = '0392164357';
const BANK_NAME = 'Kia Maheswari';

export function BookingForm({ session }: { session: SessionInfo }) {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    tempat: '',
    tanggal: '',
    jamLahir: '',
    jk: '',
    tujuan: '',
    sesi: 'Online',
    kronologi: '',
  });

  useEffect(() => {
    const fields = ['nama', 'email', 'tempat', 'tanggal', 'jamLahir', 'tujuan', 'kronologi'];
    fields.forEach((id) => {
      const saved = localStorage.getItem(`booking_${id}`);
      if (saved) setForm((prev) => ({ ...prev, [id]: saved }));
    });
    const savedJk = localStorage.getItem('booking_jk');
    if (savedJk) setForm((prev) => ({ ...prev, jk: savedJk }));
    const savedSesi = localStorage.getItem('booking_sesi');
    if (savedSesi) setForm((prev) => ({ ...prev, sesi: savedSesi }));
  }, []);

  const saveField = (id: string, value: string) => {
    setForm((prev) => ({ ...prev, [id]: value }));
    localStorage.setItem(`booking_${id}`, value);
  };

  const currentPrice = form.sesi === 'Online' ? session.priceOnline : session.priceOffline;

  const copyRekening = () => {
    navigator.clipboard.writeText(BANK_ACCOUNT).then(() => {
      showToast('Nomor Rekening tersalin!');
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const jk = form.jk || 'Tidak disebutkan';
    const kronologi = form.kronologi || 'Tidak ada kronologi';
    const jamLahir = form.jamLahir || 'Tidak disebutkan';

    const tanggalFormatted = (() => {
      if (!form.tanggal) return 'Tidak disebutkan';
      const date = new Date(form.tanggal + 'T00:00:00');
      const hari = date.getDate().toString().padStart(2, '0');
      const bulan = date.toLocaleString('id-ID', { month: 'long' });
      const tahun = date.getFullYear();
      return `${hari} ${bulan} ${tahun}`;
    })();

    const pesan = `Halo Kak Kia, saya ingin memesan sesi konsultasi berikut ini...

*Sesi:* ${session.name}
*Pilihan Sesi:* ${form.sesi}
*Harga:* ${currentPrice}

- *Nama:* ${form.nama}
- *Email Aktif:* ${form.email}
- *Tempat, Tanggal Lahir:* ${form.tempat}, ${tanggalFormatted}
- *Jam Lahir:* ${jamLahir}
- *Jenis Kelamin:* ${jk}
- *Tujuan Konsultasi:* ${form.tujuan}
- *Kronologi/Masalah Singkat:*

${kronologi}

> Saya sudah menyalin nomor rekening dan akan segera mengirimkan bukti pembayaran setelah permintaan terkonfirmasi. Terima kasih.`;

    ['nama', 'email', 'tempat', 'tanggal', 'jamLahir', 'tujuan', 'kronologi', 'jk', 'sesi'].forEach((key) =>
      localStorage.removeItem(`booking_${key}`)
    );

    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pesan)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-6">
      {/* Nama */}
      <div>
        <label className="flex items-center gap-2 font-body text-sm font-medium text-nusantara-deep mb-2">
          <User className="w-4 h-4 text-lightblue-400" /> Nama Lengkap <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          required
          id="nama"
          placeholder="Contoh: Budi Santoso"
          value={form.nama}
          onChange={(e) => saveField('nama', e.target.value)}
          className="glass-input"
        />
      </div>

      {/* Email */}
      <div>
        <label className="flex items-center gap-2 font-body text-sm font-medium text-nusantara-deep mb-2">
          <Mail className="w-4 h-4 text-lightblue-400" /> Email Aktif <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          required
          id="email"
          placeholder="Contoh: nama@email.com"
          value={form.email}
          onChange={(e) => saveField('email', e.target.value)}
          className="glass-input"
        />
      </div>

      {/* Tempat & Tanggal Lahir */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="flex items-center gap-2 font-body text-sm font-medium text-nusantara-deep mb-2">
            <MapPin className="w-4 h-4 text-lightblue-400" /> Tempat Lahir <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            id="tempat"
            placeholder="Contoh: Surabaya"
            value={form.tempat}
            onChange={(e) => saveField('tempat', e.target.value)}
            className="glass-input"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 font-body text-sm font-medium text-nusantara-deep mb-2">
            <Calendar className="w-4 h-4 text-lightblue-400" /> Tanggal Lahir <span className="text-red-400">*</span>
          </label>
          <input
            type="date"
            required
            id="tanggal"
            value={form.tanggal}
            onChange={(e) => saveField('tanggal', e.target.value)}
            className="glass-input"
          />
        </div>
      </div>

      {/* Jam Lahir (opsional) */}
      <div>
        <label className="flex items-center gap-2 font-body text-sm font-medium text-nusantara-deep mb-2">
          <Clock className="w-4 h-4 text-lightblue-400" /> Jam Lahir <span className="font-body text-xs text-nusantara-deep/40">(Opsional)</span>
        </label>
        <input
          type="time"
          id="jamLahir"
          value={form.jamLahir}
          onChange={(e) => saveField('jamLahir', e.target.value)}
          className="glass-input"
        />
      </div>

      {/* Jenis Kelamin */}
      <div>
        <label className="font-body text-sm font-medium text-nusantara-deep mb-3 block">Jenis Kelamin (Opsional)</label>
        <div className="flex gap-3">
          {['Laki-laki', 'Perempuan'].map((g) => (
            <label
              key={g}
              className={`flex-1 cursor-pointer rounded-xl border px-4 py-3 text-center font-body text-sm transition-all glass-radio ${
                form.jk === g
                  ? '!bg-lightblue-300/40 !border-lightblue-300 text-nusantara-deep font-semibold'
                  : 'text-nusantara-deep/60'
              }`}
            >
              <input
                type="radio"
                name="jk"
                value={g}
                checked={form.jk === g}
                onChange={(e) => saveField('jk', e.target.value)}
                className="sr-only"
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      {/* Tujuan Konsultasi */}
      <div>
        <label className="flex items-center gap-2 font-body text-sm font-medium text-nusantara-deep mb-2">
          <Target className="w-4 h-4 text-lightblue-400" /> Tujuan Konsultasi <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          required
          id="tujuan"
          placeholder="Contoh: Ingin menemukan arah hidup & memperkuat intuisi"
          value={form.tujuan}
          onChange={(e) => saveField('tujuan', e.target.value)}
          className="glass-input"
        />
      </div>

      {/* Pilihan Sesi — iOS Toggle */}
      <div>
        <label className="font-body text-sm font-medium text-nusantara-deep mb-3 block">Pilihan Sesi</label>
        <div className="flex items-center justify-between glass-input !rounded-2xl !py-3">
          <div className="flex items-center gap-3">
            <span className={`font-body text-sm font-medium ${form.sesi === 'Online' ? 'text-nusantara-deep' : 'text-nusantara-deep/40'}`}>
              Sesi Online
            </span>
          </div>
          <label className="ios-switch">
            <input
              type="checkbox"
              checked={form.sesi === 'Offline'}
              onChange={(e) => saveField('sesi', e.target.checked ? 'Offline' : 'Online')}
            />
            <span className="ios-slider" />
          </label>
          <span className={`font-body text-sm font-medium ${form.sesi === 'Offline' ? 'text-nusantara-deep' : 'text-nusantara-deep/40'}`}>
            Sesi Offline
          </span>
        </div>
        <p className="session-price font-display text-sm font-bold mt-3">Anda Memilih Sesi {form.sesi} : {currentPrice}</p>
      </div>

      {/* Kronologi */}
      <div>
        <label className="flex items-center gap-2 font-body text-sm font-medium text-nusantara-deep mb-2">
          <MessageSquare className="w-4 h-4 text-lightblue-400" /> Kronologi Singkat (Opsional)
        </label>
        <textarea
          id="kronologi"
          maxLength={500}
          rows={4}
          placeholder="Ceritakan singkat masalah atau situasi yang sedang Anda hadapi..."
          value={form.kronologi}
          onChange={(e) => saveField('kronologi', e.target.value)}
          className="glass-input resize-none"
        />
        <p className="text-right text-xs text-nusantara-deep/40 mt-1">{form.kronologi.length}/500</p>
      </div>

      {/* Payment Card */}
      <div className="glass-card-dark p-5 rounded-2xl">
        <p className="font-body text-xs font-medium text-nusantara-deep/60 uppercase tracking-wider mb-3">Salin Nomor Rekening Pembayaran Ini Sebelum Mengajukan Permintaan Sesi</p>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lightblue-400 to-lightblue-600 flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-white text-sm">BCA</span>
            </div>
            <div>
              <p className="font-body text-lg font-bold text-nusantara-deep tracking-wider">{BANK_ACCOUNT}</p>
              <p className="font-body text-xs text-nusantara-deep/60">a/n {BANK_NAME}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={copyRekening}
            className="glass-btn-light !py-2.5 !px-4 flex items-center gap-2 text-sm flex-shrink-0"
          >
            <Copy className="w-4 h-4" /> Salin
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-2 text-xs italic text-nusantara-deep/50 font-body">
        <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5 text-lightblue-400" />
        <p>Data dan privasi Anda aman 100%! Anda akan dialihkan ke WhatsApp dengan pesan yang sudah digenerate secara otomatis. Tidak ada data yang disimpan di server.</p>
      </div>

      {/* Submit */}
      <button type="submit" className="glass-btn w-full flex items-center justify-center gap-2 text-base">
        <Send className="w-4 h-4" /> Kirim Permintaan
      </button>
    </form>
  );
}
