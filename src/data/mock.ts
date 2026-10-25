export interface HeroSlide {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  alt: string;
}

export interface ClubEvent {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  image: string;
  alt: string;
}

export interface Announcement {
  id: number;
  title: string;
  preview: string;
  date: string;
  icon: "calendar" | "trophy" | "info" | "award";
}

export interface NavLink {
  label: string;
  href: string;
  target?: string;
}

export const navLinks: NavLink[] = [
  { label: "صفحه اصلی", href: "/" },
  { label: "رویدادها", href: "/events" },
  { label: "قله افتخار", href: "/announcements" },
  { label: "لیگ فوتبال", href: "/league" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    category: "رویداد ویژه",
    title: "جشن بزرگ اعضای مجموعه",
    description:
      "شب‌نشینی پرشور اعضای باشگاه همراهان با برنامه‌های متنوع، موسیقی زنده و تجلیل از چهره‌های برتر مجموعه.",
    date: "۲۵ آبان ۱۴۰۵",
    location: "سالن همایش‌های همراهان، تهران",
    image:
      "https://images.pexels.com/photos/15362127/pexels-photo-15362127.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "جمعیت بزرگی از اعضا در یک رویداد سرپوشیده با دست‌های بالا",
  },
  {
    id: 2,
    category: "رقابت ورزشی",
    title: "آغاز رقابت‌های لیگ فوتبال",
    description:
      "ششمین دوره مسابقات لیگ فوتبال مجموعه همراهان از هفته آینده با حضور تیم‌های منتخب آغاز می‌شود.",
    date: "۱ آذر ۱۴۰۵",
    location: "زمین شماره ۲ ورزشگاه همراهان",
    image:
      "https://images.pexels.com/photos/30651230/pexels-photo-30651230.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "استادیوم فوتبال شبانه با چراغ‌های قدرتمند و تماشاگران",
  },
  {
    id: 3,
    category: "گردهمایی",
    title: "گردهمایی سالانه باشگاه",
    description:
      "بازنگری دستاوردهای یک سال گذشته و برنامه‌ریزی برای مسیر پیش‌رو، با حضور همه اعضای مجموعه.",
    date: "۱۲ آذر ۱۴۰۵",
    location: "تالار مرکزی همراهان",
    image:
      "https://images.pexels.com/photos/14732758/pexels-photo-14732758.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "خانواده‌ای در حالی که دست در دست در یک سالن تزئین‌شده قدم می‌زنند",
  },
];

