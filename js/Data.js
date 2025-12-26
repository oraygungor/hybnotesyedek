// Bu dosya blog yazılarını ve 'biliyor muydunuz' bilgilerini içerir.
// Verileri App.js'den ayırmak, kodun daha temiz ve yönetilebilir olmasını sağlar.

window.HybNotesData = {
    posts: [
        { 
            "id": 5, 
            "date": "2024-10-28", 
            "readTime": { "tr": "6 dk", "en": "6 min" }, 
            "category": { "tr": "Antrenman Bilimi", "en": "Training Science" }, 
            "title": { "tr": "Karvonen Formülü: Nabız Aralıklarını Doğru Hesaplamak", "en": "Karvonen Formula: Calculating Heart Rate Zones Correctly" }, 
            "summary": { "tr": "Klasik (220-Yaş) formülü neden hatalı? Nabız yedeği (HR Reserve) yöntemi ile gerçek kişiselleştirilmiş zone hesaplaması.", "en": "Why is the classic (220-Age) formula flawed? Truly personalized zone calculation using the Heart Rate Reserve (HRR) method." }, 
            "content": { "tr": "<p>Çoğu spor saati varsayılan olarak '220 - Yaş' formülünü kullanır...</p>", "en": "<p>Most sports watches use the '220 - Age' formula by default...</p>" }, 
            "references": ["Karvonen M, Kentala E. (1957)."] 
        },
        { 
            "id": 4, 
            "date": "2024-10-20", 
            "readTime": { "tr": "8 dk", "en": "8 min" }, 
            "category": { "tr": "Beslenme", "en": "Nutrition" }, 
            "title": { "tr": "Ultra Maratonlarda Sodyum Alım Stratejileri", "en": "Sodium Intake Strategies in Ultra Marathons" }, 
            "summary": { "tr": "Uzun yarışlarda hiponatremi riskini azaltmak ve performansı korumak için saatlik mg hesaplamaları.", "en": "Hourly mg calculations to reduce hyponatremia risk and maintain performance in long races." }, 
            "content": { "tr": "<p>Uzun yarışlarda sadece su içmek ölümcül olabilir...</p>", "en": "<p>Drinking only water during long races can be fatal...</p>" }, 
            "references": ["Hoffman, M. D. (2014)."] 
        },
        { 
            "id": 3, 
            "date": "2024-10-15", 
            "readTime": { "tr": "12 dk", "en": "12 min" }, 
            "category": { "tr": "Fizyoloji", "en": "Physiology" }, 
            "title": { "tr": "Mitokondriyal Biyogenez ve Zone 2", "en": "Mitochondrial Biogenesis and Zone 2" }, 
            "summary": { "tr": "Düşük yoğunluklu antrenmanların laktat temizleme kapasitesini nasıl artırdığına dair yeni bulgular.", "en": "New findings on how low-intensity training increases lactate clearance capacity." }, 
            "content": { "tr": "<p>Mitokondri, hücrenin enerji santralidir...</p>", "en": "<p>Mitochondria are the powerhouse of the cell...</p>" }, 
            "references": ["San-Millán, I. (2018)."] 
        }
    ],
    facts: [
        { "tag": "#Bilgi", "text": { "tr": "VO2max değeriniz genetik olarak sınırlıdır ancak antrenmanla geliştirilebilir.", "en": "Your VO2max is genetically limited but can be improved with training." } },
        { "tag": "#Beslenme", "text": { "tr": "Kafein, yorgunluk algısını azaltarak dayanıklılığı artırabilir.", "en": "Caffeine can improve endurance by reducing the perception of fatigue." } },
        { "tag": "#Recovery", "text": { "tr": "Uyku, en etkili toparlanma aracıdır.", "en": "Sleep is the most effective recovery tool." } }
    ]
};
