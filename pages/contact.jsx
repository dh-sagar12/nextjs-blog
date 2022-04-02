import React from 'react'
import { useState } from 'react'
import styles from '../styles/Contact.module.css'
import axios from 'axios';


const Contact = () => {
  const [DisplayMessage, setDisplayMessage] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!(ConData.message.length > 5) || !(ConData.email.length > 5) || !(ConData.name.length > 3)) {
      setDisplayMessage('Length of name > 3, Email> 5 and message> 5')
      setTimeout(() => {
        setDisplayMessage("")
      }, 3000);
    }
    else {
      try {
        const response = await axios.post('http://localhost:3000/api/contact', ConData);
        console.log(response);
        if (response.data) {
          let data = response.data
          setDisplayMessage(data.success);
          setTimeout(() => {
            setDisplayMessage("")
          }, 3000);
        }
      } catch (error) {
        setDisplayMessage(error)
        setTimeout(() => {
          setDisplayMessage("")
        }, 3000);

      }
    }
    setConData(
      {
        name: "",
        email: "",
        contact: "",
        message: ""
      }
    )

  }
  const [ConData, setConData] = useState({
    name: "",
    email: "",
    contact: "",
    message: ""
  })


  const handleOnchange = (e) => {
    let { name, value } = e.target
    setConData((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

  return (
    <div className={styles.container}>
      <div className={DisplayMessage.length> 1 ?`${styles.active} ${styles.message}`: `${styles.message}`} onTimeUpdate >{DisplayMessage}</div>
      <style jsx>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
      <h1>Contact</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder='Your Name' className={styles.input} value={ConData.name} onChange={handleOnchange} />
        <input type="email" name="email" id="email" placeholder='Your Email' className={styles.input} value={ConData.email} onChange={handleOnchange} />
        <input type="number" name="contact" id="contact" placeholder='Your Contact' className={styles.input} length={10} value={ConData.contact} onChange={handleOnchange} />
        <textarea name="message" id="" mincols="30" rows="4" placeholder='Your message' className={`${styles.input} , ${styles.textarea}`}  value={ConData.message} onChange={handleOnchange} />
        <button type="submit" className={styles.submit} >Submit</button>
      </form>
    </div>
  )
}

export default Contact 