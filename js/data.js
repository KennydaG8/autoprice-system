// js/data.js - 數據定義
// 分類定義
export const CATEGORIES = [
    { id: 'category-a', code: 'A', name: '保護' },
    { id: 'category-b', code: 'B', name: '拆除' },
    { id: 'category-c', code: 'C', name: '泥作' },
    { id: 'category-d', code: 'D', name: '水電' },
    { id: 'category-e', code: 'E', name: '木作' },
    { id: 'category-f', code: 'F', name: '油漆' },
    { id: 'category-g', code: 'G', name: '設備' },
    { id: 'category-h', code: 'H', name: '門窗' },
    { id: 'category-i', code: 'I', name: '地板' },
    { id: 'category-j', code: 'J', name: '其他' }
];

// 裝修項目數據
export const DEFAULT_ITEMS = [
    { code: 'A-1', name: '公共區域保護', category: 'A', defaultQuantity: 15, unit: '坪', unitPrice: 600, note: '例：電梯、走道 / 材質：瓦楞板/夾板' },
    { code: 'A-2', name: '室內區域保護', category: 'A', defaultQuantity: 15, unit: '坪', unitPrice: 600, note: '例：地坪、未拆除門窗 / 材質' },
    { code: 'B-1', name: '舊有裝潢拆除', category: 'B', defaultQuantity: 1, unit: '式', unitPrice: 15000, note: '例：天花板、木作櫃' },
    { code: 'B-2', name: '隔間牆拆除', category: 'B', defaultQuantity: 1, unit: '式', unitPrice: 15000, note: '材質：磚牆/輕隔間' },
    { code: 'B-3', name: '地磚/壁磚刨除', category: 'B', defaultQuantity: 1, unit: '式', unitPrice: 1, note: '區域：客廳/房間/浴室/廚房/陽台' }, // 注意：單價為 1，請確認是否正確
    { code: 'B-4', name: '舊廚具拆除', category: 'B', defaultQuantity: 1, unit: '套', unitPrice: 5000, note: '' },
    { code: 'B-5', name: '舊衛浴設備拆除', category: 'B', defaultQuantity: 1, unit: '間/套', unitPrice: 3000, note: '含馬桶、面盆、浴缸等' },
    { code: 'B-6', name: '門/窗拆除', category: 'B', defaultQuantity: 1, unit: '樘/扇', unitPrice: 2000, note: '' },
    { code: 'B-7', name: '廢棄物清運', category: 'B', defaultQuantity: 1, unit: '車/式', unitPrice: 12000, note: '含垃圾處理費' },
    { code: 'C-1', name: '牆面打底/粉光', category: 'C', defaultQuantity: 1, unit: '坪', unitPrice: 2000, note: '區域/原因：修補/壁癌處理後' },
    { code: 'C-2', name: '地面打底/粉光', category: 'C', defaultQuantity: 1, unit: '坪', unitPrice: 2000, note: '區域/原因：整平/墊高' },
    { code: 'C-3', name: '砌白磚牆/隔間', category: 'C', defaultQuantity: 1, unit: 'm²', unitPrice: 1100, note: '材質：紅磚/白磚' }, // 注意：CSV 寫白磚，備註寫紅/白磚
    { code: 'C-4', name: '浴室防水工程', category: 'C', defaultQuantity: 1, unit: '間', unitPrice: 8000, note: '區域：浴室/陽台/廚房/窗框 - 高度/層數' },
    { code: 'C-5', name: '地磚鋪設', category: 'C', defaultQuantity: 1, unit: '坪', unitPrice: 2600, note: '區域/磚材規格/鋪法 - 磚另料計或內含' },
    { code: 'C-6', name: '壁磚鋪設', category: 'C', defaultQuantity: 1, unit: '坪', unitPrice: 2600, note: '區域/磚材規格/鋪法 - 磚另料計或內含' },
    { code: 'C-7', name: '門/窗崁縫', category: 'C', defaultQuantity: 1, unit: '樘/口', unitPrice: 1500, note: '' },
    { code: 'D-1', name: '冷/熱水管更新/配置', category: 'D', defaultQuantity: 1, unit: '口/式/間', unitPrice: 1800, note: '範圍：全室/廚衛 - 材質：不鏽鋼壓接/車牙' },
    { code: 'D-2', name: '排水管更新/配置', category: 'D', defaultQuantity: 1, unit: '口/式/間', unitPrice: 1800, note: '範圍：全室/廚衛/陽台/冷氣' },
    { code: 'D-3', name: '電源總開關箱更換/整理', category: 'D', defaultQuantity: 1, unit: '組/式', unitPrice: 2500, note: '含NFB規格/數量' },
    { code: 'D-4', name: '電線迴路更新/重拉', category: 'D', defaultQuantity: 5, unit: '迴/式', unitPrice: 1500, note: '一般插座/燈具/冷氣/廚房/110V220V' },
    { code: 'D-5', name: '插座/開關/出線口配線與安裝', category: 'D', defaultQuantity: 10, unit: '口/組', unitPrice: 500, note: '含新增/移位 - 面板另計或內含 - 品牌' },
    { code: 'D-6', name: '燈具出線口配置', category: 'D', defaultQuantity: 8, unit: '口', unitPrice: 300, note: '' },
    { code: 'D-7', name: '弱電線路配置', category: 'D', defaultQuantity: 1, unit: '口/式', unitPrice: 1800, note: '網路/電視/電話' },
    { code: 'D-8', name: '獨立電錶申請/安裝', category: 'D', defaultQuantity: 1, unit: '只/式', unitPrice: 15000, note: '隔套適用，規費/外線費另計' },
    { code: 'D-9', name: '瓦斯管線', category: 'D', defaultQuantity: 1, unit: '式', unitPrice: 3000, note: '檢查/移位/新增 - 需證照' },
    { code: 'E-1', name: '天花板施作', category: 'E', defaultQuantity: 1, unit: '坪', unitPrice: 3300, note: '材質：矽酸鈣板/石膏板 - 樣式：平頂/間照/造型' },
    { code: 'E-2', name: '木作隔間牆', category: 'E', defaultQuantity: 1, unit: '坪', unitPrice: 3300, note: '材質/厚度/隔音棉' },
    { code: 'E-3', name: '櫥櫃/收納櫃製作', category: 'E', defaultQuantity: 1, unit: '尺/座/式', unitPrice: 3600, note: '位置/材質/五金' },
    { code: 'E-4', name: '門框/門片安裝', category: 'E', defaultQuantity: 1, unit: '樘/片', unitPrice: 3500, note: '樣式/材質/含五金' },
    { code: 'F-1', name: '牆面/天花板油漆', category: 'F', defaultQuantity: 1, unit: '坪/m²/式', unitPrice: 900, note: '含批土、研磨 - 漆種：水泥漆/乳膠漆 - 顏色' },
    { code: 'F-2', name: '木作物件油漆', category: 'F', defaultQuantity: 1, unit: '式', unitPrice: 3000, note: '例：門片、櫥櫃 - 噴漆/染色' },
    { code: 'G-1', name: '廚具系統', category: 'G', defaultQuantity: 1, unit: '套/式', unitPrice: 80000, note: '項目詳列：櫥櫃/檯面/水槽/龍頭/三機 - 品牌/型號' },
    { code: 'G-2', name: '衛浴設備安裝', category: 'G', defaultQuantity: 1, unit: '間/套', unitPrice: 6000, note: '不含衛浴設備' },
    { code: 'G-3', name: '燈具安裝', category: 'G', defaultQuantity: 1, unit: '只/組/式', unitPrice: 500, note: '' },
    { code: 'G-4', name: '熱水器安裝', category: 'G', defaultQuantity: 1, unit: '台', unitPrice: 11000, note: '類型：瓦斯/電 - 容量 - 品牌/型號' },
    { code: 'G-5', name: '加壓馬達安裝', category: 'G', defaultQuantity: 1, unit: '台', unitPrice: 7000, note: '若水壓不足' },
    { code: 'H-1', name: '鋁門窗更換/新設', category: 'H', defaultQuantity: 1, unit: '樘/才', unitPrice: 5000, note: '樣式/玻璃/顏色/品牌' },
    { code: 'H-2', name: '室內門更換/新設', category: 'H', defaultQuantity: 1, unit: '樘/片', unitPrice: 12000, note: '材質：塑鋼門/鋁門 - 樣式' },
    { code: 'H-3', name: '大門更換', category: 'H', defaultQuantity: 1, unit: '樘', unitPrice: 15000, note: '材質：硫化銅門/鋼木門 - 含鎖' },
    { code: 'I-1', name: 'SPC 石塑地板', category: 'I', defaultQuantity: 1, unit: '坪/m²', unitPrice: 2500, note: '含耗材 - 厚度/品牌/型號' },
    { code: 'I-2', name: '超耐磨木地板', category: 'I', defaultQuantity: 1, unit: '坪/m²', unitPrice: 3000, note: '含耗材 - 厚度/品牌/型號' },
    { code: 'I-3', name: '塑膠地板', category: 'I', defaultQuantity: 1, unit: '坪/m²', unitPrice: 1400, note: '卡扣式/黏貼式 - 厚度/品牌/型號' },
    { code: 'J-1', name: '裝修後細部清潔', category: 'J', defaultQuantity: 1, unit: '式/坪', unitPrice: 6000, note: '' },
    { code: 'J-2', name: '窗簾/捲簾/百葉窗', category: 'J', defaultQuantity: 1, unit: '才/式', unitPrice: 2000, note: '費用另計或協助安裝' },
    { code: 'J-3', name: '壁紙/特殊塗料', category: 'J', defaultQuantity: 1, unit: '坪/m²/式', unitPrice: 1200, note: '費用另計' },
    { code: 'J-4', name: '冷氣配管/安裝', category: 'J', defaultQuantity: 1, unit: '台/式', unitPrice: 4500, note: '基本安裝機體費用另計' },
    { code: 'J-5', name: '室內裝修許可證申請代辦', category: 'J', defaultQuantity: 1, unit: '式', unitPrice: 70000, note: '符合申請條件 - 含規費/簽證費' },
    { code: 'J-6', name: '消防設備工程', category: 'J', defaultQuantity: 1, unit: '式', unitPrice: 3000, note: '符合法規要求 - 項目詳列' }
];

