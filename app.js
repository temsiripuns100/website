// Stardoi Sheep Farm Khao Yai - Client Logic
// Features: Bilingual translations, Time-of-day theme controller, Interactive modals, Ticket estimator

// ==========================================================================
// 1. Multi-language Translations Dictionary
// ==========================================================================
const translations = {
  // Navigation Links
  'nav-home': { th: 'หน้าแรก', en: 'Home' },
  'nav-about': { th: 'รู้จักสตาร์ดอย', en: 'About Stardoi' },
  'nav-flock': { th: 'น้องแกะของเรา', en: 'Meet Our Flock' },
  'nav-activities': { th: 'กิจกรรม', en: 'Activities' },
  'nav-booking': { th: 'จองตั๋ว & พิกัด', en: 'Booking & Location' },

  // Hero Section
  'hero-tagline': { th: 'สัมผัสความน่ารักท่ามกลางสายหมอกที่ เขาใหญ่', en: 'Experience cuteness amidst the mist at Khao Yai' },
  'hero-title': { th: 'ฟาร์มแกะสตาร์ดอย', en: 'Stardoi Sheep Farm' },
  'hero-desc': { th: 'หลบหนีความวุ่นวายมาพักผ่อนในฟาร์มแกะสไตล์สวิสอัลไพน์ โอบล้อมด้วยขุนเขาเขียวขจีและบรรยากาศแสนอบอุ่น ผ่อนคลายไปกับคาเฟ่สุดคิวท์และเหล่าน้องแกะฟูนุ่ม', en: 'Escape the bustle to our Swiss Alpine-inspired sheep farm. Surrounded by lush mountains, cozy cafe vibes, and our fluffy flock of sheep.' },
  'hero-cta': { th: 'จองบัตรเข้าชม', en: 'Book Ticket Now' },
  'hero-secondary-cta': { th: 'กิจกรรมในฟาร์ม', en: 'Explore Activities' },

  // About Section
  'about-tag': { th: 'ยินดีต้อนรับสู่สตาร์ดอย', en: 'Welcome to Stardoi' },
  'about-title': { th: 'สวิตเซอร์แลนด์เมืองไทยที่เขาใหญ่', en: 'Thailand\'s Little Switzerland in Khao Yai' },
  'about-badge-val': { th: 'ธรรมชาติ 100%', en: '100% Nature' },
  'about-badge-lbl': { th: 'โอบล้อมด้วยขุนเขา', en: 'Mountain Vibe' },
  'about-h3': { th: 'ทำไมต้องมาเช็คอินที่ สตาร์ดอย?', en: 'Why Check-in at Stardoi?' },
  'about-p1': { th: 'ฟาร์มแกะสตาร์ดอย ตั้งอยู่บนเนินเขาที่สวยที่สุดในอุทยานแห่งชาติเขาใหญ่ เราออกแบบฟาร์มในสไตล์ยุโรปชนบทเพื่อให้นักท่องเที่ยวได้สัมผัสธรรมชาติอย่างแท้จริง สายหมอกยามเช้าและหญ้าเขียวขจีจะช่วยเยียวยาจิตใจของคุณให้ผ่อนคลาย', en: 'Stardoi Sheep Farm is situated on one of the most scenic hills of Khao Yai. We designed our farm in a European countryside style, allowing visitors to touch nature. The morning mist and green meadows will soothe and refresh your soul.' },
  'about-p2': { th: 'นอกจากแกะสายพันธุ์แท้ขนฟูนุ่มแล้ว เรายังมี Stardoi Cafe คาเฟ่ไม้สไตล์อบอุ่นที่พร้อมเสิร์ฟขนมอบใหม่ๆ และเครื่องดื่มสูตรพิเศษที่ใช้ส่วนผสมออร์แกนิกในพื้นที่', en: 'In addition to our purebred, fluffy sheep, we host the cozy wooden Stardoi Cafe. We serve freshly baked pastries and signature beverages crafted from locally sourced organic ingredients.' },
  'feat-scenery-title': { th: 'วิวภูเขา 360 องศา', en: '360° Mountain View' },
  'feat-scenery-desc': { th: 'ถ่ายรูปมุมไหนก็สวยเหมือนอยู่สวิตเซอร์แลนด์', en: 'Photos look like Switzerland from every angle' },
  'feat-organic-title': { th: 'อาหารแกะพรีเมียม', en: 'Premium Feeding' },
  'feat-organic-desc': { th: 'หญ้าและพืชผักออร์แกนิก ปลอดภัยต่อเด็กๆ และสัตว์เลี้ยง', en: 'Organic grass and vegetables, safe for kids & sheep' },

  // Flock Section
  'flock-tag': { th: 'ดาวเด่นประจำฟาร์ม', en: 'Farm Stars' },
  'flock-title': { th: 'ทำความรู้จักน้องแกะตัวโปรด', en: 'Meet Our Fluffy Flock' },
  'flock-card-mumu-tag': { th: 'สายกินจุ', en: 'Merino Wool' },
  'flock-card-mumu-name': { th: 'น้องมูมู่ (Mumu)', en: 'Mumu' },
  'flock-card-mumu-desc': { th: 'แกะเมอริโนขนปุยหนานุ่มฟูที่สุดในฟาร์ม อ่อนโยนและน่ารัก...', en: 'The fluffiest Merino sheep in the farm. Extremely gentle and cute...' },
  'flock-card-mumu-btn': { th: 'ดูประวัติน้อง', en: 'View Profile' },
  'flock-card-lulu-tag': { th: 'จอมซน', en: 'Corriedale' },
  'flock-card-lulu-name': { th: 'น้องลูลู่ (Lulu)', en: 'Lulu' },
  'flock-card-lulu-desc': { th: 'ลูกแกะคอร์ริเดลสุดซุกซนที่ชอบกระโดดเล่นและดึงเชือกรองเท้า...', en: 'The playful Corriedale lamb who loves jumping and playing around...' },
  'flock-card-lulu-btn': { th: 'ดูประวัติน้อง', en: 'View Profile' },
  'flock-card-coco-tag': { th: 'ดาวเด่นไอจี', en: 'Instagrammer' },
  'flock-card-coco-name': { th: 'น้องโกโก้ (Coco)', en: 'Coco' },
  'flock-card-coco-desc': { th: 'แกะขนสีน้ำตาลช็อกโกแลตสุดหล่อที่รู้มุมกล้อง โพสท่าเก่งสุดๆ...', en: 'Our chocolate-brown photogenic star who strikes a pose instantly...' },
  'flock-card-coco-btn': { th: 'ดูประวัติน้อง', en: 'View Profile' },

  // Activities Section
  'act-tag': { th: 'ประสบการณ์สุดพิเศษ', en: 'Unforgettable Experiences' },
  'act-title': { th: 'กิจกรรมสนุกๆ สำหรับทุกคน', en: 'Fun Activities for Everyone' },
  'act-1-title': { th: 'ป้อนอาหารแกะอย่างใกล้ชิด', en: 'Close Feeding Session' },
  'act-1-desc': { th: 'สัมผัสแกะขนฟูอย่างใกล้ชิดในทุ่งหญ้ากว้างขวาง ป้อนอาหารหญ้าเนเปียร์และแครอทออร์แกนิกที่คัดสรรมาอย่างดี', en: 'Get up close with the fluffy sheep in our wide pasture. Feed them high-quality Napier grass and organic sweet carrots.' },
  'act-2-title': { th: 'เวิร์กชอปขนแกะแฮนด์เมด', en: 'Handmade Wool Workshop' },
  'act-2-desc': { th: 'เรียนรู้วิธีการแปรรูปขนแกะแท้ๆ มาสร้างสรรค์ของที่ระลึกชิ้นเดียวในโลก เช่น พวงกุญแจตุ๊กตาแกะนุ่มฟู', en: 'Learn the traditional process of washing and felting real sheep wool to create your unique handmade souvenir.' },
  'act-3-title': { th: 'สตาร์ดอยคาเฟ่ & เบเกอรี่', en: 'Stardoi Cafe & Bakery' },
  'act-3-tag': { th: 'ห้ามพลาด', en: 'Must Visit' },
  'act-3-p': { th: 'นั่งชิลในร้านกาแฟสไตล์ไม้โอ๊คอบอุ่น ชิมเบเกอรี่อบสดใหม่ทุกเช้า เช่น ครัวซองต์เนยฝรั่งเศส และชาผลไม้หอมชื่นใจ พร้อมชมวิวเนินเขาและฝูงแกะเดินเล่นผ่านหน้ากระจกใสบานใหญ่', en: 'Relax in our oak wood cafe. Enjoy freshly baked pastries like butter French croissants, signature teas, and watch sheep graze right outside the glass window.' },
  'act-4-title': { th: 'แกลมปิ้งนอนดูดาวริมทุ่งหญ้า', en: 'Cozy Glamping Under Stars' },
  'act-4-tag': { th: 'สัมผัสประสบการณ์นอนฟาร์ม', en: 'Farm stay Experience' },
  'act-4-p': { th: 'พักผ่อนในเต็นท์กระโจมหรูหราที่มีสิ่งอำนวยความสะดวกครบครัน ผิงไฟปิ้งมาร์ชเมลโลว์ยามค่ำคืน ตื่นเช้ามาพบกับสายหมอกหนานุ่มปะทะใบหน้าและฝูงแกะที่มารอรับหน้าเต็นท์', en: 'Stay overnight in our luxurious bell tents. Toast marshmallows by the campfire, wake up to pristine morning fog and friendly sheep greeting you at your door.' },

  // Slideshow Captions
  'slideshow-title': { th: 'ประมวลภาพบรรยากาศและกิจกรรม', en: 'Activity Photo Gallery' },
  'slide1-caption': { th: 'สัมผัสอากาศบริสุทธิ์และฝูงแกะบนเนินเขาเขาใหญ่', en: 'Breathe fresh mountain air with our sheep in Khao Yai' },
  'slide2-caption': { th: 'จิบเครื่องดื่มและเบเกอรี่โฮมเมดที่ Stardoi Cafe', en: 'Enjoy signature drinks and pastries at Stardoi Cafe' },
  'slide3-caption': { th: 'ใกล้ชิดและป้อนอาหารน้องแกะขนฟูแสนเชื่อง', en: 'Get up close and feed our extremely friendly flock' },
  'slide4-caption': { th: 'พักผ่อนสไตล์แกลมปิ้งแคมป์ปิ้งใต้แสงดาว', en: 'Unwind in cozy glamping tents under the starry sky' },

  // Visitor & Booking Section
  'booking-tag': { th: 'วางแผนการเดินทาง', en: 'Plan Your Visit' },
  'booking-title': { th: 'ข้อมูลผู้เข้าชม & จองตั๋วล่วงหน้า', en: 'Visitor Info & Ticket Estimator' },
  'info-1-title': { th: 'เวลาทำการ', en: 'Opening Hours' },
  'info-1-desc': { th: 'เปิดบริการทุกวัน: 08:00 น. - 18:00 น. (ไม่มีวันหยุด)', en: 'Open Daily: 8:00 AM - 6:00 PM (No Holidays)' },
  'info-2-title': { th: 'ค่าเข้าชมปกติ', en: 'General Admission' },
  'info-2-desc': { th: 'ผู้ใหญ่: 120 บาท | เด็ก (สูงไม่เกิน 120 ซม.): 50 บาท (ฟรีคูปองป้อนอาหารหญ้า 1 ตะกร้า)', en: 'Adult: 120 THB | Child (< 120cm): 50 THB (Includes 1 free grass basket voucher)' },
  'info-3-title': { th: 'ที่ตั้งของฟาร์ม', en: 'Location Map' },
  'info-3-desc': { th: 'ถนนผ่านศึก-กุดคล้า กม. 12 ต.หมูสี อ.ปากช่อง จ.นครราชสีมา (ใกล้ทางขึ้นอุทยานแห่งชาติเขาใหญ่)', en: 'Pansuk-Kudkla Road Km.12, Moosi, Pakchong, Nakhon Ratchasima (Near Khao Yai National Park entrance)' },
  'calc-title': { th: 'คำนวณราคาบัตรเข้าชม', en: 'Entrance Fee Estimator' },
  'calc-subtitle': { th: 'วางแผนค่าใช้จ่ายล่วงหน้าและรับบัตรเข้าคิวพิเศษทันที', en: 'Estimate your visiting cost and get queue priority' },
  'label-adults': { th: 'ผู้ใหญ่ (120 บาท/คน)', en: 'Adults (120 THB/person)' },
  'label-kids': { th: 'เด็ก (50 บาท/คน)', en: 'Children (50 THB/person)' },
  'label-addons': { th: 'แพ็กเกจเสริมสุดคุ้ม', en: 'Special Value Add-ons' },
  'addon-feeding': { th: 'หญ้าและแครอทบุฟเฟต์ (+50 บาท/คน)', en: 'Unlimited Grass & Carrot Buffet (+50 THB/person)' },
  'addon-cafe': { th: 'คูปองเครื่องดื่มที่คาเฟ่ (+80 บาท/คน)', en: 'Stardoi Cafe Drink Voucher (+80 THB/person)' },
  'addon-photo': { th: 'สิทธิ์กอดแกะถ่ายรูปใกล้ชิด VIP (+100 บาท/กลุ่ม)', en: 'VIP Close Sheep Hug & Photo Session (+100 THB/group)' },
  'label-total': { th: 'ยอดรวมทั้งสิ้น:', en: 'Estimated Total:' },
  'total-currency': { th: ' บาท', en: ' THB' },
  'btn-estimate': { th: 'จองสิทธิ์เข้าชมด่วน', en: 'Reserve Quick Pass' },

  // Contact Form & Map
  'contact-title': { th: 'สอบถามข้อมูลเพิ่มเติม / ติดต่อแกลมปิ้ง', en: 'Inquire Info / Book Glamping' },
  'label-name': { th: 'ชื่อ-นามสกุล', en: 'Your Name' },
  'placeholder-name': { th: 'กรุณากรอกชื่อของคุณ', en: 'Enter your full name' },
  'label-phone': { th: 'เบอร์โทรศัพท์', en: 'Phone Number' },
  'placeholder-phone': { th: 'กรุณากรอกเบอร์โทรศัพท์', en: 'Enter your phone number' },
  'label-msg': { th: 'ข้อความหรือคำถาม', en: 'Message / Special Requests' },
  'placeholder-msg': { th: 'สอบถามเรื่องการจองเต็นท์ หรือแพ็กเกจหมู่คณะ...', en: 'Inquire about glamping reservations or group tours...' },
  'btn-send': { th: 'ส่งข้อมูลติดต่อ', en: 'Submit Inquiry' },
  'map-placeholder-title': { th: 'แผนที่นำทาง Google Maps', en: 'Google Maps Navigation' },
  'map-placeholder-desc': { th: 'คลิกปุ่มด้านล่างเพื่อเปิดแผนที่ในมือถือนำทางมายังฟาร์มทันที', en: 'Click the button below to navigate to the farm via Google Maps' },
  'btn-open-map': { th: 'เปิด Google Maps นำทาง', en: 'Navigate with Google Maps' },

  // Modal stats translation
  'modal-stat-breed': { th: 'สายพันธุ์', en: 'Breed' },
  'modal-stat-char': { th: 'นิสัยเอกลักษณ์', en: 'Personality' },
  'modal-stat-food': { th: 'ของโปรด', en: 'Favorite Food' },
};

