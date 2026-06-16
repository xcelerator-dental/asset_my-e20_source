/* ============================================================
   My E20 Dentist — Composite bonding page interactions
   ============================================================ */

/* ---------- FAQ data (KEEP existing + 3 NEW) ---------- */
const FAQS = [
  { q: "How does composite bonding differ from other cosmetic dental procedures?",
    a: "Composite bonding is a minimally invasive procedure that typically requires little to no enamel removal compared to procedures like veneers or crowns. It is also usually completed in a single visit to our London E20 surgery." },
  { q: "Is composite bonding suitable for everyone?",
    a: "Composite bonding is suitable for most people who have minor cosmetic imperfections in their teeth. However, it may not be recommended for individuals with extensive damage or those seeking a more permanent solution. Your dentist will discuss your suitability for composite bonding with you, during your first consultation." },
  { q: "How long does composite bonding last?",
    a: "Composite bonding can last anywhere from 5 to 10 years or more with proper care and maintenance. However, the lifespan of bonding may vary depending on factors such as oral hygiene habits and your diet." },
  { q: "Is composite bonding reversible?",
    a: "While composite bonding is not considered irreversible like some other procedures, it does require the removal of a small amount of enamel from the tooth's surface. Therefore, it is not entirely reversible, but the bonding material can be removed and replaced by your dentist if necessary." },
  { q: "Does composite bonding require special care?",
    a: "Composite bonding does not require any special care beyond regular oral hygiene practices such as brushing, flossing, and routine dental visits. However, it is important to avoid habits that could damage the bonding material, such as biting on hard objects or chewing on ice." },
  { q: "Can composite bonding stain?",
    a: "Composite bonding materials are resistant to staining, but they may become discoloured over time, especially if exposed to foods and drinks that cause staining. Maintaining good oral hygiene and avoiding staining agents like tea, coffee, red wine and tobacco can help prolong the lifespan of your composite bonding." },
  { q: "Can I spread the cost of my treatment?",
    a: "We offer 0% APR payment plans for treatments over £1000. You can spread the cost over up to 12 months, making it easier to manage your dental care expenses. Speak to one of our team members for further information." },
  { q: "How long does a composite bonding appointment take?",
    a: "Most composite bonding appointments take between 30 minutes and 2 hours, depending on how many teeth are being treated. The full result is usually achieved in a single visit, with no need for laboratory work or follow-up appointments to complete the treatment." },
  { q: "How much does composite bonding cost?",
    a: "The cost of composite bonding at My E20 Dentist depends on how many teeth are being treated and the complexity of the work. You'll receive a clear, written quote at your consultation, and 0% finance is available for treatment over £1,000 to help spread the cost." },
  { q: "What are the risks and limitations of composite bonding?",
    a: "Composite bonding is one of the safest cosmetic treatments available, but it does have limitations. The material can chip if you bite into very hard foods, and it doesn't resist staining as well as porcelain veneers over the long term. It also can't correct heavy crowding, large gaps, or severely worn teeth on its own, in which case your dentist may suggest alternatives such as orthodontics first, or veneers. Any small chips or wear in the bonding can usually be repaired without redoing the whole treatment." },
  { q: "Will composite bonding hurt?",
    a: "No. The procedure is minimally invasive and usually doesn't require any anaesthetic at all. Most patients describe it as completely comfortable, similar to having a small polish or filling." },
  { q: "How soon will I see results?",
    a: "Straight away. Composite bonding is one of the few cosmetic treatments that delivers full results in a single visit. You'll walk out with your new smile the same day, with no waiting, no temporary stage, and no follow-up appointments needed." },
  { q: "Can composite bonding be combined with other treatments?",
    a: "Yes. Many patients combine composite bonding with teeth whitening to even out the colour of their smile before the bonding is matched, or with clear aligners to straighten the teeth first and then refine the shape with bonding. Your dentist will plan the order of treatment carefully at your consultation so the final result is exactly what you're after." },
  /* --- NEW --- */
  { q: "How many teeth can I have bonded?",
    a: "Anything from a single chipped tooth to a full smile. Many patients bond the upper front six or eight teeth, the ones that show most when you smile. We will recommend what gives the most natural overall result rather than treating teeth in isolation." },
  { q: "Will composite bonding match my natural teeth?",
    a: "That is the aim, and it is where careful shade selection earns its keep. We choose the composite by eye and often layer more than one shade so the bonded tooth has the same depth and light as the teeth around it. If you are also considering whitening, it is best done first, so we can match the bonding to your brighter shade." },
  { q: "Can I have composite bonding if I grind my teeth?",
    a: "Often yes, but grinding wears bonding faster and can chip it. If you grind, we may suggest a protective night guard to make your bonding last, and we will talk this through at your consultation." }
];

