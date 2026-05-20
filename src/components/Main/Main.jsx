import './Main.css';
import CardContacts from '../Cards/CardContacts.jsx';
import CardDesc from '../Cards/CardDesc.jsx';

const Main = () => {
    return (
        <main>
            <h1>Welcome to My App</h1>
            <p>This is the main content area.</p>
            <div className="cards">
                <CardContacts style={{ maxWidth: '20%' }} />
                <CardContacts style={{ maxWidth: '20%' }} />
            </div>
            <CardDesc />
        </main>
    )
}

export default Main;