// ==========================================================================
// 2. Sheep Individual Profiles Data
// ==========================================================================
const sheepData = {
  mumu: {
    name: { th: 'น้องมูมู่ (Mumu)', en: 'Mumu' },
    breed: { th: 'เมอริโน (Merino)', en: 'Merino' },
    char: { th: 'ขี้เซา รักสงบ อบอุ่น ขนหนาฟูที่สุด', en: 'Calm, sleepy, and extremely fluffy' },
    food: { th: 'ใบโคลเวอร์สด (Fresh Clover)', en: 'Fresh Clover' },
    desc: {
      th: 'น้องมูมู่ เป็นแกะสายพันธุ์เมอริโนที่มีขนหนานุ่มฟูที่สุดในฟาร์มสตาร์ดอย วันๆ ของมูมู่มักหมดไปกับการหาเนินเขาแดดอุ่นๆ เพื่อนอนกลางวันฟินๆ มูมู่เชื่องมาก นักท่องเที่ยวสามารถกอด ขอยืมตัวถ่ายรูป หรือนอนพิงขนปุยๆ ของน้องได้โดยที่น้องจะไม่วิ่งหนีเลยล่ะ!',
      en: 'Mumu is a purebred Merino sheep carrying the densest and softest wool at Stardoi. Her daily routine consists of locating a sunny hill slope and taking long afternoon naps. She is incredibly gentle; feel free to hug her, take close photos, or lean on her fluffy coat!'
    },
    img: 'images/cute_sheep.jpg'
  },
  lulu: {
    name: { th: 'น้องลูลู่ (Lulu)', en: 'Lulu' },
    breed: { th: 'คอร์ริเดล (Corriedale)', en: 'Corriedale' },
    char: { th: 'ซน กระโดดเก่ง อยากรู้อยากเห็น', en: 'Playful, bouncy, and highly curious' },
    food: { th: 'หญ้าอัลฟัลฟ่าแห้ง (Alfalfa Hay)', en: 'Alfalfa Hay' },
    desc: {
      th: 'น้องลูลู่ ลูกแกะตัวจิ๋วแสนซนที่พกพาพลังงานมาเต็มร้อย ลูลู่ชอบการกระโดดดีใจเวลาเห็นตระกร้าอาหารมาแต่ไกล และเนื่องจากความอยากรู้อยากเห็นเป็นเลิศ น้องมักจะชอบเข้ามาสูดดมกล้อง คาบเชือกรองเท้า หรือดึงขอบชายเสื้อยืดของพี่ๆ นักท่องเที่ยวมาเคี้ยวเล่นเพื่อทักทาย!',
      en: 'Lulu is our energetic baby lamb who runs on a hundred percent batteries. She loves executing high jumps whenever she spots food baskets from afar. Highly curious, she will walk right up to inspect your camera lenses and playfully tug on your shoelaces or clothes!'
    },
    img: 'images/cute_sheep.jpg'
  },
  coco: {
    name: { th: 'น้องโกโก้ (Coco)', en: 'Coco' },
    breed: { th: 'บอนด์บราวน์ (Brown Sheep)', en: 'Brown Sheep' },
    char: { th: 'นายแบบประจำฟาร์ม รู้มุมกล้อง เฟรนด์ลี่', en: 'Instagram diva, knows camera angles, very social' },
    food: { th: 'แครอทหวานหั่นแว่น (Sweet Carrots)', en: 'Sweet Carrots' },
    desc: {
      th: 'น้องโกโก้ แกะหนึ่งเดียวในฟาร์มที่มีขนสีน้ำตาลช็อกโกแลตเข้มสวยงาม โกโก้มีฉายาว่า "เน็ตไอดอลขวัญใจสตาร์ดอย" เพราะเมื่อไรที่เห็นนักท่องเที่ยวหยิบสมาร์ทโฟนขึ้นมาเตรียมนิ้วเซลฟี่ โกโก้จะรีบยื่นหน้าเข้ามาโพสท่าเอียงคอรับกล้องประหนึ่งนายแบบมืออาชีพโดยทันที!',
      en: 'Coco is our absolute stunner sporting a rich chocolate-brown fleece. Nicknamed the "Instagram Star of Stardoi", he has an uncanny radar for smartphones. The moment you frame a selfie, Coco will glide right next to you and tilt his head like a professional model!'
    },
    img: 'images/cute_sheep.jpg'
  }
};