(function renderFaqs() {
  const grid = document.getElementById('faqGrid');
  if (!grid) return;
  FAQS.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML =
      '<button class="faq-q" aria-expanded="false">' +
        '<span class="faq-icon" aria-hidden="true"></span>' +
        '<span class="faq-q-text">' + item.q + '</span>' +
      '</button>' +
      '<div class="faq-a"><div class="faq-a-inner">' + item.a + '</div></div>';
    const btn = el.querySelector('.faq-q');
    const panel = el.querySelector('.faq-a');
    btn.addEventListener('click', () => {
      const open = el.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
    });
    grid.appendChild(el);
  });
})();

/* ---------- Home page FAQs (grouped) ---------- */
const HOME_FAQS = [
  { group: "General dentistry", items: [
    { q: "How often should I have a dental check-up at My E20 Dentist?", a: "It's generally recommended to have a dental check-up every six months. These routine visits allow your dentist to detect any oral health issues early on and prevent potential problems from worsening. The frequency might vary based on individual needs, and your dentist will agree the best schedule with you." },
    { q: "What happens at a dental check-up?", a: "Your dentist will examine your teeth, gums and mouth for any signs of decay, gum disease or other issues. X-rays may be taken to assess hidden problems, and we also check for signs of oral cancer and assess your bite and jaw. We'll discuss any recommendations for preventive care or treatment, and answer any questions you have." },
    { q: "How often should I see a dental hygienist?", a: "It's typically recommended to see a hygienist every six months for a routine clean and oral health assessment. Some people need more frequent visits, such as those with gum disease, while others can extend the intervals. Chat to our team to determine the best schedule for you." },
    { q: "What happens at a dental hygiene appointment?", a: "Our hygienist thoroughly cleans your teeth, removing plaque and tartar build-up, and may polish to remove surface stains and apply fluoride for added protection. They'll also assess your oral hygiene routine and offer guidance on brushing and flossing. Alongside your check-ups, this helps maintain oral health and prevent future problems." },
    { q: "How much will my appointment cost?", a: "Your appointment cost depends on the treatment, but a new patient consultation at My E20 costs £50, with X-rays costing £15. This initial appointment is important so we can get to know you and your dental needs." },
    { q: "How can you help if I am anxious about visiting the dentist?", a: "Our team is very experienced in treating nervous patients — dental anxiety is far more common than you may think. Our practice is a calm, reassuring environment and we take time to explain procedures thoroughly. We find that building trust and open communication helps create a positive experience, and we encourage you to talk to us about any worries." },
    { q: "Who will I see for my general dental care?", a: "Your routine care is in the hands of clinicians with strong restorative experience, including Dr Gabriel Popescu and Dr Maria Mitran. Dr Popescu also holds further training in endodontic and periodontal treatment, so if anything more involved comes up at your check-up, it can often be handled in-house without sending you elsewhere." }
  ]},
  { group: "Orthodontics", items: [
    { q: "What is orthodontics?", a: "Orthodontics is the branch of dentistry focused on correcting irregularities in the teeth and jaws — such as misalignment, overcrowding or bite issues — to improve oral health and aesthetics. Treatment often begins in adolescence but can also be started in adulthood. Our team of specialists offers a variety of orthodontic treatments for children, teens and adults." },
    { q: "Does orthodontic treatment hurt?", a: "Mild discomfort or soreness may be experienced, particularly after adjustments or when new appliances are placed. This is usually temporary and can be managed with over-the-counter pain relief." },
    { q: "How often should I visit the orthodontist during treatment?", a: "Regular appointments are necessary for adjustments, progress checks and ensuring treatment is on track. Typically visits are every 4–8 weeks, but this can vary depending on your individual plan." },
    { q: "Can I have orthodontic treatment as an adult?", a: "Yes. Adults can undergo orthodontic treatment to correct misaligned teeth, bite issues and other irregularities. Treatment may take longer due to mature bone structure, but advances like clear aligners offer discreet options. An initial consultation with our specialist orthodontist will determine your suitability and tailor a plan to you." },
    { q: "Will I need to avoid certain foods and drinks during treatment?", a: "With braces, it's advisable to avoid sticky, hard or crunchy foods like caramel, nuts and popcorn to prevent damage. Sugary and acidic drinks should be consumed in moderation, and good oral hygiene maintained throughout." },
    { q: "How can I keep my teeth clean during teeth straightening treatment?", a: "Brush after every meal with a soft-bristled brush and fluoride toothpaste, and floss between teeth and around braces to remove food and plaque. Use a mouthwash to reach awkward areas, and keep up regular cleanings and check-ups so we can monitor your progress." },
    { q: "Will my orthodontic treatment be with a specialist?", a: "Yes. Treatment is led by Dr Andreea Negulescu, our specialist orthodontist, who also runs her own private specialist practice. Whether you're considering Invisalign, Spark aligners or clear braces, your treatment is planned and overseen by a clinician whose entire career is dedicated to straightening teeth." }
  ]},
  { group: "Cosmetic dentistry", items: [
    { q: "Is teeth whitening safe?", a: "Yes — professional whitening is generally safe when carried out by a qualified dental professional, as our treatments use regulated concentrations of bleaching agents to minimise risks. Some patients experience temporary sensitivity or gum irritation. We'll determine your suitability at an initial consultation." },
    { q: "Can I whiten my teeth if I have veneers, crowns or other restorations?", a: "Whitening doesn't change the colour of veneers, crowns or other restorations, as these materials resist bleaching agents. It's therefore a good idea to whiten before having restorations, so they can be shade-matched to your brighter teeth for a natural result." },
    { q: "Are dental veneers natural looking?", a: "Our cosmetic dentists ensure veneers are carefully crafted and placed for lifelike results. They're custom-made to match the shape, size and colour of your existing teeth, and modern materials such as porcelain mimic the translucency and texture of natural enamel." },
    { q: "How long do dental veneers last?", a: "Veneers typically last 10 to 15 years. Longevity depends on oral hygiene, regular check-ups, biting forces and habits like grinding or chewing hard objects. With good care they can last longer before eventually needing replacement." },
    { q: "Is composite bonding a permanent solution?", a: "Composite bonding is a semi-permanent solution, as the material can wear or stain over time. However, it can be repaired or replaced if needed, and is less invasive than veneers or crowns — making it a versatile, reversible option." },
    { q: "Does composite bonding require special maintenance?", a: "No special maintenance is needed beyond good oral hygiene — regular brushing, flossing and check-ups. Avoiding habits like biting hard objects or chewing ice also helps preserve the bonding." },
    { q: "Who will look after my cosmetic treatment?", a: "Cosmetic cases are carried out by clinicians with a special interest in restorative and aesthetic work, including Dr Maria Mitran and Dr Gayatri Pattar. Both bring an artistic eye and years of experience in smile makeovers, so your treatment is planned around the natural look you're after." }
  ]},
  { group: "Dental implants", items: [
    { q: "What are dental implants?", a: "Dental implants are artificial tooth roots, usually titanium, surgically placed into the jawbone. They provide a stable foundation for replacement teeth such as crowns, bridges or dentures, fusing with the bone to create strong, permanent support that looks and feels like natural teeth." },
    { q: "Does getting dental implants hurt?", a: "The procedure involves local anaesthesia to keep you comfortable. Some pressure or minor soreness may be felt during placement, and mild soreness or swelling afterwards can be managed with pain relief. Significant pain during implant placement is uncommon." },
    { q: "Am I a good candidate for dental implants?", a: "Implants suit many but not everyone. A consultation with our implant dentist determines eligibility — generally you should be in good general health, a non-smoker, and without chronic conditions such as uncontrolled diabetes or heart disease. Gum disease must be treated first." },
    { q: "Is there any age limit for dental implants?", a: "There's no strict age limit. As long as you're in good general health with sufficient bone density, age isn't a determining factor — though younger patients should have completed jawbone growth first. Eligibility is assessed individually at your free initial implant consultation." },
    { q: "Are dental implants expensive?", a: "Cost varies with the number of implants, the complexity of the case and any extra procedures such as bone grafting or sinus lifts. Our specialist oral surgeon will give you a personalised estimate, along with details of our finance plans to help make treatment affordable." },
    { q: "How long do dental implants last?", a: "Longevity depends on oral hygiene, overall health, lifestyle and the quality of placement. With proper care and regular check-ups, dental implants have the potential to last a lifetime." },
    { q: "Who carries out implant treatment, including complex cases?", a: "Implant treatment is led by Dr Ionel Nistor, with a Master's in Oral Surgery, a Postgraduate Certificate in Implantology and further training with the Buser and Sculean Academy. He's confident with complex cases including bone grafting and sinus lifting, so treatment that might be referred elsewhere can often be handled in-house." }
  ]}
];

