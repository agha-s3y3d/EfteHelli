import { Mail, Phone, MapPin, Instagram, Send, Linkedin } from "lucide-react";
import { navLinks } from "../data/mock";
import Logo from "./Logo";

export default function Footer() {
  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
              مجموعه فرهنگی-ورزشی همراهان؛ فضایی برای هم‌نشینی، یادگیری و
              فعالیت ورزشی اعضا با برنامه‌های متنوع و مستمر.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[Instagram, Send, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition-colors hover:bg-brand hover:text-white"
                  aria-label="شبکه اجتماعی"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">دسترسی سریع</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchor(e, link.href)}
                    className="text-white/65 transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">رویدادها و لیگ</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["رویدادهای پیش‌رو", "اطلاعیه‌ها", "لیگ فوتبال", "نتایج مسابقات"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-white/65 transition-colors hover:text-brand-light"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">ارتباط با ما</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-light" />
                <span className="numeric">۰۲۱-۰۰۰۰۰۰۰۰</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-light" />
                <span dir="ltr">info@example.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" />
                <span>نشانی مجموعه، شهر تهران، ایران</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© ۱۴۰۵ باشگاه همراهان — تمامی حقوق محفوظ است.</p>
          <p>طراحی و توسعه با هدف خدمت به اعضای مجموعه.</p>
        </div>
      </div>
    </footer>
  );
}
