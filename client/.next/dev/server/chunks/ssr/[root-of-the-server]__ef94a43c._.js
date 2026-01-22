module.exports = [
"[project]/Official/SbWebsite/client/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/client/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
let cached = global.mongoose || {
    conn: null,
    promise: null
};
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function connectToDatabase() {
    if (!MONGODB_URI) {
        // Return mock connection or throw error depending on strictness.
        // For now, we'll log a warning if it's missing but return null to prevent app crash if just building UI.
        console.warn('MONGODB_URI is not defined in environment variables. Database operations will fail.');
        return null;
    }
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = connectToDatabase;
}),
"[project]/Official/SbWebsite/client/models/Banner.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/client/node_modules/mongoose)");
;
const BannerSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["Schema"]({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    subtitle: {
        type: String
    },
    mediaType: {
        type: String,
        enum: [
            'image',
            'video'
        ],
        default: 'image'
    },
    imageUrl: {
        type: String
    },
    videoUrl: {
        type: String
    },
    thumbnailUrl: {
        type: String
    },
    ctaText: {
        type: String
    },
    ctaLink: {
        type: String
    },
    location: {
        type: String,
        enum: [
            'home',
            'benevity'
        ],
        default: 'home'
    },
    priority: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    startDate: {
        type: Date,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    showOnFirstFace: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
const Banner = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["models"].Banner || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["model"])('Banner', BannerSchema);
const __TURBOPACK__default__export__ = Banner;
}),
"[project]/Official/SbWebsite/client/app/actions/banner.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00466589239efd0a3cbf165bf63925cd5f8c851bd4":"seedBenevityBanners","40d61f42768c0b6e00960d54d27739190d1c3a43b0":"deleteBanner","40f6ba3dddb8e52b6f8bc01b8bbadc68f2eeb42081":"getBanners","40fd4c7ba1d56754a455a081d7e9b070cbdcb7041c":"createBanner","6017c0c14e570d4b0422e2cb988f9d0ef2f75a27c7":"updateBanner"},"",""] */ __turbopack_context__.s([
    "createBanner",
    ()=>createBanner,
    "deleteBanner",
    ()=>deleteBanner,
    "getBanners",
    ()=>getBanners,
    "seedBenevityBanners",
    ()=>seedBenevityBanners,
    "updateBanner",
    ()=>updateBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$Banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/models/Banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const API_URL = ("TURBOPACK compile-time value", "http://127.0.0.1:5001") || 'http://127.0.0.1:5001';
async function getBanners(location) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        const filter = {};
        if (location) {
            if (location === 'home') {
                // For backward compatibility, include banners with no location set
                filter.$or = [
                    {
                        location: 'home'
                    },
                    {
                        location: {
                            $exists: false
                        }
                    }
                ];
            } else {
                filter.location = location;
            }
        } else {
        // If no location specified, maybe fetch all? Or default to home?
        // Let's keep it as "fetch all" if no location provided, as it was before.
        }
        const banners = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$Banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find(filter).sort({
            order: 1
        }).lean();
        return JSON.parse(JSON.stringify(banners));
    } catch (error) {
        console.error("Failed to fetch banners", error);
        return [];
    }
}
async function createBanner(data) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        // Set default location if not provided
        if (!data.location) data.location = 'home';
        const banner = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$Banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(data);
        return JSON.parse(JSON.stringify(banner));
    } catch (error) {
        console.error("Failed to create banner", error);
        throw error;
    }
}
async function updateBanner(id, data) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        const banner = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$Banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data, {
            new: true
        });
        return JSON.parse(JSON.stringify(banner));
    } catch (error) {
        console.error("Failed to update banner", error);
        throw error;
    }
}
async function deleteBanner(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$Banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to delete banner", error);
        throw error;
    }
}
async function seedBenevityBanners() {
    try {
        // Replace localhost with 127.0.0.1 to avoid Node v17+ resolution issues
        const safeUrl = API_URL.replace('localhost', '127.0.0.1');
        const response = await fetch(`${safeUrl}/api/benevity/banners/seed`, {
            method: 'POST',
            cache: 'no-store'
        });
        if (!response.ok) {
            const text = await response.text();
            console.error('Seed Error Response:', response.status, text, response.headers);
            return {
                success: false,
                error: `Backend returned ${response.status}: ${text}`
            };
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error seeding banners:', error);
        return {
            success: false,
            error: 'Failed to connect to backend'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getBanners,
    createBanner,
    updateBanner,
    deleteBanner,
    seedBenevityBanners
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBanners, "40f6ba3dddb8e52b6f8bc01b8bbadc68f2eeb42081", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBanner, "40fd4c7ba1d56754a455a081d7e9b070cbdcb7041c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBanner, "6017c0c14e570d4b0422e2cb988f9d0ef2f75a27c7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBanner, "40d61f42768c0b6e00960d54d27739190d1c3a43b0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(seedBenevityBanners, "00466589239efd0a3cbf165bf63925cd5f8c851bd4", null);
}),
"[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"002cf5760abf88aa6b8fc73cd6cab4cd79ee331411":"getServices","40fcfeff4042241a1dd07c2ab0bfc2a4695a1bd6fa":"getServiceBySlug"},"",""] */ __turbopack_context__.s([
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "getServices",
    ()=>getServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
const API_URL = 'http://127.0.0.1:5001';
async function getServices() {
    try {
        console.log(`Fetching services from: ${API_URL}/api/services`);
        const response = await fetch(`${API_URL}/api/services`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            console.error(`getServices: Fetch failed with status: ${response.status}`);
            throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        console.log(`getServices: Fetched ${data.services?.length} services`);
        return data.services || [];
    } catch (error) {
        console.error("Failed to fetch services", error);
    }
}
async function getServiceBySlug(slug) {
    try {
        const response = await fetch(`${API_URL}/api/services/slug/${slug}`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            console.error(`getServiceBySlug: Fetch failed with status: ${response.status}`);
            return null;
        }
        const data = await response.json();
        return data.service;
    } catch (error) {
        console.error("Failed to fetch service by slug", error);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getServices,
    getServiceBySlug
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServices, "002cf5760abf88aa6b8fc73cd6cab4cd79ee331411", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServiceBySlug, "40fcfeff4042241a1dd07c2ab0bfc2a4695a1bd6fa", null);
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/banner.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/banner.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "002cf5760abf88aa6b8fc73cd6cab4cd79ee331411",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServices"],
    "00466589239efd0a3cbf165bf63925cd5f8c851bd4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedBenevityBanners"],
    "40d61f42768c0b6e00960d54d27739190d1c3a43b0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBanner"],
    "40f6ba3dddb8e52b6f8bc01b8bbadc68f2eeb42081",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBanners"],
    "40fcfeff4042241a1dd07c2ab0bfc2a4695a1bd6fa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"],
    "40fd4c7ba1d56754a455a081d7e9b070cbdcb7041c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBanner"],
    "6017c0c14e570d4b0422e2cb988f9d0ef2f75a27c7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBanner"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/banner.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)");
}),
"[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/Official/SbWebsite/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/client/node_modules/mongoose)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose-652d8ab43b4c14f9", () => require("mongoose-652d8ab43b4c14f9"));

module.exports = mod;
}),
"[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef94a43c._.js.map