import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-secondary-900 dark:text-[#f6f6f6] flex flex-col font-sans selection:bg-primary-200 selection:text-primary-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* --- Hero Section --- */}
        <section id="hero" className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
          {/* Decorative Backgrounds */}
          <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-b from-secondary-50 to-white dark:from-[#1a1a1a] dark:to-[#121212] -z-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-500/5 dark:bg-primary-500/10 blur-[120px] rounded-full point-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

              {/* Right Side: Content (First in DOM for RTL Right Placement) */}
              <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-right space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 font-bold text-sm border border-primary-100 dark:border-primary-800 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                  </span>
                  المنصة رقم 1 لخدمات السيارات في المملكة
                </div>

                <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-secondary-900 dark:text-white">
                  شور فني، منصتك الذكية <br />
                  <span className="text-primary-500 relative">
                    للسيارات
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-500/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
                    </svg>
                  </span>
                </h1>

                <p className="text-xl text-secondary-500 dark:text-secondary-400 max-w-xl leading-relaxed font-medium">
                  كل خدمات سيارتك في مكان واحد. من استشارة فنية وتشخيص لأعطالك بالذكاء الصناعي، وحتى اختيار ورشة الصيانة أو السمكرة المناسبة لك... شور فني يخدمك بخطوات بسيطة وأنت في مكانك.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                  <a href="https://apps.apple.com/sa/app/%D8%B4%D9%88%D8%B1-%D9%81%D9%86%D9%8ا%D9%8A/id1645769829?l=ar" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto px-6 py-2.5 bg-black/95 hover:bg-black text-white rounded-2xl transition-all shadow-xl flex items-center gap-4 border border-white/10 backdrop-blur-md">
                    <svg className="w-8 h-8 fill-white" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    <div className="text-right flex flex-col items-start justify-center leading-tight">
                      <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">حمل من</span>
                      <span className="text-xl font-bold -mt-0.5">App Store</span>
                    </div>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.arm.surefanni&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl transition-all shadow-xl shadow-primary-500/30 flex items-center gap-4 border border-primary-400/20">
                    <svg className="w-8 h-8 fill-white" viewBox="0 0 512 512">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.1 18-26.7-1.2-36.8zM104.6 499l220.7-127.3-60.1-60.1L104.6 499z" />
                    </svg>
                    <div className="text-right flex flex-col items-start justify-center leading-tight">
                      <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">احصل عليه من</span>
                      <span className="text-xl font-bold -mt-0.5">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Left Side: App Mockup */}
              <div className="lg:w-1/2 relative animate-fade-in-up animation-delay-500 flex justify-center items-center">
                {/* Decorative floating assets */}
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary-900/5 rounded-full blur-3xl" />

                <div className="relative z-10 bg-secondary-50 dark:bg-[#1a1a1a] rounded-[3.5rem] p-3 md:p-4 border border-secondary-200 dark:border-secondary-800 shadow-2xl overflow-hidden group max-w-[480px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 to-transparent" />
                  <div className="bg-white dark:bg-secondary-900 rounded-[3rem] overflow-hidden relative border border-secondary-100 dark:border-secondary-800">
                    <img
                      src="/public/images/app-dashboard.png"
                      alt="واجهة تطبيق شور فني"
                      className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Status Float Card (Premium Touch) */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-secondary-800 px-6 py-4 rounded-2xl shadow-xl border border-secondary-100 dark:border-secondary-700 z-20 hidden md:block animate-bounce shadow-primary-500/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-black text-secondary-900 dark:text-white leading-none mb-1">فحص ذكي</div>
                      <div className="text-[10px] text-secondary-500 dark:text-secondary-400 font-bold uppercase">جاهز للتحليل</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Features Grid (Merged Highlights) --- */}
        <section id="about" className="py-32 relative overflow-hidden bg-white dark:bg-[#121212]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-20 items-center mb-20 text-center lg:text-right">
              <div className="lg:w-1/2 relative group flex justify-center">
                <div className="absolute -inset-10 bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <img
                  src="/public/images/app-splash.png"
                  alt="تطبيق شور فني"
                  className="relative z-10 w-full max-w-[360px] h-auto drop-shadow-[0_45px_55px_rgba(0,0,0,0.3)] transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-200 font-bold text-xs uppercase tracking-widest mb-2 border border-secondary-200 dark:border-secondary-700 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                  نبذة عن شور فني
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-secondary-900 dark:text-white leading-[1.15]">
                  شريكك الموثوق في <br /> <span className="text-primary-500 underline decoration-primary-500/30 underline-offset-8">العناية بالسيارات</span>
                </h2>
                <p className="text-xl text-secondary-500 dark:text-secondary-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  &quot;شور فني&quot; هو تطبيق مبتكر يعزز خدمات السيارات في المملكة العربية السعودية. ويقدم حلولاً شاملة لصيانة السيارات، حيث يسهل وصول العملاء لفنيين وميكانيكيين محترفين مباشرة، مما يوفر عليهم مشوار الصناعية.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <a href="#services" className="px-8 py-3.5 bg-secondary-900 dark:bg-white dark:text-black text-white rounded-2xl font-bold transition-all hover:scale-105 flex items-center gap-3 group">
                    اكتشف خدماتنا
                    <svg className="w-5 h-5 rtl:rotate-180 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "توفير الوقت والجهد",
                  desc: "لن تحتاج للذهاب إلى الورش في الصناعية، أينما كنت نصل إليك ونجيبك.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                },
                {
                  title: "تواصل مباشر",
                  desc: "يتيح التطبيق التواصل الفوري مع ميكانيكي سيارات محترف ومعتمد.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                },
                {
                  title: "توفير التكاليف",
                  desc: "تجنب التكاليف الزائدة بفضل الاستشارات الصادقة وتحديد المشكلة بدقة.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                },
                {
                  title: "سهولة الاستخدام",
                  desc: "يتميز التطبيق بواجهة مستخدم بسيطة وسهلة الاستخدام لجميع العملاء.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-[#1a1a1a] p-8 rounded-[2.5rem] border border-secondary-100 dark:border-secondary-800 shadow-sm hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-secondary-50 dark:bg-secondary-800/50 shadow-inner text-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">{item.icon}</svg>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-secondary-500 dark:text-secondary-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section id="services" className="py-24 bg-secondary-50 dark:bg-[#151515] border-y border-secondary-100 dark:border-secondary-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-base text-primary-500 font-bold tracking-wide uppercase mb-2">خدماتنا المتوفرة حالياً</h2>
              <p className="mt-2 text-3xl md:text-4xl leading-10 font-black text-secondary-900 dark:text-white">
                ماذا يقدم تطبيق شور فني؟
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "الاستشارات الفنية",
                  desc: "تواصل مع نخبة من الفنيين الموثوقين للحصول على استشارة دقيقة وموثوقة لحالة سيارتك.",
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                },
                {
                  title: "تشخيص بالذكاء الاصطناعي",
                  desc: "ارفع صورة للعطل أو المشكلة، وسيقوم الذكاء الاصطناعي المتقدم بتحليلها وإعطائك التشخيص الفوري.",
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                },
                {
                  title: "مقارنة السيارات",
                  desc: "محتار بين سيارتين؟ استخدم أداتنا الذكية للمقارنة بين المواصفات، الأداء، والمميزات لاختيار الأنسب لك.",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                },
                {
                  title: "تقدير الحوادث",
                  desc: "احصل على تقدير مبدئي لتكلفة إصلاح الحادث والخطوات اللازمة عبر نظامنا الذكي.",
                  icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                {
                  title: "حجز ورش الصيانة",
                  desc: "استعرض الورش المعتمدة، قارن الأسعار والتقييمات، واحجز موعد صيانة سيارتك الميكانيكية بكل سهولة.",
                  icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                },
                {
                  title: "ورش السمكرة والدهان",
                  desc: "أفضل الورش المتخصصة في السمكرة والدهان بانتظارك، اختر الأفضل لسيارتك بضغطة زر.",
                  icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                }
              ].map((feature, idx) => (
                <div key={idx} className="group bg-white dark:bg-[#1a1a1a] p-8 rounded-[2rem] border border-secondary-100 dark:border-secondary-800 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-[40px] group-hover:bg-primary-500/10 transition-colors" />
                  <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-sm">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 relative z-10">{feature.title}</h3>
                  <p className="text-secondary-500 dark:text-secondary-400 leading-relaxed font-medium relative z-10">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Testimonials Section --- */}
        <section className="py-24 bg-white dark:bg-[#121212]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-secondary-900 dark:text-white mb-4">آراء عملاؤنا</h2>
              <div className="h-1.5 w-24 bg-primary-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "راكان العطاس",
                  title: "تطبيق متميز",
                  comment: "جربته كبداية في الفقرات للذكاء الاصطناعي والله شي عجيب ورهيب، 5 نجوم يستاهل التطبيق 👍"
                },
                {
                  name: "أعيش فوق ..",
                  title: "اسطوري",
                  comment: "حطيت سؤالي وردو علي خمسة أشخاص فنيين وسريعين"
                },
                {
                  name: "مجيد الدوسري",
                  title: "تطبيق ممتاز ومفيد جداً",
                  comment: "الفنيين يعلمونك كيف تفحص السيارة وتعرف المشكلة انت قبل تروح الصناعية!"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-secondary-50 dark:bg-[#1a1a1a] p-8 rounded-[2.5rem] border border-secondary-100 dark:border-secondary-800 shadow-sm relative flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-400 font-medium leading-relaxed mb-8 italic">
                    &quot;{item.comment}&quot;
                  </p>
                  <div className="mt-auto">
                    <div className="flex gap-1 justify-center mb-3">
                      {[1, 2, 3, 4, 5].map(i => (
                        <svg key={i} className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-bold text-secondary-900 dark:text-white">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* --- Unified B2B Redirect Section --- */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-secondary-900 dark:bg-[#0a0a0a]" />
          {/* Gradients */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-600/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-400/20 blur-[100px] rounded-full" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20 backdrop-blur-md">
              خاص بالشركات والأساطيل
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              هل تبحث عن إدارة متكاملة لصيانة أسطول سيارات شركتك؟
            </h2>
            <p className="text-lg md:text-xl md:leading-relaxed text-secondary-300 mb-10 font-medium max-w-2xl mx-auto">
              منصة متكاملة لإدارة صيانة أساطيل الشركات. نربط شركتك مع الورش المعتمدة وموردي قطع الغيار مع توثيق كامل لجميع عمليات الصيانة.
            </p>
            <a
              href="https://surefanni-business.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-white hover:bg-primary-600 hover:scale-105 transition-all outline-none rounded-full font-bold text-lg shadow-xl shadow-primary-500/20"
            >
              استكشف منصة الأعمال
              <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div >
  );
}
