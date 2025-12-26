// js/RunningPerformance.js

const RunningPerformancePage = ({ lang }) => {
    const { useState, useEffect, useMemo } = React;

    // --- State ve Hesaplama Mantığı ---
    const [calculator, setCalculator] = useState({
        vo2max: 60,       // ml/kg/min
        threshold: 80,    // % of VO2max
        economy: 200,     // ml/kg/km (Düşük olması iyidir)
        durability: 100   // % (Yorgunluk direnci - Jones 2023)
    });

    // Joyner & Coyle (2008) Formülüne Dayalı Hız Hesabı
    // Hız (km/h) = (VO2max * Threshold%) / Ekonomi Maliyeti
    const stats = useMemo(() => {
        const effectiveVO2 = calculator.vo2max * (calculator.threshold / 100);
        // Durability: Yarış sonuna doğru performansın ne kadar düştüğünü simüle eder
        const fatigueFactor = calculator.durability / 100; 
        
        // Hız Hesabı (km/min -> km/h)
        // Ekonomi birimi ml/kg/km olduğu için: (ml/kg/min) / (ml/kg/km) = km/min
        const speedKmh = (effectiveVO2 / calculator.economy) * 60;
        
        // Pace Hesabı (min/km)
        const paceDec = 60 / speedKmh;
        const paceMin = Math.floor(paceDec);
        const paceSec = Math.round((paceDec - paceMin) * 60);

        // Durability Etkisi (Yarış Sonu Tahmini Hız)
        const lateRaceSpeed = speedKmh * fatigueFactor;
        
        return { speedKmh, paceMin, paceSec, lateRaceSpeed };
    }, [calculator]);

    const handleSliderChange = (key, value) => {
        setCalculator(prev => ({ ...prev, [key]: parseFloat(value) }));
    };

    // --- İçerik Metinleri (TR/EN) ---
    const t = {
        title: lang === 'tr' ? 'Performansın Deterministik Modeli' : 'Deterministic Model of Performance',
        subtitle: lang === 'tr' ? 'Bilimsel formüllerle koşu hızını belirleyen faktörleri keşfedin.' : 'Discover the factors determining running speed using scientific formulas.',
        
        // Faktörler
        f_vo2: { 
            title: 'VO2max', 
            analogy: lang === 'tr' ? 'Motor Hacmi' : 'Engine Size',
            desc: lang === 'tr' ? 'Oksijen kullanım kapasiteniz (Aerobik Tavan).' : 'Your capacity to use oxygen (Aerobic Ceiling).',
            ref: 'Bassett & Howley (2000)'
        },
        f_lt: { 
            title: lang === 'tr' ? 'Laktat Eşiği' : 'Lactate Threshold', 
            analogy: lang === 'tr' ? 'Motor Devri (Redline)' : 'Redline RPM',
            desc: lang === 'tr' ? 'Motoru patlatmadan sürdürebildiğin maksimum güç yüzdesi.' : 'The max power % you can sustain without blowing the engine.',
            ref: 'Joyner & Coyle (2008)'
        },
        f_re: { 
            title: lang === 'tr' ? 'Koşu Ekonomisi' : 'Running Economy', 
            analogy: lang === 'tr' ? 'Yakıt Verimliliği' : 'Fuel Efficiency',
            desc: lang === 'tr' ? 'Belirli bir hızda ne kadar az oksijen (enerji) harcadığın.' : 'How little oxygen (energy) you use at a given speed.',
            note: lang === 'tr' ? '(Düşük olması iyidir)' : '(Lower is better)',
            ref: 'Saunders et al. (2004)'
        },
        f_dur: { 
            title: lang === 'tr' ? 'Dayanıklılık (4. Boyut)' : 'Durability (4th Dimension)', 
            analogy: lang === 'tr' ? 'Sağlamlık' : 'Resilience',
            desc: lang === 'tr' ? 'Yorgunluğa rağmen teknik ve fizyolojik verimini koruma yeteneği.' : 'Ability to maintain technical/physiological efficiency despite fatigue.',
            ref: 'Jones (2023)'
        },

        // Arayüz
        calc_title: lang === 'tr' ? 'Performans Simülatörü' : 'Performance Simulator',
        result_speed: lang === 'tr' ? 'Tahmini Hız' : 'Estimated Speed',
        result_pace: lang === 'tr' ? 'Pace (Tempo)' : 'Pace',
        result_late: lang === 'tr' ? 'Yarış Sonu Hızı' : 'Late Race Speed',
        details: lang === 'tr' ? 'Bilimsel Detaylar' : 'Scientific Details',
        
        // Detay Kartları
        cards: [
            {
                id: 'vo2',
                title: 'VO2max',
                icon: Icons.Activity,
                text: lang === 'tr' 
                    ? "Bassett & Howley (2000) makalesine göre VO2max, kalp-dolaşım sisteminin kaslara oksijen taşıma kapasitesiyle sınırlıdır. Bir arabanın motor hacmi gibidir; 1.6 motor ile 5.0 motorun potansiyeli farklıdır. Ancak yarışı sadece büyük motor kazanmaz." 
                    : "According to Bassett & Howley (2000), VO2max is limited by the cardiorespiratory system's ability to deliver oxygen. It's like car engine size; a 1.6L vs 5.0L engine have different potentials, but the biggest engine doesn't always win."
            },
            {
                id: 'threshold',
                title: lang === 'tr' ? 'Laktat Eşiği' : 'Lactate Threshold',
                icon: Icons.Gauge, // Gauge yoksa Activity kullan
                text: lang === 'tr' 
                    ? "Joyner & Coyle (2008) 'Performance VO2' kavramını kullanır. VO2max'ın ne kadarını uzun süre kullanabiliyorsun? Elit atletler %85-90 oranında koşabilirken, amatörler %65-70'te takılır. Antrenmanla en çok gelişen parametrelerden biridir." 
                    : "Joyner & Coyle (2008) refer to 'Performance VO2'. How much of your VO2max can you sustain? Elite athletes can run at 85-90%, while amateurs might stick to 65-70%. It's one of the most trainable parameters."
            },
            {
                id: 'economy',
                title: lang === 'tr' ? 'Koşu Ekonomisi' : 'Running Economy',
                icon: Icons.Zap,
                text: lang === 'tr' 
                    ? "Saunders (2004) ve Barnes (2015), ekonomiyi biyomekanik ve fizyolojinin toplamı olarak tanımlar. Paula Radcliffe örneği (Jones, 2006) efsanedir: VO2max'ı değişmemesine rağmen, ekonomisini yıllar içinde geliştirerek Dünya Rekoru kırmıştır. Yani motoru büyütmedi, yakıtı verimli kullandı." 
                    : "Saunders (2004) & Barnes (2015) define economy as the sum of biomechanics and physiology. The Paula Radcliffe case (Jones, 2006) is legendary: She broke the WR not by increasing VO2max, but by improving her economy over years."
            },
            {
                id: 'durability',
                title: lang === 'tr' ? 'Dayanıklılık (Durability)' : 'Durability',
                icon: Icons.BatteryCharging,
                text: lang === 'tr' 
                    ? "Prof. Andrew Jones (2023), bunu '4. Boyut' olarak tanımlar. Laboratuvarda taze kaslarla ölçülen değerler, 30. kilometrede geçerli olmayabilir. Gerçek şampiyonlar, yorulduklarında fizyolojik değerleri (ekonomi/eşik) bozulmayanlardır." 
                    : "Prof. Andrew Jones (2023) calls this the '4th Dimension'. Lab values measured with fresh muscles may not apply at km 30. True champions are those whose physiological values (economy/threshold) do not deteriorate when fatigued."
            }
        ]
    };

    return (
        <div className="space-y-8 animate-fade-in pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3 flex items-center gap-3">
                    <Icons.TrendingUp className="text-primary" /> {t.title}
                </h2>
                <p className="text-slate-400 max-w-2xl text-lg">{t.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* SOL KOLON: Kontrol Paneli (Simülatör) */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="bg-slate-800 p-6 md:p-8 rounded-3xl border border-slate-700 shadow-xl">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Icons.Sliders size={20} className="text-primary"/> {t.calc_title}
                            </h3>
                            <div className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">
                                Joyner & Coyle Model
                            </div>
                        </div>

                        {/* Slider: VO2max */}
                        <div className="mb-8 group">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                                    <Icons.Activity size={16} className="text-blue-400"/> {t.f_vo2.title}
                                    <span className="text-[10px] text-slate-500 font-normal ml-2 hidden md:inline">({t.f_vo2.analogy})</span>
                                </label>
                                <span className="text-blue-400 font-mono font-bold">{calculator.vo2max} <span className="text-xs text-slate-500">ml/kg/min</span></span>
                            </div>
                            <input 
                                type="range" min="30" max="90" step="1" 
                                value={calculator.vo2max}
                                onChange={(e) => handleSliderChange('vo2max', e.target.value)}
                                className="w-full accent-blue-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <p className="text-xs text-slate-500 mt-2">{t.f_vo2.desc}</p>
                        </div>

                        {/* Slider: Threshold */}
                        <div className="mb-8 group">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                                    <Icons.Gauge size={16} className="text-red-400"/> {t.f_lt.title}
                                    <span className="text-[10px] text-slate-500 font-normal ml-2 hidden md:inline">({t.f_lt.analogy})</span>
                                </label>
                                <span className="text-red-400 font-mono font-bold">%{calculator.threshold} <span className="text-xs text-slate-500">of VO2max</span></span>
                            </div>
                            <input 
                                type="range" min="50" max="95" step="1" 
                                value={calculator.threshold}
                                onChange={(e) => handleSliderChange('threshold', e.target.value)}
                                className="w-full accent-red-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <p className="text-xs text-slate-500 mt-2">{t.f_lt.desc}</p>
                        </div>

                        {/* Slider: Economy */}
                        <div className="mb-8 group">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                                    <Icons.Zap size={16} className="text-green-400"/> {t.f_re.title}
                                    <span className="text-[10px] text-slate-500 font-normal ml-2 hidden md:inline">({t.f_re.analogy})</span>
                                </label>
                                <span className="text-green-400 font-mono font-bold">{calculator.economy} <span className="text-xs text-slate-500">ml/kg/km</span></span>
                            </div>
                            <input 
                                type="range" min="160" max="300" step="5" 
                                value={calculator.economy}
                                onChange={(e) => handleSliderChange('economy', e.target.value)}
                                className="w-full accent-green-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                                style={{direction: 'rtl'}} // Terse çalışır, düşük iyidir görseli için
                            />
                            <p className="text-xs text-slate-500 mt-2">{t.f_re.desc} <span className="text-green-400 font-bold">{t.f_re.note}</span></p>
                        </div>

                         {/* Slider: Durability */}
                         <div className="mb-2 group">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                                    <Icons.BatteryCharging size={16} className="text-purple-400"/> {t.f_dur.title}
                                </label>
                                <span className="text-purple-400 font-mono font-bold">%{calculator.durability} <span className="text-xs text-slate-500">Resilience</span></span>
                            </div>
                            <input 
                                type="range" min="80" max="100" step="1" 
                                value={calculator.durability}
                                onChange={(e) => handleSliderChange('durability', e.target.value)}
                                className="w-full accent-purple-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <p className="text-xs text-slate-500 mt-2">{t.f_dur.desc}</p>
                        </div>
                    </div>
                </div>

                {/* SAĞ KOLON: Sonuç Ekranı (Dashboard) */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl flex flex-col justify-center h-full relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-red-500 to-green-500"></div>
                        
                        <div className="text-center mb-8">
                            <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">{t.result_speed}</h4>
                            <div className="text-6xl md:text-7xl font-black text-white font-mono tracking-tighter">
                                {stats.speedKmh.toFixed(1)} <span className="text-xl md:text-2xl text-slate-500">km/h</span>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 mb-6">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-slate-400 text-sm font-bold">{t.result_pace}</span>
                                <span className="text-3xl font-mono font-bold text-primary">
                                    {stats.paceMin}:{stats.paceSec < 10 ? '0'+stats.paceSec : stats.paceSec} <span className="text-xs text-slate-500">/km</span>
                                </span>
                            </div>
                            <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-full animate-pulse" style={{width: '100%'}}></div>
                            </div>
                        </div>

                        {/* Durability Uyarısı */}
                        {calculator.durability < 100 && (
                            <div className="bg-purple-900/20 rounded-2xl p-4 border border-purple-500/30 flex items-center gap-4 animate-fade-in">
                                <div className="bg-purple-500/20 p-3 rounded-full text-purple-400">
                                    <Icons.AlertTriangle size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-purple-300 font-bold uppercase">{t.result_late}</div>
                                    <div className="text-white font-mono font-bold text-lg">
                                        ~{stats.lateRaceSpeed.toFixed(1)} km/h
                                    </div>
                                    <div className="text-[10px] text-purple-400/70 leading-tight mt-1">
                                        Jones (2023): Düşük dayanıklılık (durability) yarış sonunda performans kaybına neden olur.
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="mt-auto pt-6 text-center">
                            <div className="latex-formula text-sm opacity-50 overflow-x-auto">
                     {`$$ v = \\frac{VO_{2max} \\times \\%LT}{Economy} $$`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BİLGİ KARTLARI (Referanslar) */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-primary">{t.details}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {t.cards.map((card) => (
                        <div key={card.id} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors hover-lift group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-xl bg-slate-900 text-primary group-hover:scale-110 transition-transform border border-slate-700">
                                    {card.icon ? <card.icon size={24} /> : <Icons.Activity size={24}/>}
                                </div>
                                <h4 className="text-lg font-bold text-white">{card.title}</h4>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Global erişim için window'a ata (App.js içinde modül importu yoksa)
window.RunningPerformancePage = RunningPerformancePage;
