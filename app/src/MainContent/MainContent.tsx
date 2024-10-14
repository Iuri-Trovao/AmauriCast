import NewContents from "../components/NewsContents/NewsContents"
import "./MainContent.scss"
function MainContent() {
    return (
        <main className="ContentBody">
            <main className="MainContent">
                <section className="TituloPrincipal">
                    <h1 className="Titulo">AmauriCast</h1>
                </section>

                <section className="Content">
                    <article>
                        <NewContents></NewContents>
                    </article>
                    <article>
                        <NewContents></NewContents>
                    </article>
                    <article>
                        <NewContents></NewContents>
                    </article>
                    <article>
                        <NewContents></NewContents>
                    </article>
                    <article>
                        <NewContents></NewContents>
                    </article>
                    <article>
                        <NewContents></NewContents>
                    </article>
                    <article>
                        <NewContents></NewContents>
                    </article>
                    <article>
                        <NewContents></NewContents>
                    </article>
                </section>
                <iframe  src="https://open.spotify.com/embed/show/2seQNl1GCTae91QIEcbeWC?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    

            </main>
        </main>


    )
}

export default MainContent