// ==========================================================================
// 3. State Variables & Initial Setup
// ==========================================================================
let currentLanguage = 'th'; // default language

document.addEventListener('DOMContentLoaded', () => {
  // Check local storage for settings
  const cachedLang = localStorage.getItem('stardoi_lang');
  const cachedTheme = localStorage.getItem('stardoi_theme');

  if (cachedLang) currentLanguage = cachedLang;
  
  // Set up initial language button text
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = currentLanguage === 'th' ? 'EN' : 'TH';
  }

  // Set up themes
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    if (cachedTheme) {
      themeSelect.value = cachedTheme;
      setTheme(cachedTheme);
    } else {
      // Default to sunny
      setTheme('sunny');
    }

    themeSelect.addEventListener('change', (e) => {
      setTheme(e.target.value);
    });
  }

  // Initialize translation
  updateTranslations();

  // Set up interactive ticket booking cost calculator
  initCalculator();

  // Set up interactive sheep modal triggers
  initSheepModal();

  // Set up scroll reveal animations
  initScrollReveal();

  // Set up Contact form simulation
  initContactForm();

  // Set up slideshow carousel
  initSlideshow();
});

// ==========================================================================
// 4. Atmosphere Theme Controller
// ==========================================================================
function setTheme(themeName) {
  // Clear all theme classes from body
  document.body.className = '';
  
  // Apply theme class
  const themeClass = `theme-${themeName}`;
  document.body.classList.add(themeClass);
  
  // Save preference
  localStorage.setItem('stardoi_theme', themeName);
}

