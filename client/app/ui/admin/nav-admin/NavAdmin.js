"use client"
import styles from "./nav-admin.module.scss";
import Image from "next/image";
import logo from "@/public/img/header/header_logo.png";
import { FaUsers, FaBook, FaHandsHelping } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { RiArticleLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { BiCommand } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavAdmin() {
   const pathname = usePathname();

   const links = [
      {
         name: "Dashboard",
         href: "/admin",
         icon: BiCommand
      }, {
         name: "Users",
         href: "/admin/users",
         icon: FaUsers
      }, {
         name: "Authors",
         href: "/admin/authors",
         icon: HiAcademicCap
      }, {
         name: "Books",
         href: "/admin/books",
         icon: FaBook
      }, {
         name: "Articles",
         href: "/admin/articles",
         icon: RiArticleLine
      }, {
         name: "Help",
         href: "/admin/help",
         icon: FaHandsHelping
      }, {
         name: "Settings",
         href: "/admin/settings",
         icon: IoSettingsSharp
      },
   ]

   return (
      <div className={styles.navWrapper}>
         <div className={styles.wrapperLogo}>
            <Image src={logo} width={120} height={100} alt="logo" priority />
         </div>
         <nav className={styles.menu}>
            <ul className={styles.list}>
               {
                  links.map((link, index) => {
                     const LinkIcon = link.icon;
                     return (
                        <li className={styles.item} key={index}>
                           <Link href={link.href} className={link.href === pathname ? styles.activeLink : styles.link}><LinkIcon className={styles.usersIcon} />{link.name}</Link>
                        </li>
                     )
                  })
               }
            </ul>
         </nav>
      </div>
   )
}