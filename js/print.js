// js/print.js - 列印功能相關函數
import { calculateItemTotal, calculateTotalAmount, formatCurrency } from './calculations.js';
import { CONFIG } from './config.js';

/**
 * 準備列印數據
 * @param {string} name 客戶姓名
 * @param {string} phone 聯絡電話
 * @param {string} address 裝修地址
 * @param {string} date 報價日期
 * @param {Array} selectedItems 已選項目
 * @param {string} companyName 公司名稱
 * @param {string} companyPhone 公司電話
 * @param {string} staffName 人員姓名
 */
export function preparePrintData(
    name, 
    phone, 
    address, 
    date, 
    selectedItems, 
    companyName = '', 
    companyPhone = '', 
    staffName = ''
) {
    // 設置客戶信息
    const customerInfo = document.getElementById('print-customer-info');
    customerInfo.innerHTML = `
        <p><strong>客戶姓名：</strong>${name}</p>
        <p><strong>聯絡電話：</strong>${phone}</p>
        <p><strong>裝修地址：</strong>${address}</p>
        <p><strong>報價日期：</strong>${date}</p>
    `;
    
    // 設置公司資訊
    const printHeader = document.getElementById('print-header');
    const companyInfoDiv = document.createElement('div');
    companyInfoDiv.innerHTML = `
        <div style="text-align: right; margin-bottom: 20px;">
            <p><strong>${companyName || '裝修公司'}</strong></p>
            <p>聯絡電話：${companyPhone || ''}</p>
            <p>報價人員：${staffName || ''}</p>
            <p>報價日期：${date || ''}</p>
        </div>
    `;
    printHeader.insertBefore(companyInfoDiv, printHeader.firstChild);
    
    // 設置項目列表
    const itemsContainer = document.getElementById('print-items');
    itemsContainer.innerHTML = '';
    
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginTop = '20px';
    table.style.marginBottom = '20px';
    
    // 表頭
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr style="background-color: #f2f2f2; font-weight: bold;">
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">編號</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">項目名稱</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">單位</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">單價</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">數量</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">小計</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // 項目內容
    const tbody = document.createElement('tbody');
    
    let totalAmount = 0;
    
    selectedItems.forEach(item => {
        const total = calculateItemTotal(item.unitPrice, item.quantity);
        totalAmount += total;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="border: 1px solid #ddd; padding: 8px;">${item.code}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${item.name}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.unit}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${formatCurrency(item.unitPrice)}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.quantity}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${formatCurrency(total)}</td>
        `;
        tbody.appendChild(tr);
        
        if (item.note) {
            const noteTr = document.createElement('tr');
            noteTr.innerHTML = `
                <td colspan="6" style="border: 1px solid #ddd; padding: 4px 8px; font-size: 0.9em; color: #666;">
                    備註：${item.note}
                </td>
            `;
            tbody.appendChild(noteTr);
        }
    });
    
    table.appendChild(tbody);
    
    // 總計金額
    const tfoot = document.createElement('tfoot');
    tfoot.innerHTML = `
        <tr style="background-color: #f9f9f9; font-weight: bold;">
            <td colspan="5" style="border: 1px solid #ddd; padding: 8px; text-align: right;">總計金額：</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${formatCurrency(totalAmount)}</td>
        </tr>
    `;
    table.appendChild(tfoot);
    
    itemsContainer.appendChild(table);
    
    // 設置總計區域
    const printTotal = document.getElementById('print-total');
    printTotal.innerHTML = `
        <div style="text-align: right; margin: 20px 0; font-size: 1.2em; font-weight: bold;">
            總計金額：${formatCurrency(totalAmount)}
        </div>
    `;
    
    // 設置底部備註
    const printFooter = document.getElementById('print-footer');
    printFooter.innerHTML = '<p>備註：</p><ol>';
    
    // 使用默認備註或配置中的備註（如果存在）
    const defaultNotes = [
        '本報價單有效期限為報價日起算7天內',
        '實際施工項目以雙方簽訂合約為準',
        '如有特殊要求或材質選擇，價格可能會有所調整',
        '付款方式：簽約50%，完工驗收50%'
    ];
    
    const footerNotes = (CONFIG && CONFIG.PRINT && CONFIG.PRINT.footerNotes) ? CONFIG.PRINT.footerNotes : defaultNotes;
    
    footerNotes.forEach(note => {
        printFooter.innerHTML += `<li>${note}</li>`;
    });
    
    printFooter.innerHTML += '</ol>';
    
    // 添加簽名欄
    const signatureDiv = document.createElement('div');
    signatureDiv.style.marginTop = '50px';
    signatureDiv.style.display = 'flex';
    signatureDiv.style.justifyContent = 'space-between';
    signatureDiv.innerHTML = `
        <div style="width: 45%;">
            <p style="border-top: 1px solid #000; padding-top: 10px; text-align: center;">客戶簽名</p>
        </div>
        <div style="width: 45%;">
            <p style="border-top: 1px solid #000; padding-top: 10px; text-align: center;">${companyName || '統包商/師傅'} 簽名</p>
        </div>
    `;
    
    printFooter.appendChild(signatureDiv);
}