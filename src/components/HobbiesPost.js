import React from 'react';

const HobbiesPost = () => {
  const styles = {
    hobbiesContent: {
      maxWidth: '1100px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontSize: '1.1rem',
    },
    hobbiesHero: {
      textAlign: 'center',
      padding: '5rem 0 4rem',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'white',
      margin: '-3rem -4rem 6rem',
      borderRadius: '16px 16px 0 0',
      position: 'relative',
      overflow: 'hidden',
    },
    heroTitle: {
      fontSize: '3rem',
      marginBottom: '1rem',
      position: 'relative',
      zIndex: 1,
      textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      opacity: 0.9,
      position: 'relative',
      zIndex: 1,
    },
    hobbySection: {
      marginBottom: '6rem',
      padding: '4rem',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
    },
    hobbyHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    hobbyIcon: {
      fontSize: '3rem',
      width: '80px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '20px',
      color: 'white',
      boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
    },
    hobbyTitle: {
      fontSize: '2.5rem',
      color: '#333',
      margin: 0,
      letterSpacing: '0.03em',
    },
    hobbySubtitle: {
      color: '#666',
      fontSize: '1.1rem',
      marginTop: '0.3rem',
    },
    hobbyContent: {
      lineHeight: 2.2,
      color: '#444',
      fontSize: '1.2rem',
      textAlign: 'justify',
      letterSpacing: '0.02em',
    },
    paragraph: {
      marginBottom: '2.5rem',
    },
    quote: {
      borderLeft: '5px solid',
      paddingLeft: '2rem',
      margin: '3rem 0',
      fontStyle: 'italic',
      color: '#555',
      padding: '2rem 2.5rem',
      borderRadius: '0 12px 12px 0',
      fontSize: '1.15rem',
      lineHeight: '2',
    },
  };

  const hobbies = [
    {
      id: 'swimming',
      icon: '🏊',
      title: '游泳',
      subtitle: '在水中寻找内心的平静',
      color: '#00b4d8',
      darkColor: '#0077b6',
      bgColor: 'rgba(0, 180, 216, 0.05)',
      highlightBg: 'rgba(0, 180, 216, 0.2)',
      content: [
        '我从小生活在深圳，那是一个炎热的地方，理所当然<span>游泳成为了我的爱好之一</span>。小时候一套泳衣，一双泳镜，一个泳池，一天就过去了。长大以后，我才慢慢体会到水里隐藏的节奏。',
        '清晨第一缕阳光照在水面，整池像一块被切开的蓝玻璃，我把身体埋进去，耳边的世界一下子变得模糊，只剩下<span>心跳和气泡碎裂的声音</span>。来回几十趟，手掌一次次切开水的阻力，像在磨一块看不见的石头——它叫耐心。',
        'quote:水面之下没有喧嚣，只有节奏和自己，这种纯粹感成为我对抗压力的秘密工具。',
        '每当肌肉发酸、肺部灼痛，那种"再游一圈就上岸"的念头会冒出来；可我学会把视线钉在池底的黑线，告诉自己先到下一个转身点再说。<span>坚持的尺度，就是这样一米一米量出来的</span>。',
        '后来我在冬天也坚持下水，冷意像一层薄膜裹住皮肤，最初的喘息很凌乱，可当身体逐渐适应，我会觉得所有杂念被冻在岸上。希望游泳能让未来的我在这个荒诞的世界里<span>保持一颗纯粹的心</span>。'
      ]
    },
    {
      id: 'basketball',
      icon: '🏀',
      title: '篮球',
      subtitle: '在球场上学会洞察与协作',
      color: '#ff6b35',
      darkColor: '#e63946',
      bgColor: 'rgba(255, 107, 53, 0.05)',
      highlightBg: 'rgba(255, 107, 53, 0.2)',
      content: [
        '我喜欢业余的时候和朋友打篮球，篮球是我最喜欢的竞技类运动。因为我可以在场上"偷懒"，再趁别人不注意偷几个球。所谓"偷懒"，其实是一种<span>留白</span>。',
        '我会故意慢两步，让自己跳出那团混战，用余光观察：谁的脚步开始拖，谁的胳膊已经抬不起来，球的线路下一秒可能出现的缝隙。等对手体力被节奏拖散，我再突然前插伸手一抹，球就像被吸走一样。那一瞬间获得的不只是球权，还有<span>对局势的掌控感</span>。',
        'quote:篮球带给我的，是在高速决策中的判断力与临场修复能力。',
        '久而久之，我懂得团队里的角色分工：有人负责爆发，有人负责串联，我则在缝隙里做"重写剧本"的人。输了球也不急躁，我们会在场边复盘：挡拆角度、传球时机、站位层次。',
        '后来我尝试组织陌生人拼场，才意识到<span>沟通本身也是技术</span>：一句简单的"换防""延误"能让五个人连成一个整体。那些在球场上练出的洞察、节奏感与信任给予了我很多成就和满足感。但是慢慢的我的生活就被各种事情挤满了，那颗热爱篮球的心也慢慢黯淡。'
      ]
    },
    {
      id: 'guitar',
      icon: '🎸',
      title: '吉他',
      subtitle: '用音乐调频内心的情绪',
      color: '#8b5cf6',
      darkColor: '#7c3aed',
      bgColor: 'rgba(139, 92, 246, 0.05)',
      highlightBg: 'rgba(139, 92, 246, 0.2)',
      content: [
        '最开始了解音乐是读一本书，讲了一个北极探险小队在北极求生的故事。因为突发的事故，他们舍弃了船，食物，但是唯独没有舍弃乐器。最后随着音乐的陪伴他们冲出了北极，无一人死亡。',
        '随后我差不多短短续续学了两年古典和民谣吉他，参加了几场校内的演出。吉他最吸引我的地方是<span>这个旋律能让我忘记烦恼，激活心里的能量</span>。我最喜欢的是摇滚音乐和 R&B：摇滚的失真能带来巨大的冲击，让我面对生活中的磨难；R&B 优美的和弦进行又让我沉入细腻情绪。',
        'quote:音乐没有替我解决问题，却像一枚内置调音器，让我在情绪失衡时重新校准频率，继续向前。',
        '练琴的过程并不浪漫：指尖起泡、节拍器冷冰冰地敲着、一个滑音反复拆成四五个动作慢慢合上。可当一首歌第一次被我完整推到尾声，像搭了很久的一座木桥终于可以走过去，<span>那种成就感会抵消所有枯燥</span>。',
        '后来我开始尝试即兴与编配，把生活里的碎片情绪放进和弦：某次失败后的沮丧是一串下行小调，期末夜的孤独是延音踏板里慢慢散开的泛音。'
      ]
    },
    {
      id: 'weiqi',
      icon: '⚫',
      title: '围棋',
      subtitle: '在黑白之间悟道人生',
      color: '#10b981',
      darkColor: '#059669',
      bgColor: 'rgba(16, 185, 129, 0.05)',
      highlightBg: 'rgba(16, 185, 129, 0.2)',
      content: [
        '我从六岁的时候就开始下围棋了，这应该是我最喜欢的业余活动。围棋可能是最能代表中国文化的运动：<span>阴阳之道、盛极必衰、一切道韵都蕴含在十九路黑白之间</span>。',
        '年幼的我只图痛快，见到对方弱点就一头扎进去，恨不得把整片棋吃干抹净。后来被老师一句"得势失地"点醒：局部的狂喜常常换来全局的崩塌。于是我学会放慢呼吸，先判断整体势，再决定落子。',
        'quote:每一子落下，都在追问：此刻的选择，是逞一时之勇，还是服务于更辽阔的全局？',
        '输棋时最难熬，尤其是辛苦经营的厚势被对手轻飘飘一个挖断化成碎片。失落曾让我想推盘离开，可复盘仪式逼我直视失败：哪一步贪心、哪一步多手、哪个劫争读秒时心态崩掉。一次次标注错误，我慢慢能在混乱局面里看到另一条隐形线路——<span>补一手厚、退半步形；未来就有反击空间</span>。',
        '围棋把"盛极必衰"和"柳暗花明"具体化：一块棋过度扩张必被切断，一块看似被围死的残形若利用劫材周旋仍可能翻盘。更重要的是，它训练了时间的尺度感：<span>当下一手并非为了立即得分，而是为几十手后的厚势埋伏笔</span>。',
        '多年下来，棋盘成了我与自我对照的镜子。能诚实地回答这个问题的时刻，便是我真正成长的刻度。'
      ]
    }
  ];

  const renderContent = (content, highlightBg) => {
    return content.map((item, index) => {
      if (item.startsWith('quote:')) {
        return (
          <div key={index} style={styles.quote}>
            {item.substring(6)}
          </div>
        );
      }
      
      const parts = item.split(/<span>|<\/span>/);
      return (
        <p key={index} style={styles.paragraph}>
          {parts.map((part, i) => 
            i % 2 === 1 ? (
              <span key={i} style={{
                background: `linear-gradient(120deg, ${highlightBg} 0%, ${highlightBg} 100%)`,
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                fontWeight: '500',
              }}>
                {part}
              </span>
            ) : part
          )}
        </p>
      );
    });
  };

  return (
    <div style={styles.hobbiesContent}>
      <div style={styles.hobbiesHero}>
        <h1 style={styles.heroTitle}>我的爱好与习惯</h1>
        <p style={styles.heroSubtitle}>塑造人生的点点滴滴</p>
      </div>
      
      {hobbies.map((hobby) => (
        <div key={hobby.id} style={{
          ...styles.hobbySection,
          borderLeft: `5px solid ${hobby.color}`,
        }}>
          <div style={styles.hobbyHeader}>
            <div style={{
              ...styles.hobbyIcon,
              background: `linear-gradient(135deg, ${hobby.color} 0%, ${hobby.darkColor} 100%)`,
            }}>
              {hobby.icon}
            </div>
            <div>
              <h2 style={styles.hobbyTitle}>{hobby.title}</h2>
              <p style={styles.hobbySubtitle}>{hobby.subtitle}</p>
            </div>
          </div>
          <div style={styles.hobbyContent}>
            {renderContent(hobby.content, hobby.highlightBg)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HobbiesPost;