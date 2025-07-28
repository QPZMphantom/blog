import React from 'react';

const SpringQuarterPost = () => {
  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      lineHeight: '2',
      backgroundColor: '#f9f9f9',
      color: '#333',
      padding: '3rem',
      fontSize: '1.1rem',
      letterSpacing: '0.02em',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    h1: {
      color: '#0077cc',
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
      letterSpacing: '0.03em',
    },
    h2: {
      color: '#0077cc',
      fontSize: '1.8rem',
      marginTop: '2rem',
      marginBottom: '1.2rem',
    },
    section: {
      marginBottom: '3.5rem',
    },
    ul: {
      marginLeft: '2rem',
      lineHeight: '2',
    },
    p: {
      marginBottom: '1.5rem',
      textAlign: 'justify',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>2025 Spring Quarter Course Reflections</h1>
      <p><strong>Courses:</strong> STA108, ECN140, ECN162, ECN190, PSC150V</p>

      <section style={styles.section}>
        <h2 style={styles.h2}>STA108 - Regression Analysis</h2>
        <p style={styles.p}>This course provided a deep understanding of linear regression, model selection techniques (AIC, BIC, PRESS), and diagnostics. I particularly appreciated learning how to interpret multicollinearity, residual plots, and variable transformations in R. The final project involved building and validating a multiple regression model, which was an excellent hands-on experience.</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>ECN140 - Econometrics</h2>
        <p style={styles.p}>ECN140 reinforced many statistical principles while introducing key econometric concepts such as OLS assumptions, omitted variable bias, and instrumental variables. The homework assignments were rigorous but rewarding, helping me apply theory to real-world datasets using Stata and LaTeX.</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>ECN162 - International Trade</h2>
        <p style={styles.p}>This course covered classic and modern trade theories including Ricardian, Heckscher-Ohlin, and gravity models. I especially enjoyed the midterm preparation which helped clarify comparative advantage and strategic trade policy. Presentations on current trade issues sharpened my ability to relate theory to policy debates.</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>ECN190 - Special Topics: AI & The Economy</h2>
        <p style={styles.p}>Through case studies and group presentations, we explored how artificial intelligence is transforming labor markets, productivity, and inequality. Our team presentation focused on AI's impact on global trade and unemployment, which expanded my understanding of technological disruption from both an economic and policy angle.</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>PSC150V - The Psychology of Love</h2>
        <p style={styles.p}>As a general education course, PSC150V was refreshing. We discussed attachment theory, intimacy, and romantic relationships through both psychological research and real-world examples. Weekly reflections and movie analyses encouraged emotional insight and communication skills.</p>
      </section>

      <p style={styles.p}>Overall, Spring 2025 was one of my most intellectually fulfilling quarters. It balanced rigorous quantitative analysis with human-centered learning and creativity.</p>
    </div>
  );
};

export default SpringQuarterPost;