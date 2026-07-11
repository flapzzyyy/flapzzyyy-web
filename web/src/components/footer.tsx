import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-foreground"
          >
            <InstagramIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
