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
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/campaigns/stats/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/(admin-panel)/admin/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f28$admin$2d$panel$292f$admin$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/(admin-panel)/admin/login/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/campaigns/stats/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/(admin-panel)/admin/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007a492ff3da995ffc6fe884c1385881a8b5ab44e9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f28$admin$2d$panel$292f$admin$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$2d$panel$292f$admin$2f$campaigns$2f$stats$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f28$admin$2d$panel$292f$admin$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/campaigns/stats/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/login/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f28$admin$2d$panel$292f$admin$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/(admin-panel)/admin/login/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Official_SbWebsite_client_3afec082._.js.map