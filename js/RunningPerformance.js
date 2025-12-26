const RunningPerformancePage = ({ lang }) => {
    const { useEffect } = React;

    const tr = {
        title: "Koşu Performansını Etkileyen Temel Faktörler",
        subtitle: "Literatür koşu performansını etkileyen temelde 4 faktöre yer veriyor.",
        validity: "Geçerlilik: 1500m - Ultra Maraton (Aerobik Baskın Koşular)",
        
        // 4 Sütun
        vo2_title: "VO₂max",
        vo2_sub: "OKSİJEN KULLANMA TAVANI",
        vo2_desc: "Aerobik kapasitenin üst limiti. Bir arabanın motor hacmi gibidir; ne kadar yüksekse potansiyel o kadar fazladır.",
        
        threshold_title: "% Eşik",
        threshold_sub: "SÜRDÜRÜLEBİLİRLİK",
        threshold_desc: "Mevcut kapasitenin yüzde kaçını 'patlamadan' (yorulmadan) uzun süre kullanabiliyorsun?",
        
        economy_title: "Ekonomi",
        economy_sub: "VERİMLİLİK",
        economy_desc: "Belirli bir hızda koşarken ne kadar enerji (yakıt) harcıyorsun?",
        
        resilience_title: "Resilience",
        resilience_sub: "DAYANIKLILIK",
        resilience_desc: "Yarışın sonlarına doğru yorgunluğa rağmen performansı koruyabilme yeteneği.",

        // Formül Alanı
        eq_title: "PERFORMANS DENKLEMİ",
        eq_desc: "Hız (v), üretebildiğin aerobik gücün, harcama maliyetine (Cr) bölümüdür. Resilience ise bu denklemi zaman boyutunda korur.",
        resilience_factor_title: "Resilience (Dayanıklılık) Faktörü:",
        resilience_factor_desc: "Bu formül 'taze' bir koşucu için geçerlidir. Maraton veya Ultra maratonda, saatler geçtikçe <strong>Cr (Maliyet)</strong> artar ve <strong>%LT</strong> düşer. Resilience, bu düşüşü minimize ederek formülün sonucunu (Hızı) yarış sonuna kadar korumanızı sağlar.",

        // Referanslar
        ref_title: "REFERANSLAR (LİTERATÜR)",
        ref_1: "Joyner & Coyle (2008): Dayanıklılık performansı belirleyicileri.",
        ref_2: "Bassett & Howley (2000): VO2max sınırlayıcı faktörleri.",
        ref_3: "Saunders et al. (2004): Koşu ekonomisi optimizasyonu.",
        ref_4: "Jones (2024): 4. Boyut: Resilience & Durability.",
        ref_5: "Barnes & Kilding (2015): Ekonomiyi geliştirme stratejileri."
    };

    const en = {
        title: "Key Factors Affecting Running Performance",
        subtitle: "Literature highlights 4 fundamental factors affecting running performance.",
        validity: "Validity: 1500m - Ultra Marathon (Aerobic Dominant Runs)",
        
        // 4 Pillars
        vo2_title: "VO₂max",
        vo2_sub: "OXYGEN UPTAKE CEILING",
        vo2_desc: "The upper limit of aerobic capacity. Like a car's engine size, it determines potential.",
        
        threshold_title: "% Threshold",
        threshold_sub: "SUSTAINABILITY",
        threshold_desc: "What percentage of your capacity can you use without 'blowing up'?",
        
        economy_title: "Economy",
        economy_sub: "EFFICIENCY",
        economy_desc: "How much energy (fuel) do you consume at a given speed?",
        
        resilience_title: "Resilience",
        resilience_sub: "DURABILITY",
        resilience_desc: "The ability to maintain performance despite fatigue late in the race.",

        // Formula Area
        eq_title: "THE PERFORMANCE EQUATION",
        eq_desc: "Velocity (v) is your sustainable aerobic power divided by the cost of running (Cr). Resilience protects this equation over time.",
        resilience_factor_title: "Resilience Factor:",
        resilience_factor_desc: "This formula applies to a 'fresh' runner. In Marathons or Ultras, as hours pass, <strong>Cr (Cost)</strong> increases and <strong>%LT</strong> decreases. Resilience minimizes this decay, preserving your speed until the finish line.",

        // References
        ref_title: "REFERENCES (LITERATURE)",
        ref_1: "Joyner & Coyle (2008): Endurance performance determinants.",
        ref_2: "Bassett & Howley (2000): Limiting factors for VO2max.",
        ref_3: "Saunders et al. (2004): Running economy optimization.",
        ref_4: "Jones (2024): The 4th Dimension: Resilience & Durability.",
        ref_5: "Barnes & Kilding (2015): Strategies to improve economy."
    };

    const t = lang === 'tr' ? tr : en;

    // Özel İkonlar
    const IconLungs = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-cyan-400"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 19.2c-1 .9-1.2 2.5-.5 3.5.7.9 2.1 1.2 3.5.5Z"/><path d="m8 13 4 2"/></svg>;
    const IconFire = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-rose-400"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.5-3.27.57 1.75 2.01 2.32 3 2.77Z"/></svg>;
    const IconGear = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-emerald-400"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
    const IconShield = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-amber-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    const IconValid = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

    // MathJax Tetikleyici
    useEffect(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }
    }, [lang]);

    return (
        <div className="bg-slate-800 text-slate-200 rounded-3xl p-6 md:p-10 max-w-[1200px] mx-auto border border-slate-700 shadow-2xl animate-fade-in font-sans">
            
            {/* Header */}
            <div className="text-center mb-10 w-full">
                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
                    {t.title}
                </h1>
                <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mb-4">
                    {t.subtitle}
                </p>
                <div className="flex justify-center">
                    <div className="bg-primary/10 border border-primary/20 text-primary text-xs px-3 py-1.5 rounded-lg flex items-center">
                        <IconValid />
                        <span><strong>{t.validity}</strong></span>
                    </div>
                </div>
            </div>

            {/* 4 Temel Sütun */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-10">
                
                {/* 1. VO2max */}
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 flex flex-row md:flex-col items-center md:items-start gap-4 hover:bg-slate-800 transition-colors">
                    <div className="p-2 bg-slate-800 rounded-lg shrink-0 border border-slate-700">
                        <IconLungs />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">{t.vo2_title}</h3>
                        <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-1">{t.vo2_sub}</div>
                        <p className="text-slate-400 text-xs leading-relaxed">{t.vo2_desc}</p>
                    </div>
                </div>

                {/* 2. Threshold */}
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 flex flex-row md:flex-col items-center md:items-start gap-4 hover:bg-slate-800 transition-colors">
                    <div className="p-2 bg-slate-800 rounded-lg shrink-0 border border-slate-700">
                        <IconFire />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">{t.threshold_title}</h3>
                        <div className="text-rose-400 text-[10px] font-bold uppercase tracking-widest mb-1">{t.threshold_sub}</div>
                        <p className="text-slate-400 text-xs leading-relaxed">{t.threshold_desc}</p>
                    </div>
                </div>

                {/* 3. Economy */}
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 flex flex-row md:flex-col items-center md:items-start gap-4 hover:bg-slate-800 transition-colors">
                    <div className="p-2 bg-slate-800 rounded-lg shrink-0 border border-slate-700">
                        <IconGear />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">{t.economy_title}</h3>
                        <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-1">{t.economy_sub}</div>
                        <p className="text-slate-400 text-xs leading-relaxed">{t.economy_desc}</p>
                    </div>
                </div>

                {/* 4. Resilience */}
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 flex flex-row md:flex-col items-center md:items-start gap-4 hover:bg-slate-800 transition-colors">
                    <div className="p-2 bg-slate-800 rounded-lg shrink-0 border border-slate-700">
                        <IconShield />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">{t.resilience_title}</h3>
                        <div className="text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-1">{t.resilience_sub}</div>
                        <p className="text-slate-400 text-xs leading-relaxed">{t.resilience_desc}</p>
                    </div>
                </div>

            </div>

            {/* Denklem Bölümü */}
            <div className="w-full bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 mb-10 relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{t.eq_title}</h3>
                        <p className="text-slate-500 text-xs mb-4 max-w-prose">
                            {t.eq_desc}
                        </p>
                    </div>

                    {/* LaTeX Formülü */}
                    <div className="bg-black/30 px-6 py-4 rounded-xl border border-white/5 text-lg md:text-xl text-emerald-300 overflow-x-auto min-w-[200px] text-center shadow-lg">
                        {`$$ v = \\frac{VO_{2max} \\times \\%LT}{Cr} $$`}
                    </div>
                </div>

                {/* Resilience Açıklaması */}
                <div className="mt-6 pt-6 border-t border-slate-800 flex items-start gap-3">
                    <div className="mt-1 text-amber-400 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{__html: `<strong class="text-amber-400">${t.resilience_factor_title}</strong> ${t.resilience_factor_desc}`}}></p>
                </div>
            </div>

            {/* Referanslar */}
            <div className="w-full border-t border-slate-700/50 pt-8">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">{t.ref_title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {[t.ref_1, t.ref_2, t.ref_3, t.ref_4, t.ref_5].map((ref, idx) => {
                        const colors = ["bg-cyan-500", "bg-rose-500", "bg-emerald-500", "bg-amber-500", "bg-purple-500"];
                        return (
                            <div key={idx} className="text-[11px] text-slate-500 flex items-center">
                                <span className={`w-1.5 h-1.5 ${colors[idx]} rounded-full mr-2 opacity-70`}></span>
                                <span>{ref}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

// Global'e aktar
window.RunningPerformancePage = RunningPerformancePage;
