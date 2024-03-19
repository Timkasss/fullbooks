import styles from "./addauthor.module.scss";
import { IoMdClose } from "react-icons/io";
import author from "@/public/img/authors/author.png";
import Image from "next/image";
import { FiUpload } from "react-icons/fi";
import Select from "react-select";
import { useStoreAuthors } from "@/app/lib/store";

export default function AddAuthor({ openModel }) {
  const addAuthor = useStoreAuthors((state) => state.addAuthor);

  const hadnleAdd = (formData) => {
    addAuthor(formData);
    openModel(false);
  };

  const genre = [
    { value: "lyrics", label: "вірші" },
    { value: "writings", label: "твори" },
  ];
  const direction = [
    { value: "socialrealism", label: "соцреалізм" },
    { value: "oportynizm", label: "опортунізм" },
  ];
  return (
    <form
      className={styles.formAuthor}
      onClick={(e) => e.stopPropagation()}
      action={hadnleAdd}
    >
      <header className={styles.header}>
        <h1 className={styles.title}>Add Author</h1>
        <IoMdClose className={styles.close} onClick={() => openModel(false)} />
      </header>

      <div className={styles.wrapInputs}>
        <div className={styles.wrapImage}>
          {!author ? (
            <Image
              width={500}
              height={500}
              src={author}
              alt="author"
              className={styles.image}
            />
          ) : (
            <div className={styles.fileContainer}>
              <FiUpload className={styles.upFile} />
              <div className={styles.textFile}>
                <p className={styles.textFileOne}>Drag & drop any file here</p>
                <label htmlFor="image-upload" className={styles.customUpload}>
                  {/* <input type="text" name="image" id="image-upload" /> */}
                  <input
                    type="file"
                    name="image"
                    className={styles.backImage}
                    id="image-upload"
                  />
                  <span>
                    or <span className={styles.styleWord}>browser file</span>{" "}
                    from device
                  </span>
                </label>
              </div>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="first-name" className={styles.titleInput}>
            Full Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            className={styles.input}
            id="first-name"
            name="fullname"
          />
        </div>
        <div>
          <label htmlFor="type-activity" className={styles.titleInput}>
            Type activity
          </label>
          <input
            type="text"
            placeholder="Type activity"
            className={styles.input}
            id="type-activity"
            name="typeactivity"
          />
        </div>
        {/* <div className={styles.surname}>
               <label htmlFor="surname" className={styles.titleInput}>Surname</label>
               <input type="text" placeholder="Surname" className={styles.input} id="surname" />
            </div> */}
        <div>
          <label htmlFor="date-born" className={styles.titleInput}>
            Date born
          </label>
          <input
            type="date"
            placeholder="Date born"
            className={styles.input}
            id="date-born"
            name="birthday"
          />
        </div>
        <div>
          <label htmlFor="date-dead" className={styles.titleInput}>
            Date dead
          </label>
          <input
            type="date"
            placeholder="Date dead"
            className={styles.input}
            id="date-dead"
            name="deathdate"
          />
        </div>
        <div>
          <label htmlFor="place-born" className={styles.titleInput}>
            Place born
          </label>
          <input
            type="text"
            placeholder="Place born"
            className={styles.input}
            id="place-born"
            name="placeofbirth"
          />
        </div>
        <div>
          <label htmlFor="place-dead" className={styles.titleInput}>
            Place dead
          </label>
          <input
            type="text"
            placeholder="Place dead"
            className={styles.input}
            id="place-dead"
            name="placeofdeath"
          />
        </div>
        <div>
          <label htmlFor="genre" className={styles.titleInput}>
            Genre
          </label>
          <Select
            inputId="genre"
            name="genre"
            options={genre}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                minHeight: "34px",
                color: "#222B45",
                border: "1px solid #EFF4FA",
                width: "100%",
                borderRadius: "10px",
                marginTop: "5px",
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                color: "#222B45",
              }),
            }}
          />
        </div>
        <div>
          <label htmlFor="direction" className={styles.titleInput}>
            direction
          </label>
          <Select
            name="direction"
            inputId="direction"
            options={direction}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                minHeight: "34px",
                color: "#222B45",
                border: "1px solid #EFF4FA",
                width: "100%",
                borderRadius: "10px",
                marginTop: "5px",
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                color: "#222B45",
              }),
            }}
          />
        </div>
        <div>
          <label htmlFor="language" className={styles.titleInput}>
            language
          </label>
          <select
            name="languageworks"
            placeholder="Select language"
            className={styles.input}
            id="language"
          >
            <option value="Ukainian">Ukainian</option>
            <option value="Russian">Russian</option>
          </select>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.addButton} type="submit">
          Add Author
        </button>
        <div className={styles.closeModel} onClick={() => openModel(false)}>
          Cancel
        </div>
      </div>
    </form>
  );
}
