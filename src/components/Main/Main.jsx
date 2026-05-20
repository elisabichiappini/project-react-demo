import './Main.css';
import CardContacts from '../Cards/CardContacts.jsx';

const Main = () => {
    return (
        <main>
            <h1>Welcome to My App</h1>
            <p>This is the main content area.</p>
            <div className="cards">
                <CardContacts />
                <CardContacts />
            </div>
        </main>
    )
}

export default Main;