// Bu dosya, uygulamanın veri kaynağıdır.
// Bilimsel veriler, formüller ve akademik referanslar içerir.

window.HybNotesData = {
    posts: [
        { 
            "id": 101, 
            "date": "2024-11-15", 
            "readTime": { "tr": "10 dk", "en": "10 min" }, 
            "category": { "tr": "Fizyoloji", "en": "Physiology" }, 
            "title": { "tr": "VO2max: Dayanıklılığın Tavanı mı?", "en": "VO2max: The Ceiling of Endurance?" }, 
            "summary": { 
                "tr": "Maksimum oksijen tüketim kapasitesi (VO2max) nedir, ne kadar geliştirilebilir? Fick denklemi ve performans ile ilişkisi.", 
                "en": "What is maximum oxygen uptake (VO2max) and how much can it be improved? The Fick equation and its correlation with performance." 
            }, 
            "content": { 
                "tr": `
                    <p>VO2max, bir sporcunun deniz seviyesinde, maksimum efor sırasında kullanabildiği en yüksek oksijen hacmini ifade eder. Genellikle <em>ml/kg/dk</em> cinsinden ölçülür.</p>
                    <div class="math-box">VO2max = Q × (a-v)O₂ farkı</div>
                    <p>Burada <strong>Q (Kardiyak Çıktı)</strong> kalbin bir dakikada pompaladığı kan miktarını, <strong>(a-v)O₂ farkı</strong> ise arteriyel ve venöz kan arasındaki oksijen farkını (kasların kandan ne kadar oksijen çekebildiğini) gösterir.</p>
                    <h4>Antrenmanla Ne Kadar Gelişir?</h4>
                    <p>Bilimsel çalışmalar, VO2max'ın büyük ölçüde genetik (yaklaşık %50) olduğunu göstermektedir. Düzenli antrenman ile sedanter bir birey VO2max değerini %15-20 oranında artırabilir. Elite dayanıklılık sporcularında bu değer erkeklerde 70-85, kadınlarda 60-75 ml/kg/dk aralığına ulaşabilir.</p>
                    <p>Ancak unutulmamalıdır ki; VO2max "motorun hacmini" belirlerken, Laktat Eşiği ve Koşu Ekonomisi o motorun "ne kadar verimli" kullanıldığını belirler.</p>
                `,
                "en": `
                    <p>VO2max refers to the maximum volume of oxygen an athlete can use during intense exercise at sea level. It is typically measured in <em>ml/kg/min</em>.</p>
                    <div class="math-box">VO2max = Q × (a-v)O₂ difference</div>
                    <p>Here, <strong>Q (Cardiac Output)</strong> represents the amount of blood the heart pumps per minute, and <strong>(a-v)O₂ difference</strong> shows the oxygen difference between arterial and venous blood (how much oxygen muscles can extract).</p>
                    <h4>How Much Can It Improve?</h4>
                    <p>Scientific studies show that VO2max is largely genetic (approx. 50%). With regular training, a sedentary individual can increase their VO2max by 15-20%. In elite endurance athletes, this value can reach 70-85 ml/kg/min for men and 60-75 for women.</p>
                    <p>However, it should be noted; while VO2max defines the "size of the engine," Lactate Threshold and Running Economy determine "how efficiently" that engine is used.</p>
                `
            }, 
            "references": [
                "Bassett, D. R., & Howley, E. T. (2000). Limiting factors for maximum oxygen uptake and determinants of endurance performance.",
                "Lundby, C., et al. (2017). Adaptation of cardiac output and its regulation to exercise training."
            ] 
        },
        { 
            "id": 102, 
            "date": "2024-11-10", 
            "readTime": { "tr": "8 dk", "en": "8 min" }, 
            "category": { "tr": "Beslenme", "en": "Nutrition" }, 
            "title": { "tr": "Kafein ve Dayanıklılık Performansı: Bilimsel Protokoller", "en": "Caffeine & Endurance Performance: Scientific Protocols" }, 
            "summary": { 
                "tr": "Optimal dozaj (3-6 mg/kg), zamanlama ve CYP1A2 genetiğinin performansa etkisi. Neden 'daha fazlası daha iyi' değil?", 
                "en": "Optimal dosage (3-6 mg/kg), timing, and the effect of CYP1A2 genetics on performance. Why 'more' is not always 'better'?" 
            }, 
            "content": { 
                "tr": `
                    <p>Kafein, dünyada en yaygın kullanılan ergojenik destektir. Temel mekanizması, beyindeki adenozin reseptörlerini bloke ederek yorgunluk algısını (RPE) düşürmesi ve nöromüsküler iletimi artırmasıdır.</p>
                    <h4>Dozaj ve Zamanlama</h4>
                    <p>Araştırmalar, performans artışı için <strong>3 ila 6 mg/kg</strong> dozajın optimal olduğunu göstermektedir. 9 mg/kg üzerindeki dozlar ek fayda sağlamadığı gibi anksiyete ve mide problemlerini artırabilir. Maksimum plazma konsantrasyonuna genellikle alımdan <strong>60 dakika sonra</strong> ulaşılır.</p>
                    <h4>Genetik Farklılıklar (CYP1A2)</h4>
                    <p>Kafeinin metabolize edilme hızı büyük ölçüde CYP1A2 genine bağlıdır:</p>
                    <ul>
                        <li><strong>AA Genotipi (Hızlı Metabolizörler):</strong> Kafeinden en yüksek performans artışını sağlarlar.</li>
                        <li><strong>AC/CC Genotipi (Yavaş Metabolizörler):</strong> Performans artışı göremeyebilir veya negatif etkilenebilirler.</li>
                    </ul>
                `,
                "en": `
                    <p>Caffeine is the most widely used ergogenic aid in the world. Its primary mechanism is blocking adenosine receptors in the brain, reducing the rate of perceived exertion (RPE) and enhancing neuromuscular transmission.</p>
                    <h4>Dosage and Timing</h4>
                    <p>Research indicates that a dosage of <strong>3 to 6 mg/kg</strong> is optimal for performance enhancement. Doses above 9 mg/kg do not provide additional benefits and may increase anxiety and gastrointestinal issues. Peak plasma concentration is typically reached <strong>60 minutes after</strong> ingestion.</p>
                    <h4>Genetic Differences (CYP1A2)</h4>
                    <p>The rate at which caffeine is metabolized depends largely on the CYP1A2 gene:</p>
                    <ul>
                        <li><strong>AA Genotype (Fast Metabolizers):</strong> See the greatest performance benefits.</li>
                        <li><strong>AC/CC Genotype (Slow Metabolizers):</strong> May see no benefit or even negative effects on performance.</li>
                    </ul>
                ` 
            }, 
            "references": [
                "Guest, N., et al. (2018). Caffeine, CYP1A2 Genotype, and Endurance Performance in Athletes.",
                "Grgic, J., et al. (2020). Wake up and smell the coffee: caffeine supplementation and exercise performance."
            ] 
        },
        { 
            "id": 103, 
            "date": "2024-11-05", 
            "readTime": { "tr": "12 dk", "en": "12 min" }, 
            "category": { "tr": "Antrenman Bilimi", "en": "Training Science" }, 
            "title": { "tr": "Laktat Eşiğini Geliştirmek: LT1 ve LT2", "en": "Improving Lactate Threshold: LT1 vs LT2" }, 
            "summary": { 
                "tr": "Aerobik (LT1) ve Anaerobik (LT2) eşikler arasındaki farklar nelerdir? Hangi antrenman tipi hangi eşiği yukarı taşır?", 
                "en": "What are the differences between Aerobic (LT1) and Anaerobic (LT2) thresholds? Which training type improves which threshold?" 
            }, 
            "content": { 
                "tr": `
                    <p>Laktat sadece bir yorgunluk ürünü değil, aynı zamanda önemli bir yakıttır. İki temel fizyolojik dönüm noktası vardır:</p>
                    <ul>
                        <li><strong>LT1 (Aerobik Eşik):</strong> Laktatın dinlenik seviyenin üzerine çıkmaya başladığı ilk nokta (genellikle ~2 mmol/L). Maraton temposu ve Zone 2 antrenmanlarının temelidir.</li>
                        <li><strong>LT2 (Anaerobik Eşik / MLSS):</strong> Laktat üretiminin temizlenme hızını aştığı nokta (genellikle ~4 mmol/L). Bu noktanın üzerinde asidoz hızla artar.</li>
                    </ul>
                    <h4>Nasıl Geliştirilir?</h4>
                    <p><strong>LT1'i Yükseltmek İçin:</strong> Yüksek hacimli düşük yoğunluklu antrenmanlar (Zone 2). Bu, yağ oksidasyonunu ve mitokondriyal yoğunluğu artırır.</p>
                    <p><strong>LT2'yi Yükseltmek İçin:</strong> "Threshold" (Eşik) koşuları ve Norveç metodu gibi kontrollü interval çalışmaları. Amaç, vücudun yüksek yoğunlukta laktatı temizleme (clearance) kapasitesini artırmaktır.</p>
                `,
                "en": `
                    <p>Lactate is not just a waste product but also a crucial fuel source. There are two main physiological turning points:</p>
                    <ul>
                        <li><strong>LT1 (Aerobic Threshold):</strong> The first point where lactate begins to rise above resting levels (usually ~2 mmol/L). This is the foundation of marathon pace and Zone 2 training.</li>
                        <li><strong>LT2 (Anaerobic Threshold / MLSS):</strong> The point where lactate production exceeds clearance rates (usually ~4 mmol/L). Above this point, acidosis increases rapidly.</li>
                    </ul>
                    <h4>How to Improve?</h4>
                    <p><strong>To Raise LT1:</strong> High-volume low-intensity training (Zone 2). This improves fat oxidation and mitochondrial density.</p>
                    <p><strong>To Raise LT2:</strong> Threshold runs and controlled interval sessions like the Norwegian method. The goal is to improve the body's lactate clearance capacity at high intensities.</p>
                ` 
            }, 
            "references": [
                "Seiler, S. (2010). What is best practice for training intensity and duration distribution in endurance athletes?",
                "San-Millán, I. (2020). Metabolomics of Endurance Capacity in World Tour Cyclists."
            ] 
        },
        { 
            "id": 104, 
            "date": "2024-10-30", 
            "readTime": { "tr": "9 dk", "en": "9 min" }, 
            "category": { "tr": "Koşu Mekaniği", "en": "Running Mechanics" }, 
            "title": { "tr": "Koşu Ekonomisi: Gizli Hız Değişkeni", "en": "Running Economy: The Hidden Variable" }, 
            "summary": { 
                "tr": "Aynı VO2max değerine sahip iki koşucu neden farklı hızlarda koşar? Koşu ekonomisini (RE) etkileyen biyomekanik ve fizyolojik faktörler.", 
                "en": "Why do two runners with the same VO2max run at different speeds? Biomechanical and physiological factors affecting Running Economy (RE)." 
            }, 
            "content": { 
                "tr": `
                    <p>Koşu Ekonomisi (RE), belirli bir hızda koşmak için gereken oksijen maliyetidir (enerji harcaması). Tıpkı bir arabanın yakıt tasarrufu gibidir; daha ekonomik bir koşucu, aynı hızda daha az enerji harcar.</p>
                    <div class="math-box">RE = VO2 (ml/kg/dk) / Hız (km/s)</div>
                    <h4>RE'yi Etkileyen Faktörler</h4>
                    <ul>
                        <li><strong>Biyomekanik:</strong> Dikey salınım (zıplama) ve yerle temas süresi.</li>
                        <li><strong>Kas-Tendon Sertliği (Stiffness):</strong> Bacakların bir yay gibi davranarak elastik enerjiyi geri döndürme yeteneği.</li>
                        <li><strong>Antropometri:</strong> Bacak kütlesinin dağılımı (ince baldırlar daha ekonomiktir).</li>
                    </ul>
                    <h4>Geliştirme Stratejileri</h4>
                    <p>Ağır kuvvet antrenmanları (maksimum kuvvet) ve plyometrik egzersizler, tendon sertliğini artırarak koşu ekonomisini %3-8 oranında iyileştirebilir. Sadece koşarak ekonomi gelişimi yıllar alırken, kuvvet antrenmanı bu süreci hızlandırır.</p>
                `,
                "en": `
                    <p>Running Economy (RE) is the oxygen cost (energy expenditure) required to run at a given speed. It is like a car's fuel economy; a more economical runner uses less energy at the same speed.</p>
                    <div class="math-box">RE = VO2 (ml/kg/min) / Speed (km/h)</div>
                    <h4>Factors Affecting RE</h4>
                    <ul>
                        <li><strong>Biomechanics:</strong> Vertical oscillation (bouncing) and ground contact time.</li>
                        <li><strong>Muscle-Tendon Stiffness:</strong> The ability of the legs to act like springs and return elastic energy.</li>
                        <li><strong>Anthropometry:</strong> Distribution of leg mass (slimmer calves are more economical).</li>
                    </ul>
                    <h4>Improvement Strategies</h4>
                    <p>Heavy strength training (max strength) and plyometric exercises can improve running economy by 3-8% by increasing tendon stiffness. While running alone improves economy over years, strength training accelerates this process.</p>
                ` 
            }, 
            "references": [
                "Barnes, K. R., & Kilding, A. E. (2015). Strategies to improve running economy.",
                "Paavolainen, L., et al. (1999). Explosive-strength training improves 5-km running time by improving running economy and muscle power."
            ] 
        }
    ],
    facts: [
        { 
            "tag": "#Fizyoloji", 
            "text": { 
                "tr": "Laktat bir düşman değil, kalbin ve beynin kullandığı verimli bir yakıttır. Asıl yorgunluk sebebi asidozdur (H+ iyonları).", 
                "en": "Lactate is not an enemy, but an efficient fuel used by the heart and brain. The real cause of fatigue is acidosis (H+ ions)." 
            } 
        },
        { 
            "tag": "#Beslenme", 
            "text": { 
                "tr": "Kafeinin yarılanma ömrü ortalama 5 saattir, ancak bazı bireylerde bu süre 1.5 saate inebilir veya 10 saate çıkabilir.", 
                "en": "The average half-life of caffeine is 5 hours, but in some individuals, it can drop to 1.5 hours or extend to 10 hours." 
            } 
        },
        { 
            "tag": "#Mekanik", 
            "text": { 
                "tr": "Ayakkabı ağırlığındaki her 100 gramlık artış, koşu ekonomisini yaklaşık %1 oranında kötüleştirir.", 
                "en": "Every 100-gram increase in shoe weight worsens running economy by approximately 1%." 
            } 
        },
        { 
            "tag": "#Antrenman", 
            "text": { 
                "tr": "Elit maratoncular antrenmanlarının %80'ini düşük yoğunlukta (Zone 1-2) yaparlar.", 
                "en": "Elite marathoners perform 80% of their training at low intensity (Zone 1-2)." 
            } 
        }
    ]
};