// ==========================================================================
// 5. Bilingual Logic Handler
// ==========================================================================
function toggleLanguage() {
  currentLanguage = currentLanguage === 'th' ? 'en' : 'th';
  
  // Update button visual
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = currentLanguage === 'th' ? 'EN' : 'TH';
  }

  // Save selection
  localStorage.setItem('stardoi_lang', currentLanguage);

  // Update elements
  updateTranslations();

  // Update calculator output currency/label text
  calculateTotal();
}

function updateTranslations() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[key] && translations[key][currentLanguage]) {
      // Check if it is input or textarea placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', translations[key][currentLanguage]);
      } else {
        el.innerHTML = translations[key][currentLanguage];
      }
    }
  });
}

// Global scope access for language toggle from HTML
window.toggleLanguage = toggleLanguage;

// ==========================================================================
// 6. Ticket Estimator Calculator
// ==========================================================================
function initCalculator() {
  const inputs = ['calcAdults', 'calcKids', 'addonFeeding', 'addonCafe', 'addonPhoto'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', calculateTotal);
      el.addEventListener('change', calculateTotal);
    }
  });
  
  calculateTotal(); // initial run
}

function calculateTotal() {
  const adultsInput = document.getElementById('calcAdults');
  const kidsInput = document.getElementById('calcKids');
  const addonFeeding = document.getElementById('addonFeeding');
  const addonCafe = document.getElementById('addonCafe');
  const addonPhoto = document.getElementById('addonPhoto');
  const totalPriceEl = document.getElementById('totalPrice');

  if (!adultsInput || !kidsInput || !totalPriceEl) return;

  const adults = parseInt(adultsInput.value) || 0;
  const kids = parseInt(kidsInput.value) || 0;

  // Base tickets
  let total = (adults * 120) + (kids * 50);

  // Add-ons calculations
  const totalPeople = adults + kids;
  if (addonFeeding && addonFeeding.checked) {
    total += totalPeople * 50;
  }
  if (addonCafe && addonCafe.checked) {
    total += totalPeople * 80;
  }
  if (addonPhoto && addonPhoto.checked && totalPeople > 0) {
    total += 100;
  }

  // Render total
  totalPriceEl.textContent = total.toLocaleString();

  // Add a nice jump micro-animation to price
  totalPriceEl.style.transform = 'scale(1.15)';
  setTimeout(() => {
    totalPriceEl.style.transform = 'scale(1)';
  }, 150);
}

