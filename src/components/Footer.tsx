import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#fcfcfc] dark:bg-[#121212] py-12 border-t border-secondary-200 dark:border-secondary-900 relative overflow-hidden">
            {/* Background Decorator */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-900/5 via-transparent to-transparent -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    <div className="md:col-span-1 space-y-6">
                        <Link href="/" className="inline-flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30 transition-transform group-hover:-rotate-3">
                                ش
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-secondary-900 dark:text-white">
                                شور فني
                            </span>
                        </Link>
                        <p className="text-secondary-500 dark:text-secondary-400 text-sm leading-relaxed">
                            منصتك الذكية للسيارات. كل خدمات سيارتك في مكان واحد من استشارة فنية وتشخيص بالأعطال بالذكاء الصناعي، إلى تقييم الحوادث وحجز ورش الصيانة المناسبة لك.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-secondary-900 dark:text-white text-lg">روابط سريعة</h4>
                        <ul className="flex flex-col gap-3 p-0 m-0 list-none">
                            <li>
                                <a href="#hero" className="text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 text-sm transition-colors">
                                    الرئيسية
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 text-sm transition-colors">
                                    خدماتنا
                                </a>
                            </li>
                            <li>
                                <a href="#how-it-works" className="text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 text-sm transition-colors">
                                    كيف تعمل المنصة
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-secondary-900 dark:text-white text-lg">الشركات والأساطيل</h4>
                        <ul className="flex flex-col gap-3 p-0 m-0 list-none">
                            <li>
                                <a
                                    href="https://surefanni-business.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 text-sm transition-colors"
                                >
                                    تسجيل شركة جديدة
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://surefanni-business.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 text-sm transition-colors"
                                >
                                    دخول منصة الأعمال
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-secondary-900 dark:text-white text-lg">مؤسسة شور فني</h4>
                        <ul className="flex flex-col gap-3 p-0 m-0 list-none">
                            <li>
                                <div className="text-secondary-500 dark:text-secondary-400 text-sm block">
                                    <span className="font-bold text-secondary-700 dark:text-secondary-300 ml-1">رقم السجل التجاري:</span>
                                    <span>1010741998</span>
                                </div>
                            </li>
                            <li>
                                <div className="text-secondary-500 dark:text-secondary-400 text-sm block">
                                    <span className="font-bold text-secondary-700 dark:text-secondary-300 ml-1">الرقم الموحد:</span>
                                    <span>7025765004</span>
                                </div>
                            </li>
                            <li>
                                <a href="mailto:info@surefanni.com" className="text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 text-sm transition-colors mt-2 inline-block">
                                    info@surefanni.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-secondary-200 dark:border-secondary-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-secondary-500 dark:text-secondary-400 text-sm text-center md:text-right">
                        © {currentYear} منصة شور فني. جميع الحقوق محفوظة.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <a href="https://apps.apple.com/sa/app/%D8%B4%D9%88%D8%B1-%D9%8ف%D9%86%D9%8A/id1645769829?l=ar" target="_blank" rel="noopener noreferrer" className="group bg-black/90 hover:bg-black text-white px-5 py-2 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-3 border border-white/10">
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 384 512">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            <div className="text-right flex flex-col items-start leading-[1.1]">
                                <span className="text-[8px] uppercase tracking-tighter opacity-50">حمل من</span>
                                <span className="text-sm font-bold">App Store</span>
                            </div>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.arm.surefanni&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="group bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-3 border border-primary-400/20">
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 512 512">
                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.1 18-26.7-1.2-36.8zM104.6 499l220.7-127.3-60.1-60.1L104.6 499z" />
                            </svg>
                            <div className="text-right flex flex-col items-start leading-[1.1]">
                                <span className="text-[8px] uppercase tracking-tighter opacity-70">احصل عليه من</span>
                                <span className="text-sm font-bold">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
