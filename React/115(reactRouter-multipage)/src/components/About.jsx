import React from 'react';

function About() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>About Virat Kohli</h1>
            </header>
            <main style={styles.content}>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Early Life</h2>
                    <p style={styles.sectionContent}>
                        Virat Kohli was born on November 5, 1988, in Delhi, India. From a young age, Kohli showed 
                        a strong interest in cricket and joined the West Delhi Cricket Academy at the age of nine. 
                        His talent was evident from the start, and he quickly rose through the ranks in junior cricket.
                    </p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>International Debut</h2>
                    <p style={styles.sectionContent}>
                        Kohli made his international debut in August 2008 during an ODI against Sri Lanka. 
                        Although his start was modest, he soon established himself as a vital player for the Indian 
                        team, known for his aggressive batting style and ability to chase down targets.
                    </p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Captaincy</h2>
                    <p style={styles.sectionContent}>
                        Virat Kohli took over the captaincy of the Indian team in all formats in 2017. 
                        Under his leadership, India reached new heights, including a historic Test series win in Australia 
                        and consistently holding the top spot in the ICC Test rankings. Kohli is known for his fierce 
                        competitive spirit and his emphasis on fitness and discipline.
                    </p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Personal Life and Philanthropy</h2>
                    <p style={styles.sectionContent}>
                        Beyond cricket, Kohli is also known for his contributions to society. He founded the Virat Kohli Foundation, 
                        which focuses on helping underprivileged children and supporting young athletes. In 2017, Kohli married Bollywood 
                        actress Anushka Sharma, and the couple is often in the public eye, admired for their philanthropic efforts 
                        and positive influence on society.
                    </p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Legacy</h2>
                    <p style={styles.sectionContent}>
                        Virat Kohli's legacy in cricket is marked by his numerous records, his leadership qualities, and his 
                        unwavering dedication to the sport. He has inspired a generation of cricketers with his work ethic 
                        and commitment to excellence, and his name will undoubtedly be remembered among the all-time greats 
                        of the game.
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
        padding: '30px 20px',
    },
    title: {
        margin: 0,
        fontSize: '2.5em',
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
        textAlign: 'left',
        maxWidth: '800px',
        margin: '0 auto',
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

export default About;
