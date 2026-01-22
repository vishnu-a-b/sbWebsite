module.exports = [
"[project]/Official/SbWebsite/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/node_modules/mongoose)");
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
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
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
"[project]/Official/SbWebsite/models/Appointment.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/node_modules/mongoose)");
;
const AppointmentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["Schema"]({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    typeOfService: {
        type: String,
        required: true
    },
    preferredDate: {
        type: Date,
        required: true
    },
    message: {
        type: String
    },
    status: {
        type: String,
        enum: [
            'pending',
            'confirmed',
            'completed',
            'cancelled'
        ],
        default: 'pending'
    }
}, {
    timestamps: true
});
const Appointment = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["models"].Appointment || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["model"])('Appointment', AppointmentSchema);
const __TURBOPACK__default__export__ = Appointment;
}),
"[project]/Official/SbWebsite/models/Volunteer.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/node_modules/mongoose)");
;
const VolunteerSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["Schema"]({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'General'
    },
    status: {
        type: String,
        enum: [
            'pending',
            'approved',
            'rejected'
        ],
        default: 'pending'
    }
}, {
    timestamps: true
});
const Volunteer = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["models"].Volunteer || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["model"])('Volunteer', VolunteerSchema);
const __TURBOPACK__default__export__ = Volunteer;
}),
"[project]/Official/SbWebsite/models/Contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/node_modules/mongoose)");
;
const ContactSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["Schema"]({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [
            'new',
            'read',
            'replied'
        ],
        default: 'new'
    }
}, {
    timestamps: true
});
const Contact = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["models"].Contact || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["model"])('Contact', ContactSchema);
const __TURBOPACK__default__export__ = Contact;
}),
"[project]/Official/SbWebsite/app/actions/admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"402f774e49620ec37b02e599bac0b937bcfea3e7ca":"getAdminData"},"",""] */ __turbopack_context__.s([
    "getAdminData",
    ()=>getAdminData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$Appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/models/Appointment.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$Volunteer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/models/Volunteer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$Contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/models/Contact.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function getAdminData(type) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        let data;
        switch(type){
            case 'appointments':
                data = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$Appointment$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).sort({
                    createdAt: -1
                }).lean();
                break;
            case 'volunteers':
                data = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$Volunteer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).sort({
                    createdAt: -1
                }).lean();
                break;
            case 'contacts':
                data = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$Contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).sort({
                    createdAt: -1
                }).lean();
                break;
        }
        // Convert _id and dates to string to be passed to client
        return JSON.parse(JSON.stringify(data));
    } catch (error) {
        console.error("Failed to fetch admin data", error);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAdminData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdminData, "402f774e49620ec37b02e599bac0b937bcfea3e7ca", null);
}),
"[project]/Official/SbWebsite/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/app/actions/admin.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/app/actions/admin.ts [app-rsc] (ecmascript)");
;
}),
"[project]/Official/SbWebsite/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/app/actions/admin.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "402f774e49620ec37b02e599bac0b937bcfea3e7ca",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminData"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/app/actions/admin.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/app/actions/admin.ts [app-rsc] (ecmascript)");
}),
"[project]/Official/SbWebsite/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _server = __turbopack_context__.r("[project]/Official/SbWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/node_modules/mongoose)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose-26800f942c105bb4", () => require("mongoose-26800f942c105bb4"));

module.exports = mod;
}),
"[project]/Official/SbWebsite/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__bac37af2._.js.map