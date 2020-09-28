import React from 'react'

import chat from '../../assets/chat.png'
import apple from '../../assets/apple.svg'
import google from '../../assets/google.svg'
import together from '../../assets/together.svg'
import translate from '../../assets/translate.svg'
import camera from '../../assets/camera.svg'
import emoji from '../../assets/emoji.svg'

import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <img src={chat} />
        <ul className={styles.list}>
          <li>Why?</li>
          <li>Features</li>
          <li>Privacy & Safety</li>
        </ul>
      </div>
      <div className={styles.sectionone}>
        <div className={styles.heading}>
          <h1>
            Stay connected
            <br />
            forever.
          </h1>
          <h6>
            You no longer have to lose contact with your sponsor child after they graduate.
            Compassion has developed a chat app for sponsors to say connected with their beneficiary
            child.
          </h6>
          <form>
            <input placeholder='Email Address' />
            <input placeholder='Sponsor Id No.' />
            <button>Sign Up</button>
          </form>
          <div className={styles.downloads}>
            <img src={apple} />
            <img src={google} />
          </div>
        </div>
        <img src={together} />
      </div>
      <div className={styles.sectiontwo}>
        <h1>Connect whenever in various ways</h1>
        <div className={styles.methods}>
          <div>
            <img src={translate} />
            <h4>Don't worry about translation</h4>
            <h6>
              Our chat app translates your language to the language of your sponsor child and vice
              versa.
            </h6>
          </div>
          <div>
            <img src={camera} />
            <h4>Share photos and videos</h4>
            <h6>
              Easily show your sponsor child pictures or videos from your hike or something you did
              from the day.
            </h6>
          </div>
          <div>
            <img src={emoji} />
            <h4>Use fun emojis</h4>
            <h6>Make them laugh with stickers and GIFs!</h6>
          </div>
        </div>
      </div>
      <div className={styles.footer}>© 2020 Compassion International. All Rights Reserved.</div>
    </div>
  )
}

export default Home
