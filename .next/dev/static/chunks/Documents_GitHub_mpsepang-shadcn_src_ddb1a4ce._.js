(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Checkbox;
;
var _c;
__turbopack_context__.k.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiveCCTVFeedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3x3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/src/components/ui/sheet.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const hlsDevices = [
    {
        name: "192.168.0.12",
        hlsUrl: "http://127.0.0.1:8080/memfs/de5c8d30-58e3-423f-b4f7-da8e597babe1.m3u8",
        site: "MPS IOC CCTV"
    },
    {
        name: "192.168.0.13",
        hlsUrl: "http://127.0.0.1:8080/memfs/9fa73373-8833-4d33-8eb9-54054bfd3987.m3u8",
        site: "MPS IOC CCTV"
    },
    {
        name: "192.168.0.14",
        hlsUrl: "http://127.0.0.1:8080/memfs/fcf54593-b775-4fe2-a7ff-7dbe0aa58de8.m3u8",
        site: "MPS IOC CCTV"
    },
    {
        name: "192.168.0.15",
        hlsUrl: "http://127.0.0.1:8080/memfs/e6cda9f9-f166-40f9-ab55-f50f13686030.m3u8",
        site: "MPS IOC CCTV"
    },
    {
        name: "192.168.0.16",
        hlsUrl: "http://127.0.0.1:8080/memfs/9bea2e13-ab9b-413e-a854-27a3d962d69c.m3u8",
        site: "MPS IOC CCTV"
    },
    {
        name: "192.168.0.17",
        hlsUrl: "http://127.0.0.1:8080/memfs/bbeb988c-00d9-40a0-a2c4-32bb15fbf686.m3u8",
        site: "MPS IOC CCTV"
    }
];
// CCTV device list with names and device IDs
const cctvDevices = [
    {
        name: "MPSp- Industrial Park",
        hid: "c8155800002f",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Depo BBST 1",
        hid: "c81558000137",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Depo BBST 2",
        hid: "c81558000086",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Depo Putra Perdana 1",
        hid: "c8155800004c",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Depo Putra Perdana 2",
        hid: "c81559000094",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-JPS 1",
        hid: "c81558000035",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Kapal Korek 1",
        hid: "c815580000d1",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Kapal Korek 2",
        hid: "c81558000139",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-KG SG Melut",
        hid: "c81558000084",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Rambutan Kg. Sg. Buah Dua",
        hid: "c81558000031",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Sg Pelek",
        hid: "c815580000ac",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Taman Ixora",
        hid: "c81558000051",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Tepi Lombong Batu Satu",
        hid: "c815580000d9",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Tmn Dahlia 1",
        hid: "c81558000180",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp-Tmn Seri Delima",
        hid: "c8155800016c",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp06-C01 APEC Bomba",
        hid: "c81559000091",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp06-C02 Hospital Cyberjaya",
        hid: "c81558000122",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp06-C03 Persiaran Semarak Api",
        hid: "c8155900008e",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp06-C04 Radius Cyberjaya",
        hid: "c8155900008f",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp06-C05 Setia Eco Glades",
        hid: "c815580001e1",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp06-C06 Stesen MRT Cyberjaya",
        hid: "c81559000093",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp06-C07 Medan Seroja",
        hid: "c815050004f6",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp06-C08 Perhentian Bas Seroja",
        hid: "c815050004f9",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp06-C09 Psr Mlm Seroja",
        hid: "c815050004f5",
        site: "MPS CCTV Sites"
    },
    {
        name: "MPSp06-C10 Simpang Seroja",
        hid: "c815050004de",
        site: "MPS CCTV Sites"
    }
];
// Site/Group definitions
const cctvSites = [
    {
        id: "mps-cctv-sites",
        name: "MPS CCTV Sites",
        deviceIds: cctvDevices.map((d)=>d.hid),
        isHLS: false
    },
    {
        id: "mps-ioc-cctv",
        name: "MPS IOC CCTV",
        deviceIds: hlsDevices.map((_, i)=>`hls-${i}`),
        isHLS: true
    }
];
// HLS Video Player Component - Dynamically loads hls.js
function HLSVideoPlayer({ src, name }) {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hlsInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const initHLS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HLSVideoPlayer.useCallback[initHLS]": async ()=>{
            const video = videoRef.current;
            if (!video) return;
            try {
                // Dynamically import hls.js
                const Hls = (await __turbopack_context__.A("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/hls.js/dist/hls.mjs [app-client] (ecmascript, async loader)")).default;
                if (Hls.isSupported()) {
                    const hls = new Hls({
                        enableWorker: true,
                        lowLatencyMode: true,
                        backBufferLength: 90
                    });
                    hlsInstanceRef.current = hls;
                    hls.loadSource(src);
                    hls.attachMedia(video);
                    hls.on(Hls.Events.MANIFEST_PARSED, {
                        "HLSVideoPlayer.useCallback[initHLS]": ()=>{
                            setIsLoading(false);
                            setError(false);
                            video.play().catch({
                                "HLSVideoPlayer.useCallback[initHLS]": ()=>{
                                // Autoplay blocked, user needs to interact
                                }
                            }["HLSVideoPlayer.useCallback[initHLS]"]);
                        }
                    }["HLSVideoPlayer.useCallback[initHLS]"]);
                    hls.on(Hls.Events.ERROR, {
                        "HLSVideoPlayer.useCallback[initHLS]": (_event, data)=>{
                            if (data.fatal) {
                                console.error('HLS Error:', data);
                                setError(true);
                                setIsLoading(false);
                                if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
                                    // Try to recover
                                    setTimeout({
                                        "HLSVideoPlayer.useCallback[initHLS]": ()=>{
                                            hls.loadSource(src);
                                        }
                                    }["HLSVideoPlayer.useCallback[initHLS]"], 3000);
                                }
                            }
                        }
                    }["HLSVideoPlayer.useCallback[initHLS]"]);
                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    // Native HLS support (Safari)
                    video.src = src;
                    video.addEventListener('loadedmetadata', {
                        "HLSVideoPlayer.useCallback[initHLS]": ()=>{
                            setIsLoading(false);
                            setError(false);
                            video.play().catch({
                                "HLSVideoPlayer.useCallback[initHLS]": ()=>{}
                            }["HLSVideoPlayer.useCallback[initHLS]"]);
                        }
                    }["HLSVideoPlayer.useCallback[initHLS]"]);
                    video.addEventListener('error', {
                        "HLSVideoPlayer.useCallback[initHLS]": ()=>{
                            setError(true);
                            setIsLoading(false);
                        }
                    }["HLSVideoPlayer.useCallback[initHLS]"]);
                } else {
                    setError(true);
                    setIsLoading(false);
                }
            } catch (err) {
                console.error('Failed to load HLS.js:', err);
                // Try native video element as fallback
                if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = src;
                    video.addEventListener('loadedmetadata', {
                        "HLSVideoPlayer.useCallback[initHLS]": ()=>{
                            setIsLoading(false);
                            video.play().catch({
                                "HLSVideoPlayer.useCallback[initHLS]": ()=>{}
                            }["HLSVideoPlayer.useCallback[initHLS]"]);
                        }
                    }["HLSVideoPlayer.useCallback[initHLS]"]);
                    video.addEventListener('error', {
                        "HLSVideoPlayer.useCallback[initHLS]": ()=>{
                            setError(true);
                            setIsLoading(false);
                        }
                    }["HLSVideoPlayer.useCallback[initHLS]"]);
                } else {
                    setError(true);
                    setIsLoading(false);
                }
            }
        }
    }["HLSVideoPlayer.useCallback[initHLS]"], [
        src
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HLSVideoPlayer.useEffect": ()=>{
            initHLS();
            return ({
                "HLSVideoPlayer.useEffect": ()=>{
                    if (hlsInstanceRef.current) {
                        hlsInstanceRef.current.destroy();
                        hlsInstanceRef.current = null;
                    }
                }
            })["HLSVideoPlayer.useEffect"];
        }
    }["HLSVideoPlayer.useEffect"], [
        initHLS
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full bg-muted/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-6 w-6 mx-auto mb-1 text-red-500"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-muted-foreground",
                        children: "Stream Error"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                lineNumber: 205,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
            lineNumber: 204,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 w-full h-full",
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-muted/50 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "h-6 w-6 mx-auto mb-1 text-muted-foreground animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-muted-foreground",
                            children: "Connecting..."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                    lineNumber: 217,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                className: "absolute inset-0 w-full h-full object-cover",
                muted: true,
                playsInline: true,
                autoPlay: true
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(HLSVideoPlayer, "yUlaEYx9FXwWQIdDZvvQa5XILBA=");
_c = HLSVideoPlayer;
const REFRESH_INTERVAL = 10 * 60 * 1000; // 10 minutes
// Use relative path in browser (proxied via Next.js rewrites) to avoid mixed content issues
const API_BASE_URL = ("TURBOPACK compile-time truthy", 1) ? '' // Browser: use relative path (proxied)
 : "TURBOPACK unreachable"; // Server-side fallback
function LiveCCTVFeedPage() {
    _s1();
    const [feeds, setFeeds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFeeds, setSelectedFeeds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gridSize, setGridSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("full");
    const [showCameraSelector, setShowCameraSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autoRefresh, setAutoRefresh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedSite, setSelectedSite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mps-cctv-sites");
    const refreshIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cachedFeedsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]); // Cache to keep previous snapshots visible
    const [loadingDevices, setLoadingDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set()); // Track which devices are loading
    const [loadedCount, setLoadedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // Track how many devices have loaded
    const loadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false); // Prevent concurrent loading
    // Check if current site is HLS-based
    const isHLSSite = ()=>{
        const site = cctvSites.find((s)=>s.id === selectedSite);
        return site?.isHLS ?? false;
    };
    // Get devices for selected site
    const getDevicesForSite = (siteId)=>{
        const site = cctvSites.find((s)=>s.id === siteId);
        if (!site) return cctvDevices;
        if (site.isHLS) {
            return []; // HLS devices are handled separately
        }
        return cctvDevices.filter((device)=>site.deviceIds.includes(device.hid));
    };
    // Initialize feeds from device list based on selected site
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveCCTVFeedPage.useEffect": ()=>{
            const site = cctvSites.find({
                "LiveCCTVFeedPage.useEffect.site": (s)=>s.id === selectedSite
            }["LiveCCTVFeedPage.useEffect.site"]);
            if (site?.isHLS) {
                // Initialize HLS feeds
                const initialFeeds = hlsDevices.map({
                    "LiveCCTVFeedPage.useEffect.initialFeeds": (device, index)=>({
                            id: `hls-${index}`,
                            name: device.name,
                            location: device.name,
                            status: "online",
                            hid: `hls-${index}`,
                            hlsUrl: device.hlsUrl,
                            isHLS: true,
                            lastUpdate: "Live Stream"
                        })
                }["LiveCCTVFeedPage.useEffect.initialFeeds"]);
                setFeeds(initialFeeds);
                cachedFeedsRef.current = initialFeeds;
                setSelectedFeeds(initialFeeds.map({
                    "LiveCCTVFeedPage.useEffect": (f)=>f.id
                }["LiveCCTVFeedPage.useEffect"]));
                setCurrentPage(1);
                setIsLoading(false);
            } else {
                // Initialize snapshot-based feeds
                const siteDevices = getDevicesForSite(selectedSite);
                const initialFeeds = siteDevices.map({
                    "LiveCCTVFeedPage.useEffect.initialFeeds": (device)=>({
                            id: device.hid,
                            name: device.name,
                            location: device.name,
                            status: "offline",
                            hid: device.hid,
                            lastUpdate: "Never",
                            isHLS: false
                        })
                }["LiveCCTVFeedPage.useEffect.initialFeeds"]);
                setFeeds(initialFeeds);
                cachedFeedsRef.current = initialFeeds;
                setSelectedFeeds(initialFeeds.map({
                    "LiveCCTVFeedPage.useEffect": (f)=>f.id
                }["LiveCCTVFeedPage.useEffect"]));
                setCurrentPage(1);
                setIsLoading(false);
            }
        }
    }["LiveCCTVFeedPage.useEffect"], [
        selectedSite
    ]);
    // Fetch snapshot for a single device
    const fetchSingleSnapshot = async (deviceId, deviceName)=>{
        try {
            // Mark device as loading
            setLoadingDevices((prev)=>new Set(prev).add(deviceId));
            const response = await fetch(`${API_BASE_URL}/api/cctv-snapshot/${deviceId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch snapshot for ${deviceId}`);
            }
            const data = await response.json();
            // Update the specific feed
            setFeeds((prevFeeds)=>{
                const updatedFeeds = prevFeeds.map((feed)=>{
                    if (feed.hid === deviceId) {
                        if (data.success && data.image) {
                            // New snapshot available - update
                            return {
                                ...feed,
                                snapshotUrl: data.image || data.picBase64,
                                status: "online",
                                lastUpdate: new Date().toLocaleTimeString()
                            };
                        } else {
                            // No new snapshot - keep cached one if available
                            const cachedFeed = cachedFeedsRef.current.find((cf)=>cf.id === feed.id);
                            if (cachedFeed && cachedFeed.snapshotUrl) {
                                return {
                                    ...feed,
                                    snapshotUrl: cachedFeed.snapshotUrl,
                                    status: data.msg?.includes('No Device Available') ? "offline" : "maintenance",
                                    lastUpdate: cachedFeed.lastUpdate
                                };
                            } else {
                                return {
                                    ...feed,
                                    status: data.msg?.includes('No Device Available') ? "offline" : "maintenance",
                                    lastUpdate: new Date().toLocaleTimeString()
                                };
                            }
                        }
                    }
                    return feed;
                });
                // Update cache
                cachedFeedsRef.current = updatedFeeds;
                return updatedFeeds;
            });
            setLoadedCount((prev)=>prev + 1);
        } catch (error) {
            console.error(`Error fetching snapshot for ${deviceId}:`, error);
            // On error, keep cached snapshot if available
            setFeeds((prevFeeds)=>{
                const updatedFeeds = prevFeeds.map((feed)=>{
                    if (feed.hid === deviceId) {
                        const cachedFeed = cachedFeedsRef.current.find((cf)=>cf.id === feed.id);
                        if (cachedFeed && cachedFeed.snapshotUrl) {
                            return {
                                ...feed,
                                snapshotUrl: cachedFeed.snapshotUrl,
                                lastUpdate: cachedFeed.lastUpdate
                            };
                        }
                    }
                    return feed;
                });
                return updatedFeeds;
            });
        } finally{
            // Remove from loading set
            setLoadingDevices((prev)=>{
                const next = new Set(prev);
                next.delete(deviceId);
                return next;
            });
        }
    };
    // Fetch snapshots for all devices one by one
    const fetchSnapshots = async (showLoading = false)=>{
        // Prevent concurrent loading
        if (loadingRef.current) {
            console.log('Already loading snapshots, skipping...');
            return;
        }
        try {
            loadingRef.current = true;
            // Only show loading on initial load, not on auto-refresh
            if (showLoading) {
                setIsLoading(true);
                setLoadedCount(0);
            }
            // Use current feeds or cached feeds to get device IDs
            const currentFeeds = feeds.length > 0 ? feeds : cachedFeedsRef.current;
            const deviceIds = currentFeeds.map((f)=>f.hid);
            // Load devices one by one with a small delay between each
            const DELAY_BETWEEN_REQUESTS = 200; // 200ms delay between requests
            for(let i = 0; i < deviceIds.length; i++){
                const deviceId = deviceIds[i];
                const device = currentFeeds.find((f)=>f.hid === deviceId);
                // Fetch snapshot for this device
                await fetchSingleSnapshot(deviceId, device?.name || deviceId);
                // Add delay between requests (except for the last one)
                if (i < deviceIds.length - 1) {
                    await new Promise((resolve)=>setTimeout(resolve, DELAY_BETWEEN_REQUESTS));
                }
            }
        } catch (error) {
            console.error('Error fetching snapshots:', error);
        // On error, keep using cached feeds - don't clear snapshots
        } finally{
            if (showLoading) {
                setIsLoading(false);
            }
            loadingRef.current = false;
        }
    };
    // Initial fetch (only once when feeds are initialized) - Skip for HLS
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveCCTVFeedPage.useEffect": ()=>{
            if (!isHLSSite() && feeds.length > 0 && feeds[0].lastUpdate === "Never") {
                fetchSnapshots(true); // Show loading on initial fetch
            }
        }
    }["LiveCCTVFeedPage.useEffect"], [
        feeds.length,
        selectedSite
    ]);
    // Auto-refresh interval - Skip for HLS
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveCCTVFeedPage.useEffect": ()=>{
            if (!isHLSSite() && autoRefresh && feeds.length > 0 && feeds[0].lastUpdate !== "Never") {
                refreshIntervalRef.current = setInterval({
                    "LiveCCTVFeedPage.useEffect": ()=>{
                        fetchSnapshots(false); // Silent refresh - keep cached images
                    }
                }["LiveCCTVFeedPage.useEffect"], REFRESH_INTERVAL);
                return ({
                    "LiveCCTVFeedPage.useEffect": ()=>{
                        if (refreshIntervalRef.current) {
                            clearInterval(refreshIntervalRef.current);
                        }
                    }
                })["LiveCCTVFeedPage.useEffect"];
            }
        }
    }["LiveCCTVFeedPage.useEffect"], [
        autoRefresh,
        feeds.length,
        selectedSite
    ]);
    const filteredFeeds = feeds.filter((feed)=>feed.name.toLowerCase().includes(searchQuery.toLowerCase()) || feed.location.toLowerCase().includes(searchQuery.toLowerCase()));
    const onlineCount = feeds.filter((f)=>f.status === "online").length;
    const offlineCount = feeds.filter((f)=>f.status === "offline").length;
    const maintenanceCount = feeds.filter((f)=>f.status === "maintenance").length;
    const getStatusBadge = (status)=>{
        switch(status){
            case "online":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-green-500/20 text-green-400 border-green-500/30",
                    children: "Online"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                    lineNumber: 484,
                    columnNumber: 16
                }, this);
            case "offline":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-red-500/20 text-red-400 border-red-500/30",
                    children: "Offline"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                    lineNumber: 486,
                    columnNumber: 16
                }, this);
            case "maintenance":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
                    children: "Maintenance"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                    lineNumber: 488,
                    columnNumber: 16
                }, this);
        }
    };
    const handleFeedSelect = (feed)=>{
        // Toggle selection in grid mode
        setSelectedFeeds((prev)=>prev.includes(feed.id) ? prev.filter((id)=>id !== feed.id) : [
                ...prev,
                feed.id
            ].slice(0, getMaxFeedsForGrid(gridSize)));
    };
    const getMaxFeedsForGrid = (size)=>{
        switch(size){
            case "2x2":
                return 4;
            case "3x3":
                return 9;
            case "4x4":
                return 16;
            case "full":
                return feeds.length; // Show all devices
        }
    };
    const getGridColumns = (size)=>{
        switch(size){
            case "2x2":
                return "grid-cols-2";
            case "3x3":
                return "grid-cols-3";
            case "4x4":
                return "grid-cols-4";
            case "full":
                // Calculate optimal columns based on device count (aim for ~5 columns)
                // For small number of feeds, use appropriate columns
                if (feeds.length <= 2) return "grid-cols-2";
                if (feeds.length <= 4) return "grid-cols-2";
                if (feeds.length <= 6) return "grid-cols-3";
                if (feeds.length <= 9) return "grid-cols-3";
                const cols = Math.ceil(Math.sqrt(feeds.length));
                // Map to Tailwind classes (max 6 columns)
                const colMap = {
                    1: "grid-cols-2",
                    2: "grid-cols-2",
                    3: "grid-cols-3",
                    4: "grid-cols-4",
                    5: "grid-cols-5",
                    6: "grid-cols-6"
                };
                return colMap[Math.min(cols, 6)] || "grid-cols-5";
        }
    };
    const selectedFeedsData = feeds.filter((feed)=>selectedFeeds.includes(feed.id));
    // Calculate pagination
    const maxFeedsPerPage = getMaxFeedsForGrid(gridSize);
    const totalPages = Math.max(1, Math.ceil(selectedFeedsData.length / maxFeedsPerPage));
    const startIndex = (currentPage - 1) * maxFeedsPerPage;
    const endIndex = startIndex + maxFeedsPerPage;
    const currentPageFeeds = selectedFeedsData.slice(startIndex, endIndex);
    // Debug: Log pagination info
    console.log('Pagination Debug:', {
        gridSize,
        selectedFeedsCount: selectedFeedsData.length,
        maxFeedsPerPage,
        totalPages,
        currentPage,
        currentPageFeedsCount: currentPageFeeds.length,
        feeds: feeds.map((f)=>({
                id: f.id,
                name: f.name,
                isHLS: f.isHLS,
                hlsUrl: f.hlsUrl
            })),
        selectedSite,
        isHLSSite: isHLSSite()
    });
    // Reset to page 1 when grid size changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveCCTVFeedPage.useEffect": ()=>{
            setCurrentPage(1);
        }
    }["LiveCCTVFeedPage.useEffect"], [
        gridSize
    ]);
    // Reset to page 1 if current page is out of bounds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveCCTVFeedPage.useEffect": ()=>{
            if (currentPage > totalPages && totalPages > 0) {
                setCurrentPage(1);
            }
        }
    }["LiveCCTVFeedPage.useEffect"], [
        totalPages,
        currentPage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold tracking-tight",
                        children: "Live CCTV Feed"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                        lineNumber: 583,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-2",
                        children: "Monitor live camera feeds from all security cameras"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                        lineNumber: 584,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                lineNumber: 582,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                        value: selectedSite,
                        onValueChange: setSelectedSite,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                            className: "grid w-full grid-cols-2",
                            children: cctvSites.map((site)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: site.id,
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                            lineNumber: 596,
                                            columnNumber: 19
                                        }, this),
                                        site.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: "ml-2",
                                            children: site.deviceIds.length
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                            lineNumber: 598,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, site.id, true, {
                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                    lineNumber: 595,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                            lineNumber: 593,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                        lineNumber: 592,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                    lineNumber: 591,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                lineNumber: 590,
                columnNumber: 7
            }, this),
            showCameraSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Total Cameras"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 613,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 614,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                lineNumber: 612,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold",
                                    children: feeds.length
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                    lineNumber: 617,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                lineNumber: 616,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                        lineNumber: 611,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Online"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-4 rounded-full bg-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                lineNumber: 621,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-green-500",
                                    children: onlineCount
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                    lineNumber: 626,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                lineNumber: 625,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                        lineNumber: 620,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Offline"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 631,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-4 rounded-full bg-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 632,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                lineNumber: 630,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-red-500",
                                    children: offlineCount
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                    lineNumber: 635,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                lineNumber: 634,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                        lineNumber: 629,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Maintenance"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 640,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 w-4 rounded-full bg-yellow-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 641,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                lineNumber: 639,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-yellow-500",
                                    children: maintenanceCount
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                    lineNumber: 644,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                lineNumber: 643,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                        lineNumber: 638,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                lineNumber: 610,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium",
                                                    children: "Grid Size:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: gridSize === "2x2" ? "default" : "outline",
                                                    size: "sm",
                                                    onClick: ()=>{
                                                        setGridSize("2x2");
                                                        // Keep all feeds selected, pagination will handle display
                                                        if (selectedFeeds.length === 0) {
                                                            setSelectedFeeds(feeds.map((f)=>f.id));
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                            lineNumber: 670,
                                                            columnNumber: 23
                                                        }, this),
                                                        "2x2"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: gridSize === "3x3" ? "default" : "outline",
                                                    size: "sm",
                                                    onClick: ()=>{
                                                        setGridSize("3x3");
                                                        // Keep all feeds selected, pagination will handle display
                                                        if (selectedFeeds.length === 0) {
                                                            setSelectedFeeds(feeds.map((f)=>f.id));
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__["Grid3x3"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                            lineNumber: 684,
                                                            columnNumber: 23
                                                        }, this),
                                                        "3x3"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: gridSize === "4x4" ? "default" : "outline",
                                                    size: "sm",
                                                    onClick: ()=>{
                                                        setGridSize("4x4");
                                                        // Keep all feeds selected, pagination will handle display
                                                        if (selectedFeeds.length === 0) {
                                                            setSelectedFeeds(feeds.map((f)=>f.id));
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                            lineNumber: 698,
                                                            columnNumber: 23
                                                        }, this),
                                                        "4x4"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: gridSize === "full" ? "default" : "outline",
                                                    size: "sm",
                                                    onClick: ()=>{
                                                        setGridSize("full");
                                                        // Keep all feeds selected
                                                        if (selectedFeeds.length === 0) {
                                                            setSelectedFeeds(feeds.map((f)=>f.id));
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Full"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                            lineNumber: 657,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 656,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: autoRefresh ? "default" : "outline",
                                                size: "sm",
                                                onClick: ()=>setAutoRefresh(!autoRefresh),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: `h-4 w-4 mr-1 ${autoRefresh ? 'animate-spin' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Auto"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                lineNumber: 719,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>fetchSnapshots(false),
                                                disabled: isLoading || loadingRef.current,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: `h-4 w-4 mr-1 ${isLoading || loadingRef.current ? 'animate-spin' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 733,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Refresh"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                lineNumber: 727,
                                                columnNumber: 19
                                            }, this),
                                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "Loading: ",
                                                    loadedCount,
                                                    "/",
                                                    feeds.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                lineNumber: 737,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    selectedFeeds.length,
                                                    " cameras • ",
                                                    maxFeedsPerPage,
                                                    " per page • Page ",
                                                    currentPage,
                                                    "/",
                                                    totalPages
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                lineNumber: 741,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                                                open: showCameraSelector,
                                                onOpenChange: setShowCameraSelector,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                    lineNumber: 747,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Select Cameras"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                            lineNumber: 746,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 745,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                                                        side: "right",
                                                        className: "w-[400px] sm:w-[540px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                                                        children: "Select Cameras"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                        lineNumber: 753,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                                                        children: [
                                                                            "Select up to ",
                                                                            getMaxFeedsForGrid(gridSize),
                                                                            " cameras for ",
                                                                            gridSize,
                                                                            " grid view"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                        lineNumber: 754,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                lineNumber: 752,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-6 space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                placeholder: "Search cameras...",
                                                                                value: searchQuery,
                                                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                                                className: "pl-9"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                                lineNumber: 761,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                                className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                                lineNumber: 767,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                        lineNumber: 760,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto",
                                                                        children: filteredFeeds.map((feed)=>{
                                                                            const isSelected = selectedFeeds.includes(feed.id);
                                                                            const canSelect = selectedFeeds.length < getMaxFeedsForGrid(gridSize) || isSelected;
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                onClick: ()=>canSelect && handleFeedSelect(feed),
                                                                                className: `p-3 rounded-lg border cursor-pointer transition-colors ${isSelected ? "bg-primary/10 border-primary" : "bg-muted/50 border-border hover:bg-muted"} ${!canSelect ? "opacity-50 cursor-not-allowed" : ""}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center justify-between mb-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex items-center gap-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                                                        checked: isSelected,
                                                                                                        onCheckedChange: ()=>canSelect && handleFeedSelect(feed),
                                                                                                        onClick: (e)=>e.stopPropagation()
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                                                        lineNumber: 789,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                                                                        className: "h-4 w-4 text-muted-foreground"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                                                        lineNumber: 794,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "font-medium text-sm",
                                                                                                        children: feed.name
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                                                        lineNumber: 795,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                                                lineNumber: 788,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            getStatusBadge(feed.status)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                                        lineNumber: 787,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-xs text-muted-foreground",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: feed.location
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                                                lineNumber: 800,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "mt-1",
                                                                                                children: [
                                                                                                    "Last update: ",
                                                                                                    feed.lastUpdate
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                                                lineNumber: 801,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                                        lineNumber: 799,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, feed.id, true, {
                                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                                lineNumber: 778,
                                                                                columnNumber: 31
                                                                            }, this);
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                        lineNumber: 771,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                lineNumber: 758,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 751,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                lineNumber: 744,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 718,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                lineNumber: 655,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                            lineNumber: 654,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                        lineNumber: 653,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "overflow-visible",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-0 flex flex-col overflow-visible",
                            children: isLoading && feeds.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center h-[calc(100vh-300px)] bg-muted rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "h-16 w-16 mx-auto mb-4 text-muted-foreground animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                            lineNumber: 821,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground font-medium",
                                            children: "Loading cameras..."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                            lineNumber: 822,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                    lineNumber: 820,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                lineNumber: 819,
                                columnNumber: 17
                            }, this) : selectedFeeds.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `grid ${getGridColumns(gridSize)} gap-2 w-full p-4 flex-1`,
                                        style: {
                                            minHeight: "calc(100vh - 350px)"
                                        },
                                        children: currentPageFeeds.map((feed)=>{
                                            const isLoadingDevice = loadingDevices.has(feed.hid);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative bg-black rounded-lg overflow-hidden group",
                                                style: {
                                                    aspectRatio: "16/9"
                                                },
                                                children: [
                                                    feed.isHLS && feed.hlsUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HLSVideoPlayer, {
                                                                src: feed.hlsUrl,
                                                                name: feed.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                lineNumber: 842,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-1 left-1 bg-red-500/80 text-white px-1.5 py-0.5 rounded text-[10px] font-medium flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-1.5 w-1.5 bg-white rounded-full animate-pulse"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                        lineNumber: 844,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    "LIVE"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                lineNumber: 843,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : isLoadingDevice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center h-full bg-muted/50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center p-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                    className: "h-6 w-6 mx-auto mb-1 text-muted-foreground animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                    lineNumber: 851,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-muted-foreground",
                                                                    children: "Loading..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                    lineNumber: 852,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                            lineNumber: 850,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 849,
                                                        columnNumber: 27
                                                    }, this) : feed.status === "online" && feed.snapshotUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: feed.snapshotUrl,
                                                                alt: feed.name,
                                                                className: "w-full h-full object-cover",
                                                                onError: (e)=>{
                                                                    // Fallback if image fails to load
                                                                    const target = e.target;
                                                                    target.style.display = 'none';
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                lineNumber: 857,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-1 left-1 bg-red-500/80 text-white px-1.5 py-0.5 rounded text-[10px] font-medium flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-1.5 w-1.5 bg-white rounded-full animate-pulse"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                        lineNumber: 868,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "LIVE"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                lineNumber: 867,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center h-full bg-muted/50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center p-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                    className: "h-6 w-6 mx-auto mb-1 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                    lineNumber: 875,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-muted-foreground",
                                                                    children: feed.status === "offline" ? "Offline" : "Maintenance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                    lineNumber: 876,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                            lineNumber: 874,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 873,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] font-medium truncate",
                                                                children: feed.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                lineNumber: 883,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] text-white/70 truncate",
                                                                children: feed.isHLS ? 'Live Stream' : `Updated: ${feed.lastUpdate}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                lineNumber: 884,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 882,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, feed.id, true, {
                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                lineNumber: 834,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 827,
                                        columnNumber: 19
                                    }, this),
                                    totalPages > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-6 py-4 border-t-2 border-primary/20 bg-muted/50 w-full shadow-lg relative z-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "default",
                                                        onClick: ()=>setCurrentPage((prev)=>Math.max(1, prev - 1)),
                                                        disabled: currentPage === 1,
                                                        className: "min-w-[110px] h-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: "h-4 w-4 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                lineNumber: 903,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Previous"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 896,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 flex-wrap",
                                                        children: Array.from({
                                                            length: Math.min(totalPages, 7)
                                                        }, (_, i)=>{
                                                            let pageNum;
                                                            if (totalPages <= 7) {
                                                                pageNum = i + 1;
                                                            } else if (currentPage <= 4) {
                                                                pageNum = i + 1;
                                                            } else if (currentPage >= totalPages - 3) {
                                                                pageNum = totalPages - 6 + i;
                                                            } else {
                                                                pageNum = currentPage - 3 + i;
                                                            }
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: currentPage === pageNum ? "default" : "outline",
                                                                size: "default",
                                                                onClick: ()=>setCurrentPage(pageNum),
                                                                className: "min-w-[44px] h-10",
                                                                children: pageNum
                                                            }, pageNum, false, {
                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                lineNumber: 920,
                                                                columnNumber: 31
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 906,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "default",
                                                        onClick: ()=>setCurrentPage((prev)=>Math.min(totalPages, prev + 1)),
                                                        disabled: currentPage === totalPages,
                                                        className: "min-w-[110px] h-10",
                                                        children: [
                                                            "Next",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                className: "h-4 w-4 ml-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                                lineNumber: 940,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                lineNumber: 895,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-muted-foreground whitespace-nowrap ml-4",
                                                children: [
                                                    "Page ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground font-bold",
                                                        children: currentPage
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 944,
                                                        columnNumber: 30
                                                    }, this),
                                                    " of ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground font-bold",
                                                        children: totalPages
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                        lineNumber: 944,
                                                        columnNumber: 98
                                                    }, this),
                                                    " (",
                                                    selectedFeedsData.length,
                                                    " cameras)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                                lineNumber: 943,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 894,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 py-2 border-t bg-muted/10 text-xs text-muted-foreground text-center",
                                        children: [
                                            "Showing all ",
                                            selectedFeedsData.length,
                                            " cameras"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                        lineNumber: 948,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center h-[calc(100vh-300px)] bg-muted rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                            className: "h-16 w-16 mx-auto mb-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                            lineNumber: 956,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground font-medium",
                                            children: "No cameras selected"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                            lineNumber: 957,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mt-2",
                                            children: 'Click "Select Cameras" to choose cameras for grid view'
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                            lineNumber: 958,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                    lineNumber: 955,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                                lineNumber: 954,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                            lineNumber: 817,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                        lineNumber: 816,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
                lineNumber: 651,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/app/admin/live-cctv-feed/page.tsx",
        lineNumber: 580,
        columnNumber: 5
    }, this);
}
_s1(LiveCCTVFeedPage, "eIjtvAwfRMtW4gjm9nep/IewsT4=");
_c1 = LiveCCTVFeedPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "HLSVideoPlayer");
__turbopack_context__.k.register(_c1, "LiveCCTVFeedPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_mpsepang-shadcn_src_ddb1a4ce._.js.map