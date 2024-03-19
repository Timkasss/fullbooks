"use client"
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import {
   FaBold,
   FaHighlighter,
   FaItalic, FaUnderline,
   FaStrikethrough, FaQuoteLeft, FaListUl, FaListOl, FaImage
} from "react-icons/fa";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from "./tiptap.module.scss";

const MenuBar = ({ editor }) => {
   if (!editor) {
      return null
   }
   const buttons = [
      {
         icon: FaBold,
         isActive: "bold",
         click: () => editor.chain().focus().toggleBold().run(),
      },
      {
         icon: FaHighlighter,
         isActive: "highlight",
         click: () => editor.chain().focus().toggleHighlight().run(),
      },
      {
         icon: FaItalic,
         isActive: "italic",
         click: () => editor.chain().focus().toggleItalic().run(),
      },
      {
         icon: FaUnderline,
         isActive: "underline",
         click: () => editor.chain().focus().toggleUnderline().run(),
      },
      {
         icon: FaStrikethrough,
         isActive: "strike",
         click: () => editor.chain().focus().toggleStrike().run(),
      },
      {
         icon: LuHeading1,
         isActive: "heading",
         level: 1,
         click: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      },
      {
         icon: LuHeading2,
         isActive: "heading",
         level: 2,
         click: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      },
      {
         icon: LuHeading3,
         isActive: "heading",
         level: 3,
         click: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      },
      {
         icon: FaQuoteLeft,
         isActive: "blockquote",
         click: () => editor.chain().focus().toggleBlockquote().run(),
      },
      {
         icon: FaListUl,
         isActive: "bulletList",
         click: () => editor.chain().focus().toggleBulletList().run(),
      },
      {
         icon: FaListOl,
         isActive: "orderedList",
         click: () => editor.chain().focus().toggleOrderedList().run(),
      },
   ]


   const addImage = () => {
      const url = prompt('URL')
      const width = prompt('Width')
      const height = prompt('Height')

      if (url) {
         editor.chain().focus().setImage({ src: url, width, height }).run()
      }
   }
   // const addImage = () => {
   //    const image = prompt("add link", "");
   //    if (image) {
   //       editor.chain().focus().setImage({ src: image, alt: "image" }).run()
   //    } else {
   //       return null
   //    }
   // }
   return (
      <div className={styles.wrapper}>
         <div className={styles.menu}>
            {
               buttons.map((button, index) => {
                  let Icon = button.icon;
                  return (
                     <button className={editor.isActive(button.isActive, { level: button.level }) ? `${styles.button} ${styles.isActive}` : styles.button} key={index}
                        onClick={(event) => {
                           event.preventDefault();
                           button.click()
                        }}>
                        <Icon className={styles.icon} />
                     </button>
                  )
               })
            }
            <button className={styles.image}
               onClick={(event) => {
                  event.preventDefault();
                  addImage()
               }}>
               <FaImage className={styles.icon} />
            </button>
         </div>
      </div >
   )
}



export default function TipTap() {

   const CustomImage = Image.extend({
      addAttributes() {
         return {
            src: {
               default: null,
               parseHTML: element => ({
                  src: element.getAttribute('src'),
               }),
               renderHTML: attributes => {
                  if (!attributes.src) {
                     return {}
                  }

                  return {
                     src: attributes.src,
                  }
               },
            },
            width: {
               default: null,
               parseHTML: element => ({
                  width: element.getAttribute('width'),
               }),
               renderHTML: attributes => {
                  if (!attributes.width) {
                     return {}
                  }

                  return {
                     width: attributes.width,
                  }
               },
            },
            height: {
               default: null,
               parseHTML: element => ({
                  height: element.getAttribute('height'),
               }),
               renderHTML: attributes => {
                  if (!attributes.height) {
                     return {}
                  }

                  return {
                     height: attributes.height,
                  }
               },
            },
         }
      },
   })

   const editor = useEditor({
      extensions: [
         StarterKit.configure({
            heading: {
               levels: [1, 2, 3]
            },
            blockquote: {
               HTMLAttributes: {
                  class: styles.quote
               }
            }
         }),
         Underline,
         Highlight,
         CustomImage,
      ],
      content: ``,
      autofocus: true,
   })

   // const json = editor.getJSON();

   return (
      <>
         <MenuBar editor={editor} />
         <EditorContent editor={editor} className={styles.colorStyle} onClick={e => e.preventDefault()} />
      </>
   )
}