// js/calculations.js - 計算相關函數
import { CONFIG } from './config.js';

/**
 * 計算項目總價
 * @param {number} price 單價
 * @param {number} quantity 數量
 * @returns {number} 項目總價
 */
export function calculateItemTotal(price, quantity) {
    return price * quantity;
}

/**
 * 計算所有選中項目的總金額
 * @param {Array} items 選中的項目數組
 * @returns {number} 總金額
 */
export function calculateTotalAmount(items) {
    return items.reduce((sum, item) => {
        return sum + calculateItemTotal(item.unitPrice, item.quantity);
    }, 0);
}

/**
 * 格式化貨幣顯示
 * @param {number} amount 金額
 * @returns {string} 格式化後的貨幣字串
 */
export function formatCurrency(amount) {
    return new Intl.NumberFormat('zh-TW', CONFIG.PRICE_FORMAT).format(amount);
}