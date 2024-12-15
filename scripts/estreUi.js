/*
    EstreUI rimwork for MangoEdu @ MP Solutions inc.

    Author: Estre Soliette
    Established: 2024.06.10

    NOTE: Required jQuery latest version

    Visit this rim-work's official site(GitHub)
    https://estreui.mpsolutions.kr
*/

// UI specifier constants
const uis = {

    // rim ui //
    
    // component //
    container: ".container",
    rootTabContent: "root_tab_content",

    // container //
    stepNavigation: ".step_navigation",
    stepTitleBar: ".step_title_bar",
    stepIndicator: ".step_indicator",
    stepPointer: ".step_pointer",
    stepDivider: ".step_divider",

    // session manager //
    pageShortCut: ".page_short_cut",

    // common
    section: "section",
    toggle: ".toggle",
    toggleArea: "div.toggle",
    toggleBtn: "button.toggle",
    basic: ".basic",
    toSmaller: ".to_smaller",
    toLarger: ".to_larger",
    areaHandler: ".area_handler",
    areaResizer: ".area_resizer",

    // unified calendar
    unifiedCalendar: ".unified_calendar",
    calendarArea: "section.calendar_area",
    scheduleList: "section.schedule_list",

    // variable calendar
    variableCalendar: ".variable_calendar",
    dateIndicateArea: ".date_indicate_area",
    dateIndicator: ".date_indicator",

    calendarStructure: ".calendar_structure",
    unicalShowToday: "input#unicalShowToday",

    calendarBar: ".calendar_bar",
    scheduleFilter: ".schedule_filter",
    filterFixed: "ul.fixed",
    filterVariable: "ul.variable",
    dataSelection: "ul.data_selection",
    
    // unified scheduler
    unifiedScheduler: ".unified_scheduler",
    scheduleHolder: ".schedule_holder",
    scheduleItem: ".schedule_item",
    
    // calendar common
    scaler: ".scaler",
    daysSubjects: ".days_subjects",
    daysHolder: ".days_holder",
    years: ".years",
    year: ".year",
    months: ".months",
    month: ".month",
    weeks: ".weeks",
    week: ".week",
    days: ".days",
    day: ".day",
    dday: ".dday",
    today: ".today",
    date: ".date",
    scheduled: ".scheduled",


    // scalable
    scalable: ".scalable",
    summary: ".summary",

    // collapsible
    collapsible: ".collapsible",
    notBasic: ":not(.basic)",
    notBasicAndToggle: ":not(.basic, button.toggle)",

    // toggle block
    toggleBlock: ".toggle_block",

    // tab block and toggle tab block
    tabBlock: ".tab_block",
    toggleTabBlock: ".toggle_tab_block",
    titledTabBlock: ".titled_tab_block",
    tabSet: "ul.tab_set",
    slidingSubjectBlock: ".sliding_subject_block",
    tabContentBlocks: ".tab_content_blocks",

    // scoped tab block
    pageHandle: "button.page_handle",
    infiniteHPager: ".infinite_h_pager",
    boundHost: ".bound_host",

    // date shower
    dateShower: ".date_shower",
    dateReplacer: ".dete_replacer",
    fullYear: ".full_year",
    year2d: ".year_2d",
    paddedMonth: ".padded_month",
    paddedDate: ".padded_date",

    // num keypad
    numKeypad: ".num_keypad",

    // checkbox set
    checkboxSet: ".checkbox_set",

    // checkbox ally
    checkboxAlly: ".checkbox_ally",


    // swipe handler
    blockSwipe: ".block_swipe",
    


    // data related using //


    eoo: eoo
};

// Element data specifier constants
const eds = {
    // for rim ui
    onReady: "data-on-ready",
    opened: "data-opened",
    tabId: "data-tab-id",
    active: "data-active",
    onTop: "data-on-top",
    static: "data-static",
    multiInstance: "data-multi-instance",

    // for bind data
    index: "data-index",

    // for container
    articleStepsId: "data-article-steps-id",

    // for page manager,
    openPage: "data-open-page",
    closePage: "data-close-page",

    // for session manager
    containerType: "data-container-type",
    containerId: "data-container-id",
    articleId: "data-article-id",

    // for page handle
    bind: "data-bind",
    bindAmount: "data-bind-amount",
    bindValue: "data-bind-value",
    bindAttr: "data-bind-attr",
    bindStyle: "data-bind-style",
    bindArray: "data-bind-array",
    bindArrayIndex: "data-bind-array-index",
    bindArrayItem: "data-bind-array-item",
    bindArrayAmount: "data-bind-array-amount",
    bindArrayValue: "data-bind-array-value",
    bindArrayAttr: "data-bind-array-attr",
    bindArrayStyle: "data-bind-array-style",
    bindObjectArrayItem: "data-bind-object-array-item",
    bindObjectArrayAmount: "data-bind-object-array-amount",
    bindObjectArrayValue: "data-bind-object-array-value",
    bindObjectArrayAttr: "data-bind-object-array-attr",
    bindObjectArrayStyle: "data-bind-object-array-style",
    showOnExists: "data-show-on-exists",
    showOnEquals: "data-show-on-equals",
    showOnExistsObjectArrayItem: "data-show-on-exists-object-array-item",
    showOnEqualsObjectArrayItem: "data-show-on-equals-object-array-item",

    // for estre ui attribute
    prefix: "data-prefix",
    suffix: "data-suffix",
    fore: "data-fore",
    hind: "data-hind",
    nose: "data-nose",
    tail: "data-tail",
    hat: "data-hat",
    shoe: "data-shoe",

    // for common
    id: "data-id",
    size: "data-size",
    count: "data-count",
    contained: "data-contained",
    noTransition: "data-no-transition",
    year: "data-year",
    month: "data-month",
    adjoin: "data-adjoin",
    adjoinWeek: "data-adjoin-week",
    week: "data-week",
    day: "data-day",
    date: "data-date",
    dateY: "data-date-y",
    dateM: "data-date-m",
    dateD: "data-date-d",
    today: "data-today",
    selected: "data-selected",
    category: "data-category",
    group: "data-group",
    origin: "data-origin",
    selection: "data-selection",
    slide: "data-slide",
    subject: "data-subject",
    type: "data-type",
    transition: "data-transition",
    satisfy: "data-satisfy",
    show: "data-show",
    length: "data-length",
    title: "data-title",
    for: "data-for",
    name: "data-name",
    ally: "data-ally",

    // body global switch
    onResizing: "data-on-resizing",
    onMoving: "data-on-moving",
    notAllowed: "data-not-allowed",

    // for component
    focusOnBring: "data-focus-on-bring",

    // for unified calendar
    fitCalendar: "data-fit-calendar",
    scaleOverride: "data-scale-override",

    // for variable calendar
    structureType: "data-structure-type",
    showSchedulePrefix: "data-show-schedule-",
    currentScheduleOrigin: (origin) => "data-current-schedule-" + origin + "-origin",
    currentScheduleBasicOrigin: "data-current-schedule-basic-origin",
    currentScheduleDataOrigin: "data-current-schedule-data-origin",
    scale: "data-scale",
    scaleId: "data-scale-id",
    scaleSelected: "data-scale-selected",
    beginScale: "data-begin-scale",
    showToday: "data-show-today",
    loaded: "data-loaded",
    scheduleUnit: "data-schedule-unit",
    
    // for calendarstructure
    todayYear: "data-today-y",
    todayMonth: "data-today-m",
    todayWeek: "data-today-w",
    todayDay: "data-today-d",
    focusYear: "data-focus-y",
    focusMonth: "data-focus-m",
    focusWeek: "data-focus-w",
    focusDay: "data-focus-d",

    // for scheduler
    preload: "data-preload",
    division: "data-division",
    dateId: "data-date-id",
    scheduleId: "data-schedule-id",

    // for scelable
    lookScale: "data-look-scale",
    maxScale: "data-max-scale",

    // for collapsible & toggle blocks
    collapsed: "data-collapsed",
    contentCollapsed: "data-content-collapsed",

    // for toggle tab block
    beginTab: "data-begin-tab",
    tabSelected: "data-tab-selected",

    // for scoped tab block
    scope: "data-scope",
    direction: "data-direction",
    bound: "data-bound",
    pageSelected: "data-page-selected",


    // for checkbox set
    checkboxSelection: "data-checkbox-selection",


    // for date shower
    dateFrom: "data-date-from",
    withSuffix: "data-with-suffix",


    // for internal link
    openTarget: "data-open-target",
    openContainer: "data-open-container",
    openId: "data-open-id",


    // for swipe handler
    onSwipe: "data-on-swipe",
    onGrab: "data-on-grab",


    // data related using //
    // common
    registered: "data-registered",


    eoo: eoo
}



//override global(window) methods
classicAlert = alert;
classicConfirm = confirm;
classicPrompt = prompt;


function estreAlert(options = {}) {
    return new Promise((resolve) => pageManager.bringPage("!alert", {
        data: options,
        onOk() {
            this?.data?.callbackOk();
            resolve(t);
        },
        onDissmiss() {
            this?.data?.callbackDissmiss();
            resolve(u);
        },
     }));
}

alert = (title, message,
    callbackOk = () => {},
    callbackDissmiss = () => {},
    ok = isKorean() ? "확인" : "OK",
) => estreAlert({ title, message, callbackOk, callbackDissmiss, ok });


function estreConfirm(options = {}) {
    return new Promise((resolve) => pageManager.bringPage("!confirm", {
        data: options,
        onPositive() {
            this?.data?.callbackPositive();
            resolve(t);
        },
        onNegative() {
            this?.data?.callbackNegative();
            resolve(f);
        },
        onNeutral() {
            this?.data?.callbackNeutral();
            resolve(n);
        },
        onDissmiss() {
            this?.data?.callbackDissmiss();
            resolve(u);
        },
    }));
}

confirm = (title, message,
    callbackPositive = () => {},
    callbackNegative = () => {},
    callbackDissmiss = () => {},
    callbackNeutral = null,
    positive = isKorean() ? "예" : "OK",
    negative = isKorean() ? "아니오" : "NO",
    neutral = isKorean() ? "나중에" : "Later",
) => {
    if (typeof message == U) return classicConfirm(title + (message != null ? "\n" + message : ""));
    else return estreConfirm({ title, message, callbackPositive, callbackNegative, callbackDissmiss, callbackNeutral, positive, negative, neutral });
}


function estrePrompt(options = {}) {
    return new Promise((resolve) => pageManager.bringPage("!prompt", {
        data: options,
        onConfirm(text) {
            this?.data?.callbackConfirm(text);
            resolve(text);
        },
        onDissmiss() {
            this?.data?.callbackDissmiss();
            resolve(u);
        },
     }));
}

prompt = (title,
    value = "",
    message,
    callbackConfirm = (text) => {},
    callbackDissmiss = () => {},
    confirm = isKorean() ? "확인" : "Confirm",
    placeholder = "",
    type = "text",//number, password
) => {
    if (typeof message == U) return classicPrompt(title + (message != null ? "\n" + message : ""));
    else return estrePrompt({ title, message, callbackConfirm, callbackDissmiss, confirm, placeholder, type, value });
}


// Infinite loop and prograss meter
/**
 * Show infinite loop wait indicator
 * 
 * @param {instanceOrigin} / instance access origin code
 */
const wait = function (instanceOrigin) {
    return pageManager.bringPage("!onRunning") ? instanceOrigin : u;
}

/**
 * Hide infinite loop wait indicator
 * 
 * @param {instanceOrigin} / instance access origin code
 */
const go = function (instanceOrigin) {
    return pageManager.closePage("!onRunning", false, instanceOrigin);
}


/**
 * Show progress bar(or own custom shape)
 * 
 * @param {meter: object} { current: is 0 to 1000, null to finish } is binded to UI
 * @param {instanceOrigin} / instance access origin code
 * 
 * @returns {bindedHandle: object} Adjust bindedHandle.current value to progress animation
 */
const going = function (meter = { current: 0 }, instanceOrigin) {
    meter.instanceOrigin = instanceOrigin;
    return pageManager.bringPage("!onProgress", { data: meter }, instanceOrigin) ? meter.binded : u;
}

/**
 * Hide progress bar(or own custom shape)
 * 
 * @param {instanceOrigin} / instance access origin code
 */
const arrived = function (instanceOrigin) {
    return pageManager.closePage("!onProgress", false, instanceOrigin);
}



const noti = function (title, htmlContent, onTakeInteraction = (intent) => {}, mainIconSrc, subIconSrc) {
    //<= To do implement
}


class EstreNotationManager {

    // static
    static #page = "popNote";

    static #queue = [];
    static current = null;

    static postHandle = null;

    static get noInteraction() { return (intent) => {}; }

    static post(message, showTime = 3000, onTakeInteraction = this.noInteraction, options = {}) {
        if (message != null && !isNaN(showTime) && showTime > 0) {
            return new Promise((resolve) => {
                const it = new EstreNotationManager(message, showTime, onTakeInteraction, options, resolve);
                this.#queue.push(it);
                // console.log(this.#page + " posted: ", it);
                setTimeout(() => this.postHandler(), 0);
            });
        }
    }

