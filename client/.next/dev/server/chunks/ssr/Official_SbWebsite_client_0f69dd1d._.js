module.exports = [
"[project]/Official/SbWebsite/client/app/(admin-panel)/admin/login/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"007a492ff3da995ffc6fe884c1385881a8b5ab44e9":"logout","0093505a130eb020414d923ef281b3a68d8db9395b":"getAccessToken","0093eeaec82d36f9ce0e18bbaf55ab38302a61dee1":"getValidAccessToken","00a0956054f22787462293c9475710811f36c761b8":"refreshAccessToken","00b6602d5045231a0692005e424346bcf8883f2dcb":"isAuthenticated","00fc207eddee0f7e5c844abf413057eeb567a2dc06":"getAdminInfo","40d9b2d40016797c5cf1f7686eef478ff12e99b736":"login"},"",""] */ __turbopack_context__.s([
    "getAccessToken",
    ()=>getAccessToken,
    "getAdminInfo",
    ()=>getAdminInfo,
    "getValidAccessToken",
    ()=>getValidAccessToken,
    "isAuthenticated",
    ()=>isAuthenticated,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "refreshAccessToken",
    ()=>refreshAccessToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const API_URL = ("TURBOPACK compile-time value", "http://127.0.0.1:5002") || 'http://localhost:5001';
async function login(formData) {
    const username = formData.get('username');
    const password = formData.get('password');
    if (!username || !password) {
        return {
            error: 'Username and password are required'
        };
    }
    let shouldRedirect = false;
    try {
        const response = await fetch(`${API_URL}/api/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await response.json();
        if (data.success && data.accessToken && data.refreshToken && data.admin) {
            const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
            // Store access token (short-lived, httpOnly)
            cookieStore.set('admin_access_token', data.accessToken, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax',
                maxAge: 60 * 15,
                path: '/'
            });
            // Store refresh token (long-lived, httpOnly)
            cookieStore.set('admin_refresh_token', data.refreshToken, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7,
                path: '/'
            });
            // Store admin info (non-sensitive, for UI)
            cookieStore.set('admin_info', JSON.stringify({
                id: data.admin.id,
                username: data.admin.username,
                role: data.admin.role
            }), {
                httpOnly: false,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7,
                path: '/'
            });
            shouldRedirect = true;
        } else {
            return {
                error: data.error || 'Login failed'
            };
        }
    } catch (error) {
        console.error('Login error:', error);
        return {
            error: 'Unable to connect to server'
        };
    }
    // Redirect outside try-catch to avoid catching redirect "error"
    if (shouldRedirect) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/admin');
    }
    return {
        error: 'Login failed'
    };
}
async function logout() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete('admin_access_token');
    cookieStore.delete('admin_refresh_token');
    cookieStore.delete('admin_info');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/admin/login');
}
async function refreshAccessToken() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const refreshToken = cookieStore.get('admin_refresh_token');
    if (!refreshToken) {
        return null;
    }
    try {
        const response = await fetch(`${API_URL}/api/admin/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                refreshToken: refreshToken.value
            })
        });
        const data = await response.json();
        if (data.success && data.accessToken && data.refreshToken) {
            // Update tokens
            cookieStore.set('admin_access_token', data.accessToken, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax',
                maxAge: 60 * 15,
                path: '/'
            });
            cookieStore.set('admin_refresh_token', data.refreshToken, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7,
                path: '/'
            });
            return data.accessToken;
        }
    } catch (error) {
        console.error('Refresh token error:', error);
    }
    return null;
}
async function getAdminInfo() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const adminInfo = cookieStore.get('admin_info');
    if (adminInfo) {
        try {
            return JSON.parse(adminInfo.value);
        } catch  {
            return null;
        }
    }
    return null;
}
async function getAccessToken() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get('admin_access_token');
    return token?.value || null;
}
async function getValidAccessToken() {
    let accessToken = await getAccessToken();
    // If no access token, try to refresh
    if (!accessToken) {
        accessToken = await refreshAccessToken();
    }
    return accessToken;
}
async function isAuthenticated() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const accessToken = cookieStore.get('admin_access_token');
    const refreshToken = cookieStore.get('admin_refresh_token');
    // Authenticated if we have either token (refresh can get new access token)
    return !!(accessToken || refreshToken);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login,
    logout,
    refreshAccessToken,
    getAdminInfo,
    getAccessToken,
    getValidAccessToken,
    isAuthenticated
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "40d9b2d40016797c5cf1f7686eef478ff12e99b736", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "007a492ff3da995ffc6fe884c1385881a8b5ab44e9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(refreshAccessToken, "00a0956054f22787462293c9475710811f36c761b8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdminInfo, "00fc207eddee0f7e5c844abf413057eeb567a2dc06", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAccessToken, "0093505a130eb020414d923ef281b3a68d8db9395b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getValidAccessToken, "0093eeaec82d36f9ce0e18bbaf55ab38302a61dee1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(isAuthenticated, "00b6602d5045231a0692005e424346bcf8883f2dcb", null);
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
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/(admin-panel)/admin/login/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f28$admin$2d$panel$292f$admin$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/(admin-panel)/admin/login/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/(admin-panel)/admin/login/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007a492ff3da995ffc6fe884c1385881a8b5ab44e9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f28$admin$2d$panel$292f$admin$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "009a27f21d06ce601c3db390f830955a0d52ae1e4c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedAboutContent"],
    "00fb3d8c0f57b0831852eb6a04e1493af194a3af2e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAboutContent"],
    "405e078970def27525c7f2416c1e68e231e4e9d6ee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAboutContent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$2d$panel$292f$admin$2f$about$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f28$admin$2d$panel$292f$admin$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/about/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/login/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f28$admin$2d$panel$292f$admin$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/(admin-panel)/admin/login/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Official_SbWebsite_client_0f69dd1d._.js.map