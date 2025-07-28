import React from 'react';

const EducationPost = () => {
  const styles = {
    educationContent: {
      maxWidth: '1000px',
      margin: '0 auto',
      lineHeight: '2',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontSize: '1.1rem',
    },
    educationHeader: {
      textAlign: 'center',
      padding: '4rem 0 3rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      margin: '-3rem -4rem 5rem',
      borderRadius: '16px 16px 0 0',
    },
    headerTitle: {
      fontSize: '3rem',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
      letterSpacing: '0.05em',
    },
    headerSubtitle: {
      fontSize: '1.2rem',
      opacity: '0.9',
    },
    timeline: {
      position: 'relative',
      paddingLeft: '40px',
    },
    timelineLine: {
      content: '""',
      position: 'absolute',
      left: '10px',
      top: '0',
      bottom: '0',
      width: '2px',
      background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
    },
    educationItem: {
      position: 'relative',
      marginBottom: '4rem',
      padding: '3rem',
      background: '#f8f9fa',
      borderRadius: '12px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    itemDot: {
      content: '""',
      position: 'absolute',
      left: '-34px',
      top: '2rem',
      width: '16px',
      height: '16px',
      background: '#667eea',
      borderRadius: '50%',
      border: '3px solid white',
      boxShadow: '0 0 0 2px #667eea',
    },
    schoolName: {
      fontSize: '1.8rem',
      color: '#333',
      marginBottom: '1rem',
      fontWeight: '600',
      letterSpacing: '0.02em',
    },
    schoolPeriod: {
      color: '#666',
      fontSize: '1rem',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    schoolDescription: {
      color: '#444',
      lineHeight: '2',
      fontSize: '1.15rem',
      letterSpacing: '0.02em',
      textAlign: 'justify',
    },
    schoolLocation: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3rem',
      color: '#777',
      fontSize: '0.95rem',
      marginTop: '0.5rem',
    },
    highlight: {
      background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
      padding: '0.2rem 0.4rem',
      borderRadius: '4px',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.educationContent}>
      <div style={styles.educationHeader}>
        <h1 style={styles.headerTitle}>我的教育之旅</h1>
        <p style={styles.headerSubtitle}>从深圳到加州，一路成长</p>
      </div>
      
      <div style={styles.timeline}>
        <div style={styles.timelineLine}></div>
        
        <div style={styles.educationItem}>
          <div style={styles.itemDot}></div>
          <h2 style={styles.schoolName}>南山区北大附中深圳南山分校</h2>
          <div style={styles.schoolPeriod}>📅 初中时光</div>
          <p style={styles.schoolDescription}>
            在这里度过了我的初中三年。北大附中深圳南山分校是一所充满活力的学校，这里不仅有严谨的学术氛围，更有丰富多彩的课外活动。在这里，我开始了对<span style={styles.highlight}>数学</span>和<span style={styles.highlight}>科学</span>的深入探索，也培养了独立思考的能力。
          </p>
          <div style={styles.schoolLocation}>📍 深圳市南山区</div>
        </div>
        
        <div style={styles.educationItem}>
          <div style={styles.itemDot}></div>
          <h2 style={styles.schoolName}>深圳市高级中学</h2>
          <div style={styles.schoolPeriod}>📅 高中岁月</div>
          <p style={styles.schoolDescription}>
            深圳市高级中学是深圳最优秀的高中之一。在这里的三年，我不仅在学术上取得了优异的成绩，更重要的是学会了如何平衡学习与生活。参加了<span style={styles.highlight}>编程社团</span>和<span style={styles.highlight}>数学竞赛</span>，这些经历为我后来选择计算机科学专业奠定了基础。高强度的学习环境锻炼了我的抗压能力和时间管理技巧。
          </p>
          <div style={styles.schoolLocation}>📍 深圳市福田区</div>
        </div>
        
        <div style={styles.educationItem}>
          <div style={styles.itemDot}></div>
          <h2 style={styles.schoolName}>UC Davis</h2>
          <div style={styles.schoolPeriod}>📅 大学 - 现在进行时</div>
          <p style={styles.schoolDescription}>
            目前就读于加州大学戴维斯分校，主修<span style={styles.highlight}>计算机科学</span>与<span style={styles.highlight}>经济学</span>双学位。UC Davis不仅给了我世界一流的教育资源，更让我体验了多元化的文化环境。在这里，我学会了用全球化的视角看待问题，也在各种项目中锻炼了团队协作能力。从深圳到加州，这段跨越太平洋的求学之旅让我成长为一个更加独立、自信的人。
          </p>
          <div style={styles.schoolLocation}>📍 加州戴维斯</div>
        </div>
      </div>
    </div>
  );
};

export default EducationPost;