export const events: ClubEvent[] = [
  {
    id: 1,
    title: "جشن آغاز سال فعالیت مجموعه",
    description:
      "آغاز رسمی فعالیت‌های سال جدید با برنامه‌های فرهنگی و معرفی کمیته‌های تخصصی.",
    category: "جشن",
    date: "۲ آبان ۱۴۰۵",
    time: "۱۸:۰۰",
    location: "تالار همراهان",
    image:
      "https://images.pexels.com/photos/35555153/pexels-photo-35555153.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "کنسرت پرشور با نورپردازی رنگی و جمعیت شاد",
  },
  {
    id: 2,
    title: "جلسه عمومی اعضا",
    description:
      "بررسی گزارش فعالیت‌های فصل گذشته و همفکری درباره برنامه‌های پیش‌رو با حضور همه اعضا.",
    category: "جلسه",
    date: "۹ آبان ۱۴۰۵",
    time: "۱۷:۳۰",
    location: "سالن همایش‌ها",
    image:
      "https://images.pexels.com/photos/18999482/pexels-photo-18999482.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "گروهی از حرفه‌ای‌ها در یک جلسه کاری درون‌سازمانی",
  },
  {
    id: 3,
    title: "مسابقات فوتبال باشگاه",
    description:
      "هفته سوم رقابت‌های لیگ داخلی، دو درگیری جذاب میان تیم‌های منتخب مجموعه.",
    category: "ورزشی",
    date: "۱۶ آبان ۱۴۰۵",
    time: "۱۶:۰۰",
    location: "زمین شماره ۲",
    image:
      "https://images.pexels.com/photos/32285228/pexels-photo-32285228.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "بازیکنان در جریان یک مسابقه فوتبال در فضای باز",
  },
  {
    id: 4,
    title: "کارگاه آموزشی مهارت‌های ارتباطی",
    description:
      "کارگاه تخصصی با تمرکز بر گفت‌وگوی مؤثر و کار گروهی، ویژه اعضای جوان مجموعه.",
    category: "آموزشی",
    date: "۲۰ آبان ۱۴۰۵",
    time: "۱۰:۰۰",
    location: "کلاس شماره ۳",
    image:
      "https://images.pexels.com/photos/39201792/pexels-photo-39201792.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "گروهی از بزرگسالان در یک کارگاه عکاسی درون‌سازمانی",
  },
  {
    id: 5,
    title: "مراسم تقدیر از اعضا",
    description:
      "تجلیل از اعضای فعال و برگزیدگان مسابقات نیمه‌اول سال، با اهدای جوایز ویژه.",
    category: "مراسم",
    date: "۲۳ آبان ۱۴۰۵",
    time: "۱۹:۰۰",
    location: "تالار مرکزی",
    image:
      "https://images.pexels.com/photos/8815030/pexels-photo-8815030.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "گروهی اجراکننده در یک سالن پر از جمعیت",
  },
  {
    id: 6,
    title: "گردهمایی دوستانه اعضا",
    description:
      "یک شب صمیمی برای گفت‌وگو، بازی‌های گروهی و نزدیک‌تر شدن اعضای مجموعه.",
    category: "دوستانه",
    date: "۲۹ آبان ۱۴۰۵",
    time: "۲۰:۰۰",
    location: "فضای باز مجموعه",
    image:
      "https://images.pexels.com/photos/8761561/pexels-photo-8761561.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "حرفه‌ای‌ها در حال گفت‌وگو پیش از یک ارائه در دفتر کار",
  },
];

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "تغییر ساعت برگزاری برنامه هفتگی",
    preview:
      "برنامه هفتگی جمعه‌ها از ساعت ۱۸ به ۱۷:۳۰ تغییر زمان می‌یابد. خواهشمند است این تغییر را در تقویم خود لحاظ کنید.",
    date: "۲۸ مهر ۱۴۰۵",
    icon: "calendar",
  },
  {
    id: 2,
    title: "اعلام زمان ثبت‌نام مسابقات فوتبال",
    preview:
      "ثبت‌نام تیم‌های علاقه‌مند به ششمین دوره لیگ فوتبال مجموعه از ۵ آبان آغاز و تا ۱۲ آبان ادامه دارد.",
    date: "۲۶ مهر ۱۴۰۵",
    icon: "trophy",
  },
  {
    id: 3,
    title: "اطلاعیه مربوط به برنامه‌های آینده مجموعه",
    preview:
      "برنامه‌های فصل پاییز مجموعه شامل سه رویداد اصلی و دو کارگاه تخصصی است؛ جزئیات کامل به‌زودی منتشر می‌شود.",
    date: "۲۲ مهر ۱۴۰۵",
    icon: "info",
  },
  {
    id: 4,
    title: "اعلام نتایج آخرین رقابت‌ها",
    preview:
      "نتایج نهایی پنجمین دوره مسابقات داخلی منتشر شد. تبریک به تیم‌های برگزیده و همه شرکت‌کنندگان.",
    date: "۱۸ مهر ۱۴۰۵",
    icon: "award",
  },
];

export const aboutHighlights: { title: string; description: string; icon: "users" | "heart" | "trophy" | "sparkles" }[] = [
  {
    title: "حضور فعال اعضا",
    description: "فضایی پویا برای مشارکت همه اعضا در فعالیت‌های فرهنگی و ورزشی مجموعه.",
    icon: "users",
  },
  {
    title: "تجربه‌های مشترک",
    description: "ساختن خاطره‌های ماندگار از طریق گردهمایی‌ها، سفرها و برنامه‌های گروهی.",
    icon: "heart",
  },
  {
    title: "روحیه ورزشی",
    description: "ترویج سلامتی و رقابت سالم با برگزاری منظم مسابقات و فعالیت‌های ورزشی.",
    icon: "trophy",
  },
  {
    title: "پویایی و نوآوری",
    description: "طراحی برنامه‌های تازه و متنوع برای پاسخ به علایق متغیر اعضای مجموعه.",
    icon: "sparkles",
  },
];
