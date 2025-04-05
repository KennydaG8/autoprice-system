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
    // A.保護
    { 
        code: 'A-1', 
        name: '公共區域保護', 
        category: 'A', 
        unit: '式', 
        defaultQuantity: 100, 
        unitPrice: 50, 
        note: '(例：電梯、走道 / 材質：瓦楞板/夾板)'
    },
    { 
        code: 'A-2', 
        name: '室內區域保護', 
        category: 'A', 
        unit: '式', 
        defaultQuantity: 20, 
        unitPrice: 30, 
        note: '(例：地坪、未拆除門窗 / 材質)'
    },
    
    // B.拆除
    { 
        code: 'B-1', 
        name: '舊有裝潢拆除', 
        category: 'B', 
        unit: '式', 
        defaultQuantity: 5, 
        unitPrice: 100, 
        note: '(例：天花板、木作櫃)'
    },
    { 
        code: 'B-2', 
        name: '隔間牆拆除', 
        category: 'B', 
        unit: '式', 
        defaultQuantity: 2, 
        unitPrice: 200, 
        note: '(材質：磚牆/輕隔間)'
    },
    { 
        code: 'B-3', 
        name: '地磚/壁磚刨除', 
        category: 'B', 
        unit: '式', 
        defaultQuantity: 30, 
        unitPrice: 60, 
        note: '(區域：客廳/房間/浴室/廚房/陽台)'
    },
    { 
        code: 'B-4', 
        name: '舊廚具拆除', 
        category: 'B', 
        unit: '套', 
        defaultQuantity: 1, 
        unitPrice: 3000, 
        note: ''
    },
    { 
        code: 'B-5', 
        name: '舊衛浴設備拆除', 
        category: 'B', 
        unit: '間/套', 
        defaultQuantity: 2, 
        unitPrice: 5000, 
        note: '(含馬桶、面盆、浴缸等)'
    },
    { 
        code: 'B-6', 
        name: '門/窗拆除', 
        category: 'B', 
        unit: '樘/扇', 
        defaultQuantity: 5, 
        unitPrice: 800, 
        note: ''
    },
    { 
        code: 'B-7', 
        name: '廢棄物清運', 
        category: 'B', 
        unit: '車/式', 
        defaultQuantity: 2, 
        unitPrice: 10000, 
        note: '(含垃圾處理費)'
    },
    
    // C.泥作
    { 
        code: 'C-1', 
        name: '牆面打底/粉光', 
        category: 'C', 
        unit: '式', 
        defaultQuantity: 15, 
        unitPrice: 80, 
        note: '(區域/原因：修補/壁癌處理後)'
    },
    { 
        code: 'C-2', 
        name: '地面打底/粉光', 
        category: 'C', 
        unit: '式', 
        defaultQuantity: 25, 
        unitPrice: 100, 
        note: '(區域/原因：整平/墊高)'
    },
    { 
        code: 'C-3', 
        name: '砌磚牆/隔間', 
        category: 'C', 
        unit: '式', 
        defaultQuantity: 10, 
        unitPrice: 150, 
        note: '(材質：紅磚/白磚)'
    },
    { 
        code: 'C-4', 
        name: '防水工程', 
        category: 'C', 
        unit: '式', 
        defaultQuantity: 20, 
        unitPrice: 120, 
        note: '(區域：浴室/陽台/廚房/窗框 - 高度/層數)'
    },
    { 
        code: 'C-5', 
        name: '地磚鋪設', 
        category: 'C', 
        unit: '式', 
        defaultQuantity: 30, 
        unitPrice: 70, 
        note: '(區域/磚材規格/鋪法 - 磚另料計或內含)'
    },
    { 
        code: 'C-6', 
        name: '壁磚鋪設', 
        category: 'C', 
        unit: '式', 
        defaultQuantity: 40, 
        unitPrice: 90, 
        note: '(區域/磚材規格/鋪法 - 磚另料計或內含)'
    },
    { 
        code: 'C-7', 
        name: '門/窗崁縫', 
        category: 'C', 
        unit: '樘/口', 
        defaultQuantity: 5, 
        unitPrice: 300, 
        note: ''
    },
    
    // D.水電
    { 
        code: 'D-1', 
        name: '冷/熱水管更新/配置', 
        category: 'D', 
        unit: '式/間', 
        defaultQuantity: 3, 
        unitPrice: 6000, 
        note: '(範圍：全室/廚衛 - 材質：不鏽鋼壓接/車牙)'
    },
    { 
        code: 'D-2', 
        name: '排水管更新/配置', 
        category: 'D', 
        unit: '式/間', 
        defaultQuantity: 2, 
        unitPrice: 4000, 
        note: '(範圍：全室/廚衛/陽台/冷氣)'
    },
    { 
        code: 'D-3', 
        name: '電源總開關箱更換/整理', 
        category: 'D', 
        unit: '組/式', 
        defaultQuantity: 1, 
        unitPrice: 2500, 
        note: '(含NFB規格/數量)'
    },
    { 
        code: 'D-4', 
        name: '電線迴路更新/重拉', 
        category: 'D', 
        unit: '迴/式', 
        defaultQuantity: 5, 
        unitPrice: 1000, 
        note: '(一般插座/燈具/冷氣/廚房/220V)'
    },
    { 
        code: 'D-5', 
        name: '插座/開關/出線口配線與安裝', 
        category: 'D', 
        unit: '口/組', 
        defaultQuantity: 10, 
        unitPrice: 500, 
        note: '(含新增/移位 - 面板另計或內含 - 品牌)'
    },
    { 
        code: 'D-6', 
        name: '燈具出線口配置', 
        category: 'D', 
        unit: '口', 
        defaultQuantity: 8, 
        unitPrice: 300, 
        note: ''
    },
    { 
        code: 'D-7', 
        name: '弱電線路配置', 
        category: 'D', 
        unit: '口/式', 
        defaultQuantity: 2, 
        unitPrice: 1500, 
        note: '(網路/電視/電話)'
    },
    { 
        code: 'D-8', 
        name: '獨立電錶申請/安裝', 
        category: 'D', 
        unit: '只/式', 
        defaultQuantity: 1, 
        unitPrice: 5000, 
        note: '(隔套適用，規費/外線費另計)'
    },
    { 
        code: 'D-9', 
        name: '瓦斯管線', 
        category: 'D', 
        unit: '式', 
        defaultQuantity: 2, 
        unitPrice: 3000, 
        note: '(檢查/移位/新增 - 需證照)'
    },
    
    // E.木作
    { 
        code: 'E-1', 
        name: '天花板施作', 
        category: 'E', 
        unit: '坪/m²', 
        defaultQuantity: 15, 
        unitPrice: 1200, 
        note: '(材質：矽酸鈣板/石膏板 - 樣式：平頂/間照/造型)'
    },
    { 
        code: 'E-2', 
        name: '木作隔間牆', 
        category: 'E', 
        unit: '坪/m²/式', 
        defaultQuantity: 10, 
        unitPrice: 2000, 
        note: '(材質/厚度/隔音棉)'
    },
    { 
        code: 'E-3', 
        name: '櫥櫃/收納櫃製作', 
        category: 'E', 
        unit: '尺/座/式', 
        defaultQuantity: 20, 
        unitPrice: 500, 
        note: '(位置/材質/五金)'
    },
    { 
        code: 'E-4', 
        name: '門框/門片安裝', 
        category: 'E', 
        unit: '樘/片', 
        defaultQuantity: 3, 
        unitPrice: 3500, 
        note: '(樣式/材質/含五金)'
    },
    
    // F.油漆
    { 
        code: 'F-1', 
        name: '牆面/天花板油漆', 
        category: 'F', 
        unit: '坪/m²/式', 
        defaultQuantity: 25, 
        unitPrice: 300, 
        note: '(含批土、研磨 - 漆種：水泥漆/乳膠漆 - 顏色)'
    },
    { 
        code: 'F-2', 
        name: '木作物件油漆', 
        category: 'F', 
        unit: '式', 
        defaultQuantity: 5, 
        unitPrice: 800, 
        note: '(例：門片、櫥櫃 - 噴漆/染色)'
    },
    
    // G.設備
    { 
        code: 'G-1', 
        name: '廚具系統', 
        category: 'G', 
        unit: '套/式', 
        defaultQuantity: 1, 
        unitPrice: 80000, 
        note: '(項目詳列：櫥櫃/檯面/水槽/龍頭/三機 - 品牌/型號)'
    },
    { 
        code: 'G-2', 
        name: '衛浴設備', 
        category: 'G', 
        unit: '間/套', 
        defaultQuantity: 1, 
        unitPrice: 60000, 
        note: '(項目詳列：馬桶/面盆/龍頭/淋浴/鏡櫃/暖風機 - 品牌/型號)'
    },
    { 
        code: 'G-3', 
        name: '燈具安裝', 
        category: 'G', 
        unit: '只/組/式', 
        defaultQuantity: 10, 
        unitPrice: 500, 
        note: ''
    },
    { 
        code: 'G-4', 
        name: '熱水器安裝', 
        category: 'G', 
        unit: '台', 
        defaultQuantity: 1, 
        unitPrice: 10000, 
        note: '(類型：瓦斯/電 - 容量 - 品牌/型號)'
    },
    { 
        code: 'G-5', 
        name: '加壓馬達安裝', 
        category: 'G', 
        unit: '台', 
        defaultQuantity: 1, 
        unitPrice: 8000, 
        note: '(若水壓不足)'
    },
    
    // H.門窗
    { 
        code: 'H-1', 
        name: '鋁門窗更換/新設', 
        category: 'H', 
        unit: '樘/才', 
        defaultQuantity: 5, 
        unitPrice: 5000, 
        note: '(樣式/玻璃/顏色/品牌)'
    },
    { 
        code: 'H-2', 
        name: '室內門更換/新設', 
        category: 'H', 
        unit: '樘/片', 
        defaultQuantity: 3, 
        unitPrice: 3000, 
        note: '(材質：塑鋼門/鋁門 - 樣式)'
    },
    { 
        code: 'H-3', 
        name: '大門更換', 
        category: 'H', 
        unit: '樘', 
        defaultQuantity: 1, 
        unitPrice: 15000, 
        note: '(材質：硫化銅門/鋼木門 - 含鎖)'
    },
    
    // I.地板
    { 
        code: 'I-1', 
        name: 'SPC 石塑地板', 
        category: 'I', 
        unit: '坪/m²', 
        defaultQuantity: 20, 
        unitPrice: 1500, 
        note: '(含耗材 - 厚度/品牌/型號)'
    },
    { 
        code: 'I-2', 
        name: '超耐磨木地板', 
        category: 'I', 
        unit: '坪/m²', 
        defaultQuantity: 20, 
        unitPrice: 2000, 
        note: '(含耗材 - 厚度/品牌/型號)'
    },
    { 
        code: 'I-3', 
        name: '塑膠地板', 
        category: 'I', 
        unit: '坪/m²', 
        defaultQuantity: 20, 
        unitPrice: 800, 
        note: '(卡扣式/黏貼式 - 厚度/品牌/型號)'
    },
    
    // J.其他
    { 
        code: 'J-1', 
        name: '裝修後細部清潔', 
        category: 'J', 
        unit: '式/坪', 
        defaultQuantity: 1, 
        unitPrice: 5000, 
        note: ''
    },
    { 
        code: 'J-2', 
        name: '窗簾/捲簾/百葉窗', 
        category: 'J', 
        unit: '才/式', 
        defaultQuantity: 5, 
        unitPrice: 2000, 
        note: '(費用另計或協助安裝)'
    },
    { 
        code: 'J-3', 
        name: '壁紙/特殊塗料', 
        category: 'J', 
        unit: '坪/m²/式', 
        defaultQuantity: 10, 
        unitPrice: 1200, 
        note: '(費用另計)'
    },
    { 
        code: 'J-4', 
        name: '冷氣配管/安裝', 
        category: 'J', 
        unit: '台/式', 
        defaultQuantity: 2, 
        unitPrice: 4000, 
        note: '(含排水、電源 - 機體費用另計或協助安裝)'
    },
    { 
        code: 'J-5', 
        name: '室內裝修許可證申請代辦', 
        category: 'J', 
        unit: '式', 
        defaultQuantity: 1, 
        unitPrice: 10000, 
        note: '(若符合申請條件 - 規費/簽證費另計)'
    },
    { 
        code: 'J-6', 
        name: '消防設備工程', 
        category: 'J', 
        unit: '式', 
        defaultQuantity: 1, 
        unitPrice: 20000, 
        note: '(若隔套且符合法規要求 - 項目詳列)'
    }
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
            this.selectedItems.push(item);
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
    
    // 清除所有選中項目
    clearSelectedItems() {
        this.selectedItems = [];
    },
    
    // 保存數據到本地存儲
    saveToLocalStorage() {
        const data = {
            selectedItems: this.selectedItems,
            companyInfo: {
                name: document.getElementById('company-name').value,
                phone: document.getElementById('company-phone').value,
                staffName: document.getElementById('staff-name').value
            },
            customerInfo: {
                name: document.getElementById('customer-name').value,
                phone: document.getElementById('customer-phone').value,
                address: document.getElementById('customer-address').value,
                date: document.getElementById('quote-date').value
            }
        };
        
        localStorage.setItem('renovation_quote_data', JSON.stringify(data));
    },
    
    // 從本地存儲加載數據
    loadFromLocalStorage() {
        const storedData = localStorage.getItem('renovation_quote_data');
        if (storedData) {
            const data = JSON.parse(storedData);
            this.selectedItems = data.selectedItems || [];
            
            // 設置公司信息
            if (data.companyInfo) {
                document.getElementById('company-name').value = data.companyInfo.name || '';
                document.getElementById('company-phone').value = data.companyInfo.phone || '';
                document.getElementById('staff-name').value = data.companyInfo.staffName || '';
            }
            
            // 設置客戶信息
            if (data.customerInfo) {
                document.getElementById('customer-name').value = data.customerInfo.name || '';
                document.getElementById('customer-phone').value = data.customerInfo.phone || '';
                document.getElementById('customer-address').value = data.customerInfo.address || '';
                document.getElementById('quote-date').value = data.customerInfo.date || '';
            }
            
            return true;
        }
        return false;
    }
};