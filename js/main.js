// js/main.js - 主程序入口
import { CATEGORIES, DEFAULT_ITEMS } from './data.js';
import { renderCustomerInfo, renderCategories, renderSelectedItems, renderTotalSection, renderActionButtons, renderPrintSection } from './ui.js';
import { initEventListeners } from './events.js';

/**
 * 初始化應用程序
 */
export function init() {
    console.log('初始化裝修報價系統...');
    
    // 渲染各個部分
    renderCustomerInfo();
    renderCategories(CATEGORIES, DEFAULT_ITEMS);
    renderSelectedItems();
    renderTotalSection();
    renderActionButtons();
    renderPrintSection();
    
    // 初始化事件監聽器
    initEventListeners();
    
    // 設置當前日期
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('quote-date').value = today;
    
    console.log('裝修報價系統初始化完成！');
}