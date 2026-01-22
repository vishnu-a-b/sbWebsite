module.exports = [
"[project]/Official/SbWebsite/client/app/actions/cms/services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000f6ff215375ea012486aaab7477e2c134e559196":"getServices","400e23df7f37cadf65e63a3919ac57755af7656e5b":"getService","4093ed66d4c1e910b8a91e989bfec75a58cf5dcaa6":"deleteService","40bf9c8d98f5cba8db79d2a59d31f27249d170dcea":"createService","6021a9c50c732562705844633b9dac0b23684148e7":"updateService"},"",""] */ __turbopack_context__.s([
    "createService",
    ()=>createService,
    "deleteService",
    ()=>deleteService,
    "getService",
    ()=>getService,
    "getServices",
    ()=>getServices,
    "updateService",
    ()=>updateService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api") || 'http://localhost:5001';
async function getServices() {
    try {
        const response = await fetch(`${API_URL}/api/services/admin`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        return data.services || [];
    } catch (error) {
        console.error('Error fetching services:', error);
        return [];
    }
}
async function getService(id) {
    try {
        const response = await fetch(`${API_URL}/api/services/${id}`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch service');
        }
        const data = await response.json();
        return data.service;
    } catch (error) {
        console.error('Error fetching service:', error);
        throw error;
    }
}
async function createService(serviceData) {
    try {
        const response = await fetch(`${API_URL}/api/services`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        });
        if (!response.ok) {
            throw new Error('Failed to create service');
        }
        const data = await response.json();
        return data.service;
    } catch (error) {
        console.error('Error creating service:', error);
        throw error;
    }
}
async function updateService(id, serviceData) {
    try {
        const response = await fetch(`${API_URL}/api/services/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        });
        if (!response.ok) {
            throw new Error('Failed to update service');
        }
        const data = await response.json();
        return data.service;
    } catch (error) {
        console.error('Error updating service:', error);
        throw error;
    }
}
async function deleteService(id) {
    try {
        const response = await fetch(`${API_URL}/api/services/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete service');
        }
        return true;
    } catch (error) {
        console.error('Error deleting service:', error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getServices,
    getService,
    createService,
    updateService,
    deleteService
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServices, "000f6ff215375ea012486aaab7477e2c134e559196", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getService, "400e23df7f37cadf65e63a3919ac57755af7656e5b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createService, "40bf9c8d98f5cba8db79d2a59d31f27249d170dcea", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateService, "6021a9c50c732562705844633b9dac0b23684148e7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteService, "4093ed66d4c1e910b8a91e989bfec75a58cf5dcaa6", null);
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
"[project]/Official/SbWebsite/client/models/ServicesPage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/client/node_modules/mongoose)");
;
const ServicesPageSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["Schema"]({
    heroTitle: {
        type: String,
        default: 'Our Services'
    },
    heroSubtitle: {
        type: String,
        default: ''
    },
    helperTitle: {
        type: String,
        default: 'No Barriers to Care'
    },
    helperDescription: {
        type: String,
        default: ''
    },
    ctaButtonText: {
        type: String,
        default: 'Contact Us'
    },
    ctaLink: {
        type: String,
        default: '/contact'
    },
    ctaTitle: {
        type: String
    },
    ctaDescription: {
        type: String
    },
    metadata: {
        seoTitle: {
            type: String,
            default: 'Services'
        },
        seoDescription: {
            type: String,
            default: ''
        }
    }
}, {
    timestamps: true
});
const ServicesPage = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["default"].models.ServicesPage || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["default"].model('ServicesPage', ServicesPageSchema);
const __TURBOPACK__default__export__ = ServicesPage;
}),
"[project]/Official/SbWebsite/client/app/actions/servicesPage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00348a37997fb0cb1281df8e3dcc8ec68209122254":"getServicesPageContent","4034c5c2ed3289490e5760bb681accd335226edb7c":"updateServicesPageContent"},"",""] */ __turbopack_context__.s([
    "getServicesPageContent",
    ()=>getServicesPageContent,
    "updateServicesPageContent",
    ()=>updateServicesPageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$ServicesPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/models/ServicesPage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getServicesPageContent() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        const content = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$ServicesPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne().sort({
            createdAt: -1
        }).lean();
        if (!content) return null;
        return JSON.parse(JSON.stringify(content));
    } catch (error) {
        console.error("Failed to fetch services page content", error);
        return null;
    }
}
async function updateServicesPageContent(data) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        let content = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$ServicesPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne().sort({
            createdAt: -1
        });
        if (content) {
            content = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$ServicesPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(content._id, data, {
                new: true
            });
        } else {
            content = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$ServicesPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(data);
        }
        return JSON.parse(JSON.stringify(content));
    } catch (error) {
        console.error("Failed to update services page content", error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getServicesPageContent,
    updateServicesPageContent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServicesPageContent, "00348a37997fb0cb1281df8e3dcc8ec68209122254", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateServicesPageContent, "4034c5c2ed3289490e5760bb681accd335226edb7c", null);
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/services/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/cms/services.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/servicesPage.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$servicesPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/servicesPage.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/services/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/cms/services.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/servicesPage.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000f6ff215375ea012486aaab7477e2c134e559196",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServices"],
    "00348a37997fb0cb1281df8e3dcc8ec68209122254",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$servicesPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServicesPageContent"],
    "4034c5c2ed3289490e5760bb681accd335226edb7c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$servicesPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateServicesPageContent"],
    "4093ed66d4c1e910b8a91e989bfec75a58cf5dcaa6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteService"],
    "40bf9c8d98f5cba8db79d2a59d31f27249d170dcea",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createService"],
    "6021a9c50c732562705844633b9dac0b23684148e7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateService"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$2d$panel$292f$admin$2f$services$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$servicesPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/services/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/cms/services.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Official/SbWebsite/client/app/actions/servicesPage.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$servicesPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/servicesPage.ts [app-rsc] (ecmascript)");
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
"[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/client/node_modules/mongoose)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose-652d8ab43b4c14f9", () => require("mongoose-652d8ab43b4c14f9"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6b29dccb._.js.map