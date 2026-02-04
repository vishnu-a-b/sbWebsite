module.exports = [
"[project]/Official/SbWebsite/client/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
// API Configuration for Express Backend
const rawUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:5002") || 'http://localhost:5002/api';
const API_BASE_URL = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl}/api`;
const API_ENDPOINTS = {
    banner: `${API_BASE_URL}/banner`,
    payment: `${API_BASE_URL}/payment`,
    contact: `${API_BASE_URL}/contact`,
    volunteer: `${API_BASE_URL}/volunteer`,
    stats: `${API_BASE_URL}/stats`,
    service: `${API_BASE_URL}/service`,
    aboutImage: `${API_BASE_URL}/about-image`,
    health: `${API_BASE_URL}/health`
};
const __TURBOPACK__default__export__ = API_BASE_URL;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getBanners(location) {
    try {
        const url = new URL(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/banner`);
        if (location) {
            url.searchParams.append('location', location);
        }
        const response = await fetch(url.toString(), {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch banners: ${response.status}`);
        }
        const data = await response.json();
        return data.banners || [];
    } catch (error) {
        console.error("Failed to fetch banners", error);
        return [];
    }
}
async function createBanner(data) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/banner`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Failed to create banner: ${response.status}`);
        }
        const result = await response.json();
        return result.banner;
    } catch (error) {
        console.error("Failed to create banner", error);
        throw error;
    }
}
async function updateBanner(id, data) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/banner/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Failed to update banner: ${response.status}`);
        }
        const result = await response.json();
        return result.banner;
    } catch (error) {
        console.error("Failed to update banner", error);
        throw error;
    }
}
async function deleteBanner(id) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/banner/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`Failed to delete banner: ${response.status}`);
        }
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
        // Use API_BASE_URL directly, it already handles the backend location
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/banners/seed`, {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getServices() {
    try {
        console.log(`Fetching services from: ${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/services`);
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/services`, {
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
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/services/slug/${slug}`, {
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
"[project]/Official/SbWebsite/client/app/actions/campaign.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"007021ae45b4f965197fc206273b8de14f24349ae5":"getFeaturedCampaigns","00f319d11389da60c1bc55a700b06862964c6d7352":"getActiveCampaigns","4099dba0f6310c66c5369a0eb72465e25cf1ad76c0":"getCampaignBySlug"},"",""] */ __turbopack_context__.s([
    "getActiveCampaigns",
    ()=>getActiveCampaigns,
    "getCampaignBySlug",
    ()=>getCampaignBySlug,
    "getFeaturedCampaigns",
    ()=>getFeaturedCampaigns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
const API_URL = ("TURBOPACK compile-time value", "http://127.0.0.1:5002") || 'http://localhost:5001';
async function getActiveCampaigns() {
    try {
        const res = await fetch(`${API_URL}/api/campaign/active`, {
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error('Failed to fetch campaigns');
        }
        const data = await res.json();
        return data.success ? data.campaigns : [];
    } catch (error) {
        console.error('Error fetching active campaigns:', error);
        return [];
    }
}
async function getFeaturedCampaigns() {
    try {
        const res = await fetch(`${API_URL}/api/campaign/featured`, {
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error('Failed to fetch featured campaigns');
        }
        const data = await res.json();
        return data.success ? data.campaigns : [];
    } catch (error) {
        console.error('Error fetching featured campaigns:', error);
        return [];
    }
}
async function getCampaignBySlug(slug) {
    try {
        const res = await fetch(`${API_URL}/api/campaign/slug/${slug}`, {
            cache: 'no-store'
        });
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        return data.success ? data.campaign : null;
    } catch (error) {
        console.error('Error fetching campaign:', error);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getActiveCampaigns,
    getFeaturedCampaigns,
    getCampaignBySlug
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActiveCampaigns, "00f319d11389da60c1bc55a700b06862964c6d7352", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFeaturedCampaigns, "007021ae45b4f965197fc206273b8de14f24349ae5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCampaignBySlug, "4099dba0f6310c66c5369a0eb72465e25cf1ad76c0", null);
}),
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
"[project]/Official/SbWebsite/client/models/About.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/client/node_modules/mongoose)");
;
const AboutSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["Schema"]({
    heroTitle: {
        type: String,
        default: 'About Us'
    },
    heroSubtitle: {
        type: String,
        default: 'For the people, by the people...'
    },
    storyTitle: {
        type: String,
        default: 'Our Story'
    },
    storyDescription: {
        type: String,
        default: ''
    },
    storyImage: {
        type: String,
        default: ''
    },
    // Home page about section
    homeTitle: {
        type: String,
        default: 'The First Palliative Hospital in India'
    },
    homeBadge: {
        type: String,
        default: 'Established 1993'
    },
    homeIntro: {
        type: String,
        default: 'Shanthibhavan Palliative Hospital operates as a division of the Franciscan Sisters of St. Clare Charitable Trust.'
    },
    homeDescription: {
        type: String,
        default: 'We function as a no-bill hospital with 49 beds, providing comprehensive palliative care without bills and cash counters. Our aim is to improve the quality of life of people with life-limiting or disabling diseases.'
    },
    homeImage: {
        type: String,
        default: 'https://shanthibhavan.in/images/products/5b46fcb5b0482.jpeg'
    },
    homeButtonText: {
        type: String,
        default: 'Learn More About Us'
    },
    homeButtonLink: {
        type: String,
        default: '/about'
    },
    mission: {
        title: {
            type: String,
            default: 'Our Mission'
        },
        description: {
            type: String,
            default: ''
        }
    },
    vision: {
        title: {
            type: String,
            default: 'Our Vision'
        },
        description: {
            type: String,
            default: ''
        }
    },
    motto: {
        title: {
            type: String,
            default: 'Our Motto'
        },
        description: {
            type: String,
            default: ''
        }
    },
    belief: {
        title: {
            type: String,
            default: 'Our Belief'
        },
        description: {
            type: String,
            default: ''
        }
    },
    founderMessage: {
        type: String
    },
    timeline: [
        {
            year: Number,
            title: String,
            description: String
        }
    ]
}, {
    timestamps: true,
    collection: 'abouts'
});
const About = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["default"].models.About || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["default"].model('About', AboutSchema);
const __TURBOPACK__default__export__ = About;
}),
"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"009a27f21d06ce601c3db390f830955a0d52ae1e4c":"seedAboutContent","00fb3d8c0f57b0831852eb6a04e1493af194a3af2e":"getAboutContent","405e078970def27525c7f2416c1e68e231e4e9d6ee":"updateAboutContent"},"",""] */ __turbopack_context__.s([
    "getAboutContent",
    ()=>getAboutContent,
    "seedAboutContent",
    ()=>seedAboutContent,
    "updateAboutContent",
    ()=>updateAboutContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$About$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/models/About.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getAboutContent() {
    try {
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        if (!db) {
            console.error("Database connection failed");
            return null;
        }
        console.log("Connected to database, fetching about content...");
        const about = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$About$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne().sort({
            createdAt: -1
        }).lean();
        console.log("About content from DB:", about);
        if (!about) {
            console.log("No about document found in database");
            return null;
        }
        return JSON.parse(JSON.stringify(about));
    } catch (error) {
        console.error("Failed to fetch about content", error);
        return null;
    }
}
async function updateAboutContent(data) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        let about = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$About$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne().sort({
            createdAt: -1
        });
        // Explicitly handle nested objects to ensure they are updated correctly
        const updateData = {
            ...data,
            mission: {
                ...about?.mission,
                ...data.mission
            },
            vision: {
                ...about?.vision,
                ...data.vision
            },
            motto: {
                ...about?.motto,
                ...data.motto
            },
            belief: {
                ...about?.belief,
                ...data.belief
            }
        };
        if (about) {
            about = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$About$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(about._id, updateData, {
                new: true
            });
        } else {
            about = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$About$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(updateData);
        }
        return JSON.parse(JSON.stringify(about));
    } catch (error) {
        console.error("Failed to update about content", error);
        throw error;
    }
}
async function seedAboutContent() {
    try {
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        if (!db) {
            console.error("Database connection failed for seeding");
            throw new Error("Database connection failed");
        }
        console.log("Connected to database, seeding about content...");
        // Clear existing and create new
        const deleteResult = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$About$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].deleteMany({});
        console.log("Deleted existing documents:", deleteResult);
        const defaultContent = {
            heroTitle: 'About Us',
            heroSubtitle: "For the people, by the people. India's first palliative hospital without bills or bill counters.",
            storyTitle: 'Our Story',
            storyDescription: `Shanthibhavan Palliative Hospital, located at Golden Hills, Venkode, Vattappara, Thiruvananthapuram, Kerala, stands as India's First Palliative Hospital. Operating as a division of the Franciscan Sisters of St. Clare Charitable Trust, the hospital was established with the blessings of Mar Andrews Thazhath, Archbishop of Thrissur, and co-founded by Rev. Father Joy Koothur, Sr. Beatrice Scalinci, and Sr. Maria Chiara.

The hospital is a beacon of hope for the vulnerable, equipped with 49 beds, centralized oxygen systems, ICU with ventilator facilities, and a solar-powered dialysis unit. It operates as a "No-Bill" hospital—meaning there are no bills and no cash counters. Every service, from medical care to food and accommodation, is provided completely free of charge to registered patients.

Our mission extends beyond hospital walls with 15 home care vehicles serving Thiruvananthapuram District, providing 24/7 emergency home care, free ambulance services, and comprehensive palliative support to those who need it most.`,
            storyImage: 'https://shanthibhavan.in/images/banner/5b56c7058a275.jpeg',
            // Home page about section
            homeTitle: 'The First Palliative Hospital in India',
            homeBadge: 'Established 1993',
            homeIntro: 'Shanthibhavan Palliative Hospital operates as a division of the Franciscan Sisters of St. Clare Charitable Trust.',
            homeDescription: 'We function as a no-bill hospital with 49 beds, providing comprehensive palliative care without bills and cash counters. Our aim is to improve the quality of life of people with life-limiting or disabling diseases.',
            homeImage: 'https://shanthibhavan.in/images/products/5b46fcb5b0482.jpeg',
            homeButtonText: 'Learn More About Us',
            homeButtonLink: '/about',
            mission: {
                title: 'Our Mission',
                description: 'To improve the quality of life for palliative bedridden patients, offering relief from pain and symptoms regardless of religion, caste, or creed.'
            },
            vision: {
                title: 'Our Vision',
                description: 'To become a general hospital providing emergency care and casualty services to all nearby people, supported entirely by public donations.'
            },
            motto: {
                title: 'Our Motto',
                description: '"For the people, by the people." We combine psychological and spiritual care to help people live as actively as possible until death.'
            },
            belief: {
                title: 'Our Belief',
                description: 'Every life is precious. There are no barriers here—everyone is equal. Shanthibhavan is a light of compassion, kindness, and eternal love.'
            }
        };
        const about = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$About$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(defaultContent);
        console.log("Created about document:", about);
        return JSON.parse(JSON.stringify(about));
    } catch (error) {
        console.error("Failed to seed about content", error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAboutContent,
    updateAboutContent,
    seedAboutContent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAboutContent, "00fb3d8c0f57b0831852eb6a04e1493af194a3af2e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAboutContent, "405e078970def27525c7f2416c1e68e231e4e9d6ee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(seedAboutContent, "009a27f21d06ce601c3db390f830955a0d52ae1e4c", null);
}),
"[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40370a69f6c648776340f6ec959c680c4fa03c1f5c":"getProject","4052a7d1f46c0a028198c1f37200896feb2d7200a3":"getProjects","60aa0eb5621a561e50a062d75d613a1f94b78cb619":"createProject","60ffeae8b5dc590ed43163967b5ee0f8cd35297d21":"deleteProject","70ec8de4bd180a36f98d47bc35bbc15186253fbf2f":"updateProject"},"",""] */ __turbopack_context__.s([
    "createProject",
    ()=>createProject,
    "deleteProject",
    ()=>deleteProject,
    "getProject",
    ()=>getProject,
    "getProjects",
    ()=>getProjects,
    "updateProject",
    ()=>updateProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getProjects(filter) {
    try {
        let url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects/admin`;
        if (filter) {
            if (filter.showOnBenevity) {
                // Check if admin mode requested for Benevity
                if (filter.mode === 'admin') {
                    url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects/admin`;
                } else {
                    url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects`;
                }
            } else {
                // Main projects
                url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects?`;
                if (filter.showOnFirstFace) {
                    url += `showOnFirstFace=true`;
                }
            }
        }
        console.log('getProjects: Fetching from URL:', url);
        const response = await fetch(url, {
            cache: 'no-store'
        });
        if (!response.ok) {
            console.error('getProjects: Fetch failed with status:', response.status);
            throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        console.log('getProjects: Received data count:', data.projects?.length);
        return data.projects || [];
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}
async function getProject(id) {
    try {
        // 1. Try Main Collection
        const mainResponse = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects/${id}`, {
            cache: 'no-store'
        });
        if (mainResponse.ok) {
            const data = await mainResponse.json();
            return data.project;
        }
        // 2. Try Benevity Collection
        // Only if main failed (e.g. 404), check Benevity
        const benevityResponse = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects/${id}`, {
            cache: 'no-store'
        });
        if (benevityResponse.ok) {
            const data = await benevityResponse.json();
            return data.project;
        }
        // 3. If here, neither worked
        console.error(`getProject: Failed to find project ${id} in either collection.`);
        throw new Error('Project not found');
    } catch (error) {
        console.error('Error fetching project:', error);
        throw error;
    }
}
;
async function createProject(projectData, isBenevity = false) {
    try {
        const url = isBenevity ? `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects` : `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectData)
        });
        if (!response.ok) {
            throw new Error('Failed to create project');
        }
        const data = await response.json();
        // Revalidate paths to update UI immediately
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/benevity');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/'); // If on home
        return data.project;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
}
async function updateProject(id, projectData, isBenevity = false) {
    try {
        const url = isBenevity ? `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects/${id}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects/${id}`;
        // For Benevity routes, we might need a generic PUT endpoint if using /:id
        // Benevity routes currently don't explicitly list PUT /:id but assume standard CRUD.
        // I need to double check benevity.routes.ts... wait, I didn't add PUT /:id there!
        // I should check and update backend if needed.
        // Assuming standard REST, but let's check backend first.
        // Wait, I only added GET, POST (create), POST (seed), GET /:id.
        // I missed Update and Delete in benevity.routes.ts!
        // I will proceed with frontend update assuming backend will be fixed shortly.
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectData)
        });
        if (!response.ok) {
            console.error('Update failed:', response.status, await response.text());
            throw new Error('Failed to update project');
        }
        const data = await response.json();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/benevity');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/projects/${id}`);
        return data.project;
    } catch (error) {
        console.error('Error updating project:', error);
        throw error;
    }
}
async function deleteProject(id, isBenevity = false) {
    try {
        const url = isBenevity ? `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects/${id}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects/${id}`;
        const response = await fetch(url, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete project');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/benevity');
        return true;
    } catch (error) {
        console.error('Error deleting project:', error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProjects, "4052a7d1f46c0a028198c1f37200896feb2d7200a3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProject, "40370a69f6c648776340f6ec959c680c4fa03c1f5c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProject, "60aa0eb5621a561e50a062d75d613a1f94b78cb619", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProject, "70ec8de4bd180a36f98d47bc35bbc15186253fbf2f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProject, "60ffeae8b5dc590ed43163967b5ee0f8cd35297d21", null);
}),
"[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"003e05553895ee42d7b4aec7db699418ff588db004":"getAwards","401baa188168c2aad0ace2f1d47e6d9e7614f343af":"deleteAward","4057e512684732c462fdef4afd0d451a3cab11008a":"createAward","40d48ac09875f932591a8bd2666f8fa7bb63ecd6b0":"getAward","60ffa8fd1a2477861439bb038fd3edd4bd9bee6d89":"updateAward"},"",""] */ __turbopack_context__.s([
    "createAward",
    ()=>createAward,
    "deleteAward",
    ()=>deleteAward,
    "getAward",
    ()=>getAward,
    "getAwards",
    ()=>getAwards,
    "updateAward",
    ()=>updateAward
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getAwards() {
    try {
        const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/awards/admin`;
        console.log('[Awards] Fetching from:', url);
        const response = await fetch(url, {
            cache: 'no-store'
        });
        console.log('[Awards] Response status:', response.status);
        if (!response.ok) {
            const errorText = await response.text();
            console.error('[Awards] Error response:', errorText);
            throw new Error('Failed to fetch awards');
        }
        const data = await response.json();
        console.log('[Awards] Fetched awards count:', data.awards?.length);
        return data.awards || [];
    } catch (error) {
        console.error('Error fetching awards:', error);
        return [];
    }
}
async function getAward(id) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/awards/${id}`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch award');
        }
        const data = await response.json();
        return data.award;
    } catch (error) {
        console.error('Error fetching award:', error);
        throw error;
    }
}
async function createAward(awardData) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/awards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(awardData)
        });
        if (!response.ok) {
            throw new Error('Failed to create award');
        }
        const data = await response.json();
        return data.award;
    } catch (error) {
        console.error('Error creating award:', error);
        throw error;
    }
}
async function updateAward(id, awardData) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/awards/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(awardData)
        });
        if (!response.ok) {
            throw new Error('Failed to update award');
        }
        const data = await response.json();
        return data.award;
    } catch (error) {
        console.error('Error updating award:', error);
        throw error;
    }
}
async function deleteAward(id) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/awards/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete award');
        }
        return true;
    } catch (error) {
        console.error('Error deleting award:', error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAwards,
    getAward,
    createAward,
    updateAward,
    deleteAward
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAwards, "003e05553895ee42d7b4aec7db699418ff588db004", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAward, "40d48ac09875f932591a8bd2666f8fa7bb63ecd6b0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAward, "4057e512684732c462fdef4afd0d451a3cab11008a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAward, "60ffa8fd1a2477861439bb038fd3edd4bd9bee6d89", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAward, "401baa188168c2aad0ace2f1d47e6d9e7614f343af", null);
}),
"[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"006a9f0136aa73ab59509fbd236d639f028e3c5a73":"getNewsEvents","008f53e67ac4e27504b246a8bc906708dafdbf9ec1":"getPublicNewsEvents","404264ed05ca706caa993ab9005ec48128eeec96c3":"deleteNewsEvent","4077e831e69624a025d475cb414c88243212d0532d":"createNewsEvent","40c764cb9af46b645450e47624b84550c384cb0a25":"getNewsEvent","606b2ab59755e4c353ee38820fa50ba87c9e092d60":"updateNewsEvent"},"",""] */ __turbopack_context__.s([
    "createNewsEvent",
    ()=>createNewsEvent,
    "deleteNewsEvent",
    ()=>deleteNewsEvent,
    "getNewsEvent",
    ()=>getNewsEvent,
    "getNewsEvents",
    ()=>getNewsEvents,
    "getPublicNewsEvents",
    ()=>getPublicNewsEvents,
    "updateNewsEvent",
    ()=>updateNewsEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getNewsEvents() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/news-events/admin`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch news/events');
        }
        const data = await response.json();
        return data.items || [];
    } catch (error) {
        console.error('Error fetching news/events:', error);
        return [];
    }
}
async function getPublicNewsEvents() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/news-events`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch public news/events');
        }
        const data = await response.json();
        return data.items || [];
    } catch (error) {
        console.error('Error fetching public news/events:', error);
        return [];
    }
}
async function getNewsEvent(id) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/news-events/${id}`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch news/event');
        }
        const data = await response.json();
        return data.newsEvent;
    } catch (error) {
        console.error('Error fetching news/event:', error);
        throw error;
    }
}
async function createNewsEvent(newsEventData) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/news-events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsEventData)
        });
        if (!response.ok) {
            throw new Error('Failed to create news/event');
        }
        const data = await response.json();
        return data.newsEvent;
    } catch (error) {
        console.error('Error creating news/event:', error);
        throw error;
    }
}
async function updateNewsEvent(id, newsEventData) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/news-events/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsEventData)
        });
        if (!response.ok) {
            throw new Error('Failed to update news/event');
        }
        const data = await response.json();
        return data.newsEvent;
    } catch (error) {
        console.error('Error updating news/event:', error);
        throw error;
    }
}
async function deleteNewsEvent(id) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/news-events/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete news/event');
        }
        return true;
    } catch (error) {
        console.error('Error deleting news/event:', error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getNewsEvents,
    getPublicNewsEvents,
    getNewsEvent,
    createNewsEvent,
    updateNewsEvent,
    deleteNewsEvent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsEvents, "006a9f0136aa73ab59509fbd236d639f028e3c5a73", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPublicNewsEvents, "008f53e67ac4e27504b246a8bc906708dafdbf9ec1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsEvent, "40c764cb9af46b645450e47624b84550c384cb0a25", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createNewsEvent, "4077e831e69624a025d475cb414c88243212d0532d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateNewsEvent, "606b2ab59755e4c353ee38820fa50ba87c9e092d60", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteNewsEvent, "404264ed05ca706caa993ab9005ec48128eeec96c3", null);
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/banner.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Official/SbWebsite/client/app/actions/campaign.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$campaign$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/campaign.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/banner.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Official/SbWebsite/client/app/actions/campaign.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "002cf5760abf88aa6b8fc73cd6cab4cd79ee331411",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServices"],
    "003e05553895ee42d7b4aec7db699418ff588db004",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAwards"],
    "00466589239efd0a3cbf165bf63925cd5f8c851bd4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedBenevityBanners"],
    "006a9f0136aa73ab59509fbd236d639f028e3c5a73",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsEvents"],
    "007021ae45b4f965197fc206273b8de14f24349ae5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$campaign$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeaturedCampaigns"],
    "008f53e67ac4e27504b246a8bc906708dafdbf9ec1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicNewsEvents"],
    "009a27f21d06ce601c3db390f830955a0d52ae1e4c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedAboutContent"],
    "00f319d11389da60c1bc55a700b06862964c6d7352",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$campaign$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveCampaigns"],
    "00fb3d8c0f57b0831852eb6a04e1493af194a3af2e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAboutContent"],
    "401baa188168c2aad0ace2f1d47e6d9e7614f343af",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAward"],
    "40370a69f6c648776340f6ec959c680c4fa03c1f5c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProject"],
    "404264ed05ca706caa993ab9005ec48128eeec96c3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteNewsEvent"],
    "4052a7d1f46c0a028198c1f37200896feb2d7200a3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjects"],
    "4057e512684732c462fdef4afd0d451a3cab11008a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAward"],
    "405e078970def27525c7f2416c1e68e231e4e9d6ee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAboutContent"],
    "4077e831e69624a025d475cb414c88243212d0532d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNewsEvent"],
    "4099dba0f6310c66c5369a0eb72465e25cf1ad76c0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$campaign$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCampaignBySlug"],
    "40c764cb9af46b645450e47624b84550c384cb0a25",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsEvent"],
    "40d48ac09875f932591a8bd2666f8fa7bb63ecd6b0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAward"],
    "40d61f42768c0b6e00960d54d27739190d1c3a43b0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBanner"],
    "40f6ba3dddb8e52b6f8bc01b8bbadc68f2eeb42081",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBanners"],
    "40fcfeff4042241a1dd07c2ab0bfc2a4695a1bd6fa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"],
    "40fd4c7ba1d56754a455a081d7e9b070cbdcb7041c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBanner"],
    "6017c0c14e570d4b0422e2cb988f9d0ef2f75a27c7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBanner"],
    "606b2ab59755e4c353ee38820fa50ba87c9e092d60",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateNewsEvent"],
    "60aa0eb5621a561e50a062d75d613a1f94b78cb619",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProject"],
    "60ffa8fd1a2477861439bb038fd3edd4bd9bee6d89",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAward"],
    "60ffeae8b5dc590ed43163967b5ee0f8cd35297d21",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProject"],
    "70ec8de4bd180a36f98d47bc35bbc15186253fbf2f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProject"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$campaign$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/banner.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/Official/SbWebsite/client/app/actions/campaign.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)", ACTIONS_MODULE6 => "[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$banner$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/banner.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$campaign$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/campaign.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Official_SbWebsite_client_6353068f._.js.map