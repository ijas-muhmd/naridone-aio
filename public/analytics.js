(function() {
  // Simple heuristic: If title contains "404" or "Page not found"
  // Note: Modern themes set window.Shopify.routes.root or similar, but scanning title/content is universal fallback.
  // Shopify standard 404 handles are often just checking if we are on a 404 template.
  
  function is404() {
    // 1. Check Shopify Global Object (Best)
    // Most themes render '404' template
    // @ts-ignore
    if (window.Shopify && window.ShopifyAnalytics && window.ShopifyAnalytics.meta && window.ShopifyAnalytics.meta.page) {
        // @ts-ignore
        if (window.ShopifyAnalytics.meta.page.pageType === "404") return true;
    }

    // 2. Check Title (Fallback)
    if (document.title.includes("404") || document.title.includes("Page not found")) return true;

    return false;
  }

  if (is404()) {
    var path = window.location.pathname;
    
    // Ignore common bot noise
    if (path.includes('.php') || path.includes('.asp') || path.includes('wp-admin')) return;

    fetch('/apps/shopeec/api/optimization/redirects/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ path: path })
    }).catch(function(e) {
      console.warn("Failed to report 404", e);
    });
  }
})();

