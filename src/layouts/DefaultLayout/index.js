import Header from '~/layouts/components/Header'
import Container from '~/layouts/components/Container'

function DefaultLayout({ children }) {
    return (
        <div>
        <Header />
        <div className="container">
            <Container/>
            <div className="content">{children}</div>
        </div>
    </div>
    )
    
}

export default DefaultLayout
