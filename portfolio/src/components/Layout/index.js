import Header from '../Header'
import './index.scss';

const Layout = () => {
    return (
        <>
            <Header />
            <section>
            <h1 className="text-white mb-4 text-6xl font-extrabold">
                Hello, I'm Jorge Fernández
            </h1>
            <p className="text-[#ADB7BE]">
                Researcher
            </p>
            </section>
        </>
    )
}

export default Layout