// Global scope access for quick registration
window.submitReservation = function(e) {
  if (e) e.preventDefault();
  const adults = document.getElementById('calcAdults').value || 0;
  const kids = document.getElementById('calcKids').value || 0;
  const total = document.getElementById('totalPrice').textContent;
  
  if (parseInt(adults) === 0 && parseInt(kids) === 0) {
    alert(currentLanguage === 'th' ? 'กรุณาระบุจำนวนผู้เข้าชมอย่างน้อย 1 คน' : 'Please enter at least 1 visitor.');
    return;
  }

  const successMsg = currentLanguage === 'th' 
    ? `🎉 จองสิทธิ์ Quick Pass สำเร็จ!\nยอดรวมโดยประมาณ: ${total} บาท\nกรุณาแสดงหน้าจอนี้กับพนักงานจำหน่ายตั๋วเมื่อเดินทางมาถึงฟาร์มแกะสตาร์ดอย`
    : `🎉 Quick Pass Reservation Confirmed!\nEstimated Total: ${total} THB\nPlease show this confirmation screen to the cashier upon arrival at Stardoi Sheep Farm.`;
  
  alert(successMsg);
};

// ==========================================================================
// 7. Interactive Sheep Modal
// ==========================================================================
function initSheepModal() {
  const modalBackdrop = document.getElementById('sheepModal');
  const closeBtn = document.getElementById('modalClose');

  if (!modalBackdrop || !closeBtn) return;

  // Set up click handlers on cards
  const cards = document.querySelectorAll('.sheep-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const sheepId = card.getAttribute('data-sheep-id');
      if (sheepData[sheepId]) {
        openModal(sheepData[sheepId]);
      }
    });
  });

  // Set up close triggers
  closeBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  // Escape key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('show')) {
      closeModal();
    }
  });
}

