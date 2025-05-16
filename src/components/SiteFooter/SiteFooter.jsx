import SiteCopyright from "./SiteCopyright";
import SiteFooterLogos from "./SiteFooterLogos";
import SiteFooterNavigation from "./SiteFooterNavigation";
import SiteLogo from "./SiteLogo";

function SiteFooter() {
  return (
    <footer className="footer footer-tablet site-padding">
      <SiteLogo />
      <SiteFooterNavigation />
      <SiteFooterLogos />
      <SiteCopyright />
    </footer>
  );
}

export default SiteFooter;
