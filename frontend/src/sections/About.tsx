import styles from "../styles/sections/About.module.css"

export default function About() {
    return (
        <section className={styles.about} id="about">
            <hr/>
            <h6 className="text_accent">BENEFICIOS</h6>
            <h1>Todo lo que necesitas en un solo lugar</h1>
            <p>Nuestra plataforma integra todas las herramientas esenciales para que puedas enfocarte en lo que más importa: la enseñanza;</p>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <i className="fa-solid fa-chalkboard-user"/>
                    <h3>Gestión</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium consectetur culpa debitis distinctio eum hic illo incidunt iusto magni, provident, qui quidem quisquam sequi similique sint tenetur voluptas voluptatum.</p></div>
                <div className={styles.card}>
                    <i className="fa-solid fa-chalkboard-user"/>
                    <h3>Gestión</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet natus nesciunt sapiente totam? Aperiam at distinctio, fugit laboriosam molestiae neque nobis quia sapiente sit suscipit. Eum harum maiores soluta!</p></div>
                <div className={styles.card}>
                    <i className="fa-solid fa-chalkboard-user"/>
                    <h3>Gestión</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus alias distinctio, dolorum eaque, eius eligendi esse eveniet explicabo ipsa minus neque nulla quis quos repudiandae tenetur velit voluptate!</p></div>
            </div>
            <div className={styles.impact}>
                <div className="">
                    <h3>Impacto en la comunidad</h3>
                    <p>Docentes de diversas universidades ya estan optimizando su día a día.</p>
                </div>
            </div>
        </section>
    )
}