import React from 'react';

function Home() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Virat Kohli: The Run Machine</h1>
                <p style={styles.subtitle}>A Journey Through the Career of One of Cricket's Greatest</p>
            </header>
            <main style={styles.content}>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>About Virat Kohli</h2>
                    <p style={styles.sectionContent}>
                        Virat Kohli, born on November 5, 1988, in Delhi, India, is an iconic Indian cricketer 
                        and former captain of the Indian national team. Renowned for his batting prowess and 
                        aggressive style, Kohli is often regarded as one of the greatest batsmen in the history of cricket.
                    </p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Career Highlights</h2>
                    <ul style={styles.featureList}>
                        <li style={styles.featureItem}>Fastest to 10,000 ODI runs</li>
                        <li style={styles.featureItem}>Leading run-scorer in T20 Internationals</li>
                        <li style={styles.featureItem}>Most double centuries by an Indian in Tests</li>
                        <li style={styles.featureItem}>Captained India to the ICC World Test Championship final</li>
                    </ul>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Awards and Accolades</h2>
                    <p style={styles.sectionContent}>
                        Kohli has received numerous awards for his contributions to cricket, including:
                    </p>
                    <ul style={styles.featureList}>
                        <li style={styles.featureItem}>ICC Cricketer of the Year</li>
                        <li style={styles.featureItem}>Padma Shri - India’s fourth highest civilian award</li>
                        <li style={styles.featureItem}>Rajiv Gandhi Khel Ratna - India’s highest sporting honor</li>
                    </ul>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Personal Life</h2>
                    <p style={styles.sectionContent}>
                        Off the field, Virat Kohli is married to Bollywood actress Anushka Sharma, 
                        and they have a daughter named Vamika. Kohli is known for his fitness regime 
                        and has inspired many young athletes with his dedication to maintaining peak physical condition.
                    </p>
                </section>
            </main>
            <footer style={styles.footer}>
                <p>&copy; 2024 Virat Kohli Fan Club. All rights reserved.</p>
            </footer>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
    header: {
        backgroundColor: '#1E90FF',
        color: 'white',
        padding: '50px 20px',
    },
    title: {
        margin: 0,
        fontSize: '2.5em',
    },
    subtitle: {
        marginTop: '10px',
        fontSize: '1.2em',
    },
    content: {
        padding: '20px',
    },
    section: {
        margin: '20px 0',
    },
    sectionTitle: {
        fontSize: '1.8em',
        marginBottom: '10px',
    },
    sectionContent: {
        fontSize: '1em',
        lineHeight: '1.5',
    },
    featureList: {
        listStyleType: 'none',
        padding: 0,
    },
    featureItem: {
        backgroundColor: '#e0e0e0',
        margin: '5px 0',
        padding: '10px',
        borderRadius: '5px',
    },
    footer: {
        backgroundColor: '#333',
        color: 'white',
        padding: '10px 0',
        position: 'fixed',
        width: '100%',
        bottom: 0,
    },
};

export default Home;
