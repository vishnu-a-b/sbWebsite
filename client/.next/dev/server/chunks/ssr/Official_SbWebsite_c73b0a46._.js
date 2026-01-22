module.exports = [
"[project]/Official/SbWebsite/components/BannerCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BannerCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
// Fallback banners if none in DB
// Fallback banners if none in DB
const DEFAULT_BANNERS = [
    {
        _id: 'default1',
        title: 'For the People, By the People',
        description: 'The First Palliative Hospital in India with no bills and bill counters. Dedicated to improving the quality of life for bedridden patients.',
        imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop'
    },
    {
        _id: 'default2',
        title: 'Compassionate Care, Always Free',
        description: 'We provide comprehensive medical, psychological, and spiritual care for the terminally ill, ensuring dignity in every moment.',
        imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop'
    },
    {
        _id: 'default3',
        title: 'Adding Life to Days',
        description: 'Our mission is to add life to days, not just days to life. Join us in our journey of serving the destitute.',
        imageUrl: 'https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?q=80&w=2000&auto=format&fit=crop'
    }
];
function BannerCarousel({ dbBanners }) {
    const [emblaRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        loop: true
    }, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()
    ]);
    // Use dbBanners if available, otherwise use defaults
    const banners = dbBanners && dbBanners.length > 0 ? dbBanners : DEFAULT_BANNERS;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full bg-blue-900 text-white overflow-hidden",
        ref: emblaRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex",
            children: banners.map((banner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-[0_0_100%] min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-cover bg-center opacity-30 z-0",
                            style: {
                                backgroundImage: `url('${banner.imageUrl}')`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
                            lineNumber: 43,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 py-24 lg:py-32 xl:py-48 container px-4 md:px-6 flex flex-col items-center text-center space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none",
                                    children: banner.title
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto max-w-[800px] text-gray-200 md:text-xl",
                                    children: banner.description
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-x-4 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            size: "lg",
                                            className: "bg-primary hover:bg-primary/90 border-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/appointment",
                                                children: "Book Appointment"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
                                                lineNumber: 58,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            size: "lg",
                                            variant: "outline",
                                            className: "bg-transparent border-white text-white hover:bg-white/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/donate",
                                                children: "Donate Now"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
                            lineNumber: 49,
                            columnNumber: 14
                        }, this)
                    ]
                }, banner._id, true, {
                    fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Official/SbWebsite/components/BannerCarousel.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/Official/SbWebsite/components/RevealAnimation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RevealAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function RevealAnimation({ children, delay = 0, direction = 'up', className = '' }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: '-100px'
    });
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])();
    const directionOffset = {
        up: {
            y: 75,
            x: 0
        },
        down: {
            y: -75,
            x: 0
        },
        left: {
            y: 0,
            x: 75
        },
        right: {
            y: 0,
            x: -75
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInView) {
            controls.start('visible');
        }
    }, [
        isInView,
        controls
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: className,
        initial: "hidden",
        animate: controls,
        variants: {
            hidden: {
                opacity: 0,
                ...directionOffset[direction]
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                }
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Official/SbWebsite/components/RevealAnimation.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/Official/SbWebsite/components/Card3D.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function Card3D({ children, className = '' }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseXSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(x, {
        stiffness: 300,
        damping: 30
    });
    const mouseYSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(y, {
        stiffness: 300,
        damping: 30
    });
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(mouseYSpring, [
        -0.5,
        0.5
    ], [
        '7.5deg',
        '-7.5deg'
    ]);
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(mouseXSpring, [
        -0.5,
        0.5
    ], [
        '-7.5deg',
        '7.5deg'
    ]);
    const handleMouseMove = (e)=>{
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };
    const handleMouseLeave = ()=>{
        x.set(0);
        y.set(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: {
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
        },
        className: `relative ${className}`,
        whileHover: {
            scale: 1.05
        },
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                transform: 'translateZ(50px)',
                transformStyle: 'preserve-3d'
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/Official/SbWebsite/components/Card3D.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Official/SbWebsite/components/Card3D.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/Official/SbWebsite/components/ParallaxSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParallaxSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function ParallaxSection({ children, offset = 50, className = '' }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            'start end',
            'end start'
        ]
    });
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        offset
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        style: {
            y
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/Official/SbWebsite/components/ParallaxSection.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/Official/SbWebsite/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areOptionsEqual",
    ()=>areOptionsEqual,
    "arePluginsEqual",
    ()=>arePluginsEqual,
    "canUseDOM",
    ()=>canUseDOM,
    "sortAndMapPluginToOptions",
    ()=>sortAndMapPluginToOptions
]);
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function isRecord(subject) {
    return isObject(subject) || Array.isArray(subject);
}
function canUseDOM() {
    return !!(("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
    const optionsAKeys = Object.keys(optionsA);
    const optionsBKeys = Object.keys(optionsB);
    if (optionsAKeys.length !== optionsBKeys.length) return false;
    const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));
    const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));
    if (breakpointsA !== breakpointsB) return false;
    return optionsAKeys.every((key)=>{
        const valueA = optionsA[key];
        const valueB = optionsB[key];
        if (typeof valueA === 'function') return `${valueA}` === `${valueB}`;
        if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
        return areOptionsEqual(valueA, valueB);
    });
}
function sortAndMapPluginToOptions(plugins) {
    return plugins.concat().sort((a, b)=>a.name > b.name ? 1 : -1).map((plugin)=>plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
    if (pluginsA.length !== pluginsB.length) return false;
    const optionsA = sortAndMapPluginToOptions(pluginsA);
    const optionsB = sortAndMapPluginToOptions(pluginsB);
    return optionsA.every((optionA, index)=>{
        const optionB = optionsB[index];
        return areOptionsEqual(optionA, optionB);
    });
}
;
 //# sourceMappingURL=embla-carousel-reactive-utils.esm.js.map
}),
"[project]/Official/SbWebsite/node_modules/embla-carousel/esm/embla-carousel.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmblaCarousel
]);
function isNumber(subject) {
    return typeof subject === 'number';
}
function isString(subject) {
    return typeof subject === 'string';
}
function isBoolean(subject) {
    return typeof subject === 'boolean';
}
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function mathAbs(n) {
    return Math.abs(n);
}
function mathSign(n) {
    return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
    return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
    if (valueB === 0 || valueA === 0) return 0;
    if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
    const diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
    return mathAbs(diff / valueB);
}
function roundToTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
    return objectKeys(array).map(Number);
}
function arrayLast(array) {
    return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
    return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
    return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
    return Array.from(Array(n), (_, i)=>startAt + i);
}
function objectKeys(object) {
    return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
    return [
        objectA,
        objectB
    ].reduce((mergedObjects, currentObject)=>{
        objectKeys(currentObject).forEach((key)=>{
            const valueA = mergedObjects[key];
            const valueB = currentObject[key];
            const areObjects = isObject(valueA) && isObject(valueB);
            mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
        });
        return mergedObjects;
    }, {});
}
function isMouseEvent(evt, ownerWindow) {
    return typeof ownerWindow.MouseEvent !== 'undefined' && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
    const predefined = {
        start,
        center,
        end
    };
    function start() {
        return 0;
    }
    function center(n) {
        return end(n) / 2;
    }
    function end(n) {
        return viewSize - n;
    }
    function measure(n, index) {
        if (isString(align)) return predefined[align](n);
        return align(viewSize, n, index);
    }
    const self = {
        measure
    };
    return self;
}
function EventStore() {
    let listeners = [];
    function add(node, type, handler, options = {
        passive: true
    }) {
        let removeListener;
        if ('addEventListener' in node) {
            node.addEventListener(type, handler, options);
            removeListener = ()=>node.removeEventListener(type, handler, options);
        } else {
            const legacyMediaQueryList = node;
            legacyMediaQueryList.addListener(handler);
            removeListener = ()=>legacyMediaQueryList.removeListener(handler);
        }
        listeners.push(removeListener);
        return self;
    }
    function clear() {
        listeners = listeners.filter((remove)=>remove());
    }
    const self = {
        add,
        clear
    };
    return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
    const documentVisibleHandler = EventStore();
    const fixedTimeStep = 1000 / 60;
    let lastTimeStamp = null;
    let accumulatedTime = 0;
    let animationId = 0;
    function init() {
        documentVisibleHandler.add(ownerDocument, 'visibilitychange', ()=>{
            if (ownerDocument.hidden) reset();
        });
    }
    function destroy() {
        stop();
        documentVisibleHandler.clear();
    }
    function animate(timeStamp) {
        if (!animationId) return;
        if (!lastTimeStamp) {
            lastTimeStamp = timeStamp;
            update();
            update();
        }
        const timeElapsed = timeStamp - lastTimeStamp;
        lastTimeStamp = timeStamp;
        accumulatedTime += timeElapsed;
        while(accumulatedTime >= fixedTimeStep){
            update();
            accumulatedTime -= fixedTimeStep;
        }
        const alpha = accumulatedTime / fixedTimeStep;
        render(alpha);
        if (animationId) {
            animationId = ownerWindow.requestAnimationFrame(animate);
        }
    }
    function start() {
        if (animationId) return;
        animationId = ownerWindow.requestAnimationFrame(animate);
    }
    function stop() {
        ownerWindow.cancelAnimationFrame(animationId);
        lastTimeStamp = null;
        accumulatedTime = 0;
        animationId = 0;
    }
    function reset() {
        lastTimeStamp = null;
        accumulatedTime = 0;
    }
    const self = {
        init,
        destroy,
        start,
        stop,
        update,
        render
    };
    return self;
}
function Axis(axis, contentDirection) {
    const isRightToLeft = contentDirection === 'rtl';
    const isVertical = axis === 'y';
    const scroll = isVertical ? 'y' : 'x';
    const cross = isVertical ? 'x' : 'y';
    const sign = !isVertical && isRightToLeft ? -1 : 1;
    const startEdge = getStartEdge();
    const endEdge = getEndEdge();
    function measureSize(nodeRect) {
        const { height, width } = nodeRect;
        return isVertical ? height : width;
    }
    function getStartEdge() {
        if (isVertical) return 'top';
        return isRightToLeft ? 'right' : 'left';
    }
    function getEndEdge() {
        if (isVertical) return 'bottom';
        return isRightToLeft ? 'left' : 'right';
    }
    function direction(n) {
        return n * sign;
    }
    const self = {
        scroll,
        cross,
        startEdge,
        endEdge,
        measureSize,
        direction
    };
    return self;
}
function Limit(min = 0, max = 0) {
    const length = mathAbs(min - max);
    function reachedMin(n) {
        return n < min;
    }
    function reachedMax(n) {
        return n > max;
    }
    function reachedAny(n) {
        return reachedMin(n) || reachedMax(n);
    }
    function constrain(n) {
        if (!reachedAny(n)) return n;
        return reachedMin(n) ? min : max;
    }
    function removeOffset(n) {
        if (!length) return n;
        return n - length * Math.ceil((n - max) / length);
    }
    const self = {
        length,
        max,
        min,
        constrain,
        reachedAny,
        reachedMax,
        reachedMin,
        removeOffset
    };
    return self;
}
function Counter(max, start, loop) {
    const { constrain } = Limit(0, max);
    const loopEnd = max + 1;
    let counter = withinLimit(start);
    function withinLimit(n) {
        return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
    }
    function get() {
        return counter;
    }
    function set(n) {
        counter = withinLimit(n);
        return self;
    }
    function add(n) {
        return clone().set(get() + n);
    }
    function clone() {
        return Counter(max, get(), loop);
    }
    const self = {
        get,
        set,
        add,
        clone
    };
    return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
    const { cross: crossAxis, direction } = axis;
    const focusNodes = [
        'INPUT',
        'SELECT',
        'TEXTAREA'
    ];
    const nonPassiveEvent = {
        passive: false
    };
    const initEvents = EventStore();
    const dragEvents = EventStore();
    const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
    const snapForceBoost = {
        mouse: 300,
        touch: 400
    };
    const freeForceBoost = {
        mouse: 500,
        touch: 600
    };
    const baseSpeed = dragFree ? 43 : 25;
    let isMoving = false;
    let startScroll = 0;
    let startCross = 0;
    let pointerIsDown = false;
    let preventScroll = false;
    let preventClick = false;
    let isMouse = false;
    function init(emblaApi) {
        if (!watchDrag) return;
        function downIfAllowed(evt) {
            if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
        }
        const node = rootNode;
        initEvents.add(node, 'dragstart', (evt)=>evt.preventDefault(), nonPassiveEvent).add(node, 'touchmove', ()=>undefined, nonPassiveEvent).add(node, 'touchend', ()=>undefined).add(node, 'touchstart', downIfAllowed).add(node, 'mousedown', downIfAllowed).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click, true);
    }
    function destroy() {
        initEvents.clear();
        dragEvents.clear();
    }
    function addDragEvents() {
        const node = isMouse ? ownerDocument : rootNode;
        dragEvents.add(node, 'touchmove', move, nonPassiveEvent).add(node, 'touchend', up).add(node, 'mousemove', move, nonPassiveEvent).add(node, 'mouseup', up);
    }
    function isFocusNode(node) {
        const nodeName = node.nodeName || '';
        return focusNodes.includes(nodeName);
    }
    function forceBoost() {
        const boost = dragFree ? freeForceBoost : snapForceBoost;
        const type = isMouse ? 'mouse' : 'touch';
        return boost[type];
    }
    function allowedForce(force, targetChanged) {
        const next = index.add(mathSign(force) * -1);
        const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
        if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
        if (skipSnaps && targetChanged) return baseForce * 0.5;
        return scrollTarget.byIndex(next.get(), 0).distance;
    }
    function down(evt) {
        const isMouseEvt = isMouseEvent(evt, ownerWindow);
        isMouse = isMouseEvt;
        preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
        isMoving = deltaAbs(target.get(), location.get()) >= 2;
        if (isMouseEvt && evt.button !== 0) return;
        if (isFocusNode(evt.target)) return;
        pointerIsDown = true;
        dragTracker.pointerDown(evt);
        scrollBody.useFriction(0).useDuration(0);
        target.set(location);
        addDragEvents();
        startScroll = dragTracker.readPoint(evt);
        startCross = dragTracker.readPoint(evt, crossAxis);
        eventHandler.emit('pointerDown');
    }
    function move(evt) {
        const isTouchEvt = !isMouseEvent(evt, ownerWindow);
        if (isTouchEvt && evt.touches.length >= 2) return up(evt);
        const lastScroll = dragTracker.readPoint(evt);
        const lastCross = dragTracker.readPoint(evt, crossAxis);
        const diffScroll = deltaAbs(lastScroll, startScroll);
        const diffCross = deltaAbs(lastCross, startCross);
        if (!preventScroll && !isMouse) {
            if (!evt.cancelable) return up(evt);
            preventScroll = diffScroll > diffCross;
            if (!preventScroll) return up(evt);
        }
        const diff = dragTracker.pointerMove(evt);
        if (diffScroll > dragThreshold) preventClick = true;
        scrollBody.useFriction(0.3).useDuration(0.75);
        animation.start();
        target.add(direction(diff));
        evt.preventDefault();
    }
    function up(evt) {
        const currentLocation = scrollTarget.byDistance(0, false);
        const targetChanged = currentLocation.index !== index.get();
        const rawForce = dragTracker.pointerUp(evt) * forceBoost();
        const force = allowedForce(direction(rawForce), targetChanged);
        const forceFactor = factorAbs(rawForce, force);
        const speed = baseSpeed - 10 * forceFactor;
        const friction = baseFriction + forceFactor / 50;
        preventScroll = false;
        pointerIsDown = false;
        dragEvents.clear();
        scrollBody.useDuration(speed).useFriction(friction);
        scrollTo.distance(force, !dragFree);
        isMouse = false;
        eventHandler.emit('pointerUp');
    }
    function click(evt) {
        if (preventClick) {
            evt.stopPropagation();
            evt.preventDefault();
            preventClick = false;
        }
    }
    function pointerDown() {
        return pointerIsDown;
    }
    const self = {
        init,
        destroy,
        pointerDown
    };
    return self;
}
function DragTracker(axis, ownerWindow) {
    const logInterval = 170;
    let startEvent;
    let lastEvent;
    function readTime(evt) {
        return evt.timeStamp;
    }
    function readPoint(evt, evtAxis) {
        const property = evtAxis || axis.scroll;
        const coord = `client${property === 'x' ? 'X' : 'Y'}`;
        return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
    }
    function pointerDown(evt) {
        startEvent = evt;
        lastEvent = evt;
        return readPoint(evt);
    }
    function pointerMove(evt) {
        const diff = readPoint(evt) - readPoint(lastEvent);
        const expired = readTime(evt) - readTime(startEvent) > logInterval;
        lastEvent = evt;
        if (expired) startEvent = evt;
        return diff;
    }
    function pointerUp(evt) {
        if (!startEvent || !lastEvent) return 0;
        const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
        const diffTime = readTime(evt) - readTime(startEvent);
        const expired = readTime(evt) - readTime(lastEvent) > logInterval;
        const force = diffDrag / diffTime;
        const isFlick = diffTime && !expired && mathAbs(force) > 0.1;
        return isFlick ? force : 0;
    }
    const self = {
        pointerDown,
        pointerMove,
        pointerUp,
        readPoint
    };
    return self;
}
function NodeRects() {
    function measure(node) {
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
        const offset = {
            top: offsetTop,
            right: offsetLeft + offsetWidth,
            bottom: offsetTop + offsetHeight,
            left: offsetLeft,
            width: offsetWidth,
            height: offsetHeight
        };
        return offset;
    }
    const self = {
        measure
    };
    return self;
}
function PercentOfView(viewSize) {
    function measure(n) {
        return viewSize * (n / 100);
    }
    const self = {
        measure
    };
    return self;
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
    const observeNodes = [
        container
    ].concat(slides);
    let resizeObserver;
    let containerSize;
    let slideSizes = [];
    let destroyed = false;
    function readSize(node) {
        return axis.measureSize(nodeRects.measure(node));
    }
    function init(emblaApi) {
        if (!watchResize) return;
        containerSize = readSize(container);
        slideSizes = slides.map(readSize);
        function defaultCallback(entries) {
            for (const entry of entries){
                if (destroyed) return;
                const isContainer = entry.target === container;
                const slideIndex = slides.indexOf(entry.target);
                const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
                const newSize = readSize(isContainer ? container : slides[slideIndex]);
                const diffSize = mathAbs(newSize - lastSize);
                if (diffSize >= 0.5) {
                    emblaApi.reInit();
                    eventHandler.emit('resize');
                    break;
                }
            }
        }
        resizeObserver = new ResizeObserver((entries)=>{
            if (isBoolean(watchResize) || watchResize(emblaApi, entries)) {
                defaultCallback(entries);
            }
        });
        ownerWindow.requestAnimationFrame(()=>{
            observeNodes.forEach((node)=>resizeObserver.observe(node));
        });
    }
    function destroy() {
        destroyed = true;
        if (resizeObserver) resizeObserver.disconnect();
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
    let scrollVelocity = 0;
    let scrollDirection = 0;
    let scrollDuration = baseDuration;
    let scrollFriction = baseFriction;
    let rawLocation = location.get();
    let rawLocationPrevious = 0;
    function seek() {
        const displacement = target.get() - location.get();
        const isInstant = !scrollDuration;
        let scrollDistance = 0;
        if (isInstant) {
            scrollVelocity = 0;
            previousLocation.set(target);
            location.set(target);
            scrollDistance = displacement;
        } else {
            previousLocation.set(location);
            scrollVelocity += displacement / scrollDuration;
            scrollVelocity *= scrollFriction;
            rawLocation += scrollVelocity;
            location.add(scrollVelocity);
            scrollDistance = rawLocation - rawLocationPrevious;
        }
        scrollDirection = mathSign(scrollDistance);
        rawLocationPrevious = rawLocation;
        return self;
    }
    function settled() {
        const diff = target.get() - offsetLocation.get();
        return mathAbs(diff) < 0.001;
    }
    function duration() {
        return scrollDuration;
    }
    function direction() {
        return scrollDirection;
    }
    function velocity() {
        return scrollVelocity;
    }
    function useBaseDuration() {
        return useDuration(baseDuration);
    }
    function useBaseFriction() {
        return useFriction(baseFriction);
    }
    function useDuration(n) {
        scrollDuration = n;
        return self;
    }
    function useFriction(n) {
        scrollFriction = n;
        return self;
    }
    const self = {
        direction,
        duration,
        velocity,
        seek,
        settled,
        useBaseFriction,
        useBaseDuration,
        useFriction,
        useDuration
    };
    return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
    const pullBackThreshold = percentOfView.measure(10);
    const edgeOffsetTolerance = percentOfView.measure(50);
    const frictionLimit = Limit(0.1, 0.99);
    let disabled = false;
    function shouldConstrain() {
        if (disabled) return false;
        if (!limit.reachedAny(target.get())) return false;
        if (!limit.reachedAny(location.get())) return false;
        return true;
    }
    function constrain(pointerDown) {
        if (!shouldConstrain()) return;
        const edge = limit.reachedMin(location.get()) ? 'min' : 'max';
        const diffToEdge = mathAbs(limit[edge] - location.get());
        const diffToTarget = target.get() - location.get();
        const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
        target.subtract(diffToTarget * friction);
        if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
            target.set(limit.constrain(target.get()));
            scrollBody.useDuration(25).useBaseFriction();
        }
    }
    function toggleActive(active) {
        disabled = !active;
    }
    const self = {
        shouldConstrain,
        constrain,
        toggleActive
    };
    return self;
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
    const scrollBounds = Limit(-contentSize + viewSize, 0);
    const snapsBounded = measureBounded();
    const scrollContainLimit = findScrollContainLimit();
    const snapsContained = measureContained();
    function usePixelTolerance(bound, snap) {
        return deltaAbs(bound, snap) <= 1;
    }
    function findScrollContainLimit() {
        const startSnap = snapsBounded[0];
        const endSnap = arrayLast(snapsBounded);
        const min = snapsBounded.lastIndexOf(startSnap);
        const max = snapsBounded.indexOf(endSnap) + 1;
        return Limit(min, max);
    }
    function measureBounded() {
        return snapsAligned.map((snapAligned, index)=>{
            const { min, max } = scrollBounds;
            const snap = scrollBounds.constrain(snapAligned);
            const isFirst = !index;
            const isLast = arrayIsLastIndex(snapsAligned, index);
            if (isFirst) return max;
            if (isLast) return min;
            if (usePixelTolerance(min, snap)) return min;
            if (usePixelTolerance(max, snap)) return max;
            return snap;
        }).map((scrollBound)=>parseFloat(scrollBound.toFixed(3)));
    }
    function measureContained() {
        if (contentSize <= viewSize + pixelTolerance) return [
            scrollBounds.max
        ];
        if (containScroll === 'keepSnaps') return snapsBounded;
        const { min, max } = scrollContainLimit;
        return snapsBounded.slice(min, max);
    }
    const self = {
        snapsContained,
        scrollContainLimit
    };
    return self;
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
    const max = scrollSnaps[0];
    const min = loop ? max - contentSize : arrayLast(scrollSnaps);
    const limit = Limit(min, max);
    const self = {
        limit
    };
    return self;
}
function ScrollLooper(contentSize, limit, location, vectors) {
    const jointSafety = 0.1;
    const min = limit.min + jointSafety;
    const max = limit.max + jointSafety;
    const { reachedMin, reachedMax } = Limit(min, max);
    function shouldLoop(direction) {
        if (direction === 1) return reachedMax(location.get());
        if (direction === -1) return reachedMin(location.get());
        return false;
    }
    function loop(direction) {
        if (!shouldLoop(direction)) return;
        const loopDistance = contentSize * (direction * -1);
        vectors.forEach((v)=>v.add(loopDistance));
    }
    const self = {
        loop
    };
    return self;
}
function ScrollProgress(limit) {
    const { max, length } = limit;
    function get(n) {
        const currentLocation = n - max;
        return length ? currentLocation / -length : 0;
    }
    const self = {
        get
    };
    return self;
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
    const { startEdge, endEdge } = axis;
    const { groupSlides } = slidesToScroll;
    const alignments = measureSizes().map(alignment.measure);
    const snaps = measureUnaligned();
    const snapsAligned = measureAligned();
    function measureSizes() {
        return groupSlides(slideRects).map((rects)=>arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
    }
    function measureUnaligned() {
        return slideRects.map((rect)=>containerRect[startEdge] - rect[startEdge]).map((snap)=>-mathAbs(snap));
    }
    function measureAligned() {
        return groupSlides(snaps).map((g)=>g[0]).map((snap, index)=>snap + alignments[index]);
    }
    const self = {
        snaps,
        snapsAligned
    };
    return self;
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
    const { groupSlides } = slidesToScroll;
    const { min, max } = scrollContainLimit;
    const slideRegistry = createSlideRegistry();
    function createSlideRegistry() {
        const groupedSlideIndexes = groupSlides(slideIndexes);
        const doNotContain = !containSnaps || containScroll === 'keepSnaps';
        if (scrollSnaps.length === 1) return [
            slideIndexes
        ];
        if (doNotContain) return groupedSlideIndexes;
        return groupedSlideIndexes.slice(min, max).map((group, index, groups)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(groups, index);
            if (isFirst) {
                const range = arrayLast(groups[0]) + 1;
                return arrayFromNumber(range);
            }
            if (isLast) {
                const range = arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1;
                return arrayFromNumber(range, arrayLast(groups)[0]);
            }
            return group;
        });
    }
    const self = {
        slideRegistry
    };
    return self;
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
    const { reachedAny, removeOffset, constrain } = limit;
    function minDistance(distances) {
        return distances.concat().sort((a, b)=>mathAbs(a) - mathAbs(b))[0];
    }
    function findTargetSnap(target) {
        const distance = loop ? removeOffset(target) : constrain(target);
        const ascDiffsToSnaps = scrollSnaps.map((snap, index)=>({
                diff: shortcut(snap - distance, 0),
                index
            })).sort((d1, d2)=>mathAbs(d1.diff) - mathAbs(d2.diff));
        const { index } = ascDiffsToSnaps[0];
        return {
            index,
            distance
        };
    }
    function shortcut(target, direction) {
        const targets = [
            target,
            target + contentSize,
            target - contentSize
        ];
        if (!loop) return target;
        if (!direction) return minDistance(targets);
        const matchingTargets = targets.filter((t)=>mathSign(t) === direction);
        if (matchingTargets.length) return minDistance(matchingTargets);
        return arrayLast(targets) - contentSize;
    }
    function byIndex(index, direction) {
        const diffToSnap = scrollSnaps[index] - targetVector.get();
        const distance = shortcut(diffToSnap, direction);
        return {
            index,
            distance
        };
    }
    function byDistance(distance, snap) {
        const target = targetVector.get() + distance;
        const { index, distance: targetSnapDistance } = findTargetSnap(target);
        const reachedBound = !loop && reachedAny(target);
        if (!snap || reachedBound) return {
            index,
            distance
        };
        const diffToSnap = scrollSnaps[index] - targetSnapDistance;
        const snapDistance = distance + shortcut(diffToSnap, 0);
        return {
            index,
            distance: snapDistance
        };
    }
    const self = {
        byDistance,
        byIndex,
        shortcut
    };
    return self;
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
    function scrollTo(target) {
        const distanceDiff = target.distance;
        const indexDiff = target.index !== indexCurrent.get();
        targetVector.add(distanceDiff);
        if (distanceDiff) {
            if (scrollBody.duration()) {
                animation.start();
            } else {
                animation.update();
                animation.render(1);
                animation.update();
            }
        }
        if (indexDiff) {
            indexPrevious.set(indexCurrent.get());
            indexCurrent.set(target.index);
            eventHandler.emit('select');
        }
    }
    function distance(n, snap) {
        const target = scrollTarget.byDistance(n, snap);
        scrollTo(target);
    }
    function index(n, direction) {
        const targetIndex = indexCurrent.clone().set(n);
        const target = scrollTarget.byIndex(targetIndex.get(), direction);
        scrollTo(target);
    }
    const self = {
        distance,
        index
    };
    return self;
}
function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
    const focusListenerOptions = {
        passive: true,
        capture: true
    };
    let lastTabPressTime = 0;
    function init(emblaApi) {
        if (!watchFocus) return;
        function defaultCallback(index) {
            const nowTime = new Date().getTime();
            const diffTime = nowTime - lastTabPressTime;
            if (diffTime > 10) return;
            eventHandler.emit('slideFocusStart');
            root.scrollLeft = 0;
            const group = slideRegistry.findIndex((group)=>group.includes(index));
            if (!isNumber(group)) return;
            scrollBody.useDuration(0);
            scrollTo.index(group, 0);
            eventHandler.emit('slideFocus');
        }
        eventStore.add(document, 'keydown', registerTabPress, false);
        slides.forEach((slide, slideIndex)=>{
            eventStore.add(slide, 'focus', (evt)=>{
                if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) {
                    defaultCallback(slideIndex);
                }
            }, focusListenerOptions);
        });
    }
    function registerTabPress(event) {
        if (event.code === 'Tab') lastTabPressTime = new Date().getTime();
    }
    const self = {
        init
    };
    return self;
}
function Vector1D(initialValue) {
    let value = initialValue;
    function get() {
        return value;
    }
    function set(n) {
        value = normalizeInput(n);
    }
    function add(n) {
        value += normalizeInput(n);
    }
    function subtract(n) {
        value -= normalizeInput(n);
    }
    function normalizeInput(n) {
        return isNumber(n) ? n : n.get();
    }
    const self = {
        get,
        set,
        add,
        subtract
    };
    return self;
}
function Translate(axis, container) {
    const translate = axis.scroll === 'x' ? x : y;
    const containerStyle = container.style;
    let previousTarget = null;
    let disabled = false;
    function x(n) {
        return `translate3d(${n}px,0px,0px)`;
    }
    function y(n) {
        return `translate3d(0px,${n}px,0px)`;
    }
    function to(target) {
        if (disabled) return;
        const newTarget = roundToTwoDecimals(axis.direction(target));
        if (newTarget === previousTarget) return;
        containerStyle.transform = translate(newTarget);
        previousTarget = newTarget;
    }
    function toggleActive(active) {
        disabled = !active;
    }
    function clear() {
        if (disabled) return;
        containerStyle.transform = '';
        if (!container.getAttribute('style')) container.removeAttribute('style');
    }
    const self = {
        clear,
        to,
        toggleActive
    };
    return self;
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
    const roundingSafety = 0.5;
    const ascItems = arrayKeys(slideSizesWithGaps);
    const descItems = arrayKeys(slideSizesWithGaps).reverse();
    const loopPoints = startPoints().concat(endPoints());
    function removeSlideSizes(indexes, from) {
        return indexes.reduce((a, i)=>{
            return a - slideSizesWithGaps[i];
        }, from);
    }
    function slidesInGap(indexes, gap) {
        return indexes.reduce((a, i)=>{
            const remainingGap = removeSlideSizes(a, gap);
            return remainingGap > 0 ? a.concat([
                i
            ]) : a;
        }, []);
    }
    function findSlideBounds(offset) {
        return snaps.map((snap, index)=>({
                start: snap - slideSizes[index] + roundingSafety + offset,
                end: snap + viewSize - roundingSafety + offset
            }));
    }
    function findLoopPoints(indexes, offset, isEndEdge) {
        const slideBounds = findSlideBounds(offset);
        return indexes.map((index)=>{
            const initial = isEndEdge ? 0 : -contentSize;
            const altered = isEndEdge ? contentSize : 0;
            const boundEdge = isEndEdge ? 'end' : 'start';
            const loopPoint = slideBounds[index][boundEdge];
            return {
                index,
                loopPoint,
                slideLocation: Vector1D(-1),
                translate: Translate(axis, slides[index]),
                target: ()=>location.get() > loopPoint ? initial : altered
            };
        });
    }
    function startPoints() {
        const gap = scrollSnaps[0];
        const indexes = slidesInGap(descItems, gap);
        return findLoopPoints(indexes, contentSize, false);
    }
    function endPoints() {
        const gap = viewSize - scrollSnaps[0] - 1;
        const indexes = slidesInGap(ascItems, gap);
        return findLoopPoints(indexes, -contentSize, true);
    }
    function canLoop() {
        return loopPoints.every(({ index })=>{
            const otherIndexes = ascItems.filter((i)=>i !== index);
            return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
        });
    }
    function loop() {
        loopPoints.forEach((loopPoint)=>{
            const { target, translate, slideLocation } = loopPoint;
            const shiftLocation = target();
            if (shiftLocation === slideLocation.get()) return;
            translate.to(shiftLocation);
            slideLocation.set(shiftLocation);
        });
    }
    function clear() {
        loopPoints.forEach((loopPoint)=>loopPoint.translate.clear());
    }
    const self = {
        canLoop,
        clear,
        loop,
        loopPoints
    };
    return self;
}
function SlidesHandler(container, eventHandler, watchSlides) {
    let mutationObserver;
    let destroyed = false;
    function init(emblaApi) {
        if (!watchSlides) return;
        function defaultCallback(mutations) {
            for (const mutation of mutations){
                if (mutation.type === 'childList') {
                    emblaApi.reInit();
                    eventHandler.emit('slidesChanged');
                    break;
                }
            }
        }
        mutationObserver = new MutationObserver((mutations)=>{
            if (destroyed) return;
            if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) {
                defaultCallback(mutations);
            }
        });
        mutationObserver.observe(container, {
            childList: true
        });
    }
    function destroy() {
        if (mutationObserver) mutationObserver.disconnect();
        destroyed = true;
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function SlidesInView(container, slides, eventHandler, threshold) {
    const intersectionEntryMap = {};
    let inViewCache = null;
    let notInViewCache = null;
    let intersectionObserver;
    let destroyed = false;
    function init() {
        intersectionObserver = new IntersectionObserver((entries)=>{
            if (destroyed) return;
            entries.forEach((entry)=>{
                const index = slides.indexOf(entry.target);
                intersectionEntryMap[index] = entry;
            });
            inViewCache = null;
            notInViewCache = null;
            eventHandler.emit('slidesInView');
        }, {
            root: container.parentElement,
            threshold
        });
        slides.forEach((slide)=>intersectionObserver.observe(slide));
    }
    function destroy() {
        if (intersectionObserver) intersectionObserver.disconnect();
        destroyed = true;
    }
    function createInViewList(inView) {
        return objectKeys(intersectionEntryMap).reduce((list, slideIndex)=>{
            const index = parseInt(slideIndex);
            const { isIntersecting } = intersectionEntryMap[index];
            const inViewMatch = inView && isIntersecting;
            const notInViewMatch = !inView && !isIntersecting;
            if (inViewMatch || notInViewMatch) list.push(index);
            return list;
        }, []);
    }
    function get(inView = true) {
        if (inView && inViewCache) return inViewCache;
        if (!inView && notInViewCache) return notInViewCache;
        const slideIndexes = createInViewList(inView);
        if (inView) inViewCache = slideIndexes;
        if (!inView) notInViewCache = slideIndexes;
        return slideIndexes;
    }
    const self = {
        init,
        destroy,
        get
    };
    return self;
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
    const { measureSize, startEdge, endEdge } = axis;
    const withEdgeGap = slideRects[0] && readEdgeGap;
    const startGap = measureStartGap();
    const endGap = measureEndGap();
    const slideSizes = slideRects.map(measureSize);
    const slideSizesWithGaps = measureWithGaps();
    function measureStartGap() {
        if (!withEdgeGap) return 0;
        const slideRect = slideRects[0];
        return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
    }
    function measureEndGap() {
        if (!withEdgeGap) return 0;
        const style = ownerWindow.getComputedStyle(arrayLast(slides));
        return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
    }
    function measureWithGaps() {
        return slideRects.map((rect, index, rects)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(rects, index);
            if (isFirst) return slideSizes[index] + startGap;
            if (isLast) return slideSizes[index] + endGap;
            return rects[index + 1][startEdge] - rect[startEdge];
        }).map(mathAbs);
    }
    const self = {
        slideSizes,
        slideSizesWithGaps,
        startGap,
        endGap
    };
    return self;
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
    const { startEdge, endEdge, direction } = axis;
    const groupByNumber = isNumber(slidesToScroll);
    function byNumber(array, groupSize) {
        return arrayKeys(array).filter((i)=>i % groupSize === 0).map((i)=>array.slice(i, i + groupSize));
    }
    function bySize(array) {
        if (!array.length) return [];
        return arrayKeys(array).reduce((groups, rectB, index)=>{
            const rectA = arrayLast(groups) || 0;
            const isFirst = rectA === 0;
            const isLast = rectB === arrayLastIndex(array);
            const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
            const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
            const gapA = !loop && isFirst ? direction(startGap) : 0;
            const gapB = !loop && isLast ? direction(endGap) : 0;
            const chunkSize = mathAbs(edgeB - gapB - (edgeA + gapA));
            if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
            if (isLast) groups.push(array.length);
            return groups;
        }, []).map((currentSize, index, groups)=>{
            const previousSize = Math.max(groups[index - 1] || 0);
            return array.slice(previousSize, currentSize);
        });
    }
    function groupSlides(array) {
        return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
    }
    const self = {
        groupSlides
    };
    return self;
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
    // Options
    const { align, axis: scrollAxis, direction, startIndex, loop, duration, dragFree, dragThreshold, inViewThreshold, slidesToScroll: groupSlides, skipSnaps, containScroll, watchResize, watchSlides, watchDrag, watchFocus } = options;
    // Measurements
    const pixelTolerance = 2;
    const nodeRects = NodeRects();
    const containerRect = nodeRects.measure(container);
    const slideRects = slides.map(nodeRects.measure);
    const axis = Axis(scrollAxis, direction);
    const viewSize = axis.measureSize(containerRect);
    const percentOfView = PercentOfView(viewSize);
    const alignment = Alignment(align, viewSize);
    const containSnaps = !loop && !!containScroll;
    const readEdgeGap = loop || !!containScroll;
    const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
    const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
    const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
    const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
    const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
    const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
    const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);
    // Indexes
    const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
    const indexPrevious = index.clone();
    const slideIndexes = arrayKeys(slides);
    // Animation
    const update = ({ dragHandler, scrollBody, scrollBounds, options: { loop } })=>{
        if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
        scrollBody.seek();
    };
    const render = ({ scrollBody, translate, location, offsetLocation, previousLocation, scrollLooper, slideLooper, dragHandler, animation, eventHandler, scrollBounds, options: { loop } }, alpha)=>{
        const shouldSettle = scrollBody.settled();
        const withinBounds = !scrollBounds.shouldConstrain();
        const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
        const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
        if (hasSettledAndIdle) animation.stop();
        const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
        offsetLocation.set(interpolatedLocation);
        if (loop) {
            scrollLooper.loop(scrollBody.direction());
            slideLooper.loop();
        }
        translate.to(offsetLocation.get());
        if (hasSettledAndIdle) eventHandler.emit('settle');
        if (!hasSettled) eventHandler.emit('scroll');
    };
    const animation = Animations(ownerDocument, ownerWindow, ()=>update(engine), (alpha)=>render(engine, alpha));
    // Shared
    const friction = 0.68;
    const startLocation = scrollSnaps[index.get()];
    const location = Vector1D(startLocation);
    const previousLocation = Vector1D(startLocation);
    const offsetLocation = Vector1D(startLocation);
    const target = Vector1D(startLocation);
    const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
    const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
    const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
    const scrollProgress = ScrollProgress(limit);
    const eventStore = EventStore();
    const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
    const { slideRegistry } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
    const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
    // Engine
    const engine = {
        ownerDocument,
        ownerWindow,
        eventHandler,
        containerRect,
        slideRects,
        animation,
        axis,
        dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
        eventStore,
        percentOfView,
        index,
        indexPrevious,
        limit,
        location,
        offsetLocation,
        previousLocation,
        options,
        resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
        scrollBody,
        scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
        scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [
            location,
            offsetLocation,
            previousLocation,
            target
        ]),
        scrollProgress,
        scrollSnapList: scrollSnaps.map(scrollProgress.get),
        scrollSnaps,
        scrollTarget,
        scrollTo,
        slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
        slideFocus,
        slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
        slidesInView,
        slideIndexes,
        slideRegistry,
        slidesToScroll,
        target,
        translate: Translate(axis, container)
    };
    return engine;
}
function EventHandler() {
    let listeners = {};
    let api;
    function init(emblaApi) {
        api = emblaApi;
    }
    function getListeners(evt) {
        return listeners[evt] || [];
    }
    function emit(evt) {
        getListeners(evt).forEach((e)=>e(api, evt));
        return self;
    }
    function on(evt, cb) {
        listeners[evt] = getListeners(evt).concat([
            cb
        ]);
        return self;
    }
    function off(evt, cb) {
        listeners[evt] = getListeners(evt).filter((e)=>e !== cb);
        return self;
    }
    function clear() {
        listeners = {};
    }
    const self = {
        init,
        emit,
        off,
        on,
        clear
    };
    return self;
}
const defaultOptions = {
    align: 'center',
    axis: 'x',
    container: null,
    slides: null,
    containScroll: 'trimSnaps',
    direction: 'ltr',
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: false,
    dragThreshold: 10,
    loop: false,
    skipSnaps: false,
    duration: 25,
    startIndex: 0,
    active: true,
    watchDrag: true,
    watchResize: true,
    watchSlides: true,
    watchFocus: true
};
function OptionsHandler(ownerWindow) {
    function mergeOptions(optionsA, optionsB) {
        return objectsMergeDeep(optionsA, optionsB || {});
    }
    function optionsAtMedia(options) {
        const optionsAtMedia = options.breakpoints || {};
        const matchedMediaOptions = objectKeys(optionsAtMedia).filter((media)=>ownerWindow.matchMedia(media).matches).map((media)=>optionsAtMedia[media]).reduce((a, mediaOption)=>mergeOptions(a, mediaOption), {});
        return mergeOptions(options, matchedMediaOptions);
    }
    function optionsMediaQueries(optionsList) {
        return optionsList.map((options)=>objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries)=>acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
    }
    const self = {
        mergeOptions,
        optionsAtMedia,
        optionsMediaQueries
    };
    return self;
}
function PluginsHandler(optionsHandler) {
    let activePlugins = [];
    function init(emblaApi, plugins) {
        activePlugins = plugins.filter(({ options })=>optionsHandler.optionsAtMedia(options).active !== false);
        activePlugins.forEach((plugin)=>plugin.init(emblaApi, optionsHandler));
        return plugins.reduce((map, plugin)=>Object.assign(map, {
                [plugin.name]: plugin
            }), {});
    }
    function destroy() {
        activePlugins = activePlugins.filter((plugin)=>plugin.destroy());
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function EmblaCarousel(root, userOptions, userPlugins) {
    const ownerDocument = root.ownerDocument;
    const ownerWindow = ownerDocument.defaultView;
    const optionsHandler = OptionsHandler(ownerWindow);
    const pluginsHandler = PluginsHandler(optionsHandler);
    const mediaHandlers = EventStore();
    const eventHandler = EventHandler();
    const { mergeOptions, optionsAtMedia, optionsMediaQueries } = optionsHandler;
    const { on, off, emit } = eventHandler;
    const reInit = reActivate;
    let destroyed = false;
    let engine;
    let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
    let options = mergeOptions(optionsBase);
    let pluginList = [];
    let pluginApis;
    let container;
    let slides;
    function storeElements() {
        const { container: userContainer, slides: userSlides } = options;
        const customContainer = isString(userContainer) ? root.querySelector(userContainer) : userContainer;
        container = customContainer || root.children[0];
        const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
        slides = [].slice.call(customSlides || container.children);
    }
    function createEngine(options) {
        const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
        if (options.loop && !engine.slideLooper.canLoop()) {
            const optionsWithoutLoop = Object.assign({}, options, {
                loop: false
            });
            return createEngine(optionsWithoutLoop);
        }
        return engine;
    }
    function activate(withOptions, withPlugins) {
        if (destroyed) return;
        optionsBase = mergeOptions(optionsBase, withOptions);
        options = optionsAtMedia(optionsBase);
        pluginList = withPlugins || pluginList;
        storeElements();
        engine = createEngine(options);
        optionsMediaQueries([
            optionsBase,
            ...pluginList.map(({ options })=>options)
        ]).forEach((query)=>mediaHandlers.add(query, 'change', reActivate));
        if (!options.active) return;
        engine.translate.to(engine.location.get());
        engine.animation.init();
        engine.slidesInView.init();
        engine.slideFocus.init(self);
        engine.eventHandler.init(self);
        engine.resizeHandler.init(self);
        engine.slidesHandler.init(self);
        if (engine.options.loop) engine.slideLooper.loop();
        if (container.offsetParent && slides.length) engine.dragHandler.init(self);
        pluginApis = pluginsHandler.init(self, pluginList);
    }
    function reActivate(withOptions, withPlugins) {
        const startIndex = selectedScrollSnap();
        deActivate();
        activate(mergeOptions({
            startIndex
        }, withOptions), withPlugins);
        eventHandler.emit('reInit');
    }
    function deActivate() {
        engine.dragHandler.destroy();
        engine.eventStore.clear();
        engine.translate.clear();
        engine.slideLooper.clear();
        engine.resizeHandler.destroy();
        engine.slidesHandler.destroy();
        engine.slidesInView.destroy();
        engine.animation.destroy();
        pluginsHandler.destroy();
        mediaHandlers.clear();
    }
    function destroy() {
        if (destroyed) return;
        destroyed = true;
        mediaHandlers.clear();
        deActivate();
        eventHandler.emit('destroy');
        eventHandler.clear();
    }
    function scrollTo(index, jump, direction) {
        if (!options.active || destroyed) return;
        engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
        engine.scrollTo.index(index, direction || 0);
    }
    function scrollNext(jump) {
        const next = engine.index.add(1).get();
        scrollTo(next, jump, -1);
    }
    function scrollPrev(jump) {
        const prev = engine.index.add(-1).get();
        scrollTo(prev, jump, 1);
    }
    function canScrollNext() {
        const next = engine.index.add(1).get();
        return next !== selectedScrollSnap();
    }
    function canScrollPrev() {
        const prev = engine.index.add(-1).get();
        return prev !== selectedScrollSnap();
    }
    function scrollSnapList() {
        return engine.scrollSnapList;
    }
    function scrollProgress() {
        return engine.scrollProgress.get(engine.offsetLocation.get());
    }
    function selectedScrollSnap() {
        return engine.index.get();
    }
    function previousScrollSnap() {
        return engine.indexPrevious.get();
    }
    function slidesInView() {
        return engine.slidesInView.get();
    }
    function slidesNotInView() {
        return engine.slidesInView.get(false);
    }
    function plugins() {
        return pluginApis;
    }
    function internalEngine() {
        return engine;
    }
    function rootNode() {
        return root;
    }
    function containerNode() {
        return container;
    }
    function slideNodes() {
        return slides;
    }
    const self = {
        canScrollNext,
        canScrollPrev,
        containerNode,
        internalEngine,
        destroy,
        off,
        on,
        emit,
        plugins,
        previousScrollSnap,
        reInit,
        rootNode,
        scrollNext,
        scrollPrev,
        scrollProgress,
        scrollSnapList,
        scrollTo,
        selectedScrollSnap,
        slideNodes,
        slidesInView,
        slidesNotInView
    };
    activate(userOptions, userPlugins);
    setTimeout(()=>eventHandler.emit('init'), 0);
    return self;
}
EmblaCarousel.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel.esm.js.map
}),
"[project]/Official/SbWebsite/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEmblaCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/embla-carousel/esm/embla-carousel.esm.js [app-ssr] (ecmascript)");
;
;
;
function useEmblaCarousel(options = {}, plugins = []) {
    const storedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(options);
    const storedPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(plugins);
    const [emblaApi, setEmblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const reInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
    }, [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areOptionsEqual"])(storedOptions.current, options)) return;
        storedOptions.current = options;
        reInit();
    }, [
        options,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arePluginsEqual"])(storedPlugins.current, plugins)) return;
        storedPlugins.current = plugins;
        reInit();
    }, [
        plugins,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canUseDOM"])() && viewport) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].globalOptions = useEmblaCarousel.globalOptions;
            const newEmblaApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(viewport, storedOptions.current, storedPlugins.current);
            setEmblaApi(newEmblaApi);
            return ()=>newEmblaApi.destroy();
        } else {
            setEmblaApi(undefined);
        }
    }, [
        viewport,
        setEmblaApi
    ]);
    return [
        setViewport,
        emblaApi
    ];
}
useEmblaCarousel.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel-react.esm.js.map
}),
"[project]/Official/SbWebsite/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Autoplay
]);
const defaultOptions = {
    active: true,
    breakpoints: {},
    delay: 4000,
    jump: false,
    playOnInit: true,
    stopOnFocusIn: true,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
    stopOnLastSnap: false,
    rootNode: null
};
function normalizeDelay(emblaApi, delay) {
    const scrollSnaps = emblaApi.scrollSnapList();
    if (typeof delay === 'number') {
        return scrollSnaps.map(()=>delay);
    }
    return delay(scrollSnaps, emblaApi);
}
function getAutoplayRootNode(emblaApi, rootNode) {
    const emblaRootNode = emblaApi.rootNode();
    return rootNode && rootNode(emblaRootNode) || emblaRootNode;
}
function Autoplay(userOptions = {}) {
    let options;
    let emblaApi;
    let destroyed;
    let delay;
    let timerStartTime = null;
    let timerId = 0;
    let autoplayActive = false;
    let mouseIsOver = false;
    let playOnDocumentVisible = false;
    let jump = false;
    function init(emblaApiInstance, optionsHandler) {
        emblaApi = emblaApiInstance;
        const { mergeOptions, optionsAtMedia } = optionsHandler;
        const optionsBase = mergeOptions(defaultOptions, Autoplay.globalOptions);
        const allOptions = mergeOptions(optionsBase, userOptions);
        options = optionsAtMedia(allOptions);
        if (emblaApi.scrollSnapList().length <= 1) return;
        jump = options.jump;
        destroyed = false;
        delay = normalizeDelay(emblaApi, options.delay);
        const { eventStore, ownerDocument } = emblaApi.internalEngine();
        const isDraggable = !!emblaApi.internalEngine().options.watchDrag;
        const root = getAutoplayRootNode(emblaApi, options.rootNode);
        eventStore.add(ownerDocument, 'visibilitychange', visibilityChange);
        if (isDraggable) {
            emblaApi.on('pointerDown', pointerDown);
        }
        if (isDraggable && !options.stopOnInteraction) {
            emblaApi.on('pointerUp', pointerUp);
        }
        if (options.stopOnMouseEnter) {
            eventStore.add(root, 'mouseenter', mouseEnter);
        }
        if (options.stopOnMouseEnter && !options.stopOnInteraction) {
            eventStore.add(root, 'mouseleave', mouseLeave);
        }
        if (options.stopOnFocusIn) {
            emblaApi.on('slideFocusStart', stopAutoplay);
        }
        if (options.stopOnFocusIn && !options.stopOnInteraction) {
            eventStore.add(emblaApi.containerNode(), 'focusout', startAutoplay);
        }
        if (options.playOnInit) startAutoplay();
    }
    function destroy() {
        emblaApi.off('pointerDown', pointerDown).off('pointerUp', pointerUp).off('slideFocusStart', stopAutoplay);
        stopAutoplay();
        destroyed = true;
        autoplayActive = false;
    }
    function setTimer() {
        const { ownerWindow } = emblaApi.internalEngine();
        ownerWindow.clearTimeout(timerId);
        timerId = ownerWindow.setTimeout(next, delay[emblaApi.selectedScrollSnap()]);
        timerStartTime = new Date().getTime();
        emblaApi.emit('autoplay:timerset');
    }
    function clearTimer() {
        const { ownerWindow } = emblaApi.internalEngine();
        ownerWindow.clearTimeout(timerId);
        timerId = 0;
        timerStartTime = null;
        emblaApi.emit('autoplay:timerstopped');
    }
    function startAutoplay() {
        if (destroyed) return;
        if (documentIsHidden()) {
            playOnDocumentVisible = true;
            return;
        }
        if (!autoplayActive) emblaApi.emit('autoplay:play');
        setTimer();
        autoplayActive = true;
    }
    function stopAutoplay() {
        if (destroyed) return;
        if (autoplayActive) emblaApi.emit('autoplay:stop');
        clearTimer();
        autoplayActive = false;
    }
    function visibilityChange() {
        if (documentIsHidden()) {
            playOnDocumentVisible = autoplayActive;
            return stopAutoplay();
        }
        if (playOnDocumentVisible) startAutoplay();
    }
    function documentIsHidden() {
        const { ownerDocument } = emblaApi.internalEngine();
        return ownerDocument.visibilityState === 'hidden';
    }
    function pointerDown() {
        if (!mouseIsOver) stopAutoplay();
    }
    function pointerUp() {
        if (!mouseIsOver) startAutoplay();
    }
    function mouseEnter() {
        mouseIsOver = true;
        stopAutoplay();
    }
    function mouseLeave() {
        mouseIsOver = false;
        startAutoplay();
    }
    function play(jumpOverride) {
        if (typeof jumpOverride !== 'undefined') jump = jumpOverride;
        startAutoplay();
    }
    function stop() {
        if (autoplayActive) stopAutoplay();
    }
    function reset() {
        if (autoplayActive) startAutoplay();
    }
    function isPlaying() {
        return autoplayActive;
    }
    function next() {
        const { index } = emblaApi.internalEngine();
        const nextIndex = index.clone().add(1).get();
        const lastIndex = emblaApi.scrollSnapList().length - 1;
        const kill = options.stopOnLastSnap && nextIndex === lastIndex;
        if (emblaApi.canScrollNext()) {
            emblaApi.scrollNext(jump);
        } else {
            emblaApi.scrollTo(0, jump);
        }
        emblaApi.emit('autoplay:select');
        if (kill) return stopAutoplay();
        startAutoplay();
    }
    function timeUntilNext() {
        if (!timerStartTime) return null;
        const currentDelay = delay[emblaApi.selectedScrollSnap()];
        const timePastSinceStart = new Date().getTime() - timerStartTime;
        return currentDelay - timePastSinceStart;
    }
    const self = {
        name: 'autoplay',
        options: userOptions,
        init,
        destroy,
        play,
        stop,
        reset,
        isPlaying,
        timeUntilNext
    };
    return self;
}
Autoplay.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel-autoplay.esm.js.map
}),
"[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inView",
    ()=>inView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-ssr] (ecmascript)");
