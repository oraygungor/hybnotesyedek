const RunningPerformancePage = ({ lang }) => {
    const { useEffect, useState } = React;

    const tr = {
        title: "Koşu Performansını Etkileyen Faktörler",
        subtitle: "Klasik fizyolojik model (3 faktör) ve modern 4. boyut (durability).",
        validity: "Geçerlilik: 3000m - Maraton (Aerobik Baskın)",
        
        // 4 Sütun
        vo2_title: "VO₂max",
        vo2_sub: "OKSİJEN KULLANMA TAVANI",
        vo2_desc: "Aerobik kapasitenin üst limiti. Potansiyeli belirler ancak tek başına kazananı belirlemez.",
        vo2_tooltip: "BENZETME: Bir arabanın motor hacmi (cc) gibidir. 5000cc motoru olan bir araba, 1600cc olandan daha hızlı gitme *potansiyeline* sahiptir. Ancak lastikleri kötüyse (ekonomi) veya motor hararet yapıyorsa (eşik) o gücü kullanamaz.",
        
        threshold_title: "Sürdürülebilirlik",
        threshold_sub: "%VO₂max KULLANIMI",
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
        eq_fractional_note: "*Fractional Utilization: VO₂max'ın ne kadarının eşik seviyesinde kullanılabildiğini gösteren oran.",

        resilience_factor_title: "Resilience (Dayanıklılık) Faktörü:",
        resilience_factor_text_1: "Bu formüle",
        resilience_factor_highlight_time: "(t) zaman değişkeni",
        resilience_factor_text_2: "eklendiğinde gerçek hayat senaryosu ortaya çıkar. Maratonun sonlarına doğru yorgunlukla birlikte",
        resilience_factor_highlight_1: "Cr (Maliyet) artar",
        resilience_factor_text_3: "ve",
        resilience_factor_highlight_2: "Sürdürülebilirlik düşer",
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
        vo2_tooltip: "ANALOGY: It's like the engine displacement (cc) of a car. A 5000cc engine has the *potential* to go faster than a 1600cc one. But if the tires are bad (economy) or the engine overheats (threshold), it cannot use that power.",
        
        threshold_title: "Sustainability",
        threshold_sub: "%VO₂max UTILIZATION",
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
        eq_fractional_note: "*Fractional Utilization: The fraction of VO₂max that can be sustained at threshold.",

        resilience_factor_title: "Resilience Factor:",
        resilience_factor_text_1: "Adding the",
        resilience_factor_highlight_time: "time variable (t)",
        resilience_factor_text_2: "reveals the real-world scenario. Late in a marathon, due to fatigue,",
        resilience_factor_highlight_1: "Cr (Cost) increases",
        resilience_factor_text_3: "and",
        resilience_factor_highlight_2: "Sustainability drops",
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
    const IconInfo = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;

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
                
                {/* 1. VO2max - Tooltip ile */}
                <div className="group relative bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 flex flex-row md:flex-col items-center md:items-start gap-4 hover:bg-slate-800 transition-colors cursor-help">
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-slate-900 border border-slate-600 rounded-lg shadow-xl text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {t.vo2_tooltip}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-600"></div>
                    </div>

                    <div className="p-2 bg-slate-800 rounded-lg shrink-0 border border-slate-700 relative">
                        <IconLungs />
                        <div className="absolute -top-1 -right-1 bg-slate-700 rounded-full p-0.5"><IconInfo /></div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{t.vo2_title}</h3>
                        <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-1">{t.vo2_sub}</div>
                        <p className="text-slate-400 text-xs leading-relaxed">{t.vo2_desc}</p>
                    </div>
                </div>

                {/* 2. Threshold - Sürdürülebilirlik */}
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
                        <p className="text-slate-600 text-[10px] italic mb-1">
                            {t.eq_note}
                        </p>
                        <p className="text-slate-500 text-[10px] italic">
                            {t.eq_fractional_note}
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
