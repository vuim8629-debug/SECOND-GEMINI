import React, { useState } from 'react';

const appHref = (path: string) => window.location.protocol === 'file:' ? `#${path}` : path;

export default function ApplicationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    socials: '',
    audience: '',
    pitch: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getApplicationBody = () => {
    return [
      `*IAKOPA Partnership Application*`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone / WhatsApp: ${formData.phone}`,
      `Partnership type: ${formData.type}`,
      '',
      'Social handles / channels:',
      formData.socials,
      '',
      'Audience / niche:',
      formData.audience,
      '',
      'Why IAKOPA?',
      formData.pitch,
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.type || !formData.socials) {
      setFormStatus('Please fill in all required fields.');
      return;
    }

    const subject = `IAKOPA Partnership Application - ${formData.name}`;
    const body = getApplicationBody();

    setFormStatus('Opening your email app with the completed application…');
    window.location.href = `mailto:contact@iakopa.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSendWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.type || !formData.socials) {
      setFormStatus('Please fill in all required fields before sending.');
      return;
    }

    const body = getApplicationBody();
    setFormStatus('Opening WhatsApp with your application…');
    window.open(`https://wa.me/+34671355575?text=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <div className="affiliatePageRoot bg-[#FFFFFF] text-[#111417]">
      <section className="section apply py-24 bg-[#E9EDF0]" id="apply">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-6">
            <div className="p-10 md:p-14 bg-[#D9DEE2] border border-[#C7CDD2] flex flex-col justify-between min-h-[700px]">
              <div>
                <div className="eyebrow text-[#2F363C] font-extrabold text-[10px] tracking-[0.18em] uppercase mb-4">
                  06 / APPLICATION
                </div>
                <h2 className="text-[clamp(52px,6vw,96px)] leading-[0.84] font-black tracking-[-0.065em] text-[#111417] my-5">
                  THINK YOU'RE<br />A GOOD FIT?
                </h2>
                <p className="text-[17px] leading-[1.6] text-[#343B41] max-w-[42ch]">
                  Send us your application and our team will get in touch if we see a potential fit.
                </p>
              </div>

              <div className="grid gap-3 pt-6 border-t border-[#C7CDD2]">
                <div>
                  <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#2F363C] block">PRIORITY</span>
                  <strong className="text-[15px] font-bold text-[#111417] mt-1 block">Fit, quality and genuine influence</strong>
                </div>
                <div className="pt-3 border-t border-[#C7CDD2]/50">
                  <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#2F363C] block">CONTACT</span>
                  <strong className="text-[15px] font-bold text-[#111417] mt-1 block">contact@iakopa.com</strong>
                </div>
              </div>
            </div>

            <form className="p-10 md:p-14 bg-[#FFFFFF] border border-[#C7CDD2]" onSubmit={handleSubmit}>
              <div className="flex justify-between items-center pb-5 mb-8 border-b border-[#C7CDD2] text-[10px] font-extrabold tracking-[0.15em] text-[#2F363C]">
                <span>IAKOPA / PARTNER APPLICATION</span>
                <span>SELECTIVE ACCESS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-extrabold tracking-[0.08em] text-[#2F363C]" htmlFor="name">Name *</label>
                  <input
                    className="p-3 bg-[#F8F9F9] border border-[#C7CDD2] text-[14px] text-[#111417] outline-none focus:border-[#111417]"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-extrabold tracking-[0.08em] text-[#2F363C]" htmlFor="email">Email *</label>
                  <input
                    className="p-3 bg-[#F8F9F9] border border-[#C7CDD2] text-[14px] text-[#111417] outline-none focus:border-[#111417]"
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-extrabold tracking-[0.08em] text-[#2F363C]" htmlFor="phone">Phone / WhatsApp</label>
                  <input
                    className="p-3 bg-[#F8F9F9] border border-[#C7CDD2] text-[14px] text-[#111417] outline-none focus:border-[#111417]"
                    id="phone"
                    name="phone"
                    placeholder="+34 ..."
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-extrabold tracking-[0.08em] text-[#2F363C]" htmlFor="type">Partnership type *</label>
                  <select
                    className="p-3 bg-[#F8F9F9] border border-[#C7CDD2] text-[14px] text-[#111417] outline-none focus:border-[#111417]"
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose a track</option>
                    <option>Affiliate</option>
                    <option>Ambassador</option>
                    <option>Creator / Influencer</option>
                    <option>Wholesale / Retailer</option>
                    <option>Other Strategic Partnership</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[11px] font-extrabold tracking-[0.08em] text-[#2F363C]" htmlFor="socials">Social handles / channels *</label>
                  <input
                    className="p-3 bg-[#F8F9F9] border border-[#C7CDD2] text-[14px] text-[#111417] outline-none focus:border-[#111417]"
                    id="socials"
                    name="socials"
                    required
                    placeholder="Instagram, TikTok, YouTube, website..."
                    value={formData.socials}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[11px] font-extrabold tracking-[0.08em] text-[#2F363C]" htmlFor="audience">Audience / niche *</label>
                  <textarea
                    className="p-3 bg-[#F8F9F9] border border-[#C7CDD2] text-[14px] text-[#111417] outline-none focus:border-[#111417] min-h-[110px]"
                    id="audience"
                    name="audience"
                    required
                    placeholder="Who follows you, where are they based and what do they care about?"
                    value={formData.audience}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[11px] font-extrabold tracking-[0.08em] text-[#2F363C]" htmlFor="pitch">Why IAKOPA? *</label>
                  <textarea
                    className="p-3 bg-[#F8F9F9] border border-[#C7CDD2] text-[14px] text-[#111417] outline-none focus:border-[#111417] min-h-[110px]"
                    id="pitch"
                    name="pitch"
                    required
                    placeholder="Tell us why you believe there is a strong fit."
                    value={formData.pitch}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <p className="mt-6 pt-4 border-t border-[#C7CDD2] text-[12px] leading-[1.6] text-[#3F474E]">
                Applications are considered individually. Product seeding is not guaranteed. Choose your preferred channel below to send your completed application. See our <a href={appHref('/privacy')} className="underline">Privacy Policy</a>.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  className="w-full min-h-[64px] bg-[#15181B] text-[#FFFFFF] font-black text-[12px] tracking-[0.08em] uppercase border border-[#15181B] flex items-center justify-between px-6 cursor-pointer hover:bg-[#2F363C] transition-colors"
                  type="submit"
                >
                  <span>SEND OVER EMAIL</span>
                  <span className="w-10 h-10 grid place-items-center rounded-full bg-[#FFFFFF] text-[#15181B]">✉</span>
                </button>

                <button
                  className="w-full min-h-[64px] bg-[#25D366] text-[#FFFFFF] font-black text-[12px] tracking-[0.08em] uppercase border border-[#25D366] flex items-center justify-between px-6 cursor-pointer hover:bg-[#20ba5a] transition-colors"
                  type="button"
                  onClick={handleSendWhatsApp}
                >
                  <span>SEND OVER WHATSAPP</span>
                  <span className="w-10 h-10 grid place-items-center rounded-full bg-[#FFFFFF] text-[#25D366]">💬</span>
                </button>
              </div>

              {formStatus && <div className="mt-4 text-[13px] font-semibold text-[#111417]" role="status" aria-live="polite">{formStatus}</div>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
