// ---------- ТОВАРЫ С ПОСТОЯННЫМИ КОДАМИ ----------
let productsData = {
    "Футболки": [
    { name: "Футболка Black муж-жен", price: 1500, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/1b3ba6168da9c1e0b4e7cfc3dde484bb.jpg", code: "NLG-FK01-BLACK" },
    { name: "Футболка США муж", price: 2500, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/b05b856a78ff6f86780668616477d5d8.jpg", code: "NLG-FK02-WHITE" },
    { name: "Футболка Роза жен", price: 3000, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/64a232cd82735ef0afa65199b827b452.jpg", code: "NLG-FG02-WHITE" }
    ],
    "Лонгсливы": [
    { name: "Лонгслив Cat Black", price: 2290, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/5c201906506a7fd985b461c9c2345f42.jpg", code: "NLG-JS01-GRAY" },
    { name: "Лонгслив Fortunate", price: 3000, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/7f17db9c790d9efd132ae0a8776f12a3.jpg", code: "NLG-LS01-GKAY" },
    { name: "Лонгслив Black", price: 1500, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/783a08aaad69edd812c079bb241c0256.jpg", code: "NLG-LSH1-GRAY" },
    { name: "Лонгслив G.L.Y.D.E ", price: 3500, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/a4be4f497ee22f37d2f0597c9838966a.jpg", code: "NLG-LS09-GRAY" },
    { name: "Лонгслив NEW YORK", price: 2000, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/df1fabd86f9a8a84a8e367dee47ca9b0.jpg", code: "NLG-LF01-GRAY" },
    { name: "Лонгслив Black - White", price: 2500, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/a6e6bf9b91d6a11743cbcebb728b4554.jpg", code: "NLG-LS01-BLAY" }
    ],
    "Худи": [
    { name: "Худи Cat муж-жен", price: 3500, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/d477595add838a028737df3c6265d34a.jpg", code: "NLG-HD01-BLACK" },
    { name: "Худи аниме жен", price: 6500, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/91888b03674de0e77d4e3d122bca4c2a.jpg", code: "NLG-HG01-BLACK" },
    { name: "Худи муж", price: 2500, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/1200ed76ad0e2816091f86703de23f2a.jpg", code: "NLG-HF01-BLACK" },
    { name: "Худи жен  ", price: 5350, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/cd9f2349fc1608c9fba1b8e4309597b2.jpg", code: "NLG-HI01-BLACK" }
    ],
    "Обувь": [
    { name: "Кроссовки white", price: 4990, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/26a30b99c5a1c847391f29b609ec1295.jpg", code: "NLG-SH01-AIR" },
    { name: "Кросовки Z", price: 3500, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/20a405fed4b50bde5441c40508a86692.jpg", code: "NLG-TYUI-78R"},         
    { name: "Кросовки J.S.", price: 4500, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/4e40d4a829d06a9cda2deaa13607ee4e.jpg", code: "NLG-WQA4-POP"},
    { name: "Тапатули маквин", price: 1000, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/b78bc8590699b4f659fed99d42c8a5db.jpg", code: "NLG-BEBE-XYI"},
    { name: "Кросовки Black Nike", price: 3000, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/ca27816b2f2251a365352a43421c5c06.jpg", code: "NLG-BEBE-JYI"},
    { name: "Кросовки Black", price: 2000, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/e484957945bcb8c8daa7db6372ebae3d.jpg", code: "NLG-BEBE-UYI"},
    ],
    "Аксессуары": [
    { name: "Подвестка Молния", price: 250, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/c2ca6034bb8524a1b1c7c96684f01638.jpg", code: "NLG-AC01-BEANIE" },
    { name: "Подвестка Паук", price: 250, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/50cbbfd90b81e3f0fba29edca9b79454.jpg", code: "NLG-GDRY-JF38R"},
    { name: "Подвестка Наушники", price: 250, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/030dee68c5511dd58ebab258de472737.jpg", code: "NLG-SWYO-KSYVN"},
    { name: "Подвестка Карта", price: 250, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/9ff1bed34735c210dc07b99b4b415c85.jpg", code: "NLG-FPOK-WTXV8"},
    { name: "Подвестка Король Череп", price: 250, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/6aa810e445613c299eb9c3f32d11b2a5.jpg", code: "NLG-RYDF-QVHUT"},
    { name: "Подвестка Змея", price: 250, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/2ec26474cedb8d285caa0b971c61f8e6.jpg", code: "NLG-DGUR-RJSNW"}
    ],
    "Джинцы": [
    { name: "Клёш, жен", price: 2200, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/6034b3033e82308f47ff4d8f49f4aa64.jpg", code: "NLG-SW01-COZY" },
    { name: "Клёш, муж", price: 2000, img: "/storage/emulated/0/Сайт одежды для GitHab/Картинки/3c1d790e4496f7d76dc6168024278ef5.jpg",code: "NLG-ZET9-COZY"}
    ]
};

// ---------- ПОКАЗ КОДА (БЕРЁМ ИЗ ДАННЫХ) ----------
function showProductCode(productName, productPrice, productCode) {
    const code = productCode || 'NLG-XXXX-0000';
    document.getElementById('productCodeDisplay').textContent = code;
    document.getElementById('productInfoDisplay').textContent = `${productName} — ${productPrice} ₽`;
    document.getElementById('productCodeModal').classList.add('active');
    
    const codes = JSON.parse(localStorage.getItem('productCodes') || '[]');
    codes.push({ product: productName, price: productPrice, code: code, date: new Date().toISOString() });
    localStorage.setItem('productCodes', JSON.stringify(codes));
}

function showNotice(msg) {
    const notice = document.getElementById('syncNotice');
    notice.textContent = msg;
    notice.classList.add('show');
    setTimeout(() => notice.classList.remove('show'), 2000);
}

// ---------- ИНСТРУКЦИЯ ----------
function renderOrderInstructions() {
    const container = document.getElementById('orderInstructionsContainer');
    if (!container) return;
    container.innerHTML = `
        <div class="order-steps">
            <div class="steps-title">📋 HOW TO ORDER</div>
            <div class="steps-container">
                <div class="step-card">
                    <div class="step-number">1</div>
                    <div class="step-title">🛍️ CHOOSE</div>
                    <div class="step-desc">Select your item and click "VIEW CODE"</div>
                </div>
                <div class="step-card">
                    <div class="step-number">2</div>
                    <div class="step-title">🎫 GET CODE</div>
                    <div class="step-desc">Copy the unique product code</div>
                </div>
                <div class="step-card">
                    <div class="step-number">3</div>
                    <div class="step-title">📞 CONTACT</div>
                    <div class="step-desc">Message <a href="https://t.me/NLG_manager" target="_blank">@NLG_manager</a> with your code</div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 24px;">
                <div class="bot-contact">
                    <span>📲 <a href="https://t.me/NLG_manager" target="_blank">@NLG_manager</a> | <a href="https://t.me/NLGsstore" target="_blank">@NLGsstore</a></span>
                </div>
            </div>
        </div>
    `;
}

// ---------- ГЕРОЙ ----------
function renderHero() {
    return `
        <div class="hero-section">
            <div class="hero-badge">✦ NEW COLLECTION</div>
            <h1>MADE TO<br><span>STAND OUT</span></h1>
            <p>Premium quality streetwear. Handpicked for style. Built for culture.</p>
            <div class="hero-tags">
                <span>✦ <strong>CLEAN DESIGN</strong></span>
                <span>✦ <strong>MOBILE FRIENDLY</strong></span>
                <span>✦ <strong>FAST CHECKOUT</strong></span>
            </div>
        </div>
    `;
}

// ---------- СТРАНИЦЫ ----------
function showMainPage() {
    let catsHtml = '<div class="categories-grid">';
    for (let cat in productsData) {
        catsHtml += `<div class="category-card" onclick="showCategoryPage('${cat.replace(/'/g, "\\'")}')">
            <span class="category-icon">📦</span>
            <div class="category-name">${cat}</div>
        </div>`;
    }
    catsHtml += '</div>';

    document.getElementById('mainContent').innerHTML = `
        ${renderHero()}
        <div class="catalog">
            <div class="section-title">
                <span>🔎 CATEGORIES</span>
                <span class="view-all">VIEW ALL →</span>
            </div>
            ${catsHtml}
        </div>
    `;
    renderOrderInstructions();
    window.scrollTo(0, 0);
}

window.showCategoryPage = function(categoryName) {
    const products = productsData[categoryName];
    if (!products || products.length === 0) {
        document.getElementById('mainContent').innerHTML =
            `<div style="padding:20px;margin-top:72px;background:#0a0a0a;min-height:60vh;">
                <button class="back-btn" onclick="showMainPage()">←</button>
                <div style="margin:30px 0;text-align:center;color:rgba(255,255,255,0.3);font-size:1.1rem;">📭 No items in this category</div>
            </div>`;
        renderOrderInstructions();
        return;
    }
    let productsHtml = '<div class="categories-grid">';
    products.forEach(p => {
        productsHtml += `
            <div class="product-card">
                <div class="image-wrapper">
                    <img src="${p.img}" onerror="this.src='https://picsum.photos/id/1/200'">
                </div>
                <div class="product-name">${p.name}</div>
                <div class="product-price">${p.price} ₽</div>
                <button class="view-code-btn" onclick="showProductCode('${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.code}')">
                    🎫 VIEW CODE
                </button>
            </div>
        `;
    });
    productsHtml += '</div>';
    document.getElementById('mainContent').innerHTML =
        `<div style="padding:20px;margin-top:72px;background:#0a0a0a;">
            <button class="back-btn" onclick="showMainPage()">←</button>
            <div class="section-title" style="margin:10px 0 24px 0;">${categoryName}</div>
            ${productsHtml}
        </div>`;
    renderOrderInstructions();
};

// ---------- МЕНЮ ----------
function initMenu() {
    const burger = document.getElementById('burgerBtn');
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlayMenu');
    
    burger.onclick = () => { menu.classList.add('open'); overlay.classList.add('active'); };
    overlay.onclick = () => { menu.classList.remove('open'); overlay.classList.remove('active'); };
    
    document.getElementById('homeLink').onclick = (e) => { e.preventDefault(); showMainPage(); };
    document.getElementById('catalogLink').onclick = (e) => { e.preventDefault(); showMainPage(); };
    
    document.getElementById('homeLinkMobile').onclick = (e) => { 
        e.preventDefault(); showMainPage(); menu.classList.remove('open'); overlay.classList.remove('active'); 
    };
    document.getElementById('catalogLinkMobile').onclick = (e) => { 
        e.preventDefault(); showMainPage(); menu.classList.remove('open'); overlay.classList.remove('active'); 
    };
    document.getElementById('contactsMenuLinkMobile').onclick = (e) => {
        e.preventDefault();
        menu.classList.remove('open');
        overlay.classList.remove('active');
        document.getElementById('contactsModal').classList.add('active');
    };

    const contactsModal = document.getElementById('contactsModal');
    const closeContacts = document.getElementById('closeContactsBtn');
    
    document.getElementById('contactsMenuLink').onclick = (e) => {
        e.preventDefault();
        contactsModal.classList.add('active');
    };
    document.getElementById('footerContacts').onclick = (e) => {
        e.preventDefault();
        contactsModal.classList.add('active');
    };
    document.getElementById('footerCatalog').onclick = (e) => {
        e.preventDefault();
        showMainPage();
    };
    closeContacts.onclick = () => contactsModal.classList.remove('active');
    contactsModal.onclick = (e) => { if (e.target === contactsModal) contactsModal.classList.remove('active'); };
}

// ---------- МОДАЛКА КОДА ----------
function initCodeModal() {
    const modal = document.getElementById('productCodeModal');
    const closeBtn = document.getElementById('closeCodeBtn');
    const copyBtn = document.getElementById('copyCodeBtn');
    const codeDisplay = document.getElementById('productCodeDisplay');

    closeBtn.onclick = () => modal.classList.remove('active');
    modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };
    
    copyBtn.onclick = () => {
        const code = codeDisplay.textContent;
        navigator.clipboard.writeText(code).then(() => {
            showNotice('✅ Code copied!');
            copyBtn.textContent = '✅ COPIED!';
            setTimeout(() => copyBtn.textContent = '📋 COPY CODE', 2000);
        }).catch(() => {
            const range = document.createRange();
            range.selectNode(codeDisplay);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            try {
                document.execCommand('copy');
                showNotice('✅ Code copied!');
                copyBtn.textContent = '✅ COPIED!';
                setTimeout(() => copyBtn.textContent = '📋 COPY CODE', 2000);
            } catch(e) {
                showNotice('❌ Failed to copy');
            }
        });
    };
}

// ---------- СКРОЛЛ ----------
function initScrollEffect() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ---------- ЗАПУСК ----------
showMainPage();
initMenu();
initCodeModal();
initScrollEffect();
renderOrderInstructions();

window.showProductCode = showProductCode;
window.showMainPage = showMainPage;
window.showCategoryPage = showCategoryPage;