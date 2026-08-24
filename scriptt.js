// ---------- ТОВАРЫ С ПОСТОЯННЫМИ КОДАМИ ----------
let productsData = {
    "Футболки": [
    { name: "Футболка Black муж-жен", price: 1500, img: "images/A19.jpg", code: "NLG-FK01-BLACK" },
    { name: "Футболка США муж", price: 2500, img: "images/A17.jpg", code: "NLG-FK02-WHITE" },
    { name: "Футболка Роза жен", price: 3000, img: "images/A10.jpg", code: "NLG-FG02-WHITE" }
    ],
    "Лонгсливы": [
    { name: "Лонгслив Cat Black", price: 2290, img: "images/A2.jpg", code: "NLG-JS01-GRAY" },
    { name: "Лонгслив Fortunate", price: 3000, img: "images/A4.jpg", code: "NLG-LS01-GKAY" },
    { name: "Лонгслив Black", price: 1500, img: "images/A11.jpg", code: "NLG-LSH1-GRAY" },
    { name: "Лонгслив G.L.Y.D.E ", price: 3500, img: "images/A15.jpg", code: "NLG-LS09-GRAY" },
    { name: "Лонгслив NEW YORK", price: 2000, img: "images/A24.jpg", code: "NLG-LF01-GRAY" },
    { name: "Лонгслив Black - White", price: 2500, img: "images/A16x.jpg", code: "NLG-LS01-BLAY" }
    ],
    "Худи": [
    { name: "Худи Cat муж-жен", price: 3500, img: "images/A23.jpg", code: "NLG-HD01-BLACK" },
    { name: "Худи аниме жен", price: 6500, img: "images/A14.jpg", code: "NLG-HG01-BLACK" },
    { name: "Худи муж", price: 2500, img: "images/A12.jpg", code: "NLG-HF01-BLACK" },
    { name: "Худи жен  ", price: 5350, img: "images/A22.jpg", code: "NLG-HI01-BLACK" }
    ],
    "Обувь": [
    { name: "Кроссовки white", price: 4000, img: "images/A7.jpg", code: "NLG-SH01-AIR" },
    { name: "Кросовки Z", price: 3500, img: "images/A6.jpg", code: "NLG-TYUI-78R"},         
    { name: "Кросовки J.S.", price: 4500, img: "images/A1.jpg", code: "NLG-WQA4-POP"},
    { name: "Тапатули маквин", price: 1000, img: "images/A18.jpg", code: "NLG-BEBE-XYI"},
    { name: "Кросовки Black Nike", price: 3000, img: "images/A21.jpg", code: "NLG-BEBE-JYI"},
    { name: "Кросовки Black", price: 2000, img: "images/A26.jpg", code: "NLG-FGRT-50O"
    "Аксессуары": [
    { name: "Подвестка Молния", price: 250, img: "images/A20.jpg", code: "NLG-AC01-BEANIE" },
    { name: "Подвестка Паук", price: 250, img: "images/A9.jpg", code: "NLG-GDRY-JF38R"},
    { name: "Подвестка Наушники", price: 250, img: "images/A8.jpg", code: "NLG-SWYO-KSYVN"},
    { name: "Подвестка Карта", price: 250, img: "images/A5.jpg", code: "NLG-FPOK-WTXV8"},
    { name: "Подвестка Король Череп", price: 250, img: "images/A3.jpg", code: "NLG-RYDF-QVHUT"},
    { name: "Подвестка Змея", price: 250, img: "images/A27.jpg", code: "NLG-DGUR-RJSNW"}
    ],
    "Джинцы": [
    { name: "Клёш, жен", price: 2200, img: "images/A13.jpg", code: "NLG-SW01-COZY" },
    { name: "Клёш, муж", price: 2000, img: "images/A25.jpg",code: "NLG-ZET9-COZY"}
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
    
