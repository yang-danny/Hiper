import React from 'react'
import Card from "../../card/Card";
import Loader from "../../loader/Loader";
import styles from "./AddNews.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { db, storage } from "../../../firebase/config";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const initialState = {
    title: "",
    imageURL: "",
    newsText: "",
  };
const AddNews = () => {
    const [news, setNews] = useState('')
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNews({ ...news, [name]: value });
      };
      const handleImageChange = (e) => {
        const file= e.target.files[0]
        const storageRef = ref(storage, `images/${Date.now()}${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', 
      (snapshot) => {
       
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         setUploadProgress(progress);
      }, 
      (error) => {
        toast.error(error.message);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setNews({...news, imageURL:downloadURL})
        });
      }
    );
      }

      const addNews =(e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
          const docRef = addDoc(collection(db, "news"), {
            title: news.title,
            imageURL: news.imageURL,
           
            newsText: news.newsText,
            createdAt: Timestamp.now().toDate(),
          });
          setIsLoading(false);
          setUploadProgress(0);
          setNews({ ...initialState });
          navigate("/admin/publishedNews");
        } catch (error) {
          setIsLoading(false);
          toast.error(error.message);
        }
          }
  return (
    <> {isLoading && <Loader />}
    <div className={styles.addNews}>
    <h2>Add News</h2>
    <Card className={styles.card}>
    <form
     onSubmit={addNews}
    >
          <label>News Title:</label>
          <input
            type="text"
            required
            name="title"
            value={news.title || ''}
            onChange={(e) => handleInputChange(e)}
          />

          <label>News image:</label>
          <Card cardClass={styles.group}>
            {uploadProgress === 0 ? null : (
              <div className={styles.progress}>
                <div
                  className={styles["progress-bar"]}
                  style={{ width: `${uploadProgress}%` }}
                >
                  {uploadProgress < 100
                    ? `Uploading ${uploadProgress}`
                    : `Upload Complete ${uploadProgress}%`}
                </div>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              placeholder="News Image"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {news.imageURL === "" ? null : (
              <input
                type="text"
                placeholder="Image URL"
                name="imageURL"
                value={news.imageURL || ''}
                disabled
              />
            )}
          </Card>

          <label>News text</label>
          <textarea
            name="newsText"
            required
            value={news.newsText || ''}
            onChange={(e) => handleInputChange(e)}
            cols="30"
            rows="10"
          ></textarea>

          <button className="--btn --btn-primary">
            Publish
          </button>
        </form>
    </Card>
  </div>
  
  </>
  )
}

export default AddNews