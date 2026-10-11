import { portfolioData } from "@/data/portfolioData";
import SakuraPetals from "@/components/voxel/SakuraPetals";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="grass-strip" aria-hidden="true" />
      <div className="footer-soil">
        <SakuraPetals className="sakura-footer" />
        <div className="footer-box wood bevel">
          <p className="footer-message">The journey continues...</p>
          <p className="footer-copy">© {currentYear} {portfolioData.personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
