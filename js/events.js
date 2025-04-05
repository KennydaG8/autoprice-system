// js/events.js - 事件處理相關函數
import { AppState } from './data.js';
import { addSelectedItem, removeSelectedItem, updateItemQuantity,updateItemPrice, updateSelectedItemsList } from './ui.js';
import { preparePrintData } from './print.js';
import { CONFIG } from './config.js';
import { formatCurrency } from './calculations.js'; 

/**
 * 初始化事件監聽器
 */
export function initEventListeners() {
    // 項目選擇事件
    document.addEventListener('change', function(event) {
        const target = event.target;
        
        // 處理項目選擇/取消選擇
        if (target.classList.contains('item-select')) {
            const code = target.getAttribute('data-code');
            
            if (target.checked) {
                addSelectedItem(code);
            } else {
                removeSelectedItem(code);
            }
        }
        
        // 處理數量變更
        if (target.classList.contains('quantity-input')) {
            const code = target.getAttribute('data-code');
            const quantity = parseFloat(target.value) || 0;
            
            // 更新項目列表中的總價
            const itemRow = target.closest('.item-row');
            if (itemRow) {
                const priceInput = itemRow.querySelector('.price-input');
                const totalElement = itemRow.querySelector('.item-total');
                
                if (priceInput && totalElement) {
                    const price = parseFloat(priceInput.value) || 0;
                    const total = price * quantity;
                    totalElement.textContent = formatCurrency(total);  // 使用 formatCurrency
                }
            }
            
            // 檢查該項目是否已選中，如果是則更新選中項目數據
            const checkbox = itemRow.querySelector('.item-select');
            if (checkbox && checkbox.checked) {
                updateItemQuantity(code, quantity);
            }
        }

        // 處理單價變更
        if (target.classList.contains('price-input')) {
            const code = target.getAttribute('data-code');
            const price = parseFloat(target.value) || 0;
            
            // 更新項目列表中的總價
            const itemRow = target.closest('.item-row');
            if (itemRow) {
                const quantityInput = itemRow.querySelector('.quantity-input');
                const totalElement = itemRow.querySelector('.item-total');
                
                if (quantityInput && totalElement) {
                    const quantity = parseFloat(quantityInput.value) || 0;
                    const total = price * quantity;
                    totalElement.textContent = formatCurrency(total);  // 使用 formatCurrency
                }
                
                // 更新checkbox的data-price屬性
                const checkbox = itemRow.querySelector('.item-select');
                if (checkbox) {
                    checkbox.setAttribute('data-price', price);
                    
                    // 如果項目已選中，則更新選中項目的單價
                    if (checkbox.checked) {
                        updateItemPrice(code, price);
                    }
                }
            }
        }
    });

    // 清除所有選擇按鈕
    document.getElementById('btn-clear').addEventListener('click', function() {
        if (confirm('確定要清除所有已選項目嗎？')) {
            // 清除所有已選項目
            AppState.clearSelectedItems();
            
            // 取消所有勾選框
            const checkboxes = document.querySelectorAll('.item-select:checked');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            
            // 更新UI
            updateSelectedItemsList();
        }
    });
    
    // 儲存報價單按鈕
    document.getElementById('btn-save').addEventListener('click', function() {
        AppState.saveToLocalStorage();
        alert('報價單已儲存！');
    });
    
    // 產生報價單按鈕
    document.getElementById('btn-print').addEventListener('click', function() {
        const selectedItems = AppState.getSelectedItems();
        if (selectedItems.length === 0) {
            alert('請至少選擇一個項目！');
            return;
        }
        
        // 驗證必填欄位
        const customerName = document.getElementById('customer-name').value;
        if (!customerName) {
            alert('請填寫客戶姓名！');
            document.getElementById('customer-name').focus();
            return;
        }
        
        // 獲取客戶資料
        const customerPhone = document.getElementById('customer-phone').value;
        const customerAddress = document.getElementById('customer-address').value;
        const quoteDate = document.getElementById('quote-date').value;
        
        // 獲取公司資料
        const companyName = document.getElementById('company-name').value;
        const companyPhone = document.getElementById('company-phone').value;
        const staffName = document.getElementById('staff-name').value;
        
        // 準備列印數據
        preparePrintData(
            customerName, 
            customerPhone, 
            customerAddress, 
            quoteDate, 
            selectedItems,
            companyName,
            companyPhone,
            staffName
        );
        
        // 執行列印
        window.print();
    });
    
    // 頁面載入時嘗試從本地存儲加載數據
    window.addEventListener('load', function() {
        const loaded = AppState.loadFromLocalStorage();
        if (loaded) {
            // 更新UI
            updateSelectedItemsList();
            
            // 更新勾選框狀態
            AppState.getSelectedItems().forEach(item => {
                const checkbox = document.querySelector(`.item-select[data-code="${item.code}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
    });
}