;
const thresholds = {
    some: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry.target, entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                } else {
                    observer.unobserve(entry.target);
                }
            } else if (typeof onEnd === "function") {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInView",
    ()=>useInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
    const [isInView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ref.current || once && isInView) return;
        const onEnter = ()=>{
            setInView(true);
            return once ? undefined : ()=>setInView(false);
        };
        const options = {
            root: root && root.current || undefined,
            margin,
            amount
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inView"])(ref.current, onEnter, options);
    }, [
        root,
        ref,
        margin,
        once,
        amount
    ]);
    return isInView;
}
;
 //# sourceMappingURL=use-in-view.mjs.map
}),
"[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animationControls",
    ()=>animationControls,
    "setValues",
    ()=>setValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/motion-dom/dist/es/render/utils/setters.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
;
;
function stopAnimation(visualElement) {
    visualElement.values.forEach((value)=>value.stop());
}
function setVariants(visualElement, variantLabels) {
    const reversedLabels = [
        ...variantLabels
    ].reverse();
    reversedLabels.forEach((key)=>{
        const variant = visualElement.getVariant(key);
        variant && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, variant);
        if (visualElement.variantChildren) {
            visualElement.variantChildren.forEach((child)=>{
                setVariants(child, variantLabels);
            });
        }
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    } else if (typeof definition === "string") {
        return setVariants(visualElement, [
            definition
        ]);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$setters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTarget"])(visualElement, definition);
    }
}
/**
 * @public
 */ function animationControls() {
    /**
     * Track whether the host component has mounted.
     */ let hasMounted = false;
    /**
     * A collection of linked component animation controls.
     */ const subscribers = new Set();
    const controls = {
        subscribe (visualElement) {
            subscribers.add(visualElement);
            return ()=>void subscribers.delete(visualElement);
        },
        start (definition, transitionOverride) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            const animations = [];
            subscribers.forEach((visualElement)=>{
                animations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$interfaces$2f$visual$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animateVisualElement"])(visualElement, definition, {
                    transitionOverride
                }));
            });
            return Promise.all(animations);
        },
        set (definition) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            return subscribers.forEach((visualElement)=>{
                setValues(visualElement, definition);
            });
        },
        stop () {
            subscribers.forEach((visualElement)=>{
                stopAnimation(visualElement);
            });
        },
        mount () {
            hasMounted = true;
            return ()=>{
                hasMounted = false;
                controls.stop();
            };
        }
    };
    return controls;
}
;
 //# sourceMappingURL=animation-controls.mjs.map
}),
"[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimation",
    ()=>useAnimation,
    "useAnimationControls",
    ()=>useAnimationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
/**
 * Creates `LegacyAnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `LegacyAnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */ function useAnimationControls() {
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConstant"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$animation$2d$controls$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationControls"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(controls.mount, []);
    return controls;
}
const useAnimation = useAnimationControls;
;
 //# sourceMappingURL=use-animation.mjs.map
}),
];

//# sourceMappingURL=Official_SbWebsite_c73b0a46._.js.map