import styles from './styles.module.css';
import { useState } from 'react';

const MessageBoard = () => {
  const [messages, setMessages] = useState([
    {
      name: 'John Doe',
      avatar: '/images/avatar01.jpg',
      message: 'Hello, World!',
    },
    {
      name: '清少納言',
      avatar: '/images/avatar01.jpg',
      message: '春はあけぼの、やうやう白くなりゆく山際、少し明かりて、紫だちたる雲の細くたなびきたる。',
    },
    {
      name: '太田牛一',
      avatar: '/images/avatar01.jpg',
      message: '此時、信長敦盛の舞を遊ばし候。人間五十年 下天の内をくらぶれば、夢幻のごとくなり。一度生を得て滅せぬ者のあるべきか、と候て、螺ふけ、具足よこせと仰せられ、御物具召され、たちながら御食をまいり、御甲めし候ひて御出陣なさる。',
    },
    {
      name: '夏目漱石',
      avatar: '/images/avatar01.jpg',
      message: '吾輩は猫である。名前はまだ無い。',
    },
    {
      name: 'Steve Jobs',
      avatar: '/images/avatar01.jpg',
      message: 'Stay hungry, stay foolish.',
    },
    {
      name: 'Bill Gates',
      avatar: '/images/avatar01.jpg',
      message: '成功は下手な教師だ。それは頭の良い人々を誘惑して、彼らが負けることはないと思い込ませる',
    },
  ]);

  return (
    <>
      <h2>Message Board</h2>
      <div className={styles.board}>
        {messages.map((message, index) => (
          <div className={styles.line} key={index}>
            <img src={message.avatar} alt="user" className={styles.avatar} />
            <p className={styles.message}>
              {message.message}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MessageBoard;
