// js/config.js - 系統配置
// 系統配置
export const CONFIG = {
    // 數據儲存鍵名
    STORAGE_KEY: 'renovation_quote_data',
    
    // 折扣選項
    DISCOUNT_OPTIONS: [
        { value: 0, label: '無折扣' },
        { value: 5, label: '5% 折扣' },
        { value: 10, label: '10% 折扣' },
        { value: 15, label: '15% 折扣' },
        { value: 20, label: '20% 折扣' }
    ],
    
    // 價格顯示格式
    PRICE_FORMAT: {
        style: 'currency',
        currency: 'TWD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    },
    
    // 客戶欄位驗證
    REQUIRED_FIELDS: ['customer-name'],
    
    PRINT: {
        pageTitle: '裝修工程報價單',
        footerNotes: [
            '本報價單有效期限為報價日起算7天內',
            '實際施工項目以雙方簽訂合約為準',
            '如有特殊要求或材質選擇，價格可能會有所調整',
            '付款方式：簽約50%，完工驗收50%'
        ]
    }
};