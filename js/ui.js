// js/ui.js - UI渲染相關函數
import { CONFIG } from './config.js';
import { AppState } from './data.js';
import { calculateItemTotal, calculateTotalAmount, formatCurrency } from './calculations.js';

/**
 * 渲染客戶資料區塊
 */
export function renderCustomerInfo() {
    const customerInfoSection = document.getElementById('customerInfoSection');
    
    customerInfoSection.innerHTML = `
        <div class="customer-info">
            <h2>報價方資料</h2>
            <div class="form-row">
                <div class="form-col">
                    <div class="form-group">
                        <label for="company-name">公司名稱</label>
                        <input type="text" id="company-name" placeholder="請輸入公司名稱">
                    </div>
                </div>
                <div class="form-col">
                    <div class="form-group">
                        <label for="company-phone">公司電話</label>
                        <input type="text" id="company-phone" placeholder="請輸入公司電話">
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-col">
                    <div class="form-group">
                        <label for="staff-name">人員姓名</label>
                        <input type="text" id="staff-name" placeholder="請輸入人員姓名">
                    </div>
                </div>
            </div>
            
            <h2>客戶資料</h2>
            <div class="form-row">
                <div class="form-col">
                    <div class="form-group">
                        <label for="customer-name">客戶姓名 <span class="required">*</span></label>
                        <input type="text" id="customer-name" placeholder="請輸入姓名">
                    </div>
                </div>
                <div class="form-col">
                    <div class="form-group">
                        <label for="customer-phone">聯絡電話</label>
                        <input type="text" id="customer-phone" placeholder="請輸入電話">
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-col">
                    <div class="form-group">
                        <label for="customer-address">裝修地址</label>
                        <input type="text" id="customer-address" placeholder="請輸入地址">
                    </div>
                </div>
                <div class="form-col">
                    <div class="form-group">
                        <label for="quote-date">報價日期</label>
                        <input type="date" id="quote-date">
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * 渲染裝修分類和項目
 * @param {Array} categories 分類數據
 * @param {Array} items 項目數據
 */
export function renderCategories(categories, items) {
    const categoriesSection = document.getElementById('categoriesSection');
    categoriesSection.innerHTML = '<div class="selection-area non-printable"></div>';
    const selectionArea = categoriesSection.querySelector('.selection-area');
    
    categories.forEach(category => {
        // 過濾出該分類的項目
        const categoryItems = items.filter(item => item.category === category.code);
        
        // 創建分類容器
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-section';
        categoryDiv.innerHTML = `
            <div class="category-header" onclick="window.toggleCategory('${category.id}')">
                <h3>${category.code}.${category.name}</h3>
                <span class="category-toggle">▼</span>
            </div>
            <div class="category-content" id="${category.id}"></div>
        `;
        
        selectionArea.appendChild(categoryDiv);
        
        // 為每個分類添加項目
        const categoryContent = categoryDiv.querySelector('.category-content');
        
        categoryItems.forEach(item => {
            const itemRow = document.createElement('div');
            itemRow.className = 'item-row';
            itemRow.dataset.code = item.code;
            
            const itemTotal = calculateItemTotal(item.unitPrice, item.defaultQuantity);
            
            itemRow.innerHTML = `
                <div class="item-checkbox">
                    <input type="checkbox" class="checkbox-custom item-select" 
                        data-code="${item.code}" 
                        data-name="${item.name}" 
                        data-unit="${item.unit}" 
                        data-price="${item.unitPrice}" 
                        data-note="${item.note || ''}">
                </div>
                <div class="item-code">${item.code}</div>
                <div class="item-name">${item.name}</div>
                <div class="item-unit">${item.unit}</div>
                <div class="item-quantity">
                    <input type="number" class="quantity-input" value="${item.defaultQuantity}" 
                        min="0" data-code="${item.code}">
                </div>
                <div class="item-price">
                    <input type="number" class="price-input" value="${item.unitPrice}" 
                        min="0" data-code="${item.code}">
                </div>
                <div class="item-total">${formatCurrency(itemTotal)}</div>
                ${item.note ? `<div class="item-note">${item.note}</div>` : ''}
            `;
            
            categoryContent.appendChild(itemRow);
        });
    });
    
    // 將toggleCategory函數添加到window對象以便HTML onclick調用
    window.toggleCategory = function(categoryId) {
        const content = document.getElementById(categoryId);
        const header = content.previousElementSibling;
        const toggle = header.querySelector('.category-toggle');
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            toggle.classList.remove('rotate');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            toggle.classList.add('rotate');
        }
    };
    
    // 初始化所有類別為展開狀態
    categories.forEach(category => {
        const content = document.getElementById(category.id);
        if (content) {
            const toggle = content.previousElementSibling.querySelector('.category-toggle');
            content.style.maxHeight = content.scrollHeight + "px";
            toggle.classList.add('rotate');
        }
    });
}

/**
 * 渲染已選項目區域
 */
export function renderSelectedItems() {
    const selectedItemsSection = document.getElementById('selectedItemsSection');
    selectedItemsSection.innerHTML = `
        <div class="selected-items">
            <h2>已選擇項目明細</h2>
            <div id="selected-items-list">
                <p class="text-center p-4">尚未選擇任何項目</p>
            </div>
        </div>
    `;
}

/**
 * 更新已選項目列表
 */
export function updateSelectedItemsList() {
    const selectedList = document.getElementById('selected-items-list');
    const selectedItems = AppState.getSelectedItems();
    
    if (selectedItems.length === 0) {
        selectedList.innerHTML = '<p class="text-center p-4">尚未選擇任何項目</p>';
        updateTotalAmount();
        return;
    }
    
    // 創建表格
    let tableHTML = `
        <table class="min-w-full">
            <thead>
                <tr class="section-title">
                    <div class="item-code">編號</div>
                    <div class="item-name">項目名稱</div>
                    <div class="item-unit">單位</div>
                    <div class="item-price">單價</div>
                    <div class="item-quantity">數量</div>
                    <div class="item-total">小計</div>
                    <div class="item-actions">操作</div>
                </tr>
            </thead>
            <tbody>
    `;
    
    // 添加每個選中的項目
    selectedItems.forEach(item => {
        const total = calculateItemTotal(item.unitPrice, item.quantity);
        
        tableHTML += `
            <tr class="item-row">
                <div class="item-code">${item.code}</div>
                <div class="item-name">${item.name}</div>
                <div class="item-unit">${item.unit}</div>
                <div class="item-price">${formatCurrency(item.unitPrice)}</div>
                <div class="item-quantity">${item.quantity}</div>
                <div class="item-total">${formatCurrency(total)}</div>
                <div class="item-actions">
                    <button class="btn-remove" data-code="${item.code}">移除</button>
                </div>
            </tr>
            ${item.note ? `<tr><div class="item-note" colspan="7">${item.note}</div></tr>` : ''}
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    selectedList.innerHTML = tableHTML;
    
    // 添加移除按鈕事件
    const removeButtons = selectedList.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            removeSelectedItem(code);
        });
    });
    
    // 更新總金額
    updateTotalAmount();
}

