import { createContext, useEffect, useState } from "react";
import { auth, db } from "../confiq/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { useNavigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";



export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [userData, setUserData] = useState(null)
  const [chatData, setChatData] = useState(null)
  const navigate = useNavigate()


  //To Fetch User Data By Uid
  const loadUserData = async (uid) => {
    try {
      const userRef = doc(db, 'users', uid)
      const userSnap = await getDoc(userRef)
      const userData = userSnap.data()
      setUserData(userData)
      // console.log("datss :", userData)
      if (userData.avatar && userData.name) {
        navigate('/chat')
      } else {
        navigate('/profile')
      }
      await updateDoc(userRef, {
        lastSeen: Date.now()
      })

      setInterval(async () => {
        if (auth.chatUser) {
          await updateDoc(userRef, {
            lastSeen: Date.now()
          })
        }
      }, 60000);
    } catch (error) {
      console.log(error)
    }
  }


  // useEffect(() => {
  //   if (userData) {
  //     const chatRef = doc(db, 'chats', userData.id);
  //     const unSub = onSnapshot(chatRef, async (res) => {
  //       if (res.exists()) {
  //         const chatItems = res.data().chatsData;
  //         const tempData = [];
  //         for (const item of chatItems) {
  //           const userRef = doc(db, 'users', item.rId);
  //           const userSnap = await getDoc(userRef);
  //           if (userSnap.exists()) {
  //             const userData = userSnap.data();
  //             tempData.push({ ...item, userData });
  //           }
  //         }
  //         setChatData(tempData.sort((a, b) => b.updatedAt - a.updatedAt));
  //       }
  //     });
  //     return () => {
  //       unSub();
  //     };
  //   }
  // }, [userData]);


  console.log("user Data :", userData)

  const value = {
    userData, setUserData,
    chatData, setChatData,
    loadUserData
  }




  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>

  )
}

export default AppContextProvider