const RunningPerformancePage = ({ lang }) => {
    const { useEffect } = React;

    const tr = {
        title: "Koşu Performansını Etkileyen Faktörler",
        subtitle: "Klasik fizyolojik model (3 faktör) ve modern 4. boyut (durability).",
        validity: "Geçerlilik: 3000m - Maraton (Aerobik Baskın)",
        
        // 4 Sütun
        vo2_title: "VO₂max",
        vo2_sub: "OKSİJEN KULLANMA TAVANI",
        vo2_desc: "Aerobik kapasitenin üst limiti. Potansiyeli belirler ancak tek başına kazananı belirlemez.",
        
        threshold_title: "Fractional Utilization",
        threshold_sub: "%VO₂max @ EŞİK",
        threshold_desc: "Mevcut kapasitenin yüzde kaçını 'patlamadan' (metabolik kararlılıkla) sürdürebiliyorsun?",
        
        economy_title: "Ekonomi (Cr)",
        economy_sub: "VERİMLİLİK",
        economy_desc: "Belirli bir hızda koşarken ne kadar oksijen/enerji harcıyorsun?",
        
        resilience_title: "Durability",
        resilience_sub: "ZAMANA BAĞLI DİRENÇ",
        resilience_desc: "Yarış uzadıkça fizyolojik parametrelerin bozulmaya (drift) karşı direnci.",

        // Formül Alanı
        eq_title: "PERFORMANS DENKLEMİ (ZAMANA BAĞLI)",
        eq_desc: "Hız (v), o anki sürdürülebilir aerobik gücün, koşu maliyetine (Cr) bölümüdür.",
        eq_note: "Not: Birim uyumu için VO₂max (ml/kg/dk) ve Cr (ml/kg/km) kullanıldığında hız m/dk cinsinden çıkar.",

        resilience_factor_title: "Resilience (Dayanıklılık) Faktörü:",
        resilience_factor_text_1: "Bu formüle",
        resilience_factor_highlight_time: "(t) zaman değişkeni",
        resilience_factor_text_2: "eklendiğinde gerçek hayat senaryosu ortaya çıkar. Maratonun sonlarına doğru yorgunlukla birlikte",
        resilience_factor_highlight_1: "Cr (Maliyet) artar",
        resilience_factor_text_3: "ve",
        resilience_factor_highlight_2: "Fractional Utilization düşer",
        resilience_factor_text_4: ". Resilience, bu düşüşü minimize etme yeteneğidir.",

        // Referanslar
        ref_title: "REFERANSLAR (LİTERATÜR)",
        ref_1: "Joyner & Coyle (2008): Endurance performance determinants.",
        ref_2: "Bassett & Howley (2000): Limiting factors for VO2max.",
        ref_3: "Saunders et al. (2004): Running economy optimization.",
        ref_4: "Jones (2006): The physiology of the world record holder (Women's Marathon).",
        ref_5: "Jones (2024): The 4th Dimension: Resilience & Durability.",
        ref_6: "Barnes & Kilding (2015): Strategies to improve economy."
    };

    const en = {
        title: "Factors Affecting Running Performance",
        subtitle: "The classic physiological model (3 factors) plus the modern 4th dimension (durability).",
        validity: "Validity: 3000m - Marathon (Aerobic Dominant)",
        
        // 4 Pillars
        vo2_title: "VO₂max",
        vo2_sub: "OXYGEN UPTAKE CEILING",
        vo2_desc: "The upper limit of aerobic capacity. Determines potential but not the winner alone.",
        
        threshold_title: "Fractional Utilization",
        threshold_sub: "%VO₂max @ THRESHOLD",
        threshold_desc: "What percentage of your capacity can you sustain with metabolic stability?",
        
        economy_title: "Economy (Cr)",
        economy_sub: "EFFICIENCY",
        economy_desc: "How much oxygen/energy do you consume at a given speed?",
        
        resilience_title: "Durability",
        resilience_sub: "RESISTANCE TO FATIGUE",
        resilience_desc: "The ability to resist deterioration (drift) in physiological parameters as the race progresses.",

        // Formula Area
        eq_title: "PERFORMANCE EQUATION (TIME DEPENDENT)",
        eq_desc: "Velocity (v) is your current sustainable aerobic power divided by the cost of running (Cr).",
        eq_note: "Note: Using VO₂max (ml/kg/min) and Cr (ml/kg/km) results in speed in m/min.",

        resilience_factor_title: "Resilience Factor:",
        resilience_factor_text_1: "Adding the",
        resilience_factor_highlight_time: "time variable (t)",
        resilience_factor_text_2: "reveals the real-world scenario. Late in a marathon, due to fatigue,",
        resilience_factor_highlight_1: "Cr (Cost) increases",
        resilience_factor_text_3: "and",
        resilience_factor_highlight_2: "Fractional Utilization drops",
        resilience_factor_text_4: ". Resilience is the ability to minimize this drift.",

        // References
        ref_title: "REFERENCES (LITERATURE)",
        ref_1: "Joyner & Coyle (2008): Endurance performance determinants.",
        ref_2: "Bassett & Howley (2000): Limiting factors for VO2max.",
        ref_3: "Saunders et al. (2004): Running economy optimization.",
        ref_4: "Jones (2006): The physiology of the world record holder (Women's Marathon).",
        ref_5: "Jones (2024): The 4th Dimension: Resilience & Durability.",
        ref_6: "Barnes & Kilding (2015): Strategies to improve economy."
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
                        <p className="text-slate-600 text-[10px] italic">
                            {t.eq_note}
                        </p>
                    </div>

                    {/* LaTeX Formülü (Zamana Bağlı) */}
                    <div className="bg-black/30 px-6 py-4 rounded-xl border border-white/5 text-lg md:text-xl text-emerald-300 overflow-x-auto min-w-[200px] text-center shadow-lg">
                        {`$$ v(t) = \\frac{VO_{2max} \\times f_{util}(t)}{Cr(t)} $$`}
                    </div>
                </div>

                {/* Resilience Açıklaması (Safe JSX) */}
                <div className="mt-6 pt-6 border-t border-slate-800 flex items-start gap-3">
                    <div className="mt-1 text-amber-400 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        <strong className="text-amber-400 block mb-1">{t.resilience_factor_title}</strong>
                        {t.resilience_factor_text_1} <span className="text-emerald-300 font-mono">{t.resilience_factor_highlight_time}</span> {t.resilience_factor_text_2}{" "}
                        <span className="text-rose-400 font-bold">{t.resilience_factor_highlight_1}</span> {t.resilience_factor_text_3}{" "}
                        <span className="text-rose-400 font-bold">{t.resilience_factor_highlight_2}</span>
                        {t.resilience_factor_text_4}
                    </p>
                </div>
            </div>

            {/* Referanslar */}
            <div className="w-full border-t border-slate-700/50 pt-8">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">{t.ref_title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {[t.ref_1, t.ref_2, t.ref_3, t.ref_4, t.ref_5, t.ref_6].map((ref, idx) => {
                        const colors = ["bg-cyan-500", "bg-rose-500", "bg-emerald-500", "bg-amber-500", "bg-purple-500", "bg-blue-500"];
                        return (
                            <div key={idx} className="text-[11px] text-slate-500 flex items-center">
                                <span className={`w-1.5 h-1.5 ${colors[idx % colors.length]} rounded-full mr-2 opacity-70`}></span>
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