/**
 * 渲染總計金額區域
 */
export function renderTotalSection() {
    const totalSection = document.getElementById('totalSection');
    totalSection.innerHTML = `
        <div class="total-section">
            <div>總計金額：<span class="total-amount" id="total-amount">${formatCurrency(0)}</span></div>
        </div>
    `;
}

/**
 * 更新總金額顯示
 */
export function updateTotalAmount() {
    const totalAmountElement = document.getElementById('total-amount');
    const selectedItems = AppState.getSelectedItems();
    const totalAmount = calculateTotalAmount(selectedItems);
    
    totalAmountElement.textContent = formatCurrency(totalAmount);
}

/**
 * 渲染操作按鈕區域
 */
export function renderActionButtons() {
    const actionButtonsSection = document.getElementById('actionButtonsSection');
    actionButtonsSection.innerHTML = `
        <div class="action-buttons non-printable">
            <button class="btn-danger" id="btn-clear">清除所有選擇</button>
            <button class="btn-secondary" id="btn-save">儲存報價單</button>
            <button class="btn-primary" id="btn-print">產生報價單</button>
        </div>
    `;
}

/**
 * 渲染列印區域
 */
export function renderPrintSection() {
    const printSection = document.getElementById('printSection');
    printSection.innerHTML = `
        <div id="print-section">
            <div id="print-header">
                <h1>裝修工程報價單</h1>
                <div id="print-customer-info"></div>
            </div>
            <div id="print-items"></div>
            <div id="print-total"></div>
            <div id="print-footer">
                <p>備註：</p>
                <ol>
                    <li>本報價單有效期限為報價日起算30天內。</li>
                    <li>實際施工項目以雙方簽訂合約為準。</li>
                    <li>部分項目材料費與工資分開計算，最終價格以現場丈量為準。</li>
                    <li>如有任何疑問，請與我們聯繫。</li>
                </ol>
            </div>
        </div>
    `;
}