    static postHandler() {
        console.log("queue: ", this.#queue);
        if (this.postHandle == null && this.current == null && this.#queue.length > 0) {
            const handle = Date.now();
            this.postHandle = handle;
            const current = this.#queue.splice(0, 1)[0];
            current.data.posted = handle;
            // console.log(this.#page + " bring: ", current);
            return pageManager.bringPage("!" + this.#page, current, handle);
        }
    }

    static checkOut(intent) {
        if (intent.data.posted != null && this.postHandle == intent.data.posted) {
            if (this.current == intent) {
                this.current = null;
            }
            this.postHandle = null;
            // console.log(this.#page + " checked out: ", intent);
            setTimeout(() => { this.postHandler(); }, 0);
        }
        intent.resolver?.(intent);
    }

    // instance property
    data = {
        posted: null,
        content: null,
        showTime: null,
        interactive: null,
        resolver: null,

        //options
        iconSrc: null,
        textSize: null,
        textWeight: null,
        textColor: null,
        bgColor: null,
    };

    onTakeInteraction = null;

    constructor(message, showTime = 3000, onTakeInteraction = EstreNotationManager.noInteraction, options = {}, resolver) {
        for (const item in options) this.data[item] = options[item];
        this.data.content = message;
        this.data.showTime = showTime;
        this.onTakeInteraction = onTakeInteraction;
        if (onTakeInteraction != EstreNotationManager.noInteraction) this.data.interactive = "";
        this.resolver = resolver;
    }
}

const note = function (message, showTime = 3000, onTakeInteraction = EstreNotationManager.noInteraction, options = {}) {
    return EstreNotationManager.post(...arguments);
}



// Storage handler
const ES_PREFIX = "ESAF_";//Estre Syncretic Applicate Framework

/**
 * Estre Storage access handler
 */
class ES {

    #storage = null;
    #storagePrefix = null;

    get #prefix() { return ES_PREFIX + this.#storagePrefix; }


    #getFullKey(key) { return this.#prefix + key; }



    constructor(storage, storagePrefix) {
        this.#storage = storage;
        this.#storagePrefix = storagePrefix;
    }

    
    #get(key, type = "string", def) {
        if (key == null | key == "") return;
        const value = this.#storage.getItem(this.#getFullKey(key));
        switch (type) {

            case "boolean":
                if (value == "true") return true;
                else if (value == "false") return false;
                else if (value == "null") return null;
                else return def;

            case "int":
                if (isNaN(value)) return def;
                else return parseInt(value);

            case "float":
                if (isNaN(value)) return def;
                else return parseFloat(value);

            case "object":
                if (value == null || value == "") return def;
                else try {
                    return JSON.parse(value);
                } catch (ex) {
                    console.log("[" + ex.name + "]" + ex.message);
                    console.log(value);
                    return def;
                }

            case "binary":
                if (value == null || value == "") return def;
                else try {
                    return atob(value);
                } catch (ex) {
                    console.log("[" + ex.name + "]" + ex.message);
                    console.log(value);
                    return def;
                }

            case "bytes":
                if (value == null || value == "") return def;
                else try {
                    return Uint8Array.from(atob(value), (m) => m.codePointAt(0));
                } catch (ex) {
                    console.log("[" + ex.name + "]" + ex.message);
                    console.log(value);
                    return def;
                }

            case "string":
            default:
                return value == null ? def : value;
        }

    }

    getBoolean(key, def) { return this.#get(key, "boolean", def); }
    getInt(key, def) { return this.#get(key, "int", def); }
    getFloat(key, def) { return this.#get(key, "float", def); }
    getString(key, def) { return this.#get(key, "string", def); }
    getBinary(key, def) { return this.#get(key, "binary", def); }
    getBytes(key, def) { return this.#get(key, "bytes", def); }
    getObject(key, def) { return this.#get(key, "object", def); }

    get(key, def) { return this.getString(key, def); }
        

    #set(key, type = "string", value) {
        if (key == null | key == "") return undefined;
        let valueString = null;
        switch (type) {

            case "object":
                try {
                    valueString = JSON.stringify(value);
                } catch (ex) {
                    console.log("[" + ex.name + "]" + ex.message);
                    console.log(value);
                    return false;
                }
                break;

            case "binary":
                try {
                    valueString = btoa(value);
                } catch (ex) {
                    console.log("[" + ex.name + "]" + ex.message);
                    console.log(value);
                    return false;
                }
                break;

            case "bytes":
                try {
                    valueString = btoa(Array.from(value, (x) => String.fromCodePoint(x)).join(""));
                } catch (ex) {
                    console.log("[" + ex.name + "]" + ex.message);
                    console.log(value);
                    return false;
                }
                break;

            case "string":
                valueString = value;
                break;

            case "boolean":
            case "int":
            case "float":
            default:
                valueString = "" + value;
                break;
        }

        return this.#storage.setItem(this.#getFullKey(key), valueString == null ? "" : valueString);
    }

    setBoolean(key, value) { return this.#set(key, "boolean", value); }
    setInt(key, value) { return this.#set(key, "int", value); }
    setFloat(key, value) { return this.#set(key, "float", value); }
    setString(key, value) { return this.#set(key, "string", value); }
    setBinary(key, value) { return this.#set(key, "binary", value); }
    setBytes(key, value) { return this.#set(key, "bytes", value); }
    setObject(key, value) { return this.#set(key, "object", value); }
    
    set(key, value) { return this.setString(key, value); }
    
}

/**
 * Session storage handler
 */
const ESS = new ES(sessionStorage, "SS_");

/**
 * Local storage handler
 */
const ELS = new ES(localStorage, "LS_");


/**
 * Async works manager
 */
class EstreAsyncManager {

    static works = new Set();
    static onClears = new Set();

    static get workIs() { return Array.from(this.works).length; }
    
    static beginWork(specifier, host, just = Date.now()) {
        const id = just + "@" + host + "#" + specifier;

        this.works.add(id);

        return id;
    }
    
    static endOfWork(id) {
        this.works.delete(id);

        const lefts = this.workIs
        if (lefts < 1) this.bringFinishCallback();

        return lefts;
    }

    static setOnFinishedCurrentWorks(callback) {
        if (this.workIs < 1) callback(0);
        else this.onClears.add(callback);
    }

    static bringFinishCallback() {
        const callbacks = Array.from(this.onClears);
        const lefts = this.workIs;

        for (var callback of callbacks) callback(lefts);
    }
}



/**
 * Common page handle model
 */
class EstrePageHandle {

    hostType = "unknown";

    host = null

    host = null;
    $host = null;
    id = null;

    get isStatic() { return this.$host?.attr(eds.static) == t1; }
    get isModal() { return this.$host?.hasClass("modal"); }
    get isOnTop() {
        const onTop = this.$host?.attr(eds.onTop);
        return onTop == t1 || onTop == "1*";
    }

    get isCanBack() { return false; }

    get title() { return this.$host?.attr(eds.title); }

    get isFullyHided() {
        const onTop = this.$host?.attr(eds.onTop);
        return onTop == "" || onTop == t0;
    }

    #handler = null;
    get handler() { return this.#handler; }

    #intent = null;
    get intent() { return this.#intent; }
    
    #isOpened = false;
    get isOpened() { return this.#isOpened; }
    #isShowing = false;
    get isShowing() { return this.isOpened && this.#isShowing; }
    #isFocused = false;
    get isFocused() { return this.isShowing && this.#isFocused; }

    currentOnTop = null;


    constructor(host) {
        this.host = host;
        this.$host = $(host);

        if (this.host.pageHandle != null && this.host.pageHandle != this) {
            try {
            this.host.pageHandle.release();
            } catch (ex) {
                console.log(ex.name + "\n", ex.message);
            }
        }
        this.host.pageHandle = this;
    }

    release(remove) {
        this.onRelease(remove);

        if (this.host != null) this.host.pageHandle = null;

        if (remove === true) this.$host?.remove();
        else if (remove === false) this.$host?.empty();
        this.host = null;
        this.$host = null;
    }

    init(intent) {
        if (this.handler == null) this.setHandler(new EstrePageHandler(this));

        this.pushIntent(intent);

        this.onBring();

        return this;
    }

    setHandler(handler) {
        if (this.#handler == null) this.#handler = handler;
    }
    
    pushIntent(intent) {
        if (intent != n) {
            if (intent === f) this.#intent = null;
            else if (this.intent == null) this.#intent = intent;
            else for (var key in intent) this.intent[key] = intent[key];
            if (this.intent != null) console.log("pushed intent on " + this.hostType + " " + EstreUiPage.from(this).pid + "\n", this.intent);
            return true;
        } else false;
    }


    show(isRequest = false, setFocus = true) {
        if (!this.isShowing) {
            this.onOpen();
            this.onShow();
            this.$host.attr(eds.onTop, t1 + "*");
            setTimeout(() => {
                const $host = this?.$host;
                if ($host != null && $host.attr(eds.onTop) == t1 + "*") {
                    $host.attr(eds.onTop, t1);
                    if (setFocus) this?.focus();
                }
            }, 0);
            return true;
        } else return false;
    }

    focus() {
        if (!this.isFocused) {
            this.onFocus();
            return true;
        } else return false;
    }

    reload(isRequest = true) {
        if (isRequest) return this.onReload();
        else if (this.#isOpened) {
            const onTop = this.currentOnTop;
            const onReload = this.handler?.onReload;
            return (onTop != null && onTop.onReload()) || (onReload != null && (() => {
                console.log("[performReload] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
                return onReload(this);
            })());
        } else return false;
    }

    async back(isRequest = true) {
        if (isRequest) return await this.onBack();
        else if (this.isShowing) {
            const onTop = this.currentOnTop;
            const onBack = this.handler?.onBack;
            return (onTop != null && await onTop.onBack()) || (onBack != null && await (async () => {
                console.log("[performBack] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
                return await onBack(this);
            })());
        } else return false;
    }

    blur() {
        if (this.isFocused) {
            this.onBlur();
            return true;
        } else return false;
    }

    hide(fullyHide = true) {
        if (this.isShowing || !this.isFullyHided) {
            return new Promise((resolve) => {
                this.blur();
                this.onHide(fullyHide);
                if (fullyHide) {
                    this.$host.attr(eds.onTop, t0);
                    setTimeout(() => {
                        const $host = this?.$host;
                        if ($host != null && $host.attr(eds.onTop) == t0) {
                            $host.attr(eds.onTop, "");
                            resolve(true);
                        } else resolve(false);
                    }, cvt.t2ms(this.$host.css(a.trdr)));
                } else {
                    this.$host.attr(eds.onTop, t0 + "*");
                    resolve(true);
                }
            });
        } else return false;
    }

    async close(isRequest = false, isOnRelease = false) {
        if (this.isOpened) {
            await this.hide();
            return this.onClose(isOnRelease);
        } else return false;
    }


    onBring() {
        console.log("[onBring] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
        if (this.handler?.onBring != null) this.handler.onBring(this);
        if (this.intent?.onBring != null) for (var item of this.intent.onBring) if (item.from == this.hostType && !item.disabled) this.processAction(item);
    }

    onOpen() {
        if (!this.isOpened) {
            console.log("[onOpen] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
            this.#isOpened = true;
            if (this.handler?.onOpen != null) this.handler.onOpen(this);
            if (this.intent?.onOpen != null) for (var item of this.intent.onOpen) if (item.from == this.hostType && !item.disabled) this.processAction(item);
            return true;
        } else return false;
    }

    onShow() {
        if (!this.isShowing) {
            console.log("[onShow] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
            this.#isShowing = true;
            if (this.handler?.onShow != null) this.handler.onShow(this);
            if (this.intent?.onShow != null) for (var item of this.intent.onShow) if (item.from == this.hostType && !item.disabled) this.processAction(item);
            return true;
        } else return false;
    }

    onFocus() {
        if (!this.isFocused) {
            console.log("[onFocus] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
            this.#isFocused = true;
            if (this.handler?.onFocus != null) this.handler.onFocus(this);
            if (this.intent?.onFocus != null) for (var item of this.intent.onFocus) if (item.from == this.hostType && !item.disabled) this.processAction(item);
            return true;
        } else return false;
    }

    onReload() {
        if (this.isOpened) {
            console.log("[onReload] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
            return this.reload(false);
        } else return false;
    }

    async onBack() {
        if (this.isShowing) {
            console.log("[onBack] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
            return await this.back(false);
        } else return false;
    }

    onBlur() {
        if (this.isShowing) {
            console.log("[onBlur] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
            if (this.intent?.onBlur != null) for (var item of this.intent.onBlur) if (item.from == this.hostType && !item.disabled) this.processAction(item);
            if (this.handler?.onBlur != null) this.handler.onBlur(this);
            this.#isFocused = false;
            return true;
        } else return false;
    }

    onHide(fullyHide) {
        if (this.isShowing) {
            console.log("[onHide] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
            if (this.intent?.onHide != null) for (var item of this.intent.onHide) if (item.from == this.hostType && !item.disabled) this.processAction(item);
            if (this.handler?.onHide != null) this.handler.onHide(this, fullyHide);
            this.#isShowing = false;
            return true;
        } else return false;
    }

    onClose(isOnRelease = false) {
        if (this.isOpened && (isOnRelease || !this.isStatic)) {
            console.log("[onClose] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
            if (this.intent?.onClose != null) for (var item of this.intent.onClose) if (item.from == this.hostType && !item.disabled) this.processAction(item);
            if (this.handler?.onClose != null) this.handler.onClose(this);
            this.#isOpened = false;
            return true;
        } else return false;
    }

    onRelease(remove) {
        if (this.isStatic) this.close(false, true);
        const removal = remove == null ? "leave" : (remove ? "remove" : "empty")
        console.log("[onRelease(" + removal + ")] " + this.sectionBound + " " + this.hostType + " " + EstreUiPage.from(this)?.pid?.split("=")?.[1], this.host);
        if (this.handler?.onRelease != null) this.handler.onRelease(this, remove);
        if (this.intent?.onRelease != null) for (var item of this.intent.onRelease) if (item.from == this.hostType && !item.disabled) this.processAction(item);
    }


    processAction(data) {
        if (data?.from == this.hostType) {
            switch (data.action) {
                case "autoClose":
                    if (data.host != null) {
                        const handle = this.getHost(data.host);
                        if (data.time != null && !isNaN(data.time)) {
                            setTimeout(() => handle?.close(), parseInt(data.time));
                        }
                    }
                    break;

                case "closePage":
                    if (data.targetPid != null) {
                        pageManager.closePage(data.targetPid);
                    }
                    break;
            }
        }
    }

    getHost(hostType) {
        return this;
    }

}


/**
 * Page host's handle (page handles sub pages)
 */
class EstrePageHostHandle extends EstrePageHandle {

    get title() { return this.currentOnTop?.title ?? this.$host?.attr(eds.title); }

    get subPages() { return {}; }
    get subPageList() { return []; }
    get $subPages() { return $(); }
    get $subPage() { return {}; }

    get isSingleSubPage() { return this.$subPages.length === 1; }
    get isMultiSubPages() { return this.$subPages.length > 1; }

    get currentTop() { return this.currentOnTop ?? this.subPageList.at(-1); }

    prevSubPageId = null;

    get isAvailablePrevSubPage() { return this.prevSubPageId != null && this.subPages[this.prevSubPageId] != null; }


    initSubPages(intent) {

    }

    registerSubPage(element, intent) {

    }

    unregisterConatiner(pageHandle) {

    }


    showSubPage(id, intent) {

    }

    openSubPage(id, intent) {
        
    }

    async closeSubPage(id) {

    }

    terminate() {

    }

}


/**
 * Component page handle for main sections & menu sections
 */
class EstreComponent extends EstrePageHostHandle {
    // constants
    hostType = "component";
    get sectionBound() { return "main" };

    // class property
    static components = {};
    static componentList = [];


    // static methods;
    static register(component) {
        const registered = EstreUiPage.registerOrCommitFrom(component);
        if (registered === false) return false;
        this.unregister(component);
        this.componentList.push(component);
        this.components[component.id] = component;
        return registered;
    }

    static unregister(component) {
        if (this.components[component.id] != null) delete this.components[component.id];
        const index = this.componentList.indexOf(component);
        if (index > -1) this.componentList.splice(index, 1);
        EstreUiPage.unregisterFrom(component);
    }


    // instance property
    get isCanBack() { switch (this.sectionBound) {
            case "main":
                return !this.isHome && ((estreUi.prevRootTabId != null && estreUi.mainSections[estreUi.prevRootTabId] != null) || estreUi.mainSections["home"] != null);

            case "blind":
            case "menu":
            case "overlay":
            case "header":
                return false;
        }
    }

    get subPages() { return this.containers; }
    get subPageList() { return this.containerList; }
    get $subPages() { return this.$containers; }
    get $subPage() { return this.$container; }

    containers = {};
    containerList = [];
    get $containers() { return this.$host?.find(c.c + uis.container); };
    $container = {};

    get isSingleContainer() { return this.isSingleSubPage; }
    get isMultiContainer() { return this.isMultiSubPages; }

    get isAvailableRootContainer() { return this.containers["root"] != null; }
    get isExistBackContainer() { return this.isMultiSubPages && (this.isAvailablePrevSubPage || ((this.currentTop?.isSub ?? false) && this.isAvailableRootContainer)); }

    get isContainersAllyStatic() {
        for (var container of this.containerList) if (!container.isStatic) return false;
        return true;
    }

    get $articles() { return this.$host.find(c.c + uis.container + c.c + uis.article); };

    get isHome() { return this.id == "home" || this.$host.hasClass("home"); }

    constructor(component) {
        super(component);
        this.id = component.id;
    }

    release(remove) {
            
        this.unregister();

        super.release(remove);
    }

    init(intent) {
        if (this.register() === false) return true;

        super.init(intent);

        this.initContainers(intent);

        return this;
    }

    register() {
        return EstreComponent.register(this);
    }

    unregister() {
        EstreComponent.unregister(this);
    }

    
    initSubPages(intent) {
        return this.initContainers(intent);
    }

    registerSubPage(element, intent) {
        return this.registerContainer(element, intent);
    }

    unregisterConatiner(pageHandle) {
        return this.unregisterConatiner(pageHandle);
    }

    initContainers(intent) {
        for (var container of this.$containers) {
            const $container = $(container);
            this.$container[$container.attr(eds.containerId)] = $container;
            this.registerContainer(container, intent);
        }

        let $top = this.$containers.filter(asv(eds.onTop, t1));
        if ($top.length < 1) $top = this.$containers.filter(aiv(eds.containerId, "root"));
        if ($top.length < 1) $top = this.$containers;
        $top[$top.length - 1]?.pageHandle?.show(false);
    }

    registerContainer(element, intent) {
        this.unregisterConatiner(element.pageHandle);
        const container = new EstreContainer(element, this);
        this.$container[container.id] = container.$host;
        this.containers[container.id] = container;
        this.containerList.push(container);
        EstreUiPage.registerOrCommitFrom(container);
        container.init(intent);
        //if (container.isOnTop) container.show(false);
        return container;
    }

    unregisterConatiner(container) {
        if (container == null) return;
        EstreUiPage.unregisterFrom(container);
        container.release(!container.isStatic ? true : null);
        if (this.$container[container.id] != null) delete this.$container[container.id];
        if (this.containers[container.id] != null) delete this.containers[container.id];
        const index = this.containerList.indexOf(container);
        if (index > -1) this.containerList.splice(index, 1);
    }


    // handles
    showSubPage(id, intent) {
        return this.showContainer(id, intent);
    }

    openSubPage(id, intent) {
        return this.openContainer(id, intent);
    }

    async closeSubPage(id) {
        return await this.closeContainer(id);
    }

    showContainer(id, intent) {
        if (id != null) {
            const container = this.containers[id];
            if (container != null) {
                if (id != this.currentTop.id && this.currentTop.id != this.prevSubPageId) this.prevSubPageId = this.currentTop.id;
                for (var current of this.containerList) if (current.isOnTop && current != container) {
                    current.hide();
                }
                container.pushIntent(intent);
                container.show(false);
                this.currentOnTop = container;

                switch (this.sectionBound) {
                    case "menu":
                    case "main":
                        estreUi.showExactAppbar(this, container);
                        break;
                }
                return true;
            }
        }
        return false;
    }

    openContainer(id, intent) {
        const page = pageManager.getConatiner(id, this.id, this.sectionBound);
        if (page == null) return null;
        if (page.statement == "static") return null;
        this.$host.append(page.raw);
        const $container = this.$containers.filter(aiv(eds.containerId, id));
        if ($container == null || $container.length < 1) return null;
        return this.registerContainer($container[0], intent);
    }

    async closeContainer(id) {
        if (id != null) {
            const container = this.containers[id];
            if (container != null) {
                const task = container.close(false);
                setTimeout(() => {
                    const $containers = this.$containers?.filter(naiv(eds.containerId, id));
                    if ($containers != null) {
                        if ($containers.length > 0) {
                            if (this.prevSubPageId != null) {
                                if (this.showContainer(this.prevSubPageId)) this.prevSubPageId = null;
                            } else $containers?.[$containers.length - 1]?.pageHandle?.show();
                        } else setTimeout(() => {
                            if (this.$containers.filter(naiv(eds.containerId, id)).length < 1) this?.close();
                        }, 0);
                    }
                }, 0);
                const result = await task;
                if (!container.isStatic) this.unregisterConatiner(container);
                return result;
            }
        }
        return null;
    }

    async onCloseContainer() {
        return await this.currentOnTop?.close();
    }

    show(isRequest = true, setFocus = true) {
        if (isRequest) {
            return estreUi.switchRootTab(estreUi.$rootTabs.filter(aiv(eds.tabId, this.id)));
        } else return super.show(false, setFocus);
    }

    focus() {
        if (this.isShowing) {
            const $containers = this.$containers;
            let $top = $containers.filter(asv(eds.onTop, t1));
            var $targetContainer = null;
            if ($top != null) $targetContainer = $top;
            else if ($containers.length > 0) $targetContainer = $($containers[$containers.length-1]);

            let processed = false;
            if ($targetContainer != null) {
                processed = $targetContainer[$targetContainer.length - 1]?.pageHandle?.focus();
            }
            
            super.focus();

            return processed;
        } else false;
    }

    async back(isRequest = true) {
        return await super.back(isRequest);// || (this.sectionBound == "main" && this.isShowing && this.id != "home" && estreUi.switchRootTab("home"));
    }

    blur() {
        super.blur()

        const $containers = this.$containers;
        let $top = $containers.filter(asv(eds.onTop, t1));
        var $targetContainer = null;
        if ($top != null && $top.length > 0) $targetContainer = $top;
        else if ($containers.length > 0) $targetContainer = $($containers[$containers.length-1]);

        if ($targetContainer != null) {
            var processed = false
            for (var container of $targetContainer) processed |= container.pageHandle?.blur();
            return processed;
        } else return false;
    }

    async close(isRequest = true) {
        if (isRequest) {
            if (this.isModal) {
                return await estreUi.closeModalTab(this.id, this.$host);
            } else return false;
        } else return await super.close(false);
    }


    onShow() {
        const processed = super.onShow();
        let $top = this.$containers.filter(asv(eds.onTop, t1));
        if ($top.length < 1) $top = this.$containers;
        const container = $top[$top.length - 1]?.pageHandle;
        if (container != null) {
            container.onShow();
            this.currentOnTop = container;
            // container.onFocus();
        }
        return processed;
    }

    onHide() {
        let $top = this.$containers.filter(asv(eds.onTop, t1));
        if ($top.length < 1) $top = this.$containers;
        const container = $top[$top.length - 1]?.pageHandle;
        if (container != null) {
            container.onBlur();
            container.onHide();
        }
        return super.onHide();
    }

    onClose() {
        for (var container of this.containerList.reverse()) container.close();

        return super.onClose();
    }
}



/**
 * Component page handle for menu sections
 */
class EstreMenuComponent extends EstreComponent {
    // constants
    get sectionBound() { return "menu"; };

    // class property
    static components = {};
    static componentList = [];


    // static methods
    


    // instance property




    constructor(component) {
        super(component);
    }

    release(remove) {


        super.release(remove);
    }

    init(intent) {


        super.init(intent);

        

        return this;
    }

    register() {
        return EstreMenuComponent.register(this);
    }

    unregister() {
        EstreMenuComponent.unregister(this);
    }

    show(isRequest = true, setFocus = true) {
        if (isRequest) {
            return estreUi.showMenuArea(this.id);
        } else super.show(false, setFocus);
    }

    async close(isRequest = true) {
        if (isRequest) {
            return await estreUi.closeMenuArea(this.id);
        } else return await super.close(false);
    }
}



/**
 * Component page handle for header sections
 */
class EstreHeaderComponent extends EstreComponent {
    // constants
    get sectionBound() { return "header"; };

    // class property
    static components = {};
    static componentList = [];


    // static methods
    


    // instance property




    constructor(component) {
        super(component);
    }

    release(remove) {


        super.release(remove);
    }

    init(intent) {


        super.init(intent);

        

        return this;
    }

    register() {
        return EstreHeaderComponent.register(this);
    }

    unregister() {
        EstreHeaderComponent.unregister(this);
    }

    show(isRequest = true, setFocus = true) {
        if (isRequest) {
            return estreUi.showHeaderBar(this.id);
        } else super.show(false, setFocus);
    }

    async close(isRequest = true) {
        if (isRequest) {
            return await estreUi.closeHeaderBar(this.id);
        } else return await super.close(false);
    }
}



/**
 * Component page handle for blinded sections
 */
class EstreInstantComponent extends EstreComponent {
    // constants
    get sectionBound() { return "blind"; };

    // class property
    static components = {};
    static componentList = [];


    // static methods
    


    // instance property




    constructor(component) {
        super(component);
    }

    release(remove) {


        super.release(remove);
    }

    init(intent) {


        super.init(intent);

        

        return this;
    }

    register() {
        return EstreInstantComponent.register(this);
    }

    unregister() {
        EstreInstantComponent.unregister(this);
    }

    show(isRequest = true, setFocus = true) {
        if (isRequest) {
            return estreUi.showInstantBlinded(this.id);
        } else super.show(false, setFocus);
    }

    async close(isRequest = true) {
        if (isRequest) {
            return await estreUi.closeInstantBlinded(this.id);
        } else return await super.close(false);
    }
}



/**
 * Component page handle for managed overlay sections
 */
class EstreOverlayComponent extends EstreInstantComponent {
    // constants
    get sectionBound() { return "overlay"; };

    // class property
    static components = {};
    static componentList = [];


    // static methods
    


    // instance property




    constructor(component) {
        super(component);
    }

    release(remove) {


        super.release(remove);
    }

    init(intent) {


        super.init(intent);

        

        return this;
    }

    register() {
        return EstreOverlayComponent.register(this);
    }

    unregister() {
        EstreOverlayComponent.unregister(this);
    }

    show(isRequest = true, setFocus = true) {
        if (isRequest) {
            return estreUi.showManagedOverlay(this.id);
        } else super.show(false, setFocus);
    }

    async close(isRequest = true) {
        if (isRequest) {
            return await estreUi.closeManagedOverlay(this.id);
        } else return await super.close(false);
    }
}


/**
 * Container page handle
 */
class EstreContainer extends EstrePageHostHandle {
    
    hostType = "container";

    get sectionBound() { return this.component.sectionBound; }

    component = null;

    #articleStepsId = null;

    #$stepNavigation = null;
    #$stepNavTitleName = null;
    #$stepIndicator = null;
    get #$stepPointers() { return this.#$stepIndicator.find(c.c + uis.stepPointer); }
    get #$stepDividers() { return this.#$stepIndicator.find(c.c + uis.stepDivider); }

    #$masterFloat = null;
    #$masterFloatPad = null;
    #$masterButton = null;
    #$masterButtonTitle = null;

    #onMasterButtonClick = null;

    get isCanBack() { return this.component.isExistBackContainer; }

    get isRoot() { return this.id == "root"; }
    get isSub() { return this.id != "root"; }

    get subPages() { return this.articles; }
    get subPageList() { return this.articleList; }
    get $subPages() { return this.$articles; }
    get $subPage() { return this.$article; }

    articles = {};
    articleList = [];
    get $articles() { return this.$host?.find(c.c + ar); };
    $article = {};

    get isSingleArticle() { return this.isSingleSubPage; }
    get isMultiArticle() { return this.isMultiSubPages; }

    get isAvailableMainArticle() { return this.articles["main"] != null; }
    get isExistBackArticle() { return this.isMultiSubPages && (this.isAvailablePrevSubPage || ((this.currentTop?.isSub ?? false) && this.isAvailableMainArticle)); }

    get isArticlesAllyStatic() {
        for (var article of this.articleList) if (!article.isStatic) return false;
        return true;
    }

    get $currentArticle() {
        const $articles = this.$articles;
        const $onTop = $articles.filter(asv(eds.onTop, t1));
        if ($onTop.length < 1) return $($articles[$articles.length - 1]);
        else if ($onTop.length > 1) return $($onTop[$onTop.length - 1]);
        else return $onTop;
    }
    get currentArticleStepIndex() {
        return this.getArticleStepIndex(this.$currentArticle);
    }
    get stepPagesLength() { return pageManager.getStepPagesLength(this.#articleStepsId, this.id, this.component.id, this.component.sectionBound); }

    constructor(container, component) {
        super(container);
        this.component = component;
        this.id = this.$host.attr(eds.containerId);
    }
    
    release(remove) {

        super.release(remove);
    }

    init(intent) {
        EstreUiPage.from(this).fetchHandler(this);
        super.init(intent);

        this.setEventHandle();

        this.initArticles(intent);

        return this;
    }

    setEventHandle() {
        const inst = this;
        
        this.$host.find(".back_navigation").click(function (e) {
            e.preventDefault();

            const index = inst.currentArticleStepIndex;
            if (index != NaN) {
                const prevIndex = index - 1;
                if (prevIndex > -1) inst.showArticle(inst.#articleStepsId + "%" + prevIndex);
            }

            return false;
        });
        
        this.$host.find(".container_closer").click(function (e) {
            e.preventDefault();

            inst.close();

            return false;
        });

        const $masterFloat = this.$host.find(".container_master_float");
        if ($masterFloat.length > 0) {
            this.#$masterFloat = $masterFloat;
            const $masterButton = $masterFloat.find(".container_master_button");
            if ($masterButton.length > 0) {
                this.#$masterButton = $masterButton;
                this.#$masterButtonTitle = $masterButton.find(".container_master_action");

                $masterButton.click(function (e) {
                    e.preventDefault();

                    if (inst.#onMasterButtonClick?.(e, this) !== true) {
                        const articleStepsId = inst.#articleStepsId;
                        if (articleStepsId != null) {
                            const current = inst.currentArticleStepIndex;
                            if (current != NaN) {
                                const length = inst.stepPagesLength;
                                const next = current + 1;
                                const nextId = articleStepsId + "%" + next;
                                if (next < length) pageManager.bringPage(EstreUiPage.getPidArticle(nextId, inst.id, inst.component.id, inst.component.sectionBound));
                            }
                        }
                    }

                    return false;
                });
            }

            this.#$masterFloat.before(doc.ce(div, "master_float_pad"));
            this.#$masterFloatPad = this.$host.find(".master_float_pad");
            setTimeout(() => this.#$masterFloatPad.css("height",  + this.#$masterFloat.height() + "px"), 0);
        }
    }
    
    initSubPages(intent) {
        return this.initArticles(intent);
    }

    registerSubPage(element, intent) {
        return this.registerArticle(element, intent);
    }

    unregisterConatiner(pageHandle) {
        return this.unregisterArticle(pageHandle);
    }

    initArticles(intent) {

        const articleStepsId = this.$host.attr(eds.articleStepsId);
        if (articleStepsId != null && articleStepsId != "") this.#initStepNavigation(articleStepsId);

        for (var article of this.$articles) this.registerArticle(article, intent);

        const $scalables = this.$host.find(c.c + ar + uis.scalable);
        if (this.host.innerWidth >= 740) {//반응형 와이드 모드 기본값 적용
            $scalables.attr(eds.lookScale, t2);
        } else switch ($scalables.length) { //섹션 컴포넌트의 메인 항목 갯수에 따른 초기 표시 모드 적용
            case 0: //해당 없음 - 기본적으로 학생 등록 항목 노출
                break;
                
            case 1: //신규 등록 항목만 노출될 때
            case 2: //등록된 항목 1건
                // $scalables.attr(eds.lookScale, t2);
                // break;

            // case 3: //등록된 항목 2건
                $scalables.attr(eds.lookScale, t1);
            break;

            default: //등록된 항목 3건 이상
                $scalables.attr(eds.lookScale, t0);
                break;
        }

        $scalables.filter(opa + eds.registered + equ + v0 + cla).attr(eds.lookScale, t0);

        let $top = this.$articles.filter(asv(eds.onTop, t1));
        if ($top.length < 1) $top = this.$articles.filter(aiv(eds.articleId, "main"));
        if ($top.length < 1) $top = this.$articles;
        $top[$top.length - 1]?.pageHandle?.show(false);
    }

    registerArticle(element, intent) {
        this.unregisterArticle(element.pageHandle);
        const article = new EstreArticle(element, this);
        this.$article[article.id] = article.$host;
        this.articles[article.id] = article;
        this.articleList.push(article);
        EstreUiPage.registerOrCommitFrom(article);
        article.init(intent);
        //if (article.isOnTop) article.show(false);
        return article;
    }

    unregisterArticle(article) {
        if (article == null) return;
        EstreUiPage.unregisterFrom(article);
        article.release(!article.isStatic ? true : null);
        if (this.$article[article.id] != null) delete this.$article[article.id];
        if (this.articles[article.id] != null) delete this.articles[article.id];
        const index = this.articleList.indexOf(article);
        if (index > -1) this.articleList.splice(index, 1);
    }

    #initStepNavigation(articleStepsId) {
        this.#articleStepsId = articleStepsId;
        this.#$stepNavigation = this.$host.find(c.c + uis.stepNavigation);
        this.#$stepNavTitleName = this.#$stepNavigation.find(".cur_step_name");
        this.#$stepIndicator = this.#$stepNavigation.find(uis.stepIndicator);

        this.#$stepIndicator.empty();
        this.#updateStepNavigation(articleStepsId);
    }

    #updateStepNavigation(articleStepsId = this.#articleStepsId) {
        const $currentArticle = this.$currentArticle;

        if (this.#$stepIndicator != null) { 
            const $articleSteps = this.$host.find(asv(eds.articleId, articleStepsId + "%"));
            const $stepPointers = this.#$stepPointers;
            const $stepDividers = this.#$stepDividers;
            const length = Math.max(this.stepPagesLength, $articleSteps.length);
            var steps = $stepPointers.length;
            if ($stepDividers.length != steps - 1) {
                this.#$stepIndicator.empty();
                steps = 0;
            }
            if (steps < length) for (var i=steps; i<length; i++) {
                if (i > 0) this.#$stepIndicator.append(doc.ce(div, "step_divider"));
                this.#$stepIndicator.append(doc.ce(div, "step_pointer"));
            } else if (steps > length) {
                const diff = steps - length;
                for (var i=0; i<diff; i++) {
                    this.#$stepIndicator.last().remove();
                    if (this.#$stepPointers.length > 0) this.#$stepIndicator.last().remove();
                }
            }

            const index = this.currentArticleStepIndex;
            const $pointers = this.#$stepPointers;
            if (index != NaN) {
                $pointers.filter(aiv(eds.active, t1)).attr(eds.active, null);
                $($pointers[index]).attr(eds.active, t1);
            }
        }

        if (this.#$stepNavTitleName != null) {
            if ($currentArticle.length > 0) this.#$stepNavTitleName.text($currentArticle.attr(eds.title));
        }
    }

    focusMasterButton() {
        this.#$masterButton?.focus();
    }

    performClickMasterButton() {
        this.#$masterButton?.click();
    }

    setOnClickMasterButton(onClick = null) {
        this.#onMasterButtonClick = onClick;
    }

    setMasterButtonDisabled(disabled) {
        this.#$masterButton?.prop("disabled", disabled);
    }

    setMasterButtonText(text) {
        this.#$masterButtonTitle?.text(text);
    }

    getHost(hostType) {
        if (this.hostType == hostType) return this;
        else return this.component.getHost(hostType);
    }

    show(isRequest = true, setFocus = true) {
        if (isRequest) {
            return this.component.showContainer(this.id);
        } else return super.show(false, setFocus);
    }

    focus() {
        if (this.isShowing) {
            const $articles = this.$articles;
            let $top = $articles.filter(asv(eds.onTop, t1));
            var $targetArticle = null;
            if ($top != null && $top.length > 0) $targetArticle = $top;
            else if ($articles.length > 0) $targetArticle = $($articles[$articles.length-1]);

            let processed = false;
            if ($targetArticle != null) {
                processed = $targetArticle[$targetArticle.length - 1]?.pageHandle?.focus();
            }

            super.focus();

            return processed;
        } else return false;
    }

    blur() {
        this.onBlur();

        const $articles = this.$articles;
        let $top = $articles.filter(asv(eds.onTop, t1));
        var $targetArticle = null;
        if ($top != null && $top.length > 0) $targetArticle = $top;
        else if ($articles.length > 0) $targetArticle = $($articles[$articles.length-1]);

        if ($targetArticle != null) {
            var processed = false;
            for (var article of $targetArticle) processed |= article.pageHandle?.blur();
            return processed;
        } return false;
    }

    async close(isRequest = true) {
        if (isRequest) {
            return await this.component.closeContainer(this.id);
        } else return await super.close(false);
    }

    onShow() {
        const processed = super.onShow();
        let $top = this.$articles.filter(asv(eds.onTop, t1));
        if ($top.length < 1) $top = this.$articles;
        const article = $top[$top.length - 1]?.pageHandle;
        if (article != null) {
            article.onShow();
            this.currentOnTop = article;
            // article.onFocus();
        }
        return processed;
    }

    onHide() {
        let $top = this.$articles.filter(asv(eds.onTop, t1));
        if ($top.length < 1) $top = this.$articles;
        const article = $top[$top.length - 1]?.pageHandle;
        if (article != null) {
            article.onBlur();
            article.onHide();
        }
        return super.onHide();
    }

    onClose() {
        if (super.onClose()) { 
            const stepped = [];
            for (var id in this.articles) if (id.indexOf(this.#articleStepsId + "%") === 0) stepped.push(id);
            if (stepped.length > 0) {
                const sorted = stepped.sort();
                for (var i=sorted.length-1; i>-1; i--) this.closeArticle(sorted[i]);
            } else {
                for (var article of this.articleList.reverse()) article.close();
            }

            return true;
        } else return false;
    }


    // handles
    showSubPage(id, intent) {
        return this.showArticle(id, intent);
    }

    openSubPage(id, intent) {
        return this.openArticle(id, intent);
    }

    async closeSubPage(id) {
        return await this.closeArticle(id);
    }

    showArticle(id, intent) {
        if (id != null) {
            const $target = this.$article[id];
            if ($target != null && $target.length > 0) {
                const onlyOne = this.$articles.filter(ntc("dummy")).length === 1;
                const $currentTop = this.$articles.filter(asv(eds.onTop, t1));
                //console.log($currentTop);
                if (id != this.currentTop.id && this.currentTop.id != this.prevSubPageId) this.prevSubPageId = this.currentTop.id;
                if (this.$host.hasClass("v_stack") || this.$host.hasClass("h_stack")) {
                    $target[0]?.pageHandle?.pushIntent(intent);
                    const current = this.currentArticleStepIndex;
                    const target = this.getArticleStepIndex($target);
                    const isNext = onlyOne || target > current;
                    const currentOnTop1 = isNext ? "-1" : "+1";
                    const targetOnTop1 = isNext ? "+1" : "-1";
                    const targetOnTop2 = isNext ? "+" : "-";
                    if ($currentTop.length > 0) {
                        $currentTop.attr(eds.onTop, currentOnTop1);
                        setTimeout(() => {
                            for (var currentTop of $currentTop) if (currentTop.dataset.onTop == currentOnTop1) {
                                currentTop.pageHandle?.blur();
                                currentTop.pageHandle?.onHide();
                                //currentTop.dataset.onTop = "";
                            }
                            $currentTop.attr(eds.onTop, null);
                        }, cvt.t2ms($currentTop.css(a.trdr)));
                    }
                    $target.attr(eds.onTop, targetOnTop1);
                    setTimeout(() => {
                        if ($target?.attr(eds.onTop) == targetOnTop1) {
                            $target?.[0].pageHandle?.onOpen();
                            $target?.[0].pageHandle?.onShow();
                            $target?.attr(eds.onTop, targetOnTop2);
                            setTimeout(() => {
                                if ($target?.attr(eds.onTop) == targetOnTop2) {
                                    $target?.attr(eds.onTop, t1);
                                    $target?.[0].pageHandle?.focus();
                                    this.#updateStepNavigation();
                                }
                            }, cvt.t2ms($target?.css(a.trdr)) + cvt.t2ms($target?.css(a.trdl)));
                        }
                    }, 0);
                    const targetArticle = $target.pageHandle;
                    this.currentOnTop = targetArticle;

                    switch (this.sectionBound) {
                        case "menu":
                        case "main":
                            estreUi.showExactAppbar(this, this.container, targetArticle);
                            break;
                    }
                    return true;
                } else {
                    const targetArticle = $target[0]?.pageHandle;
                    for (var currentTop of $currentTop) {
                        const article = currentTop.pageHandle
                        if (article != null && (targetArticle == null || article != targetArticle)) {
                            article.hide();
                        }
                    }
                    targetArticle?.pushIntent(intent);
                    targetArticle?.show(false);
                    this.currentOnTop = targetArticle;

                    switch (this.sectionBound) {
                        case "menu":
                        case "main":
                            estreUi.showExactAppbar(this.component, this, targetArticle);
                            break;
                    }
                    return true;
                }
            }
        }
        return false;
    }

    openArticle(id, intent) {
        const page = pageManager.getArticle(id, this.id, this.component.id, this.component.sectionBound);
        if (page == null) return null;
        if (page.statement == "static") return null;
        var $exist = this.$articles.filter(aiv(eds.articleId, id));
        if ($exist.length > 0) {
            this.closeArticle(id);
            var $exist = this.$articles.filter(aiv(eds.articleId, id));
            if ($exist.length > 0) {
                if ($exist[0].pageHandle != null) $exist[0].pageHandle.release(true);
                else $exist.remove();
            }
        }
        const $articles = this.$articles;
        //this.$articles.filter(aiv(eds.onTop, t1)).attr(eds.onTop, "");
        if ($articles.length > 0) $($articles[$articles.length - 1]).after(page.raw);
        else this.$host.append(page.raw);
        const $article = this.$articles.filter(aiv(eds.articleId, id));
        if ($article == null || $article.length < 1) return null;
        const article = this.registerArticle($article[0], intent);
        //this.#updateStepNavigation();
        return article;
    }

    async closeArticle(id) {
        if (id != null) {
            const article = this.articles[id];
            if (article != null) {
                const task = article.close(false);
                setTimeout(() => {
                    const $articles = this.$articles?.filter(naiv(eds.articleId, id));
                    if ($articles != null) {
                        if ($articles.length > 0) {
                            if (this.prevSubPageId != null) {
                                if (this.showArticle(this.prevSubPageId)) this.prevSubPageId = null;
                            } else $articles?.[$articles.length - 1]?.pageHandle?.show();
                        } else setTimeout(() => {
                            if (this.$articles.filter(naiv(eds.articleId, id)).length < 1) this?.close();
                        }, 0);
                    }
                }, 0);
                const result = await task;
                if (!article.isStatic) this.unregisterArticle(article);
                return result;
            }
        }
        return null;
    }
    
    getArticleStepIndex($article) {
        if ($article.length > 0) {
            return parseInt($article.attr(eds.articleId).split("%")[1]);
        } else return -1;
    }
}


/**
 * Article page handle
 */
class EstreArticle extends EstrePageHandle {

    hostType = "article";

    get sectionBound() { return this.container.component.sectionBound; }

    container = null;

    get isStatic() { return this.$host?.attr(eds.static) == t1; }

    get isMain() { return this.id == "main"; }
    get isSub() { return this.id != "main"; }

    get isCanBack() { return this.container.isExistBackArticle; }


    handles = [];
    

    unifiedCalendars = [];

    scalables = [];
    collapsibles = [];
    toggleBlocks = [];
    toggleTabBlocks = [];
    tabBlocks = [];

    dateShowers = [];

    constructor(article, container) {
        super(article);
        this.container = container;
        this.id = this.$host.attr(eds.articleId);
    }


    release(remove) {
        this.releaseHandles();

        super.release(remove);
    }

    init(intent) {
        EstreUiPage.from(this).fetchHandler(this);
        super.init(intent);

        this.initHandles();

        this.initInternalLink();
        this.initPageLink();

        return this;
    }

    pushIntent(intent) {
        if (super.pushIntent(intent)) {
            console.log("on called data bind - " + EstreUiPage.from(this).pid);
            this.initDataBind();
        }
    }

    initDataBind() {
        if (this.intent != null) {
            const data = this.intent.data;

            if (data != null) for (var item in data) {
                const value = data[item];

                this.$host.find(aiv(eds.bind, item)).html(value);
                this.$host.find(aiv(eds.bindAmount, item)).html(v2a(value));
                this.$host.find(aiv(eds.bindValue, item)).val(value);

                this.$host.find(acv(eds.bindAttr, item + "@")).each((i, elem) => {
                    const $elem = $(elem);
                    const attr = $elem.attr(eds.bindAttr);
                    if (attr != null && attr != "") {
                        const targets = attr.split(" ");
                        for (var target of targets) {
                            const targetInfos = target.split("@");
                            const targetItem = targetInfos[0];
                            const targetAttr = targetInfos[1];
                            if (targetItem == item) $elem.attr(targetAttr, value);
                        }
                    }
                });

                this.$host.find(acv(eds.bindStyle, item + "@")).each((i, elem) => {
                    const $elem = $(elem);
                    const style = $elem.attr(eds.bindStyle);
                    if (style != null && style != "") {
                        const targets = style.split(" ");
                        for (var target of targets) {
                            const targetInfos = target.split("@");
                            const targetItem = targetInfos[0];
                            const targetStyle = targetInfos[1];
                            if (targetItem == item) $elem.css(targetStyle, value);
                        }
                    }
                });

                this.$host.find(acv(eds.bindAttr, item + "@")).each((i, elem) => {
                    const $elem = $(elem);
                    const attr = $elem.attr(eds.bindAttr);
                    if (attr != null && attr != "") {
                        const targets = attr.split(" ");
                        for (var target of targets) {
                            const targetInfos = target.split("@");
                            const targetItem = targetInfos[0];
                            const targetAttr = targetInfos[1];
                            if (targetItem == item) $elem.attr(targetAttr, value);
                        }
                    }
                });

                if (value instanceof Array) this.$host.find(aiv(eds.bindArray, item)).each((i, elem) => {
                    const $elem = $(elem);

                    const liHtml = $elem.first().html();
                    $elem.empty();
                    
                    for (var index in value) {
                        const arrayItem = value[index];

                        const li = $.parseHTML(liHtml);
                        const $li = $(li);
                        $elem.append($li);

                        $li.find(ax(eds.bindArrayIndex)).each((i, elem) => {
                            const $elem = $(elem);
                            $elem.attr($elem.attr(eds.bindArrayIndex), index);
                        });

                        const valueIsObject = typeof arrayItem == "object";

                        var arrayItemValue = arrayItem;
                        if (valueIsObject) {
                            arrayItemValue = JSON.stringify(arrayItem);

                            for (var objItem in arrayItem) {
                                const value = arrayItem[objItem];

                                $li.find(aiv(eds.bindObjectArrayItem, objItem)).html(value);
                                $li.find(aiv(eds.bindObjectArrayAmount, objItem)).html(v2a(value));
                                $li.find(aiv(eds.bindObjectArrayValue, objItem)).val(value);

                                $li.find(acv(eds.bindObjectArrayAttr, objItem + "@")).each((i, elem) => {
                                    const $elem = $(elem);
                                    const attr = $elem.attr(eds.bindObjectArrayAttr);
                                    if (attr != null && attr != "") {
                                        const targets = attr.split(" ");
                                        for (var target of targets) {
                                            const targetInfos = target.split("@");
                                            const targetItem = targetInfos[0];
                                            const targetAttr = targetInfos[1];
                                            if (targetItem == objItem) $elem.attr(targetAttr, value);
                                        }
                                    }
                                });

                                $li.find(acv(eds.bindObjectArrayStyle, objItem + "@")).each((i, elem) => {
                                    const $elem = $(elem);
                                    const style = $elem.attr(eds.bindObjectArrayStyle);
                                    if (style != null && style != "") {
                                        const targets = style.split(" ");
                                        for (var target of targets) {
                                            const targetInfos = target.split("@");
                                            const targetItem = targetInfos[0];
                                            const targetStyle = targetInfos[1];
                                            if (targetItem == objItem) $elem.css(targetStyle, value);
                                        }
                                    }
                                });
                            }
                        }

                        $li.find(ax(eds.bindArrayItem)).html(arrayItemValue);
                        $li.find(ax(eds.bindArrayAmount)).html(v2a(arrayItemValue));
                        $li.find(ax(eds.bindArrayValue)).val(arrayItemValue);

                        if (valueIsObject) arrayItemValue = btoa(Jcodd.toCodd(arrayItemValue));

                        $li.find(ax(eds.bindArrayAttr)).each((i, elem) => {
                            const $elem = $(elem);
                            const attrs = $elem.attr(eds.bindArrayAttr);
                            if (attrs != null && attrs != "") {
                                const targets = attrs.split(" ");
                                for (var target of targets) $elem.attr(target, arrayItemValue);
                            }
                        });

                        $li.find(ax(eds.bindArrayStyle)).each((i, elem) => {
                            const $elem = $(elem);
                            const styles = $elem.attr(eds.bindArrayStyle);
                            if (styles != null && styles != "") {
                                const targets = styles.split(" ");
                                for (var target of targets) $elem.css(target, arrayItemValue);
                            }
                        });


                        $li.find(ax(eds.showOnExistsObjectArrayItem)).each((i, elem) => {
                            if (arrayItem == null || arrayItem[elem.dataset.showOnExistsObjectArrayItem] == null || arrayItem[elem.dataset.showOnExistsObjectArrayItem] == "") $(elem).css("display", "none");
                        });
            
                        $li.find(acv(eds.showOnEqualsObjectArrayItem, "=")).each((i, elem) => {
                            const divided = elem.dataset.showOnEqualsObjectArrayItem.split("=");
                            if (arrayItem == null || arrayItem[divided[0]] != divided[1]) $(elem).css("display", "none");
                        });            
                    }
                });
            }

            this.$host.find(ax(eds.showOnExists)).each((i, elem) => {
                if (data == null || data[elem.dataset.showOnExists] == null || data[elem.dataset.showOnExists] == "") $(elem).css("display", "none");
            });

            this.$host.find(acv(eds.showOnEquals, "=")).each((i, elem) => {
                const divided = elem.dataset.showOnEquals.split("=");
                if (data == null || data[divided[0]] != divided[1]) $(elem).css("display", "none");
            });            
        }
    }

    releaseHandles() {
        EstreHandle.releaseHandles(this.$host, this);
    }

    initHandles() {
        EstreHandle.initHandles(this.$host, this);
    }

    registerHandle(specifier, handle) {
        if (this.handles[specifier] == null) this.handles[specifier] = [];
        this.handles[specifier].push(handle);
    }

    unregisterHandle(specifier, handle) {
        const index = this.handles[specifier].indexOf(handle);
        this.handles[specifier].splice(index, 1);
    }


    initInternalLink() {
        if (this.$host.is(ax(eds.openTarget) + ax(eds.openContainer) + ax(eds.openId))) this.setEventInternalLink(this.host);
        const $links = this.$host.find(ax(eds.openTarget) + ax(eds.openContainer) + ax(eds.openId));
        for (var item of $links) this.setEventInternalLink(item);
    }

    initPageLink() {
        if (this.$host.is(ax(eds.closePage))) this.setEventPageCloseLink(this.host);
        const $closeLinks = this.$host.find(ax(eds.closePage));
        for (var item of $closeLinks) this.setEventPageCloseLink(item);
        
        if (this.$host.is(ax(eds.openPage))) this.setEventPageOpenLink(this.host);
        const $openLinks = this.$host.find(ax(eds.openPage));
        for (var item of $openLinks) this.setEventPageOpenLink(item);
    }




    // event handlers
    setEventInternalLink(item) {
        const inst = this;

        $(item).click(function(e) {
            e.preventDefault();

            const $this = $(this);

            const targetSet = $this.attr(eds.openTarget).split("@");
            const target = targetSet.length < 2 ? "self" : targetSet[0];//$this.closest(se + uis.rootTabContent).attr("id")
            const targetBound = targetSet[targetSet.length < 2 ? 0 : 1];
            const container = $this.attr(eds.openContainer);
            const id = $this.attr(eds.openId);

            switch (targetBound) {
                case "root":
                    switch (container) {
                        case "component":
                            let component;
                            switch (inst.sectionBound) {
                                case "main":
                                    estreUi.switchRootTab(id);
                                    break;
                    
                                case "blind":
                                    component = estreUi.blindSections[id];
                                    if (component == null) {
                                        estreUi.openInstantBlinded(id);
                                        component = estreUi.blindSections[id];
                                    }
                                    if (component != null) estreUi.showInstantBlinded(id);
                                    break;
                    
                                case "overlay":
                                    component = estreUi.overlaySections[id];
                                    if (component == null) {
                                        estreUi.openManagedOverlay(id);
                                        component = estreUi.overlaySections[id];
                                    }
                                    if (component != null) estreUi.showManagedOverlay(id);
                                    break;
                    
                                case "menu":
                                    component = estreUi.menuSections[id];
                                    if (component == null) {
                                        estreUi.openMenuArea(id);
                                        component = estreUi.menuSections[id];
                                    }
                                    if (component != null) estreUi.showMenuArea(id);
                                    break;
                    
                                case "header":
                                    component = estreUi.headerSections[id];
                                    if (component == null) {
                                        estreUi.openHeaderBar(id);
                                        component = estreUi.headerSections[id];
                                    }
                                    if (component != null) estreUi.showHeaderBar(id);
                                    break;
                            }
                            break;
                    }
                    break;

                case "component":
                    switch (container) {
                        case "container":
                            const isSelf = target == "self";
                            const thisComponent = inst.container.component;
                            let component;
                            if (isSelf) component = thisComponent;
                            else switch (thisComponent.sectionBound) {
                                case "main":
                                    component = estreUi.mainSections[target];
                                    if (component == null) {
                                        estreUi.switchRootTab(target);
                                        component = estreUi.mainSections[target];
                                    }
                                    break;
                    
                                case "blind":
                                    component = estreUi.blindSections[target];
                                    if (component == null) {
                                        estreUi.openInstantBlinded(target);
                                        component = estreUi.blindSections[target];
                                    }
                                    break;
                    
                                case "overlay":
                                    component = estreUi.overlaySections[target];
                                    if (component == null) {
                                        estreUi.openManagedOverlay(target);
                                        component = estreUi.overlaySections[target];
                                    }
                                    break;
                    
                                case "menu":
                                    component = estreUi.menuSections[target];
                                    if (component == null) {
                                        estreUi.openMenuArea(target);
                                        component = estreUi.menuSections[target];
                                    }
                                    break;
                    
                                case "header":
                                    component = estreUi.headerSections[target];
                                    if (component == null) {
                                        estreUi.openHeaderBar(target);
                                        component = estreUi.headerSections[target];
                                    }
                                    break;
                            }
                            if (component != null) {
                                let targetContainer = component.containers[id];
                                if (targetContainer == null) {
                                    component.openContainer(id);
                                    targetContainer = component.containers[id];
                                }
                                if (targetContainer != null) {
                                    let success = targetContainer.show();
                                    if (success && !isSelf) switch (component.sectionBound) {
                                        case "main":
                                            estreUi.switchRootTab(target);
                                            break;
                                            
                                        case "blind":
                                            estreUi.showInstantBlinded(target);
                                            break;

                                        case "overlay":
                                            estreUi.showManagedOverlay(target);
                                            break;

                                        case "menu":
                                            estreUi.showMenuArea(target);
                                            break;

                                        case "header":
                                            estreUi.showHeaderBar(target);
                                            break;
                                    }
                                }
                            }
                            break;
                    }
                    break;

                case "container":
                    switch (container) {
                        case "article":
                            const isSelf = target == "self";
                            const component = inst.container.component;
                            let targetContainer = isSelf ? inst.container : component.containers[target];
                            if (targetContainer == null) {
                                component.openContainer(target);
                                targetContainer = component.containers[target];
                            }
                            if (targetContainer != null) {
                                let article = targetContainer.articles[id];
                                if (article == null) {
                                    targetContainer.openArticle(id);
                                    article = targetContainer.articles[id];
                                }
                                if (article != null) {
                                    let success = article.show();
                                    if (success) targetContainer.show();
                                }
                            }
                            break;
                    }
                    break;

            }

            return false;
        });
    }

    setEventPageOpenLink(item) {
        $(item).click(function(e) {
            e.stopPropagation();

            const $this = $(this);

            const pid = $this.attr(eds.openPage);

            pageManager.bringPage(pid);
        });
    }

    setEventPageCloseLink(item) {
        $(item).click(function(e) {
            e.stopPropagation();

            const $this = $(this);

            const pid = $this.attr(eds.closePage);

            pageManager.closePage(pid);
        });
    }


    show(isRequest = true, setFocus = true) {
        if (isRequest) {
            return this.container.showArticle(this.id);
        } else return super.show(false, setFocus);
    }

    async close(isRequest = true) {
        if (isRequest) {
            return await this.container.closeArticle(this.id);
        } else return await super.close(false);
    }


    focus() {
        if (this.isShowing) {
            const $target = this.$host.find(ax(eds.focusOnBring));
            var bigger = 0;
            for (var item of $target) {
                const index = parseInt($(item).attr(eds.focusOnBring));
                if (index > bigger) bigger = index;
            }

            for (var i=0; i<=bigger; i++) {
                const $found = $target.filter(aiv(eds.focusOnBring, i));
                if ($found.length > 0) {
                    $($found[0]).focus();
                    break;
                }
            }

            super.focus();

            return true;
        } else return false;
    }


    getHost(hostType) {
        if (this.hostType == hostType) return this;
        else return this.container.getHost(hostType);
    }
}



/**
 * Page handler base
 */
class EstrePageHandler {

    #provider = null;
    get provider() { return this.#provider; }

    handle = null;
    get intent() { this.handle.intent; }

    constructor (handle, provider) {
        this.handle = handle;
        this.#provider = provider;
    }
    

    onBring(handle) {

    }

    onOpen(handle) {

    }

    onShow(handle) {

    }

    onFocus(handle) {

    }

    onReload(handle) {
        // Rebuild(close and bring) is default action
        if (!handle.isStatic) {
            const pid = EstreUiPage.from(handle).pid;
            const intent = handle.intent;
            if (handle.close()) return pageManager.bringPage(pid, intent);
            else {
                handle.show();
                return false;
            }
        } else return false;
    }

    async onBack(handle) {
        return handle.hostType != "component" ? (handle.isCanBack ? (handle.isStatic ? await handle.close() != null : await handle.close()) : false) : (
        handle.sectionBound == "blind" || !handle.isStatic ? await handle.close() : false);
    }

    onHide(handle, fullyHide) {

    }

    onClose(handle) {

    }

    onRelease(handle, remove) {

    }
}

class EstreLottieAnimatedHandler extends EstrePageHandler {
    $container;
    $article;
    $lottie;
    get lottie() { return this.$lottie?.[0]; }
    get player() { return this.lottie?.getLottie(); }

    onBring(handle) {
        this.$container = handle.$host;
        this.$article = this.$container.find(ar + aiv(eds.articleId, "main"));
        this.$lottie = this.$article.find(dlp);
    }

    onShow(handle) {
        this.player?.play();
    }

    onHide(handle) {
        this.player?.pause();
    }
}

class EstreDialogPageHandler extends EstrePageHandler {
    $container;
    $article;
    $dialog;
    $title;
    $backer;
    $closer;
    $actions;

    onBring(handle) {
        this.$container = handle.$host;
        this.$article = this.$container.find(ar + aiv(eds.articleId, "main"));
        this.$dialog = this.$article.find(div + cls + "dialog");
        this.$title = this.$dialog.find(div + cls + "title")
        this.$backer = this.$title.find(btn + cls + "back")
        this.$closer = this.$title.find(btn + cls + "close")
        this.$actions = this.$dialog.find(div + cls + "actions");

        if (handle.intent?.data?.backButton === true) this.$dialog.attr("data-back", t1);
        if (handle.intent?.data?.closeButton === true) this.$dialog.attr("data-close", t1);
    }

    onOpen(handle) {
        this.$container.click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            handle?.close();
            
            return false;
        });
        this.$dialog.click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            return false;
        });
        this.$dialog.keydown(function (e) {
            if (e.keyCode == 27) {
                e.preventDefault();
                handle.close();
                return false;
            }
        });
        this.$backer.click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            handle.close();

            return false;
        });
        this.$closer.click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            handle.close();

            return false;
        });
        this.$actions.find("input, button").on("keydown", function (e) {
            if (e.keyCode == 27) {
                e.preventDefault();

                handle?.close();

                return false;
            }
        });
    }

    onClose(handle) {
        if (handle?.intent?.onDissmiss != null) handle.intent.onDissmiss();
    }
}


/**
 * Pages profiling manager
 */
class EstreUiPage {

    static #pageHandlers = {
        "$s&h=appbar": class extends EstrePageHandler {
            $appTitleBtn;
            $mainMenuBtn;
            $backNavigation;
            $containerCloser;

            $pageTitleHolder;
            $pageTitle;

            onBring(handle) {
                this.$appTitleBtn = handle.$host.find("#appTitleBtn");
                this.$mainMenuBtn = handle.$host.find("#mainMenuBtn");
                this.$backNavigation = handle.$host.find(".back_navigation");
                this.$containerCloser = handle.$host.find(".container_closer");

                this.$pageTitleHolder = handle.$host.find(".page_title_holder");
                this.$pageTitle = this.$pageTitleHolder.find("#pageTitle");
            }

            onOpen(handle) {
                this.$backNavigation.click(function (e) {
                    e.preventDefault();

                    estreUi.back();

                    return false;
                });
                this.$containerCloser.click(function (e) {
                    e.preventDefault();

                    estreUi.closeContainer();

                    return false;
                });
            }

            setPageTitle(title) {
                this.$pageTitle.html(title);
            }
        },


        "$i&o=interaction#onRunning^": class extends EstreLottieAnimatedHandler {

        },
        "$i&o=interaction#onProgress^": class extends EstreLottieAnimatedHandler {
            get perfectValue()      { return 1000; }    // 100% value
            get zeroPosition()      { return 15; }      // 0% frame
            get halfPosition()      { return 75; }      // 50% frame
            get perfectPosition()   { return 105; }     // 100% frame
            get finishPosition()    { return 251; }     // complete frame

            get halfValue()         { return this.perfectValue / 2; }   // 50% value
            get interFrames()       { return this.perfectPosition - this.zeroPosition; } // progress frames
            get preFrames()         { return this.halfPosition - this.zeroPosition; }    // second half frames
            get postFrames()        { return this.perfectPosition - this.halfPosition; } // second half frames

            isRunning = false;

            onBring(handle) {
                super.onBring(handle);

                const intentData = handle.intent.data;
                intentData.binded = new class {
                    instanceOrigin = intentData.instanceOrigin;
                    #current = intentData.current ?? 0;

                    get current() { return this.#current; }
                    set current(value) {
                        handle.handler.applyProgress(value, this.#current);
                        this.#current = value;
                    }
                }
            }

            onOpen(handle) {
                this.lottie?.addEventListener("ready", function (e) {
                    const player = this.getLottie();
                    if (player != null) {
                        player.setSegment(0, handle.handler.zeroPosition);
                        player.addEventListener("complete", function (e) {
                            handle.handler.isRunning = false;
                            // console.log("onComplete: ", player.firstFrame + player.currentFrame);
                            if (handle.intent.data.binded?.current == null) {
                                handle.close();
                            }
                        });
                        player.goToAndPlay(0, true);
                        handle.handler.isRunning = true;
                    }
                });
            }

            onShow(handle) {
                if (this.isRunning) this.player?.play();
            }

            onHide(handle) {
                if (this.isRunning) this.player?.pause();
            }

            applyProgress(value, current) {
                const val = parseInt(value);
                const player = this.player;

                if (player != null) {
                    player.pause();
                    // console.log(value, current, player.firstFrame, player.currentFrame, player.firstFrame + player.currentFrame);

                    const begin = player.firstFrame + player.currentFrame;//this.zeroPosition + parseInt(this.interFrames * (parseInt(current) / this.perfectValue));
                    const end = value != null ?
                        this.zeroPosition + (val < this.halfValue ?
                            parseInt(this.preFrames * (val / this.halfValue)) :
                            this.preFrames + parseInt(this.postFrames * ((val - this.halfValue) / this.halfValue))
                        ) : this.finishPosition;

                    const isForward = end >= begin;

                    // console.log("begin: " + begin + ", end: " + end + ", isForward: " + isForward);

                    if (isForward) player.setSegment(begin, end);
                    else player.setSegment(end, begin);
                    player.setDirection(isForward ? 1 : -1);
                    player.goToAndPlay(isForward ? 0 : player.totalFrames, true);
                    this.isRunning = true;
                }
            }
        },

        "$i&o=interaction#alert^": class extends EstreDialogPageHandler {
            $confirm;

            onBring(handle) {
                super.onBring(handle);

                this.$confirm = this.$actions.find("button.confirm");
            }

            onOpen(handle) {
                super.onOpen(handle);

                this.$confirm.click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (handle?.intent?.onOk != null) handle.intent.onOk();
                    handle?.close();
                    return false;
                });
            }

            onFocus(handle) {
                this.$confirm.focus();
            }
        },
        "$i&o=interaction#confirm^": class extends EstreDialogPageHandler {
            $positive;
            $negative;
            $neutral;

            onBring(handle) {
                super.onBring(handle);

                this.$positive = this.$actions.find("button.positive");
                this.$negative = this.$actions.find("button.negative");
                this.$neutral = this.$actions.find("button.neutral");
            }

            onOpen(handle) {
                super.onOpen(handle);

                this.$positive.click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (handle?.intent?.onPositive != null) handle.intent.onPositive();
                    handle?.close();
                    return false;
                });
                this.$negative.click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (handle?.intent?.onNegative != null) handle.intent.onNegative();
                    handle?.close();
                    return false;
                });
                if (handle?.intent?.data?.callbackNeutral == null) this.$neutral.hide();
                else this.$neutral.click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (handle?.intent?.onNeutral != null) handle.intent.onNeutral();
                    handle?.close();
                    return false;
                });
            }

            onFocus(handle) {
                this.$negative.focus();
            }
        },
        "$i&o=interaction#prompt^": class extends EstreDialogPageHandler {
            $input;
            $confirm;

            onBring(handle) {
                super.onBring(handle);

                this.$input = this.$actions.find("input");
                this.$confirm = this.$actions.find("button.confirm");
            }

            onOpen(handle) {
                super.onOpen(handle);

                this.$input.on("keydown", function (e) {
                    if (e.keyCode == 13) {
                        e.preventDefault();

                        handle?.handler?.$confirm?.click();

                        return false;
                    }
                });
                this.$confirm.click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (handle?.intent?.onConfirm != null) handle.intent.onConfirm(handle?.handler?.$input?.val());
                    handle?.close();
                    return false;
                });
            }

            onFocus(handle) {
                this.$input.focus();
            }
        },

        "$i&o=notification#noti@noti^": class extends EstrePageHandler { },
        "$i&o=notification#note@note^": class extends EstrePageHandler {
            $postBlock;

            onBring(handle) {
                this.$postBlock = handle.$host.find(".post_block");
                EstreNotationManager.current = handle.intent;
                // console.log("pushed", handle.intent);
            }

            onOpen(handle) {
                this.$postBlock.click(function (e) {
                    e.preventDefault();

                    // console.log("clicked: ", handle.intent);
                    handle.intent?.onTakeInteraction?.(handle.intent);

                    return false;
                });

                // console.log("showing: ", handle.intent);
                setTimeout(() => handle.close(), handle.intent?.data?.showTime ?? 3000);
            }

            onClose(handle) {
                EstreNotationManager.checkOut(handle.intent);
            }
        },
        
        "$s&o=operation#root@timeline": class extends EstrePageHandler { },
        "$s&o=operation#root@quickPanel": class extends EstrePageHandler { },

    };
    static #registeredPageHandlers = {};

    static #customPagesProvider = null;
    static get provider() { return this.#customPagesProvider; }

    static #handlerCommited = false;
    static get handlerCommited() { return this.#handlerCommited; }

    static registerProvider(provider) {
        if (!this.#handlerCommited && this.#customPagesProvider == null) {
            this.#customPagesProvider = provider;
        }
    }

    static registerHandler(pid, handler) {
        if (!this.#handlerCommited && this.#registeredPageHandlers[pid] == null) {
            this.#registeredPageHandlers[pid] = handler;
        }
    }

    static getHandler(pid) {
        return this.#pageHandlers[pid];
    }

    static commit() {
        this.#handlerCommited = true;

        for (var pid in this.#registeredPageHandlers) this.#pageHandlers[pid] = this.#registeredPageHandlers[pid];
    }


    #raw = null;
    get raw() { return this.#raw; }

    #componentStatement = null;//static/instant
    #containerStatement = null;//static/instant
    #articleStatement = null;//static/instant

    get componentStatement() { return this.#componentStatement; }
    get containerStatement() { return this.#containerStatement; }
    get articleStatement() { return this.#articleStatement; }

    get componentIsInatant() { return this.componentStatement == "instant"; }
    get componentIsStatic() { return this.componentStatement == "static"; }
    get containerIsInatant() { return this.containerStatement == "instant"; }
    get containerIsStatic() { return this.containerStatement == "static"; }
    get articleIsInatant() { return this.articleStatement == "instant"; }
    get articleIsStatic() { return this.articleStatement == "static"; }

    get statement() {
        if (this.#articleStatement != null) return this.#articleStatement;
        else if (this.#containerStatement != null) return this.#containerStatement;
        else if (this.#componentStatement != null) return this.#componentStatement;
        else return null;
    }
    get isInstant() { return this.statement == "instant"; }
    get isStatic() { return this.statement == "static"; }
    get isFullyStatic() {
        switch (this.hostType) {
            case "article":
                if (this.articleStatement == null) return null;
                else if (this.articleStatement != "static") return false;
            case "container":
                if (this.containerStatement == null) return null;
                else if (this.containerStatement != "static") return false;
            case "component":
                if (this.componentStatement == null) return null;
                else if (this.componentStatement != "static") return false;
                return true;

            default:
                return null;
        }
    }

    #componentIsMultiInstance = null;
    #containerIsMultiInstance = null;
    #articleIsMultiInstance = null;

    get componentIsMultiInstance() { return this.#componentIsMultiInstance; }
    get containerIsMultiInstance() { return this.#containerIsMultiInstance; }
    get articleIsMultiInstance() { return this.#articleIsMultiInstance; }

    get isMultiInstance() {
        if (this.#articleIsMultiInstance != null) return this.#articleIsMultiInstance;
        else if (this.#containerIsMultiInstance != null) return this.#containerIsMultiInstance;
        else if (this.#componentIsMultiInstance != null) return this.#componentIsMultiInstance;
        else return null;
    }

    #sectionBound = null;//main/blind/menu/overlay
    get sectionBound() { return this.#sectionBound; }
    get isOverlay() { return this.sectionBound == "overlay"; }
    get isBlinded() { return this.sectionBound == "blind"; }
    get isMain() { return this.sectionBound == "main"; }
    get isMenu() { return this.sectionBound == "menu"; }
    get isHeader() { return this.sectionBound == "header"; }

    get sections() {
        switch (this.sectionBound) {
            case "overlay":
                return estreUi.overlaySections;

            case "blind":
                return estreUi.blindSections;

            case "main":
                return estreUi.mainSections;

            case "menu":
                return estreUi.menuSections;

            case "header":
                return estreUi.headerSections;
        }
    }

    #component = null;
    #container = null;
    #article = null;

    get component() { return this.#component; }
    get container() { return this.#container; }
    get article() { return this.#article; }

    get isComponent() { return this.component != null && this.container == null && this.article == null; }
    get isContainer() { return this.component != null && this.container != null && this.article == null; }
    get isArticle() { return this.component != null && this.container != null && this.article != null; }

    get id() {
        if (this.#article != null) return this.#article;
        else if (this.#container != null) return this.#container;
        else if (this.#component != null) return this.#component;
        else return null;
    }

    #instances = [];

    #$component = null;
    #$container = null;
    #$article = null;

    get componentRefer() {
        switch (this.#sectionBound) {
            case "header":
                return estreUi.headerSections[this.id];

            case "menu":
                return estreUi.menuSections[this.id];

            case "main":
                return estreUi.mainSections[this.id];

            case "blind":
                return estreUi.blindSections[this.id];

            case "overlay":
                return estreUi.overlaySections[this.id];

            default:
                return null;
        }
    }
    get $component() { return this.#$component; }
    get $container() { return this.#$container; }
    get $article() { return this.#$article; }

    get $element() {
        if (this.#article != null) return this.#$article;
        else if (this.#container != null) return this.#$container;
        else if (this.#component != null) return this.#$component;
        else return null;
    }
    get hostType() {
        if (this.#article != null) return "article";
        else if (this.#container != null) return "container";
        else if (this.#component != null) return "component";
        else return null;
    }


    #commited = false;

    get pid() {
        var pid = "";
        pid += "$" + (this.statement == "static" ? "s" : (this.statement == "instant" ? "i" : ""));
        pid += "&" + (this.sectionBound == "main" ? "m" : (this.sectionBound == "blind" ? "b" : (this.sectionBound == "overlay" ? "o" : (this.sectionBound == "header" ? "h" : (this.sectionBound == "menu" ? "u" : "")))));
        pid += "=";
        pid += this.#component;
        if (this.#container != null) pid += "#" + this.#container;
        if (this.#article != null) pid += "@" + this.#article;
        if (this.isMultiInstance) pid += "^";
        return pid;
    }

    static getPidComponent(id, sectionBound, statement) {
        const stc = statement == "instant" ? "$i" : (statement == "static" ? "$s" : "");
        const sbc = sectionBound == "main" ? "&m" : (sectionBound == "blind" ? "&b" : (sectionBound == "overlay" ? "&o" : (sectionBound == "header" ? "&h" : (sectionBound == "menu" ? "&u" : null))));
        if (id != null && id != "" && sbc != null) return stc + sbc + "=" + id;
        else return null;
    }

    static getPidContainer(id, componentId, sectionBound, statement) {
        const basePid = this.getPidComponent(componentId, sectionBound, statement);
        if (basePid != null) return basePid + "#" + id;
    }

    static getPidArticle(id, containerId, componentId, sectionBound, statement) {
        const basePid = this.getPidContainer(containerId, componentId, sectionBound, statement);
        if (basePid != null) return basePid + "@" + id;
    }

    static registerOrCommitFrom($element) {
        return this.registerOrCommit(this.from($element));
    }

    static registerOrCommit(euiPage) {
        const exist = pageManager.get(euiPage.pid);
        if (exist == null) return euiPage.commit();
        else if (euiPage.statement == "instant") return exist.register(euiPage.$element);
        else return null;

    }

    static unregisterFrom($element) {
        const euiPage = this.from($element);
        if (euiPage == null) return false;
        const exist = pageManager.get(euiPage.pid);
        return exist?.unregister(euiPage.$element);
    }

    static from($element) {
        let element;
        if ($element instanceof EstrePageHandle) {
            element = $element.host;
            $element = $element.$host;
        } else if ($element instanceof jQuery) element = $element[0];
        else {
            element = $element;
            $element = $($element);
        }

        if (element != null) {
            const page = new EstreUiPage();
            switch (element.tagName) {
                case AR:
                    page.setArticleRefer($element);
                    break;

                case DIV:
                    if (!$element.hasClass("container")) break;
                    page.setContainerRefer($element);
                    break;

                case SE:
                    page.setComponentRefer($element);
                    break;
            }
            
            return page;
        } else return null;
    }

    constructor() {}

    setSectionBound(sectionBound) {
        if (this.#commited) return false;
        this.#sectionBound = sectionBound;
        return this;
    }

    setComponent(componentId) {
        if (this.#commited) return false;
        if (this.#component == null) this.#component = componentId;
        return this;
    }

    setContainer(containerId) {
        if (this.#commited) return false;
        if (this.#container == null) this.#container = containerId;
        return this;
    }

    setArticle(articleId) {
        if (this.#commited) return false;
        if (this.#article == null) this.#article = articleId;
        return this;
    }

    setComponentRefer($component) {
        if (this.#commited) return false;

        try {
            this.setComponent($component[0].id);
        } catch (ex) {
            // console.log(ex);
            return null;
        }

        this.#componentStatement = $component.attr(eds.static) == t1 ? "static" : "instant";
        this.#componentIsMultiInstance = $component.attr(eds.multiInstance) == t1;

        if (this.#sectionBound == null) {
            const $componentHost = $component.closest("main, nav, header, footer");
            const hostId = $componentHost.attr("id");
            const sectionBound = hostId == "staticDoc" ? "main" : (hostId == "instantDoc" ? "blind" : (hostId == "managedOverlay" ? "overlay" : (hostId == "mainMenu" ? "menu" : (hostId == "fixedTop" ? "header" : null))));
            this.setSectionBound(sectionBound);
        }

        this.#$component = $component;

        return this;
    }

    setContainerRefer($container, $component) {
        if (this.#commited) return false;

        try {
            this.setContainer($container.attr(eds.containerId));
        } catch (ex) {
            // console.log(ex);
            return null;
        }

        this.#containerStatement = $container.attr(eds.static) == t1 ? "static" : "instant";
        this.#containerIsMultiInstance = $container.attr(eds.multiInstance) == t1;

        if ($component == null) $component = $container.closest("section");

            this.setComponentRefer($component);

        this.#$container = $container;

        return this;
    }

    setArticleRefer($article, $container, $component) {
        if (this.#commited) return false;

        try {
            this.setArticle($article.attr(eds.articleId));
        } catch (ex) {
            // console.log(ex);
            return null;
        }

        this.#articleStatement = $article.attr(eds.static) == t1 ? "static" : "instant";
        this.#articleIsMultiInstance = $article.attr(eds.multiInstance) == t1;

        if ($container == null) $container = $article.closest("div.container");

            this.setContainerRefer($container, $component);

        this.#$article = $article;

        return this;
    }

    #checkRegisterSubPages() {
        if (this.#commited) return false;
        let $subPages;
        if (this.#container == null) $subPages = this.#$component.find(c.c + div + uis.container);
        else if (this.#article == null) $subPages = this.#$container.find(c.c + ar);
        else return;

        for (var page of $subPages) EstreUiPage.registerOrCommitFrom(page);
    }

    #pushInstance(host) {
        let $host;
        if (host instanceof jQuery) {
            $host = host;
            host = $host[0];
        } else $host = $(host);

        this.#instances.push(host);

        this.fetchHandler(host.pageHandle);
    }

    fetchHandler(pageHandle) {
        const handler = EstreUiPage.getHandler(this.pid);
        //console.log("pushInstance - " + this.pid + "[" + handle?.handler + "]", handle, handler);
        if (pageHandle != null && handler != null && typeof handler == "function") {
            return pageHandle.setHandler(new handler(pageHandle, EstreUiPage.provider));
        }
    }

    #sampleHTML() {
        if (this.#commited || this.#raw != null) return false;
        const $element = this.$element;
        this.#raw = $element[0].outerHTML;
        if (this.statement == "instant") {
            $element.remove();
            return null;
        } else return this.#raw;
    }

    commit() {
        if (this.#commited) return false;
        pageManager.register(this);
        if (this.isFullyStatic) this.#pushInstance(this.$element);
        if (this.#article == null) this.#checkRegisterSubPages();
        const removed = this.#sampleHTML() == null;
        this.#commited = true;
        if (removed) return false;
        else return this;
    }

    register($instance) {
        if (this.isFullyStatic) return false;
        if ($instance instanceof jQuery) for (var item of $instance) this.#pushInstance(item);
        else if ($instance instanceof Element) this.#pushInstance($instance);
        else return;
        return this.#instances;
    }

    unregister($instance) {
        if (this.isFullyStatic) return false;
        if ($instance instanceof jQuery) for (var item of $instance) this.unregister(item);
        else if ($instance instanceof Element) {
            const index = this.#instances.indexOf($instance);
            this.#instances.splice(index, 1);
        } else return;
        return this.#instances;
    }

}


/**
 * Pages operation manager
 */
class EstreUiPageManager {

    // class property


    // static methods


    // constants
    

    // instnace property
    #pages = {};

    get pages() { return this.#pages; }

    #managedPidMap = {
        get appbar() { return "$s&h=appbar"; },


        get onRunning() { return "$i&o=interaction#onRunning^"; },
        get onProgress() { return "$i&o=interaction#onProgress^"; },

        get alert() { return "$i&o=interaction#alert^"; },
        get confirm() { return "$i&o=interaction#confirm^"; },
        get prompt() { return "$i&o=interaction#prompt^"; },

        get popNoti() { return "$i&o=notification#noti@noti^"; },
        get popNote() { return "$i&o=notification#note@note^"; },
        
        get timeline() { return "$s&o=operation#root@timeline"; },
        get quickPanel() { return "$s&o=operation#root@quickPanel"; },
    }

    #extPidMap = null;
    get extPidMap() { return this.#extPidMap; }
    set extPidMap(value) {
        if (this.#extPidMap == null) this.#extPidMap = value;
    }

    constructor() {}


    init() {
        
    }
    
    register(euiPage) {
        const pid = euiPage.pid;
        if (this.#pages[pid] == null) {
            this.#pages[pid] = euiPage;

        }
    }
    

    foundPid(pid) {
        if (pid == null) return null;
        else if (this.get("$i" + pid) != null) return "$i" + pid;
        else if (this.get("$s" + pid) != null) return "$s" + pid;
        else if (this.get("$i" + pid + "^") != null) return "$i" + pid + "^";
        else if (this.get("$s" + pid + "^") != null) return "$s" + pid + "^";
        else return null;
    }

    get(pid) {
        return this.pages[pid];
    }

    getComponent(id, sectionBound = "blind", statement) {
        var pid = this.foundPid(EstreUiPage.getPidComponent(id, sectionBound, statement));
        if (pid != null) return this.get(pid);
        else return null;
    }

    getConatiner(id, componentId, sectionBound, statement) {
        var pid = this.foundPid(EstreUiPage.getPidContainer(id, componentId, sectionBound, statement));
        if (pid != null) return this.get(pid);
        else return null;
    }

    getArticle(id, containerId, componentId, sectionBound, statement) {
        var pid = this.foundPid(EstreUiPage.getPidArticle(id, containerId, componentId, sectionBound, statement));
        if (pid != null) return this.get(pid);
        else return null;
    }

    getStepPagesLength(articleStepsId, containerId, componentId, sectionBound) {
        var pid0 = this.foundPid(EstreUiPage.getPidArticle(articleStepsId + "%0", containerId, componentId, sectionBound));
        var pidPrefix = pid0.split("%")[0];
        var length = 0;
        for (var pid in this.pages) if (pid.indexOf(pidPrefix) === 0) length++;

        return length;
    }

    bringPage(pid, intent, instanceOrigin) {
        if (pid.indexOf("!") > -1) pid = this.#managedPidMap[pid.replace(/^\!/, "")];
        if (pid == null) return null;
        if (pid.indexOf("*") > -1) pid = this.extPidMap[pid.replace(/^\*/, "")];
        if (pid == null) return null;
        if (pid.indexOf("$") < 0) pid = this.foundPid(pid);
        const page = this.get(pid);
        if (page == null) return null;
        const sections = page.sections;
        if (sections == null) return null;

        //check open component
        const isIntentNone = typeof intent == U;
        var componentIntentPushed = false;
        var component = sections[page.component];
        var existComponent = false;
        if (component == null) {
            if (page.componentIsInatant) {
                if (page.isMenu) {
                    if (page.isComponent) {
                        component = estreUi.openMenuArea(page.component, intent);
                        componentIntentPushed = true;
                    } else component = estreUi.openMenuArea(page.component);
                } else if (page.isBlinded) {
                    if (page.isComponent) {
                        component = estreUi.openInstantBlinded(page.component, intent);
                        componentIntentPushed = true;
                    } else component = estreUi.openInstantBlinded(page.component);
                } else if (page.isOverlay) {
                    if (page.isComponent) {
                        component = estreUi.openManagedOverlay(page.component, intent);
                        componentIntentPushed = true;
                    } else component = estreUi.openManagedOverlay(page.component);
                } else if (page.isHeader) {
                    if (page.isComponent) {
                        component = estreUi.openHeaderBar(page.component, intent);
                        componentIntentPushed = true;
                    } else component = estreUi.openHeaderBar(page.component);
                } else return false;
            } else return false;
        } else existComponent = true;
        if (component == null) return null;
        var containerIntentPushed = false;
        var articleIntentPushed = false;
        var container = null;
        var article = null;
        var existContainer = false;
        var existArticle = false;
        if (page.container != null) {
            //check open container
            container = component.containers[page.container];
            if (container == null) {
                if (page.containerIsInatant) {
                    if (page.isArticle || page.isContainer || page.container == "root") {
                        container = component.openContainer(page.container, intent);
                        containerIntentPushed = true;
                    } else container = component.openContainer(page.container);
                } else if (page.isContainer) return false;//static container is cannot open
                else {
                    
                }
            } else existContainer = true;
            if (container == null) return null;

            if (page.article != null) {
                //check open article
                article = container.articles[page.article];
                if (article == null) {
                    if (page.articleIsInatant) {
                        if (page.isArticle || page.article == "main") {
                            article = container.openArticle(page.article, intent);
                            articleIntentPushed = true;
                        } else article = container.openArticle(page.article);
                    } else return false;//static article is cannot open
                } else existArticle = true;
                if (article == null) return null;
            }
        }
        var success = true;
        var targetProcessed = { component: null, container: null, article: null };
        const isRootMain = page.container == "root" && page.article == "main";
        switch (page.hostType) {
            case "article":
                if (!isIntentNone && existArticle && (page.isArticle || page.article == "main")) targetProcessed.article = container.showArticle(page.article, intent);
                else targetProcessed.article = article.show();
                success = targetProcessed.article;
            case "container":
                if (success) {
                    if (!isIntentNone && existContainer && (page.isContainer || isRootMain)) targetProcessed.container = component.showContainer(page.container, intent);
                    else targetProcessed.container = container.show();
                    success = targetProcessed.container;
                }
            case "component":
                if (success) {
                    if (page.isHeader) {
                        if (!isIntentNone && existComponent && (page.isComponent || isRootMain)) targetProcessed.component = estreUi.showHeaderBar(page.component, intent);
                        else targetProcessed.component = estreUi.showHeaderBar(page.component);
                    } else if (page.isMenu) {
                        if (!isIntentNone && existComponent && (page.isComponent || isRootMain)) targetProcessed.component = estreUi.showMenuArea(page.component, intent);
                        else targetProcessed.component = estreUi.showMenuArea(page.component);
                    } else if (page.isOverlay) {
                        if (!isIntentNone && existComponent && (page.isComponent || isRootMain)) targetProcessed.component = estreUi.showManagedOverlay(page.component, intent);
                        else targetProcessed.component = estreUi.showManagedOverlay(page.component);
                    } else if (page.isBlinded) {
                        if (!isIntentNone && existComponent && (page.isComponent || isRootMain)) targetProcessed.component = estreUi.showInstantBlinded(page.component, intent);
                        else targetProcessed.component = estreUi.showInstantBlinded(page.component);
                    } else if (component.isModal) {
                        if (!isIntentNone && existComponent && (page.isComponent || isRootMain)) targetProcessed.component = estreUi.openModalTab(page.component, component, intent);
                        else targetProcessed.component = estreUi.openModalTab(page.component, component);
                    } else {
                        if (!isIntentNone && existComponent && (page.isComponent || isRootMain)) targetProcessed.component = estreUi.switchRootTab(page.component, intent);
                        else targetProcessed.component = estreUi.switchRootTab(page.component);
                    }
                    success = targetProcessed.component;
                }
        }
        // console.log("targetProcessed: ", targetProcessed);
        return targetProcessed[page.hostType];
    }

    showPage(pid, intent, instanceOrigin) {
        if (pid.indexOf("!") > -1) pid = this.#managedPidMap[pid.replace(/^\!/, "")];
        if (pid == null) return null;
        if (pid.indexOf("*") > -1) pid = this.extPidMap[pid.replace(/^\*/, "")];
        if (pid == null) return null;
        if (pid.indexOf("$") < 0) pid = this.foundPid(pid);
        const page = this.get(pid);
        if (page == null) return null;
        const sections = page.sections;
        if (sections == null) return null;

        const isIntentNone = typeof intent == U;
        var component = sections[page.component];
        if (component == null) return null;
        var container = null;
        var article = null;
        if (page.container != null) {
            container = component.containers[page.container];
            if (container == null) return null;
            if (page.article != null) {
                article = container.articles[page.article];
                if (article == null) return null;
            }
        }
        var success = true;
        var targetProcessed = { component: null, container: null, article: null };
        switch (page.hostType) {
            case "article":
                if (!isIntentNone && (page.isArticle || page.article == "main")) targetProcessed.article = container.showArticle(page.article, intent);
                else targetProcessed.article = article.show();
                success = targetProcessed.article;
            case "container":
                if (success) {
                    if (!isIntentNone && (page.isContainer || (page.article == "main" && page.container == "root"))) targetProcessed.container = component.showContainer(page.container, intent);
                    else targetProcessed.container = container.show();
                    success = targetProcessed.container;
                }
            case "component":
                if (success) {
                    const isRootMain = page.container == "root" && page.article == "main";
                    if (page.isOverlay) {
                        if (!isIntentNone && (page.isComponent || isRootMain)) targetProcessed.component = estreUi.showManagedOverlay(page.component, intent);
                        else targetProcessed.component = estreUi.showManagedOverlay(page.component);
                    } else if (page.isMenu) {
                        if (!isIntentNone && (page.isComponent || isRootMain)) targetProcessed.component = estreUi.showMenuArea(page.component, intent);
                        else targetProcessed.component = estreUi.showMenuArea(page.component);
                    } else if (page.isBlinded) {
                        if (!isIntentNone && (page.isComponent || isRootMain)) targetProcessed.component = estreUi.showInstantBlinded(page.component, intent);
                        else targetProcessed.component = estreUi.showInstantBlinded(page.component);
                    } else if (component.isModal) {
                        if (!isIntentNone && (page.isComponent || isRootMain)) targetProcessed.component = estreUi.openModalTab(page.component, component, intent);
                        else targetProcessed.component = estreUi.openModalTab(page.component, component);
                    } else {
                        if (!isIntentNone && (page.isComponent || isRootMain)) targetProcessed.component = estreUi.switchRootTab(page.component, intent);
                        else targetProcessed.component = estreUi.switchRootTab(page.component, intent);
                    }
                    success = targetProcessed.component;
                }
        }
        // console.log("targetProcessed: ", targetProcessed);
        return targetProcessed[page.hostType];
    }

    showOrBringPage(pid, intent, instanceOrigin) {
        return this.showPage(pid, intent, instanceOrigin) || this.bringPage(pid, intent, instanceOrigin);
    }

    hidePage(pid, hideHost = false, instanceOrigin = null) {
        if (pid.indexOf("!") > -1) pid = this.#managedPidMap[pid.replace(/^\!/, "")];
        if (pid == null) return null;
        if (pid.indexOf("*") > -1) pid = this.extPidMap[pid.replace(/^\*/, "")];
        if (pid == null) return null;
        if (pid.indexOf("$") < 0) pid = this.foundPid(pid);
        const page = this.get(pid);
        if (page == null) return null;
        const sections = page.sections;
        if (sections == null) return null;

        var component = sections[page.component];
        if (component == null) return null;
        var container = null;
        var article = null;
        var targetProcessed = { component: null, container: null, article: null };
        if (page.container != null) {
            container = component.containers[page.container];
            if (container != null) {
                if (page.article != null) {
                    article = container.articles[page.article];
                    if (article != null) {
                        targetProcessed.article = article.hide();
                    }
                }
                if (page.isContainer || hideHost || (page.isArticle && page.articleIsStatic && container.isArticlesAllyStatic)) {
                    targetProcessed.container = container.hide();
                }
            }
        }
        if (page.isComponent || hideHost || (!page.isComponent && page.containerIsStatic && component.isContainersAllyStatic)) {
            if (page.isOverlay || page.isMenu || page.isBlinded) {
                targetProcessed.component = component.hide();
            } else if (component.isModal) {
                targetProcessed.component = estreUi.closeModalTab(page.component, $(component));
            } else {
                targetProcessed.component = estreUi.switchRootTab("home");
            }
        }
        // console.log("targetProcessed: ", targetProcessed);
        return targetProcessed[page.hostType];
    }

    async closePage(pid, closeHost = false, instanceOrigin = null) {
        if (pid.indexOf("!") > -1) pid = this.#managedPidMap[pid.replace(/^\!/, "")];
        if (pid == null) return null;
        if (pid.indexOf("*") > -1) pid = this.extPidMap[pid.replace(/^\*/, "")];
        if (pid == null) return null;
        if (pid.indexOf("$") < 0) pid = this.foundPid(pid);
        const page = this.get(pid);
        if (page == null) return null;
        const sections = page.sections;
        if (sections == null) return null;

        var component = sections[page.component];
        if (component == null) return null;
        var container = null;
        var article = null;
        var targetProcessed = { component: null, container: null, article: null };
        if (page.container != null) {
            container = component.containers[page.container];
            if (container != null) {
                if (page.article != null) {
                    article = container.articles[page.article];
                    if (article != null) {
                        targetProcessed.article = await container.closeArticle(page.article);
                    }
                }
                if (page.isContainer || closeHost || (page.isArticle && page.articleIsStatic && container.isArticlesAllyStatic)) {
                    targetProcessed.container = await component.closeContainer(page.container);
                }
            }
        }
        if (page.isComponent || closeHost || (!page.isComponent && page.containerIsStatic && component.isContainersAllyStatic)) {
            if (page.isOverlay) {
                targetProcessed.component = await estreUi.closeManagedOverlay(page.component);
            } else if (page.isMenu) {
                targetProcessed.component = await estreUi.closeMenuArea(page.component);
            } else if (page.isBlinded) {
                targetProcessed.component = await estreUi.closeInstantBlinded(page.component);
            } else if (component.isModal) {
                targetProcessed.component = await estreUi.closeModalTab(page.component, $(component));
            } else {
                targetProcessed.component = estreUi.switchRootTab("home");
            }
        }
        // console.log("targetProcessed: ", targetProcessed);
        return targetProcessed[page.hostType];
    }
}

const pageManager = new EstreUiPageManager();



/**
 * Provided custom page manager basic format
 */
class EstreUiCustomPageManager {

    // class property


    // static methods


    // constants
    

    // instnace property


    constructor() {}


    /**
     * * must be initialized estreUi before call 
     */
    init(extPidMap, pageHandlers) {
        pageManager.extPidMap = extPidMap;
        EstreUiPage.registerProvider(pageHandlers);
        for (var id in pageHandlers) EstreUiPage.registerHandler(extPidMap[id], pageHandlers[id]);

        return this;
    }


    bringPage(id, intent, instanceOrigin) {
        return pageManager.bringPage("*" + id, intent, instanceOrigin);
    }

    showPage(id, intent, instanceOrigin) {
        return pageManager.showPage("*" + id, intent, instanceOrigin);
    }

    showOrBringPage(id, intent, instanceOrigin) {
        pid = "*" + id;
        return pageManager.showOrBringPage(id, intent, instanceOrigin);
    }

    hidePage(id, hideHost = false, instanceOrigin = null) {
        return pageManager.hidePage("*" + id, hideHost, instanceOrigin);
    }

    closePage(id, closeHost = false, instanceOrigin = null) {
        return pageManager.closePage("*" + id, closeHost, instanceOrigin);
    }

}



/**
 * Handle base
 */
class EstreHandle {

    // constants
    static #handles = {
        get [uis.unifiedCalendar]() { return EstreUnifiedCalendar },

        get [uis.scalable]() { return EstreScalable },
        get [uis.collapsible]() { return EstreCollapsible },
        get [uis.toggleBlock]() { return EstreToggleBlock },
        get [uis.toggleTabBlock]() { return EstreToggleTabBlock },
        get [uis.tabBlock]() { return EstreTabBlock },

        get [uis.numKeypad]() { return EstreNumKeypad },

        get [uis.checkboxSet]() { return EstreCheckboxSet },
        get [uis.checkboxAlly]() { return EstreCheckboxAlly },

        get [uis.dateShower]() { return EstreDateShower },
    }
    static get handles() { return this.#handles; }

    static #registeredHandles = {};

    static #handleCommitted = false;
    static get handleCommited() { return this.#handleCommitted; }


    // class property
    static #activeHandle = {};
    static get activeHandle() { return this.#activeHandle; }

    // class methods
    static registerCustomHandle(handleName, handleSpecfier, handleClass) {
        if (!this.#handleCommitted) {
            if (uis[handleName] == null) {
                if (this.handles[handleSpecfier] == null) {
                    uis[handleName] = handleSpecfier;
                    this.#registeredHandles[handleSpecfier] = handleClass;
                } else console.log("Cannot override exist stock handle specfier");
            } else console.log("Cannot override exist handle name");
        } else console.log("Cannot register handle after commit");
    }

    static commit() {
        this.#handleCommitted = true;

        for (var handleSpecfier in this.#registeredHandles) this.#handles[handleSpecfier] = this.#registeredHandles[handleSpecfier];
    }

    static releaseHandles($host, host) {
        for (var specifier in this.handles) {
            this.releaseHandle($host, host, specifier);
        }
    }

    static releaseHandle($host, host, specifier) {
        if ($host.is(specifier)) this.unregisterHandle(host.host, host, specifier);
        const $bounds = $host.find(specifier);
        for (var bound of $bounds) this.unregisterHandle(bound, host, specifier);
    }

    static initHandles($host, host) {
        for (var specifier in this.handles) {
            this.initHandle($host, host, specifier, this.handles[specifier]);
        }
    }

    static initHandle($host, host, specifier, handleClass) {
        if ($host.is(specifier)) this.registerHandle(host.host, host, specifier, handleClass);
        const $bounds = $host.find(specifier);
        for (var bound of $bounds) this.registerHandle(bound, host, specifier, handleClass);
    }

    static registerHandle(element, host, specifier, handleClass) {
        const handle = new handleClass(element, host);
        host.registerHandle(specifier, handle);
        var loaded = this.activeHandle[specifier];
        if (loaded == null) {
            loaded = new Set();
            this.#activeHandle[specifier] = loaded;
        }
        loaded.add(handle);
        handle.init();
    }

    static unregisterHandle(element, host, specifier) {
        host.unregisterHandle(specifier, element.handle);
        const loaded = this.activeHandle[specifier];
        if (loaded != null) loaded.delete(element.handle);
        element.handle.release();
    }


    // instance property
    host = null;
    bound = null;
    $bound = null;
    data = null;

    
    constructor(bound, host) {
        this.host = host;
        this.bound = bound;
        this.$bound = $(bound);
        this.data = bound.dataset;
    }

    release(remove) {
        this.host = null;
        this.bound.handle = null;
        this.bound = null;
        if (remove === true) this.$bound.remove();
        else if (remove === false) this.$bound.empty();
        this.$bound = null;
        this.data = null;
    }

    init() {
        if (this.bound.handle != null) this.bound.handle.release();
        this.bound.handle = this;
    }
}




/**
 * Unified calendar handler
 */
class EstreUnifiedCalendar extends EstreHandle {
    // constants


    // class property


    // instance property
    $calendarArea = null;
    $scheduleList = null;

    calendar = null;
    scheduler = null;

    $dateIndicateArea = null;
    $dateIndicator = null;
    $scalers = null;
    $todayToggle = null;
    $showToday = null;

    maxSize = -1;

    resizeObserver = null;

    constructor(unical, host) {
        super(unical, host);
        this.maxSize = this.data.maxSize;
        this.$calendarArea = this.$bound.find(c.c + uis.calendarArea);
        this.$scheduleList = this.$bound.find(c.c + uis.scheduleList);

    }

    release() {
        super.release();

        this.releaseResizeObserver();
    }

    init() {
        super.init();

        this.calendar = new EstreVariableCalendar(this.$calendarArea.find(c.c + uis.variableCalendar)[0], this.$calendarArea[0], this);
        this.calendar.init();
        this.scheduler = new EstreUnifiedScheduler(this.$scheduleList.find(c.c + uis.unifiedScheduler)[0], this.$scheduleList[0], this.calendar, this).init();


        //this.setEvent();

        this.setResizeObserver();


        return this;
    }

    releaseResizeObserver() {
        if (this.resizeObserver != null) {
            this.resizeObserver.unobserver();
            this.resizeObserver = null;
        }
    }

    setResizeObserver() {
        this.resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (entry == this.bound) {
                    this.calendar.beginTransition();
                    setTimeout(() => this.calendar.endTransition(), this.calendar.transitionTime);
                }
            }
        });
        this.resizeObserver.observe(this.bound);
    }
}

class EstreYear {
    calendar = null;
    year = null;
    $year = null;
    months = null;
    $months = null;
    subMonths = [];
    month = null;
    
    constructor(calendar, year, month = {}, months = year.querySelector(uis.months)) {
        this.calendar = calendar;
        this.year = year;
        this.$year = $(year);
        this.months = months;
        this.$months = $(months);
        this.setMonth(month);
    }

    isAttached() {
        return this.year.isConnected;
    }

    isLoaded() {
        return this.month != null && this.subMonths.length > 0;
    }

    setMonth(month) {
        this.month = month;
        this.subMonths = [];
        if (month != null) for (var mt in month) this.subMonths.push(month[mt]);
    }

    releaseNode() {
        if (this.months.isConnected) this.$months.remove();
    }

    setNode() {
        if (!this.months.isConnected) {
            this.year.append(this.months);
            return true;
        } return false;
    }

    getYear() {
        return this.$year.attr(eds.year);
    }

    getYearInt() {
        return parseInt(this.getYear());
    }

    getDays(date, month, year) {
        const days = [];

        if (month != null) {
            var m = this.month[month];
            if (m != null) {
                const ds = m.getDays(date, month, year);
                days.push(...ds);
            }

            m = this.month[month > 1 ? month - 1 : 12];
            if (m != null) {
                const w = m.getEndWeek();
                if (w != null) {
                    const d = w.getDay(date, month, year);
                    if (d != null) days.push(d);
                }
            }

            m = this.month[month < 12 ? month + 1 : 1];
            if (m != null) {
                const w = m.getBeginWeek();
                if (w != null) {
                    const d = w.getDay(date, month, year);
                    if (d != null) days.push(d);
                }
            }
        } else for (var m of this.month) {
            const ds = m.getDays(date, month, year);
            days.push(...ds);
        }

        return days;
    }

    forDays(work, date, month, year) {
        work(this.getDays(date, month, year));
    }
}

class EstreMonth {
    calendar = null;
    month = null;
    $month = null;
    weeks = null;
    $weeks = null;
    daysSubject = null;
    $daysSubject = null;
    subWeeks = [];
    week = null;
    
    constructor(calendar, month, week = {}, weeks = month.querySelector(uis.weeks), daysSubject = month.querySelector(uis.daysSubjects)) {
        this.calendar = calendar;
        this.month = month;
        this.$month = $(month);
        this.weeks = weeks;
        this.$weeks = $(weeks);
        this.daysSubject = daysSubject;
        this.$daysSubject = $(daysSubject);
        this.setWeek(week);
    }

    isAttached() {
        return this.month.isConnected;
    }

    isLoaded() {
        return this.week != null && this.subWeeks.length > 0;
    }

    setWeek(week) {
        this.week = week;
        this.subWeeks = [];
        if (week != null) for (var wk in week) this.subWeeks.push(week[wk]);
    }

    releaseNode() {
        if (this.weeks.isConnected) this.$weeks.remove();
    }

    setNode() {
        if (!this.weeks.isConnected) {
            this.month.append(this.weeks);
            return true;
        } else return false;
    }

    getYear() {
        return this.$month.attr(eds.year);
    }

    getYearInt() {
        return parseInt(this.getYear());
    }

    getMonth() {
        return this.$month.attr(eds.month);
    }

    getMonthInt() {
        return parseInt(this.getMonth());
    }

    getMonth0() {
        return this.getMonthInt() - 1;
    }

    getYM() {
        const year = this.getYear();
        const month = this.getMonth();
        const monthInt = parseInt(month);
        return {
            year: year,
            yearInt: parseInt(year),
            month: month,
            monthInt: monthInt,
            month0: monthInt - 1
        };
    }

    getBeginWeek() {
        return this.subWeeks[0];
    }

    getEndWeek() {
        return this.subWeeks[this.subWeeks.length - 1];
    }

    getFirstWeek() {
        return this.week[1];
    }

    getLastWeek() {
        for (var w=this.subWeeks.length-1; w>0; w--) {
            const wk = this.subWeeks[w];
            if (wk.$week.attr(eds.week) != "") return wk;
        }
        return null;
    }

    getDays(date, month, year) {
        const days = [];

        if (this.week != null) {
            for (var w of this.subWeeks) if (w.day != null) {
                const day = w.getDay(date, month, year);
                if (day != null) days.push(day);
            }
        }

        return days;
    }

}

class EstreWeek {
    calendar = null;
    week = null;
    $week = null;
    days = null;
    $days = null;
    subDays = [];
    day = null;
    
    constructor(calendar, week, day = {}, days = week.querySelector(uis.days)) {
        this.calendar = calendar;
        this.week = week;
        this.$week = $(week);
        this.days = days;
        this.$days = $(days);
        this.setDay(day);
    }

    isAttached() {
        return this.week.isConnected;
    }

    isLoaded() {
        return this.day != null && this.subDays.length > 0;
    }

    setDay(day) {
        this.day = day;
        this.subDays = [];
        if (day != null) for (var dy in day) this.subDays.push(day[dy]);
    }

    releaseNode() {
        if (this.days.isConnected) this.$days.remove();
    }

    setNode() {
        if (!this.days.isConnected) {
            this.week.append(this.days);
            return true;
        } else return false;
    }

    getYear() {
        return this.$week.attr(eds.year);
    }

    getYearInt() {
        return parseInt(this.getYear());
    }

    getMonth() {
        return this.$week.attr(eds.month);
    }

    getMonthInt() {
        return parseInt(this.getMonth());
    }

    getMonth0() {
        return this.getMonthInt() - 1;
    }

    getWeek() {
        return this.$week.attr(eds.week);
    }

    getWeekInt() {
        return parseInt(this.getWeek());
    }

    getYMW() {
        const year = this.getYear();
        const month = this.getMonth();
        const monthInt = parseInt(month);
        const week = this.getWeek();
        return {
            year: year,
            yearInt: parseInt(year),
            month: month,
            monthInt: monthInt,
            month0: monthInt - 1,
            week: week,
            weekInt: parseInt(week)
        };
    }

    getDay(date, month, year) {
        if (this.day != null) {
            const day = this.day[date];
            if (day != null) {
                if (month == null || day.$day.attr(eds.month) == month) {
                    if (year == null || day.$day.attr(eds.year) == year) {
                        return day;
                    }
                }
            }
        }
        return null;
    }

    forDay(work, date, month, year) {
        work(this.getDay(date, month, year));
    }

    forIfDay(work, date, month, year) {
        const day = this.getDay(date, month, year);
        if (day != null) work(day);
    }
}

class EstreDay {
    calendar = null;
    day = null;
    $day = null;
    scheduleds = null;
    $scheduleds = null;
    subScheduleds = [];
    scheduled = null;
    
    constructor(calendar, day, scheduled = {}, scheduleds = day.querySelectorAll(uis.scheduled)) {
        this.calendar = calendar;
        this.day = day;
        this.$day = $(day);
        this.scheduleds = scheduleds;
        this.$scheduleds = $(scheduleds);
        this.setScheduled(scheduled);
    }

    isAttached() {
        return this.day.isConnected;
    }

    isLoaded() {
        return this.scheduled != null && this.subScheduleds.length > 0;
    }

    setScheduled(scheduled) {
        this.scheduled = scheduled;
        this.subScheduleds = [];
        if (scheduled != null) for (var sd in scheduled) this.subScheduleds.push(scheduled[sd]);
    }

    getYear() {
        return this.$day.attr(eds.year);
    }

    getYearInt() {
        return parseInt(this.getYear());
    }

    getMonth() {
        return this.$day.attr(eds.month);
    }

    getMonthInt() {
        return parseInt(this.getMonth());
    }

    getMonth0() {
        return this.getMonthInt() - 1;
    }

    getDay() {
        return this.$day.attr(eds.day);
    }

    getDayInt() {
        return parseInt(this.getDay());
    }

    getDate() {
        return this.$day.attr(eds.date);
    }

    getDateInt() {
        return parseInt(this.getDate());
    }

    getYMD() {
        const year = this.getYear();
        const month = this.getMonth();
        const monthInt = parseInt(month);
        const day = this.getDay();
        const date = this.getDate();
        return {
            year: year,
            yearInt: parseInt(year),
            month: month,
            monthInt: monthInt,
            month0: monthInt - 1,
            day: day,
            dayInt: parseInt(day),
            date: date,
            dateInt: parseInt(date)
        };
    }

    buildItem(data, dataType) {
        const isData = typeof data == "string";
        const item = doc.ce(li);
        if (!isData && data.category != null) item.setAttribute(eds.category, data.category);
        if (dataType != null) item.setAttribute(eds.type, dataType);
        const span = doc.ce(sp);
        if (isData) span.innerHTML = data;
        else if (data.subject != null) span.innerText = data.subject;
        item.append(span);
        return item;
    }

    buildCustomItem(data, dataType) {
        const item = doc.ce(li);
        item.setAttribute(m.cls, "custom_item");
        if (dataType != null) item.setAttribute(eds.type, dataType);
        for (var info of data) {
            const span = doc.ce(sp);
            span.setAttribute(eds.id, info.id);
            if (info.text != null) span.innerText = info.text;
            else if (info.html != null) span.innerHTML = info.html;
            item.append(span);
        }
        return item;
    }

    buildGroup(name) {
        const scheduled = doc.ce(ul);
        scheduled.setAttribute(m.cls, "scheduled");
        scheduled.setAttribute(eds.group, name);
        return scheduled;
    }

    appendGroup(name) {
        const scheduled = this.buildGroup(name);
        this.scheduled[name] = scheduled;
        this.subScheduleds.push(scheduled);
        this.day.append(scheduled);
        const scheduleds = this.day.querySelectorAll(uis.scheduled);
        this.scheduleds = scheduleds;
        this.$scheduleds = $(scheduleds);
        return scheduled;
    }

    pushSchedule(listGrouped) {
        for (var groupId in listGrouped) {
            const divided = groupId.split("|");
            const group = divided[0];
            const originId = divided[1];
            var target = this.scheduled[group];
            if (target == null) target = this.appendGroup(group);
            else $(target).empty();

            const list = listGrouped[groupId];
            if (group == "data") {
                const dataTypeSet = scheduleDataSet.dataHandler.getDataTypeSet(originId);
                const dataType = dataTypeSet.dataType;
                const converted = scheduleDataSet.dataHandler.convertDataToDisplay(list, dataType);
                switch (typeof converted) {
                    case "string":
                        const item = this.buildItem(converted, dataType);
                        target.append(item);
                        break;

                    case "object":
                        if (converted instanceof Array) {
                            for (var dataSet of converted) {
                                const item = this.buildCustomItem(dataSet, dataType);
                                target.append(item);
                            }
                        }
                        break
                }
            } else for (var data of list) {
                const item = this.buildItem(data);
                target.append(item);
            }
        }
    }

    clearScheduled(groups) {
        for (var group of groups) {
            const target = this.scheduled[group];
            if (target != null) $(target).empty();
        }
    }
}

class EstreCalendar {
    // constants


    // class property


    // instance property
    #unical = null;

    #schedulers = [];

    #scale = null;

    #focusedYear = null;
    #focusedMonth = null;
    #focusedWeek = null;
    #focusedDay = null;

    #origins = {};


    constructor(unical) {
        this.unical = unical;
    }

    init(today = new Date(), scale = 3) {
        this.setSelectedDay(today.getFullYear(), today.getMonth() + 1, today.getDate());

        this.initScale(scale);

        return this;
    }

    release(remove) {

    }

    registerScheduler(scheduler) {
        this.#schedulers.push(scheduler);
    }

    unregisterScheduler(scheduler) {
        const index = this.#schedulers.indexOf(scheduler);
        this.#schedulers.splice(index, 1);
    }

    initScale(scale = 3) {
        this.setScale(scale);
    }

    //getter and setter
    get scale() {
        return this.#scale + "";
    }
    
    get scaleInt() {
        return this.#scale;
    }

    setScale(tv) {
        this.#scale = parseInt(tv);
    }

    get basicOrigin() {
        return this.#origins["basic"];
    }

    setBasicOrigin(origin) {
        this.#origins["basic"] = origin;
    }

    get dataOrigin() {
        return this.#origins["data"];
    }

    setDataOrigin(origin) {
        this.#origins["data"] = origin;
    }

    getScheduleOrigin(originBase) {
        return this.#origins[originBase];
    }

    setScheduleOrigin(originBase, origin) {
        this.#origins[originBase] = origin;
    }

    
    //checker
    isSelectedYear(year) {
        const fd = this.dateFocused;
        return fd.getFullYear() == year;
    }

    isSelectedMonth(year, month) {
        const fd = this.dateFocused;
        return fd.getFullYear() == year && fd.getMonth() + 1 == month;
    }

    isSelectedWeek(year, month, week) {
        const fd = this.dateFocused;
        return fd.getFullYear() == year && fd.getMonth() + 1 == month && Ecal.getWeek(fd) == week;
    }

    isSelectedDate(year, month, date) {
        const fd = this.dateFocused;
        return fd.getDate() == date && fd.getMonth() + 1 == month && fd.getFullYear() == year;
    }


    //common
    get lastDayFocused() {
        var year = this.yearIntFocused;
        var month = this.month0IntFocused;
        if (month < 0) {
            year--;
            month = 11;
        }
        return Ecal.getLastDay(year, month).getDate();
    }

    get weekFocused() {
        return Ecal.getWeek(this.dateFocused);
    }

    get dateSetFocused() {
        return Ecal.getDateSet(this.dateFocused);
    }

    get dateFocused() {
        const year = this.yearIntFocused;
        const month = this.month0IntFocused;
        const date = Math.min(this.dateIntFocused, Ecal.getLastDay(year, month));

        return new Date(year, month, date);
    }

    get yearIntFocused() {
        return parseInt(this.$structure.attr(eds.focusYear));
    }

    get monthIntFocused() {
        return parseInt(this.$structure.attr(eds.focusMonth));
    }

    get month0IntFocused() {
        return parseInt(this.$structure.attr(eds.focusMonth)) - 1;
    }

    get weekIntFocused() {
        return parseInt(this.$structure.attr(eds.focusWeek));
    }

    get dateIntFocused() {
        return parseInt(this.$structure.attr(eds.focusDay));
    }

    get dahyIntFocused() {
        return this.dateFocused.getDay();
    }

    get unitCurrentScale() {
        return Ecal.getUnitFrom(this.scaleInt);
    }

    get scopeCurrentScale() {
        return Ecal.getScopeFrom(this.scaleInt);
    }

    getNearPositionFocused(offset = 0, unit = this.unitCurrentScale) {
        return Ecal.getNearPosition(this.dateFocused, offset, unit);
    }

    getDateSetNearPositionFocused(offset = 0, unit = this.unitCurrentScale) {
        return Ecal.getDateSetNearPosition(this.dateFocused, offset, unit);
    }


    //handles
    setSelectedYear(selected, toScaledBe) {
        this.#focusedYear = selected;
        if (toScaledBe != null) this.setScale(toScaledBe);
    }
    
    setSelectedMonth(year, month, toScaledBe) {
        this.#focusedYear = year;
        this.#focusedMonth = month;
        if (toScaledBe != null) this.setScale(toScaledBe);
    }
    
    setSelectedWeek(year, month, week, adjoin, toScaledBe) {
        year = parseInt(year);
        month = parseInt(month);
        if (week == "") {
            const isPrevMonth = parseInt(adjoin) < month;
            month += isPrevMonth ? -1 : 1
            week = isPrevMonth ? Ecal.getLastWeek(year, month - 1) : 1;
        }
        const date = Ecal.getDateSundayOfWeek(year, month - 1, parseInt(week));
        
        const focused = this.dateFocused;
        date.setDate(date.getDate() + focused.getDay());

        const td = Ecal.getDateSet(date);
        this.#focusedYear = td.year;
        this.#focusedMonth = td.month;
        this.#focusedDay = td.date;
        this.#focusedWeek = td.week;
        
        if (toScaledBe != null) this.setScale(toScaledBe);
    }

    setSelectedDay(year, month, date, toScaledBe) {
        this.$structure.attr(eds.focusYear, year);
        this.$structure.attr(eds.focusMonth, month);
        this.$structure.attr(eds.focusDay, date);

        const fd = this.dateSetFocused;
        const focusedWeek = fd.ymw.week;
        this.$structure.attr(eds.focusWeek, "" + focusedWeek);

        if (toScaledBe != null) this.setScale(toScaledBe);
    }

    // for scheduler
    pushUpdateFocused() {
        if (this.unical != null && this.unical.scheduler != null) {
            const scopes = ["yearly", "monthly", "weekly", "daily"];
            
            for (var scope of scopes) this.unical.scheduler.initPages(scope);
        }
    }

    pushScopeChanged(scope) {
        const scale = this.scaleInt;

        switch (scope) {
            case "yearly":
                if (scale > 2) this.setScale(2);
                break;
                
            case "monthly":
                if (scale > 3) this.setScale(3);
                break;

            case "weekly":
                if (scale > 5) this.setScale(5);
                break;

            case "daily":
                if (scale < 2) this.setScale(2);
                break;
        }
    }
    
    notifyBoundChanged(bound, scope) {
        const d = Escd.parseBound(bound, scope);

        switch (scope) {
            case "yearly":
                this.setSelectedYear(d.year);
                break;
                
            case "monthly":
                this.setSelectedMonth(d.year, d.month);
                break;

            case "weekly":
                this.setSelectedWeek(d.year, d.month, d.week);
                break;

            case "daily":
                this.setSelectedDay(d.year, d.month, d.date);
                break;
        }
    }
}


class EstreVoidCalendarStructure {
    
    calendar = null;

    $structure = null;

    swipeHandler = null;

    constructor($structure, calendar) {
        this.$structure = $structure;
        this.calendar = calendar;
    }

    release(empty = true) {
        this.calendar = null;

        this.releaseSwipeHandler();

        if (this.$structure != null) {
            if (empty) this.$structure.empty();
            this.$structure = null;
        }
    }

    init() {
        this.$structure.empty();
        
        this.setSwipeHandler();

        return new Date();
    }

    // event handler
    releaseSwipeHandler() {
        if (this.swipeHandler != null) {
            this.swipeHandler.release();
            this.swipeHandler = null;
        }
    }

    setSwipeHandler() {
        this.releaseSwipeHandler();
        const inst = this;
        this.swipeHandler = new EstreSwipeHandler(this.$structure, false, false).setOnUp(function(grabX, grabY, handled, canceled, directed) {
            //console.log("handled: " + handled + " / canceled: " + canceled + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            const handledDirection = this.handledDirection;
            //console.log("handledDirection: " + handledDirection);
            if (handledDirection != null) {
                var isNext;
                switch (handledDirection) {
                    case "left":
                    case "up":
                        isNext = true;
                        break;

                    case "right":
                    case "down":
                        isNext = false;
                        break;
                }
                const unit = inst.calendar.unitCurrentScale;
                if (unit == null) return;
                const offset = isNext ? 1 : -1;
                const dn = inst.calendar.getDateSetNearPositionFocused(offset, unit);
                const offsetText = offset > 0 ? "+" + offset : offset;

                inst.calendar.beginTransition();
                switch (unit) {
                    case "year":
                        // console.log(unit + " " + offsetText + " - setSelectedYear(" + dn.year + ")");
                        inst.calendar.setSelectedYear(dn.year);
                        break;

                    case "month":
                        // console.log(unit + " " + offsetText + " - setSelectedMonth(" + dn.year + ", " + dn.month + ")");
                        inst.calendar.setSelectedMonth(dn.year, dn.month);
                        break;

                    case "week":
                    case "day":
                        // console.log(unit + " " + offsetText + " - setSelectedDay(" + dn.year + ", " + dn.month + ", " + dn.date + ")");
                        inst.calendar.setSelectedDay(dn.year, dn.month, dn.date);
                        break;
                }
                setTimeout(() => { inst.calendar.endTransition(); }, inst.calendar.transitionTime);
            }
        }).setOnMove(function(grabX, grabY, handled, dropped, directed) {
            //console.log("handled: " + handled + " / dropped: " + dropped + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            // to do implement action preview feedback
        });
    }

    // for calendar
    releaseDateSelected(fd = this.calendar.dateSetFocused) {

    }

    releaseToday(td = Ecal.getDateSet()) {

    }

    checkLoadCalendarStructure(toScaledBe, date) {
        if (toScaledBe == null) toScaledBe = this.calendar.scaleInt;

        return false;
    }

    checkRelaseUnusedCalendarStructure(td, fd, scale) {

    }

    clearScheduled(groups, year) {

    }

    pushDailySchedule(listGrouped, dateId) {

    }

}

class EstreSimpleCalendarStructure extends EstreVoidCalendarStructure {
    
    constructor($structure, calendar) {
        super($structure, calendar);

        // to do implement
    }

    release(empty = true) {
        // to do implement

        super.release(empty);
    }

    init() {
        this.$structure.empty();
        
        this.setSwipeHandler();
        
        // to do implement
        return new Date();
    }

    // for calendar
    releaseDateSelected(fd = this.calendar.dateSetFocused) {
        // to do implement
    }

    releaseToday(td = Ecal.getDateSet()) {
        // to do implement
    }

    checkLoadCalendarStructure(toScaledBe, date) {
        if (toScaledBe == null) toScaledBe = this.calendar.scaleInt;

        // to do implement

        return false;
    }

    checkRelaseUnusedCalendarStructure(td, fd, scale) {
        // to do implement
    }

    clearScheduled(groups, year) {
        // to do implement
    }

    pushDailySchedule(listGrouped, dateId) {
        // to do implement
    }
}

class EstreMassiveCalendarStructure extends EstreVoidCalendarStructure {

    $years = null;
    $year = null;

    year = {};//[2024] = EstreYear { year, $year, $months, months, isAttached: true, isLoaded: fasle }

    $months = null;
    $month = null;
    $daysSubj = null;
    $weeks = null;
    $week = null;
    $days = null;
    $day = null;
    $scheduled = null;

    eachDay = [];


    constructor($structure, calendar) {
        super($structure, calendar);
    }

    release(empty = true) {
        this.$years = null;
        this.$year = null;

        this.year = null;

        this.$months = null;
        this.$month = null;
        this.$daysSubj = null;
        this.$weeks = null;
        this.$week = null;
        this.$days = null;
        this.$day = null;
        this.$scheduled = null;

        super.release(empty);
    }

    init() {
        this.$structure.empty();
        const years = doc.ce(div, "years");
        this.$structure.append(years);
        this.$years = $(years);
        const today = this.initYears();


        //this.setEventStructure();

        this.setSwipeHandler();

        return today;
    }

    initYears(today) {
        var init = false;
        if (today == null) {
            today = new Date();
            init = true;
        }

        const year = today.getFullYear();

        if (init) {
            this.$years.empty();
            for (var y=year-4; y<=year+4; y++) {
                const isJust = y == year;
                const isRange = y == year - 1 || y == year + 1;
                const ey = this.initYear(y, true, isJust ? true : (isRange ? null : false));
                if (this.calendar.isSelectedYear(y)) ey.$year.attr(eds.selected, t1);
                this.year[y] = ey;
                this.$years.append(ey.year);
                this.setEventYear(ey);
            }
        } else {
            const min = parseInt($(this.$year[0]).attr(eds.year));
            const max = parseInt($(this.$year[this.$year.length-1]).attr(eds.year));
            const just = this.$year.filter(aiv(eds.year, year));

            if (year < min) {
                for (var y=min-1; y>=year-1; y--) {
                    const isJust = y == year;
                    const isRange = y == year - 1 || y == year + 1;
                    const ey = this.initYear(y, true, isJust ? true : (isRange ? today : false));
                    if (this.calendar.isSelectedYear(y)) ey.$year.attr(eds.selected, t1);
                    this.year[y] = ey;
                    this.$years.prepend(ey.year);
                    this.setEventYear(ey);
                }
            } else if (year > max) {
                for (var y=max+1; y<=year+1; y++) {
                    const isJust = y == year;
                    const isRange = y == year - 1 || y == year + 1;
                    const ey = this.initYear(y, true, isJust ? true : (isRange ? today : false));
                    if (this.calendar.isSelectedYear(y)) ey.$year.attr(eds.selected, t1);
                    this.year[y] = ey;
                    this.$years.append(ey.year);
                    this.setEventYear(ey);
                }
            } else if (just.length > 0) this.checkLoadCalendarStructure(null, today);
        }

        this.releaseStructureHandler();
        this.$years.attr(eds.loaded, t1);

        return today;
    }

    initYear(year, initMonth = false, withWeek) {
        const yr = this.buildYear(year);
        const ms = yr.querySelector(uis.months);
        const months = initMonth ? this.initMonths(ms, year, withWeek) : null;
        return new EstreYear(this, yr, months, ms);
    }

    initMonths(months, year, withWeek = false) {
        var isNew  = true;
        if (months instanceof jQuery) {
            isNew = false;
            months.empty();
        }

        const monthset = {}
        for (var month=1; month<=12; month++) {
            var initWeek = false;
            var withDay = null;
            if (withWeek !== false) {
                if (withWeek == null) {
                    initWeek = true;
                    withDay = null;
                } else if (withWeek === true) {
                    initWeek = true;
                    withDay = true;
                } else if (withWeek instanceof Date) {
                    const dy = withWeek.getFullYear();
                    const dm = withWeek.getMonth();
                    const month0 = month - 1;
                    const isJust = month0 == dm && year == dy;
                    const isPrevMonth = month0 == (dm + 11) % 12 && year == dy - 1;
                    const isNextMonth = month0 == (dm + 1) % 12 && year == dy + 1;
                    const isRange = isPrevMonth || isNextMonth;
                    if (isJust || isRange) {
                        initWeek = true;
                        withDay = true;
                    }
                } else if (!isNaN(withWeek) && month == withWeek) {
                    initWeek = true;
                    withDay = true;
                }
            }
            const em = this.initMonth(year, month, initWeek, withDay);
            if (this.calendar.isSelectedMonth(year, month)) em.$month.attr(eds.selected, t1);
            monthset[month] = em;
            months.append(em.month);
            this.setEventMonth(em);
        }

        if (!isNew) {
            this.releaseStructureHandler("month");
            months.attr(eds.loaded, t1);
        } else months.setAttribute(eds.loaded, t1);

        return monthset;
    }

    initMonth(year, month, initWeek, withDay) {
        const mt = this.buildMonth(year, month);
        const ws = mt.querySelector(uis.weeks);
        const weeks = initWeek ? this.initWeeks(ws, year, month, withDay) : null;
        return new EstreMonth(this, mt, weeks, ws);
    }

    initWeeks(weeks, year, month, withDay = false) {
        var isNew  = true;
        if (weeks instanceof jQuery) {
            isNew = false;
            weeks.empty();
        }

        const month0 = month - 1;

        const bdw = Ecal.getBeginSundayAndWeek(year, month0);
        const bday = bdw.date;
        var week = bdw.week;
        var weekOrigin = week;
        var bdy = bday.getFullYear();
        var bdm = bday.getMonth();
        var bdd = bday.getDate();

        const weekset = {};
        do {
            const isEndPrevYear = bdy == year - 1;
            const isEndPrevMonth = isEndPrevYear || bdm + 1 < month;
            const prevMonth = isEndPrevYear ? 12 : month0
            const endDate = new Date(year, bdm, bdd + 6);
            const isBeginNextYear = endDate.getFullYear() == year + 1;
            const isBeginNextMonth = isBeginNextYear || endDate.getMonth() == month;
            const nextMonth = isBeginNextYear ? 1 : parseInt(month) + 1;
            const adjoin = isEndPrevMonth ? prevMonth : (isBeginNextMonth ? nextMonth : null);
            const fd = this.calendar.dateSetFocused;
            const checkSelected = (fd.year == year && (fd.month == month || (isEndPrevMonth && fd.month == prevMonth) || (isBeginNextMonth && fd.month == nextMonth))) ||
                (isEndPrevYear && fd.year == year - 1 && fd.month && prevMonth && week > 3) || (isBeginNextYear && fd.year == year + 1 && fd.month && nextMonth && week < 2);

            const ew = this.initWeek(year, month, week, adjoin, withDay, bdy, bdm, bdd, checkSelected);
            if (fd.year == year && (this.calendar.isSelectedWeek(year, month, week) || (isEndPrevMonth && this.calendar.isSelectedWeek(year, prevMonth, week)) || (isBeginNextMonth && this.calendar.isSelectedWeek(year, nextMonth, week))) ||
                (isEndPrevYear && this.calendar.isSelectedWeek(year - 1, prevMonth, week)) || (isBeginNextYear && this.calendar.isSelectedWeek(year + 1, nextMonth, week))) ew.$week.attr(eds.selected, t1);
            weekset[weekOrigin] = ew;
            weeks.append(ew.week);
            this.setEventWeek(ew);
            
            bday.setDate(bdd + 7);
            bdy = bday.getFullYear();
            bdm = bday.getMonth();
            bdd = bday.getDate();
            week++;
            weekOrigin = week;
            if (week > Ecal.getLastWeek(year, month0)) week = "";
        } while (bdm == month0);

        if (!isNew) {
            this.releaseStructureHandler("week");
            weeks.attr(eds.loaded, t1);
        } else weeks.setAttribute(eds.loaded, t1);

        return weekset;
    }

    initWeek(year, month, week, adjoin, initDay, bdy, bdm, bdd, checkSelected = false) {
        const wk = this.buildWeek(year, month, week, adjoin);
        const ds = wk.querySelector(uis.days);
        const days = initDay ? this.initDays(ds, bdy, bdm, bdd, checkSelected) : null;
        return new EstreWeek(this, wk, days, ds);
    }

    initDays(days, bdy, bdm, bdd, checkSelected = false) {
        var isNew  = true;
        if (days instanceof jQuery) {
            isNew = false;
            days.empty();
        }

        const bday = new Date(bdy, bdm, bdd);

        const dayset = {};
        for (var day=0; day<7; day++) {
            if (day > 0) bday.setDate(bday.getDate() + 1);
            const set = Ecal.getDateSet(bday);
            const ed = this.initDay(set.year, set.month, day, set.date);
            if (checkSelected) {
                if(this.calendar.isSelectedDate(set.year, set.month, set.date)) ed.$day.attr(eds.selected, t1);
            }
            this.setEachDay(ed, set.year, set.month - 1, set.date);
            dayset[set.date] = ed;
            days.append(ed.day);
            this.setEventDay(ed);
        }

        if (!isNew) {
            this.releaseStructureHandler("week");
            days.attr(eds.loaded, t1);
        } else days.setAttribute(eds.loaded, t1);

        return dayset;
    }

    initDay(year, month, day, date) {
        const dy = this.buildDay(year, month, day, date);
        const sd = dy.querySelectorAll(uis.scheduled);
        const groups = {};
        for (var scd of sd) groups[scd.dataset.group] = scd;
        return new EstreDay(this, dy, groups, sd);
    }

    releaseStructureHandler(scale) {
        switch(scale) {
            default:
            case "year":
                this.$year = this.$years.find(c.c + uis.year);
                this.$months = this.$year.find(c.c + uis.months);
            case "month":
                this.$month = this.$months.find(c.c + uis.month);
                this.$daysSubj = this.$month.find(c.c + uis.daysSubjects);
                this.$weeks = this.$month.find(c.c + uis.weeks);
            case "week":
                this.$week = this.$weeks.find(c.c + uis.week);
                this.$days = this.$week.find(c.c + uis.days);
            case "day":
                this.$day = this.$days.find(c.c + uis.day);
                this.$scheduled = this.$day.find(c.c + uis.scheduled);
                break;
        }
    }

    //builder
    buildYear(year) {
        const yr = doc.ce(div);
        yr.setAttribute(m.cls, "year");
        yr.setAttribute(eds.year, year);
        const lb = doc.ce(lbl);
        lb.innerText = "" + year;
        yr.append(lb);
        const mts = doc.ce(div);
        mts.setAttribute(m.cls, "months");
        yr.append(mts);
        return yr;
    }

    buildMonth(year, month) {
        const mt = doc.ce(div);
        mt.setAttribute(m.cls, "month");
        mt.setAttribute(eds.year, year);
        mt.setAttribute(eds.month, month);
        const lb = doc.ce(lbl);
        lb.innerText = "" + month;
        mt.append(lb);
        mt.append(this.buildDaysSubjects(month));
        const wks = doc.ce(div);
        wks.setAttribute(m.cls, "weeks");
        mt.append(wks);
        return mt;
    }

    buildWeek(year, month, week, adjoin) {
        const adjoinWeek = week === "" ? 1 : (week === 0 ? Ecal.getLastWeek(year, adjoin - 1) : week);
        // if (week === 0) {
        //     week = "";
        // }
        const wk = doc.ce(div);
        wk.setAttribute(m.cls, "week");
        wk.setAttribute(eds.year, year);
        wk.setAttribute(eds.month, month);
        wk.setAttribute(eds.week, week);
        if (adjoin != null) {
            wk.setAttribute(eds.adjoin, adjoin);
            wk.setAttribute(eds.adjoinWeek, adjoinWeek);
        }
        const lb = doc.ce(lbl);
        lb.innerText = week === 0 ? "" : "" + week;
        if (week === 0 || week === "") {
            lb.setAttribute(eds.prefix, adjoin + "월");
            lb.setAttribute(eds.suffix, adjoinWeek + "주차");
        }
        wk.append(lb);
        const ds = doc.ce(div);
        ds.setAttribute(m.cls, "days v_scroll");
        wk.append(ds);
        return wk;
    }

    buildDay(year, month, day, date) {
        const dy = doc.ce(div);
        dy.setAttribute(m.cls, "day");
        dy.setAttribute(eds.year, year);
        dy.setAttribute(eds.month, month);
        dy.setAttribute(eds.day, day);
        dy.setAttribute(eds.date, date);
        const lb = doc.ce(lbl);
        lb.innerText = "" + date;
        dy.append(lb);
        const basic = doc.ce(ul);
        basic.setAttribute(m.cls, "scheduled");
        basic.setAttribute(eds.group, "basic");
        dy.append(basic);
        const whole = doc.ce(ul);
        whole.setAttribute(m.cls, "scheduled");
        whole.setAttribute(eds.group, "whole");
        dy.append(whole);
        const timely = doc.ce(ul);
        timely.setAttribute(m.cls, "scheduled");
        timely.setAttribute(eds.group, "timely");
        dy.append(timely);
        const data = doc.ce(ul);
        data.setAttribute(m.cls, "scheduled");
        data.setAttribute(eds.group, "data");
        dy.append(data);
        return dy;
    }

    buildDaysSubjects(month = "") {
        const ds = doc.ce(div);
        ds.setAttribute(m.cls, "days_subjects");
        const dh = doc.ce(div);
        dh.setAttribute(m.cls, "days_holder");
        const lb = doc.ce(lbl);
        const s = doc.ce(sp);
        s.innerText = "" + month;
        lb.append(s);
        dh.append(lb);
        const days = doc.ce(div);
        days.setAttribute(m.cls, "days");
        for (var d=0; d<7; d++) days.append(this.buildDaySubject(d));
        dh.append(days);
        ds.append(dh);
        return ds;
    }

    buildDaySubject(day) {
        const d = doc.ce(div);
        d.setAttribute(m.cls, "day");
        d.setAttribute(eds.day, day);
        const lb = doc.ce(lbl);
        lb.setAttribute(eds.fore, Ecal.getDayEmoji(day));
        lb.innerText = Ecal.getDayText(day);
        d.append(lb);
        return d;
    }

    //getter and setter
    getMonth(year, month) {
        const y = this.year[year];
        if (y != null) return y.month[month];
        return null;
    }

    forMonth(year, month, work) {
        const m = this.getMonth(year, month);
        if (m != null) work(m);
    }

    getDays(year, month, date) {
        const days = [];
        const ds = this.year[year].getDays(date, month, year);
        if (ds != null) days.push(...ds);
        if (date < 7) {
            if (month < 2) {
                const y = this.year[year - 1];
                if (y != null) {
                    const ds = y.getDays(date, month, year);
                    if (ds != null) days.push(...ds);
                }
            }
        } else if (date > 22) {
            if (month > 11) {
                const y = this.year[year + 1];
                if (y != null) {
                    const ds = y.getDays(date, month, year);
                    if (ds != null) days.push(...ds);
                }
            }
        }
        return days;
    }

    forDays(work, year, month, date) {
        work(this.getDays(year, month, date));
    }

    setEachDay(ed, year, month, date) {
        const dateId = Ecal.getDateOffset(year, month, date);
        if (this.eachDay[dateId] == null) this.eachDay[dateId] = new Set();
        const daySet = this.eachDay[dateId];
        daySet.add(ed);
    }

    getEachDay(year, month, date) {
        return this.getEachDayBy(Ecal.getDateOffset(year, month, date));
    }

    getEachDayBy(dateId) {
        const set = this.eachDay[dateId];
        if (set != null) return Array.from(set.values());
        else [];
    }

    //event handler
    setEventYear(year) {
        const inst = this;

        year.$year.off("click").click(function (e) {
            e.preventDefault();

            const $this = $(this);
            const selected = $this.attr(eds.year);
            const isSelected = $this.attr(eds.selected) == t1;

            var toScaledBe = null;
            if (inst.calendar.scaleInt < 2 && isSelected) toScaledBe = t2;

            inst.calendar.setSelectedYear(selected, toScaledBe);

            return false;
        });

        year.$year.find(c.c + "label").off("click").click(function (e) {
            e.preventDefault();

            const $this = $(this);
            const $parent = $this.parent();
            const selected = $parent.attr(eds.year);

            var toScaledBe = null;
            if (inst.calendar.scaleInt < 2) toScaledBe = t2;
            else toScaledBe = t1;

            inst.calendar.setSelectedYear(selected, toScaledBe);

            return false;
        });
    }

    setEventMonth(month, count = 0) {
        const inst = this;
        if (!month.isAttached()) {
            if (count < 3) setTimeout(() => { inst.setEventMonth(month, count+1); }, 0);
            return;
        }

        month.$month.off("click").click(function (e) {
            e.preventDefault();

            const $this = $(this);
            const year = $this.attr(eds.year);
            const month = $this.attr(eds.month);
            const isSelected = $this.attr(eds.selected) == t1;

            var toScaledBe = null;
            if (inst.calendar.scaleInt < 3 && isSelected) toScaledBe = t3;

            inst.calendar.setSelectedMonth(year, month, toScaledBe);

            return false;
        });

        month.$month.find(c.c + "label" + cor + uis.daysSubjects + c.c + uis.daysHolder + c.c + "label").off("click").click(function (e) {
            e.preventDefault();

            const $this = $(this);
            const $parent = $this.parent();
            const year = $parent.attr(eds.year);
            const month = $parent.attr(eds.month);

            var toScaledBe = null;
            if (inst.calendar.scaleInt < 3) toScaledBe = t3;
            else toScaledBe = t2;

            inst.calendar.setSelectedMonth(year, month, toScaledBe);

            return false;
        });
    }

    setEventWeek(week, count = 0) {
        const inst = this;
        if (!week.isAttached()) {
            if (count < 3) setTimeout(() => { inst.setEventWeek(week, count+1); }, 0);
            return;
        }

        week.$week.off("click").click(function (e) {
            e.preventDefault();

            const $this = $(this);
            const year = $this.attr(eds.year);
            const month = $this.attr(eds.month);
            const week = $this.attr(eds.week);
            const adjoin = $this.attr(eds.adjoin);
            const isSelected = $this.attr(eds.selected) == t1;

            var toScaledBe = null;
            const currentScele = inst.calendar.scaleInt;
            if (currentScele < 3 && isSelected) toScaledBe = t3;//t4;
            else if (currentScele == 4) toScaledBe = t3;
            else if (currentScele > 4) toScaledBe = t3;//t4;

            inst.calendar.setSelectedWeek(year, month, week, adjoin, toScaledBe);

            return false;
        });

        week.$week.find(c.c + "label").off("click").click(function (e) {
            e.preventDefault();

            const $this = $(this);
            const $parent = $this.parent();
            const year = $parent.attr(eds.year);
            const month = $parent.attr(eds.month);
            const week = $parent.attr(eds.week);
            const adjoin = $parent.attr(eds.adjoin);
            const isSelected = $parent.attr(eds.selected) == t1;

            var toScaledBe = null;
            const currentScele = inst.calendar.scaleInt;
            if (currentScele < 3) toScaledBe = t3;//t4;
            else if (currentScele == 4) toScaledBe = t3;
            else if (currentScele > 4) toScaledBe = t3;//t4;
            else {
                if (e.originalEvent.pointerType != "touch") {
                    toScaledBe = t5;
                } else if (isSelected) {
                    toScaledBe = t5;
                }
            }

            inst.calendar.setSelectedWeek(year, month, week, adjoin, toScaledBe);

            return false;
        });
    }

    setEventDay(day, count = 0) {
        const inst = this;
        if (!day.isAttached()) {
            if (count < 3) setTimeout(() => { inst.setEventDay(day, count+1); }, 0);
            return;
        }

        day.$day.off("click").click(function (e) {
            e.preventDefault();

            const $this = $(this);
            const year = $this.attr(eds.year);
            const month = $this.attr(eds.month);
            const date = $this.attr(eds.date);
            const isSelected = $this.attr(eds.selected) == t1;

            var toScaledBe = null;
            const currentScele = inst.calendar.scaleInt;
            if (isSelected) {
                if (currentScele < 3) toScaledBe = t3;
                //if (currentScele < 4) toScaledBe = t4;
                //else if (currentScele < 5) toScaledBe = t5;
                //else if (currentScele < 6) toScaledBe = t6;
                //else ;// 스케줄 팝업
            }

            inst.calendar.setSelectedDay(year, month, date, toScaledBe);

            return false;
        });

        day.$day.find(c.c + "label").off("click").click(function (e) {
            e.preventDefault();

            const $this = $(this);
            const $parent = $this.parent();
            const year = $parent.attr(eds.year);
            const month = $parent.attr(eds.month);
            const date = $parent.attr(eds.date);
            const isSelected = $parent.attr(eds.selected) == t1;

            var toScaledBe = null;
            const currentScele = inst.calendar.scaleInt;
            if (currentScele < 3) toScaledBe = t3;
            else {
                if (e.originalEvent.pointerType != "touch") {
                    if (!isSelected) {
                        //if (currentScele < 5) toScaledBe = t5;
                    } //else if (currentScele < 6) toScaledBe = t6;
                    else if (currentScele < 5) toScaledBe = t5;
                } else if (isSelected) {
                    //if (currentScele < 4) toScaledBe = t4;
                    //else
                    if (currentScele < 5) toScaledBe = t5;
                    //else if (currentScele < 6) toScaledBe = t6;
                }
            }

            inst.calendar.setSelectedDay(year, month, date, toScaledBe);

            return false;
        });
    }

    // for calendar
    releaseDateSelected(fd = this.calendar.dateSetFocused) {
        this.$year.filter(aiv(eds.selected, t1) + naiv(eds.year, fd.year)).attr(eds.selected, "");
        // const year = this.$year.filter(aiv(eds.year, fd.year));
        const year = this.year[fd.year];
        if (year != null) year.$year.attr(eds.selected, t1);

        this.$month.filter(aiv(eds.selected, t1) + nto + aiv(eds.year, fd.year) + aiv(eds.month, fd.month) + clo).attr(eds.selected, "");
        // const month = year.find(uis.month + aiv(eds.month, fd.month));
        const month = year.month != null ? year.month[fd.month] : null;
        if (month != null) month.$month.attr(eds.selected, t1);

        this.$week.filter(aiv(eds.selected, t1) + nto + aiv(eds.year, fd.year) + aiv(eds.month, fd.month) + aiv(eds.week, fd.week) + clo).attr(eds.selected, "");
        //const week = month.find(uis.week + aiv(eds.week, fd.week));
        if (month != null && month.week != null) {
            const week = month.week[fd.week];
            if (week != null) week.$week.attr(eds.selected, t1);
        }
                
        this.$day.filter(aiv(eds.selected, t1) + nto + aiv(eds.year, fd.year) + aiv(eds.month, fd.month) + aiv(eds.date, fd.date) + clo).attr(eds.selected, "");
        // const dateSpecfier = uis.day + aiv(eds.year, fd.year) + aiv(eds.month, fd.month) + aiv(eds.date, fd.date);
        // month.$month.find(dateSpecfier).attr(eds.selected, t1);
        // if (fd.date < 7) {
        //     if (fd.month < 2) this.$year.filter(aiv(eds.year, fd.year - 1)).find(dateSpecfier).attr(eds.selected, t1);
        //     else year.$year.find(uis.month + aiv(eds.month, fd.month - 1)).find(dateSpecfier).attr(eds.selected, t1);
        // } else if (fd.date > 22) {
        //     if (fd.month > 11) this.$year.filter(aiv(eds.year, fd.year + 1)).find(dateSpecfier).attr(eds.selected, t1);
        //     else year.$year.find(uis.month + aiv(eds.month, fd.month + 1)).find(dateSpecfier).attr(eds.selected, t1);
        // }
        this.forDays((days) => {
            for (var day of days) day.$day.attr(eds.selected, t1);
        }, fd.year, fd.month, fd.date);
    }

    releaseToday(td = Ecal.getDateSet()) {
        const tdy = this.$year.filter(aiv(eds.today, t1));
        if (tdy.length == 0 || tdy.length > 1 || tdy.attr(eds.year) != td.year) {
            tdy.attr(eds.today, null);
            this.$year.filter(aiv(eds.year, td.year)).attr(eds.today, t1);
        }

        const tdm = this.$month.filter(aiv(eds.today, t1));
        const isDiffTM = tdm.attr(eds.year) != td.year || tdm.attr(eds.month) != td.month;
        if (tdm.length == 0 || tdm.length > 1 || isDiffTM) {
            tdm.attr(eds.today, null);
            this.$month.filter(aiv(eds.year, td.year) + aiv(eds.month, td.month)).attr(eds.today, t1);
        }

        const tdw = this.$week.filter(aiv(eds.today, t1));
        const isDiffTW = tdw.attr(eds.year) != td.year || tdw.attr(eds.month) != td.month || tdw.attr(eds.week) != td.week;
        if (tdw.length == 0 || tdw.length > 1 || isDiffTW) {
            tdw.attr(eds.today, null);
            this.$week.filter(aiv(eds.year, td.year) + aiv(eds.month, td.month) + aiv(eds.week, td.week)).attr(eds.today, t1);
        }

        const tdd = this.$day.filter(aiv(eds.today, t1));
        var isDiffTD = false;
        for (var tddi of tdd) {
            tddi = $(tddi);
            if (tddi.attr(eds.year) != td.year || tddi.attr(eds.month) != td.month || tddi.attr(eds.date) != td.date) {
                isDiffTD = true;
                break;
            }
        }
        if (tdd.length == 0 || tdd.length > 2 || isDiffTD) {
            tdd.attr(eds.today, null);
            this.$day.filter(aiv(eds.year, td.year) + aiv(eds.month, td.month) + aiv(eds.date, td.date)).attr(eds.today, t1);
        }
    }

    checkLoadCalendarStructure(toScaledBe, date) {
        if (toScaledBe == null) toScaledBe = this.calendar.scaleInt;
        const td = Ecal.getDateSet(date);
        const isNeedLoadDaysSelectedYear = toScaledBe > 0;//toScaledBe > 1;

        const year = this.year[td.year];
        if (year == null) {
            this.initYears(date);
            return true;
        } else {
            var isNeedCareYear = false;
            var isNeedCareMonth = false;
            if (year.setNode()) {
                isNeedCareYear = true;
                for (var month of year.subMonths) this.setEventMonth(month);
            }
            if (!year.isLoaded()) {
                const months = this.initMonths(year.$months, td.year, isNeedLoadDaysSelectedYear ? true : null);
                year.setMonth(months);
                this.releaseStructureHandler("month");
                return true;
            } else if (isNeedLoadDaysSelectedYear) {
                var isLoaded = false;
                for (var mo in year.month) {
                    const month = year.month[mo];
                    if (month.setNode()) {
                        isNeedCareMonth = true;
                        for (var week of month.subWeeks) {
                            this.setEventWeek(week);
                            for (var day of week.subDays) this.setEventDay(day);
                        }
                    }
                    if (!month.isLoaded()) {
                        const weeks = this.initWeeks(month.$weeks, td.year, mo, true);
                        month.setWeek(weeks);
                        isLoaded = true;
                    } else {
                        const dayLoaded = true;
                        for (var week of month.subWeeks) if (!week.isLoaded()) {
                            dayLoaded = false;
                            break;
                        } else for (var day of week.subDays) if (!day.isLoaded()) {
                            dayLoaded = false;
                            break;
                        }

                        if (!dayLoaded) {
                            const weeks = this.initWeeks(month.$weeks, td.year, mo, true);
                            month.setWeek(weeks);
                            isLoaded = true;
                        }
                    }
                    
                }

                if (isLoaded) {
                    this.releaseStructureHandler("month");
                    return true;
                }
            }
            if (isNeedCareYear) this.releaseStructureHandler("year");
            else if (isNeedCareMonth) this.releaseStructureHandler("month");
        }
        return false;
    }

    checkRelaseUnusedCalendarStructure(td, fd, scale) {
        for (var y in this.year) {
            const year = this.year[y];
            if (scale == 1) {
                if (year.setNode()) {
                    for (var month of year.subMonths) this.setEventMonth(month);
                    this.releaseStructureHandler("year");
                }
            } else if (scale >= 2) {
                if (y == td.year || y == fd.year || y == fd.year - 1 || y == fd.year + 1) {
                    const isNeedCareYear = year.setNode();
                    var isNeedCareMonth = false;
                    for (var m in year.month) {
                        const month = year.month[m];
                        if (isNeedCareYear) this.setEventMonth(month);
                        if (y == td.year || y == fd.year ||//if ((y == td.year && m == td.month) || (y == fd.year && m == fd.month) ||
                            (fd.month == 1 && y == fd.year - 1 && m == 12) ||
                            (fd.month == 12 && y == fd.year + 1 && m == 1)) {

                            if (month.setNode()) {
                                isNeedCareMonth = true;
                                for (var week of month.subWeeks) {
                                    this.setEventWeek(week);
                                    for (var day of week.subDays) this.setEventDay(day);
                                }
                            }
                        } else {
                            month.releaseNode();
                        }
                    }
                    if (isNeedCareYear) this.releaseStructureHandler("year");
                    else if (isNeedCareMonth) this.releaseStructureHandler("month");
                } else {
                    year.releaseNode();
                }
            }
        }
    }

    clearScheduled(groups, year) {
        if (year == null) for (var group of groups) this.$scheduled.filter(aiv(eds.group, group)).empty();
        else {
            const begin = Ecal.getDateOffset(year, 0, 1);
            const end = Ecal.getDateOffset(year, 11, 31);
            for (var i=begin; i<=end; i++) {
                const days = this.getEachDayBy(i);
                for (var day of days) day.clearScheduled(groups);
            }
        }
    }

    pushDailySchedule(listGrouped, dateId) {
        const set = this.getEachDayBy(dateId);
        for (var day of set) day.pushSchedule(listGrouped);
    }

}

class EstreVariableCalendar extends EstreCalendar {
    // constants


    // class property


    // instance property
    area = null;
    $area = null;

    bound = null;
    $bound = null;
    data = null;

    $dateIndicateArea = null;
    $dateIndicator = null;
    $scalers = null;
    $todayToggle = null;
    $showToday = null;

    $structure = null;

    $calendarBar = null;

    $scheduleFilter = null;
    $filterFixed = null;
    $filterVariable = null;

    $areaHandler = null;
    $areaToSmaller = null;
    $areaToLarger = null;
    $areaResizer = null;


    structure = null;

    areaResizeHandler = null;


    scheduleRequestedYearly = [];//[year] = Set(groups)
    scheduleRequestedMonthly = [];
    scheduleRequestedDaily = [];

    prevFocusedYear = null;
    prevScheduleBasicOrigin = "";
    prevScheduleDataOrigin = "";

    maxScale = 6;

    constructor(calendar, area = calendar.closest(uis.calendarArea), unical) {
        super(unical);

        this.area = area;
        this.$area = $(area);

        this.bound = calendar;
        this.$bound = $(calendar);
        this.data = calendar.dataset;

        this.$dateIndicateArea = this.$bound.find(c.c + uis.dateIndicateArea);
        this.$dateIndicator = this.$dateIndicateArea.find(c.c + uis.dateIndicator);
        this.$scalers = this.$dateIndicator.find(c.c + uis.scaler);
        this.$todayToggle = this.$dateIndicator.find(c.c + uis.today);
        this.$showToday = this.$todayToggle.find(c.c + uis.unicalShowToday);

        this.$structure = this.$bound.find(c.c + uis.calendarStructure);

        this.$calendarBar = this.$bound.find(c.c + uis.calendarBar);

        this.$scheduleFilter = this.$calendarBar.find(c.c + div + c.c + uis.scheduleFilter);
        this.$filterFixed = this.$scheduleFilter.find(c.c + uis.filterFixed);
        this.$filterVariable = this.$scheduleFilter.find(c.c + uis.filterVariable);

        this.$areaHandler = this.$calendarBar.find(c.c + uis.areaHandler);
        this.$areaToSmaller = this.$areaHandler.find(c.c + uis.toSmaller);
        this.$areaToLarger = this.$areaHandler.find(c.c + uis.toLarger);
        this.$areaResizer = this.$calendarBar.find(c.c + uis.areaResizer);


    }

    init() {
        if (isAndroid()) this.setNoTransition();

        this.setEventScaler();

        this.setEventFilter();

        this.setEventAreaHandles();
        
        const today = this.initStructure();

        this.$bound.attr(eds.showToday, "");
        this.$showToday[0].checked = false;

        super.init(today);

        return this;
    }

    release(remove) {
        super.remove(remove);

        this.releaseStructure();

        scheduleDataSet.releaseCaller(this);

        //to do implement
    }

    releaseStructure() {
        if (this.structure != null) {
            this.structure.release();
            this.structure = null;
        }
    }

    initStructure(type = "auto") {
        switch (type) {
            case "auto":
                type = "massive";
                // if (isAppleMobile()) {
                //     const iosVersion = getIosVersion();
                //     if (iosVersion != null) {
                //         if (parseInt(iosVersion.split(".")[0]) < 16) type = "simple";
                //     }
                // }
                if (!csc(csm.containerQuery)) type = "simple";

                return this.initStructure(type);

            case "void":
                this.structure = new EstreVoidCalendarStructure(this.$structure, this);
                break;

            case "simple":
                this.structure = new EstreSimpleCalendarStructure(this.$structure, this);
                break;
                
            case "massive":
                this.structure = new EstreMassiveCalendarStructure(this.$structure, this);
                break;
        }
        this.setStructureType(type);
        return this.structure.init();
    }

    initScale(scale = this.$bound.attr(eds.beginScale)) {
        super.initScale(scale);
    }

    //getter and setter
    get structureType() { return this.$structure.attr(eds.structureType); }

    setStructureType(type = null) {
        this.$structure.attr(eds.structureType, type);
    }
    
    get scale() {
        return this.$bound.attr(eds.scale);
    }
    
    get scaleInt() {
        return parseInt(this.scale);
    }

    setScale(tv) {
        super.setScale(tv);

        const inst = this;
        const currentScale = this.scaleInt;
        const v = parseInt(tv);
        this.beginTransition();
        if (currentScale > 3 && v < 3) {
            setTimeout(() => {
                inst.$bound.attr(eds.scale, tv + "");
                setTimeout(() => {
                    inst.checkRelaseUnusedCalendarStructure();
                    inst.endTransition();
                    inst.checkLoadSchedule();
                }, this.transitionTime / 2);
            }, cvt.t2ms(this.unical.$calendarArea.css(a.trdr)));
        } else {
            this.$bound.attr(eds.scale, tv + "");
            setTimeout(() => {
                inst.checkRelaseUnusedCalendarStructure();
                inst.endTransition();
                inst.checkLoadSchedule();
            }, v > currentScale ? inst.transitionTime : this.transitionTime / 2);
        }
        const isSetFit = v > 3;
        // const isCurrent = this.unical.$calendarArea.attr(eds.fitCalendar) == t1;
        // if (isSetFit != isCurrent) this.unical.$calendarArea.attr(eds.fitCalendar, isSetFit ? t1 : "");
        this.unical.$calendarArea.attr(eds.scaleOverride, isSetFit ? "" + tv : "");
    }

    get basicOrigin() {
        return this.$bound.attr(eds.currentScheduleBasicOrigin);
    }

    setBasicOrigin(origin) {
        super.setBasicOrigin(origin);
        this.$bound.attr(eds.currentScheduleBasicOrigin, origin);
    }

    get dataOrigin() {
        return this.$bound.attr(eds.currentScheduleDataOrigin);
    }

    setDataOrigin(origin) {
        super.setDataOrigin(origin);
        this.$bound.attr(eds.currentScheduleDataOrigin, origin);
    }

    getScheduleOrigin(originBase) {
        return this.$bound.attr(eds.currentScheduleOrigin(originBase));
    }

    setScheduleOrigin(originBase, origin) {
        super.setScheduleOrigin(originBase, origin);
        this.$bound.attr(eds.currentScheduleOrigin(originBase), origin);
    }

    //event handler
    setEventScaler() {
        const inst = this;

        this.$scalers.click(function(e) {
            const $this = $(this);
            const scaleId = $this.attr(eds.scaleId);
            if (scaleId != null && scaleId != "") {
                inst.setScale(scaleId);
                $this.attr(eds.scaleSelected, t1);
            }
        });    

        this.$showToday.change(function(e) {
            inst.beginTransition();
            inst.$bound.attr(eds.showToday, this.checked ? t1 : "");
            setTimeout(() => { inst.endTransition(); }, inst.transitionTime);
        });    
    }

    setEventFilter() {
        const inst = this;

        this.$filterFixed.find(c.c + li).click(function (e) {
            const $this = $(this);
            const selected = $this.attr(eds.selected) == t1 ? "" : t1;
            $this.attr(eds.selected, selected);
            inst.$bound.attr(eds.showSchedulePrefix + $this.attr(eds.group), selected);
        });

        scheduleDataSet.dataHandler.initScheduledDataFilter(this);
    }

    setEventAreaHandles() {
        const inst = this;

        this.$areaToSmaller.click(function (e) {
            var current = inst.$area.attr(eds.size);
            if (current == "") {
                inst.beginTransition();
                inst.$area.attr(eds.size, 0);
                setTimeout(() => { inst.endTransition(); }, inst.transitionTime);
            } else {
                current = parseInt(current);
                if (current > 0) {
                    inst.beginTransition();
                    inst.$area.attr(eds.size, current - 1);
                    setTimeout(() => { inst.endTransition(); }, inst.transitionTime);
                }
            }
        });

        this.$areaToLarger.click(function (e) {
            var current = inst.$area.attr(eds.size);
            if (current == "") {
                inst.$area.attr(eds.size, 3);
            } else {
                current = parseInt(current);
                if (current < 3) {
                    inst.$area.attr(eds.size, current + 1);
                }
            }
        });

        this.setAreaResizeHandler();
    }

    releaseAreaResieHandler() {
        if (this.areaResizeHandler != null) this.areaResizeHandler.release();
    }

    setAreaResizeHandler() {
        this.releaseAreaResieHandler();
        const inst = this;
        var startHeight = null;
        var fallbackSize = null;
        this.areaResizeHandler = new EstreSwipeHandler(this.$areaResizer).unuseX().setThresholdY(1).setDropStrayed(false).setPreventDefault().setPreventAll().setOnDown(function(startX, startY) {
            // console.log("startX: " + startX + " / startY: " + startY);
            inst.beginTransition();
            $(document.body).attr(eds.onResizing, "v");
            startHeight = inst.$area.height();//.offsetHeight;
            fallbackSize = inst.$area.attr(eds.size);
        }).setOnUp(function(grabX, grabY, handled, canceled, directed) {
            // console.log("handled: " + handled + " / canceled: " + canceled + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            $(document.body).attr(eds.onResizing, null);
            const height = parseInt(startHeight + grabY);
            if (handled) {
                // console.log("fixed - height: " + height + " / startHeight: " + startHeight);
                inst.$area.css("--height", height + "px");
                if (inst.$area.attr(eds.size) != "") inst.$area.attr(eds.size, "");
            } else {
                // console.log("finally fallbacked - startHeight: " + startHeight + ", fallbackSize: " + fallbackSize);
                if (fallbackSize != "") {
                    inst.$area.css("--height", "0px");
                    inst.$area.attr(eds.size, fallbackSize);
                } else inst.$area.css("--height", height + "px");
            }
            setTimeout(() => inst.endTransition(), inst.transitionTime);
            startHeight = null;
            fallbackSize = null;
        }).setOnMove(function(grabX, grabY, handled, dropped, directed) {
            // console.log("handled: " + handled + " / dropped: " + dropped + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            if (startHeight != null) {
                const height = parseInt(startHeight + grabY);
                if (handled) {
                    // console.log("height: " + height + " / startHeight: " + startHeight);
                    inst.$area.css("--height", height + "px");
                    if (inst.$area.attr(eds.size) != "") inst.$area.attr(eds.size, "");
                } else {
                    // console.log("fallback - startHeight: " + startHeight + ", fallbackSize: " + fallbackSize);
                    if (fallbackSize != "") {
                        inst.$area.css("--height", "0px");
                        inst.$area.attr(eds.size, fallbackSize);
                    } else inst.$area.css("--height", height + "px");
                }
            } // else console.log("ignored");
        });
    }


    //common
    get isNoTransition() { return this.$bound.attr(eds.noTransition) == t1; }
    
    setNoTransition(enable = true) {
        this.$bound.attr(eds.noTransition, enable ? t1 : null);
        return this;
    }

    get transitionTime() {
        return this.isNoTransition ? 0 : 800;
    }


    //handles
    setSelectedYear(selected, toScaledBe) {
        super.setSelectedYear(selected);

        this.$structure.attr(eds.focusYear, selected);
        this.beginTransition();
        this.checkSetDayFocused(toScaledBe);
        setTimeout(() => this.endTransition(), this.transitionTime);
    }
    
    setSelectedMonth(year, month, toScaledBe) {
        super.setSelectedMonth(year, month);

        this.$structure.attr(eds.focusYear, year);
        this.$structure.attr(eds.focusMonth, month);
        this.beginTransition();
        this.checkSetDayFocused(toScaledBe);
        setTimeout(() => this.endTransition(), this.transitionTime);
    }
    
    setSelectedWeek(year, month, week, adjoin, toScaledBe) {
        super.setSelectedWeek(year, month, week, adjoin);

        year = parseInt(year);
        month = parseInt(month);
        if (week == "") {
            const isPrevMonth = parseInt(adjoin) < month;
            month += isPrevMonth ? -1 : 1
            week = isPrevMonth ? Ecal.getLastWeek(year, month - 1) : 1;
        }
        const date = Ecal.getDateSundayOfWeek(year, month - 1, parseInt(week));
        
        const focused = this.dateFocused;
        date.setDate(date.getDate() + focused.getDay());
        const monthBefore = focused.getMonth();

        const td = Ecal.getDateSet(date);
        this.$structure.attr(eds.focusYear, td.year);
        this.$structure.attr(eds.focusMonth, td.month);
        this.$structure.attr(eds.focusDay, td.date);
        this.$structure.attr(eds.focusWeek, td.week);
        
        const onTransition = toScaledBe == null && (this.dateFocused.getMonth() != monthBefore || this.scaleInt > 3);
        if (onTransition) this.beginTransition();
        this.checkSetDayFocused(toScaledBe);
        if (onTransition) setTimeout(() => this.endTransition(), this.transitionTime);
    }

    setSelectedDay(year, month, date, toScaledBe) {
        super.setSelectedDay(year, month, date);

        const fdb = this.dateSetFocused; 
        const monthBefore = fdb.month0;
        const weekBefore = fdb.ymw.week;
        this.$structure.attr(eds.focusYear, year);
        this.$structure.attr(eds.focusMonth, month);
        this.$structure.attr(eds.focusDay, date);

        const fd = this.dateSetFocused;
        const focusedWeek = fd.ymw.week;
        this.$structure.attr(eds.focusWeek, "" + focusedWeek);

        const currentScale = this.scaleInt;
        const onTransition = toScaledBe == null && (fd.month0 != monthBefore || (currentScale == 5 && focusedWeek != weekBefore) || currentScale > 5);
        if (onTransition) this.beginTransition();
        this.checkSetDayFocused(toScaledBe);
        if (onTransition) setTimeout(() => this.endTransition(), this.transitionTime);
    }

    checkSetDayFocused(toScaledBe) {
        const fd = this.dateSetFocused;
        this.setYearIndic(fd.ymw.year);
        this.setMonthIndic(fd.ymw.month);
        this.setWeekIndic(fd.ymw.week);
        this.setDateIndic(fd.year, fd.month, fd.date);
        this.setDayIndic(fd.dayText);

        this.releaseDate(toScaledBe);
    }

    releaseSelectedDay() {
        this.setDayIndic(Ecal.getDayText(this.dateFocused.getDay()));
    }

    setYearIndic(year) {
        const yearIndic = this.$scalers.filter(uis.years).find(c.c + "label");
        yearIndic.text(year);
    }

    setMonthIndic(month) {
        const monthIndic = this.$scalers.filter(uis.months).find(c.c + "label");
        monthIndic.text(month);
    }

    setWeekIndic(week) {
        const weekIndic = this.$scalers.filter(uis.weeks).find(c.c + "label");
        weekIndic.text(week);
    }

    setDayIndic(day) {
        const dayIndic = this.$scalers.filter(uis.days).find(c.c + "label");
        dayIndic.text(day);
    }

    setDateIndic(year, month, date) {
        const dateIndic = this.$scalers.filter(uis.date).find(c.c + "label");
        dateIndic.text(("" + date).padStart(2, "0"));
        dateIndic.attr(eds.prefix, (year % 100) + cls + ("" + month).padStart(2, "0") + cls);
    }    

    releaseDate(toScaledBe, fd = this.dateSetFocused) {
        const inst = this;
        if (this.checkLoadCalendarStructure(toScaledBe)) setTimeout(() => {
            inst.structure.releaseDateSelected(fd);
            inst.releaseToday();

            if (toScaledBe != null) inst.setScale(toScaledBe);
            else inst.checkLoadSchedule();

            inst.pushUpdateFocused();
        }, 0);
        else {
            this.structure.releaseDateSelected(fd);
            this.releaseToday();

            if (toScaledBe != null) this.setScale(toScaledBe);
            else this.checkLoadSchedule();

            this.pushUpdateFocused();
        }
    }

    releaseToday() {
        const td = Ecal.getDateSet();

        this.releaseDateIndicator(td);

        this.structure.releaseToday(td);
    }

    releaseDateIndicator(td) {
        const $year = this.$scalers.filter(uis.years);
        const year = parseInt($year.find(c.c + "label").text());
        const isTodayYear = year == td.year;
        $year.attr(eds.today, isTodayYear ? t1 : "");

        const $month = this.$scalers.filter(uis.months);
        const month = parseInt($month.find(c.c + "label").text());
        const isTodayMonth = month == td.month;
        $month.attr(eds.today, isTodayMonth ? t1 : "");

        const $week = this.$scalers.filter(uis.weeks);
        const week = parseInt($week.find(c.c + "label").text());
        const isTodayWeek = week == td.week;
        $week.attr(eds.today, isTodayWeek ? t1 : "");

        const $day = this.$scalers.filter(uis.days);
        const day = $day.find(c.c + "label").text();
        const isTodayDay = day == td.dayText;
        $day.attr(eds.today, isTodayDay ? t1 : "");

        const $date = this.$scalers.filter(uis.date);
        const date = parseInt($date.find(c.c + "label").text());
        const isTodayDate = date == td.date;
        $date.attr(eds.today, isTodayDate ? t1 : "");

        const isToday = isTodayYear && isTodayMonth && isTodayDate;

        //this.$showToday[0].checked = isToday;
    }

    checkLoadCalendarStructure(toScaledBe, date = this.dateFocused) {
        if (toScaledBe == null) toScaledBe = this.scaleInt;
        return this.structure.checkLoadCalendarStructure(toScaledBe, date);
    }

    checkRelaseUnusedCalendarStructure() {
        const td = Ecal.getDateSet();
        const fd = this.dateSetFocused;
        const scale = this.scaleInt;
        this.structure.checkRelaseUnusedCalendarStructure(td, fd, scale);
    }

    hideDataOfScheduled() {
        this.$scheduled.filter(aiv(eds.group, "data")).hide();
    }

    showDataOfScheduled() {
        this.$scheduled.filter(aiv(eds.group, "data")).show();
    }

    beginTransition() {
        let current = this.$structure.attr(eds.transition);
        if (current == null || current == "") current = 0;
        else current = parseInt(current);
        this.$structure.attr(eds.transition, current + 1);
    }

    endTransition() {
        let current = this.$structure.attr(eds.transition);
        if (current == null || current == "") current = 0;
        else current = parseInt(current);
        this.$structure.attr(eds.transition, Math.max(current - 1, 0));
    }

    checkLoadSchedule() {
        const focusedYear = this.yearIntFocused;
        const basicOrigin = this.basicOrigin;
        const dataOrigin = this.dataOrigin;
        const dateBeginEnd = Escd.getDateBeginEndFrom(focusedYear);
        if (focusedYear != this.prevFocusedYear) {
            const tag = basicOrigin != null && basicOrigin != "" ? "|" + basicOrigin : "";
            const groups = ["basic" + tag, "whole", "timely"];
            if (dataOrigin != "") groups.push("data|" + dataOrigin);
            const forClear = ["whole", "timely"];
            if (this.prevScheduleBasicOrigin != "") forClear.unshift("basic");
            if (this.prevScheduleDataOrigin != "") forClear.push("data");
            this.structure.clearScheduled(forClear, focusedYear);
            // this.setScheduleRequestedYearly(focusedYear, groups);
            // scheduleDataSet.requestPushDataYear(focusedYear, this, groups);
            scheduleDataSet.requestPushData(dateBeginEnd.beginDate, dateBeginEnd.endDate, groups, this);
            this.prevFocusedYear = focusedYear;
            if (this.prevFocusedYear == "") {
                this.prevScheduleBasicOrigin = basicOrigin;
                this.prevScheduleDataOrigin = dataOrigin;
            }
        } else {
            if (basicOrigin != this.prevScheduleBasicOrigin) {
                const tag = basicOrigin != null && basicOrigin != "" ? "|" + basicOrigin : "";
                const groups = ["basic" + tag];
                if (this.prevScheduleBasicOrigin != "") this.structure.clearScheduled(["basic"], focusedYear);
                // this.setScheduleRequestedYearly(focusedYear, groups);
                // scheduleDataSet.requestPushDataYear(focusedYear, this, groups);
                scheduleDataSet.requestPushData(dateBeginEnd.beginDate, dateBeginEnd.endDate, groups, this);
                this.prevScheduleBasicOrigin = basicOrigin;
            } else if (dataOrigin != this.prevScheduleDataOrigin) {
                if (this.prevScheduleDataOrigin != "") this.structure.clearScheduled(["data"], focusedYear);
                if (dataOrigin != "") {
                    const groups = ["data|" + dataOrigin];
                    // this.setScheduleRequestedYearly(focusedYear, groups);
                    // scheduleDataSet.requestPushDataYear(focusedYear, this, groups);
                    scheduleDataSet.requestPushData(dateBeginEnd.beginDate, dateBeginEnd.endDate, groups, this);
                }
                this.prevScheduleDataOrigin = dataOrigin;
            }
        }
    }


    // from scheduleDataSet
    pushDailySchedule(listGrouped, dateId) {
        this.structure.pushDailySchedule(listGrouped, dateId);
    }


    // for scheduler
    notifyBoundChanged(bound, scope) {
        this.beginTransition();
        super.notifyBoundChanged(bound, scope);
        setTimeout(() => { this.endTransition(); }, this.transitionTime);
    }
    
}


class EstreUnifiedScheduler {
    // constants


    // class property


    // instance property
    unical = null;
    calendar = null;
    area = null;
    $area = null;

    bound = null;
    $bound = null;
    data = null;

    scopedTab = null;

    content = {};
    titleSpan = {};
    currentScope = null;

    registeredBound = new Set();

    constructor(scheduler, area = scheduler.parentElement, calendar, unical) {
        this.unical = unical;
        this.calendar = calendar;
        this.area = area;
        this.$area = $(area);

        this.bound = scheduler;
        this.$bound = $(scheduler);
        this.data = calendar.dataset;

    }

    release(remove = false) {
        scheduleDataSet.releaseCaller(this);

        this.unical = null;

        this.calendar.unregisterScheduler(this);
        this.calendar = null;
        this.area = null;
        this.$area = null;

        this.bound = null;
        if (remove) this.$bound.remove();
        this.$bound = null;
        this.data = null;

        this.scopedTab.release(remove);
        this.scopedTab = null;

        this.content = null;
        this.titleSpan = null;
        this.currentScope = null;
    }

    init() {
        this.calendar.registerScheduler(this);

        this.scopedTab = new EstreScopedTabBlock(this.bound, this).init();


        return this;
    }    

    
    registerScope(content, scope = content.dataset.scope, titleSpan) {
        this.content[scope] = content;
        if (titleSpan != null) this.titleSpan[scope] = titleSpan;
    }

    initScopes() {
        for (var scope in this.content) {
            const content = this.content[scope];

            this.initPages(scope);
        }
    }

    initPages(scope, bounds = Escd.getBounds(scope, this.calendar.dateFocused)) {
        const content = this.content[scope];
        const selected = content.find(c.c + c.w + aiv(eds.pageSelected, t1));
        if (selected.find(c.c + c.w).length > 0 && bounds[0] == selected.attr(eds.bound)) return;
        if (content != null) {
            const $content = $(content);
            const preload = $content.attr(eds.preload) == t1;
            const $pages = $content.find(c.c + c.w);
            const length = $pages.length;
            const offsetAdjust = parseInt(length / 2) + (1 - (length % 2));
            for (var i=0; i<length; i++) {
                const offset = i - offsetAdjust;
                const page = $pages[i];
                const $page = $(page);
                const bound = bounds[offset];
                this.boundHasGone($page.attr(eds.bound));
                $page.attr(eds.bound, bound);
                this.constructBound($page, scope, bound);
                if (preload || offset == 0) {
                    this.requestPushDataForPage($page, scope, bound, offset);
                    if (offset == 0) {
                        $page.attr(eds.pageSelected, t1);
                        this.pushScopeTitle(bound, scope);
                    }
                } else $page.attr(eds.pageSelected, "");
            }
        }
    }

    registerBound(bound) {
        this.registeredBound.add(bound);
    }

    isExistBound(bound) {
        return this.registeredBound.has(bound);
    }

    boundHasGone(bound) {
        this.registeredBound.delete(bound);
    }

    constructBound($page, scope, bound) {
        $page.empty();
        const division = doc.ce(li);
        division.setAttribute(eds.division, "schedule");
        division.setAttribute(eds.count, t0);
        division.append(this.buildPlaceholder());

        const d = Escd.getDateBeginEndFrom(bound, scope);
        for (var dateId=d.beginDate; dateId<=d.endDate; dateId++) {
            var holder = doc.ce(ul, "schedule_holder");
            holder.setAttribute(eds.group, "basic");
            holder.setAttribute(eds.dateId, dateId);
            division.append(holder);
            var holder = doc.ce(ul, "schedule_holder");
            holder.setAttribute(eds.group, "whole");
            holder.setAttribute(eds.dateId, dateId);
            division.append(holder);
            var holder = doc.ce(ul, "schedule_holder");
            holder.setAttribute(eds.group, "timely");
            holder.setAttribute(eds.dateId, dateId);
            division.append(holder);
        }

        $page.append(division);
    }

    buildPlaceholder(content = "일정 없음") {
        const block = doc.ce(div, "schedule_placeholder");
        const span = doc.ce(sp, null, content);
        block.append(span);
        return block;
    }

    buildScheduleItem(info, dateSet) {
        const item = doc.ce(li, "division_block schedule_item");
        item.setAttribute(eds.scheduleId, info.id);
        if (info.category != null) item.setAttribute(eds.category, info.category);
        const icon = doc.ce(div, "fit_width max_height event_type");
        var span = doc.ce(sp);
        icon.append(span);
        item.append(icon);
        const content = doc.ce(div, "block content");
        const datetime = doc.ce(div, "line_block datetime");
        const ruby = doc.ce(rb);
        ruby.append(doc.ce(sp, "month", dateSet.month));
        ruby.append(doc.ce(sp, "date", dateSet.date));
        const rubytext = doc.ce(rt, "week");
        //rubytext.append(doc.ce(sp, "year", info.ymw.year));
        rubytext.append(doc.ce(sp, "month", dateSet.ymw.month));
        rubytext.append(doc.ce(sp, "week", dateSet.ymw.week));
        ruby.append(rubytext);
        datetime.append(ruby);
        datetime.append(doc.ce(sp, "day", dateSet.dayText));
        var span = doc.ce(sp, "timespan");
        if (info.timeset.isWhole) span.innerText = "종일";
        else {
            if (info.timeset.begin != null) span.append(dic.ce(sp, "time_begin", info.timeset.begin));
            if (info.timeset.end != null) span.append(dic.ce(sp, "time_begin", info.timeset.end));
        }
        content.append(datetime);
        content.append(doc.ce(sp, "block subject", info.subject));
        item.append(content);
        return item;
    }

    // to scopedTab
    pushPageData(scope, bound, group, dateId, list) {
        const $content = $(this.content[scope]);
        const $page = $content.find(c.c + c.w + aiv(eds.bound, bound));
        const $division = $page.find(c.c + li + aiv(eds.division, "schedule"));
        const $holder = $division.find(c.c + uis.scheduleHolder + aiv(eds.group, group) + aiv(eds.dateId, dateId));
        $division.attr(eds.count, parseInt($division.attr(eds.count)) + list.length);

        // console.log("data to holder - scope: " + scope + ", bound: " + bound + ", group: " + group + ", dateID: " + dateId, list, $content, $page, $division, $holder);
        // if (scope == "monthly" && bound == "2024.03") throw new Error();
        if ($holder.length > 0) {
            $holder.empty();
            for (var info of list) {
                $holder.append(this.buildScheduleItem(info, Ecal.getDateSetFrom(dateId)));
            }
        }
    }

    pushScopeTitle(bound, scope) {
        const titleSpan = this.titleSpan[scope];
        if (titleSpan != null) {
            const d = Escd.parseBound(bound, scope);
            var title;
            switch (scope) {
                case "yearly":
                    title = d.year + "년도";
                    break;
                    
                case "monthly":
                    title = d.year + "년 " + d.month + "월";
                    break;
    
                case "weekly":
                    title = d.month + "월 " + d.week + "주차";
                    break;
    
                case "daily":
                    title = d.month + "월 " + d.date + "일 (" + d.day + ")";
                    break;
            }
            titleSpan.innerText = title;
        }
    }

    // from scopedTab
    requestInitScopes() {
        this.initScopes();
    }

    requestPushDataForPage($page, scope, bound, offset, isRecycle = false) {
        if (isRecycle) {
            bound = Escd.getBoundBy(offset, bound, scope);
            $page.attr(eds.bound, bound);
            this.constructBound($page, scope, bound);
            // console.log("requestPushDataForPage - scope: " + scope + ", bound: " + bound + ", offset: " + offset + ", isRecycle: " + isRecycle);
        }
        this.requestPushDataForScheduler(scope, bound);
    }

    requestPushDataForScheduler(scope, bound) {
        this.registerBound(bound);

        const basicOrigin = this.calendar.basicOrigin;
        // const dataOrigin = this.calendar.dataOrigin;
        const tag = basicOrigin != null && basicOrigin != "" ? "|" + basicOrigin : "";
        const groups = ["basic" + tag, "whole", "timely"];
        // if (dataOrigin != "") groups.push("data|" + dataOrigin);

        const dateBeginEnd = Escd.getDateBeginEndFrom(bound, scope);
        //console.log("requestPushData(" + dateBeginEnd.beginDate + ", " + dateBeginEnd.endDate + ", " + groups + ", this);");
        scheduleDataSet.requestPushData(dateBeginEnd.beginDate, dateBeginEnd.endDate, groups, this);
        
    }


    notifyScopeChanged(scope) {
        if (this.unical != null && this.unical.calendar != null) {
            this.unical.calendar.pushScopeChanged(scope);
        }
    }

    notifyBoundChanged(bound, scope) {
        if (this.unical != null && this.unical.calendar != null) {
            this.unical.calendar.notifyBoundChanged(bound, scope);
        }

        this.pushScopeTitle(bound, scope);
    }


    // from scheduleDataSet
/*
    pushYearlySchedule(datas, year, groups) {
        for (var dateId in datas) {
            const data = datas[dateId];
            this.pushDailySchedule(data, dateId);
        }
    }
*/

    pushDailySchedule(listGrouped, dateId) {
        for (var bound of this.registeredBound) {
            const d = Escd.getDateBeginEndFrom(bound);
            if (dateId >= d.beginDate && dateId <= d.endDate) {
                const scope = Escd.getScopeBy(bound);
                for (var groupId in listGrouped) {
                    const divided = groupId.split("|");
                    const group = divided[0];
                    const originId = divided[1];
                    // console.log("pushPageData(" + scope + ", " + bound + ", " + group + ", " + dateId + ", " + listGrouped[groupId] + ");", listGrouped[groupId]);
                    this.pushPageData(scope, bound, group, dateId, listGrouped[groupId]);
                }
            }
        }
    }
}


class ScheduleDataSet {

    #dataHandler = null;
    get dataHandler() { return this.#dataHandler; }

    #dataHandlerCommitted = false;


    dataMatrix = new Map();//key = origin, value = [dateId] = data
 
    /** this value has when exist any request */
    requestIssuer = null;

    /** append caller when null data in pendings */
    dataRequests = new Map();//key = origin, value = [dateId] = Set(caller)

    /** append caller when null data in matrix */
    dataPendings = new Map();//key = origin, value = [dateId] = Set(caller)


    init(dataHandler) {
        if (!this.#dataHandlerCommitted) this.#dataHandler = dataHandler;

        return this;
    }

    commit() {
        this.#dataHandlerCommitted = true;
    }


    issueRequest(delayed = false) {
        if (this.requestIssuer == null) {
            const inst = this;
            this.requestIssuer = setTimeout(function () { inst.requestProcessor(); }, delayed ? 100 : 0);
        }
    }

    requestProcessor() {
        this.requestIssuer = null;

        for (const [origin, requests] of this.dataRequests) {
            const pendings = this.dataPendings.get(origin);
            
            if (pendings != null && pendings.length > 0) {
                this.issueRequest(true);
                continue;
            }

            this.dataPendings.set(origin, requests);
            this.dataRequests.delete(origin);

            const ranges = [];
            var current = null;
            for (var dateId in requests) {
                if (current == null) {
                    current = { begin: dateId, end: dateId };
                } else if (dateId == current.end + 1) {
                    current.end = dateId;
                } else {
                    ranges.push(current);
                    current = { begin: dateId, end: dateId };
                }
            }

            for (var range of ranges) {
                this.dataHandler.notifyRequestData(origin, range.begin, range.end);
            }
        }

    }

    getDataBy(origin) {
        return this.dataMatrix.get(origin);
    }

    getData(origin, dateId) {
        const datas = this.getDataBy(origin);

        if (datas != null) return datas[dateId];

        return null;//not exist in dataMatrix
    }

    setData(origin, dateId, data) {
        var datas = this.getDataBy(origin);

        if (datas == null) {
            datas = [];
            this.dataMatrix.set(origin, datas);
        }

        datas[dateId] = data;
    }

    getDataPending(origin) {
        const pending = this.dataPendings.get(origin);
        if (pending != null) return pending;
        else {
            const newer = [];
            this.dataPendings.set(origin, newer);
            return newer;
        }
    }

    getExistsPending(origin) {
        const pending = this.dataPendings.get(origin);
        if (pending != null) {
            var count = 0;
            if (pending.length == 0) count--;
            else for (var v of pending) if (v != null) count++;
            return count;
        } else null;
    }

    checkClearPending(origin) {
        if (this.getExistsPending(origin) === 0) {
            this.dataPendings.delete(origin);
        }
    }

    clearDataPending(origin, dateId) {
        const pendings = this.getDataPending(origin);
        pendings[dateId] = null;
        this.checkClearPending(origin);
    }

    removeDataPending(origin) {
        return this.dataPendings.delete(origin);
    }

    setDataRequest(origin, dateId, caller) {
        var requestOrigin = this.dataRequests.get(origin);

        if (requestOrigin == null) {
            requestOrigin = [];
            this.dataRequests.set(origin, requestOrigin);
        }

        let requests = requestOrigin[dateId];

        if (requests == null) {
            requests = new Set([caller]);
            requestOrigin[dateId] = requests
        } else requests.add(caller);

        this.issueRequest();
    }

    requestData(origin, dateId, caller) {
        const pending = this.getDataPending(origin)[dateId];

        if (pending != null && pending.length > 0) {
            pending.add(caller);
        } else {
            this.setDataRequest(origin, dateId, caller);
        }
    }

    // from caller
    requestPushData(beginDateId, endDateId, groups, caller, forced = false) {
        for (var group of groups) {
            for (var i=beginDateId; i<=endDateId; i++) {

                const data = forced ? null : this.getData(group, i);

                if (data != null) {
                    const listGrouped = {};
                    listGrouped[group] = data;
                    // console.log("pushData(" + caller + ", " + listGrouped + ", " + i + ");", caller, data);
                    this.pushData(caller, listGrouped, i);
                } else {
                    // console.log("requestData(" + group + ", " + i + ", " + caller + ");", caller);
                    this.requestData(group, i, caller);
                }
            }
        }
    }
    
    // to caller
    pushDataBy(caller, dataSet, dateId, groups) {
        const groupSet = new Set(groups);
        const set = {};
        for (var group in dataSet) if (groupSet.has(group)) set[group] = dataSet[group];
        this.pushData(caller, set, dateId);
    }

    pushData(caller, data, dateId) {
        if (caller != null) try {
            caller.pushDailySchedule(data, dateId);
        } catch (ex) {
            console.log(ex.name + "\n" + ex.message);
        }
    }

    // from data handler
    incomeData(group, datas) {
        const pendings = this.getDataPending(group);

        for (var dateId in datas) {
            const data = datas[dateId];

            const callerSet = pendings[dateId];

            if (callerSet != null) {
                const callers = Array.from(callerSet);

                this.setData(group, dateId, data);
                const listGrouped = {};
                listGrouped[group] = data;
                for (var caller of callers) this.pushData(caller, listGrouped, dateId);
                this.clearDataPending(group, dateId);
            }
        }

        this.removeDataPending(group);
    }



    //old methods
    dataArray = [];
    
    callers = new Set();

    dataRequestsYear = [];
    dataReadyYear = [];

    getCalendar() {
        return estreUi.stockCalendar;
    }

    releaseCaller(caller) {
        this.callers.delete(caller);
    }
    
    requestPushDataYear(year, caller, groups = ["basic", "whole", "timely"]) {
        if (caller != null) this.callers.add(caller);
        
        const dataReady = this.dataReadyYear[year];
        
        const forPush = [];
        const forRequest = [];
        for (var group of groups) {
            if (dataReady == null || !dataReady.has(group)) forRequest.push(group);
            else forPush.push(group);
        }

        // var dataRequests = this.dataRequestsYear[year];
        // if (dataRequests == null) {
        //     const set = new Set();
        //     this.dataRequestsYear[year] = set;
        //     dataRequests = set;
        // }

        // for (var group of forRequest) dataRequests.add(group);

        if (forPush.length > 0) this.pushDataAlreadyHas(caller, forPush, year);
        if (forRequest.length > 0) this.requestDataYear(year, forRequest);
    }

    requestDataYear(year, groups) {

        var dataRequests = this.dataRequestsYear[year];
        if (dataRequests == null) {
            const set = new Set();
            dataRequests = set;
            this.dataRequestsYear[year] = set;
        }

        for (var group of groups) dataRequests.add(group);

        if (this.dataHandler != null) this.dataHandler.notifyRequestYear(year);
    }

    pushDataAlreadyHas(caller, groups, year, month, date) {
        if (date != null) {
            const dateId = Ecal.getDateOffset(year, month, date);
            this.pushDataBy(caller, dataSet, dateId, groups);
        } else if (month != null) {
            const monthBegin = Ecal.getDateOffset(year, month, 1);
            const monthEnd = Ecal.getDateOffset(year, month, Ecal.getLastDate(year, month));
            for (dateId=monthBegin; dateId<=monthEnd; dateId++) {
                const dataSet = this.dataArray[dateId];
                this.pushDataBy(caller, dataSet, dateId, groups);
            }
        } else if (year != null) {
            const yearBegin = Ecal.getDateOffset(year, 0, 1);
            const yearEnd = Ecal.getDateOffset(year, 11, 31);
            const yearly = [];
            const groupSet = new Set();
            for (dateId=yearBegin; dateId<=yearEnd; dateId++) {
                // const dataSet = this.dataArray[dateId];
                // this.pushDataBy(caller, dataSet, dateId, groups);
                const data = this.dataArray[dateId];
                const set = {}
                for (var group in data) if (groups.indexOf(group) > -1) {
                    set[group] = data[group];
                    groupSet.add(group);
                }
                yearly[dateId] = set;
            }
            this.pushDataYearly(caller, yearly, year, Array.from(groupSet.values()));
        } else {
            for (var dateId in dataMatrix) {
                const dataSet = this.dataArray[dateId];
                this.pushDataBy(caller, dataSet, dateId, groups);
            }
        }
    }

    pushDataYearly(caller, datas, year, groups) {
        try {
            caller.pushYearlySchedule(datas, year, groups);
        } catch (ex) {
            console.log(ex.name + "\n" + ex.message);
        }
    }

    incomeDataYear(year, group, datas) {
        const callers = Array.from(this.callers.values());
        const dataSet = [];
        for (var dateId in datas) {
            const data = datas[dateId];
            const dataGrouped = {};
            dataGrouped[group] = data;

            //for (var caller of callers) this.pushData(caller, dataGrouped, dateId);
            this.insertData(dateId, group, data);
            dataSet[dateId] = dataGrouped;
        }
        for (var caller of callers) this.pushDataYearly(caller, dataSet, year, [group]);

        const requests = this.dataRequestsYear[year];
        if (requests != null) requests.delete(group);
        const dataReady = this.dataReadyYear[year];
        if (dataReady != null) dataReady.add(group);
        else this.dataReadyYear[year] = new Set([group]);
    }

    insertData(dateId, group, data) {
        var dataSet = this.dataArray[dateId];
        if (dataSet == null) {
            dataSet = {};
            this.dataArray[dateId] = dataSet;
        }
        dataSet[group] = data;
    }
}

const scheduleDataSet = new ScheduleDataSet();


/**
 * Scalable element handler
 */
class EstreScalable extends EstreHandle {
    // constants


    // class property


    // instance property
    $toggle = null;
    $toggleIndic = null;

    maxScale = -1;


    // getter and setter
    #$wind = $(window);
    get $wind() { return this.#$wind };
    get isOnSwipe() { return this.$wind.attr(eds.onSwipe) == t1; };


    constructor(scalable, host) {
        super(scalable, host);
        this.$toggle = this.$bound.find(this.getToggleSpecifier());
        this.$toggleIndic = this.$bound.find(this.getToggleIndicatorSpecifier());
        const maxScale = this.data.maxScale;
        this.maxScale = maxScale == "" ? 0 : parseInt(maxScale);
    }

    release() {
        super.release();
    }

    init() {
        super.init();

        this.setEventToggleBtn();

        return this;
    }

    //getter and setter
    getToggleSpecifier() {
        return c.c + uis.toggle + cor + c.c + uis.summary + c.c + uis.toggle;// "> .toggle, > .summary > .toggle"
    }

    getToggleIndicatorSpecifier() {
        return c.c + uis.summary + c.c + uis.toggleBtn;// "> .summary > button.toggle"
    }

    //event handler
    setEventToggleBtn() {
        const inst = this;

        this.$toggle.off("click");

        this.$toggle.click(function(e) {
            if (!inst.isOnSwipe) {
                e.preventDefault();

                inst.toggleScaler();

                return false;
            }
        });
    }
    
    //handles
    toggleScaler() {
        const lookScale = this.data.lookScale;
        const current = lookScale == "" ? 0 : parseInt(lookScale);

        this.setScale(current + 1);
    }

    setScaler(scaler) {
        this.setScale(scaler == "" || isNaN(scaler) ? 0 : parseInt(scaler));
    }

    setScale(scale) {
        if (scale > this.maxScale) {
            if (this.$bound.css(v.scalableMethod) == "vertical") scale = 1;
            else scale = 0;
        }
        this.$bound.attr(eds.lookScale, "" + scale);
    }
}


/**
 * Collapsible element handler
 */
class EstreCollapsible extends EstreHandle {
    // constants


    // class property

    // instance property
    $toggle = null;
    parent = null;
    $parent = null;
    parentData = null;


    // getter and setter
    #$wind = $(window);
    get $wind() { return this.#$wind };
    get isOnSwipe() { return this.$wind.attr(eds.onSwipe) == t1; };


    constructor(collapsible, host) {
        super(collapsible, host);
        this.$toggle = this.$bound.find(this.getToggleSpecifier());
        const parent = collapsible.parentElement;
        if (parent != null && parent.dataset.contentCollapsed != null) {
            this.parent = parent;
            this.$parent = $(parent);
            this.parentData = parent.dataset;
        }
    }

    release() {
        super.release();
    }

    init() {
        super.init();
        
        this.setEventToggleBtn();

        return this;
    }

    //getter and setter
    getToggleSpecifier() {
        return c.c + uis.toggleBtn;// "> button.toggle"
    }

    //event handler
    setEventToggleBtn($btn) {
        const inst = this;

        this.$toggle.off("click");

        this.$toggle.click(function(e) {
            if (!inst.isOnSwipe) {
                e.preventDefault();

                inst.toggleCollapser();

                return false;
            }
        });

        var $base = this.$bound;
        if (this.parent != null) $base = this.$parent;

        $base.off("click");

        $base.click(function(e) {
            if (!inst.isOnSwipe) {
                e.preventDefault();

                inst.toggleCollapser();

                return false;
            }
        });
        
    }
    
    //handles
    toggleCollapser() {
        const collapsed = this.data.collapsed;
        const nonBasics = this.$bound.find(c.c + uis.notBasicAndToggle);
        var isShowing = false;
        for (var i=0; i<nonBasics.length; i++) {
            const display = $(nonBasics[i]).css("opacity");//$(nonBasics[i]).css("display");
            if (display !== t0) {//"none"
                isShowing = true;
                break;
            }
        }
        this.setCollapsed(isShowing ? (collapsed == t1 ? "" : t1) : t0);
    }

    setCollapsed(collapsed) {
        this.$bound.attr(eds.collapsed, collapsed);
        if (this.parent != null) this.$parent.attr(eds.contentCollapsed, collapsed);
    }
}


/**
 * Toggle block element handler
 */
class EstreToggleBlock extends EstreHandle {
    // constants

    // class property

    // instance property
    $toggle = null;
    parent = null;
    $parent = null;
    parentData = null;


    // getter and setter
    #$wind = $(window);
    get $wind() { return this.#$wind; };
    get isOnSwipe() { return this.$wind.attr(eds.onSwipe) == t1; };


    constructor(toggleBlock, host) {
        super(toggleBlock, host);
        this.$toggle = this.$bound.find(this.getToggleSpecifier());
        const parent = toggleBlock.parentElement;
        if (parent != null && parent.dataset.contentCollapsed != null) {
            this.parent = parent;
            this.$parent = $(parent);
            this.parentData = parent.dataset;
            if (this.$toggle == null) this.$toggle = this.$parent.find(this.getToggleSpecifier());
        }
    }

    release(remove) {
        this.$toggle = null;
        this.parent = null;
        this.$parent = null;
        this.parentData = null;

        super.release(remove);
    }

    init() {
        super.init();
        
        this.setEventToggleBtn();

        return this;
    }

    //getter and setter
    getToggleSpecifier() {
        return c.c + uis.toggleBtn + cor + c.c + uis.basic + c.c + uis.toggleBtn;// " > button.toggle, > .basic > button.toggle"
    }

    isCollapsed() {
        return this.data.collapsed == t1;
    }

    //event handler
    setEventToggleBtn($btn) {
        const inst = this;

        this.$toggle.off("click");

        this.$toggle.click(function(e) {
            if (!inst.isOnSwipe) {
                e.preventDefault();

                inst.toggleCollapser();

                return false;
            }
        });

        var $base = this.$bound;
        if (this.parent != null) $base = this.$parent;

        $base.off("click");

        $base.click(function(e) {
            if (!inst.isOnSwipe) {
                e.preventDefault();

                inst.toggleCollapser();

                return false;
            }
        });

    }
    
    //handles
    toggleCollapser() {
        const collapsed = this.data.collapsed;
        this.setCollapsed(collapsed == t1 ? t0 : t1);
    }

    setCollapsed(collapsed) {
        this.$bound.attr(eds.collapsed, collapsed);
        if (this.parent != null) this.$parent.attr(eds.contentCollapsed, collapsed);
    }
}


/**
 * Toggle tab block element handler
 */
class EstreToggleTabBlock extends EstreToggleBlock {
    // constants


    // class property

    // instance property
    $ttb = null;
    $tabSet = null;
    $tabs = null;

    $ssb = null;
    $subjects = null;

    $tcb = null;
    $contents = null;


    swipeHandler = null;

    
    //getter and setter
    get $tabs() {
        return this.$tabSet.find(c.c + li + ax(eds.tabId));
    }

    get selected() {
        return parseInt(this.$tabSet.find(c.c + li + ax(eds.tabId) + aiv(eds.tabSelected, t1)).attr(eds.tabId));
    }


    constructor(toggleTabBlock, host) {
        super(toggleTabBlock, host);
    }

    release(remove) {
        this.releaseSwipeHandler();

        this.$ttb = null;
        this.$tabSet = null;
        this.$tabs = null;

        this.$ssb = null;
        this.$subjects = null;

        this.$tcb = null;
        this.$contents = null;

        super.release(remove);
    }

    init() {
        super.init();
        this.initTab();

        return this;
    }

    initTab() {
        this.$ttb = this.$bound.find(c.c + uis.titledTabBlock);
        this.$tabSet = this.$ttb.find(c.c + uis.tabSet);
        this.$tabs = this.$tabSet.find(c.c + li);

        this.$ssb = this.$bound.find(c.c + uis.slidingSubjectBlock);
        this.$subjects = this.$ssb.find(c.c + div);

        this.$tcb = this.$bound.find(c.c + uis.tabContentBlocks);
        this.$contents = this.$tcb.find(c.c + div);

        this.initTabSelection();
        this.setEventTabItems();
        this.setSwipeHandler();
    }

    initTabSelection() {
        var selected = this.$bound.attr(eds.beginTab);

        if (selected == null || selected == "") {
            const list = this.$tabs.toArray();
            var s = 0;
            while (list.length > 1) {
                if (s % 2 == 0) list.splice(-1);
                else list.shift();
                s++;
            }
            selected = $(list[0]).attr(eds.tabId);
        }

        this.selectTab(selected, true);
    }

    //getter and setter
    getToggleSpecifier() {
        return c.c + uis.titledTabBlock + c.c + uis.toggleBtn;// "> .titled_tab_block > button.toggle"
    }

    //event handler
    setEventTabItems() {
        const inst = this;

        this.$tabs.off("click");

        this.$tabs.click(function(e) {
            e.preventDefault();

            inst.selectTab($(this).attr(eds.tabId));

            return false;
        });
    }

    releaseSwipeHandler() {
        if (this.swipeHandler != null) this.swipeHandler.release();
    }

    setSwipeHandler() {
        this.releaseSwipeHandler();
        const inst = this;
        const applyToSSB = this.$ssb.length > 0;
        const $feedbackTarget = applyToSSB ? this.$subjects : this.$contents;
        this.swipeHandler = new EstreSwipeHandler(this.$tcb).unuseY().setResponseBound(applyToSSB ? this.$ssb : this.$tcb).setOnUp(function(grabX, grabY, handled, canceled, directed) {
            // console.log("handled: " + handled + " / canceled: " + canceled + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            if (handled) {
                const isNext = grabX < 0;
                setTimeout(() => {
                    if (isNext) inst.selectNextTab();
                    else inst.selectPrevTab();
                }, 0);
                return { delay: cvt.t2ms($feedbackTarget.filter(naiv(eds.slide, t1)).css(a.trdr)), callback: () => setTimeout(() => $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null), 0) };
            } else $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null);
        }).setOnMove(function(grabX, grabY, handled, dropped, directed) {
            // console.log("handled: " + handled + " / dropped: " + dropped + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            const isNext = grabX < 0;
            if (grabX !== 0) {
                const targetId = isNext ? inst.getNextTabId() : inst.getPrevTabId();
                if (targetId != inst.selected) {
                    $feedbackTarget.filter(ax(eds.slide) + naiv(eds.tabId, targetId)).attr(eds.slide, null);
                    $feedbackTarget.filter(aiv(eds.tabId, targetId)).attr(eds.slide, t1);
                } else $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null);
            } else $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null);
        });

    }


    //commons
    getTabs($tabs = this.$tabs) {
        const tabs = [];
        for (var tab of $tabs) tabs[parseInt($(tab).attr(eds.tabId))] = tab;
        return tabs;
    }


    //handles
    selectTab(id, isInit) {
        const intId = parseInt(id);
        if (id != null && id != "" && !isNaN(id) && intId > 0 && intId <= this.$tabs.length) {
            this.applyTabSelected(id);
            this.applySubjectSelected(id);
            this.applyContentSelected(id);

            if (!isInit && this.isCollapsed) this.setCollapsed(t0);
        }
    }

    getPrevTabId() {
        const tabs = this.getTabs();
        const selected = this.selected;
        
        const target = selected - 1;
        //console.log("selectPrevTab - current: " + selected + ", target: " + target);
        return target > -1 ? target : 0;
    }

    selectPrevTab() {
        const target = this.getPrevTabId();
        if (target != this.selected) this.selectTab(target);
    }

    getNextTabId() {
        const tabs = this.getTabs();
        const selected = this.selected;
        
        const target = selected + 1;
        //console.log("selectNextTab - current: " + selected + ", target: " + target);
        return target < tabs.length ? target : tabs.length - 1;
    }

    selectNextTab() {
        const target = this.getNextTabId();
        if (target != this.selected) this.selectTab(target);
    }

    applyTabSelected(id) {
        this.$tabs.filter(opa + eds.tabId + equ + v4(id) + cla).attr(eds.tabSelected, t1);
        this.$tabs.filter(nto + opa + eds.tabId + equ + v4(id) + cla + clo).attr(eds.tabSelected, "");
    }

    applySubjectSelected(id) {
        this.$subjects.filter(opa + eds.tabId + equ + v4(id) + cla).attr(eds.tabSelected, t1);
        this.$subjects.filter(nto + opa + eds.tabId + equ + v4(id) + cla + clo).attr(eds.tabSelected, "");
    }

    applyContentSelected(id) {
        this.$contents.filter(opa + eds.tabId + equ + v4(id) + cla).attr(eds.tabSelected, t1);
        this.$contents.filter(nto + opa + eds.tabId + equ + v4(id) + cla + clo).attr(eds.tabSelected, "");
    }
    
}



/**
 * Tab block element handler
 */
class EstreTabBlock extends EstreHandle {
    // constants


    // class property

    // instance property
    $ttb = null;
    $tabSet = null;
    $tabs = null;

    $ssb = null;
    $subjects = null;

    $tcb = null;
    $contents = null;


    swipeHandler = null;

    
    //getter and setter
    get $tabs() {
        return this.$tabSet.find(c.c + li + ax(eds.tabId));
    }

    get selected() {
        return parseInt(this.$tabSet.find(c.c + li + ax(eds.tabId) + aiv(eds.tabSelected, t1)).attr(eds.tabId));
    }


    constructor(tabBlock, host) {
        super(tabBlock, host);

        this.$ttb = this.$bound.find(c.c + uis.titledTabBlock);
        this.$tabSet = this.$ttb.find(c.c + uis.tabSet);
        this.$tabs = this.$tabSet.find(c.c + li);

        this.$ssb = this.$bound.find(c.c + uis.slidingSubjectBlock);
        this.$subjects = this.$ssb.find(c.c + div);

        this.$tcb = this.$bound.find(c.c + uis.tabContentBlocks);
        this.$contents = this.$tcb.find(c.c + div);
    }

    release(remove) {
        this.releaseSwipeHandler();

        this.$ttb = null;
        this.$tabSet = null;
        this.$tabs = null;

        this.$ssb = null;
        this.$subjects = null;

        this.$tcb = null;
        this.$contents = null;

        super.release(remove);
    }

    init() {
        super.init();

        this.initTabSelection();
        this.setEventTabItems();
        this.setSwipeHandler();

        return this;
    }

    initTabSelection() {
        var selected = this.$bound.attr(eds.beginTab);

        if (selected == null || selected == "") {
            const list = this.$tabs.toArray();
            var s = 0;
            while (list.length > 1) {
                if (s % 2 == 0) list.splice(-1);
                else list.shift();
                s++;
            }
            selected = $(list[0]).attr(eds.tabId);
        }

        this.selectTab(selected, true);
    }

    //event handler
    setEventTabItems() {
        const inst = this;

        this.$tabs.off("click");

        this.$tabs.click(function(e) {
            e.preventDefault();

            inst.selectTab($(this).attr(eds.tabId));

            return false;
        });
    }

    releaseSwipeHandler() {
        if (this.swipeHandler != null) this.swipeHandler.release();
    }

    setSwipeHandler() {
        this.releaseSwipeHandler();
        const inst = this;
        const applyToSSB = this.$ssb.length > 0;
        const $feedbackTarget = applyToSSB ? this.$subjects : this.$contents;
        this.swipeHandler = new EstreSwipeHandler(this.$tcb).unuseY().setResponseBound(applyToSSB ? this.$ssb : this.$tcb).setOnUp(function(grabX, grabY, handled, canceled, directed) {
            // console.log("handled: " + handled + " / canceled: " + canceled + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            if (handled) {
                const isNext = grabX < 0;
                setTimeout(() => {
                    if (isNext) inst.selectNextTab();
                    else inst.selectPrevTab();
                }, 0);
                return { delay: cvt.t2ms($feedbackTarget.filter(naiv(eds.slide, t1)).css(a.trdr)), callback: () => setTimeout(() => $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null), 0) };
            } else $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null);
        }).setOnMove(function(grabX, grabY, handled, dropped, directed) {
            // console.log("handled: " + handled + " / dropped: " + dropped + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            const isNext = grabX < 0;
            if (grabX !== 0) {
                const targetId = isNext ? inst.getNextTabId() : inst.getPrevTabId();
                if (targetId != inst.selected) {
                    $feedbackTarget.filter(ax(eds.slide) + naiv(eds.tabId, targetId)).attr(eds.slide, null);
                    $feedbackTarget.filter(aiv(eds.tabId, targetId)).attr(eds.slide, t1);
                } else $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null);
            } else $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null);
        });

    }


    //commons
    getTabs($tabs = this.$tabs) {
        const tabs = [];
        for (var tab of $tabs) tabs[parseInt($(tab).attr(eds.tabId))] = tab;
        return tabs;
    }


    //handles
    selectTab(id, isInit = false) {
        const intId = parseInt(id);
        if (id != null && id != "" && !isNaN(id) && intId > 0 && intId <= this.$tabs.length) {
            this.applyTabSelected(id);
            this.applySubjectSelected(id);
            this.applyContentSelected(id);
            this.notifyTabSelected(id, isInit);
        }
    }

    getPrevTabId() {
        const tabs = this.getTabs();
        const selected = this.selected;
        
        const target = selected - 1;
        //console.log("selectPrevTab - current: " + selected + ", target: " + target);
        return target > -1 ? target : 0;
    }

    selectPrevTab() {
        const target = this.getPrevTabId();
        if (target != this.selected) this.selectTab(target);
    }

    getNextTabId() {
        const tabs = this.getTabs();
        const selected = this.selected;
        
        const target = selected + 1;
        //console.log("selectNextTab - current: " + selected + ", target: " + target);
        return target < tabs.length ? target : tabs.length - 1;
    }

    selectNextTab() {
        const target = this.getNextTabId();
        if (target != this.selected) this.selectTab(target);
    }

    applyTabSelected(id) {
        this.$tabs.filter(opa + eds.tabId + equ + v4(id) + cla).attr(eds.tabSelected, t1);
        this.$tabs.filter(nto + opa + eds.tabId + equ + v4(id) + cla + clo).attr(eds.tabSelected, "");
    }

    applySubjectSelected(id) {
        this.$subjects.filter(opa + eds.tabId + equ + v4(id) + cla).attr(eds.tabSelected, t1);
        this.$subjects.filter(nto + opa + eds.tabId + equ + v4(id) + cla + clo).attr(eds.tabSelected, "");
    }

    applyContentSelected(id) {
        this.$contents.filter(opa + eds.tabId + equ + v4(id) + cla).attr(eds.tabSelected, t1);
        this.$contents.filter(nto + opa + eds.tabId + equ + v4(id) + cla + clo).attr(eds.tabSelected, "");
    }

    notifyTabSelected(id, isInit) {
        //do nothing (for derived class)
    }
    
}


/**
 * Scoped Tab block element handler
 * 
 * is only construct by scope handler
 */
class EstreScopedTabBlock extends EstreTabBlock {
    // constants


    // class property

    // instance property
    handler = null;

    boundSwipeHandler = null;

    $contentScope = {};

    $pageHandles = null;
    $toPrevPage = null;
    $toNextPage = null;

    constructor(scopedTabBlock, scopeHandler) {
        super(scopedTabBlock);

        this.handler = scopeHandler;

    }

    release(remove) {
        this.handler = null;

        this.$contentScope = null;

        this.$pageHandles = null;
        this.$toPrevPage = null;
        this.$toNextPage = null;
        super.release(remove);
    }

    init() {
        super.init();

        this.initScope();
        this.initPager();

        return this;
    }

    initScope() {
        for (var scope of this.$contents) {
            const $scope = $(scope);
            this.$contentScope[$scope.attr(eds.scope)] = $scope;
        }

        this.initScopes();
    }

    initScopes() {
        for (var scope in this.$contentScope) {
            const $content = this.$contentScope[scope];
            const $title = this.$subjects.filter(aiv(eds.scope, scope));
            const titleSpan = $title.find(sp);
            $content.find(c.c + uis.boundHost).attr(eds.bound, "");
            this.handler.registerScope($content, scope, titleSpan[0]);
        }

        this.handler.requestInitScopes();
    }

    initPager() {
        this.$pageHandles = this.$ssb.find(uis.pageHandle);
        this.$toPrevPage = this.$pageHandles.filter(aiv(eds.direction, "prev"));
        this.$toNextPage = this.$pageHandles.filter(aiv(eds.direction, "next"));


        this.setPagerEvent();
    }    

    setPagerEvent() {
        const inst = this;

        this.$toPrevPage.click(function (e) {
            e.preventDefault();

            inst.showPagePrev();

            return false;
        });
        this.$toNextPage.click(function (e) {
            e.preventDefault();

            inst.showPageNext();

            return false;
        });
    }

    releaseSwipeHandler() {
        if (this.swipeHandler != null) this.swipeHandler.release();
        if (this.boundSwipeHandler != null) this.boundSwipeHandler.release();
    }

    setSwipeHandler() {
        this.releaseSwipeHandler();
        const inst = this;
        const $feedbackTarget = this.$subjects;
        this.swipeHandler = new EstreSwipeHandler(this.$ssb).unuseY().setResponseBound(this.$ssb).setOnUp(function(grabX, grabY, handled, canceled, directed) {
            // console.log("handled: " + handled + " / canceled: " + canceled + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            if (handled) {
                const isNext = grabX < 0;
                setTimeout(() => {
                    if (isNext) inst.selectNextTab();
                    else inst.selectPrevTab();
                }, 0);
                return { delay: cvt.t2ms($feedbackTarget.filter(naiv(eds.slide, t1)).css(a.trdr)), callback: () => setTimeout(() => $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null), 0) };
            } else $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null);
        }).setOnMove(function(grabX, grabY, handled, dropped, directed) {
            // console.log("handled: " + handled + " / dropped: " + dropped + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            const isNext = grabX < 0;
            if (grabX !== 0) {
                const targetId = isNext ? inst.getNextTabId() : inst.getPrevTabId();
                if (targetId != inst.selected) {
                    $feedbackTarget.filter(ax(eds.slide) + naiv(eds.tabId, targetId)).attr(eds.slide, null);
                    $feedbackTarget.filter(aiv(eds.tabId, targetId)).attr(eds.slide, t1);
                } else $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null);
            } else $feedbackTarget.filter(ax(eds.slide)).attr(eds.slide, null);
        });

        this.boundSwipeHandler = new EstreSwipeHandler(this.$tcb).unuseY().setResponseBound(this.$tcb).setOnUp(function(grabX, grabY, handled, canceled, directed) {
            // console.log("handled: " + handled + " / canceled: " + canceled + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            const $boundHosts = inst.getCurrentContentScope().find(c.c + uis.boundHost);
            if (handled) {
                const isNext = grabX < 0;
                setTimeout(() => {
                    if (isNext) inst.showPageNext();
                    else inst.showPagePrev();
                }, 0);
                return { delay: cvt.t2ms($boundHosts.filter(naiv(eds.slide, t1)).css(a.trdr)), callback: () => setTimeout(() => $boundHosts.filter(ax(eds.slide)).attr(eds.slide, null), 0) };
            } else $boundHosts.filter(ax(eds.slide)).attr(eds.slide, null);
        }).setOnMove(function(grabX, grabY, handled, dropped, directed) {
            // console.log("handled: " + handled + " / dropped: " + dropped + " / directed: " + directed + " / grab: " + grabX + ", " + grabY + " / lastX: " + this.lastX + ", " + this.lastY + " / startX: " + this.startX + ", " + this.startY);
            const $boundHosts = inst.getCurrentContentScope().find(c.c + uis.boundHost);
            const isNext = grabX < 0;
            if (grabX !== 0) {
                const targetIndex = isNext ? $boundHosts.length - 1 : 0;
                for (var i=0; i<$boundHosts.length; i++) {
                    const $boundHost = $($boundHosts[i]);
                    if ($boundHost.is(ax(eds.slide)) && i != targetIndex) $boundHost.attr(eds.slide, null);
                }
                $($boundHosts[targetIndex]).attr(eds.slide, t1);
            } else $boundHosts.filter(ax(eds.slide)).attr(eds.slide, null);
        });

    }


    getCurrentScope($content = this.getCurrentContentScope()) {
        return $content.attr(eds.scope);
    }

    getCurrentContentScope() {
        return this.$contents.filter(aiv(eds.tabSelected, t1));
    }

    selectScope(scope) {
        const $content = this.$contentScope[scope];
        if ($content != null) {
            const tabId = $content.attr(eds.tabId);
            this.selectTab(tabId, null);
        }
    }


    showPagePrev(byHandler = false, scope = this.getCurrentScope()) {
        this.shiftPage(scope, -1, byHandler);
    }

    showPageNext(byHandler = false, scope = this.getCurrentScope()) {
        this.shiftPage(scope, 1, byHandler);
    }

    shiftPage(scope, offset, byHandler = false) {
        const isBackward = offset < 0;
        const $content = this.$contentScope[scope];
        const preload = $content.attr(eds.preload) == t1;
        const pages = $content.find(c.c + c.w);

        pages.filter(aiv(eds.pageSelected, t1)).attr(eds.pageSelected, "");

        const $selected = $(pages[isBackward ? 0 : pages.length - 1]);
        const selectedBound = $selected.attr(eds.bound);
        $selected.attr(eds.pageSelected, t1);
        if (!preload) this.handler.requestPushDataForPage($selected, scope, selectedBound, 0);

        const $forRecycle = $(pages[isBackward ? pages.length - 1 : 0]);
        this.handler.boundHasGone($forRecycle.attr(eds.bound), scope);
        $forRecycle.remove();
        $forRecycle.attr(eds.bound, "");
        if (isBackward) $content.prepend($forRecycle);
        else $content.append($forRecycle);
        if (preload) this.handler.requestPushDataForPage($forRecycle, scope, selectedBound, offset, true);

        if (!byHandler) this.handler.notifyBoundChanged(selectedBound, scope);
    }

    notifyTabSelected(id, isInit = false) {
        super.notifyTabSelected(id, isInit);

        const $content = this.$contents.filter(opa + eds.tabId + equ + v4(id) + cla);
        const scope = $content.attr(eds.scope);
        this.handler.notifyScopeChanged(scope);
    }
}


/**
 * Estre number keypad handler
 */
class EstreNumKeypad extends EstreHandle {

    // constants
    get onTrigger() { return new CustomEvent("trigger"); }

    // statics


    // open property

    
    // enclosed property
    #$input = null;
    #input = null;
    #$keys = null;
    #keys = [];
    #key = {};

    lengthLimit = null;
    autoDivider = null;
    autoDividerPos = null;


    // getter and setter



    constructor(numKeypad, host) {
        super(numKeypad, host);
    }

    release() {
        super.release();
    }

    init() {
        super.init();

        const inputId = this.$bound.attr(eds.for);
        if (inputId == null || inputId == "") return null;

        this.#input = doc.ebi(inputId);
        this.#$input = $(this.#input);

        const lengthLimit = this.$bound.attr("data-limit-length");
        if (lengthLimit != null && lengthLimit != "" && !isNaN(lengthLimit)) {
            this.lengthLimit = parseInt(lengthLimit);
        }

        const autoDivider = this.$bound.attr("data-auto-divider");
        if (autoDivider != null && autoDivider != "") {
            this.autoDivider = autoDivider;
        }
        const autoDividerPos = this.$bound.attr("data-auto-divider-pos");
        if (autoDividerPos != null && autoDividerPos != "") {
            const poses = autoDividerPos.split(",");
            const posesInt = [];
            for (var pos of poses) if (!isNaN(pos)) posesInt.push(parseInt(pos));
            this.autoDividerPos = posesInt;
        }


        this.#$keys = this.$bound.find("button");
        for (var key of this.#$keys) {
            this.#keys.push(key);
            const type = key.dataset.type;
            switch (type) {
                case "number":
                    this.#key[key.dataset.number] = key;
                    break;

                case "action":
                    this.#key[key.dataset.action] = key;
                    break;
                    
            }
        }

        this.setEvent();

        return this;
    }

    setEvent() {
        const inst = this;

        if (this.$bound.attr("data-prevent-direct") == t1) this.#$input.focus(function(e) {
            e.preventDefault();
            this.blur();
            return false; 
        });
        this.#$input.on("input paste cut propertychange change", function(e) {
            const value = this.value;
            const length = value.length;

            if (inst.lengthLimit != null) {
                if (length > inst.lengthLimit) {
                    this.value = value.substr(0, inst.lengthLimit);
                    return false;
                }
            }

            if (inst.autoDivider != null && inst.autoDividerPos != null && inst.autoDividerPos.length > 0) {
                for (var pos of inst.autoDividerPos) if (pos == length) {
                    try {
                        this.value += inst.autoDivider;
                    } catch (ex) {
                        console.log(ex.name + "\n" + ex.message);
                    }
                }
            }

        });
        
        this.#$keys.click(function(e) {
            const input = inst.#input;
            var changed = false;
            switch (this.dataset.type) {
                case "number":
                    input.value += this.dataset.number;
                    changed = true;
                    break;

                case "action":
                    switch (this.dataset.action) {
                        case "CLR":
                            input.value = "";
                            changed = true;
                            break;

                        case "BS":
                            const val = input.value;
                            let back = 1;
                            if (inst.autoDivider != null) {
                                const dividerLength = inst.autoDivider.length;
                                if (val.substr(dividerLength * -1) == inst.autoDivider) back += dividerLength;
                            }
                            input.value = val.substring(0, val.length - back);
                            changed = true;
                            break;

                        case "ENTER":
                            input.trigger({ type: "keypress", which: 13, keyCode: 13 });
                            break;
                    }
                    break;
            }
            if (changed) input.dispatchEvent(new Event("change"));
        });
    }

}



/**
 * Estre checkbox set handler
 */
class EstreCheckboxSet extends EstreHandle {

    // constants


    // statics


    // open property
    name = null;
    selection = null;
    
    // enclosed property


    // getter and setter
    $checkboxes = null;


    constructor(checkboxSet, host) {
        super(checkboxSet, host);
    }

    release(remove) {
        super.release(remove);
    }

    init() {
        super.init();

        this.name = this.$bound.attr(eds.name);
        const selection = this.$bound.attr(eds.checkboxSelection);
        if (selection == null || isNaN(selection)) this.selection = 0;
        else this.selection = parseInt(selection);

        this.$checkboxes = this.$bound.find(inp + aiv("type", "checkbox") + aiv("name", this.name));

        this.setEvent();
    }

    setEvent() {
        const inst = this;
        
        this.$checkboxes.change(function (e) {
            if (inst.selection === 1) {
                for (const checkbox of inst.$checkboxes) if (checkbox != this) checkbox.checked = false;
            } else if (inst.selection > 1) {
                if (inst.$checkboxes.filter(":checked").length >= inst.selection) inst.$checkboxes.filter(":not(:checked)").prop("disabled", true);
                else inst.$checkboxes.filter(":disabled").prop("disabled", false);
            }
        });
    }
}

/**
 * Estre checkbox ally handler
 */
class EstreCheckboxAlly extends EstreHandle {

    // constants


    // statics


    // open property
    ally = null;
    name = null;
    
    // enclosed property


    // getter and setter
    $checkboxAlly = null;
    $checkboxes = null;


    constructor(checkboxAlly, host) {
        super(checkboxAlly, host);
    }

    release(remove) {
        super.release(remove);
    }

    init() {
        super.init();

        this.ally = this.$bound.attr(eds.ally);
        this.name = this.$bound.attr(eds.name);

        this.$checkboxAlly = this.$bound.find(inp + aiv("type", "checkbox") + aiv("name", this.ally));
        this.$checkboxes = this.$bound.find(inp + aiv("type", "checkbox") + aiv("name", this.name));

        this.setEvent();
    }

    setEvent() {
        const inst = this;

        this.$checkboxAlly.change(function (e) {
            inst.$checkboxes.prop("checked", this.checked).change();
        });
        
        this.$checkboxes.change(function (e) {
            const isAlly = inst.$checkboxes.filter(":checked").length == inst.$checkboxes.length;
            inst.$checkboxAlly.prop("checked", isAlly);
        });
    }
}


// showers

class EstreDateShower extends EstreHandle {

    // constants


    // statics


    // open property

    
    // enclosed property
    #date = null;


    // getter and setter



    constructor(dateShower, host) {
        super(dateShower, host);
    }

    release() {
        super.release();
    }

    init() {
        super.init();

        const from = this.$bound.attr(eds.dateFrom);

        switch (from) {
            case "today":
                this.#date = new Date();
                break;
        }

        this.releaseDate();

        this.setEvent();

        return this;
    }

    setEvent() {
        const inst = this;

        this.$bound.find(uis.dateReplacer).click(function(e) {
            inst.releaseDate();
        });
    }

    releaseDate() {
        if (this.#date != null) {
            const ds = Ecal.getDateSet(this.#date);
            const $bound = this.$bound;

            const m2d = v2d(ds.month);
            const d2d = v2d(ds.date);
            
            $bound.attr(eds.dateY, ds.year);
            $bound.attr(eds.dateM, m2d);
            $bound.attr(eds.dateD, d2d);
            $bound.attr(eds.dateId, Ecal.getDateOffset(this.#date));

            $bound.find(uis.fullYear).each((i, el) => {
                el.innerText = ds.year;
                if ($(el).attr(eds.withSuffix) == t1) el.innerText += "년";
            });
            $bound.find(uis.year2d).each((i, el) => {
                el.innerText = ds.year % 100;
                if ($(el).attr(eds.withSuffix) == t1) el.innerText += "년";
            });

            $bound.find(uis.month).each((i, el) => {
                el.innerText = ds.month;
                if ($(el).attr(eds.withSuffix) == t1) el.innerText += "월";
            });
            $bound.find(uis.paddedMonth).each((i, el) => {
                el.innerText = m2d;
                if ($(el).attr(eds.withSuffix) == t1) el.innerText += "월";
            });

            $bound.find(uis.date).each((i, el) => {
                el.innerText = ds.date;
                if ($(el).attr(eds.withSuffix) == t1) el.innerText += "일";
            });
            $bound.find(uis.paddedDate).each((i, el) => {
                el.innerText = d2d;
                if ($(el).attr(eds.withSuffix) == t1) el.innerText += "일";
            });

            $bound.find(uis.day).each((i, el) => {
                el.innerText = ds.dayText;
                if ($(el).attr(eds.withSuffix) == t1) el.innerText += "요일";
            });
        }
    }
}



// handlers

/**
 * Attachable swipe handler
 */
class EstreSwipeHandler {

    // constants
    static mouseTrigger = "mousedown";
    static pointerTrigger = "pointerdown";
    static touchTrigger = "touchstart";

    static mouseUpTriggerSet = ["mouseup"];
    static pointerUpTriggerSet = ["pointercancel", "pointerup"];
    static touchUpTriggerSet = ["touchcancel", "touchend"];

    static mouseHandleSet = ["mouseup", "mousemove"];
    static pointerHandleSet = ["pointercancel", "pointerup", "pointermove"];
    static touchHandleSet = ["touchcancel", "touchend", "touchmove"];

    defaultThreshold = 80;//80px //20;//20px

    // statics
    static handlers = [];
    static register(instance) { return this.handlers.push(instance) - 1; }

    // open property
    stopPropagation = false;
    preventDefault = false;

    preventDown = false;
    preventCancel = false;
    preventUp = false;
    preventMove = false;

    thresholdX = -1;
    thresholdY = -1;

    dropStrayed = false;

    onDown = null;
    onMove = null;
    onCancel = null;
    onUp = null;

    isDebug = false;
    debugDisplay = null;

    cancelDelay = 200;


    // enclosed property
    #handleIndex = null;
    #handleId = null;

    #bound = null;
    #$bound = null;
    #data = null;
    #$responseBound = null;
    #$outerBound = null;

    #triggerEventAllowed = new Set();
    #triggerUpEventAllowed = new Set();
    #handleEventAllowed = new Set();

    #isMoving = false;
    #eventOrigin = null;
    #directed = null;

    #startX = null;
    #startY = null;

    #shiftX = null;
    #shiftY = null;

    #lastX = null;
    #lastY = null;

    #grabX = null;
    #grabY = null;

    #pointerType = null;
    #eventType = null;

    #grabMarker = null;
    

    // getter and setter
    #$wind = $(window);
    get $wind() { return this.#$wind }

    get allowedDirection() { return this.allowedDirectionX ? (this.allowedDirectionY ? "both": "horizontal") : (this.allowedDirectionY ? "vertical" : "neither"); }
    get allowedDirectionX() { return this.thresholdX > -1; }
    get allowedDirectionY() { return this.thresholdY > -1; }
    get directionFix() { return this.directionFixX ? (this.directionFixY ? "both" : "horizontal") : (this.directionFixY ? "vertical" : "neither"); }
    get directionFixX() { return this.thresholdX > 0; }
    get directionFixY() { return this.thresholdY > 0; }
    get directtion() { return this.grabX > this.grabY ? this.directionX : this.directionY; }
    get directionX() { return this.grabX < 0 ? "left" : (this.grabX > 0 ? "right" : null); }
    get directionY() { return this.grabY < 0 ? "up" : (this.grabY > 0 ? "down" : null); }
    get handledDirection() { 
        if (this.isMoving) switch (this.directionFix) {
            case "both":
                if (this.directed != null) {
                    const moveX = this.moveX;
                    const moveY = this.moveY;
                    if (moveX > moveY) {
                        if (this.exceedX && moveX - moveY > this.thresholdX) return this.directionX;
                    } else if (moveX < moveY) {
                        if (this.exceedY && moveY - moveX > this.thresholdY) return this.directionY;
                    }
                }

            case "horizontal":
                if (this.directed == "horizontal" && this.exceedX) return this.directionX;

            case "vertical":
                if (this.directed == "vertical" && this.exceedY) return this.directionY;

            case "neither":
                if (this.allowedDirectionX && this.grabX != null) return this.directionX;
                if (this.allowedDirectionY && this.grabY != null) return this.directionY;
        }
        return null;
    }
    get handled() {
        if (!this.isMoving) return false;
        else {
            switch (this.directionFix) {
                case "both":
                    return this.directed != null && (this.exceedX || this.exceedY);

                case "horizontal":
                    return this.directed == "horizontal" && this.exceedX;

                case "vertical":
                    return this.directed == "vertical" && this.exceedY;

                case "neither":
                    return (this.allowedDirectionX && this.grabX != null) || (this.allowedDirectionY && this.grabY != null);
            }
        }
    }
    get moveX() { return Math.abs(this.lastX - this.startX); }
    get moveY() { return Math.abs(this.lastY - this.startY); }
    get exceedX() { return this.directionFixX && this.moveX > this.thresholdX; }
    get exceedY() { return this.directionFixY && this.moveY > this.thresholdY; }
    get strayedX() { return this.directionFixX && this.moveY > this.thresholdX * 2; }
    get strayedY() { return this.directionFixY && this.moveX > this.thresholdY * 2; }

    get #triggers() { return Array.from(this.#triggerEventAllowed).join(" "); }
    get #upTriggers() { return Array.from(this.#triggerUpEventAllowed).join(" "); }
    get #upDownTriggers() { return [...Array.from(this.#triggerEventAllowed), ...Array.from(this.#triggerUpEventAllowed)].join(" "); }
    get #handles() { return Array.from(this.#handleEventAllowed).join(" "); }
    get #events() { return [...Array.from(this.#triggerEventAllowed), ...Array.from(this.#triggerUpEventAllowed), ...Array.from(this.#handleEventAllowed)].join(" "); }

    get isMoving() { return this.#isMoving; }
    get eventOrigin() { return this.#eventOrigin; }
    get directed() { return this.#directed; }
    get startX() { return this.#startX; }
    get startY() { return this.#startY; }
    get shiftX() { return this.#shiftX; }
    get shiftY() { return this.#shiftY; }
    get lastX() { return this.#lastX; }
    get lastY() { return this.#lastY; }
    get grabX() { return this.#grabX; }
    get grabY() { return this.#grabY; }
    get pointerType() { return this.#pointerType; }
    get eventType() { return this.#eventType; }


    /**
     * Set swipe handler for element
     * 
     * if need stopPropagation or preventDefault to be set each property.
     * and custom event callbacks to be set methods.
     * 
     * @param {Element} element is target element
     * @param {boolean} [onMouse=true] allow mouse handle (must be allowed one in three options)
     * @param {boolean} [onPointer=true] allow pointer handle (must be allowed one in three options)
     * @param {boolean} [onTouch=true] allow touch handle (must be allowed one in three options)
     * @param {number} [thresholdX=this.defaultThreshold] fix direction threshold px - 0 = unuse direction fix, -1 = unallowed horizontal swipe
     * @param {number} [thresholdY=this.defaultThreshold] fix direction threshold px - 0 = unuse direction fix, -1 = unallowed vertical swipe
     * @param {boolean} [debug=false] show event triggers and values when true
     */
    constructor (element, onMouse = true, onPointer = true, onTouch = true, thresholdX = this.defaultThreshold, thresholdY = this.defaultThreshold, debug = false) {
        this.#setHandleId();

        this.isDebug = debug;

        this.setEventMouse(onMouse, false);
        this.setEventPointer(onPointer, false);
        this.setEventTouch(onTouch, false);

        this.setThresholdX(thresholdX);
        this.setThresholdY(thresholdY);

        this.setDropStrayed();

        this.setElement(element);
    }

    #setHandleId() {
        this.#handleIndex = EstreSwipeHandler.register(this);
        this.#handleId = this.constructor.name + "@" + Date.now() + "#" + this.#handleIndex;
    }

    #dropHandle() {
        setTimeout(() => this.$wind.attr(eds.onSwipe, null), 0);
        //this.#$outerBound.off(this.#upTriggers, null, this.#onClick);
        this.#$bound.off(this.#handles, null, this.#onEvent);
        this.$wind.off(this.#handles, null, this.#onEvent);
        this.#isMoving = false;
        this.#directed = null;
        this.#startX = null;
        this.#startY = null;
        this.#shiftX = null;
        this.#shiftY = null;
        this.#lastX = null;
        this.#lastY = null;
        this.#grabX = null;
        this.#grabY = null;
        this.#pointerType = null;
        this.#eventType = null;
    }

    #clearBound() {
        this.#$responseBound.css("--grab-x", "0px");
        this.#$responseBound.css("--grab-y", "0px");
        this.#$responseBound.attr(eds.onGrab, "");
    }
    
    release() {
        this.#dropHandle();
        this.#clearBound();
        this.#$responseBound = null;
        //this.#$outerBound.off(this.#triggers, null, this.#onClick);
        this.#$outerBound = null;
        const $blockTarget = this.#$bound.find(uis.blockSwipe);
        $blockTarget.off(this.#events, this.#onClick);
        this.#$bound.css("user-select", "");
        this.#$bound.off("click", null, this.#onClick);
        //this.#$bound.off(this.#handles, null, this.#onHandle);
        this.#$bound = null;
        if (this.#bound.swipeHandler == this) delete this.#bound.swipeHandler;
        this.#bound = null;
        this.#data = null;
        delete EstreSwipeHandler.handlers[this.#handleIndex];
        
        return this;
    }


    setEventMouse(enable = true, byUser = true) {
        if (enable) {
            this.#triggerEventAllowed.add(EstreSwipeHandler.mouseTrigger);
            EstreSwipeHandler.mouseUpTriggerSet.forEach(item => this.#triggerUpEventAllowed.add(item));
            EstreSwipeHandler.mouseHandleSet.forEach(item => this.#handleEventAllowed.add(item));
        } else {
            this.#triggerEventAllowed.delete(EstreSwipeHandler.mouseTrigger);
            EstreSwipeHandler.mouseUpTriggerSet.forEach(item => this.#handleEventAllowed.delete(item));
            EstreSwipeHandler.mouseHandleSet.forEach(item => this.#handleEventAllowed.delete(item));
        }

        if (byUser) this.setElement();

        return this;
    }

    setEventPointer(enable = true, byUser = true) {
        if (enable) {
            this.#triggerEventAllowed.add(EstreSwipeHandler.pointerTrigger);
            EstreSwipeHandler.pointerUpTriggerSet.forEach(item => this.#triggerUpEventAllowed.add(item));
            EstreSwipeHandler.pointerHandleSet.forEach(item => this.#handleEventAllowed.add(item));
        } else {
            this.#triggerEventAllowed.delete(EstreSwipeHandler.pointerTrigger);
            EstreSwipeHandler.pointerUpTriggerSet.forEach(item => this.#triggerUpEventAllowed.delete(item));
            EstreSwipeHandler.pointerHandleSet.forEach(item => this.#handleEventAllowed.delete(item));
        }

        if (byUser) this.setElement();

        return this;
    }

    setEventTouch(enable = true, byUser = true) {
        if (enable) {
            this.#triggerEventAllowed.add(EstreSwipeHandler.touchTrigger);
            EstreSwipeHandler.touchUpTriggerSet.forEach(item => this.#triggerUpEventAllowed.add(item));
            EstreSwipeHandler.touchHandleSet.forEach(item => this.#handleEventAllowed.add(item));
        } else {
            this.#triggerEventAllowed.delete(EstreSwipeHandler.touchTrigger);
            EstreSwipeHandler.touchUpTriggerSet.forEach(item => this.#triggerUpEventAllowed.delete(item));
            EstreSwipeHandler.touchHandleSet.forEach(item => this.#handleEventAllowed.delete(item));
        }

        if (byUser) this.setElement();

        return this;
    }


    setThresholdX(threshold = this.thresholdX) {
        this.thresholdX = threshold;

        return this;
    }

    setThresholdY(threshold = this.thresholdY) {
        this.thresholdY = threshold;

        return this;
    }

    unuseDirectionFixX() {
        this.thresholdX = 0;

        return this;
    }

    unuseDriectionFixY() {
        this.thresholdY = 0;

        return this;
    }

    unuseX() {
        this.thresholdX = -1;

        return this;
    }

    unuseY() {
        this.thresholdY = -1;

        return this;
    }


    setDropStrayed(enable = true) {
        this.dropStrayed = enable;

        return this;
    }


    //custom setters
    setResponseBound(bound = this.#$bound) {
        this.#$responseBound = bound instanceof jQuery ? bound : $(bound);
        return this;
    }

    setOuterBound(bound = this.#$bound.parent()) {
        //if (this.#$outerBound != null) this.#$outerBound.off(this.#triggers, null, this.#onClick);
        this.#$outerBound = bound instanceof jQuery ? bound : $(bound);
        //bound.on(this.#triggers, null, this.#onClick);
        return this;
    }

    setStopPropagation(enable = true) {
        this.stopPropagation = enable;
        return this;
    }

    setPreventDefault(enable = true) {
        this.preventDefault = enable;
        return this;
    }

    setPreventDown(enable = true) {
        this.preventDown = enable;
        return this;
    }

    setPreventCancel(enable = true) {
        this.preventCancel = enable;
        return this;
    }

    setPreventUp(enable = true) {
        this.preventUp = enable;
        return this;
    }

    setPreventMove(enable = true) {
        this.preventMove = enable;
        return this;
    }

    setPreventAll(enable = true) {
        return this.setPreventDown(enable).setPreventUp(enable).setPreventCancel(enable).setPreventMove(enable);
    }

    setDebug(enable = true) {
        this.isDebug = enable;
        return this;
    }

    setDebugDisplay(element = null) {
        this.debugDisplay = element;
        return this;
    }

    setCancelDelay(delay = 200) {
        this.cancelDelay = delay;
        return this;
    }


    setOnDown(callback) {
        this.onDown = callback;

        return this;
    }

    setOnMove(callback) {
        this.onMove = callback;

        return this;
    }

    setOnCancel(callback) {
        this.onCancel = callback;

        return this;
    }

    setOnUp(callback) {
        this.onUp = callback;

        return this;
    }

    //---


    #onEvent = (e) => {
        const isTouch = e.type.indexOf("touch") > -1;
        const isMouse = e.type.indexOf("mouse") > -1;
        const isPointer = e.type.indexOf("pointer") > -1;
        const screenX = isTouch ? (e.touches.length > 0 ? e.touches[0].screenX : null) : e.screenX;
        const screenY = isTouch ? (e.touches.length > 0 ? e.touches[0].screenY : null) : e.screenY;
        const pointerType = isTouch ? "touch" : (isMouse ? "mouse" : (isPointer ? "pointer" : "extra"));

        var canceled = false;
        switch(e.type) {
            case "pointerdown":
                break;
            case "mousedown":
                if (isMouse && e.button !== 0) break;
            case "touchstart":
                if (this.isMoving) {
                    if (this.preventDown) {
                        if (this.preventDefault) e.preventDefault();
                        if (this.stopPropagation) e.stopPropagation();
                        if (this.preventDefault) return false;
                    }
                }
                this.#eventType = "down";
                this.#isMoving = true;
                this.#eventOrigin = e.target;
                this.#pointerType = pointerType;
                this.#lastX = screenX;
                this.#lastY = screenY;
                if (this.shiftX == null) this.#shiftX = 0;
                if (this.shiftY == null) this.#shiftY = 0;
                
                if (this.startX != null) {
                    this.#shiftX += screenX - this.startX;
                    if (this.grabX != null) this.#grabX = this.shiftX;
                } else this.#startX = screenX;
                if (this.startY != null) {
                    this.#shiftY += screenY - this.startY;
                    if (this.grabY != null) this.grabY = this.shiftY;
                } else this.#startY = screenY;

                if (this.isDebug) {
                    var log = "start: " + f4f(this.startX) + ", " + f4f(this.startY) + " / shift: " + f4f(this.shiftX) + ", " + f4f(this.shiftY) + " / last: " + f4f(this.lastX) + ", " + f4f(this.lastY) + " / grab: " + f4f(grabX) + ", " + f4f(grabY);
                    console.log(e.type + " - " + log);
                    if (this.debugDisplay != null) this.debugDisplay.prepend(e.type + " - " + log + "<br />");
                }

                this.#$responseBound.css("--grab-x", this.shiftX + "px");
                this.#$responseBound.css("--grab-y", this.shiftY + "px");
                if (this.onDown != null) this.onDown(this.startX, this.startY);
                this.$wind.on(this.#handles, null, this.#onEvent);
                this.#$bound.on(this.#handles, null, this.#onEvent);
                //this.#$outerBound.on(this.#upTriggers, null, this.#onClick);
                //$(this.eventOrigin).on("click", null, this.#onClick);
                if (this.preventDown) {
                    if (this.preventDefault) e.preventDefault();
                    if (this.stopPropagation) e.stopPropagation();
                    if (this.preventDefault) return false;
                }
                break;
				
            case "pointercancel":
            case "touchcancel":
                if (!this.isMoving) break;
                if (this.#pointerType != pointerType || this.eventType == "cancel") {
                    if (this.handled) {
                        if (this.preventCancel) {
                            if (this.preventDefault) e.preventDefault();
                            if (this.stopPropagation) e.stopPropagation();
                            if (this.preventDefault) return false;
                        }
                    }
                    break;
                }
                canceled = true;
                this.#eventType = "cancel";
                if (this.isDebug) console.log("canceled");
                if (this.onCancel != null) this.onCancel();
            case "pointerup":
            case "mouseup":
            case "touchend":
                if (!this.isMoving) break;
                if (this.eventType == "up") {
                    if (this.handled) {
                        if (this.preventUp) {
                            if (this.preventDefault) e.preventDefault();
                            if (this.stopPropagation) e.stopPropagation();
                            if (this.preventDefault) return false;
                        }
                    }
                    break;
                }
                if (!canceled) {
                    if (this.#pointerType != pointerType) {
                        if (this.handled) {
                            if (this.preventUp) {
                                if (this.preventDefault) e.preventDefault();
                                if (this.stopPropagation) e.stopPropagation();
                                if (this.preventDefault) return false;
                            }
                        }
                        break;
                    }
                    this.#eventType = "up";
                }
                if (this.isDebug) {
                    var log = "directed: " + this.directed + ", start: " + f4f(this.startX) + ", " + f4f(this.startY) + " / shift: " + f4f(this.shiftX) + ", " + f4f(this.shiftY) + " / last: " + f4f(this.lastX) + ", " + f4f(this.lastY) + " / grab: " + f4f(this.grabX) + ", " + f4f(this.grabY);
                    console.log(e.type + " - " + log);
                    if (this.debugDisplay != null) this.debugDisplay.prepend(e.type + " - " + log + "<br />");
                }
                const clear = () => {
                    const grabX = this.#lastX - this.startX + this.#shiftX;
                    const grabY = this.#lastY - this.startY + this.#shiftY;
                    if (this.isDebug) {
                        var log = "directed: " + this.directed + ", start: " + f4f(this.startX) + ", " + f4f(this.startY) + " / shift: " + f4f(this.shiftX) + ", " + f4f(this.shiftY) + " / last: " + f4f(this.lastX) + ", " + f4f(this.lastY) + " / grab: " + f4f(grabX) + ", " + f4f(grabY);
                        console.log(e.type + " delayed - " + log);
                        if (this.debugDisplay != null) this.debugDisplay.prepend(e.type + " delayed - " + log + "<br />");
                    }
                    const handled = this.handled;
                    var onClearBound = null;
                    if (this.onUp != null) onClearBound = this.onUp(grabX, grabY, handled, canceled, this.directed);
                    this.#dropHandle();
                    if (onClearBound == null) this.#clearBound();
                    else if (onClearBound.delay == null) {
                        this.#clearBound();
                        if (onClearBound.callback != null) onClearBound.callback();
                    } else setTimeout(() => {
                        this.#clearBound();
                        if (onClearBound.callback != null) onClearBound.callback();
                    }, onClearBound.delay);
                    if (this.isDebug) {
                        console.log("cleared" + (handled ? " with handled" : ""));
                        if (this.debugDisplay != null) this.debugDisplay.prepend("cleared<br/>");
                    }
                    //$(this.eventOrigin).off("click", null, this.#onClick);
                    //if (!handled && this.eventOrigin != null) this.eventOrigin.click();
                    this.#eventOrigin = null;
                    return handled;
                };
                var handled = true;
                if (canceled) setTimeout(() => { clear(); }, this.cancelDelay);
                else handled = clear();
                if (handled) {
                    if (this.preventUp) {
                        if (this.preventDefault) e.preventDefault();
                        if (this.stopPropagation) e.stopPropagation();
                        //if (!canceled && !handled && this.eventOrigin != null) this.eventOrigin.click();
                        if (this.preventDefault) return false;
                    }
                }
                break;
				
            case "pointermove":
            case "mousemove":
            case "touchmove":
                if (this.#bound != null) {
                    if (this.preventMove && this.stopPropagation) e.stopPropagation();
                    if (this.pointerType != pointerType) {
                        if (this.preventMove && this.preventDefault) {
                            e.preventDefault();
                            return false;
                        }
                        break;
                    }
                    this.#eventType = "move";
                    this.#lastX = screenX;
                    this.#lastY = screenY;
                    const allowedX = this.allowedDirectionX;
                    const allowedY = this.allowedDirectionY;
                    var grabX = 0;
                    var grabY = 0;
                    if (allowedX) grabX = screenX - this.startX + this.shiftX;
                    if (allowedY) grabY = screenY - this.startY + this.shiftY;
                    const moveX = this.moveX;
                    const moveY = this.moveY;
                    const exceedX = moveX > this.thresholdX;
                    const exceedY = moveY > this.thresholdY;
                    const strayedX = moveY > this.thresholdX * 2;
                    const strayedY = moveX > this.thresholdY * 2;
                    var handled = false;
                    var applyX = false;
                    var applyY = false;
                    var fixX = false;
                    var fixY = false;
                    var dropped = false;
                    switch (this.directionFix) {
                        case "both":
                            if (this.directed != null) {
                                handled = true;
                                switch (this.directed) {
                                    case "horizontal":
                                        applyX = true;
                                        break;

                                    case "vertical":
                                        applyY = true;
                                        break;
                                }
                            } else if (exceedX || exceedY) {
                                handled = true;
                                if (exceedX) {
                                    applyX = true;
                                    fixX = true;
                                } else if (exceedY) {
                                    applyY = true;
                                    fixY = true;
                                }
                            }
                            break;

                        case "horizontal":
                            if (this.directed == "horizontal") {
                                handled = true;
                                applyX = true;
                            } else if (this.dropStrayed && strayedX) {
                                dropped = true;
                            } else if (exceedX) {
                                handled = true;
                                applyX = true;
                                fixX = true;
                            }
                            break;

                        case "vertical":
                            if (this.directed == "vertical") {
                                handled = true;
                                applyY = true;
                            } else if (this.dropStrayed && strayedY) {
                                dropped = true;
                            } else if (exceedY) {
                                handled = true;
                                applyY = true;
                                fixY = true;
                            }
                            break;

                        case "neither":
                            if (allowedX || allowedY) {
                                handled = true;
                                if (allowedX) applyX = true;
                                if (allowedY) applyY = true;
                            } else if (!allowedX && !allowedY) {
                                dropped = true;
                            }
                            break;
                    }

                    const onSwipe = handled ? t1 : "";
                    if (this.$wind.attr(eds.onSwipe) != onSwipe) this.$wind.attr(eds.onSwipe, onSwipe);
                    if (handled) {
                        if (applyX) {
                            this.#grabX = grabX;
                            this.#$responseBound.css("--grab-x", grabX + "px");
                        }
                        if (applyY) {
                            this.#grabY = grabY;
                            this.#$responseBound.css("--grab-y", grabY + "px");
                        }
                        if (fixX) this.#directed = "horizontal";
                        if (fixY) this.#directed = "vertical";
                    }
                    if (this.isDebug) {
                        var log = "directed: " + this.directed + ", start: " + f4f(this.startX) + ", " + f4f(this.startY) + " / shift: " + f4f(this.shiftX) + ", " + f4f(this.shiftY) + " / last: " + f4f(this.lastX) + ", " + f4f(this.lastY) + " / grab: " + f4f(grabX) + ", " + f4f(grabY);
                        console.log(e.type + " - " + log);
                        if (this.debugDisplay != null) this.debugDisplay.prepend(e.type + " - " + log + "<br />");
                    }
                    if (this.onMove != null) this.onMove(grabX, grabY, handled, dropped, this.directed);
                    if (dropped) {
                        if (this.isDebug) console.log("dropped");
                        this.#dropHandle();
                        this.#clearBound();
                        //$(this.eventOrigin).off("click", null, this.#onClick);
                        //if (!handled && this.eventOrigin != null) this.eventOrigin.click();
                        this.#eventOrigin = null;
                    } else if (handled) {
                        if (this.isDebug) console.log("handled");
                        if (this.#grabMarker == null) this.#grabMarker = setTimeout(() => {
                            if (this.handled && this.#$responseBound.attr(eds.onGrab) != t1) {
                                this.#$responseBound.attr(eds.onGrab, t1);
                            }
                            this.#grabMarker = null;
                        }, 0);
                        if (this.preventMove) {
                            if (this.preventDefault) e.preventDefault();
                            if (this.stopPropagation) e.stopPropagation();
                            if (this.preventDefault) return false;
                        }
                    } else {
                        if (this.isDebug) console.log("ignored");
                        this.#clearBound();
                    }
				}
                break;
				
		}
    }

    #onHandle = (e) => {
        if (this.handled) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }

    #onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    setElement(element = this.element) {
        const $responseBound = this.#$responseBound;
        const $outerBound = this.#$outerBound;
        if (this.#bound != null) this.release();
        if (element instanceof jQuery) {
            this.#$bound = element;
            this.#bound = element[0];
        } else {
            this.#bound = element;
            this.#$bound = $(element);
        }
        this.#data = this.#bound.dataset;
        this.#bound.swipeHandler = this;

        this.#$bound.on(this.#triggers, null, this.#onEvent);
        //this.#$bound.on(this.#handles, null, this.#onHandle);
        this.#$bound.on("click", null, this.#onClick);
        this.#$bound.css("user-select", "none");

        this.#$responseBound = $responseBound != null ? $responseBound : this.#$bound;
        if ($outerBound != null) this.setOuterBound($outerBound);

        const $blockTarget = this.#$bound.find(uis.blockSwipe);
        $blockTarget.on(this.#events, this.#onClick);

        return this;
    }

}



const estreStruct = {
    structureSuffix: ".json",
}

const estreUi = {

    //constant
    overlaySections: {},
    overlaySectionList: [],

    blindSections: {},
    blindSectionList: [],

    mainSections: {},
    mainSectionList: [],

    menuSections: {},
    menuSectionList: [],
    get menuArea() { return this.menuSections["menuArea"]; },

    headerSections: {},
    headerSectionList: [],
    get appbar() { return this.headerSections["appbar"]; },

    overlayCurrentOnTop: null,
    blindedCurrentOnTop: null,
    mainCurrentOnTop: null,
    menuCurrentOnTop: null,
    headerCurrentOnTop: null,

    //elements
    $fixedBottom: null,
    $rootbar: null,
    $rootTabs: null,

    $overlayArea: null,
    get $overlaySections() { return this.$overlayArea.find(c.c + se); },
    
    $blindArea: null,
    get $blindSections() { return this.$blindArea.find(c.c + se); },

    $mainArea: null,
    get $mainSections() { return this.$mainArea.find(c.c + se); },
    
    $mainMenu: null,
    get $menuSections() { return this.$mainMenu.find(c.c + se); },
    $menuArea: null,
    $grabArea: null,

    $fixedTop: null,
    get $headerSections() { return this.$fixedTop.find(c.c + se); },
    $appbar: null,
    $homeBtn: null,
    $mainMenuBtn: null,
    $mainMenuBtnLottie: null,

    $more: null,
    $sessionManager: null,
    $sessionGroupHolder: null,
    $fixedPages: null,
    $fixedPageList: null,
    $openedPages: null,
    $openedPageList: null,

    //handles
    menuSwipeHandler: null,

    //properties
    prevRootTabId: null,

    //getter and setter
    get isOpenMainMenu() { return this.$mainMenu.attr(eds.opened) == t1; },



    //links (object redirection)
    get unifiedCalendar() { return this.mainSections.calendar.containers.root.articles.main.handles[uis.unifiedCalendar][0]; },
    get stockCalendar() { return this.unifiedCalendar.calendar; },
    get stockScheduler() { return this.unifiedCalendar.scheduler; },

    //inits
    init: function(setOnReady = true) {

        EstreHandle.commit();
        EstreUiPage.commit();
        scheduleDataSet.commit();

        this.$blindArea = $("main#instantDoc");
        
        this.$mainArea = $("main#staticDoc");
        
        this.$overlayArea = $("nav#managedOverlay");

        this.$mainMenu = $("nav#mainMenu");
        this.$menuArea = this.$mainMenu.find("section#menuArea");
        this.$grabArea = this.$mainMenu.find("section#grabArea");

        this.$fixedTop = $("header#fixedTop");
        this.$appbar = this.$fixedTop.find("section#appbar");
        this.$homeBtn = this.$appbar.find("button#home");
        this.$mainMenuBtn = this.$appbar.find("button#mainMenuBtn");
        this.$mainMenuBtnLottie = this.$mainMenuBtn.find("dotlottie-player");

        this.$fixedBottom = $("#fixedBottom");
        this.$rootbar = this.$fixedBottom.find("nav#rootbar");

        
        // events
        this.setReload();
        this.setBackNavigation();
        this.setMenuSwipeHandler();
        this.$grabArea.click(this.mainMenuGrabAreaOnclick);

        this.$mainMenuBtn.click(this.mainMenuBtnOnClick);


        //common element initializing
        pageManager.init();
        this.initRootbar();
        this.initOverlayContents();
        this.initInstantContents();
        this.initStaticContents();
        this.initStaticMenus();
        this.initHeaderBars();
        this.initSessionManager();


        if (setOnReady) this.checkOnReady();
    },

    setReload: function () {
        const inst = this;
        $(window).on("keydown", function (e) {
            if ((e.which || e.keyCode) == 116) {
                if (!e.ctrlKey) {
                    e.preventDefault();
                    inst.onReload();
                    return false;
                }
            }
        });
    },

    setBackNavigation: function () {
        const inst = this;
        $(window).on("popstate", async function(e) {
            if (await inst.onBack()) {
                e.preventDefault();
                return false;
            }
        });
    },


    //mainMenu
    setMenuSwipeHandler: function () {
        if (this.$mainMenu.length > 0) {
            this.releaseMenuSwipeHandler();
            const ui = this;
            this.menuSwipeHandler = new EstreSwipeHandler(this.$mainMenu).unuseY().setOnUp(function(grabX, grabY, handled, canceled, directed) {
                //console.log("grabX: " + grabX + ", grabY: " + grabY + ", lastX: " + this.lastX + ", startX: " + this.startX);
                if (handled) {
                    const isOpen = ui.$mainMenu.hasClass("right") ? grabX < 0 : grabX > 0;
                    setTimeout(() => {
                        if (isOpen) ui.openMainMenu();
                        else ui.closeMainMenu();
                    }, 0);
                }
            });
        }
    },

    releaseMenuSwipeHandler: function() {
        if (this.menuSwipeHandler != null) this.menuSwipeHandler.release();
    },

    mainMenuBtnOnClick: function(e) {
        estreUi.toggleMainMenuButton();
    },

    mainMenuGrabAreaOnclick: function(e) {
        estreUi.closeMainMenu();
    },

    toggleMainMenuButton: function() {
        if (this.isOpenMainMenu) this.closeMainMenu();
        else this.openMainMenu();
    },

    openMainMenu: function() {
        if (!this.isOpenMainMenu) {
            this.$mainMenu.attr(eds.opened, t1);
            const $top = this.$menuSections.filter(asv(eds.onTop, t1));
            $top[$top.length - 1]?.pageHandle?.focus();

            const lottie = this.getMainMenuLottie();
            lottie.pause();
            lottie.setDirection(1);
            lottie.setSegment(0, 30);
            lottie.goToAndPlay(0, true);
            return true;
        } else return false;
    },

    closeMainMenu: function() {
        if (this.isOpenMainMenu) {
            this.$mainMenu.attr(eds.opened, "");
            const $top = this.$menuSections.filter(asv(eds.onTop, t1));
            $top[$top.length - 1]?.pageHandle?.blur();

            const lottie = this.getMainMenuLottie();
            lottie.pause();
            lottie.setDirection(-1);
            lottie.goToAndPlay(30, true);
            return true;
        } else return false;
    },

    getMainMenuLottie: function() {
        return this.$mainMenuBtnLottie[0].getLottie();
    },


    //rootbar
    initRootbar: function() {
        this.$rootTabs = this.$rootbar.find(c.c + btn);
        this.$rootTabs.attr(eds.active, "");

        var topId = null;
        const topSection = this.$mainSections.filter(asv(eds.onTop, t1));
        if (topSection.length > 0) topId = topSection.attr("id");

        if (topId != null) {
            this.$rootTabs.filter(aiv(eds.tabId, topId)).attr(eds.active, t1);
        }

        this.$rootTabs.filter(ax(eds.tabId)).click(this.rootTabOnClick);


        // * Currently not using
        // fetch("./structure/rootmenu" + estreStruct.structureSuffix)
        //     .then((response) => {
        //         if (response.ok) return response.json();
        //         throw Error("[" + response.status + "]" + response.url);
        //     })
        //     .then((data) => estreUi.renderRootBar(data))
        //     .catch((error) => console.log("fetch error: " + error));
    },

// === Currently not using
    renderRootBar: function(esd) {
        this.$rootTabs.empty();
        this.$mainArea.empty();
        var topId = null;
        for (var item of esd.menu) {
            this.$rootTabs.append(this.buildRootTabItem(item));
            this.$mainArea.append(this.buildMainSection(item));
            if (item.type == "static" && item.home) topId = item.id;
        }
        this.$rootTabs = this.$rootbar.find(c.c + btn);

        if (topId != null) {
            this.$rootTabs.filter(aiv(eds.tabId, topId)).attr(eds.active, t1);
        }

        this.$rootTabs.filter(ax(eds.tabId)).click(this.rootTabOnClick);
    },

    buildRootTabItem: function(esm) {
        const element = doc.ce(btn);
        element.setAttribute(m.cls, "tp_tiled_btn");
        element.setAttribute("title", esm.desc);
        element.setAttribute(eds.tabId, esm.id);
        element.innerHTML = esm.title;
        return element;
    },

    buildMainSection: function(esm) {
        const element = doc.ce(se);
        element.setAttribute(m.cls, "vfv_scroll");
        element.setAttribute("id", esm.id);
        this.fetchContent(esm, element);
        return element;
    },

    fetchContent: function(esm, target) {
        fetch("." + esm.direct + estreStruct.structureSuffix)
            .then((response) => {
                if (response.ok) return response.json();
                throw Error("[" + response.status + "]" + response.url);
            })
            .then((data) => {
                const parts = this.renderContentArea(data);
                for (var part of parts) target.append(part);
            })
            .catch((error) => console.log("fetch error: " + error));

    },

    renderContentArea: function(ecm) {
        const set = [];
        const article = doc.ce(ar);
        if (ecm.content.display == "constraint") article.setAttribute(m.cls, "constraint");
        set.push(article);
        for (var handle of handles) {
            const handler = doc.ce(div);
            handler.setAttribute(m.cls, "handle_set " + handle.attach);
            set.push(handler);
        }
        return set;
    },
// ===========================

    showExactAppbar: function(component, container, article) {
        const appbar = this.appbar;
        if (appbar == null) return;
        const currentExactComponent = this.isOpenMainMenu ? this.menuCurrentOnTop : this.mainCurrentOnTop;
        if (component == null) component = currentExactComponent;
        if (component == null) return;
        if (container != null && component != currentExactComponent) return null;
        const currentExactContainer = currentExactComponent.currentOnTop;
        if (article != null && container != currentExactContainer) return null;

        const isHomeComponent = component.isHome;
        const topContainer = component.currentTop;
        const isRootContainer = topContainer != null ? topContainer.isRoot : true;
        const isSingleContainer = component.isSingleContainer;
        const isRootOrSingle = isRootContainer || isSingleContainer;

        const topArticle = topContainer?.currentTop;
        const isMainArticle = topArticle != null ? topArticle.isMain : true;
        const isSingleArticle = container.isSingleArticle;
        const isMainOrSingle = isMainArticle || isSingleArticle;

        let success = false;
        if (!success && topArticle != null) success = appbar.showContainer("article_" + topArticle.id);
        if (!success && topContainer != null) success = appbar.showContainer("container_" + topContainer.id);
        if (!success && isRootContainer) success = appbar.showContainer(component.id);
        if (!success && isHomeComponent && isRootOrSingle && isMainOrSingle) success = appbar.showContainer("home");
        if (!success && isMainArticle) success = appbar.showContainer("main");
        if (!success && isRootContainer) success = appbar.showContainer("root");
        if (!success && (!isHomeComponent || !isRootContainer)) success = appbar.showContainer("sub");
        estreUi.releaseAppbarPageTitle();

        return success;
    },

    setAppbarPageTitle: function(text) {
        this.appbar?.handler?.setPageTitle(text);
    },

    releaseAppbarPageTitle: function() {
        this.setAppbarPageTitle(this.isOpenMainMenu ? this.menuCurrentOnTop?.title ?? "" : this.mainCurrentOnTop?.title ?? "");
    },

    rootTabOnClick: function(e) {
        const target = this.tagName == BTN ? this : (e.target.tagName == BTN ? e.target : e.target.parentElement);
        estreUi.switchRootTab(target);
    },

    switchRootTab: function($target, intent) {
        switch (typeof $target) {
            case "number":
                if ($target < this.$rootTabs.length) return this.switchRootTab(this.$rootTabs[$target], intent);
                break;

            case "string":
                const targets = this.$rootTabs.filter(aiv(eds.tabId, $target));
                if ($target.length < 1) $target = this.$fixedPageList.find(btn + aiv(eds.contained, "root") + aiv(eds.containerId, id));
                if (targets.length > 0) return this.switchRootTab(targets[0], intent);
                break;

            case "object":
                if ($target instanceof jQuery) ;//do nothing
                else $target = $($target);

                const id = $target.attr(eds.tabId);
                const $targetSection = this.$mainSections.filter(eid + id);
                const isModal = $targetSection.hasClass("modal");

                var unhandled = false;
                if (isModal) {
                    if ($targetSection[0]?.pageHandle?.isOnTop) {
                        return this.closeModalTab(id, $targetSection);
                    } else return this.openModalTab(id, $targetSection, intent);
                }

                //단일 탭 사용 기준 구현
                const $elseSections = this.$mainSections.filter(asv(eds.onTop, t1) + nti(id));
                if ($elseSections.length > 0) {
                    for (var section of $elseSections) section.pageHandle?.hide();
                    this.prevRootTabId = $elseSections.attr("id");
                }
                this.$rootTabs.filter(aiv(eds.active, t1) + naiv(eds.tabId, id)).attr(eds.active, "");

                const targetComponent = this.mainSections[id];
                if (targetComponent.isOnTop) {
                    unhandled = true;
                    
                    //현재 선택된 탭을 다시 선택했을 때
                    targetComponent.back();
                } else {
                    targetComponent.pushIntent(intent);
                    targetComponent.show(false);
                    this.mainCurrentOnTop = targetComponent;

                    this.showExactAppbar(targetComponent);
                }

                this.$rootTabs.blur();

                if ($target.attr(eds.active) == t1) {
                    //do nothing //추후 방향에 따라 섹션 새로고침 등 구현
                } else {
                    $target.attr(eds.active, t1);
                }

                return !unhandled;
                //break;
        }
    },

    switchRootTabPrev() {
        if (this.prevRootTabId != null) {
            const processed = this.switchRootTab(this.prevRootTabId);
            if (processed) this.prevRootTabId = null;
            return processed;
        } else return false;
    },

    openInstantBlinded: function(id, intent) {
        const page = pageManager.getComponent(id);
        if (page == null) return null;
        if (page.statement == "static") return null;
        this.$blindArea.append(page.raw);
        const $section = this.$blindSections.filter(eid + id);
        if ($section == null || $section.length < 1) return null;
        const component = this.initInstantContent($section[0], intent);
        if (component.isOnTop) component.show(false);
        return component;
    },

    showInstantBlinded: function(id, intent) {
        const $targetSection = this.$blindSections.filter(eid + id);
        const isModal = $targetSection.hasClass("modal");

        var unhandled = false;
        if (isModal) {
            const onTop = $targetSection.attr(eds.onTop);
            if (onTop == t1 || onTop == "1*") {
                //do nothing
            } else return this.openModalSection(id, this.$blindSections, $targetSection, intent);
        }

        const $elseSections = this.$blindSections.filter(asv(eds.onTop, t1) + nti(id));
        if ($elseSections.length > 0) {
            for (var section of $elseSections) section.pageHandle?.hide(false);
        }

        const targetComponent = this.blindSections[id];
        targetComponent.pushIntent(intent);
        if (targetComponent.isOnTop) {
            unhandled = true;
        } else {
            targetComponent.show(false);
            this.blindedCurrentOnTop = targetComponent;
        }

        return !unhandled;
    },

    closeInstantBlinded: async function(id) {
        const component = this.blindSections[id];
        if (component == null) return null;
        const $targetSection = component.$host;
        const isModal = $targetSection.hasClass("modal");

        if (isModal) {
            if (component.isOnTop) {
                const closed = await this.closeModalSection(id, this.$blindSections, $targetSection);
                if (!component.isStatic) this.releaseInstantContent(component);
                return closed;
            } else return null;
        } else {
            const closed = await component.close(false);
            if (!component.isStatic) this.releaseInstantContent(component);
            return closed;
        }
    },

    openMenuArea: function(id, intent) {
        const page = pageManager.getComponent(id);
        if (page == null) return null;
        if (page.statement == "static") return null;
        this.$mainMenu.append(page.raw);
        const $section = this.$menuSections.filter(eid + id);
        if ($section == null || $section.length < 1) return null;
        const component = this.initStaticMenu($section[0], intent);
        if (component.isOnTop) component.show(false);
        return component;
    },

    showMenuArea: function(id, intent) {
        const $targetSection = this.$menuSections.filter(eid + id);
        const isModal = $targetSection.hasClass("modal");

        var unhandled = false;
        if (isModal) {
            const onTop = $targetSection.attr(eds.onTop);
            if (onTop == t1 || onTop == "1*") {
                //do nothing
            } else return this.openModalSection(id, this.$menuSections, $targetSection, intent);
        }

        const $elseSections = this.$menuSections.filter(asv(eds.onTop, t1) + nti(id));
        if ($elseSections.length > 0) {
            for (var section of $elseSections) section.pageHandle?.hide(false);
        }

        const targetComponent = this.menuSections[id];
        targetComponent.pushIntent(intent);
        if (targetComponent.isOnTop) {
            unhandled = true;
        } else {
            targetComponent.show(false);
            this.menuCurrentOnTop = targetComponent;

            this.showExactAppbar(targetComponent);
        }

        return !unhandled;
    },

    closeMenuArea: async function(id) {
        const component = this.menuSections[id];
        if (component == null) return null;
        const $targetSection = component.$host;
        const isModal = $targetSection.hasClass("modal");

        if (isModal) {
            if (component.isOnTop) {
                const closed = await this.closeModalSection(id, this.$menuSections, $targetSection);
                if (!component.isStatic) this.releaseInstantContent(component);
                return closed;
            } else return null;
        } else {
            const closed = await component.close(false);
            if (!component.isStatic) this.releaseInstantContent(component);
            return closed;
        }
    },

    openHeaderBar: function(id, intent) {
        const page = pageManager.getComponent(id);
        if (page == null) return null;
        if (page.statement == "static") return null;
        this.$headerArea.append(page.raw);
        const $section = this.$headerSections.filter(eid + id);
        if ($section == null || $section.length < 1) return null;
        const component = this.initHeaderBar($section[0], intent);
        // if (component.isOnTop) component.show(false);
        return component;
    },

    showHeaderBar: function(id, intent) {
        const $targetSection = this.$headerSections.filter(eid + id);
        const isModal = $targetSection.hasClass("modal");

        var unhandled = false;
        if (isModal) {
            const onTop = $targetSection.attr(eds.onTop);
            if (onTop == t1 || onTop == "1*") {
                //do nothing
            } else return this.openModalSection(id, this.$headerSections, $targetSection, intent);
        }

        const $elseSections = this.$headerSections.filter(asv(eds.onTop, t1) + nti(id));
        if ($elseSections.length > 0) {
            for (var section of $elseSections) section.pageHandle?.hide(false);
        }

        const targetComponent = this.headerSections[id];
        targetComponent.pushIntent(intent);
        if (targetComponent.isOnTop) {
            unhandled = true;
        } else {
            targetComponent.show(false);
            this.headerCurrentOnTop = targetComponent;
        }

        return !unhandled;
    },

    closeHeaderBar: async function(id) {
        const component = this.headerSections[id];
        if (component == null) return null;
        const $targetSection = component.$host;
        const isModal = $targetSection.hasClass("modal");

        if (isModal) {
            if (component.isOnTop) {
                const closed = await this.closeModalSection(id, this.$headerSections, $targetSection);
                if (!component.isStatic) this.releaseInstantContent(component);
                return closed;
            } else return null;
        } else {
            const closed = await component.close(false);
            if (!component.isStatic) this.releaseInstantContent(component);
            return closed;
        }
    },

    openManagedOverlay: function(id, intent) {
        const page = pageManager.getComponent(id, "overlay");
        if (page == null) return null;
        if (page.statement == "static") return null;
        this.$overlayArea.append(page.raw);
        const $section = this.$overlaySections.filter(eid + id);
        if ($section == null || $section.length < 1) return null;
        const component = this.initOverlayContent($section[0], intent);
        // if (component.isOnTop) component.show(false);
        return component;
    },

    showManagedOverlay: function(id, intent) {
        const $targetSection = this.$overlaySections.filter(eid + id);
        const isModal = $targetSection.hasClass("modal");

        var unhandled = false;
        if (isModal) {
            const onTop = $targetSection.attr(eds.onTop);
            if (onTop == t1 || onTop == "1*") {
                //do nothing
            } else return this.openModalSection(id, this.$overlaySections, $targetSection, intent);
        }

        const $elseSections = this.$overlaySections.filter(asv(eds.onTop, t1) + nti(id));
        if ($elseSections.length > 0) {
            for (var section of $elseSections) section.pageHandle?.hide(false);
        }

        const targetComponent = this.overlaySections[id];
        targetComponent.pushIntent(intent);
        if (targetComponent.isOnTop) {
            unhandled = true;
        } else {
            targetComponent.show(false);
            this.overlayCurrentOnTop = targetComponent;
        }

        return !unhandled;
    },

    closeManagedOverlay: async function(id) {
        const component = this.overlaySections[id];
        if (component == null) return null;
        const $targetSection = component.$host;
        const isModal = $targetSection.hasClass("modal");

        if (isModal) {
            if (component.isOnTop) {
                const closed = await this.closeModalSection(id, this.$overlaySections, $targetSection);
                if (!component.isStatic) this.releaseInstantContent(component);
                return closed;
            } else return null;
        } else {
            const closed = await component.close(false);
            if (!component.isStatic) this.releaseInstantContent(component);
            return closed;
        }
    },

    openModalTab: function(id, $targetSection, intent = null, $sectionSet = this.$mainSections) {
        var $target = this.$fixedBottom.find(btn + aiv(eds.tabId, id));
        if ($target.length < 1) $target = this.$sessionGroupHolder.find(btn + aiv(eds.contained, "root") + aiv(eds.containerId, id));

        $target.attr(eds.active, t1);

        return this.openModalSection(id, $sectionSet, $targetSection, intent);
    },

    openModalSection: function(id, $sectionSet = this.$mainSections, $targetSection, intent = null) {
        var $target = this.$fixedBottom.find(btn + aiv(eds.tabId, id));
        if ($target.length < 1) $target = this.$sessionGroupHolder.find(btn + aiv(eds.contained, "root") + aiv(eds.containerId, id));

        if ($targetSection == null) $targetSection = $sectionSet.filter(eid + id);

        const isMainSection = $sectionSet == this.$mainSections;
        const isBlildSection = $sectionSet == this.$blindSections;
        const isMenuSection = $sectionSet == this.$menuSections;
        const isOverlaySection = $sectionSet == this.$overlaySections;
        const isHeaderSection = $sectionSet == this.$headerSections;
        const component = isMainSection ? this.mainSections[id] : (isBlildSection ? this.blindSections[id] : (isMenuSection ? this.menuSections[id] : (isOverlaySection ? this.overlaySections[id] : (isHeaderSection ? this.headerSections[id] : null))));

        if (isMainSection && this.mainCurrentOnTop != null) this.prevRootTabId = this.mainCurrentOnTop.id;

        component?.pushIntent(intent);
        
        $targetSection.off("click");
        $targetSection.click(function(e) {
            e.preventDefault();

            estreUi.closeModalTab(this.id, $targetSection, $sectionSet);

            return false;
        });
        const $container = $targetSection.find(c.c + div + uis.container);
        $container.off("click");
        $container.click(function(e) {
            e.preventDefault();

            return false;
        });

        return $targetSection[0]?.pageHandle?.show(false);
    },

    closeModalTab: async function(id, $targetSection, $sectionSet = this.$mainSections) {
        var $target = this.$fixedBottom.find(btn + aiv(eds.tabId, id));
        if ($target.length < 1) $target = this.$sessionGroupHolder.find(btn + aiv(eds.contained, "root") + aiv(eds.containerId, id));

        $target.attr(eds.active, "");

        return await this.closeModalSection(id, $sectionSet, $targetSection);
    },

    closeModalSection: async function(id, $sectionSet = this.$mainSections, $targetSection) {
        if ($targetSection == null) $targetSection = $sectionSet.filter(eid + id);

        if ($sectionSet == this.$mainSections) this.prevRootTabId = $targetSection.attr("id");

        $targetSection.off("click");
        $targetSection.find(c.c + div + uis.container).off("click");
        
        return await $targetSection[0]?.pageHandle?.close(false);
    },

    initOverlayContents: function() {
        const $oss = this.$overlaySections;

        for (var i=0; i<$oss.length; i++) this.initOverlayContent($oss[i], null, true);

        // let $top = this.$overlaySections.filter(asv(eds.onTop, t1));
        // if ($top.length < 1) $top = this.$overlaySections;
        // $top[$top.length - 1]?.pageHandle?.show(false);
    },

    releaseOverlayContent(component) {
        if (component == null) return;
        component.release(component.isStatic ? null : true);
        if (this.blindSections[component.id] != null) delete this.overlaySections[component.id];
        const index = this.overlaySectionList.indexOf(component);
        if (index > -1) this.overlaySectionList.splice(index, 1);
    },

    initOverlayContent(bound, intent = null, init = false) {
        this.releaseOverlayContent(bound.pageHandle);
        const component = new EstreOverlayComponent(bound);
        if (!init || component.isStatic) {
            this.overlaySections[component.id] = component;
            this.overlaySectionList.push(component);
        }
        component.init(intent);
        // if (component.isOnTop && component.isStatic) component.show(false);
        return component;
    },

    initInstantContents: function() {
        const $bss = this.$blindSections;

        for (var i=0; i<$bss.length; i++) this.initInstantContent($bss[i], null, true);

        const $top = this.$blindSections.filter(asv(eds.onTop, t1));
        // if ($top.length < 1) $top = this.$blindSections;
        if ($top.length > 0) {
            const targetComponent = $top[$top.length - 1].pageHandle;
            targetComponent?.show(false);
            this.blindedCurrentOnTop = targetComponent;
        }
    },

    releaseInstantContent(component) {
        if (component == null) return;
        component.release(component.isStatic ? null : true);
        if (this.blindSections[component.id] != null) delete this.blindSections[component.id];
        const index = this.blindSectionList.indexOf(component);
        if (index > -1) this.blindSectionList.splice(index, 1);
    },

    initInstantContent(bound, intent = null, init = false) {
        this.releaseInstantContent(bound.pageHandle);
        const component = new EstreInstantComponent(bound);
        if (!init || component.isStatic) {
            this.blindSections[component.id] = component;
            this.blindSectionList.push(component);
        }
        component.init(intent);
        // if (component.isOnTop && component.isStatic) component.show(false);
        return component;
    },

    initStaticContents: function() {
        const $mss = this.$mainSections;

        for (var i=0; i<$mss.length; i++) this.initStaticContent($mss[i], null, true);

        const $top = this.$mainSections.filter(asv(eds.onTop, t1));
        if ($top.length < 1) $top = this.$mainSections.filter(eid + "home");
        if ($top.length < 1) $top = this.$mainSections.filter(cls + "home");
        if ($top.length < 1) $top = this.$mainSections;
        if ($top.length > 0) {
            const targetComponent = $top[0].pageHandle;
            targetComponent?.show(false);
            this.mainCurrentOnTop = targetComponent;
        }
    },

    releaseStaticContent(component) {
        if (component == null) return;
        component.release(component.isStatic ? null : true);
        if (this.mainSections[component.id] != null) delete this.mainSections[component.id];
        const index = this.mainSectionList.indexOf(component);
        if (index > -1) this.mainSectionList.splice(index, 1);
    },

    initStaticContent(bound, intent = null, init = false) {
        this.releaseStaticContent(bound.pageHandle);
        const component = new EstreComponent(bound);
        if (!init || component.isStatic) {
            this.mainSections[component.id] = component;
            this.mainSectionList.push(component);
        }
        component.init(intent);
        // var $sections = this.$mainSections.filter(asv(eds.onTop, t1));
        // if ($sections.length < 1) $sections = this.$mainSections;
        // if (component.isOnTop && component.isStatic && (!init || bound == $sections[$sections.length - 1])) component.show(false);
        return component;
    },

    initStaticMenus: function() {
        const $mss = this.$menuSections;

        for (var i=0; i<$mss.length; i++) this.initStaticMenu($mss[i], null, true);

        let $top = this.$menuSections.filter(asv(eds.onTop, t1));
        if ($top.length < 1) $top = this.$menuSections.filter(eid + "menuArea");
        if ($top.length > 0) {
            const targetComponent = $top[$top.length - 1].pageHandle;
            targetComponent?.show(false);
            this.menuCurrentOnTop = targetComponent;
        }
    },

    releaseStaticMenu(component) {
        if (component == null) return;
        component.release(component.isStatic ? null : true);
        if (this.menuSections[component.id] != null) delete this.menuSections[component.id];
        const index = this.menuSectionList.indexOf(component);
        if (index > -1) this.menuSectionList.splice(index, 1);
    },

    initStaticMenu(bound, intent = null, init = false) {
        this.releaseStaticMenu(bound.pageHandle);
        const component = new EstreMenuComponent(bound);
        if (!init || component.isStatic) {
            this.menuSections[component.id] = component;
            this.menuSectionList.push(component);
        }
        component.init(intent);
        // if (component.isOnTop) component.show(false);
        return component;
    },

    initHeaderBars: function() {
        const $hss = this.$headerSections;

        for (var i=0; i<$hss.length; i++) this.initHeaderBar($hss[i], null, true);

        let $top = this.$headerSections.filter(asv(eds.onTop, t1));
        if ($top.length < 1) $top = this.$headerSections.filter(eid + "appbar");
        if ($top.length < 1) $top = this.$headerSections;
        if ($top.length > 0) {
            const targetComponent = $top[$top.length - 1].pageHandle;
            targetComponent?.show(false);
            this.headerCurrentOnTop = targetComponent;
        }
    },

    releaseHeaderBar(component) {
        if (component == null) return;
        component.release(component.isStatic ? null : true);
        if (this.headerSections[component.id] != null) delete this.headerSections[component.id];
        const index = this.headerSectionList.indexOf(component);
        if (index > -1) this.headerSectionList.splice(index, 1);
    },

    initHeaderBar(bound, intent = null, init = false) {
        this.releaseHeaderBar(bound.pageHandle);
        const component = new EstreHeaderComponent(bound);
        if (!init || component.isStatic) {
            this.headerSections[component.id] = component;
            this.headerSectionList.push(component);
        }
        component.init(intent);
        // if (component.isOnTop) component.show(false);
        return component;
    },

    initSessionManager: function() {
        this.$more = this.$mainSections.filter("#more");
        this.$sessionManager = this.$more.find(".session_manager");
        this.$sessionGroupHolder = this.$more.find(".session_group_holder");
        this.$fixedPages = this.$sessionGroupHolder.find(c.c + ".fixed_pages");
        this.$fixedPageList = this.$fixedPages.find(".session_list");
        this.$openedPages = this.$sessionGroupHolder.find(c.c + ".opened_pages");
        this.$openedPageList = this.$openedPages.find(".session_list");

        this.initSessionList(this.$fixedPageList);  
        this.initSessionList(this.$openedPageList);  
    },

    initSessionList: function($listHolder) {
        const $list = $listHolder.find(uis.pageShortCut);
        for (var item of $list) {
            this.setEventSessionItem($(item));
        }
    },

    setEventSessionItem($item) {
        if (!($item instanceof jQuery)) {
            this.setEventSessionItem($($item));
            return;
        }

        const inst = this;
        $item.find(btn).click(function(e) {
            const $this = $(this);
            const $item = $this.closest(".page_short_cut");
            const contained = $item.attr(eds.contained);
            const containerType = $item.attr(eds.containerType);
            const containerId = $item.attr(eds.containerId);

            switch(contained) {
                case "root":
                    if (containerType == "root_tab_content") inst.switchRootTab(containerId);
                    break;

                default:
                    if (containerType == "sub_page") {
                        const section = inst.mainSections[contained];
                        if (section.showContainer(containerId)) inst.switchRootTab(contained);
                    }
                    break;
            }
        });
    },


    reload() {
        return this.onReload();
    },

    async back() {
        return await this.onBack();
    },

    async closeContainer() {
        return await this.onCloseContainer();
    },


    onReload() {
        return this.isOpenMainMenu ? this.onReloadMenu() : false ||
            this.onReloadBlinded() || this.onReloadMain();
    },

    async onBack() {
        return await this.onBackOverlay() ||
            this.isOpenMainMenu ? await this.onBackMenu() || await this.closeMainMenu() : false ||
            await this.onBackBlinded() || await this.onBackMain();
    },

    async onCloseContainer() {
        return this.isOpenMainMenu ? await this.menuCurrentOnTop?.onCloseContainer() ?? false : false ||
            await this.mainCurrentOnTop?.onCloseContainer();
    },


    onReloadHeader() {
        const currentOnTop = this.headerCurrentOnTop;
        return currentOnTop?.onReload() ?? false;
    },

    onReloadMenu() {
        const currentOnTop = this.menuCurrentOnTop;
        return currentOnTop?.onReload() ?? false;
    },

    onReloadBlinded() {
        if (this.$blindSections.filter(asv(eds.onTop, t1)).length > 0) {
            return this.blindedCurrentOnTop?.onReload() ?? false;
        } else return false;
    },

    onReloadMain() {
        const currentOnTop = this.mainCurrentOnTop;
        return currentOnTop?.onReload() ?? false;
    },


    async onBackOverlay() {
        if (this.$overlaySections.filter(asv(eds.onTop, t1)).length > 0) {
            return await this.overlayCurrentOnTop?.onBack() ?? false;
        } else return false;
    },

    async onBackMenu() {
        const currentOnTop = this.menuCurrentOnTop ?? this.menuArea;
        return await currentOnTop?.onBack() ?? false;
    },

    async onBackBlinded() {
        if (this.$blindSections.filter(asv(eds.onTop, t1)).length > 0) {
            return await this.blindedCurrentOnTop?.onBack() ?? false;
        } else return false;
    },

    async onBackMain() {
        const currentOnTop = this.mainCurrentOnTop;
        let processed = false;
        if (currentOnTop != null) processed = await currentOnTop.onBack();
        if (!processed && !currentOnTop.isHome) processed = this.switchRootTabPrev();
        return processed;
    },


    checkOnReady() {
        EUX.setOnImagesFullyLoaded(() => {
            EstreAsyncManager.setOnFinishedCurrentWorks(() => {
                this.setUiOnReady();
            });
        });
    },

    setUiOnReady() {
        doc.$b.attr(eds.onReady, t0);
        setTimeout(() => doc.$b.attr(eds.onReady, t1), cvt.t2ms($("main#splashRoot").css(a.trdr)));
    },

    unsetUiOnReady() {
        doc.$b.attr(eds.onReady, t0);
        setTimeout(() => doc.$b.attr(eds.onReady, ""), cvt.t2ms($("main#splashRoot").css(a.trdr)));
    },

    eoo: eoo
}

