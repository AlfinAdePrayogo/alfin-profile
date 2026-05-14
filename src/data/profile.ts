import { Briefcase, Code, Database, Monitor, PenTool, LayoutDashboard, Calculator, LineChart, Globe } from "lucide-react";

export const profileData = {
  name: "Alfin Ade Prayogo",
  headline: "Alfin Ade Prayogo",
  subheadline: "Assistant Treasurer & Data Enthusiast yang berfokus pada otomatisasi sistem keuangan dan manajemen bisnis yang efisien.",
  about: {
    paragraphs: [
      "Saya memulai perjalanan karier dari latar belakang Akuntansi sebagai lulusan SMK Akuntansi, yang memberi saya pondasi kuat dalam logika finansial dan tata kelola pembukuan.",
      "Saat ini, saya berperan sebagai Assistant Treasurer di sebuah lembaga pendidikan, di mana saya bertanggung jawab atas efisiensi arus kas dan pelaporan keuangan.",
      "Ketertarikan saya pada Data Analysis dan teknologi mendorong saya untuk tidak hanya mencatat angka, tetapi juga membangun sistem yang otomatis dan efektif, memanfaatkan logika keuangan dalam setiap solusi yang saya rancang."
    ],
    location: "Purbalingga, Jawa Tengah",
  },
  skills: [
    {
      category: "Finance & Business",
      items: ["Financial Reporting", "Bookkeeping", "Entrepreneurship", "Agribusiness Management"]
    },
    {
      category: "Technical & Data",
      items: ["Google Apps Script (Automation)", "Advanced Excel/Spreadsheet", "Data Visualization", "Hardware Troubleshooting"]
    },
    {
      category: "Tools",
      items: ["React", "Node.js", "Supabase", "Cloudflare", "Git"]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Sistem Pembukuan Otomatis",
      description: "Program otomatisasi database keuangan yang dibangun menggunakan Google Apps Script untuk mempercepat pelaporan dan meminimalisir human error.",
      icon: "Database"
    },
    {
      id: "2",
      title: "Agribisnis Trading",
      description: "Mengelola modal dan operasional harian dalam proses pengolahan gabah hingga menjadi beras siap distribusi secara efisien.",
      icon: "LineChart"
    },
    {
      id: "3",
      title: "Culinary Business",
      description: "Founder dari bisnis kuliner (Bubur Kacang Hijau Ketan Hitam) yang dikelola secara profesional dengan manajemen operasional yang terukur di Purbalingga.",
      icon: "Briefcase"
    }
  ],
  interests: [
    { name: "Computer Hardware", icon: "Monitor" },
    { name: "Desain Interior/Landscaping", icon: "PenTool" },
    { name: "Futsal", icon: "Globe" } // Using Globe or a sport related icon, fallback to Globe or User
  ],
  contact: {
    whatsapp: "+62 895-6224-37748",
    whatsappLink: "https://wa.me/62895622437748",
    email: "alfinadeprayogo123@gmail.com",
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/alfinadeprayogo" }, // Placeholder
      { platform: "GitHub", url: "https://github.com/alfinadeprayogo" }, // Placeholder
      { platform: "Instagram", url: "https://instagram.com/alfinadeprayogo" } // Placeholder
    ]
  }
};
