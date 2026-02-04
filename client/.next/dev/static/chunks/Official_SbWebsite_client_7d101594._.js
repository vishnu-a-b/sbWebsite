(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function MediaUpload({ type = 'any', currentUrl, onUploadComplete, label, accept, maxSize = 50 }) {
    _s();
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentUrl || '');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getAcceptString = ()=>{
        if (accept) return accept;
        if (type === 'image') return 'image/*';
        if (type === 'video') return 'video/*';
        return 'image/*,video/*';
    };
    const getFileIcon = (fileType)=>{
        if (fileType.startsWith('image/')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
            lineNumber: 37,
            columnNumber: 47
        }, this);
        if (fileType.startsWith('video/')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
            lineNumber: 38,
            columnNumber: 47
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
            lineNumber: 39,
            columnNumber: 12
        }, this);
    };
    const validateFile = (file)=>{
        // Check file size
        const fileSizeMB = file.size / (1024 * 1024);
        if (fileSizeMB > maxSize) {
            return `File size must be less than ${maxSize}MB. Current: ${fileSizeMB.toFixed(2)}MB`;
        }
        // Check file type
        if (type === 'image' && !file.type.startsWith('image/')) {
            return 'Please upload an image file';
        }
        if (type === 'video' && !file.type.startsWith('video/')) {
            return 'Please upload a video file';
        }
        return null;
    };
    const handleFileUpload = async (file)=>{
        setError('');
        // Validate file
        const validationError = validateFile(file);
        if (validationError) {
            setError(validationError);
            return;
        }
        setUploading(true);
        try {
            // Create form data
            const formData = new FormData();
            formData.append('file', file);
            formData.append('type', type);
            // Upload to API
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error('Upload failed');
            }
            const data = await response.json();
            if (data.success && data.url) {
                setPreview(data.url);
                onUploadComplete(data.url);
            } else {
                throw new Error(data.error || 'Upload failed');
            }
        } catch (err) {
            console.error('Upload error:', err);
            setError(err instanceof Error ? err.message : 'Failed to upload file');
        } finally{
            setUploading(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };
    const handleFileInput = (e)=>{
        if (e.target.files && e.target.files[0]) {
            handleFileUpload(e.target.files[0]);
        }
    };
    const handleClear = ()=>{
        setPreview('');
        setError('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        onUploadComplete('');
    };
    const isVideo = preview && (preview.includes('.mp4') || preview.includes('.webm') || preview.includes('.mov'));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-semibold text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative border-2 border-dashed rounded-lg transition-all ${dragActive ? 'border-primary bg-primary/5' : error ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'}`,
                onDrop: handleDrop,
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                children: preview ? // Preview
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: preview,
                                className: "w-full h-48 object-cover rounded-lg",
                                controls: true
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: preview,
                                alt: "Preview",
                                className: "w-full h-48 object-cover rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                lineNumber: 174,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleClear,
                            className: "absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-2 left-2 right-2 bg-black/70 text-white px-3 py-2 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity",
                            children: preview
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this) : // Upload Area
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: fileInputRef,
                            type: "file",
                            onChange: handleFileInput,
                            accept: getAcceptString(),
                            className: "hidden",
                            disabled: uploading
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-12 h-12 text-primary animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: "Uploading..."
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                    lineNumber: 207,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 205,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400",
                                    children: type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                        className: "w-12 h-12"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                        lineNumber: 213,
                                        columnNumber: 21
                                    }, this) : type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                        className: "w-12 h-12"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                        lineNumber: 215,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-12 h-12"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                        lineNumber: 217,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>fileInputRef.current?.click(),
                                            className: "text-primary hover:text-primary/80 font-semibold",
                                            children: "Click to upload"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: " or drag and drop"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                            lineNumber: 228,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                    lineNumber: 220,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: [
                                        type === 'image' ? 'PNG, JPG, GIF up to ' : type === 'video' ? 'MP4, WebM up to ' : 'Images or videos up to ',
                                        maxSize,
                                        "MB"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 210,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(MediaUpload, "luUVj3OMe6Xl3hm0dd4Hg65Qyzw=");
_c = MediaUpload;
var _c;
__turbopack_context__.k.register(_c, "MediaUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Official/SbWebsite/client/app/actions/data:fcb3b7 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAboutContent",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00fb3d8c0f57b0831852eb6a04e1493af194a3af2e":"getAboutContent"},"Official/SbWebsite/client/app/actions/about.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00fb3d8c0f57b0831852eb6a04e1493af194a3af2e", __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAboutContent");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWJvdXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgY29ubmVjdFRvRGF0YWJhc2UgZnJvbSBcIkAvbGliL2RiXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIkAvbW9kZWxzL0Fib3V0XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYm91dENvbnRlbnQoKSB7XG4gIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgYWJvdXQgPSBhd2FpdCBBYm91dC5maW5kT25lKCkuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSkubGVhbigpO1xuICAgIGlmICghYWJvdXQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFib3V0KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhYm91dCBjb250ZW50XCIsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWJvdXRDb250ZW50KGRhdGE6IGFueSkge1xuICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICB0cnkge1xuICAgIGxldCBhYm91dCA9IGF3YWl0IEFib3V0LmZpbmRPbmUoKS5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KTtcblxuICAgIC8vIEV4cGxpY2l0bHkgaGFuZGxlIG5lc3RlZCBvYmplY3RzIHRvIGVuc3VyZSB0aGV5IGFyZSB1cGRhdGVkIGNvcnJlY3RseVxuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgbWlzc2lvbjogeyAuLi5hYm91dD8ubWlzc2lvbiwgLi4uZGF0YS5taXNzaW9uIH0sXG4gICAgICB2aXNpb246IHsgLi4uYWJvdXQ/LnZpc2lvbiwgLi4uZGF0YS52aXNpb24gfSxcbiAgICAgIG1vdHRvOiB7IC4uLmFib3V0Py5tb3R0bywgLi4uZGF0YS5tb3R0byB9LFxuICAgICAgYmVsaWVmOiB7IC4uLmFib3V0Py5iZWxpZWYsIC4uLmRhdGEuYmVsaWVmIH0sXG4gICAgfTtcblxuICAgIGlmIChhYm91dCkge1xuICAgICAgYWJvdXQgPSBhd2FpdCBBYm91dC5maW5kQnlJZEFuZFVwZGF0ZShhYm91dC5faWQsIHVwZGF0ZURhdGEsIHsgbmV3OiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhYm91dCA9IGF3YWl0IEFib3V0LmNyZWF0ZSh1cGRhdGVEYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWJvdXQpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSBhYm91dCBjb250ZW50XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VlZEFib3V0Q29udGVudCgpIHtcbiAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgdHJ5IHtcbiAgICAvLyBDbGVhciBleGlzdGluZyBhbmQgY3JlYXRlIG5ld1xuICAgIGF3YWl0IEFib3V0LmRlbGV0ZU1hbnkoe30pO1xuXG4gICAgY29uc3QgZGVmYXVsdENvbnRlbnQgPSB7XG4gICAgICBoZXJvVGl0bGU6ICdBYm91dCBVcycsXG4gICAgICBoZXJvU3VidGl0bGU6IFwiRm9yIHRoZSBwZW9wbGUsIGJ5IHRoZSBwZW9wbGUuIEluZGlhJ3MgZmlyc3QgcGFsbGlhdGl2ZSBob3NwaXRhbCB3aXRob3V0IGJpbGxzIG9yIGJpbGwgY291bnRlcnMuXCIsXG4gICAgICBzdG9yeVRpdGxlOiAnT3VyIFN0b3J5JyxcbiAgICAgIHN0b3J5RGVzY3JpcHRpb246IGBTaGFudGhpYmhhdmFuIFBhbGxpYXRpdmUgSG9zcGl0YWwsIGxvY2F0ZWQgYXQgR29sZGVuIEhpbGxzLCBWZW5rb2RlLCBWYXR0YXBwYXJhLCBUaGlydXZhbmFudGhhcHVyYW0sIEtlcmFsYSwgc3RhbmRzIGFzIEluZGlhJ3MgRmlyc3QgUGFsbGlhdGl2ZSBIb3NwaXRhbC4gT3BlcmF0aW5nIGFzIGEgZGl2aXNpb24gb2YgdGhlIEZyYW5jaXNjYW4gU2lzdGVycyBvZiBTdC4gQ2xhcmUgQ2hhcml0YWJsZSBUcnVzdCwgdGhlIGhvc3BpdGFsIHdhcyBlc3RhYmxpc2hlZCB3aXRoIHRoZSBibGVzc2luZ3Mgb2YgTWFyIEFuZHJld3MgVGhhemhhdGgsIEFyY2hiaXNob3Agb2YgVGhyaXNzdXIsIGFuZCBjby1mb3VuZGVkIGJ5IFJldi4gRmF0aGVyIEpveSBLb290aHVyLCBTci4gQmVhdHJpY2UgU2NhbGluY2ksIGFuZCBTci4gTWFyaWEgQ2hpYXJhLlxuXG5UaGUgaG9zcGl0YWwgaXMgYSBiZWFjb24gb2YgaG9wZSBmb3IgdGhlIHZ1bG5lcmFibGUsIGVxdWlwcGVkIHdpdGggNDkgYmVkcywgY2VudHJhbGl6ZWQgb3h5Z2VuIHN5c3RlbXMsIElDVSB3aXRoIHZlbnRpbGF0b3IgZmFjaWxpdGllcywgYW5kIGEgc29sYXItcG93ZXJlZCBkaWFseXNpcyB1bml0LiBJdCBvcGVyYXRlcyBhcyBhIFwiTm8tQmlsbFwiIGhvc3BpdGFs4oCUbWVhbmluZyB0aGVyZSBhcmUgbm8gYmlsbHMgYW5kIG5vIGNhc2ggY291bnRlcnMuIEV2ZXJ5IHNlcnZpY2UsIGZyb20gbWVkaWNhbCBjYXJlIHRvIGZvb2QgYW5kIGFjY29tbW9kYXRpb24sIGlzIHByb3ZpZGVkIGNvbXBsZXRlbHkgZnJlZSBvZiBjaGFyZ2UgdG8gcmVnaXN0ZXJlZCBwYXRpZW50cy5cblxuT3VyIG1pc3Npb24gZXh0ZW5kcyBiZXlvbmQgaG9zcGl0YWwgd2FsbHMgd2l0aCAxNSBob21lIGNhcmUgdmVoaWNsZXMgc2VydmluZyBUaGlydXZhbmFudGhhcHVyYW0gRGlzdHJpY3QsIHByb3ZpZGluZyAyNC83IGVtZXJnZW5jeSBob21lIGNhcmUsIGZyZWUgYW1idWxhbmNlIHNlcnZpY2VzLCBhbmQgY29tcHJlaGVuc2l2ZSBwYWxsaWF0aXZlIHN1cHBvcnQgdG8gdGhvc2Ugd2hvIG5lZWQgaXQgbW9zdC5gLFxuICAgICAgc3RvcnlJbWFnZTogJ2h0dHBzOi8vc2hhbnRoaWJoYXZhbi5pbi9pbWFnZXMvYmFubmVyLzViNTZjNzA1OGEyNzUuanBlZycsXG4gICAgICAvLyBIb21lIHBhZ2UgYWJvdXQgc2VjdGlvblxuICAgICAgaG9tZVRpdGxlOiAnVGhlIEZpcnN0IFBhbGxpYXRpdmUgSG9zcGl0YWwgaW4gSW5kaWEnLFxuICAgICAgaG9tZUJhZGdlOiAnRXN0YWJsaXNoZWQgMTk5MycsXG4gICAgICBob21lSW50cm86ICdTaGFudGhpYmhhdmFuIFBhbGxpYXRpdmUgSG9zcGl0YWwgb3BlcmF0ZXMgYXMgYSBkaXZpc2lvbiBvZiB0aGUgRnJhbmNpc2NhbiBTaXN0ZXJzIG9mIFN0LiBDbGFyZSBDaGFyaXRhYmxlIFRydXN0LicsXG4gICAgICBob21lRGVzY3JpcHRpb246ICdXZSBmdW5jdGlvbiBhcyBhIG5vLWJpbGwgaG9zcGl0YWwgd2l0aCA0OSBiZWRzLCBwcm92aWRpbmcgY29tcHJlaGVuc2l2ZSBwYWxsaWF0aXZlIGNhcmUgd2l0aG91dCBiaWxscyBhbmQgY2FzaCBjb3VudGVycy4gT3VyIGFpbSBpcyB0byBpbXByb3ZlIHRoZSBxdWFsaXR5IG9mIGxpZmUgb2YgcGVvcGxlIHdpdGggbGlmZS1saW1pdGluZyBvciBkaXNhYmxpbmcgZGlzZWFzZXMuJyxcbiAgICAgIGhvbWVJbWFnZTogJ2h0dHBzOi8vc2hhbnRoaWJoYXZhbi5pbi9pbWFnZXMvcHJvZHVjdHMvNWI0NmZjYjViMDQ4Mi5qcGVnJyxcbiAgICAgIGhvbWVCdXR0b25UZXh0OiAnTGVhcm4gTW9yZSBBYm91dCBVcycsXG4gICAgICBob21lQnV0dG9uTGluazogJy9hYm91dCcsXG4gICAgICBtaXNzaW9uOiB7XG4gICAgICAgIHRpdGxlOiAnT3VyIE1pc3Npb24nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RvIGltcHJvdmUgdGhlIHF1YWxpdHkgb2YgbGlmZSBmb3IgcGFsbGlhdGl2ZSBiZWRyaWRkZW4gcGF0aWVudHMsIG9mZmVyaW5nIHJlbGllZiBmcm9tIHBhaW4gYW5kIHN5bXB0b21zIHJlZ2FyZGxlc3Mgb2YgcmVsaWdpb24sIGNhc3RlLCBvciBjcmVlZC4nXG4gICAgICB9LFxuICAgICAgdmlzaW9uOiB7XG4gICAgICAgIHRpdGxlOiAnT3VyIFZpc2lvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVG8gYmVjb21lIGEgZ2VuZXJhbCBob3NwaXRhbCBwcm92aWRpbmcgZW1lcmdlbmN5IGNhcmUgYW5kIGNhc3VhbHR5IHNlcnZpY2VzIHRvIGFsbCBuZWFyYnkgcGVvcGxlLCBzdXBwb3J0ZWQgZW50aXJlbHkgYnkgcHVibGljIGRvbmF0aW9ucy4nXG4gICAgICB9LFxuICAgICAgbW90dG86IHtcbiAgICAgICAgdGl0bGU6ICdPdXIgTW90dG8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1wiRm9yIHRoZSBwZW9wbGUsIGJ5IHRoZSBwZW9wbGUuXCIgV2UgY29tYmluZSBwc3ljaG9sb2dpY2FsIGFuZCBzcGlyaXR1YWwgY2FyZSB0byBoZWxwIHBlb3BsZSBsaXZlIGFzIGFjdGl2ZWx5IGFzIHBvc3NpYmxlIHVudGlsIGRlYXRoLidcbiAgICAgIH0sXG4gICAgICBiZWxpZWY6IHtcbiAgICAgICAgdGl0bGU6ICdPdXIgQmVsaWVmJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFdmVyeSBsaWZlIGlzIHByZWNpb3VzLiBUaGVyZSBhcmUgbm8gYmFycmllcnMgaGVyZeKAlGV2ZXJ5b25lIGlzIGVxdWFsLiBTaGFudGhpYmhhdmFuIGlzIGEgbGlnaHQgb2YgY29tcGFzc2lvbiwga2luZG5lc3MsIGFuZCBldGVybmFsIGxvdmUuJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhYm91dCA9IGF3YWl0IEFib3V0LmNyZWF0ZShkZWZhdWx0Q29udGVudCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWJvdXQpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlZWQgYWJvdXQgY29udGVudFwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoia1RBS3NCLDRMQUFBIn0=
}),
"[project]/Official/SbWebsite/client/app/actions/data:c808e2 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateAboutContent",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"405e078970def27525c7f2416c1e68e231e4e9d6ee":"updateAboutContent"},"Official/SbWebsite/client/app/actions/about.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("405e078970def27525c7f2416c1e68e231e4e9d6ee", __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateAboutContent");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWJvdXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgY29ubmVjdFRvRGF0YWJhc2UgZnJvbSBcIkAvbGliL2RiXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIkAvbW9kZWxzL0Fib3V0XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYm91dENvbnRlbnQoKSB7XG4gIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgYWJvdXQgPSBhd2FpdCBBYm91dC5maW5kT25lKCkuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSkubGVhbigpO1xuICAgIGlmICghYWJvdXQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFib3V0KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhYm91dCBjb250ZW50XCIsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWJvdXRDb250ZW50KGRhdGE6IGFueSkge1xuICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICB0cnkge1xuICAgIGxldCBhYm91dCA9IGF3YWl0IEFib3V0LmZpbmRPbmUoKS5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KTtcblxuICAgIC8vIEV4cGxpY2l0bHkgaGFuZGxlIG5lc3RlZCBvYmplY3RzIHRvIGVuc3VyZSB0aGV5IGFyZSB1cGRhdGVkIGNvcnJlY3RseVxuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgbWlzc2lvbjogeyAuLi5hYm91dD8ubWlzc2lvbiwgLi4uZGF0YS5taXNzaW9uIH0sXG4gICAgICB2aXNpb246IHsgLi4uYWJvdXQ/LnZpc2lvbiwgLi4uZGF0YS52aXNpb24gfSxcbiAgICAgIG1vdHRvOiB7IC4uLmFib3V0Py5tb3R0bywgLi4uZGF0YS5tb3R0byB9LFxuICAgICAgYmVsaWVmOiB7IC4uLmFib3V0Py5iZWxpZWYsIC4uLmRhdGEuYmVsaWVmIH0sXG4gICAgfTtcblxuICAgIGlmIChhYm91dCkge1xuICAgICAgYWJvdXQgPSBhd2FpdCBBYm91dC5maW5kQnlJZEFuZFVwZGF0ZShhYm91dC5faWQsIHVwZGF0ZURhdGEsIHsgbmV3OiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhYm91dCA9IGF3YWl0IEFib3V0LmNyZWF0ZSh1cGRhdGVEYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWJvdXQpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSBhYm91dCBjb250ZW50XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VlZEFib3V0Q29udGVudCgpIHtcbiAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgdHJ5IHtcbiAgICAvLyBDbGVhciBleGlzdGluZyBhbmQgY3JlYXRlIG5ld1xuICAgIGF3YWl0IEFib3V0LmRlbGV0ZU1hbnkoe30pO1xuXG4gICAgY29uc3QgZGVmYXVsdENvbnRlbnQgPSB7XG4gICAgICBoZXJvVGl0bGU6ICdBYm91dCBVcycsXG4gICAgICBoZXJvU3VidGl0bGU6IFwiRm9yIHRoZSBwZW9wbGUsIGJ5IHRoZSBwZW9wbGUuIEluZGlhJ3MgZmlyc3QgcGFsbGlhdGl2ZSBob3NwaXRhbCB3aXRob3V0IGJpbGxzIG9yIGJpbGwgY291bnRlcnMuXCIsXG4gICAgICBzdG9yeVRpdGxlOiAnT3VyIFN0b3J5JyxcbiAgICAgIHN0b3J5RGVzY3JpcHRpb246IGBTaGFudGhpYmhhdmFuIFBhbGxpYXRpdmUgSG9zcGl0YWwsIGxvY2F0ZWQgYXQgR29sZGVuIEhpbGxzLCBWZW5rb2RlLCBWYXR0YXBwYXJhLCBUaGlydXZhbmFudGhhcHVyYW0sIEtlcmFsYSwgc3RhbmRzIGFzIEluZGlhJ3MgRmlyc3QgUGFsbGlhdGl2ZSBIb3NwaXRhbC4gT3BlcmF0aW5nIGFzIGEgZGl2aXNpb24gb2YgdGhlIEZyYW5jaXNjYW4gU2lzdGVycyBvZiBTdC4gQ2xhcmUgQ2hhcml0YWJsZSBUcnVzdCwgdGhlIGhvc3BpdGFsIHdhcyBlc3RhYmxpc2hlZCB3aXRoIHRoZSBibGVzc2luZ3Mgb2YgTWFyIEFuZHJld3MgVGhhemhhdGgsIEFyY2hiaXNob3Agb2YgVGhyaXNzdXIsIGFuZCBjby1mb3VuZGVkIGJ5IFJldi4gRmF0aGVyIEpveSBLb290aHVyLCBTci4gQmVhdHJpY2UgU2NhbGluY2ksIGFuZCBTci4gTWFyaWEgQ2hpYXJhLlxuXG5UaGUgaG9zcGl0YWwgaXMgYSBiZWFjb24gb2YgaG9wZSBmb3IgdGhlIHZ1bG5lcmFibGUsIGVxdWlwcGVkIHdpdGggNDkgYmVkcywgY2VudHJhbGl6ZWQgb3h5Z2VuIHN5c3RlbXMsIElDVSB3aXRoIHZlbnRpbGF0b3IgZmFjaWxpdGllcywgYW5kIGEgc29sYXItcG93ZXJlZCBkaWFseXNpcyB1bml0LiBJdCBvcGVyYXRlcyBhcyBhIFwiTm8tQmlsbFwiIGhvc3BpdGFs4oCUbWVhbmluZyB0aGVyZSBhcmUgbm8gYmlsbHMgYW5kIG5vIGNhc2ggY291bnRlcnMuIEV2ZXJ5IHNlcnZpY2UsIGZyb20gbWVkaWNhbCBjYXJlIHRvIGZvb2QgYW5kIGFjY29tbW9kYXRpb24sIGlzIHByb3ZpZGVkIGNvbXBsZXRlbHkgZnJlZSBvZiBjaGFyZ2UgdG8gcmVnaXN0ZXJlZCBwYXRpZW50cy5cblxuT3VyIG1pc3Npb24gZXh0ZW5kcyBiZXlvbmQgaG9zcGl0YWwgd2FsbHMgd2l0aCAxNSBob21lIGNhcmUgdmVoaWNsZXMgc2VydmluZyBUaGlydXZhbmFudGhhcHVyYW0gRGlzdHJpY3QsIHByb3ZpZGluZyAyNC83IGVtZXJnZW5jeSBob21lIGNhcmUsIGZyZWUgYW1idWxhbmNlIHNlcnZpY2VzLCBhbmQgY29tcHJlaGVuc2l2ZSBwYWxsaWF0aXZlIHN1cHBvcnQgdG8gdGhvc2Ugd2hvIG5lZWQgaXQgbW9zdC5gLFxuICAgICAgc3RvcnlJbWFnZTogJ2h0dHBzOi8vc2hhbnRoaWJoYXZhbi5pbi9pbWFnZXMvYmFubmVyLzViNTZjNzA1OGEyNzUuanBlZycsXG4gICAgICAvLyBIb21lIHBhZ2UgYWJvdXQgc2VjdGlvblxuICAgICAgaG9tZVRpdGxlOiAnVGhlIEZpcnN0IFBhbGxpYXRpdmUgSG9zcGl0YWwgaW4gSW5kaWEnLFxuICAgICAgaG9tZUJhZGdlOiAnRXN0YWJsaXNoZWQgMTk5MycsXG4gICAgICBob21lSW50cm86ICdTaGFudGhpYmhhdmFuIFBhbGxpYXRpdmUgSG9zcGl0YWwgb3BlcmF0ZXMgYXMgYSBkaXZpc2lvbiBvZiB0aGUgRnJhbmNpc2NhbiBTaXN0ZXJzIG9mIFN0LiBDbGFyZSBDaGFyaXRhYmxlIFRydXN0LicsXG4gICAgICBob21lRGVzY3JpcHRpb246ICdXZSBmdW5jdGlvbiBhcyBhIG5vLWJpbGwgaG9zcGl0YWwgd2l0aCA0OSBiZWRzLCBwcm92aWRpbmcgY29tcHJlaGVuc2l2ZSBwYWxsaWF0aXZlIGNhcmUgd2l0aG91dCBiaWxscyBhbmQgY2FzaCBjb3VudGVycy4gT3VyIGFpbSBpcyB0byBpbXByb3ZlIHRoZSBxdWFsaXR5IG9mIGxpZmUgb2YgcGVvcGxlIHdpdGggbGlmZS1saW1pdGluZyBvciBkaXNhYmxpbmcgZGlzZWFzZXMuJyxcbiAgICAgIGhvbWVJbWFnZTogJ2h0dHBzOi8vc2hhbnRoaWJoYXZhbi5pbi9pbWFnZXMvcHJvZHVjdHMvNWI0NmZjYjViMDQ4Mi5qcGVnJyxcbiAgICAgIGhvbWVCdXR0b25UZXh0OiAnTGVhcm4gTW9yZSBBYm91dCBVcycsXG4gICAgICBob21lQnV0dG9uTGluazogJy9hYm91dCcsXG4gICAgICBtaXNzaW9uOiB7XG4gICAgICAgIHRpdGxlOiAnT3VyIE1pc3Npb24nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RvIGltcHJvdmUgdGhlIHF1YWxpdHkgb2YgbGlmZSBmb3IgcGFsbGlhdGl2ZSBiZWRyaWRkZW4gcGF0aWVudHMsIG9mZmVyaW5nIHJlbGllZiBmcm9tIHBhaW4gYW5kIHN5bXB0b21zIHJlZ2FyZGxlc3Mgb2YgcmVsaWdpb24sIGNhc3RlLCBvciBjcmVlZC4nXG4gICAgICB9LFxuICAgICAgdmlzaW9uOiB7XG4gICAgICAgIHRpdGxlOiAnT3VyIFZpc2lvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVG8gYmVjb21lIGEgZ2VuZXJhbCBob3NwaXRhbCBwcm92aWRpbmcgZW1lcmdlbmN5IGNhcmUgYW5kIGNhc3VhbHR5IHNlcnZpY2VzIHRvIGFsbCBuZWFyYnkgcGVvcGxlLCBzdXBwb3J0ZWQgZW50aXJlbHkgYnkgcHVibGljIGRvbmF0aW9ucy4nXG4gICAgICB9LFxuICAgICAgbW90dG86IHtcbiAgICAgICAgdGl0bGU6ICdPdXIgTW90dG8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1wiRm9yIHRoZSBwZW9wbGUsIGJ5IHRoZSBwZW9wbGUuXCIgV2UgY29tYmluZSBwc3ljaG9sb2dpY2FsIGFuZCBzcGlyaXR1YWwgY2FyZSB0byBoZWxwIHBlb3BsZSBsaXZlIGFzIGFjdGl2ZWx5IGFzIHBvc3NpYmxlIHVudGlsIGRlYXRoLidcbiAgICAgIH0sXG4gICAgICBiZWxpZWY6IHtcbiAgICAgICAgdGl0bGU6ICdPdXIgQmVsaWVmJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFdmVyeSBsaWZlIGlzIHByZWNpb3VzLiBUaGVyZSBhcmUgbm8gYmFycmllcnMgaGVyZeKAlGV2ZXJ5b25lIGlzIGVxdWFsLiBTaGFudGhpYmhhdmFuIGlzIGEgbGlnaHQgb2YgY29tcGFzc2lvbiwga2luZG5lc3MsIGFuZCBldGVybmFsIGxvdmUuJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhYm91dCA9IGF3YWl0IEFib3V0LmNyZWF0ZShkZWZhdWx0Q29udGVudCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWJvdXQpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlZWQgYWJvdXQgY29udGVudFwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVRBaUJzQiwrTEFBQSJ9
}),
"[project]/Official/SbWebsite/client/app/actions/data:f34df8 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seedAboutContent",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"009a27f21d06ce601c3db390f830955a0d52ae1e4c":"seedAboutContent"},"Official/SbWebsite/client/app/actions/about.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("009a27f21d06ce601c3db390f830955a0d52ae1e4c", __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "seedAboutContent");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWJvdXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgY29ubmVjdFRvRGF0YWJhc2UgZnJvbSBcIkAvbGliL2RiXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIkAvbW9kZWxzL0Fib3V0XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYm91dENvbnRlbnQoKSB7XG4gIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgYWJvdXQgPSBhd2FpdCBBYm91dC5maW5kT25lKCkuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSkubGVhbigpO1xuICAgIGlmICghYWJvdXQpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFib3V0KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhYm91dCBjb250ZW50XCIsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWJvdXRDb250ZW50KGRhdGE6IGFueSkge1xuICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICB0cnkge1xuICAgIGxldCBhYm91dCA9IGF3YWl0IEFib3V0LmZpbmRPbmUoKS5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KTtcblxuICAgIC8vIEV4cGxpY2l0bHkgaGFuZGxlIG5lc3RlZCBvYmplY3RzIHRvIGVuc3VyZSB0aGV5IGFyZSB1cGRhdGVkIGNvcnJlY3RseVxuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgbWlzc2lvbjogeyAuLi5hYm91dD8ubWlzc2lvbiwgLi4uZGF0YS5taXNzaW9uIH0sXG4gICAgICB2aXNpb246IHsgLi4uYWJvdXQ/LnZpc2lvbiwgLi4uZGF0YS52aXNpb24gfSxcbiAgICAgIG1vdHRvOiB7IC4uLmFib3V0Py5tb3R0bywgLi4uZGF0YS5tb3R0byB9LFxuICAgICAgYmVsaWVmOiB7IC4uLmFib3V0Py5iZWxpZWYsIC4uLmRhdGEuYmVsaWVmIH0sXG4gICAgfTtcblxuICAgIGlmIChhYm91dCkge1xuICAgICAgYWJvdXQgPSBhd2FpdCBBYm91dC5maW5kQnlJZEFuZFVwZGF0ZShhYm91dC5faWQsIHVwZGF0ZURhdGEsIHsgbmV3OiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhYm91dCA9IGF3YWl0IEFib3V0LmNyZWF0ZSh1cGRhdGVEYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWJvdXQpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSBhYm91dCBjb250ZW50XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VlZEFib3V0Q29udGVudCgpIHtcbiAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgdHJ5IHtcbiAgICAvLyBDbGVhciBleGlzdGluZyBhbmQgY3JlYXRlIG5ld1xuICAgIGF3YWl0IEFib3V0LmRlbGV0ZU1hbnkoe30pO1xuXG4gICAgY29uc3QgZGVmYXVsdENvbnRlbnQgPSB7XG4gICAgICBoZXJvVGl0bGU6ICdBYm91dCBVcycsXG4gICAgICBoZXJvU3VidGl0bGU6IFwiRm9yIHRoZSBwZW9wbGUsIGJ5IHRoZSBwZW9wbGUuIEluZGlhJ3MgZmlyc3QgcGFsbGlhdGl2ZSBob3NwaXRhbCB3aXRob3V0IGJpbGxzIG9yIGJpbGwgY291bnRlcnMuXCIsXG4gICAgICBzdG9yeVRpdGxlOiAnT3VyIFN0b3J5JyxcbiAgICAgIHN0b3J5RGVzY3JpcHRpb246IGBTaGFudGhpYmhhdmFuIFBhbGxpYXRpdmUgSG9zcGl0YWwsIGxvY2F0ZWQgYXQgR29sZGVuIEhpbGxzLCBWZW5rb2RlLCBWYXR0YXBwYXJhLCBUaGlydXZhbmFudGhhcHVyYW0sIEtlcmFsYSwgc3RhbmRzIGFzIEluZGlhJ3MgRmlyc3QgUGFsbGlhdGl2ZSBIb3NwaXRhbC4gT3BlcmF0aW5nIGFzIGEgZGl2aXNpb24gb2YgdGhlIEZyYW5jaXNjYW4gU2lzdGVycyBvZiBTdC4gQ2xhcmUgQ2hhcml0YWJsZSBUcnVzdCwgdGhlIGhvc3BpdGFsIHdhcyBlc3RhYmxpc2hlZCB3aXRoIHRoZSBibGVzc2luZ3Mgb2YgTWFyIEFuZHJld3MgVGhhemhhdGgsIEFyY2hiaXNob3Agb2YgVGhyaXNzdXIsIGFuZCBjby1mb3VuZGVkIGJ5IFJldi4gRmF0aGVyIEpveSBLb290aHVyLCBTci4gQmVhdHJpY2UgU2NhbGluY2ksIGFuZCBTci4gTWFyaWEgQ2hpYXJhLlxuXG5UaGUgaG9zcGl0YWwgaXMgYSBiZWFjb24gb2YgaG9wZSBmb3IgdGhlIHZ1bG5lcmFibGUsIGVxdWlwcGVkIHdpdGggNDkgYmVkcywgY2VudHJhbGl6ZWQgb3h5Z2VuIHN5c3RlbXMsIElDVSB3aXRoIHZlbnRpbGF0b3IgZmFjaWxpdGllcywgYW5kIGEgc29sYXItcG93ZXJlZCBkaWFseXNpcyB1bml0LiBJdCBvcGVyYXRlcyBhcyBhIFwiTm8tQmlsbFwiIGhvc3BpdGFs4oCUbWVhbmluZyB0aGVyZSBhcmUgbm8gYmlsbHMgYW5kIG5vIGNhc2ggY291bnRlcnMuIEV2ZXJ5IHNlcnZpY2UsIGZyb20gbWVkaWNhbCBjYXJlIHRvIGZvb2QgYW5kIGFjY29tbW9kYXRpb24sIGlzIHByb3ZpZGVkIGNvbXBsZXRlbHkgZnJlZSBvZiBjaGFyZ2UgdG8gcmVnaXN0ZXJlZCBwYXRpZW50cy5cblxuT3VyIG1pc3Npb24gZXh0ZW5kcyBiZXlvbmQgaG9zcGl0YWwgd2FsbHMgd2l0aCAxNSBob21lIGNhcmUgdmVoaWNsZXMgc2VydmluZyBUaGlydXZhbmFudGhhcHVyYW0gRGlzdHJpY3QsIHByb3ZpZGluZyAyNC83IGVtZXJnZW5jeSBob21lIGNhcmUsIGZyZWUgYW1idWxhbmNlIHNlcnZpY2VzLCBhbmQgY29tcHJlaGVuc2l2ZSBwYWxsaWF0aXZlIHN1cHBvcnQgdG8gdGhvc2Ugd2hvIG5lZWQgaXQgbW9zdC5gLFxuICAgICAgc3RvcnlJbWFnZTogJ2h0dHBzOi8vc2hhbnRoaWJoYXZhbi5pbi9pbWFnZXMvYmFubmVyLzViNTZjNzA1OGEyNzUuanBlZycsXG4gICAgICAvLyBIb21lIHBhZ2UgYWJvdXQgc2VjdGlvblxuICAgICAgaG9tZVRpdGxlOiAnVGhlIEZpcnN0IFBhbGxpYXRpdmUgSG9zcGl0YWwgaW4gSW5kaWEnLFxuICAgICAgaG9tZUJhZGdlOiAnRXN0YWJsaXNoZWQgMTk5MycsXG4gICAgICBob21lSW50cm86ICdTaGFudGhpYmhhdmFuIFBhbGxpYXRpdmUgSG9zcGl0YWwgb3BlcmF0ZXMgYXMgYSBkaXZpc2lvbiBvZiB0aGUgRnJhbmNpc2NhbiBTaXN0ZXJzIG9mIFN0LiBDbGFyZSBDaGFyaXRhYmxlIFRydXN0LicsXG4gICAgICBob21lRGVzY3JpcHRpb246ICdXZSBmdW5jdGlvbiBhcyBhIG5vLWJpbGwgaG9zcGl0YWwgd2l0aCA0OSBiZWRzLCBwcm92aWRpbmcgY29tcHJlaGVuc2l2ZSBwYWxsaWF0aXZlIGNhcmUgd2l0aG91dCBiaWxscyBhbmQgY2FzaCBjb3VudGVycy4gT3VyIGFpbSBpcyB0byBpbXByb3ZlIHRoZSBxdWFsaXR5IG9mIGxpZmUgb2YgcGVvcGxlIHdpdGggbGlmZS1saW1pdGluZyBvciBkaXNhYmxpbmcgZGlzZWFzZXMuJyxcbiAgICAgIGhvbWVJbWFnZTogJ2h0dHBzOi8vc2hhbnRoaWJoYXZhbi5pbi9pbWFnZXMvcHJvZHVjdHMvNWI0NmZjYjViMDQ4Mi5qcGVnJyxcbiAgICAgIGhvbWVCdXR0b25UZXh0OiAnTGVhcm4gTW9yZSBBYm91dCBVcycsXG4gICAgICBob21lQnV0dG9uTGluazogJy9hYm91dCcsXG4gICAgICBtaXNzaW9uOiB7XG4gICAgICAgIHRpdGxlOiAnT3VyIE1pc3Npb24nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RvIGltcHJvdmUgdGhlIHF1YWxpdHkgb2YgbGlmZSBmb3IgcGFsbGlhdGl2ZSBiZWRyaWRkZW4gcGF0aWVudHMsIG9mZmVyaW5nIHJlbGllZiBmcm9tIHBhaW4gYW5kIHN5bXB0b21zIHJlZ2FyZGxlc3Mgb2YgcmVsaWdpb24sIGNhc3RlLCBvciBjcmVlZC4nXG4gICAgICB9LFxuICAgICAgdmlzaW9uOiB7XG4gICAgICAgIHRpdGxlOiAnT3VyIFZpc2lvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVG8gYmVjb21lIGEgZ2VuZXJhbCBob3NwaXRhbCBwcm92aWRpbmcgZW1lcmdlbmN5IGNhcmUgYW5kIGNhc3VhbHR5IHNlcnZpY2VzIHRvIGFsbCBuZWFyYnkgcGVvcGxlLCBzdXBwb3J0ZWQgZW50aXJlbHkgYnkgcHVibGljIGRvbmF0aW9ucy4nXG4gICAgICB9LFxuICAgICAgbW90dG86IHtcbiAgICAgICAgdGl0bGU6ICdPdXIgTW90dG8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1wiRm9yIHRoZSBwZW9wbGUsIGJ5IHRoZSBwZW9wbGUuXCIgV2UgY29tYmluZSBwc3ljaG9sb2dpY2FsIGFuZCBzcGlyaXR1YWwgY2FyZSB0byBoZWxwIHBlb3BsZSBsaXZlIGFzIGFjdGl2ZWx5IGFzIHBvc3NpYmxlIHVudGlsIGRlYXRoLidcbiAgICAgIH0sXG4gICAgICBiZWxpZWY6IHtcbiAgICAgICAgdGl0bGU6ICdPdXIgQmVsaWVmJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFdmVyeSBsaWZlIGlzIHByZWNpb3VzLiBUaGVyZSBhcmUgbm8gYmFycmllcnMgaGVyZeKAlGV2ZXJ5b25lIGlzIGVxdWFsLiBTaGFudGhpYmhhdmFuIGlzIGEgbGlnaHQgb2YgY29tcGFzc2lvbiwga2luZG5lc3MsIGFuZCBldGVybmFsIGxvdmUuJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhYm91dCA9IGF3YWl0IEFib3V0LmNyZWF0ZShkZWZhdWx0Q29udGVudCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWJvdXQpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlZWQgYWJvdXQgY29udGVudFwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVRBMkNzQiw2TEFBQSJ9
}),
"[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutAdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$components$2f$admin$2f$MediaUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$data$3a$fcb3b7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/data:fcb3b7 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$data$3a$c808e2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/data:c808e2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$data$3a$f34df8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/data:f34df8 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AboutAdminPage() {
    _s();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        heroTitle: 'About Us',
        heroSubtitle: '',
        storyTitle: 'Our Story',
        storyDescription: '',
        storyImage: '',
        // Home page about section
        homeTitle: 'The First Palliative Hospital in India',
        homeBadge: 'Established 1993',
        homeIntro: '',
        homeDescription: '',
        homeImage: '',
        homeButtonText: 'Learn More About Us',
        homeButtonLink: '/about',
        mission: {
            title: 'Our Mission',
            description: ''
        },
        vision: {
            title: 'Our Vision',
            description: ''
        },
        motto: {
            title: 'Our Motto',
            description: ''
        },
        belief: {
            title: 'Our Belief',
            description: ''
        },
        founderMessage: '',
        timeline: []
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [seeding, setSeeding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutAdminPage.useEffect": ()=>{
            fetchAboutContent();
        }
    }["AboutAdminPage.useEffect"], []);
    const fetchAboutContent = async ()=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$data$3a$fcb3b7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAboutContent"])();
            console.log('Fetched about content:', data);
            if (data) {
                // Ensure all fields exist with proper defaults
                const newContent = {
                    _id: data._id,
                    heroTitle: data.heroTitle || 'About Us',
                    heroSubtitle: data.heroSubtitle || '',
                    storyTitle: data.storyTitle || 'Our Story',
                    storyDescription: data.storyDescription || '',
                    storyImage: data.storyImage || '',
                    homeTitle: data.homeTitle || 'The First Palliative Hospital in India',
                    homeBadge: data.homeBadge || 'Established 1993',
                    homeIntro: data.homeIntro || '',
                    homeDescription: data.homeDescription || '',
                    homeImage: data.homeImage || '',
                    homeButtonText: data.homeButtonText || 'Learn More About Us',
                    homeButtonLink: data.homeButtonLink || '/about',
                    mission: {
                        title: data.mission?.title || 'Our Mission',
                        description: data.mission?.description || ''
                    },
                    vision: {
                        title: data.vision?.title || 'Our Vision',
                        description: data.vision?.description || ''
                    },
                    motto: {
                        title: data.motto?.title || 'Our Motto',
                        description: data.motto?.description || ''
                    },
                    belief: {
                        title: data.belief?.title || 'Our Belief',
                        description: data.belief?.description || ''
                    },
                    founderMessage: data.founderMessage || '',
                    timeline: data.timeline || []
                };
                console.log('Setting content to:', newContent);
                setContent(newContent);
            } else {
                console.log('No data returned from getAboutContent');
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching about content:', error);
            setLoading(false);
        }
    };
    const handleSave = async ()=>{
        setSaving(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$data$3a$c808e2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateAboutContent"])(content);
            alert('Content saved successfully!');
        } catch (error) {
            console.error('Error saving content:', error);
            alert('Error saving content');
        } finally{
            setSaving(false);
        }
    };
    const handleSeed = async ()=>{
        if (!confirm('This will reset all about content to default values. Are you sure?')) {
            return;
        }
        setSeeding(true);
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$data$3a$f34df8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["seedAboutContent"])();
            if (data) {
                setContent({
                    _id: data._id,
                    heroTitle: data.heroTitle || 'About Us',
                    heroSubtitle: data.heroSubtitle || '',
                    storyTitle: data.storyTitle || 'Our Story',
                    storyDescription: data.storyDescription || '',
                    storyImage: data.storyImage || '',
                    homeTitle: data.homeTitle || 'The First Palliative Hospital in India',
                    homeBadge: data.homeBadge || 'Established 1993',
                    homeIntro: data.homeIntro || '',
                    homeDescription: data.homeDescription || '',
                    homeImage: data.homeImage || '',
                    homeButtonText: data.homeButtonText || 'Learn More About Us',
                    homeButtonLink: data.homeButtonLink || '/about',
                    mission: {
                        title: data.mission?.title || 'Our Mission',
                        description: data.mission?.description || ''
                    },
                    vision: {
                        title: data.vision?.title || 'Our Vision',
                        description: data.vision?.description || ''
                    },
                    motto: {
                        title: data.motto?.title || 'Our Motto',
                        description: data.motto?.description || ''
                    },
                    belief: {
                        title: data.belief?.title || 'Our Belief',
                        description: data.belief?.description || ''
                    },
                    founderMessage: data.founderMessage || '',
                    timeline: data.timeline || []
                });
            }
            alert('Content seeded successfully!');
        } catch (error) {
            console.error('Error seeding content:', error);
            alert('Error seeding content');
        } finally{
            setSeeding(false);
        }
    };
    const handleNestedChange = (section, field, value)=>{
        setContent((prev)=>({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value
                }
            }));
    };
    const addTimelineItem = ()=>{
        setContent({
            ...content,
            timeline: [
                ...content.timeline,
                {
                    year: new Date().getFullYear(),
                    title: '',
                    description: ''
                }
            ]
        });
    };
    const removeTimelineItem = (index)=>{
        setContent({
            ...content,
            timeline: content.timeline.filter((_, i)=>i !== index)
        });
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-gray-500",
            children: "Loading about content..."
        }, void 0, false, {
            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
            lineNumber: 212,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "About Us Content"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-1",
                                children: "Manage About Us page content"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSeed,
                                disabled: seeding,
                                className: "bg-orange-100 text-orange-700 px-6 py-3 rounded-lg hover:bg-orange-200 flex items-center gap-2 transition-all disabled:opacity-50",
                                children: seeding ? 'Seeding...' : 'Seed Default'
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 flex items-center gap-2 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    "Preview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                disabled: saving,
                                className: "bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    saving ? 'Saving...' : 'Save Changes'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8 max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900 mb-6 pb-2 border-b",
                                children: "Hero Section"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                children: "Page Title"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: content.heroTitle,
                                                onChange: (e)=>setContent({
                                                        ...content,
                                                        heroTitle: e.target.value
                                                    }),
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                children: "Subtitle / Introduction"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: content.heroSubtitle,
                                                onChange: (e)=>setContent({
                                                        ...content,
                                                        heroSubtitle: e.target.value
                                                    }),
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
                                                rows: 2
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900 mb-6 pb-2 border-b",
                                children: "Home Page About Section"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm mb-6",
                                children: "This section appears on the home page as the introduction to the hospital."
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "Badge Text"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: content.homeBadge,
                                                        onChange: (e)=>setContent({
                                                                ...content,
                                                                homeBadge: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
                                                        placeholder: "e.g., Established 1993"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: content.homeTitle,
                                                        onChange: (e)=>setContent({
                                                                ...content,
                                                                homeTitle: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
                                                        placeholder: "The First Palliative Hospital in India"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "Introduction (Short)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: content.homeIntro,
                                                        onChange: (e)=>setContent({
                                                                ...content,
                                                                homeIntro: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
                                                        rows: 2,
                                                        placeholder: "A brief introduction about the hospital..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: content.homeDescription,
                                                        onChange: (e)=>setContent({
                                                                ...content,
                                                                homeDescription: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
                                                        rows: 4,
                                                        placeholder: "Detailed description for the home page..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "Button Text"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: content.homeButtonText,
                                                                onChange: (e)=>setContent({
                                                                        ...content,
                                                                        homeButtonText: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
                                                                placeholder: "Learn More About Us"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "Button Link"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: content.homeButtonLink,
                                                                onChange: (e)=>setContent({
                                                                        ...content,
                                                                        homeButtonLink: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
                                                                placeholder: "/about"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$components$2f$admin$2f$MediaUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: "image",
                                            label: "Home Page Image",
                                            currentUrl: content.homeImage,
                                            onUploadComplete: (url)=>setContent({
                                                    ...content,
                                                    homeImage: url
                                                }),
                                            maxSize: 5
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900 mb-6 pb-2 border-b",
                                children: "Our Story"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "Section Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: content.storyTitle,
                                                        onChange: (e)=>setContent({
                                                                ...content,
                                                                storyTitle: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "Story Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: content.storyDescription,
                                                        onChange: (e)=>setContent({
                                                                ...content,
                                                                storyDescription: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
                                                        rows: 8,
                                                        placeholder: "Tell the story of the hospital..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$components$2f$admin$2f$MediaUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            type: "image",
                                            label: "Story Image",
                                            currentUrl: content.storyImage,
                                            onUploadComplete: (url)=>setContent({
                                                    ...content,
                                                    storyImage: url
                                                }),
                                            maxSize: 5
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900 mb-6 pb-2 border-b",
                                children: "Core Values"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-gray-50 rounded-lg border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-primary mb-3",
                                                children: "Mission"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: content.mission.title,
                                                        onChange: (e)=>handleNestedChange('mission', 'title', e.target.value),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
                                                        placeholder: "Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: content.mission.description,
                                                        onChange: (e)=>handleNestedChange('mission', 'description', e.target.value),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
                                                        rows: 3,
                                                        placeholder: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 398,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-gray-50 rounded-lg border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-primary mb-3",
                                                children: "Vision"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 418,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: content.vision.title,
                                                        onChange: (e)=>handleNestedChange('vision', 'title', e.target.value),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
                                                        placeholder: "Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: content.vision.description,
                                                        onChange: (e)=>handleNestedChange('vision', 'description', e.target.value),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
                                                        rows: 3,
                                                        placeholder: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 419,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 417,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-gray-50 rounded-lg border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-primary mb-3",
                                                children: "Motto"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 439,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: content.motto.title,
                                                        onChange: (e)=>handleNestedChange('motto', 'title', e.target.value),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
                                                        placeholder: "Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: content.motto.description,
                                                        onChange: (e)=>handleNestedChange('motto', 'description', e.target.value),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
                                                        rows: 3,
                                                        placeholder: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 440,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-gray-50 rounded-lg border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-primary mb-3",
                                                children: "Belief"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 460,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: content.belief.title,
                                                        onChange: (e)=>handleNestedChange('belief', 'title', e.target.value),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
                                                        placeholder: "Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: content.belief.description,
                                                        onChange: (e)=>handleNestedChange('belief', 'description', e.target.value),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
                                                        rows: 3,
                                                        placeholder: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 461,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900 mb-6 pb-2 border-b",
                                children: "Founder's Message"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 483,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: content.founderMessage,
                                onChange: (e)=>setContent({
                                        ...content,
                                        founderMessage: e.target.value
                                    }),
                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
                                rows: 4,
                                placeholder: "Message from the founder..."
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-6 pb-2 border-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: "Timeline / History"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: addTimelineItem,
                                        className: "text-sm bg-secondary/10 text-secondary px-4 py-2 rounded-lg hover:bg-secondary/20 transition-all font-semibold",
                                        children: "+ Add Item"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: content.timeline.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300",
                                    children: "No timeline items yet. Add one to show the hospital's history."
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 16
                                }, this) : content.timeline.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-200 rounded-lg p-4 relative group hover:border-primary/30 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid md:grid-cols-12 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-semibold text-gray-500 mb-1",
                                                                children: "Year"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                                lineNumber: 514,
                                                                columnNumber: 24
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: item.year,
                                                                onChange: (e)=>{
                                                                    const newTimeline = [
                                                                        ...content.timeline
                                                                    ];
                                                                    newTimeline[index].year = parseInt(e.target.value);
                                                                    setContent({
                                                                        ...content,
                                                                        timeline: newTimeline
                                                                    });
                                                                },
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md",
                                                                placeholder: "2024"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 513,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-semibold text-gray-500 mb-1",
                                                                children: "Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                                lineNumber: 528,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: item.title,
                                                                onChange: (e)=>{
                                                                    const newTimeline = [
                                                                        ...content.timeline
                                                                    ];
                                                                    newTimeline[index].title = e.target.value;
                                                                    setContent({
                                                                        ...content,
                                                                        timeline: newTimeline
                                                                    });
                                                                },
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md",
                                                                placeholder: "Milestone Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                                lineNumber: 529,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-xs font-semibold text-gray-500 mb-1",
                                                                children: "Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                                lineNumber: 542,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: item.description,
                                                                onChange: (e)=>{
                                                                    const newTimeline = [
                                                                        ...content.timeline
                                                                    ];
                                                                    newTimeline[index].description = e.target.value;
                                                                    setContent({
                                                                        ...content,
                                                                        timeline: newTimeline
                                                                    });
                                                                },
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md",
                                                                rows: 2,
                                                                placeholder: "Details about this milestone..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                                lineNumber: 543,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 512,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removeTimelineItem(index),
                                                className: "absolute top-4 right-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity",
                                                title: "Remove item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                                lineNumber: 556,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/about/page.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_s(AboutAdminPage, "wCh6/kZu3jJB2jNbdw7xq5nghHw=");
_c = AboutAdminPage;
var _c;
__turbopack_context__.k.register(_c, "AboutAdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Official_SbWebsite_client_7d101594._.js.map