function openModal(data) {
  const modalBackdrop = document.getElementById('sheepModal');
  const modalImg = document.getElementById('modalImg');
  const modalName = document.getElementById('modalName');
  const modalDesc = document.getElementById('modalDesc');
  const statBreed = document.getElementById('statBreed');
  const statChar = document.getElementById('statChar');
  const statFood = document.getElementById('statFood');

  if (!modalBackdrop) return;

  // Set values based on active language
  modalImg.src = data.img;
  modalName.textContent = data.name[currentLanguage];
  modalDesc.textContent = data.desc[currentLanguage];
  statBreed.textContent = data.breed[currentLanguage];
  statChar.textContent = data.char[currentLanguage];
  statFood.textContent = data.food[currentLanguage];

  // Show modal
  modalBackdrop.classList.add('show');
  document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
}

function closeModal() {
  const modalBackdrop = document.getElementById('sheepModal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('show');
    document.body.style.overflow = ''; // restore scrolling
  }
}

// ==========================================================================
// 8. Intersection Observer for Scroll Reveals
// ==========================================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, {
    threshold: 0.15, // trigger when 15% of element is visible
    rootMargin: '0px 0px -50px 0px' // adjust for smoother trigger
  });

  revealElements.forEach(el => {
    observer.observe(el);
  });
}

