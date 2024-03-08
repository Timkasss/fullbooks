import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import {
   FaBold,
   FaHighlighter,
   FaItalic, FaUnderline,
   FaStrikethrough, FaQuoteLeft, FaListUl, FaListOl
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
         </div>
      </div >
   )
}



export default function TipTap() {
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
         Highlight.configure({

         }),
      ],
      content: `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis accusantium quos ducimus sunt ab deserunt, laborum nihil nostrum iste, aut voluptas. Animi accusamus est itaque sed cum qui quod nisi.</p>`,
      autofocus: true,
   })
   return (
      <>
         <MenuBar editor={editor} />
         <EditorContent editor={editor} className={styles.colorStyle} onClick={e => e.preventDefault()} />
      </>
   )
}