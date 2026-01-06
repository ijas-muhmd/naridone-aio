import { Outlet, Link as ReactRouterLink } from "react-router-dom";
import { AppProvider, Frame } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";

export default function AppLayout() {
  // #region agent log
  const logDataLayout = {location:'AppLayout.tsx:6',message:'AppLayout rendering',data:{path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'};
  console.log('[DEBUG]', logDataLayout);
  fetch('http://127.0.0.1:7244/ingest/6bfb1ca9-3ae3-4e08-97f6-3f15aea87cf6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logDataLayout)}).catch(e=>console.error('[DEBUG] Log send failed:',e));
  // #endregion
  
  // Custom Link component for Polaris to use React Router
  const Link = ({ children, url, ...rest }: any) => {
    return (
      <ReactRouterLink to={url} {...rest}>
        {children}
      </ReactRouterLink>
    );
  };

  // #region agent log
  const logDataLayout2 = {location:'AppLayout.tsx:18',message:'AppLayout returning JSX',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'};
  console.log('[DEBUG]', logDataLayout2);
  fetch('http://127.0.0.1:7244/ingest/6bfb1ca9-3ae3-4e08-97f6-3f15aea87cf6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logDataLayout2)}).catch(e=>console.error('[DEBUG] Log send failed:',e));
  // #endregion

  return (
    <AppProvider i18n={translations} linkComponent={Link}>
      <Frame>
        <Outlet />
      </Frame>
    </AppProvider>
  );
}
