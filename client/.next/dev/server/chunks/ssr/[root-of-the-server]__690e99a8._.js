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
    timestamps: true
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        const about = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$About$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne().sort({
            createdAt: -1
        }).lean();
        if (!about) return null;
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        // Clear existing and create new
        await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$About$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].deleteMany({});
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
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "009a27f21d06ce601c3db390f830955a0d52ae1e4c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedAboutContent"],
    "00fb3d8c0f57b0831852eb6a04e1493af194a3af2e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAboutContent"],
    "405e078970def27525c7f2416c1e68e231e4e9d6ee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAboutContent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$about$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)");
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

//# sourceMappingURL=%5Broot-of-the-server%5D__690e99a8._.js.map