// ==========================================================================
// 9. Contact Form Validation and Simulation
// ==========================================================================
function initContactForm() {
  const contactForm = document.getElementById('contactFormElement');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const msg = document.getElementById('contactMessage').value.trim();

    if (!name || !phone) {
      alert(currentLanguage === 'th' ? 'กรุณากรอกชื่อและเบอร์โทรศัพท์ติดต่อ' : 'Please fill in both name and phone number.');
      return;
    }

    const successMsg = currentLanguage === 'th'
      ? `📬 ส่งคำถามของคุณเรียบร้อยแล้ว!\nขอบคุณคุณ ${name} ที่สนใจฟาร์มแกะสตาร์ดอย เจ้าหน้าที่จะโทรติดต่อกลับที่เบอร์ ${phone} โดยเร็วที่สุด`
      : `📬 Inquiry Sent Successfully!\nThank you ${name} for contacting Stardoi Sheep Farm. Our staff will call you back at ${phone} shortly.`;

    alert(successMsg);
    contactForm.reset();
  });
}

// Google Maps navigator external call
window.openGoogleMaps = function() {
  // Stardoi Sheep Farm simulated location coordinates near Khao Yai Pakchong
  const url = "https://maps.google.com/?q=Stardoi+Sheep+Farm+Khao+Yai";
  window.open(url, '_blank');
};

// ==========================================================================
// 10. Slideshow / Gallery Controller
// ==========================================================================
let slideIndex = 1;
let slideInterval;

function initSlideshow() {
  showSlides(slideIndex);
  
  // Start automatic slide show
  startSlideShow();
  
  // Pause automatic show when user hovers over slideshow container
  const container = document.querySelector('.slideshow-container');
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(slideInterval));
    container.addEventListener('mouseleave', () => startSlideShow());
  }
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 4000); // changes every 4 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slide");
  let dots = document.getElementsByClassName("slide-dot");
  
  if (slides.length === 0) return;
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Make slideshow functions globally accessible for HTML onclick attributes
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;
