window.__I18N__ = (() => {
    const I18N = {};
    const lang = navigator.language.toLocaleLowerCase();
    <!-- lang -->
    let source = I18N[lang] ? I18N[lang] : {};
    return key => source[key]||key;
})();