/**
 * 添加選中項目
 * @param {string} code 項目代碼
 */
export function addSelectedItem(code) {
    // 獲取項目資料
    const checkbox = document.querySelector(`.item-select[data-code="${code}"]`);
    if (!checkbox) return false;
    
    const itemRow = checkbox.closest('.item-row');
    const quantityInput = itemRow.querySelector('.quantity-input');
    const priceInput = itemRow.querySelector('.price-input');
    
    const item = {
        code: checkbox.getAttribute('data-code'),
        name: checkbox.getAttribute('data-name'),
        unit: checkbox.getAttribute('data-unit'),
        unitPrice: parseFloat(priceInput.value) || parseFloat(checkbox.getAttribute('data-price')),
        quantity: parseFloat(quantityInput.value) || 0,
        note: checkbox.getAttribute('data-note')
    };
    
    // 添加到已選項目
    const added = AppState.addSelectedItem(item);
    if (added) {
        // 更新UI
        updateSelectedItemsList();
        return true;
    }
    return false;
}

/**
 * 移除選中項目
 * @param {string} code 項目代碼
 */
export function removeSelectedItem(code) {
    const removed = AppState.removeSelectedItem(code);
    if (removed) {
        // 更新UI
        updateSelectedItemsList();
        
        // 取消對應的勾選框
        const checkbox = document.querySelector(`.item-select[data-code="${code}"]`);
        if (checkbox) {
            checkbox.checked = false;
        }
        
        return true;
    }
    return false;
}

/**
 * 更新項目數量
 * @param {string} code 項目代碼
 * @param {number} quantity 新數量
 */
export function updateItemQuantity(code, quantity) {
    // 更新AppState中的數量
    const updated = AppState.updateItemQuantity(code, quantity);
    
    if (updated) {
        // 更新UI中的項目總價
        const itemRow = document.querySelector(`.item-row[data-code="${code}"]`);
        if (itemRow) {
            const priceElement = itemRow.querySelector('.item-price');
            const totalElement = itemRow.querySelector('.item-total');
            
            if (priceElement && totalElement) {
                const price = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g, ''));
                const total = price * quantity;
                totalElement.textContent = formatCurrency(total);
            }
        }
        
        // 更新已選項目列表
        updateSelectedItemsList();
        
        return true;
    }
    return false;
}

/**
 * 更新項目單價
 * @param {string} code 項目代碼
 * @param {number} price 新單價
 */
export function updateItemPrice(code, price) {
    // 查找AppState中的項目
    const item = AppState.getSelectedItems().find(item => item.code === code);
    if (item) {
        item.unitPrice = price;
        
        // 更新已選項目列表
        updateSelectedItemsList();
        
        return true;
    }
    return false;
}