// 用於管理應用程序狀態的數據存儲
export const AppState = {
    selectedItems: [],
    
    // 獲取選中的項目
    getSelectedItems() {
        return this.selectedItems;
    },
    
    // 添加選中項目
    addSelectedItem(item) {
        const exists = this.selectedItems.some(i => i.code === item.code);
        if (!exists) {
            // 確保添加的項目包含所有需要的屬性，特別是從界面動態更新的 quantity 和 unitPrice
            const newItem = { ...item }; // 創建副本以防修改原始數據
            // 如果界面上有預設值以外的值，應該在這裡讀取，但 addSelectedItem 通常在勾選時觸發，用的是當時界面的值
            // 確保 quantity 和 unitPrice 是數字
            newItem.quantity = parseFloat(item.quantity) || 0;
            newItem.unitPrice = parseFloat(item.unitPrice) || 0;

            this.selectedItems.push(newItem);
            return true;
        }
        return false;
    },
    
    // 移除選中項目
    removeSelectedItem(code) {
        const index = this.selectedItems.findIndex(item => item.code === code);
        if (index !== -1) {
            this.selectedItems.splice(index, 1);
            return true;
        }
        return false;
    },
    
    // 更新項目數量
    updateItemQuantity(code, quantity) {
        const item = this.selectedItems.find(item => item.code === code);
        if (item) {
            item.quantity = quantity;
            return true;
        }
        return false;
    },

    // 更新項目單價 (新增這個函數)
    updateItemPrice(code, price) {
        const item = this.selectedItems.find(item => item.code === code);
        if (item) {
            item.unitPrice = parseFloat(price) || 0; // 確保是數字
            return true;
        }
        return false;
    },
    
    // 清除所有選中項目
    clearSelectedItems() {
        this.selectedItems = [];
    },
    
    // 保存數據到本地存儲
    saveToLocalStorage() {
        // 從 DOM 獲取客戶和公司資訊 (這部分邏輯不變)
        const companyNameElement = document.getElementById('company-name');
        const companyPhoneElement = document.getElementById('company-phone');
        const staffNameElement = document.getElementById('staff-name');
        const customerNameElement = document.getElementById('customer-name');
        const customerPhoneElement = document.getElementById('customer-phone');
        const customerAddressElement = document.getElementById('customer-address');
        const quoteDateElement = document.getElementById('quote-date');

        const data = {
            selectedItems: this.selectedItems,
            companyInfo: {
                name: companyNameElement ? companyNameElement.value : '',
                phone: companyPhoneElement ? companyPhoneElement.value : '',
                staffName: staffNameElement ? staffNameElement.value : ''
            },
            customerInfo: {
                name: customerNameElement ? customerNameElement.value : '',
                phone: customerPhoneElement ? customerPhoneElement.value : '',
                address: customerAddressElement ? customerAddressElement.value : '',
                date: quoteDateElement ? quoteDateElement.value : ''
            }
        };

        localStorage.setItem('renovation_quote_data', JSON.stringify(data));
    },
    
    // 從本地存儲加載數據
    loadFromLocalStorage() {
        const storedData = localStorage.getItem('renovation_quote_data');
        if (storedData) {
            const data = JSON.parse(storedData);
            // 將存儲的數據恢復到 AppState
            this.selectedItems = data.selectedItems || [];
            // 確保數量和價格是數字
             this.selectedItems.forEach(item => {
                item.quantity = parseFloat(item.quantity) || 0;
                item.unitPrice = parseFloat(item.unitPrice) || 0;
            });


            // 設置公司信息 (DOM 操作應移至 UI 模塊或主模塊)
             const companyNameElement = document.getElementById('company-name');
             const companyPhoneElement = document.getElementById('company-phone');
             const staffNameElement = document.getElementById('staff-name');
             if (data.companyInfo) {
                 if (companyNameElement) companyNameElement.value = data.companyInfo.name || '';
                 if (companyPhoneElement) companyPhoneElement.value = data.companyInfo.phone || '';
                 if (staffNameElement) staffNameElement.value = data.companyInfo.staffName || '';
             }

            // 設置客戶信息 (DOM 操作應移至 UI 模塊或主模塊)
             const customerNameElement = document.getElementById('customer-name');
             const customerPhoneElement = document.getElementById('customer-phone');
             const customerAddressElement = document.getElementById('customer-address');
             const quoteDateElement = document.getElementById('quote-date');
             if (data.customerInfo) {
                 if (customerNameElement) customerNameElement.value = data.customerInfo.name || '';
                 if (customerPhoneElement) customerPhoneElement.value = data.customerInfo.phone || '';
                 if (customerAddressElement) customerAddressElement.value = data.customerInfo.address || '';
                 if (quoteDateElement) quoteDateElement.value = data.customerInfo.date || new Date().toISOString().split('T')[0]; // 如果沒存日期，用今天
             } else if(quoteDateElement) {
                 // 如果沒有存儲客戶資訊，至少設置今天的日期
                 quoteDateElement.value = new Date().toISOString().split('T')[0];
             }


            return true; // 返回 true 表示成功加載
        }
         // 如果沒有存儲數據，確保日期欄位有值
         const quoteDateElement = document.getElementById('quote-date');
         if (quoteDateElement && !quoteDateElement.value) {
             quoteDateElement.value = new Date().toISOString().split('T')[0];
         }
        return false; // 返回 false 表示沒有數據可加載
    }
};