(function renderHomeFaqs() {
  const grid = document.getElementById('homeFaqGrid');
  if (!grid) return;
  HOME_FAQS.forEach(group => {
    const wrap = document.createElement('div');
    wrap.className = 'faq-group';
    const h = document.createElement('h3');
    h.className = 'faq-group-title';
    h.textContent = group.group;
    wrap.appendChild(h);
    group.items.forEach(item => {
      const el = document.createElement('div');
      el.className = 'faq-item';
      el.innerHTML =
        '<button class="faq-q" aria-expanded="false">' +
          '<span class="faq-icon" aria-hidden="true"></span>' +
          '<span class="faq-q-text">' + item.q + '</span>' +
        '</button>' +
        '<div class="faq-a"><div class="faq-a-inner">' + item.a + '</div></div>';
      const btn = el.querySelector('.faq-q');
      const panel = el.querySelector('.faq-a');
      btn.addEventListener('click', () => {
        const open = el.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
      });
      wrap.appendChild(el);
    });
    grid.appendChild(wrap);
  });
})();

/* ---------- Finance calculator (driven by number of teeth) ---------- */
(function calc() {
  const teethEl = document.getElementById('calc-teeth');
  if (!teethEl) return;
  const PRICE_PER_TOOTH = 350;
  const teethLabel = document.getElementById('teethLabel');
  const totalLabel = document.getElementById('totalLabel');
  const monthly = document.getElementById('monthly');
  const note = document.getElementById('resultNote');
  const warn = document.getElementById('resultWarn');
  const toggle = document.getElementById('termToggle');
  const minus = document.getElementById('teethMinus');
  const plus = document.getElementById('teethPlus');
  let term = 12;

  const gbp = n => '£' + Math.round(n).toLocaleString('en-GB');

  function update() {
    const teeth = parseInt(teethEl.value, 10);
    const total = teeth * PRICE_PER_TOOTH;
    teethLabel.textContent = teeth + (teeth === 1 ? ' tooth' : ' teeth');
    totalLabel.textContent = gbp(total);
    monthly.innerHTML = gbp(total / term) + '<span> / month</span>';
    if (total >= 1000) {
      note.textContent = 'over ' + term + ' months at 0% APR, no interest to pay';
      warn.hidden = true;
    } else {
      note.textContent = 'over ' + term + ' months';
      warn.hidden = false;
    }
  }

  function nudge(delta) {
    const v = Math.min(12, Math.max(1, parseInt(teethEl.value, 10) + delta));
    teethEl.value = v;
    update();
  }

  teethEl.addEventListener('input', update);
  minus.addEventListener('click', () => nudge(-1));
  plus.addEventListener('click', () => nudge(1));
  toggle.addEventListener('click', e => {
    const b = e.target.closest('.term-btn');
    if (!b) return;
    toggle.querySelectorAll('.term-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    term = parseInt(b.dataset.term, 10);
    update();
  });
  update();
})();

/* ---------- Finance calculator (driven by treatment amount) ---------- */
(function calcAmount() {
  const amt = document.getElementById('calc-amount');
  if (!amt) return;
  const amountLabel = document.getElementById('amountLabel');
  const monthly = document.getElementById('monthly');
  const note = document.getElementById('resultNote');
  const warn = document.getElementById('resultWarn');
  const toggle = document.getElementById('termToggle');
  let term = 12;
  const gbp = n => '£' + Math.round(n).toLocaleString('en-GB');
  function update() {
    const v = parseInt(amt.value, 10);
    amountLabel.textContent = gbp(v);
    monthly.innerHTML = gbp(v / term) + '<span> / month</span>';
    if (v >= 1000) {
      note.textContent = 'over ' + term + ' months at 0% APR, no interest to pay';
      warn.hidden = true;
    } else {
      note.textContent = 'over ' + term + ' months';
      warn.hidden = false;
    }
  }
  amt.addEventListener('input', update);
  toggle.addEventListener('click', e => {
    const b = e.target.closest('.term-btn');
    if (!b) return;
    toggle.querySelectorAll('.term-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    term = parseInt(b.dataset.term, 10);
    update();
  });
  update();
})();

/* ---------- Static FAQ accordions (delegated) ---------- */
document.querySelectorAll('[data-accordion]').forEach(container => {
  container.addEventListener('click', e => {
    const btn = e.target.closest('.faq-q');
    if (!btn || !container.contains(btn)) return;
    const item = btn.closest('.faq-item');
    const panel = item.querySelector('.faq-a');
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
  });
});

/* ---------- Parallax on media (calm, brand-appropriate) ---------- */
(function parallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const items = [...document.querySelectorAll('[data-parallax]')].map(el => ({
    el,
    speed: parseFloat(el.dataset.parallax) || 0.08
  }));
  if (!items.length) return;
  let ticking = false;
  function apply() {
    const vh = window.innerHeight;
    items.forEach(({ el, speed }) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      const offset = (rect.top + rect.height / 2) - vh / 2;
      let y = -offset * speed;
      const max = 46;
      if (y > max) y = max; else if (y < -max) y = -max;
      el.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0) scale(1.14)';
    });
    ticking = false;
  }
  function onScroll() {
    if (!ticking) { window.requestAnimationFrame(apply); ticking = true; }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', apply);
  apply();
})();

/* ---------- Reveal on scroll ---------- */
(function reveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));
})();
