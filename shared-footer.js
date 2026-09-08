(() => {
  const footerMarkup = `
    <footer id="site-footer" class="shared-site-footer">
      <div class="shared-footer-shell">
        <div class="shared-footer-brand">
          <a class="shared-footer-logo" href="/" aria-label="IAKOPA home">IAKOPA</a>
          <p>Premium Performance Sportswear.<br>Technical apparel designed for training, movement and everyday life.</p>
        </div>
        <div><h4>System</h4><a href="/#system">Overview</a><a href="/#belt">Belt</a><a href="/#long-sleeve">Long Sleeve</a></div>
        <div><h4>Connect</h4><a href="mailto:contact@iakopa.com">contact@iakopa.com</a><a class="shared-footer-social" href="https://wa.me/message/EPRVVWZGFLS4F1" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">◌</span> WhatsApp</a><a class="shared-footer-social" href="https://www.tiktok.com/@iakopa.co?_r=1&amp;_t=ZG-99BSWqvk65o" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">♪</span> TikTok @iakopa.co</a></div>
        <div><h4>Legal</h4><a href="/privacy">Privacy</a><span class="shared-footer-soon">Terms, coming soon</span><span class="shared-footer-soon">Cookies, coming soon</span></div>
      </div>
    </footer>`;

  const footerStyles = `
    .shared-site-footer{color:#000;background:linear-gradient(rgb(220,225,229),rgb(201,208,213));border-top:1px solid rgb(174,183,190);padding:40px 0 44px;font-family:inherit}
    .shared-site-footer *{box-sizing:border-box}
    .shared-footer-shell{width:min(100% - 48px,1280px);margin:0 auto;display:grid;grid-template-columns:1.4fr repeat(3,1fr);align-items:start;gap:38px}
    .shared-footer-brand{min-width:0}
    .shared-footer-logo{display:inline-flex;align-items:center;min-height:30px;color:#111417!important;font-size:25px;font-weight:500;letter-spacing:.36em;text-decoration:none!important}
    .shared-footer-brand p{margin:20px 0 0;color:rgb(61,69,76)!important;font-size:13px;line-height:1.55}
    .shared-site-footer h4{letter-spacing:.16em;text-transform:uppercase;margin:0 0 8px;color:#000;font-size:11px;font-weight:800}
    .shared-site-footer a,.shared-footer-soon{margin:4px 0;color:#000;font-size:14px;line-height:1.45;display:block}
    .shared-site-footer a{min-height:30px;display:flex;width:fit-content;align-items:center;text-decoration:none;transition:opacity .2s}
    .shared-site-footer a:hover,.shared-site-footer a:focus-visible{opacity:.7;text-decoration:underline;text-underline-offset:5px}
    .shared-footer-soon{color:rgb(102,119,141)!important}
    .shared-footer-social{gap:8px;align-items:center}
    .shared-footer-social span{display:inline-grid;place-items:center;width:17px;font-size:18px;line-height:1}
    @media(max-width:820px){.shared-footer-shell{grid-template-columns:1fr 1fr}}
    @media(max-width:520px){.shared-footer-shell{width:min(100% - 32px,1280px);grid-template-columns:1fr;gap:24px}}
  `;

  const installFooter = () => {
    if (!document.body || document.querySelector('[data-shared-footer-style]')) return;
    const style = document.createElement('style');
    style.dataset.sharedFooterStyle = 'true';
    style.textContent = footerStyles;
    document.head.appendChild(style);
    document.querySelector('footer')?.remove();
    document.body.insertAdjacentHTML('beforeend', footerMarkup);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installFooter, { once: true });
  else installFooter();
})();

/* Shared footer source: keep all footer markup and styling in this file. */
