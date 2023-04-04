import { deleteDoc, doc } from "firebase/firestore";
import { useEffect} from "react";
import { toast } from "react-toastify";
import { db, storage } from "../../../firebase/config";
import styles from "../viewProducts/ViewProducts.module.scss";
import {FaTrashAlt } from "react-icons/fa";
import Loader from "../../loader/Loader";
import { deleteObject, ref } from "firebase/storage";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import {STORE_NEWS, selectNews} from "../../../redux/slice/newsSlice"
import useFetchCollection from "../../../customHooks/useFetchCollection";

const PublishedNews = () => {
  const {data, isLoading} = useFetchCollection('news');
  const publishedNews = useSelector(selectNews)

  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(STORE_NEWS(data))
  }, [dispatch, data])
  const confirmDelete = (id, imageURL) => {
    Notiflix.Confirm.show(
      "Delete News!!!",
      "You are about to delete this product",
      "Delete",
      "Cancel",
      function okCb() {
        deleteNews(id, imageURL);
      },
      function cancelCb() {
        
      },
      {
        width: "320px",
        borderRadius: "3px",
        titleColor: "red",
        okButtonBackground: "red",
        cssAnimationStyle: "zoom",
      }
    );
  };
  const deleteNews =async(id, imageURL)=>{
    try {
      await deleteDoc(doc(db, "news", id));
      const storageRef = ref(storage, imageURL);
      await deleteObject(storageRef);
     
    } catch (error) {
      toast.error(error.message)
    }
    }
  return (
    <>
 {isLoading && <Loader />}
          <div className={styles.table}>
            {publishedNews.length === 0 ? (
              <p>No order found</p>
            ) : (
    <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {publishedNews.map((order, index) => {
                    const {
                      id, title, imageURL, createdAt
                    } = order;
                    return (
                      <tr key={id} >
                        <td>{index + 1}</td>
                        <td>
                        <img
                          src={imageURL}
                          alt={title}
                          style={{ width: "100px" }}
                        />
                        </td>
                        <td>{title}</td>
                      <td>{createdAt.toDate().toString().split('G')[0]}</td>
                      <td className={styles.icons}>

                        <FaTrashAlt
                          size={18}
                          color="red"
                     onClick={() => confirmDelete(id, imageURL)}
                        />
                      </td>
                      </tr>
                    );
                  })}
                </tbody>
             
            </table>
            )
}
       </div>
            
            </>
  )
}

export default PublishedNews